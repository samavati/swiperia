import { AbstractSwiper } from './AbstractSwiper';
import { movement } from 'swiperia-core';
import { MouseEvents } from 'test-utils';
import { vi, Mock } from 'vitest';

class MockSwiper extends AbstractSwiper {
  constructor(el: HTMLElement, config?: any) {
    super(el, config);
  }

  point(e: MouseEvent): [number, number] {
    return [e.clientX, e.clientY];
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

  listen(callback: any): void {
    this._callback = callback;
    this.el.addEventListener('mousedown', this._start, false);
  }

  destroy(): void {
    this.el.removeEventListener('mousedown', this._start, false);
    window.removeEventListener('mousemove', this._move, false);
    window.removeEventListener('mouseup', this._end, false);
  }
}

describe('AbstractSwipeDetector', () => {
  let detector: MockSwiper;
  let callback: Mock;
  let events: MouseEvents;

  beforeEach(() => {
    const el = document.createElement('div');
    callback = vi.fn();
    detector = new MockSwiper(el);
    detector.listen(callback);
    events = new MouseEvents(el);
  });

  it('should call start callback with correct data', () => {
    const event = events.start();

    expect(callback).toHaveBeenCalledWith({
      event,
      type: 'start',
      direction: null,
      source: [event.pageX, event.pageY],
      target: [event.pageX, event.pageY],
      deltaX: 0,
      deltaY: 0,
      absX: 0,
      absY: 0,
      velocity: 0,
      vxvy: [0, 0],
      distance: 0,
    });
  });

  it('should call move callback with correct data', () => {
    const startEvent = events.start();
    const moveEvent = events.move();

    const expectedMovement = movement(
      [startEvent.pageX, startEvent.pageY],
      [moveEvent.pageX, moveEvent.pageY],
      moveEvent.timeStamp - startEvent.timeStamp
    );

    expect(callback).toHaveBeenCalledTimes(2);

    expect(callback.mock.calls[1][0]).toEqual({
      event: moveEvent,
      type: 'move',
      ...expectedMovement,
    });
  });

  it('should call end callback with correct data when constraint is met', () => {
    const startEvent = events.start();
    const endEvent = events.end();

    const expectedMovement = movement(
      [startEvent.pageX, startEvent.pageY],
      [endEvent.pageX, endEvent.pageY],
      endEvent.timeStamp - startEvent.timeStamp
    );

    expect(callback).toHaveBeenCalledWith({
      event: endEvent,
      type: 'end',
      ...expectedMovement,
    });
  });

  it('should call cancel callback when constraint is not met', () => {
    const startEvent = events.start();
    const endEvent = events.end({
      clientX: startEvent.pageX + 1,
      clientY: startEvent.pageY + 1,
    });

    const expectedMovement = movement(
      [startEvent.pageX, startEvent.pageY],
      [endEvent.pageX, endEvent.pageY],
      endEvent.timeStamp - startEvent.timeStamp
    );
    expect(callback).toHaveBeenCalledWith({
      event: endEvent,
      type: 'cancel',
      ...expectedMovement,
    });
  });

  it('should call destroy when destroy is called', () => {
    events.start();
    const spy = vi.spyOn(window,'removeEventListener');
    detector.destroy();

    expect(spy).toHaveBeenCalledWith('mousemove', expect.anything(), false);
  });
});
