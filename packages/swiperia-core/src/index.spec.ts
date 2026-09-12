import * as swiperiaCore from './index.js';

describe('swiperia-core public api', () => {
  it.each(['direction', 'distance', 'movement', 'velocity', 'vxvy'])(
    'should export %s',
    (name) => {
      expect(swiperiaCore[name as keyof typeof swiperiaCore]).toBeDefined();
    },
  );
});
