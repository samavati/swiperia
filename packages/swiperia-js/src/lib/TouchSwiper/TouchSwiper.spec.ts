import { Mock, vi } from 'vitest';
import { SwipeConfig } from 'swiperia-core';
import { MockTouch } from 'test-utils';
import { TouchSwiper } from './TouchSwiper';

// Mock the window.Touch object
if (typeof window.Touch === 'undefined') {
  window.Touch = MockTouch;
}

describe('TouchSwiper', () => {
  let startEvent: TouchEvent;
  let endEvent: TouchEvent;
  let touchSwiper: TouchSwiper;
  let el: HTMLElement;
  let callback: Mock;
  let config: SwipeConfig;

  beforeEach(() => {
    touchSwiper?.destroy();
    callback = vi.fn();
    el = document.createElement('div');
    config = {
      threshold: 10,
    };
    touchSwiper = new TouchSwiper(el, config);
    const start = new Touch({
      clientX: 100,
      clientY: 200,
      identifier: Date.now() - 1000,
      target: el,
    });
    const end = new Touch({
      clientX: 200,
      clientY: 300,
      identifier: Date.now(),
      target: el,
    });
    startEvent = new TouchEvent('touchstart', { changedTouches: [start] });
    endEvent = new TouchEvent('touchend', { changedTouches: [end] });
  });

  it('should create an instance of TouchSwiper', () => {
    expect(touchSwiper).toBeInstanceOf(TouchSwiper);
  });

  it('should return correct point from mouse event', () => {
    const point = touchSwiper.point(startEvent);
    expect(point).toEqual([100, 200]);
  });

  it('should add event listeners on touchstart', () => {
    touchSwiper.listen(callback);
    const spy = vi.spyOn(window, 'addEventListener');
    el.dispatchEvent(startEvent);

    expect(spy).toHaveBeenCalledWith('touchmove', expect.anything(), false);
    expect(spy).toHaveBeenCalledWith('touchend', expect.anything(), false);

    spy.mockRestore();
  });

  it('should remove event listeners on touchend', () => {
    touchSwiper.listen(callback);
    const spy = vi.spyOn(window, 'removeEventListener');
    el.dispatchEvent(startEvent);
    window.dispatchEvent(endEvent);

    expect(spy).toHaveBeenCalledWith('touchmove', expect.anything(), false);
    expect(spy).toHaveBeenCalledWith('touchend', expect.anything(), false);

    spy.mockRestore();
  });

  it('should add and remove event listeners on listen and destroy', () => {
    const addEventListenerSpy = vi.spyOn(el, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(el, 'removeEventListener');
    touchSwiper.listen(callback);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'touchstart',
      expect.anything(),
      false
    );

    touchSwiper.destroy();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'touchstart',
      expect.anything(),
      false
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
