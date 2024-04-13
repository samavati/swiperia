import type { Point } from './Point.type';

/**
 * Calculates the Euclidean distance between two points.
 *
 * @param a - The first point.
 * @param b - The second point.
 * @returns The Euclidean distance between the two points.
 */
export const distance = (a: Point, b: Point): number => {
  const [ax, ay] = a;
  const [bx, by] = b;
  const dx = ax - bx;
  const dy = ay - by;
  return Math.sqrt(dx * dx + dy * dy);
};
