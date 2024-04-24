import type { MovementEvent } from './MovementEvent.type';

/**
 * Represents a swipe event, which extends the `MovementEvent` type.
 */
export interface SwipeEvent extends MovementEvent {
  /**
   * The original touch event from the element.
   */
  event: UIEvent;
  /**
   * The type of the swipe event.
   */
  type: 'start' | 'move' | 'end' | 'cancel';
}
