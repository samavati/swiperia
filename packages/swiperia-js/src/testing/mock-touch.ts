/**
 * Minimal `Touch` stand-in: jsdom does not implement the Touch constructor.
 * Test-only, excluded from the published build (see tsconfig.lib.json).
 */
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
    this.identifier = options.identifier;
    this.target = options.target;
    this.clientX = options.clientX ?? 1;
    this.clientY = options.clientY ?? 1;
    this.screenX = options.screenX ?? 1;
    this.screenY = options.screenY ?? 1;
    this.pageX = options.clientX ?? 1;
    this.pageY = options.clientY ?? 1;
    this.radiusX = options.radiusX ?? 1;
    this.radiusY = options.radiusY ?? 1;
    this.force = options.force ?? 1;
    this.rotationAngle = options.rotationAngle ?? 1;
  }
}
