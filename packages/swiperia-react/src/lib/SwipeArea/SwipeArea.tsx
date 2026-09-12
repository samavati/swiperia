import {
  forwardRef,
  useCallback,
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type Ref,
} from 'react';
import type { SwiperiaCallbacks } from '../types.js';
import { useSwiperia } from '../useSwiperia/useSwiperia.js';

export type SwipeAreaProps = PropsWithChildren<SwiperiaCallbacks> &
  ComponentPropsWithoutRef<'div'>;

const assignRef = (
  ref: Ref<HTMLDivElement> | null,
  el: HTMLDivElement | null,
) => {
  if (typeof ref === 'function') {
    ref(el);
  } else if (ref) {
    (ref as { current: HTMLDivElement | null }).current = el;
  }
};

export const SwipeArea = forwardRef<HTMLDivElement, SwipeAreaProps>(
  (
    {
      onSwipeStart,
      onSwipedDown,
      onSwiped,
      onSwipedLeft,
      onSwipedRight,
      onSwipedUp,
      onSwiping,
      onSwipeCancelled,
      ...props
    },
    ref,
  ) => {
    const { ref: swipeRef } = useSwiperia({
      onSwipeStart,
      onSwipedDown,
      onSwiped,
      onSwipedLeft,
      onSwipedRight,
      onSwipedUp,
      onSwiping,
      onSwipeCancelled,
    });

    const handleRef = useCallback(
      (el: HTMLDivElement | null) => {
        swipeRef(el);
        assignRef(ref, el);
      },
      [swipeRef, ref],
    );

    return <div {...props} ref={handleRef} />;
  },
);

SwipeArea.displayName = 'SwipeArea';

export default SwipeArea;
