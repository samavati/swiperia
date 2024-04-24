export class MouseEvents {
  constructor(private readonly el: HTMLElement) {}

  static start(init?: MouseEventInit) {
    return new MouseEvent('mousedown', {
      clientX: 0,
      clientY: 0,
      ...init,
    });
  }

  static move(init?: MouseEventInit) {
    return new MouseEvent('mousemove', {
      clientX: 50,
      clientY: 50,
      ...init,
    });
  }

  static end(init?: MouseEventInit) {
    return new MouseEvent('mouseup', {
      clientX: 100,
      clientY: 100,
      ...init,
    });
  }

  start(init?: MouseEventInit) {
    const event = MouseEvents.start(init);
    this.el.dispatchEvent(event);
    return event;
  }

  move(init?: MouseEventInit) {
    const event = MouseEvents.move(init);
    window.dispatchEvent(MouseEvents.move(init));
    return event;
  }

  end(init?: MouseEventInit) {
    const event = MouseEvents.end(init);
    window.dispatchEvent(MouseEvents.end(init));
    return event;
  }

  async swipeLeft(duration = 100) {
    return new Promise((resolve) => {
      this.start({ clientX: 100, clientY: 0 });
      setTimeout(() => {
        this.end({ clientX: 0, clientY: 0 });
        resolve(null);
      }, duration);
    });
  }

  async swipeRight(duration = 100) {
    return new Promise((resolve) => {
      this.start({ clientX: 0, clientY: 0 });
      setTimeout(() => {
        this.end({ clientX: 100, clientY: 0 });
        resolve(null);
      }, duration);
    });
  }

  async swipeUp(duration = 100) {
    return new Promise((resolve) => {
      this.start({ clientX: 0, clientY: 100 });
      setTimeout(() => {
        this.end({ clientX: 0, clientY: 0 });
        resolve(null);
      }, duration);
    });
  }

  async swipeDown(duration = 100) {
    return new Promise((resolve) => {
      this.start({ clientX: 0, clientY: 0 });
      setTimeout(() => {
        this.end({ clientX: 0, clientY: 100 });
        resolve(null);
      }, duration);
    });
  }
}
