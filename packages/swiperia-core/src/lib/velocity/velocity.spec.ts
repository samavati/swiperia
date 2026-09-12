import type { Vector2 } from '../types/Vector2.type.js';
import { velocity, vxvy } from './velocity.js';

describe('vxvy', () => {
  it('should calculate velocity correctly for positive coordinates', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    expect(vxvy(a, b, 2)).toEqual([1.5, 2]);
  });

  it('should calculate velocity correctly for negative coordinates', () => {
    const a: Vector2 = [-2, 3];
    const b: Vector2 = [1, -1];
    expect(vxvy(a, b, 1)).toEqual([3, -4]);
  });

  it('should return [0, 0] when points are the same', () => {
    const a: Vector2 = [5, 5];
    const b: Vector2 = [5, 5];
    expect(vxvy(a, b, 1)).toEqual([0, 0]);
  });

  it('should handle zero time delta', () => {
    expect(vxvy([0, 0], [3, 4], 0)).toEqual([Infinity, Infinity]);
  });

  it('should throw when the time delta is negative', () => {
    expect(() => vxvy([0, 0], [3, 4], -2)).toThrow();
  });

  it('should calculate velocity correctly when points have large coordinates', () => {
    const a: Vector2 = [1000, -2000];
    const b: Vector2 = [2000, 3000];
    expect(vxvy(a, b, 5)).toEqual([200, 1000]);
  });

  it('should calculate velocity correctly when points have decimal coordinates', () => {
    const a: Vector2 = [1.5, 2.7];
    const b: Vector2 = [4.2, -1.8];
    expect(vxvy(a, b, 3)).toEqual([0.9, -1.5]);
  });
});

describe('velocity', () => {
  it('should calculate velocity correctly for positive coordinates', () => {
    expect(velocity([0, 0], [3, 4], 2)).toEqual(2.5);
  });

  it('should calculate velocity correctly for negative coordinates', () => {
    expect(velocity([-2, 3], [1, -1], 1)).toEqual(5);
  });

  it('should return 0 when points are the same', () => {
    expect(velocity([5, 5], [5, 5], 1)).toEqual(0);
  });

  it('should handle zero time delta', () => {
    expect(velocity([0, 0], [3, 4], 0)).toEqual(Infinity);
  });

  it('should throw when the time delta is negative', () => {
    expect(() => velocity([0, 0], [3, 4], -2)).toThrow();
  });
});
