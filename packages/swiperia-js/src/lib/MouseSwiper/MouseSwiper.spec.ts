import { Mock, vi } from 'vitest';
import { SwipeConfig } from 'swiperia-core';
import { MouseSwiper } from './MouseSwiper';

describe('MouseSwiper', () => {
  const startEvent = new MouseEvent('mousedown', {
    clientX: 100,
    clientY: 200,
  });
  const endEvent = new MouseEvent('mouseup', { clientX: 250, clientY: 350 });
  let mouseSwiper: MouseSwiper;
  let el: HTMLElement;
  let callback: Mock;
  let config: SwipeConfig;

  beforeEach(() => {
    mouseSwiper?.destroy();
    callback = vi.fn();
    el = document.createElement('div');
    config = {
      threshold: 10,
    };
    mouseSwiper = new MouseSwiper(el, config);
  });

  it('should create an instance of MouseSwiper', () => {
    expect(mouseSwiper).toBeInstanceOf(MouseSwiper);
  });

  it('should return correct point from mouse event', () => {
    const point = mouseSwiper.point(startEvent);
    expect(point).toEqual([100, 200]);
  });

  it('should add event listeners on mousedown', () => {
    mouseSwiper.listen(callback);
    const spy = vi.spyOn(window, 'addEventListener');
    el.dispatchEvent(startEvent);

    expect(spy).toHaveBeenCalledWith('mousemove', expect.anything(), false);
    expect(spy).toHaveBeenCalledWith('mouseup', expect.anything(), false);

    spy.mockRestore();
  });

  it('should remove event listeners on mouseup', () => {
    mouseSwiper.listen(callback);
    const spy = vi.spyOn(window, 'removeEventListener');
    el.dispatchEvent(startEvent);
    window.dispatchEvent(endEvent);

    expect(spy).toHaveBeenCalledWith('mousemove', expect.anything(), false);
    expect(spy).toHaveBeenCalledWith('mouseup', expect.anything(), false);

    spy.mockRestore();
  });

  it('should add and remove event listeners on listen and destroy', () => {
    const addEventListenerSpy = vi.spyOn(el, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(el, 'removeEventListener');
    mouseSwiper.listen(callback);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'mousedown',
      expect.anything(),
      false
    );

    mouseSwiper.destroy();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'mousedown',
      expect.anything(),
      false
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
