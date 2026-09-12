import type { SwipeCallback, SwipeConfig } from 'swiperia-core';
import { AbstractSwiper } from '../AbstractSwiper/AbstractSwiper.js';

export class Swiper {
  private _detectors: AbstractSwiper[] = [];
  constructor(
    public el: HTMLElement,
    public detectors: (new (
      el: HTMLElement,
      config?: SwipeConfig,
    ) => AbstractSwiper)[],
    public config?: SwipeConfig,
  ) {}

  listen(callback: SwipeCallback) {
    for (const Detector of this.detectors) {
      const instance = new Detector(this.el, this.config);
      this._detectors.push(instance);
      instance.listen(callback);
    }
  }

  destroy() {
    for (const detector of this._detectors) {
      detector.destroy();
    }
    this._detectors = [];
  }
}
