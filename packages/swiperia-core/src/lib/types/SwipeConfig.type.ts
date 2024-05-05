/**
 * Configures the behavior of a swipe gesture.
 */
export type SwipeConfig = {
  /**
   * required min distance(px) traveled to be considered swipe
   */
  threshold?: number;
  /**
   * maximum time(ms) allowed to travel that distance
   */
  allowedTime?: number;
};
