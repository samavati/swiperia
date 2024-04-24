import * as swiperia_js from './index';

describe('swiperia js module', () => {
  it('should export the AbstractSwiper class', () => {
    expect(swiperia_js.AbstractSwiper).toBeDefined();
  });

  it('should export the MouseSwiper class', () => {
    expect(swiperia_js.MouseSwiper).toBeDefined();
  });

  it('should export the TouchSwiper class', () => {
    expect(swiperia_js.TouchSwiper).toBeDefined();
  });

  it('should export the Swiper class', () => {
    expect(swiperia_js.Swiper).toBeDefined();
  });
});