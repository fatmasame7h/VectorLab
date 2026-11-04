import { addPoints, distanceBetween, distanceVector, distanceFromOrigin, midpoint, positionVector, subtractPoints } from '../points';
import { Point } from '../coordinates';

const A: Point = { system: 'cartesian', x: 1, y: 2, z: 3 };
const B: Point = { system: 'cartesian', x: 4, y: 6, z: 3 };

test('add / subtract', () => {
  expect(addPoints(A, B)).toMatchObject({ x: 5, y: 8, z: 6 });
  expect(subtractPoints(B, A)).toMatchObject({ x: 3, y: 4, z: 0 });
});
test('distance, midpoint, distance from origin', () => {
  expect(distanceBetween(A, B)).toBeCloseTo(5);
  expect(midpoint(A, B)).toMatchObject({ x: 2.5, y: 4, z: 3 });
  expect(distanceFromOrigin({ system: 'cartesian', x: 3, y: 4, z: 0 })).toBeCloseTo(5);
});
test('mixed systems are converted to Cartesian first', () => {
  const cyl: Point = { system: 'cylindrical', rho: 2, phi: Math.PI / 2, z: 1 };
  const r = addPoints(cyl, A);
  expect(r.x).toBeCloseTo(1); expect(r.y).toBeCloseTo(4); expect(r.z).toBeCloseTo(4);
});
test('Position vector P=(3,4,5) → OP = 3u_x + 4u_y + 5u_z', () => {
  const r = positionVector({ system: 'cartesian', x: 3, y: 4, z: 5 });
  expect(r.components).toEqual([3, 4, 5]);
  expect(r.unitForm).toBe('3u_x + 4u_y + 5u_z');
  expect(r.origin).toEqual([0, 0, 0]);
});
test('negative components formatting', () => {
  expect(positionVector({ system: 'cartesian', x: -1, y: 2, z: -3 }).unitForm).toBe('-1u_x + 2u_y - 3u_z');
});
test('Position vector rejects non-Cartesian input', () => {
  expect(() => positionVector({ system: 'cylindrical', rho: 1, phi: 0, z: 0 })).toThrow(/Cartesian input only/);
  expect(() => positionVector({ system: 'spherical', r: 1, theta: 1, phi: 0 })).toThrow(/Cartesian input only/);
});

test('distance vector R_AB = B − A (points from A to B)', () => {
  const r = distanceVector(A, B);
  expect(r.vector).toEqual([3, 4, 0]); expect(r.magnitude).toBeCloseTo(5); expect(r.unit![0]).toBeCloseTo(0.6);
  expect(distanceVector(A, A).unit).toBeNull();
});
