import type { Vector2, SwipeCallback, SwipeConfig } from 'swiperia-core';
import { AbstractSwiper } from '../AbstractSwiper/AbstractSwiper';

export class MouseSwiper extends AbstractSwiper {
  constructor(el: HTMLElement, config?: SwipeConfig) {
    super(el, config);
  }

  point(e: MouseEvent): Vector2 {
    return [e.pageX, e.pageY];
  }

  protected override _start(e: UIEvent): void {
    super._start(e);
    window.addEventListener('mousemove', this._move, false);
    window.addEventListener('mouseup', this._end, false);
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
