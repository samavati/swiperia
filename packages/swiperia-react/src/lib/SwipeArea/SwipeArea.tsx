import {
  forwardRef,
  useCallback,
  type ComponentPropsWithRef,
  type PropsWithChildren,
} from 'react';
import type { SwiperiaCallbacks } from '../types';
import { useSwiperia } from '../useSwiperia/useSwiperia';

export type SwipeAreaProps = PropsWithChildren<SwiperiaCallbacks> &
  ComponentPropsWithRef<'div'>;

const SwipeArea = forwardRef<HTMLDivElement, SwipeAreaProps>(
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
    ref
  ) => {
    const { ref: _ref } = useSwiperia({
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
        _ref(el);
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
      },
      [_ref, ref]
    );

    return <div ref={handleRef} {...props} />;
  }
);

export default SwipeArea;
