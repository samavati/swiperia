import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { MouseSwiper, Swiper, TouchSwiper } from 'swiperia-js';

@Directive({
  selector: '[swiperia]',
  standalone: true,
})
export class SwiperiaDirective {
  @Output() swiped = new EventEmitter();
  @Output() swipeRight = new EventEmitter();
  @Output() swipeLeft = new EventEmitter();
  @Output() swipeUp = new EventEmitter();
  @Output() swipeDown = new EventEmitter();
  @Output() swiping = new EventEmitter();
  @Output() swipeStart = new EventEmitter();

  constructor(el: ElementRef) {
    const swiperia = new Swiper(el.nativeElement, [MouseSwiper, TouchSwiper]);
    swiperia.listen((e) => {
      switch (e.type) {
        case 'end':
          this.swiped.emit(e);
          switch (e.direction) {
            case 'down':
              this.swipeDown.emit(e);
              break;
            case 'left':
              this.swipeLeft.emit(e);
              break;
            case 'right':
              this.swipeRight.emit(e);
              break;
            case 'up':
              this.swipeUp.emit(e);
              break;
          }
          break;
        case 'start':
          this.swipeStart.emit(e);
          break;
        case 'move':
          this.swiping.emit(e);
          break;
      }
    });
  }
}
