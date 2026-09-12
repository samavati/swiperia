import type { Vector2, SwipeCallback, SwipeConfig } from 'swiperia-core';
import { AbstractSwiper } from '../AbstractSwiper/AbstractSwiper.js';

export class MouseSwiper extends AbstractSwiper {
  constructor(el: HTMLElement, config?: SwipeConfig) {
    super(el, config);
  }

  point(e: MouseEvent): Vector2 {
    return [e.pageX, e.pageY];
  }

  protected override _start(e: UIEvent): void {
    // Add the listeners before the callback runs, so a destroy() from it removes them.
    window.addEventListener('mousemove', this._move, false);
    window.addEventListener('mouseup', this._end, false);
    super._start(e);
  }

  protected override _end(e: UIEvent): void {
    super._end(e);
    window.removeEventListener('mousemove', this._move, false);
    window.removeEventListener('mouseup', this._end, false);
  }

  listen(callback: SwipeCallback): void {
    this._callback = callback;
    this.el.addEventListener('mousedown', this._start, false);
  }

  destroy(): void {
    this.el.removeEventListener('mousedown', this._start, false);
    window.removeEventListener('mousemove', this._move, false);
    window.removeEventListener('mouseup', this._end, false);
  }
}
