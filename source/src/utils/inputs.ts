import type { Point, System } from '../engines/coordinates';
import type { VectorValue } from '../engines/vectors/basis';
import type { Vec3 } from '../engines/vectors/vec3';
import { toRad, type AngleUnit } from './math';
import { checkRange, isAngleSym, type Sym } from './limits';
import { angleIn, num } from './parse';

export interface PointState { system: System; a: string; b: string; c: string }
export interface VectorState { system: System; a: string; b: string; c: string; pt: PointState }
export const defaultPoint = (): PointState => ({ system: 'cartesian', a: '1', b: '2', c: '3' });
export const defaultVector = (): VectorState => ({ system: 'cartesian', a: '1', b: '2', c: '3', pt: { system: 'cartesian', a: '1', b: '1', c: '1' } });

export const PLABEL: Record<System, [string, string, string]> = { cartesian: ['x', 'y', 'z'], cylindrical: ['ρ', 'φ', 'z'], spherical: ['r', 'θ', 'φ'] };
export const VLABEL: Record<System, [string, string, string]> = { cartesian: ['Ax', 'Ay', 'Az'], cylindrical: ['Aρ', 'Aφ', 'Az'], spherical: ['Ar', 'Aθ', 'Aφ'] };
/** Which coordinates have limits (null = unrestricted). */
export const SYM: Record<System, [Sym | null, Sym | null, Sym | null]> = { cartesian: [null, null, null], cylindrical: ['ρ', 'φ', null], spherical: ['r', 'θ', 'φ'] };
export const hasAngles = (s: System) => s !== 'cartesian';

/** Live check of one point field; returns a message or null (non-numeric text is left to Calculate). */
export function fieldError(system: System, i: number, text: string, unit: AngleUnit): string | null {
  const sym = SYM[system][i];
  if (!sym || !text.trim()) return null;
  try {
    const v = num(text);
    return checkRange(sym, isAngleSym(sym) && unit === 'deg' ? toRad(v) : v, unit);
  } catch { return null; }
}

export function parsePointState(s: PointState, unit: AngleUnit, name = 'Point'): Point {
  const L = PLABEL[s.system], S = SYM[s.system];
  const raw = [s.a, s.b, s.c];
  const vals = raw.map((t, i) => {
    const sym = S[i];
    const v = isAngleSym(sym) ? angleIn(t, unit, `${name} ${L[i]}`) : num(t, `${name} ${L[i]}`);
    if (v != null && sym) { const e = checkRange(sym, v, unit); if (e) throw new Error(`${name}: ${e}`); }
    return v;
  });
  if (s.system === 'cartesian') return { system: 'cartesian', x: vals[0]!, y: vals[1]!, z: vals[2]! };
  if (s.system === 'cylindrical') return { system: 'cylindrical', rho: vals[0]!, phi: vals[1], z: vals[2]! };
  return { system: 'spherical', r: vals[0]!, theta: vals[1], phi: vals[2] };
}

export function parseVectorState(s: VectorState, unit: AngleUnit, needPoint: boolean, name = 'Vector'): { value: VectorValue; at?: Point } {
  const L = VLABEL[s.system];
  const comps: Vec3 = [num(s.a, `${name} ${L[0]}`), num(s.b, `${name} ${L[1]}`), num(s.c, `${name} ${L[2]}`)];
  return { value: { system: s.system, components: comps }, at: needPoint ? parsePointState(s.pt, unit, `${name} application point`) : undefined };
}
