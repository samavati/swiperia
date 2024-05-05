# Swiperia Core

Swiperia Core is the foundation of the Swiperia library, providing essential utilities and functions for handling swipe gestures and calculating swipe-related metrics. This package is designed to be platform-agnostic and can be used in any JavaScript environment, including the browser, Node.js, and React Native.

## Features

- **Swipe Direction Detection**: Determine the direction of a swipe gesture (left, right, up, down) based on the start and end coordinates.
- **Swipe Distance Calculation**: Calculate the distance traveled during a swipe gesture.
- **Swipe Velocity Calculation**: Calculate the velocity of a swipe gesture, including the separate velocities along the x and y axes.
- **Swipe Movement Analysis**: Analyze the movement of a swipe gesture, including the start and end coordinates, delta values, and absolute delta values.
- **Swipe Event Handling**: Provide a consistent and extensible way to handle swipe events, such as `start`, `move`, `end`, and `cancel`.

## Installation

You can install the `swiperia-core` package using npm or yarn:

```bash
npm install swiperia-core
# or
yarn add swiperia-core
```


## Usage
Here's a basic example of how to use the swiperia-core package:

```ts
import { direction, distance, movement, velocity, vxvy } from 'swiperia-core';

const start = [100, 200];
const end = [300, 250];
const duration = 500; // in milliseconds

const swipeData = movement(start, end, duration);

console.log('Swipe Direction:', direction(start, end)); // Output: 'right'
console.log('Swipe Distance:', distance(start, end)); // Output: 208.06...
console.log('Swipe Velocity:', velocity(start, end, duration)); // Output: 416.12...
console.log('Swipe Velocity (x, y):', vxvy(start, end, duration)); // Output: [400, 100]
console.log('Swipe Movement:', swipeData);
```

## Documentation
For detailed documentation, including API references and advanced usage examples, please visit the Swiperia Documentation.

## Contributing
We welcome contributions from the community! If you'd like to contribute to Swiperia Core, please read our Contributing Guide for more information.

## License
Swiperia Core is released under the MIT License.

