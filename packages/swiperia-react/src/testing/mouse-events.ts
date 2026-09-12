/**
 * Test-only helper for dispatching mouse gestures at an element.
 * Excluded from the published build (see tsconfig.lib.json).
 */
export class MouseEvents {
  constructor(private readonly el: HTMLElement) {}

  start(init?: MouseEventInit) {
    const event = new MouseEvent('mousedown', {
      clientX: 0,
      clientY: 0,
      ...init,
    });
    this.el.dispatchEvent(event);
    return event;
  }

  move(init?: MouseEventInit) {
    const event = new MouseEvent('mousemove', {
      clientX: 50,
      clientY: 50,
      ...init,
    });
    window.dispatchEvent(event);
    return event;
  }

  end(init?: MouseEventInit) {
    const event = new MouseEvent('mouseup', {
      clientX: 100,
      clientY: 100,
      ...init,
    });
    window.dispatchEvent(event);
    return event;
  }

  private swipe(from: MouseEventInit, to: MouseEventInit, duration: number) {
    return new Promise((resolve) => {
      this.start(from);
      setTimeout(() => {
        this.end(to);
        resolve(null);
      }, duration);
    });
  }

  swipeLeft(duration = 100) {
    return this.swipe({ clientX: 100 }, { clientX: 0, clientY: 0 }, duration);
  }

  swipeRight(duration = 100) {
    return this.swipe({ clientX: 0 }, { clientX: 100, clientY: 0 }, duration);
  }

  swipeUp(duration = 100) {
    return this.swipe({ clientY: 100 }, { clientX: 0, clientY: 0 }, duration);
  }

  swipeDown(duration = 100) {
    return this.swipe({ clientY: 0 }, { clientX: 0, clientY: 100 }, duration);
  }
}
