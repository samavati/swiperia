import { Vector2 } from '../types/Vector2.type';
import { velocity, vxvy } from './velocity';

describe('vxvy', () => {
  it('should calculate velocity correctly for positive coordinates', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    const dt = 2;
    const expectedVelocity: Vector2 = [1.5, 2];
    expect(vxvy(a, b, dt)).toEqual(expectedVelocity);
  });

  it('should calculate velocity correctly for negative coordinates', () => {
    const a: Vector2 = [-2, 3];
    const b: Vector2 = [1, -1];
    const dt = 1;
    const expectedVelocity: Vector2 = [3, -4];
    expect(vxvy(a, b, dt)).toEqual(expectedVelocity);
  });

  it('should return [0, 0] when points are the same', () => {
    const a: Vector2 = [5, 5];
    const b: Vector2 = [5, 5];
    const dt = 1;
    const expectedVelocity: Vector2 = [0, 0];
    expect(vxvy(a, b, dt)).toEqual(expectedVelocity);
  });

  it('should handle zero time delta', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    const dt = 0;
    expect(vxvy(a, b, dt)).toEqual([Infinity, Infinity]);
  });
});
describe('vxvy', () => {
  it('should calculate velocity correctly when time delta is negative', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    const dt = -2;
    expect(() => vxvy(a, b, dt)).toThrow();
  });

  it('should calculate velocity correctly when points have large coordinates', () => {
    const a: Vector2 = [1000, -2000];
    const b: Vector2 = [2000, 3000];
    const dt = 5;
    const expectedVelocity: Vector2 = [200, 1000];
    expect(vxvy(a, b, dt)).toEqual(expectedVelocity);
  });

  it('should calculate velocity correctly when points have decimal coordinates', () => {
    const a: Vector2 = [1.5, 2.7];
    const b: Vector2 = [4.2, -1.8];
    const dt = 3;
    const expectedVelocity: Vector2 = [0.9, -1.5];
    expect(vxvy(a, b, dt)).toEqual(expectedVelocity);
  });
});

describe('velocity', () => {
  it('should calculate velocity correctly for positive coordinates using the velocity function', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    const dt = 2;
    const expectedVelocity = 2.5;
    expect(velocity(a, b, dt)).toEqual(expectedVelocity);
  });

  it('should calculate velocity correctly for negative coordinates using the velocity function', () => {
    const a: Vector2 = [-2, 3];
    const b: Vector2 = [1, -1];
    const dt = 1;
    const expectedVelocity = 5;
    expect(velocity(a, b, dt)).toEqual(expectedVelocity);
  });

  it('should return NaN when points are the same using the velocity function', () => {
    const a: Vector2 = [5, 5];
    const b: Vector2 = [5, 5];
    const dt = 1;
    expect(velocity(a, b, dt)).toEqual(0);
  });

  it('should handle zero time delta using the velocity function', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    const dt = 0;
    expect(velocity(a, b, dt)).toEqual(Infinity);
  });

  it('should calculate velocity correctly when time delta is negative using the velocity function', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    const dt = -2;
    expect(() => velocity(a, b, dt)).toThrow();
  });

});
