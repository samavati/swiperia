import {
  type SwipeConfig,
  type Vector2,
  type SwipeCallback,
  movement,
} from 'swiperia-core';

/**
 * Abstract base class for a swipe detector that handles touch/pointer/pen events and
 * emits swipe events.
 *
 * Subclasses must implement the `point()` and `listen()` methods to handle the
 * specific event types and coordinate systems.
 *
 * The `_start()`, `_move()`, and `_end()` methods are called by the event
 * handlers to process the swipe events and emit the appropriate callbacks.
 *
 * The `_config` object can be used to customize the swipe detection behavior,
 * such as the minimum distance threshold and whether to prevent scrolling during
 * a swipe.
 */
export abstract class AbstractSwiper {
  protected _source: Vector2 = [0, 0];
  protected _startTime: number = 0;
  protected _callback: SwipeCallback = () => {};
  protected _config: SwipeConfig = {
    threshold: 10,
    preventScrollOnSwipe: false,
    allowedTime: 300,
  };

  constructor(public el: HTMLElement, config?: SwipeConfig) {
    if (config) {
      this._config = {
        ...this._config,
        ...config,
      };
    }
    this._start = this._start.bind(this);
    this._move = this._move.bind(this);
    this._end = this._end.bind(this);
  }

  abstract point(e: UIEvent): Vector2;

  protected _start(e: UIEvent) {
    const _source = this.point(e);
    this._source = _source;
    this._startTime = e.timeStamp;
    this._callback({
      event: e,
      type: 'start',
      direction: null,
      source: _source,
      target: _source,
      deltaX: 0,
      deltaY: 0,
      absX: 0,
      absY: 0,
      velocity: 0,
      vxvy: [0, 0],
      distance: 0,
    });
  }

  protected _move(e: UIEvent) {
    const a = this._source;
    const b = this.point(e);
    const _duration = (e.timeStamp || 0) - this._startTime;
    this._callback({
      event: e,
      type: 'move',
      ...movement(a, b, _duration),
    });
  }

  protected _end(e: UIEvent) {
    const a = this._source;
    const b = this.point(e);
    const _duration = (e.timeStamp || 0) - this._startTime;
    const _movement = movement(a, b, _duration);
    const allowedTime = this._config?.allowedTime || 300;
    const threshold = this._config?.threshold || 10;
    const constraint =
      _duration <= allowedTime && _movement.distance >= threshold;
    if (constraint) {
      this._callback({
        event: e,
        type: 'end',
        ..._movement,
      });
    } else {
      this._callback({
        event: e,
        type: 'cancel',
        ..._movement,
      });
    }
  }

  abstract listen(callback: SwipeCallback): void;
  abstract destroy(): void;
}
