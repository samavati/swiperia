import * as swiperia_react from './index';

describe('swiperia react module', () => {
  it('should export the SwipeArea component', () => {
    expect(swiperia_react.SwipeArea).toBeDefined();
  });

  it('should export the useSwiperia hook', () => {
    expect(swiperia_react.useSwiperia).toBeDefined();
  });
});