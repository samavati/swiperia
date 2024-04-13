import { Point } from './Point.type';
import { distance } from './distance';

describe('distance', () => {
  it('should calculate the distance between two points', () => {
    const a: Point = [0, 0];
    const b: Point = [3, 4];
    expect(distance(a, b)).toEqual(5);
  });

  it('should handle negative coordinates', () => {
    const a: Point = [-2, 3];
    const b: Point = [1, -1];
    expect(distance(a, b)).toEqual(5);
  });

  it('should return 0 for the same point', () => {
    const a: Point = [5, 5];
    const b: Point = [5, 5];
    expect(distance(a, b)).toEqual(0);
  });
});
