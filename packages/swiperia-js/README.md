# swiperia-js

Swipe gesture detection for the web, built on [`swiperia-core`](https://www.npmjs.com/package/swiperia-core).
Attach one `Swiper` to an element and receive the same event shape for mouse and touch input.

## Installation

```bash
npm install swiperia-js
```

> Ships both ESM and CommonJS with matching type declarations - `import` and `require` both work.

## Usage

```ts
import { MouseSwiper, Swiper, TouchSwiper } from 'swiperia-js';

const el = document.getElementById('swipeable')!;
const swiper = new Swiper(el, [MouseSwiper, TouchSwiper], {
  threshold: 10, // min distance in px to count as a swipe
  allowedTime: 300, // max duration in ms
});

swiper.listen((event) => {
  switch (event.type) {
    case 'start':
      console.log('swipe started');
      break;
    case 'move':
      console.log('swiping', event.deltaX, event.deltaY);
      break;
    case 'end':
      console.log('swiped', event.direction);
      break;
    case 'cancel':
      console.log('below threshold or too slow');
      break;
  }
});

// Always clean up - this removes every listener the detectors installed.
swiper.destroy();
```

## API

| Export           | Description                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| `Swiper`         | Composes detectors over one element. `listen(cb)` attaches, `destroy()` detaches.  |
| `MouseSwiper`    | Detector for `mousedown` / `mousemove` / `mouseup`.                                |
| `TouchSwiper`    | Detector for `touchstart` / `touchmove` / `touchend`.                              |
| `AbstractSwiper` | Base class for custom detectors — implement `point()`, `listen()` and `destroy()`. |

A swipe emits `end` when it travels at least `threshold` pixels within `allowedTime`
milliseconds, and `cancel` otherwise. Both carry the full movement data.

### Custom detectors

```ts
import { AbstractSwiper } from 'swiperia-js';
import type { SwipeCallback, Vector2 } from 'swiperia-core';

class PointerSwiper extends AbstractSwiper {
  point(e: PointerEvent): Vector2 {
    return [e.pageX, e.pageY];
  }

  listen(callback: SwipeCallback) {
    this._callback = callback;
    this.el.addEventListener('pointerdown', this._start, false);
  }

  destroy() {
    this.el.removeEventListener('pointerdown', this._start, false);
  }
}
```

## License

MIT © Ehsan Samavati
