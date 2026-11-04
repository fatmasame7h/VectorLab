import type { AngleUnit } from './math';
import { toDeg } from './math';

/** Allowed ranges: ρ, r ∈ [0, ∞);  θ ∈ [0°, 180°];  φ ∈ [0°, 360°]. */
export type Sym = 'ρ' | 'r' | 'θ' | 'φ';
export const isAngleSym = (s: Sym | null): s is 'θ' | 'φ' => s === 'θ' || s === 'φ';

export function rangeHint(sym: Sym, unit: AngleUnit): string {
  if (sym === 'ρ' || sym === 'r') return '0 – ∞';
  if (sym === 'θ') return unit === 'deg' ? '0° – 180°' : '0 – π';
  return unit === 'deg' ? '0° – 360°' : '0 – 2π';
}
/** `value` is in radians for angles. Returns an error message or null. */
export function checkRange(sym: Sym, value: number, unit: AngleUnit): string | null {
  const tol = 1e-9;
  if ((sym === 'ρ' || sym === 'r') && value < -tol) return `${sym} must be 0 or more (range ${rangeHint(sym, unit)}).`;
  if (sym === 'θ' && (value < -tol || value > Math.PI + tol)) return `θ must be between ${unit === 'deg' ? '0° and 180°' : '0 and π'} (you entered ${unit === 'deg' ? `${+toDeg(value).toFixed(6)}°` : +value.toFixed(6)}).`;
  if (sym === 'φ' && (value < -tol || value > 2 * Math.PI + tol)) return `φ must be between ${unit === 'deg' ? '0° and 360°' : '0 and 2π'} (you entered ${unit === 'deg' ? `${+toDeg(value).toFixed(6)}°` : +value.toFixed(6)}).`;
  return null;
}
