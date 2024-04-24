import { useCallback, useEffect, useRef, useState } from 'react';
import { type SwipeEvent, type SwipeConfig } from 'swiperia-core';
import { Swiper, MouseSwiper, TouchSwiper } from 'swiperia-js';
import { type SwiperiaCallbacks } from '../types';

export interface UseSwiperiaArgs extends SwiperiaCallbacks {
  config?: SwipeConfig;
}

export const useSwiperia = (args?: UseSwiperiaArgs) => {
  const [el, setEl] = useState<HTMLElement | null>(null);
  const swiperia = useRef<Swiper | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node || el) return;
    setEl(node);
  }, []);

  const callback = useCallback(
    (e: SwipeEvent) => {
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
    },
    [args]
  );

  useEffect(() => {
    if (!el) return;
    swiperia.current = new Swiper(el, [MouseSwiper, TouchSwiper]);
    swiperia.current.listen(callback);
    return () => {
      swiperia.current?.destroy();
      swiperia.current = null;
    };
  }, [callback, el]);

  return { ref, swiperia };
};
