# Swiperia JS

Swiperia JS is a powerful and flexible library for adding swipe gesture support to your web applications. Built on top of the `swiperia-core` package, it provides a set of classes and utilities that make it easy to detect and handle swipe gestures on various input devices, such as mouse and touch.

## Features

- **Mouse Swipe Detection**: Detect and handle swipe gestures initiated by mouse input.
- **Touch Swipe Detection**: Detect and handle swipe gestures initiated by touch input (e.g., on mobile devices and touchscreens).
- **Unified Swipe Event Handling**: Receive consistent swipe events (`start`, `move`, `end`, `cancel`) regardless of the input device.
- **Customizable Swipe Configuration**: Customize the swipe behavior by providing configuration options, such as thresholds and constraints.
- **Extensible Architecture**: Easily extend or create custom swipe detectors by inheriting from the `AbstractSwiper` class.

## Installation

You can install the `swiperia-js` package using npm or yarn:

```bash
npm install swiperia-js
# or
yarn add swiperia-js
```


## Usage
Here's a basic example of how to use the swiperia-js package:

```ts
import { Swiper, MouseSwiper, TouchSwiper } from 'swiperia-js';

const targetElement = document.getElementById('swipeable');

const swiper = new Swiper(targetElement, [MouseSwiper, TouchSwiper]);

swiper.listen((event) => {
  switch (event.type) {
    case 'start':
      console.log('Swipe started');
      break;
    case 'move':
      console.log('Swiping...', event.deltaX, event.deltaY);
      break;
    case 'end':
      console.log('Swipe ended', event.direction);
      break;
    case 'cancel':
      console.log('Swipe canceled');
      break;
  }
});
```

## Documentation
For detailed documentation, including API references, advanced usage examples, and guides on creating custom swipe detectors, please visit the Swiperia Documentation.

## Contributing
We welcome contributions from the community! If you'd like to contribute to Swiperia JS, please read our Contributing Guide for more information.

## License
Swiperia JS is released under the MIT License.