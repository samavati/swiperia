import type { SwipeCallback, SwipeConfig } from 'swiperia-core';
import { vi, type Mock } from 'vitest';
import { AbstractSwiper } from '../AbstractSwiper/AbstractSwiper.js';
import { Swiper } from './Swiper.js';

describe('Swiper', () => {
  let swiper: Swiper;
  let el: HTMLElement;
  let detector: Mock;
  let listen: Mock;
  let destroy: Mock;
  let config: SwipeConfig;
  let callback: SwipeCallback;

  beforeEach(() => {
    el = document.createElement('div');
    detector = vi.fn();
    listen = vi.fn();
    destroy = vi.fn();
    detector.prototype.listen = listen;
    detector.prototype.destroy = destroy;
    callback = vi.fn();
    config = { threshold: 10 };
    swiper = new Swiper(
      el,
      [detector as unknown as new () => AbstractSwiper],
      config,
    );
  });

  afterEach(() => {
    swiper.destroy();
  });

  it('should create an instance of Swiper', () => {
    expect(swiper).toBeInstanceOf(Swiper);
  });

  it('should create instances of detectors and listen for swipe events', () => {
    swiper.listen(callback);

    expect(detector).toHaveBeenCalledWith(el, config);
    expect(listen).toHaveBeenCalledWith(callback);
  });

  it('should destroy all detector instances', () => {
    swiper.listen(callback);
    swiper.destroy();

    expect(destroy).toHaveBeenCalled();
  });

  it('should not destroy an instance twice', () => {
    swiper.listen(callback);
    swiper.destroy();
    swiper.destroy();

    expect(destroy).toHaveBeenCalledTimes(1);
  });
});
