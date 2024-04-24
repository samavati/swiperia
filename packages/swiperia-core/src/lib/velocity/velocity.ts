import type { Vector2 } from '../types/Vector2.type';

import { distance } from '../distance/distance';

/**
 * Calculates the velocity vector (vx, vy) between two points over a given time delta.
 *
 * @param a - The starting point.
 * @param b - The ending point.
 * @param dt - The time delta in seconds.
 * @returns The velocity vector (vx, vy) in units per second.
 */
export const vxvy = (a: Vector2, b: Vector2, dt: number): Vector2 => {
  if (dt < 0) throw new Error('Time delta must be positive.');
  if (dt === 0) return [Infinity, Infinity];
  const [ax, ay] = a;
  const [bx, by] = b;
  const dx = bx - ax;
  const dy = by - ay;
  return [dx / dt, dy / dt];
};

/**
 * Calculates the velocity between two points over a given time delta.
 *
 * @param a - The starting point.
 * @param b - The ending point.
 * @param dt - The time delta in seconds.
 * @returns The velocity in units per second.
 */
export const velocity = (a: Vector2, b: Vector2, dt: number): number => {
  if (dt < 0) throw new Error('Time delta must be positive.');
  if (dt === 0) return Infinity;
  const _distance = distance(a, b);
  return _distance / dt;
};
