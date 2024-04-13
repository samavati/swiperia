import type { MovementEvent } from './MovementEvent.type';
import type { Point } from '../point/Point.type';

import { direction } from '../direction/direction';
import { distance } from '../point/distance';
import { velocity, vxvy } from '../velocity/velocity';

export const movement = (
  source: Point,
  target: Point,
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
