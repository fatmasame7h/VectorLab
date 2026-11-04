import { cartToCyl, cartToSph, toCartesian, type System } from '../engines/coordinates';
import { angleArc } from '../engines/geometry';
import { formatUnitForm } from '../engines/points';
import { COORD_SYMBOL, analyzeSurface, nearestPointOnSurface, surfaceNormal, type SurfaceSystem } from '../engines/surfaces/coordinateSurfaces';
import { basisAt, convertVector, vectorToCartesian } from '../engines/vectors/basis';
import { Vec3, add, dot, norm, scale, sub } from '../engines/vectors/vec3';
import { solution, type Step } from '../components/calc/steps';
import type { Fmt } from '../context/SettingsContext';
import { VLABEL, parsePointState, parseVectorState, type PointState, type VectorState } from '../utils/inputs';
import { checkRange, type Sym } from '../utils/limits';
import { UndefinedResultError, type AngleUnit } from '../utils/math';
import { angleIn, num } from '../utils/parse';
import { PALETTE, type Shape } from './types';

export type ObjType = 'point' | 'vector' | 'csurface';
export const OBJ_LABEL: Record<ObjType, string> = { point: 'Point', vector: 'Vector', csurface: 'Surface (constant x, y, z, ρ, φ, r or θ)' };
export const OBJ_TYPES: ObjType[] = ['point', 'vector', 'csurface'];
export interface BuildCtx { f: Fmt; unit: AngleUnit }
export interface Report { answer: { label: string; value: string }[]; steps: Step[] }

export interface DrawOpts {
  local: Record<System, boolean>;  // point: unit directions drawn at the point
  comps: Record<System, boolean>;  // vector: components along each system's directions
}
export const defaultOpts = (kind: 'point' | 'vector' = 'point'): DrawOpts => ({
  local: { cartesian: false, cylindrical: kind === 'point', spherical: kind === 'point' },
  comps: { cartesian: true, cylindrical: true, spherical: true },
});
export interface CSurfaceParams { system: SurfaceSystem; coord: string; c: string; v: VectorState }

const ORIGIN: PointState = { system: 'cartesian', a: '0', b: '0', c: '0' };
const origin3: Vec3 = [0, 0, 0];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function defaultParams(t: ObjType): any {
  if (t === 'point') return { pt: { system: 'cartesian', a: '2', b: '3', c: '1' } as PointState, opts: defaultOpts('point') };
  if (t === 'vector') return { v: { system: 'cartesian', a: '1', b: '2', c: '3', pt: ORIGIN } as VectorState, opts: defaultOpts('vector') };
  return { system: 'cylindrical', coord: 'rho', c: '2', v: { system: 'cartesian', a: '3', b: '1', c: '2', pt: ORIGIN } } as CSurfaceParams;
}
/** Default constant when a coordinate is chosen (angles are shown in the current unit). */
export function csurfaceDefaults(coord: string, unit: AngleUnit): { c: string } {
  const ang = coord === 'phi' || coord === 'theta';
  return { c: ang ? (unit === 'deg' ? '60' : '1.0472') : '2' };
}

/* ---------- helpers ---------- */
const SYS_COLOR: Record<System, string> = { cartesian: '#64748b', cylindrical: '#16a34a', spherical: '#d97706' };
const asPoint = (P: Vec3) => ({ system: 'cartesian' as const, x: P[0], y: P[1], z: P[2] });
const reach = (...ps: Vec3[]) => Math.min(30, Math.max(4, Math.ceil(Math.max(...ps.map(norm)) * 1.2)));

/** The point drawn in ALL coordinate systems: x, y, z · ρ, φ, z · r, θ, φ (with values). */
function guides(P: Vec3, f: Fmt): Shape[] {
  const [x, y, z] = P, rho = Math.hypot(x, y), r = norm(P);
  const cy = cartToCyl(asPoint(P)), sp = cartToSph(asPoint(P));
  const out: Shape[] = [];
  const line = (pts: Vec3[], color: string, label: string): Shape => ({ kind: 'polyline', pts, dashed: true, color, label });
  if (Math.abs(x) > 1e-9) out.push(line([origin3, [x, 0, 0]], SYS_COLOR.cartesian, `x = ${f.n(x)}`));
  if (Math.abs(y) > 1e-9) out.push(line(Math.abs(x) > 1e-9 ? [[x, 0, 0], [x, y, 0]] : [origin3, [0, y, 0]], SYS_COLOR.cartesian, `y = ${f.n(y)}`));
  if (rho > 1e-9) {
    out.push(line([origin3, [x, y, 0]], SYS_COLOR.cylindrical, `ρ = ${f.n(rho)}`));
    out.push({ kind: 'polyline', pts: angleArc([1, 0, 0], [x, y, 0], Math.min(1, rho * 0.5)), color: SYS_COLOR.cylindrical, label: `φ = ${f.ang(cy.phi)}` });
  }
  if (Math.abs(z) > 1e-9) out.push(line(rho > 1e-9 ? [[x, y, 0], P] : [origin3, P], '#7c3aed', `z = ${f.n(z)}`));
  if (r > 1e-9) out.push(line([origin3, P], SYS_COLOR.spherical, `r = ${f.n(r)}`));
  if (r > 1e-9 && rho > 1e-9) out.push({ kind: 'polyline', pts: angleArc([0, 0, 1], P, Math.min(1.2, r * 0.5)), color: SYS_COLOR.spherical, label: `θ = ${f.ang(sp.theta)}` });
  return out;
}
function localAxes(P: Vec3, opts: DrawOpts['local'], notes: string[]): Shape[] {
  const out: Shape[] = [];
  (Object.keys(opts) as System[]).filter((s) => opts[s]).forEach((s) => {
    try {
      const b = basisAt(s, asPoint(P));
      [b.e1, b.e2, b.e3].forEach((e, i) => out.push({ kind: 'vector', from: P, vec: e, color: SYS_COLOR[s], label: s === 'cartesian' ? ['u_x', 'u_y', 'u_z'][i] : `u_${b.names[i]}` }));
    } catch (e) { notes.push(`${s} directions: ${(e as Error).message}`); }
  });
  return out;
}
/** The vector split into components along each system's directions (tip-to-tail chains ending at the vector's tip). */
function decomposition(P: Vec3, A: Vec3, comps: DrawOpts['comps'], f: Fmt, notes: string[]): Shape[] {
  const out: Shape[] = [];
  (Object.keys(comps) as System[]).filter((s) => comps[s]).forEach((s) => {
    try {
      const b = basisAt(s, asPoint(P)), L = VLABEL[s];
      let from: Vec3 = P;
      [b.e1, b.e2, b.e3].forEach((e, i) => {
        const k = dot(A, e), vec = scale(e, k);
        if (Math.abs(k) > 1e-9) { out.push({ kind: 'vector', from, vec, color: SYS_COLOR[s], label: `${L[i]} = ${f.n(k)}` }); from = add(from, vec); }
      });
    } catch (e) { notes.push(`${s[0].toUpperCase() + s.slice(1)} components: ${(e as Error).message}`); }
  });
  return out;
}
function pointOf(p: { pt: PointState }, unit: AngleUnit): Vec3 {
  const c = toCartesian(parsePointState(p.pt, unit, 'Point'));
  return [c.x, c.y, c.z];
}
/** A vector from the origin (Cartesian) or from its point of application (cylindrical / spherical components). */
function vectorOf(v: VectorState, unit: AngleUnit) {
  const { value, at } = parseVectorState({ ...v, pt: v.system === 'cartesian' ? ORIGIN : v.pt }, unit, true, 'Vector');
  const t = toCartesian(at!);
  return { value, at: at!, tail: [t.x, t.y, t.z] as Vec3, cart: vectorToCartesian(value, at) };
}

/* ---------- drawable shapes ---------- */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildShapes(type: ObjType, p: any, name: string, ctx: BuildCtx): Shape[] {
  const sink: string[] = [];
  if (type === 'point') {
    const P = pointOf(p, ctx.unit), o: DrawOpts = p.opts;
    return [...guides(P, ctx.f), ...localAxes(P, o.local, sink), { kind: 'point', p: P, label: name }];
  }
  if (type === 'vector') {
    const { tail, cart } = vectorOf(p.v, ctx.unit), o: DrawOpts = p.opts;
    return [...guides(tail, ctx.f), ...decomposition(tail, cart, o.comps, ctx.f, sink), { kind: 'point', p: tail }, { kind: 'vector', from: tail, vec: cart, label: name }];
  }
  return csurface(p as CSurfaceParams, ctx).shapes;
}

/* ---------- surface + vector ---------- */
function csurface(p: CSurfaceParams, ctx: BuildCtx) {
  const { f, unit } = ctx;
  const sym = COORD_SYMBOL[p.coord];
  const ang = p.coord === 'phi' || p.coord === 'theta';
  const cVal = ang ? (angleIn(p.c, unit, 'c', false) as number) : num(p.c, 'c');
  if (['ρ', 'r', 'θ', 'φ'].includes(sym)) { const e = checkRange(sym as Sym, cVal, unit); if (e) throw new Error(e); }
  const { tail, cart: A } = vectorOf(p.v, unit);
  const tip = add(tail, A);
  const near = nearestPointOnSurface(p.system, p.coord, cVal, tip);
  const P0 = near.point;
  const info = analyzeSurface(p.system, p.coord, cVal, reach(tip, P0, tail));
  let nrm: ReturnType<typeof surfaceNormal> | null = null, nerr: string | null = null;
  try { nrm = surfaceNormal(info, P0); } catch (e) { nerr = e instanceof Error ? e.message : String(e); }
  const dist = norm(sub(tip, P0));
  const notes: string[] = [...(near.note ? [near.note] : []), ...(info.degenerate ? [info.degenerate] : [])];
  const C = PALETTE;
  const shapes: Shape[] = [
    info.grid.length ? { kind: 'surface', grid: info.grid, color: C[0], label: info.coordEq } : { kind: 'polyline', pts: info.polyline ?? [], color: C[0], label: info.shape },
    { kind: 'vector', from: tail, vec: A, color: C[1], label: 'A' },
    { kind: 'point', p: P0, color: C[4], label: 'P₀' },
  ];
  if (dist > 1e-9) shapes.push({ kind: 'polyline', pts: [tip, P0], dashed: true, color: C[4] });
  let An: Vec3 | null = null, At: Vec3 | null = null;
  if (nrm) {
    An = scale(nrm.unit, dot(A, nrm.unit)); At = sub(A, An);
    shapes.push({ kind: 'plane', p: P0, n: nrm.unit, size: Math.max(3, reach(P0) * 0.6), color: C[3], opacity: 0.3 });
    shapes.push({ kind: 'vector', from: P0, vec: scale(nrm.unit, 2), color: C[2], label: 'N (perpendicular)' });
    if (norm(An) > 1e-9) shapes.push({ kind: 'vector', from: tail, vec: An, color: C[2], label: 'A⊥' });
    if (norm(At) > 1e-9) shapes.push({ kind: 'vector', from: add(tail, An), vec: At, color: C[3], label: 'A∥' });
  }
  const given = [`Surface: ${info.coordEq}  (${info.shape})`, `Vector A = ${f.v(A)} (Cartesian), from ${f.v(tail)}`, `Tip of A = ${f.v(tip)}`];
  const planeEq = nrm ? `${f.n(nrm.grad[0])}x + ${f.n(nrm.grad[1])}y + ${f.n(nrm.grad[2])}z = ${f.n(nrm.d)}` : '';
  const steps = solution({ given, required: 'The surface with its parallel (tangent) plane and perpendicular (normal) at the point closest to the tip of A, and A split into perpendicular and parallel parts.',
    formula: ['Surface as F(x, y, z) = 0;  N = ∇F', 'Tangent plane: ∇F(P₀) · (r − P₀) = 0', 'A⊥ = (A · n)n  with n = N/|N|;   A∥ = A − A⊥'],
    substitution: [`F(x, y, z) = ${info.implicit}`, info.gradient, `P₀ = closest point of the surface to the tip = ${f.v(P0)}  (distance ${f.n(dist)}${dist < 1e-9 ? ': the tip lies on the surface' : ''})`, ...(nrm ? [`∇F(P₀) = ${f.v(nrm.grad)},  n = ${f.v(nrm.unit)}`] : [])],
    intermediate: [...(nrm ? [`A · n = ${f.n(dot(A, nrm.unit))}`, `A⊥ = ${f.v(An!)},  A∥ = ${f.v(At!)}`] : []), ...notes],
    final: nrm ? [`Normal (perpendicular): ${f.v(nrm.unit)}`, `Tangent plane (parallel): ${planeEq}`, `A⊥ = ${f.v(An!)}  (|A⊥| = ${f.n(norm(An!))})`, `A∥ = ${f.v(At!)}  (|A∥| = ${f.n(norm(At!))})`] : [`No unique normal or tangent plane here: ${nerr}`] });
  const answer = [{ label: 'Surface', value: `${info.coordEq} – ${info.shape}` }, { label: 'Equation F = 0', value: info.implicit },
    { label: 'Closest point P₀', value: `${f.v(P0)}${dist < 1e-9 ? ' (the tip lies on the surface)' : `  (distance ${f.n(dist)})`}` },
    ...(nrm ? [{ label: 'Normal (perpendicular)', value: f.v(nrm.unit) }, { label: 'Tangent plane (parallel)', value: planeEq }, { label: 'A⊥ (normal part)', value: `${f.v(An!)},  |A⊥| = ${f.n(norm(An!))}` }, { label: 'A∥ (tangent part)', value: `${f.v(At!)},  |A∥| = ${f.n(norm(At!))}` }]
      : [{ label: 'Normal', value: `not unique: ${nerr}` }]), ...notes.map((n) => ({ label: 'Note', value: n }))];
  return { shapes, report: { answer, steps } as Report };
}

/* ---------- analysis shown next to the 3D view ---------- */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildReport(type: ObjType, p: any, ctx: BuildCtx): Report | undefined {
  const { f, unit } = ctx;
  if (type === 'csurface') return csurface(p as CSurfaceParams, ctx).report;
  if (type === 'point') {
    const pt = parsePointState(p.pt, unit, 'Point'), c = toCartesian(pt);
    const P: Vec3 = [c.x, c.y, c.z], cy = cartToCyl(c), sp = cartToSph(c), o: DrawOpts = p.opts;
    const notes: string[] = []; localAxes(P, o.local, notes);
    const rows = [{ label: 'Cartesian (x, y, z)', value: f.v(P) }, { label: 'Cylindrical (ρ, φ, z)', value: `(${f.n(cy.rho)}, ${f.ang(cy.phi)}, ${f.n(cy.z)})` },
      { label: 'Spherical (r, θ, φ)', value: `(${f.n(sp.r)}, ${f.ang(sp.theta)}, ${f.ang(sp.phi)})` },
      { label: 'Distance from origin', value: f.n(norm(P)) }, { label: 'Position vector OP', value: `${f.v(P)} = ${formatUnitForm(P, f.precision)}` },
      { label: 'Projection on x, y, z axes', value: `${f.v([P[0], 0, 0])},  ${f.v([0, P[1], 0])},  ${f.v([0, 0, P[2]])}` },
      { label: 'Projection on xy, xz, yz planes', value: `${f.v([P[0], P[1], 0])},  ${f.v([P[0], 0, P[2]])},  ${f.v([0, P[1], P[2]])}` },
      ...notes.map((n) => ({ label: 'Note', value: n }))];
    return { answer: rows, steps: [{ title: 'Given', lines: [`P entered in ${pt.system} coordinates`] }, { title: 'Formulas', lines: ['ρ = √(x²+y²), φ = atan2(y, x)', 'r = √(x²+y²+z²), θ = acos(z/r)', 'OP = x u_x + y u_y + z u_z'] }, { title: 'Result', lines: rows.map((r) => `${r.label} = ${r.value}`) }] };
  }
  const { value, at, tail, cart } = vectorOf(p.v, unit), o: DrawOpts = p.opts;
  const rows: { label: string; value: string }[] = [{ label: 'Starts at', value: f.v(tail) }, { label: 'Cartesian components', value: f.v(cart) }, { label: 'Unit-vector form', value: formatUnitForm(cart, f.precision) }];
  (['cylindrical', 'spherical'] as System[]).forEach((s) => {
    try { rows.push({ label: `${s === 'cylindrical' ? 'Cylindrical' : 'Spherical'} (${VLABEL[s].join(', ')})`, value: f.v(convertVector({ system: 'cartesian', components: cart }, s, at).components) }); }
    catch (e) { rows.push({ label: s === 'cylindrical' ? 'Cylindrical' : 'Spherical', value: e instanceof UndefinedResultError ? `undefined here: ${e.message}` : 'undefined' }); }
  });
  const nts: string[] = []; decomposition(tail, cart, o.comps, f, nts);
  rows.push({ label: 'Magnitude', value: f.n(norm(cart)) }, ...nts.map((t) => ({ label: 'Note', value: t })));
  return { answer: rows, steps: [{ title: 'Given', lines: [`Components ${f.v(value.components)} in ${value.system} coordinates, starting at ${f.v(tail)}`] }, { title: 'Method', lines: ['Convert to Cartesian using the local basis at the starting point, then project onto the other local bases.'] }, { title: 'Result', lines: rows.map((r) => `${r.label} = ${r.value}`) }] };
}

/** Axis half-size that comfortably contains everything drawn. */
export function autoExtent(shapes: Shape[]): number {
  let m = 0;
  const see = (v: Vec3) => v.forEach((x) => { if (Number.isFinite(x)) m = Math.max(m, Math.abs(x)); });
  shapes.forEach((s) => {
    if (s.kind === 'point' || s.kind === 'plane') see(s.p);
    else if (s.kind === 'vector') { see(s.from); see(add(s.from, s.vec)); }
    else if (s.kind === 'polyline') s.pts.forEach(see);
  });
  return Math.min(40, Math.max(6, Math.ceil(m * 1.25)));
}
