import type { Point } from '../point/Point.type';
import type { Velocity } from './Velocity.type';
import { distance } from '../point/distance';

/**
 * Calculates the velocity vector (vx, vy) between two points over a given time delta.
 *
 * @param a - The starting point.
 * @param b - The ending point.
 * @param dt - The time delta in seconds.
 * @returns The velocity vector (vx, vy) in units per second.
 */
export const vxvy = (a: Point, b: Point, dt: number): Velocity => {
  if (dt <= 0) throw new Error('Time delta must be non-zero and positive.');
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
export const velocity = (a: Point, b: Point, dt: number): number => {
  if (dt <= 0) throw new Error('Time delta must be non-zero and positive.');
  const _distance = distance(a, b);
  return _distance / dt;
};
