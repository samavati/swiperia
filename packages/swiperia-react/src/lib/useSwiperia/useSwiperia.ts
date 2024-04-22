import { useCallback, useEffect, useRef } from 'react';
import { type SwipeConfig } from 'swiperia-core';
import {
  MouseSwipeDetector,
  SwipeDetector,
  TouchSwipeDetector,
} from 'swiperia-js';
import { SwiperiaCallbacks } from '../types';

export interface UseSwiperiaArgs extends SwiperiaCallbacks {
  config?: SwipeConfig;
}

export const useSwiperia = (args?: UseSwiperiaArgs) => {
  const swiperia = useRef<SwipeDetector | null>(null);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return;
      if (swiperia.current) {
        swiperia.current.destroy();
        swiperia.current = null;
      }
      swiperia.current = new SwipeDetector(node, [
        MouseSwipeDetector,
        TouchSwipeDetector,
      ]);
    },
    [swiperia.current]
  );

  useEffect(() => {
    if (!swiperia.current) return;
    if (swiperia.current) {
      swiperia.current.listen((e) => {
        switch (e.type) {
          case 'end':
            args?.onSwiped?.(e);
            switch (e.direction) {
              case 'down':
                args?.onSwipedDown?.(e);
                break;
              case 'left':
                args?.onSwipedLeft?.(e);
                break;
              case 'right':
                args?.onSwipedRight?.(e);
                break;
              case 'up':
                args?.onSwipedUp?.(e);
                break;
            }
            break;
          case 'start':
            args?.onSwipeStart?.(e);
            break;
          case 'move':
            args?.onSwiping?.(e);
            break;
        }
      });
    }
    return () => {
      swiperia.current?.destroy();
    };
  }, [swiperia.current]);

  return { ref };
};
