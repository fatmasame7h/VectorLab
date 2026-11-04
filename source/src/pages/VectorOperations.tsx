import CalcShell, { type CalcResult } from '../components/calc/CalcShell';
import { AngleUnitToggle, Field, PointForm, SYSTEMS, SYSTEM_NAME, SelectField, VectorForm, defaultVector, parsePointState, parseVectorState, type PointState, type VectorState } from '../components/calc/forms';
import { solution } from '../components/calc/steps';
import { angleArc, perpendicularUnit } from '../engines/geometry';
import { basisAt, convertVector, vectorToCartesian } from '../engines/vectors/basis';
import { angleBoth, angleCosine, angleSine, crossProduct, dotByAngle, dotProduct, magnitude, unitVector } from '../engines/vectors/ops';
import { add, scale, sub, type Vec3 } from '../engines/vectors/vec3';
import type { System } from '../engines/coordinates';
import { useFmt, useSettings } from '../context/SettingsContext';
import { usePageForm } from '../hooks/usePageForm';
import { checkRange } from '../utils/limits';
import { angleIn, num } from '../utils/parse';
import type { SceneShape } from '../visualization/types';
import { C, extentOf, fmtPoint } from './helpers';

type Op = 'add' | 'sub' | 'dot' | 'cross' | 'mag' | 'unit' | 'angle';
interface Form {
  op: Op; A: VectorState; B: VectorState; pt: PointState; outSys: System;
  magOnlyA: boolean; magOnlyB: boolean; magA: string; magB: string; theta: string;
}
const OPS: { value: Op; label: string }[] = [
  { value: 'add', label: 'Vector addition' }, { value: 'sub', label: 'Vector subtraction' }, { value: 'dot', label: 'Dot product' },
  { value: 'cross', label: 'Cross product' }, { value: 'mag', label: 'Magnitude' }, { value: 'unit', label: 'Unit vector' }, { value: 'angle', label: 'Angle between two vectors' },
];
const VECTOR_RESULT: Op[] = ['add', 'sub', 'cross', 'unit'];
const initialForm = (): Form => ({ op: 'add', A: defaultVector(), B: { ...defaultVector(), a: '4', b: '-5', c: '6' }, pt: { system: 'cartesian', a: '1', b: '1', c: '1' }, outSys: 'cartesian',
  magOnlyA: false, magOnlyB: false, magA: '5', magB: '4', theta: '' });

export default function VectorOperations() {
  const { form, set, setForm, restored } = usePageForm<Form>(initialForm);
  const f = useFmt();
  const { angleUnit } = useSettings();
  const isDot = form.op === 'dot';
  const needB = ['add', 'sub', 'cross', 'angle', 'dot'].includes(form.op);
  const vecOut = VECTOR_RESULT.includes(form.op);
  const usesA = !(isDot && form.magOnlyA), usesB = needB && !(isDot && form.magOnlyB);
  const needPoint = (usesA && form.A.system !== 'cartesian') || (usesB && form.B.system !== 'cartesian') || (vecOut && form.outSys !== 'cartesian');

  const calc = (): CalcResult => {
    const n = f.n, v = f.v;
    const at = needPoint ? parsePointState(form.pt, angleUnit, 'Point of application') : undefined;
    const getVec = (s: VectorState, name: string) => {
      const { value } = parseVectorState({ ...s, pt: form.pt }, angleUnit, false, name);
      const c = vectorToCartesian(value, at);
      const lines: string[] = [];
      if (value.system !== 'cartesian') {
        const b = basisAt(value.system, at), nm = b.names;
        lines.push(`${name} = ${v(value.components)} in ${SYSTEM_NAME[value.system]} at P = ${fmtPoint(at!, f)}`,
          `u_${nm[0]} = ${v(b.e1)}, u_${nm[1]} = ${v(b.e2)}, u_${nm[2]} = ${v(b.e3)}`, `${name} (Cartesian) = ${v(c)}`);
      }
      return { c, lines, text: `${name} = ${v(c)}${value.system !== 'cartesian' ? ` (from ${SYSTEM_NAME[value.system]})` : ''}` };
    };
    const A = usesA ? getVec(form.A, 'A') : null, B = usesB ? getVec(form.B, 'B') : null;
    const a = A?.c ?? ([0, 0, 0] as Vec3), b = B?.c ?? ([0, 0, 0] as Vec3);
    const conv = [...(A?.lines ?? []), ...(B?.lines ?? [])];
    const given = [...(A ? [A.text] : []), ...(B ? [B.text] : [])];
    const ma = magnitude(a), mb = magnitude(b);
    const base: SceneShape[] = [...(A ? [{ kind: 'vector', from: [0, 0, 0], vec: a, color: C[0], label: 'A' } as SceneShape] : []), ...(B ? [{ kind: 'vector', from: [0, 0, 0], vec: b, color: C[1], label: 'B' } as SceneShape] : [])];
    const arc = (): SceneShape[] => ma > 0 && mb > 0 ? [{ kind: 'polyline', pts: angleArc(a, b, Math.min(2, Math.max(0.5, 0.35 * Math.min(ma, mb)))), color: C[3] }] : [];
    let res: Vec3 | null = null, r: CalcResult;

    switch (form.op) {
      case 'add': case 'sub': {
        const s = form.op === 'add' ? '+' : '−';
        res = form.op === 'add' ? add(a, b) : sub(a, b);
        r = { meta: { operation: form.op === 'add' ? 'Vector addition' : 'Vector subtraction' }, answer: [{ label: `A ${s} B`, value: v(res) }],
          steps: solution({ given, required: `A ${s} B`, formula: [`A ${s} B = (Ax ${s} Bx, Ay ${s} By, Az ${s} Bz)`], substitution: [`(${n(a[0])} ${s} ${n(b[0])}, ${n(a[1])} ${s} ${n(b[1])}, ${n(a[2])} ${s} ${n(b[2])})`],
            intermediate: conv, final: [`A ${s} B = ${v(res)}`], why: { intermediate: 'Components are only added in one common (Cartesian) basis.' } }),
          shapes: form.op === 'add' ? [...base.slice(0, 1), { kind: 'vector', from: a, vec: b, color: C[1], label: 'B' }, { kind: 'vector', from: [0, 0, 0], vec: res, color: C[2], label: 'A+B' }]
            : [...base, { kind: 'vector', from: b, vec: res, color: C[2], label: 'A−B' }], extent: extentOf(a, b, res) };
        break;
      }
      case 'cross': {
        res = crossProduct(a, b);
        r = { meta: { operation: 'Cross product' }, answer: [{ label: 'A × B', value: v(res) }, { label: '|A × B|', value: n(magnitude(res)) }],
          steps: solution({ given, required: 'A × B', formula: ['A × B = (AyBz − AzBy) u_x + (AzBx − AxBz) u_y + (AxBy − AyBx) u_z'],
            substitution: [`u_x: (${n(a[1])})(${n(b[2])}) − (${n(a[2])})(${n(b[1])}) = ${n(res[0])}`, `u_y: (${n(a[2])})(${n(b[0])}) − (${n(a[0])})(${n(b[2])}) = ${n(res[1])}`, `u_z: (${n(a[0])})(${n(b[1])}) − (${n(a[1])})(${n(b[0])}) = ${n(res[2])}`],
            intermediate: conv, final: [`A × B = ${v(res)}`] }),
          shapes: [...base, { kind: 'vector', from: [0, 0, 0], vec: res, color: C[2], label: 'A×B' }], extent: extentOf(a, b, res) };
        break;
      }
      case 'dot': {
        /* The program decides the method: with an angle → |A||B|cosθ, otherwise → components. */
        const th = form.theta.trim() ? (angleIn(form.theta, angleUnit, 'θ', false) as number) : null;
        if (th != null) { const e = checkRange('θ', th, angleUnit); if (e) throw new Error(e); }
        const magOf = (name: string, vec: typeof A, mag: string) => {
          if (vec) return magnitude(vec.c);
          const m = num(mag, `|${name}|`); if (m < 0) throw new Error(`|${name}| must be 0 or more.`); return m;
        };
        const mA = magOf('A', A, form.magA), mB = magOf('B', B, form.magB);
        if (th == null && (!A || !B)) throw new Error('Enter the angle θ between the vectors (needed because a vector is given only by its magnitude).');
        let d: number, formula: string[], subst: string[], inter: string[], shapes: SceneShape[];
        if (th != null) {
          d = dotByAngle(mA, mB, th);
          formula = ['A · B = |A| |B| cos θ']; subst = [`A · B = ${n(mA)} × ${n(mB)} × cos(${f.ang(th)})`]; inter = [...conv, `cos(${f.ang(th)}) = ${n(Math.cos(th))}`];
          if (A && B) { const comp = dotProduct(A.c, B.c); inter.push(`Check with components: A · B = ${n(comp)} ${Math.abs(comp - d) <= 1e-6 * (1 + Math.abs(d)) ? '(agrees)' : '(DIFFERENT: the angle you entered does not match these components)'}`); }
          const aa: Vec3 = A ? A.c : [mA, 0, 0];
          const bb: Vec3 = B ? B.c : magnitude(aa) > 0 ? add(scale(aa, (mB * Math.cos(th)) / magnitude(aa)), scale(perpendicularUnit(aa), mB * Math.sin(th))) : [mB, 0, 0];
          shapes = [{ kind: 'vector', from: [0, 0, 0], vec: aa, color: C[0], label: 'A' }, { kind: 'vector', from: [0, 0, 0], vec: bb, color: C[1], label: 'B' },
            ...(magnitude(aa) > 0 && magnitude(bb) > 0 ? [{ kind: 'polyline', pts: angleArc(aa, bb, Math.max(0.5, 0.35 * Math.min(mA, mB))), color: C[3], label: f.ang(th) } as SceneShape] : [])];
        } else {
          d = dotProduct(a, b);
          formula = ['A · B = AxBx + AyBy + AzBz']; subst = [`A · B = (${n(a[0])})(${n(b[0])}) + (${n(a[1])})(${n(b[1])}) + (${n(a[2])})(${n(b[2])})`]; inter = conv;
          shapes = [...base, ...arc()];
        }
        r = { meta: { operation: 'Dot product', method: th != null ? 'Magnitudes and angle (|A||B|cosθ)' : 'Components' }, answer: [{ label: 'A · B', value: n(d) }],
          steps: solution({ given: [...given, ...(!A ? [`|A| = ${n(mA)}`] : []), ...(!B ? [`|B| = ${n(mB)}`] : []), ...(th != null ? [`θ = ${f.ang(th)}`] : [])], required: 'A · B', formula, substitution: subst, intermediate: inter, final: [`A · B = ${n(d)}`],
            why: { formula: th != null ? 'You gave the angle, so the angle form of the dot product is used.' : 'No angle was given, so the component form is used.' } }),
          shapes, extent: extentOf(a, b, ...(shapes.filter((s) => s.kind === 'vector').map((s) => (s as { vec: Vec3 }).vec))) };
        break;
      }
      case 'mag':
        r = { meta: { operation: 'Magnitude' }, answer: [{ label: '|A|', value: n(ma) }],
          steps: solution({ given, required: '|A|', formula: ['|A| = √(Ax² + Ay² + Az²)'], substitution: [`|A| = √(${n(a[0])}² + ${n(a[1])}² + ${n(a[2])}²) = √${n(ma * ma)}`], intermediate: conv, final: [`|A| = ${n(ma)}`] }), shapes: base, extent: extentOf(a) };
        break;
      case 'unit': {
        res = unitVector(a);
        r = { meta: { operation: 'Unit vector' }, answer: [{ label: 'u_A', value: v(res) }, { label: '|A|', value: n(ma) }],
          steps: solution({ given, required: 'The unit vector in the direction of A.', formula: ['u_A = A / |A|'], substitution: [`u_A = ${v(a)} / ${n(ma)}`], intermediate: conv, final: [`u_A = ${v(res)}`], why: { formula: 'Dividing by the magnitude keeps the direction and sets the length to 1.' } }),
          shapes: [...base, { kind: 'vector', from: [0, 0, 0], vec: res, color: C[2], label: 'u_A' }], extent: extentOf(a) };
        break;
      }
      case 'angle': {
        /* Always uses both methods and reports the verified angle. */
        const d = dotProduct(a, b), c = angleCosine(a, b), s = angleSine(a, b), bo = angleBoth(a, b), cr = crossProduct(a, b);
        const lines = ['— Cosine method —', `A · B = ${n(d)},  |A| = ${n(ma)},  |B| = ${n(mb)}`, `cos θ = ${n(d)} / (${n(ma)} × ${n(mb)}) = ${n(Math.max(-1, Math.min(1, d / (ma * mb))))}  (clamped to [−1, 1])`, `θ = acos(cos θ) = ${f.ang(c.theta)}`,
          '— Sine method —', `A × B = ${v(cr)},  |A × B| = ${n(magnitude(cr))}`, `sin θ = ${n(magnitude(cr))} / (${n(ma)} × ${n(mb)}) = ${n(Math.sin(s.alpha ?? 0))}`, `Reference angle α = asin(sin θ) = ${f.ang(s.alpha ?? 0)}  (asin only returns −90°…90°)`,
          `A · B = ${n(d)} → ${s.corrected ? `negative, so θ = ${f.ang(Math.PI)} − α = ${f.ang(s.theta)}` : Math.abs(s.theta - Math.PI / 2) < 1e-12 && Math.abs(d) <= 1e-12 * ma * mb ? `zero, so θ = ${f.ang(Math.PI / 2)}` : `positive, so θ = α = ${f.ang(s.theta)}`}`,
          '— Comparison —', `Cosine: ${f.ang(c.theta)},  Sine: ${f.ang(s.theta)}  →  ${bo.agree ? 'the two methods agree' : 'the methods DISAGREE (check the input)'}`];
        const theta = bo.theta;
        const kind = theta < 1e-9 ? 'Parallel, same direction' : Math.abs(theta - Math.PI) < 1e-9 ? 'Opposite directions' : Math.abs(theta - Math.PI / 2) < 1e-9 ? 'Perpendicular' : theta < Math.PI / 2 ? 'Acute' : 'Obtuse';
        r = { meta: { operation: 'Angle between two vectors', method: 'Cosine and sine, cross-checked' }, answer: [{ label: 'Angle θ', value: f.ang(theta) }, { label: 'Type', value: kind }],
          steps: solution({ given, required: 'The smaller angle θ between A and B (0° ≤ θ ≤ 180°).', formula: ['cos θ = (A · B) / (|A||B|),  θ = acos(…)', 'sin θ = |A × B| / (|A||B|),  α = asin(…);  θ = α if A·B > 0, 90° if A·B = 0, 180° − α if A·B < 0'],
            substitution: lines, intermediate: conv, final: [`θ = ${f.ang(theta)}`], why: { substitution: 'Both methods are computed and compared to verify the angle.' } }),
          shapes: [...base, ...arc().map((x) => ({ ...x, label: f.ang(theta) }) as SceneShape)], extent: extentOf(a, b) };
        break;
      }
    }

    /* --- choose the coordinate system of a vector result --- */
    if (res && vecOut && form.outSys !== 'cartesian') {
      const o = convertVector({ system: 'cartesian', components: res }, form.outSys, at);
      r.answer.push({ label: `Result in ${SYSTEM_NAME[form.outSys]} at ${fmtPoint(at!, f)}`, value: v(o.components) });
      r.steps.push({ title: 'Result in the chosen coordinate system', why: 'Converted with the local basis at the point of application.', lines: [`${v(res)} (Cartesian) → ${v(o.components)} (${SYSTEM_NAME[form.outSys]})`] });
    }
    if (!r.meta.system) r.meta.system = 'Cartesian (all inputs converted)';
    return r;
  };

  const magField = (which: 'A' | 'B') => (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2"><span className="text-sm font-medium">Vector {which}</span>
        <select className="rounded-lg border border-line bg-surface px-2 py-1 text-sm" aria-label={`How vector ${which} is given`} value={form[which === 'A' ? 'magOnlyA' : 'magOnlyB'] ? 'mag' : 'comp'}
          onChange={(e) => set(which === 'A' ? { magOnlyA: e.target.value === 'mag' } : { magOnlyB: e.target.value === 'mag' })}>
          <option value="comp">I know its components</option><option value="mag">I only know its magnitude</option></select></div>
      {form[which === 'A' ? 'magOnlyA' : 'magOnlyB']
        ? <Field label={`|${which}|`} value={which === 'A' ? form.magA : form.magB} onChange={(x) => set(which === 'A' ? { magA: x } : { magB: x })} />
        : <VectorForm title="" value={which === 'A' ? form.A : form.B} onChange={(x) => set(which === 'A' ? { A: x } : { B: x })} showPoint={false} />}
    </div>
  );

  return (
    <CalcShell title="Vector Operations" subtitle="Add, subtract, dot product, cross product and more. Vectors may be entered in any coordinate system." form={form} restored={restored} onCalculate={calc}
      onExample={() => setForm({ ...initialForm(), op: form.op, A: { ...defaultVector(), a: '2', b: '1', c: '2' }, B: { ...defaultVector(), a: '1', b: '2', c: '2' } })}
      onClear={() => setForm({ ...form, A: { ...form.A, a: '', b: '', c: '' }, B: { ...form.B, a: '', b: '', c: '' }, theta: '' })}
      inputs={<>
        <SelectField label="Operation" value={form.op} onChange={(op) => set({ op })} options={OPS} />
        {vecOut && <SelectField label="Show the result in" value={form.outSys} onChange={(outSys) => set({ outSys })} options={SYSTEMS.map((s) => ({ value: s.value, label: s.label }))} />}
        {isDot ? <>{magField('A')}{magField('B')}
          <Field label="Angle θ between A and B (optional)" hint={angleUnit === 'deg' ? '0° – 180°' : '0 – π'} value={form.theta} onChange={(theta) => set({ theta })} placeholder="leave blank to use the components" />
          <AngleUnitToggle /></>
          : <>
            <VectorForm title={needB ? 'Vector A' : 'Vector'} value={form.A} onChange={(A) => set({ A })} showPoint={false} />
            {needB && <VectorForm title="Vector B" value={form.B} onChange={(B) => set({ B })} showPoint={false} />}
            {form.op === 'angle' && <AngleUnitToggle />}
          </>}
        {needPoint && (
          <div className="rounded-xl border border-line p-3">
            <PointForm title="Point of application" value={form.pt} onChange={(pt) => set({ pt })} />
            <p className="mt-2 text-xs text-muted">All vectors are taken at this one point (needed for cylindrical / spherical components and results).</p>
          </div>)}
      </>} />
  );
}
