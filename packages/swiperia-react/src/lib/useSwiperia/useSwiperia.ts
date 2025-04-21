import { useCallback, useEffect, useRef } from 'react';
import { type SwipeEvent, type SwipeConfig } from 'swiperia-core';
import { MouseSwiper, Swiper, TouchSwiper } from 'swiperia-js';
import { type SwiperiaCallbacks } from '../types';

export interface UseSwiperiaArgs extends SwiperiaCallbacks {
  config?: SwipeConfig;
}

export const useSwiperia = (args?: UseSwiperiaArgs) => {
  const el = useRef<HTMLElement | null>(null);
  const swiperia = useRef<Swiper | null>(null);

  const destroy = useCallback(() => {
    if (swiperia.current) {
      swiperia.current.destroy();
      swiperia.current = null;
    }
  }, []);

  const listen = useCallback(() => {
    if (el.current) {
      swiperia.current = new Swiper(
        el.current,
        [MouseSwiper, TouchSwiper],
        args?.config
      );
      swiperia.current?.listen((e: SwipeEvent) => {
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
          case 'cancel':
            args?.onSwipeCancelled?.(e);
            break;
        }
      });
    }
  }, [
    args?.config,
    args?.onSwiped,
    args?.onSwipedDown,
    args?.onSwipedLeft,
    args?.onSwipedRight,
    args?.onSwipedUp,
    args?.onSwipeStart,
    args?.onSwiping,
    args?.onSwipeCancelled,
  ]);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (node && !node.isEqualNode(el.current)) {
        el.current = node;
        destroy();
        listen();
      }
    },
    [destroy, listen]
  );

  useEffect(() => {
    listen();
    return () => {
      destroy();
    };
  }, [listen, destroy]);

  return { ref, swiperia };
};
