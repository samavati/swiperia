import { useCallback, useEffect, useRef } from 'react';
import type { SwipeEvent, SwipeConfig } from 'swiperia-core';
import { MouseSwiper, Swiper, TouchSwiper } from 'swiperia-js';
import type { SwiperiaCallbacks } from '../types.js';

export interface UseSwiperiaArgs extends SwiperiaCallbacks {
  config?: SwipeConfig;
}

export const useSwiperia = (args?: UseSwiperiaArgs) => {
  const el = useRef<HTMLElement | null>(null);
  const swiperia = useRef<Swiper | null>(null);

  // Keep the latest callbacks in a ref so that re-rendering with new inline
  // handlers does not tear down and re-attach the DOM listeners.
  const latest = useRef(args);
  latest.current = args;

  const destroy = useCallback(() => {
    if (swiperia.current) {
      swiperia.current.destroy();
      swiperia.current = null;
    }
  }, []);

  const listen = useCallback(() => {
    if (!el.current) return;
    // Idempotent: never leave a previous Swiper attached to the element.
    destroy();
    const swiper = new Swiper(
      el.current,
      [MouseSwiper, TouchSwiper],
      latest.current?.config,
    );
    swiperia.current = swiper;
    swiper.listen((e: SwipeEvent) => {
      const handlers = latest.current;
      switch (e.type) {
        case 'end':
          handlers?.onSwiped?.(e);
          switch (e.direction) {
            case 'down':
              handlers?.onSwipedDown?.(e);
              break;
            case 'left':
              handlers?.onSwipedLeft?.(e);
              break;
            case 'right':
              handlers?.onSwipedRight?.(e);
              break;
            case 'up':
              handlers?.onSwipedUp?.(e);
              break;
          }
          break;
        case 'start':
          handlers?.onSwipeStart?.(e);
          break;
        case 'move':
          handlers?.onSwiping?.(e);
          break;
        case 'cancel':
          handlers?.onSwipeCancelled?.(e);
          break;
      }
    });
  }, [destroy]);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (node && node !== el.current) {
        el.current = node;
        listen();
      }
    },
    [listen],
  );

  useEffect(() => {
    listen();
    return destroy;
  }, [listen, destroy]);

  return { ref, swiperia };
};
