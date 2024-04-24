import { Vector2 } from '../types/Vector2.type';
import { distance } from './distance';

describe('distance', () => {
  it('should calculate the distance between two points', () => {
    const a: Vector2 = [0, 0];
    const b: Vector2 = [3, 4];
    expect(distance(a, b)).toEqual(5);
  });

  it('should handle negative coordinates', () => {
    const a: Vector2 = [-2, 3];
    const b: Vector2 = [1, -1];
    expect(distance(a, b)).toEqual(5);
  });

  it('should return 0 for the same point', () => {
    const a: Vector2 = [5, 5];
    const b: Vector2 = [5, 5];
    expect(distance(a, b)).toEqual(0);
  });
});
