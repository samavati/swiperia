import { vi, Mock } from 'vitest';
import { Swiper } from './Swiper';

describe('Swiper', () => {
  let swiper: Swiper;
  let el: HTMLElement;
  let detectors: Mock[];
  let destroy: Mock;
  let config: any;
  let callback: Mock;

  beforeEach(() => {
    el = document.createElement('div');
    const detector = vi.fn();
    const listen = vi.fn();
    destroy = vi.fn();
    detector.prototype.listen = listen;
    detector.prototype.destroy = destroy;
    callback = vi.fn();
    detectors = [detector];
    config = { threshold: 10 };
    swiper = new Swiper(el, detectors, config);
  });

  afterEach(() => {
    swiper.destroy();
  });

  it('should create an instance of Swiper', () => {
    expect(swiper).toBeInstanceOf(Swiper);
  });

  it('should create instances of detectors and listen for swipe events', () => {
    swiper.listen(callback);

    expect(detectors[0]).toHaveBeenCalledWith(el, config);
    expect(detectors[0].mock.instances[0].listen).toHaveBeenCalledWith(
      callback
    );
  });

  it('should destroy all detector instances', () => {
    swiper.listen(callback);
    swiper.destroy();

    expect(destroy).toHaveBeenCalled();
  });
});
