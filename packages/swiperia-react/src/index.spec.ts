import * as swiperiaReact from './index.js';

describe('swiperia-react public api', () => {
  it.each(['SwipeArea', 'useSwiperia'])('should export %s', (name) => {
    expect(swiperiaReact[name as keyof typeof swiperiaReact]).toBeDefined();
  });
});
