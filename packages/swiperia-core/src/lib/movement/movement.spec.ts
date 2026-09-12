import type { Vector2 } from '../types/Vector2.type.js';
import { movement } from './movement.js';

describe('movement', () => {
  it('should calculate movement correctly for positive coordinates', () => {
    const source: Vector2 = [0, 0];
    const target: Vector2 = [3, 4];

    const result = movement(source, target, 100);

    expect(result).toEqual({
      source,
      target,
      deltaX: 3,
      deltaY: 4,
      absX: 3,
      absY: 4,
      direction: 'down',
      velocity: 0.05,
      vxvy: [0.03, 0.04],
      distance: 5,
    });
  });

  it('should calculate movement correctly for negative coordinates', () => {
    const source: Vector2 = [-2, 3];
    const target: Vector2 = [1, -1];

    const result = movement(source, target, 200);

    expect(result).toEqual({
      source,
      target,
      deltaX: 3,
      deltaY: -4,
      absX: 3,
      absY: 4,
      direction: 'up',
      velocity: 0.025,
      vxvy: [0.015, -0.02],
      distance: 5,
    });
  });

  it('should handle the case when source and target are the same', () => {
    const source: Vector2 = [5, 5];
    const target: Vector2 = [5, 5];

    const result = movement(source, target, 100);

    expect(result).toEqual({
      source,
      target,
      deltaX: 0,
      deltaY: 0,
      absX: 0,
      absY: 0,
      direction: null,
      velocity: 0,
      vxvy: [0, 0],
      distance: 0,
    });
  });

  it('should handle the case when only the x-coordinate changes', () => {
    const result = movement([0, 0], [5, 0], 100);

    expect(result.direction).toBe('right');
    expect(result.deltaX).toBe(5);
    expect(result.deltaY).toBe(0);
    expect(result.velocity).toBe(0.05);
    expect(result.vxvy).toEqual([0.05, 0]);
    expect(result.distance).toBe(5);
  });

  it('should handle the case when only the y-coordinate changes', () => {
    const result = movement([0, 0], [0, -5], 100);

    expect(result.direction).toBe('up');
    expect(result.deltaX).toBe(0);
    expect(result.deltaY).toBe(-5);
    expect(result.velocity).toBe(0.05);
    expect(result.vxvy).toEqual([0, -0.05]);
    expect(result.distance).toBe(5);
  });
});
