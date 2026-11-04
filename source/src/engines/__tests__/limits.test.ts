import { checkRange } from '../../utils/limits';
import { parsePointState, fieldError } from '../../utils/inputs';
import { buildReport, buildShapes, defaultParams } from '../../visualization/builders';

const f = { n: (x: number) => String(+x.toFixed(4)), ang: (r: number | null) => (r == null ? 'undefined' : `${+(r * 180 / Math.PI).toFixed(4)}°`), v: (a: number[]) => `(${a.map((x) => +x.toFixed(4)).join(', ')})`, angleUnit: 'deg' as const, precision: 4 };
const ctx = { f, unit: 'deg' as const };

describe('input limits', () => {
  test('ρ, r ≥ 0; θ ∈ [0,180°]; φ ∈ [0,360°]', () => {
    expect(checkRange('ρ', -1, 'deg')).not.toBeNull(); expect(checkRange('ρ', 1e9, 'deg')).toBeNull();
    expect(checkRange('r', -0.1, 'deg')).not.toBeNull();
    expect(checkRange('θ', Math.PI, 'deg')).toBeNull(); expect(checkRange('θ', Math.PI + 0.1, 'deg')).toMatch(/0° and 180°/);
    expect(checkRange('φ', 2 * Math.PI, 'deg')).toBeNull(); expect(checkRange('φ', -0.1, 'deg')).toMatch(/0° and 360°/);
  });
  test('parsePointState enforces the limits (degrees and radians)', () => {
    expect(() => parsePointState({ system: 'cylindrical', a: '-1', b: '0', c: '0' }, 'deg')).toThrow(/ρ must be 0 or more/);
    expect(() => parsePointState({ system: 'spherical', a: '1', b: '181', c: '0' }, 'deg')).toThrow(/θ must be between/);
    expect(() => parsePointState({ system: 'spherical', a: '1', b: '90', c: '361' }, 'deg')).toThrow(/φ must be between/);
    expect(() => parsePointState({ system: 'spherical', a: '1', b: 'pi', c: '2*pi' }, 'rad')).not.toThrow();
    expect(() => parsePointState({ system: 'spherical', a: '1', b: '4', c: '0' }, 'rad')).toThrow();
    expect(parsePointState({ system: 'spherical', a: '2', b: '90', c: '360' }, 'deg')).toMatchObject({ r: 2 });
  });
  test('live field error', () => {
    expect(fieldError('cylindrical', 1, '400', 'deg')).toMatch(/φ/);
    expect(fieldError('cylindrical', 1, '90', 'deg')).toBeNull();
    expect(fieldError('cartesian', 0, '-5', 'deg')).toBeNull();
  });
});

describe('3D builders', () => {
  const surf = (over: object = {}) => ({ ...defaultParams('csurface'), ...over });
  const vec = (a: string, b: string, c: string, system = 'cartesian', pt: [string, string, string] = ['0', '0', '0']) => ({ system, a, b, c, pt: { system: 'cartesian', a: pt[0], b: pt[1], c: pt[2] } });
  const labelsOf = (shapes: object[]) => shapes.map((s) => (s as { label?: string }).label ?? '');
  const row = (rep: { answer: { label: string; value: string }[] } | undefined, label: string) => rep!.answer.find((a) => a.label === label)!.value;

  test('a point is drawn in ALL coordinate systems and has no surface options', () => {
    const p = defaultParams('point'); p.pt = { system: 'spherical', a: '4', b: '60', c: '45' };
    const labels = labelsOf(buildShapes('point', p, 'P', ctx));
    for (const k of ['x =', 'y =', 'z =', 'ρ =', 'φ =', 'r =', 'θ =']) expect(labels.some((l) => l.startsWith(k))).toBe(true);
    expect(Object.keys(p.opts)).toEqual(['local', 'comps']);
  });
  test('point report includes distance, position vector and projections (merged Point Explorer)', () => {
    const p = defaultParams('point'); p.pt = { system: 'cartesian', a: '3', b: '4', c: '5' };
    const rep = buildReport('point', p, ctx);
    for (const k of ['Distance from origin', 'Position vector OP', 'Projection on x, y, z axes', 'Projection on xy, xz, yz planes']) expect(rep!.answer.map((a) => a.label)).toContain(k);
    expect(row(rep, 'Position vector OP')).toContain('3u_x + 4u_y + 5u_z');
  });
  test('zero is allowed for ρ, r, θ, φ up to the limits', () => {
    const states = [['cylindrical', '0', '0', '0'], ['cylindrical', '0', '', '2'], ['cylindrical', '3', '0', '0'], ['cylindrical', '3', '360', '1'], ['spherical', '0', '0', '0'], ['spherical', '0', '', ''],
      ['spherical', '2', '0', '0'], ['spherical', '2', '180', '0'], ['spherical', '2', '90', '360'], ['spherical', '2', '0', '']];
    for (const [system, a, b, c] of states) {
      const p = defaultParams('point'); p.pt = { system, a, b, c };
      expect(() => buildShapes('point', p, 'P', ctx)).not.toThrow(); expect(() => buildReport('point', p, ctx)).not.toThrow();
    }
  });
  test('a vector starts at the origin by default and is drawn with components in all systems', () => {
    const p = defaultParams('vector');
    const shapes = buildShapes('vector', p, 'A', ctx);
    expect((shapes.find((s) => s.kind === 'vector' && s.label === 'A') as { from: number[] }).from).toEqual([0, 0, 0]);
    expect(labelsOf(shapes).some((l) => l.startsWith('Ax ='))).toBe(true);
    expect(() => buildReport('vector', p, ctx)).not.toThrow(); // cylindrical/spherical parts are explained, not errors
    const q = defaultParams('vector'); q.v = vec('1', '2', '3', 'cartesian', ['1', '1', '1']); // start point is ignored for Cartesian vectors
    expect((buildShapes('vector', q, 'A', ctx).find((s) => s.kind === 'vector' && s.label === 'A') as { from: number[] }).from).toEqual([0, 0, 0]);
  });
  test('cylindrical components need a point: at the origin it is rejected, elsewhere all systems are drawn', () => {
    const p = defaultParams('vector'); p.v = vec('1', '0', '0', 'cylindrical');
    expect(() => buildShapes('vector', p, 'A', ctx)).toThrow(/undefined/);
    p.v = vec('1', '0', '0', 'cylindrical', ['1', '1', '0']);
    const labels = labelsOf(buildShapes('vector', p, 'A', ctx));
    for (const k of ['Ax =', 'Aρ =', 'Ar =']) expect(labels.some((l) => l.startsWith(k))).toBe(true);
  });
  test('surface x = 1 with A = (3, 4, 5): closest point, normal and parallel parts', () => {
    const p = surf({ system: 'cartesian', coord: 'x', c: '1', v: vec('3', '4', '5') });
    const shapes = buildShapes('csurface', p, 'S', ctx);
    expect(shapes.some((s) => s.kind === 'surface')).toBe(true); expect(shapes.some((s) => s.kind === 'plane')).toBe(true);
    const rep = buildReport('csurface', p, ctx);
    expect(row(rep, 'Closest point P₀')).toContain('(1, 4, 5)');
    expect(row(rep, 'Normal (perpendicular)')).toBe('(1, 0, 0)');
    expect(row(rep, 'A⊥ (normal part)')).toContain('(3, 0, 0)');
    expect(row(rep, 'A∥ (tangent part)')).toContain('(0, 4, 5)');
  });
  test('a vector whose tip is on the surface uses the tip itself', () => {
    const rep = buildReport('csurface', surf({ v: vec('2', '0', '0') }), ctx); // ρ = 2, tip (2,0,0)
    expect(row(rep, 'Closest point P₀')).toContain('the tip lies on the surface');
    expect(row(rep, 'A⊥ (normal part)')).toContain('(2, 0, 0)');
  });
  test('surface limits, zero values and singular points', () => {
    expect(() => buildShapes('csurface', surf({ c: '-1' }), 'S', ctx)).toThrow(/ρ must be 0 or more/);
    expect(() => buildShapes('csurface', surf({ coord: 'phi', c: '400' }), 'S', ctx)).toThrow(/φ must be between/);
    expect(row(buildReport('csurface', surf({ c: '0' }), ctx), 'Normal')).toMatch(/not unique/); // ρ = 0 is the z-axis
    for (const [system, coord, c] of [['spherical', 'r', '0'], ['spherical', 'theta', '0'], ['spherical', 'theta', '180'], ['spherical', 'phi', '0'], ['spherical', 'phi', '360'], ['cylindrical', 'phi', '0'], ['cartesian', 'z', '0']])
      expect(() => buildShapes('csurface', surf({ system, coord, c }), 'S', ctx)).not.toThrow();
  });
});
