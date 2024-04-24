import * as swiperia_core from './index';

describe('swiperia core module', () => {
  it('should export the direction function', () => {
    expect(swiperia_core.direction).toBeDefined();
  });

  it('should export the distance function', () => {
    expect(swiperia_core.distance).toBeDefined();
  });

  it('should export the movement function', () => {
    expect(swiperia_core.movement).toBeDefined();
  });

  it('should export the velocity function', () => {
    expect(swiperia_core.velocity).toBeDefined();
  });

  it('should export the vxvy function', () => {
    expect(swiperia_core.vxvy).toBeDefined();
  });
});