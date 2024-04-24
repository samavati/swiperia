import type { SwipeDirection } from './SwipeDirection.type';
import type { Vector2 } from './Vector2.type';

/**
 * Represents a movement event,
 * containing information about the direction, source, target,
 * and various metrics of the movement.
 */
export interface MovementEvent {
  /**
   * direction of the movement
   */
  direction: SwipeDirection | null;
  /**
   * starting point of the movement
   */
  source: Vector2;
  /**
   * ending point of the movement
   */
  target: Vector2;
  /**
   * the directed horizontal distance that the swipe traveled along the X axis, measured in pixels.
   * Positive values indicate a swipe to the right,
   * while negative values indicate a swipe to the left.
   */
  deltaX: number;
  /**
   * the directed vertical distance that the swipe traveled along the Y axis, measured in pixels.
   * Positive values indicate a swipe downward,
   * while negative values indicate a swipe upward.
   */
  deltaY: number;
  /**
   * the absolute distance traveled along the X axis, measured in pixels.
   * This value represents the non-negative magnitude of the displacement,
   * ignoring the direction of travel.
   */
  absX: number;
  /**
   * the absolute distance traveled along the Y axis, measured in pixels.
   * This value represents the non-negative magnitude of the displacement,
   * regardless of whether the swipe was upward or downward.
   */
  absY: number;
  /**
   * √(absX^2 + absY^2) / time - "absolute velocity" (speed)
   */
  velocity: number;
  /**
   * deltaX/time, deltaY/time] - velocity per axis
   */
  vxvy: Vector2;
  /**
   * the total distance traveled,
   * calculated as the straight-line (Euclidean) distance between the start and end points of the movement,
   * measured in pixels.
   */
  distance: number;
}
