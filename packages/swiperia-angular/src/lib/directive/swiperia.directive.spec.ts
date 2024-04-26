import { SwiperiaDirective } from './swiperia.directive';

describe('SwiperiaDirective', () => {
  it('should create an instance', () => {
    const elementRef = {
      nativeElement: document.createElement('div'),
    };
    const directive = new SwiperiaDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
