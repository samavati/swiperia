import type { Point, SwipeCallback, SwipeConfig } from 'swiperia-core';
import { AbstractSwipeDetector } from './AbstractSwipeDetector';

export class MouseSwipeDetector extends AbstractSwipeDetector {
  constructor(el: HTMLElement, config?: SwipeConfig) {
    super(el, config);
  }

  point(e: MouseEvent): Point {
    return [e.pageX, e.pageY];
  }

  listen(callback: SwipeCallback): void {
    this._callback = callback;
    this.el.addEventListener('mousedown', this._start, false);
    this.el.addEventListener('mousemove', this._move, false);
    this.el.addEventListener('mouseup', this._end, false);
  }

  destroy(): void {
    this.el.removeEventListener('mousedown', this._start, false);
    this.el.removeEventListener('mousemove', this._move, false);
    this.el.removeEventListener('mouseup', this._end, false);
  }
}
