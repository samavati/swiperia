import * as swiperiaJs from './index.js';

describe('swiperia-js public api', () => {
  it.each(['AbstractSwiper', 'MouseSwiper', 'TouchSwiper', 'Swiper'])(
    'should export %s',
    (name) => {
      expect(swiperiaJs[name as keyof typeof swiperiaJs]).toBeDefined();
    },
  );
});
