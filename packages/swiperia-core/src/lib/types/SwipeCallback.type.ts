import type { SwipeEvent } from './SwipeEvent.type';

/**
 * A callback function that is called when a swipe event occurs.
 * @param event - The swipe event object containing details about the swipe gesture.
 */
export type SwipeCallback = (event: SwipeEvent) => void;
