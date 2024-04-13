import type { Point, SwipeCallback, SwipeConfig } from 'swiperia-core';
import { AbstractSwipeDetector } from './AbstractSwipeDetector';

export class TouchSwipeDetector extends AbstractSwipeDetector {
  constructor(el: HTMLElement, config?: SwipeConfig) {
    super(el, config);
  }

  point(e: TouchEvent): Point {
    const touch = e.touches[0];
    return [touch.pageX, touch.pageY];
  }

  listen(callback: SwipeCallback): void {
    this._callback = callback;
    this.el.addEventListener('touchstart', this._start, false);
    this.el.addEventListener('touchmove', this._move, false);
    this.el.addEventListener('touchend', this._end, false);
  }

  destroy(): void {
    this.el.removeEventListener('touchstart', this._start, false);
    this.el.removeEventListener('touchmove', this._move, false);
    this.el.removeEventListener('touchend', this._end, false);
  }
}
