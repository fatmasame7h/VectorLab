import type { System } from '../../engines/coordinates';
import { PLABEL, SYM, VLABEL, fieldError, hasAngles, type PointState, type VectorState } from '../../utils/inputs';
import { isAngleSym, rangeHint } from '../../utils/limits';
import Segmented from '../ui/Segmented';
import { useSettings } from '../../context/SettingsContext';

export const inputCls = 'w-full rounded-lg border border-line bg-surface px-3 py-2 text-ink placeholder:text-muted/60';

export function Field({ label, value, onChange, placeholder, area, hint, error }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; area?: boolean; hint?: string; error?: string | null;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-muted">{label}{hint && <span className="ml-1 text-xs">({hint})</span>}</span>
      {area
        ? <textarea className={inputCls + ' font-mono'} rows={4} value={value} onChange={(e) => onChange(e.target.value)} />
        : <input className={inputCls + (error ? ' border-red-500' : '')} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} inputMode="text" autoComplete="off" aria-invalid={!!error} />}
      {error && <span role="alert" className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
export function SelectField<T extends string>({ label, value, onChange, options }: {
  label: string; value: T; onChange: (v: T) => void; options: { value: T; label: string }[];
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-muted">{label}</span>
      <select className={inputCls} value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

export const SYSTEMS: { value: System; label: string }[] = [
  { value: 'cartesian', label: 'Cartesian (x, y, z)' },
  { value: 'cylindrical', label: 'Cylindrical (ρ, φ, z)' },
  { value: 'spherical', label: 'Spherical (r, θ, φ)' },
];
export const SYSTEM_NAME: Record<System, string> = { cartesian: 'Cartesian', cylindrical: 'Cylindrical', spherical: 'Spherical' };

export { defaultPoint, defaultVector, parsePointState, parseVectorState } from '../../utils/inputs';
export type { PointState, VectorState } from '../../utils/inputs';
export const pointLabels = (s: System) => PLABEL[s];
export const vectorLabels = (s: System) => VLABEL[s];

export function AngleUnitToggle() {
  const { angleUnit, setAngleUnit } = useSettings();
  return <Segmented label="Angle unit" value={angleUnit} onChange={setAngleUnit} options={[{ value: 'deg', label: 'Degrees' }, { value: 'rad', label: 'Radians' }]} />;
}

export function PointForm({ value, onChange, title, lockCartesian }: {
  value: PointState; onChange: (v: PointState) => void; title?: string; lockCartesian?: boolean;
}) {
  const { angleUnit } = useSettings();
  const keys = ['a', 'b', 'c'] as const;
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {title && <h3 className="font-semibold">{title}</h3>}
        {hasAngles(value.system) && <AngleUnitToggle />}
      </div>
      {lockCartesian
        ? <p className="text-sm text-muted">Cartesian input only. To use another system, convert the point first in Point Conversion.</p>
        : <SelectField label="Coordinate system" value={value.system} onChange={(system) => onChange({ ...value, system })} options={SYSTEMS} />}
      <div className="grid grid-cols-3 gap-2">
        {keys.map((k, i) => {
          const sym = SYM[value.system][i];
          return (
            <Field key={k} label={PLABEL[value.system][i]} hint={sym ? rangeHint(sym, angleUnit) : undefined}
              error={fieldError(value.system, i, value[k], angleUnit)} value={value[k]} onChange={(v) => onChange({ ...value, [k]: v })}
              placeholder={isAngleSym(sym) ? 'blank = undefined' : undefined} />
          );
        })}
      </div>
    </div>
  );
}

export function VectorForm({ value, onChange, title, showPoint, pointTitle = 'Point of application' }: {
  value: VectorState; onChange: (v: VectorState) => void; title: string; showPoint: boolean; pointTitle?: string;
}) {
  const keys = ['a', 'b', 'c'] as const;
  return (
    <div className="space-y-3">
      <h3 className="font-semibold">{title}</h3>
      <SelectField label="Components in" value={value.system} onChange={(system) => onChange({ ...value, system })}
        options={SYSTEMS.map((s) => ({ value: s.value, label: s.label.replace(/\(.*\)/, `(${VLABEL[s.value].join(', ')})`) }))} />
      <div className="grid grid-cols-3 gap-2">
        {keys.map((k, i) => <Field key={k} label={VLABEL[value.system][i]} value={value[k]} onChange={(v) => onChange({ ...value, [k]: v })} />)}
      </div>
      {showPoint && (
        <div className="rounded-xl border border-line p-3">
          <PointForm title={pointTitle} value={value.pt} onChange={(pt) => onChange({ ...value, pt })} />
          <p className="mt-2 text-xs text-muted">Cylindrical and spherical components depend on position, so this point is required.</p>
        </div>
      )}
    </div>
  );
}
