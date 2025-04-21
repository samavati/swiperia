import { SwipeCallback } from 'swiperia-core';

export type { SwipeCallback };

export interface SwiperiaDirectionCallbacks {
  /**
   * Called after a DOWN swipe
   */
  onSwipedDown?: SwipeCallback;
  /**
   * Called after a LEFT swipe
   */
  onSwipedLeft?: SwipeCallback;
  /**
   * Called after a RIGHT swipe
   */
  onSwipedRight?: SwipeCallback;
  /**
   * Called after a UP swipe
   */
  onSwipedUp?: SwipeCallback;
}

export interface SwiperiaCallbacks extends SwiperiaDirectionCallbacks {
  /**
   * Called at start of a tracked swipe.
   */
  onSwipeStart?: SwipeCallback;
  /**
   * Called after any swipe.
   */
  onSwiped?: SwipeCallback;
  /**
   * Called for each move event during a tracked swipe.
   */
  onSwiping?: SwipeCallback;
  /**
   * Called when the swipe is cancelled.
   */
  onSwipeCancelled?: SwipeCallback;
}
