import type { MovementEvent } from '../movement/MovementEvent.type';

export interface SwipeEvent extends MovementEvent {
  /**
   * original touch event from element
   */
  event: UIEvent;
  /**
   * type of the event
   */
  type: 'start' | 'move' | 'end' | 'cancel';
}
