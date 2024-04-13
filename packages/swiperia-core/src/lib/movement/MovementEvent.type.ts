import type { Direction } from '../direction/Direction.type';
import type { Point } from '../point/Point.type';
import type { Velocity } from '../velocity/Velocity.type';

export interface MovementEvent {
  /**
   *
   */
  direction: Direction | null;
  source: Point;
  target: Point;
  deltaX: number;
  deltaY: number;
  /**
   * absolute deltaX
   */
  absX: number;
  /**
   * absolute deltaY
   */
  absY: number;
  /**
   * √(absX^2 + absY^2) / time - "absolute velocity" (speed)
   */
  velocity: number;
  /**
   * deltaX/time, deltaY/time] - velocity per axis
   */
  vxvy: Velocity;
  /**
   * distance traveled
   */
  distance: number;
}
