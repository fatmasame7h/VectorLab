import { useMemo, useState, type ReactNode } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Segmented from '../components/ui/Segmented';
import StepsView from '../components/calc/StepsView';
import { AngleUnitToggle, Field, PointForm, SelectField, VectorForm } from '../components/calc/forms';
import { btnGhost, btnPrimary } from '../components/calc/CalcShell';
import { COORD_SYMBOL, SURFACE_COORDS, type SurfaceSystem } from '../engines/surfaces/coordinateSurfaces';
import type { System } from '../engines/coordinates';
import { useFmt, useSettings } from '../context/SettingsContext';
import { useWorkspace, type WorkItem } from '../context/WorkspaceContext';
import { rangeHint, type Sym } from '../utils/limits';
import type { VectorState } from '../utils/inputs';
import Scene3D from '../visualization/Scene3D';
import { OBJ_LABEL, OBJ_TYPES, autoExtent, buildReport, buildShapes, csurfaceDefaults, defaultParams, type CSurfaceParams, type DrawOpts, type ObjType } from '../visualization/builders';
import { PALETTE, type SceneOptions, type SceneShape } from '../visualization/types';

const clone = <T,>(x: T): T => JSON.parse(JSON.stringify(x));
const SYS_NAME: Record<System, string> = { cartesian: 'Cartesian (u_x, u_y, u_z)', cylindrical: 'Cylindrical (u_ρ, u_φ, u_z)', spherical: 'Spherical (u_r, u_θ, u_φ)' };

function Check({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: ReactNode }) {
  return <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />{children}</label>;
}
function SystemChecks({ title, value, onChange }: { title: string; value: Record<System, boolean>; onChange: (v: Record<System, boolean>) => void }) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-medium">{title}</p>
      {(Object.keys(SYS_NAME) as System[]).map((s) => <Check key={s} checked={value[s]} onChange={(c) => onChange({ ...value, [s]: c })}>{SYS_NAME[s]}</Check>)}
    </div>
  );
}
function OptionsFields({ opts, onChange, kind }: { opts: DrawOpts; onChange: (o: DrawOpts) => void; kind: 'point' | 'vector' }) {
  return (
    <div className="space-y-3 rounded-xl border border-line p-3">
      <p className="text-xs text-muted">{kind === 'point' ? 'The point is always drawn in all three systems: x, y, z · ρ, φ, z · r, θ, φ.' : 'The point where the vector starts is always shown in all three systems.'}</p>
      {kind === 'point' && <SystemChecks title="Show unit directions at the point" value={opts.local} onChange={(local) => onChange({ ...opts, local })} />}
      {kind === 'vector' && <SystemChecks title="Show the vector's components in" value={opts.comps} onChange={(comps) => onChange({ ...opts, comps })} />}
    </div>
  );
}

/** Vector input: it starts at the origin by default; a start point is asked only for cylindrical / spherical components. */
function VectorInput({ value, onChange, title }: { value: VectorState; onChange: (v: VectorState) => void; title: string }) {
  const change = (v: VectorState) => {
    const zero = (s: string) => s.trim() === '0' || s.trim() === '';
    const fresh = v.system !== 'cartesian' && value.system === 'cartesian' && zero(v.pt.a) && zero(v.pt.b) && zero(v.pt.c);
    onChange(fresh ? { ...v, pt: { system: 'cartesian', a: '1', b: '1', c: '1' } } : v);
  };
  return (
    <div className="space-y-2">
      <VectorForm title={title} value={value} onChange={change} showPoint={value.system !== 'cartesian'} pointTitle="Point of application" />
      <p className="text-xs text-muted">{value.system === 'cartesian' ? 'The vector starts at the origin.' : 'Cylindrical and spherical components need the point where the vector is applied.'}</p>
    </div>
  );
}

function CSurfaceFields({ p, onChange }: { p: CSurfaceParams; onChange: (p: CSurfaceParams) => void }) {
  const { angleUnit } = useSettings();
  const pick = (system: SurfaceSystem, coord: string) => onChange({ ...p, system, coord, ...csurfaceDefaults(coord, angleUnit) });
  const sym = COORD_SYMBOL[p.coord];
  const hint = (['ρ', 'r', 'θ', 'φ'] as string[]).includes(sym) ? rangeHint(sym as Sym, angleUnit) : undefined;
  return (
    <div className="space-y-3">
      <SelectField label="Coordinate system" value={p.system} onChange={(s) => pick(s, SURFACE_COORDS[s][0])} options={(['cartesian', 'cylindrical', 'spherical'] as SurfaceSystem[]).map((s) => ({ value: s, label: s[0].toUpperCase() + s.slice(1) }))} />
      <SelectField label="Constant coordinate" value={p.coord} onChange={(c) => pick(p.system, c)} options={SURFACE_COORDS[p.system].map((c) => ({ value: c, label: `${COORD_SYMBOL[c]} = c` }))} />
      <div className="flex items-end gap-3"><div className="flex-1"><Field label={`Constant c  (${COORD_SYMBOL[p.coord]} = c)`} hint={hint} value={p.c} onChange={(c) => onChange({ ...p, c })} /></div>{(p.coord === 'phi' || p.coord === 'theta') && <AngleUnitToggle />}</div>
      <VectorInput title="Vector" value={p.v} onChange={(v) => onChange({ ...p, v })} />
      <p className="text-xs text-muted">The surface is drawn with its parallel (tangent) plane and its perpendicular (normal) at the point of the surface closest to the tip of the vector, and the vector is split into its perpendicular and parallel parts.</p>
    </div>
  );
}

export default function Visualizer() {
  const { items, setItems } = useWorkspace();
  const { mode, setMode, angleUnit } = useSettings();
  const f = useFmt();
  const [type, setType] = useState<ObjType>('point');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [params, setParams] = useState<any>(defaultParams('point'));
  const [editing, setEditing] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [opts, setOpts] = useState<SceneOptions>({ axes: true, grid: true, labels: true, projections: false });
  const [counter, setCounter] = useState(1);
  const ctx = { f, unit: angleUnit };

  const changeType = (t: ObjType) => { setType(t); setParams(defaultParams(t)); setEditing(null); setError(null); };
  const draw = () => {
    try {
      if (editing) {
        const it = items.find((i) => i.id === editing)!;
        setItems((l) => l.map((i) => (i.id === editing ? { ...i, params: clone(params), type, shapes: buildShapes(type, params, it.name, ctx) } : i)));
        setSelected(editing); setEditing(null);
      } else {
        const name = `${type === 'csurface' ? 'Surface' : OBJ_LABEL[type]} ${counter}`;
        const shapes = buildShapes(type, params, name, ctx);
        const id = `o${Date.now()}`;
        setItems((l) => [...l, { id, name, color: PALETTE[(counter - 1) % PALETTE.length], visible: true, type, params: clone(params), shapes }]);
        setSelected(id); setCounter(counter + 1);
      }
      setError(null);
    } catch (e) { setError(e instanceof Error ? e.message : String(e)); }
  };
  const patch = (id: string, p: Partial<WorkItem>) => setItems((l) => l.map((i) => (i.id === id ? { ...i, ...p } : i)));
  const rename = (it: WorkItem, name: string) => {
    let shapes = it.shapes;
    if (it.params && it.type !== 'imported') { try { shapes = buildShapes(it.type, it.params, name, ctx); } catch { /* keep old shapes */ } }
    patch(it.id, { name, shapes });
  };
  const recolor = (it: WorkItem, color: string) => patch(it.id, { color, shapes: it.type === 'imported' ? it.shapes.map((s) => ({ ...s, color })) : it.shapes });
  const edit = (it: WorkItem) => { if (it.type === 'imported' || !it.params) return; setType(it.type); setParams(clone(it.params)); setEditing(it.id); setSelected(it.id); setError(null); };

  const shapes: SceneShape[] = items.filter((i) => i.visible).flatMap((i) => i.shapes.map((s) => ({ ...s, color: s.color ?? i.color }) as SceneShape));
  const sel = items.find((i) => i.id === selected);
  const report = useMemo(() => {
    if (!sel || sel.type === 'imported' || !sel.params) return null;
    try { return { r: buildReport(sel.type, sel.params, ctx) }; } catch (e) { return { err: e instanceof Error ? e.message : String(e) }; }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sel, angleUnit, f.precision]);
  const tog = (k: keyof SceneOptions, label: string) => <Check key={k} checked={opts[k]} onChange={(c) => setOpts({ ...opts, [k]: c })}>{label}</Check>;

  return (
    <>
      <PageHeader title="3D Visualizer" subtitle="Draw a point or a vector in every coordinate system, or a constant surface with its normal and tangent plane." />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
        <div className="order-2 space-y-4 lg:order-1">
          <Card className="space-y-3">
            <SelectField label="What do you want to draw?" value={type} onChange={changeType} options={OBJ_TYPES.map((t) => ({ value: t, label: OBJ_LABEL[t] }))} />
            {type === 'point' && <><PointForm title="Point" value={params.pt} onChange={(pt) => setParams({ ...params, pt })} /><OptionsFields kind="point" opts={params.opts} onChange={(o) => setParams({ ...params, opts: o })} /></>}
            {type === 'vector' && <><VectorInput title="Vector" value={params.v} onChange={(v) => setParams({ ...params, v })} /><OptionsFields kind="vector" opts={params.opts} onChange={(o) => setParams({ ...params, opts: o })} /></>}
            {type === 'csurface' && <CSurfaceFields p={params} onChange={setParams} />}
            {error && <p role="alert" className="rounded-lg bg-red-500/10 p-2 text-sm">{error}</p>}
            <div className="flex gap-2">
              <button className={btnPrimary} onClick={draw}>{editing ? 'Update' : 'Draw'}</button>
              {editing && <button className={btnGhost} onClick={() => changeType(type)}>Cancel edit</button>}
            </div>
          </Card>
          <Card className="space-y-2">
            <div className="flex items-center justify-between"><h3 className="font-semibold">Objects ({items.length})</h3>
              {items.length > 0 && <button className="text-sm text-accent" onClick={() => { setItems([]); setEditing(null); setSelected(null); }}>Clear workspace</button>}</div>
            {items.length === 0 && <p className="text-sm text-muted">The workspace is empty. Choose what to draw and press Draw.</p>}
            {items.map((it) => (
              <div key={it.id} className={`flex flex-wrap items-center gap-2 rounded-lg border p-2 ${selected === it.id ? 'border-accent' : 'border-line'}`}>
                <input type="checkbox" checked={it.visible} onChange={(e) => patch(it.id, { visible: e.target.checked })} aria-label={`Show ${it.name}`} />
                <input type="color" value={it.color} onChange={(e) => recolor(it, e.target.value)} aria-label={`Color of ${it.name}`} className="h-7 w-7 rounded border border-line bg-transparent" />
                <input value={it.name} onChange={(e) => rename(it, e.target.value)} onFocus={() => setSelected(it.id)} aria-label="Object name" className="min-w-0 flex-1 rounded border border-line bg-surface px-2 py-1 text-sm" />
                <button className="text-sm text-accent disabled:opacity-40" disabled={it.type === 'imported'} onClick={() => edit(it)}>Edit</button>
                <button className="text-sm text-red-500" onClick={() => { setItems((l) => l.filter((i) => i.id !== it.id)); if (editing === it.id) setEditing(null); }}>Delete</button>
              </div>))}
          </Card>
          <Card className="grid grid-cols-2 gap-2">{tog('axes', 'Axes')}{tog('grid', 'Grid')}{tog('labels', 'Labels')}{tog('projections', 'Projections')}</Card>
        </div>
        <div className="order-1 min-w-0 space-y-4 lg:order-2">
          <Scene3D shapes={shapes} options={opts} height={540} extent={autoExtent(shapes)} />
          {report && (
            <Card className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-semibold">Details: {sel?.name}</h2>
                <Segmented label="Display" value={mode} onChange={setMode} options={[{ value: 'answer', label: 'Final answer' }, { value: 'steps', label: 'Full solution' }]} />
              </div>
              {report.err && <p role="alert" className="rounded-lg bg-red-500/10 p-2 text-sm">{report.err}</p>}
              {report.r && (mode === 'answer'
                ? <dl className="space-y-1">{report.r.answer.map((a, i) => <div key={i} className="grid gap-1 sm:grid-cols-[210px_1fr]"><dt className="text-sm text-muted">{a.label}</dt><dd className="break-words font-mono text-sm">{a.value}</dd></div>)}</dl>
                : <StepsView steps={report.r.steps} />)}
            </Card>)}
        </div>
      </div>
    </>
  );
}
