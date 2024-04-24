import type { Vector2, SwipeCallback, SwipeConfig } from 'swiperia-core';
import { AbstractSwiper } from '../AbstractSwiper/AbstractSwiper';

export class TouchSwiper extends AbstractSwiper {
  constructor(el: HTMLElement, config?: SwipeConfig) {
    super(el, config);
  }

  point(e: TouchEvent): Vector2 {
    const touch = e.changedTouches[0];
    return [touch.pageX, touch.pageY];
  }

  protected override _start(e: UIEvent): void {
    super._start(e);
    window.addEventListener('touchmove', this._move, false);
    window.addEventListener('touchend', this._end, false);
  }

  protected override _end(e: UIEvent): void {
    super._end(e);
    window.removeEventListener('touchmove', this._move, false);
    window.removeEventListener('touchend', this._end, false);
  }

  listen(callback: SwipeCallback): void {
    this._callback = callback;
    this.el.addEventListener('touchstart', this._start, false);
  }

  destroy(): void {
    this.el.removeEventListener('touchstart', this._start, false);
    window.removeEventListener('touchmove', this._move, false);
    window.removeEventListener('touchend', this._end, false);
  }
}
