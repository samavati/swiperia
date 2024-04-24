import type { Vector2 } from '../types/Vector2.type';
import type { SwipeDirection } from '../types/SwipeDirection.type';

/**
 * Determines the direction between two points.
 *
 * @param a - The starting point.
 * @param b - The ending point.
 * @returns The direction between the two points, or `null` if the points are the same.
 */
export const direction = (a: Vector2, b: Vector2): SwipeDirection | null => {
  const [ax, ay] = a;
  const [bx, by] = b;
  const dx = bx - ax;
  const dy = by - ay;
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  // If the points are the same, return null.
  if (absX === 0 && absY === 0) return null;
  if (absX > absY) {
    return dx > 0 ? 'right' : 'left';
  }
  return dy > 0 ? 'down' : 'up';
};
