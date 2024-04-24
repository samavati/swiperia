export class MockTouch implements Touch {
  readonly clientX: number;
  readonly clientY: number;
  readonly force: number;
  readonly identifier: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly radiusX: number;
  readonly radiusY: number;
  readonly rotationAngle: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly target: EventTarget;

  constructor(options: TouchInit) {
    const deltaX = 0;
    const deltaY = 0;
    this.identifier = options.identifier;
    this.target = options.target;
    this.clientX = options.clientX || 1 + deltaX;
    this.clientY = options.clientY || 1 + deltaY;
    this.screenX = options.screenX || 1 + deltaX;
    this.screenY = options.screenY || 1 + deltaY;
    this.pageX = options.clientX || 1 + deltaX;
    this.pageY = options.clientY || 1 + deltaY;
    this.radiusX = options.radiusX || 1 + deltaX;
    this.radiusY = options.radiusY || 1 + deltaY;
    this.force = options.force || 1;
    this.rotationAngle = options.rotationAngle || 1;
  }
}
