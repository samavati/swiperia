import type { MovementEvent } from '../types/MovementEvent.type';
import type { Vector2 } from '../types/Vector2.type';

import { direction } from '../direction/direction';
import { distance } from '../distance/distance';
import { velocity, vxvy } from '../velocity/velocity';

/**
 * Calculates a movement event based on the given source and target points, and the duration of the movement.
 *
 * @param source - The starting point of the movement.
 * @param target - The ending point of the movement.
 * @param duration - The duration of the movement in milliseconds.
 * @returns A movement event object containing details about the movement.
 */
export const movement = (
  source: Vector2,
  target: Vector2,
  duration: number
): MovementEvent => {
  const deltaX = target[0] - source[0];
  const deltaY = target[1] - source[1];
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);
  return {
    source,
    target,
    deltaX,
    deltaY,
    absX,
    absY,
    direction: direction(source, target),
    velocity: velocity(source, target, duration),
    vxvy: vxvy(source, target, duration),
    distance: distance(source, target),
  };
};
