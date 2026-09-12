# swiperia-core

The foundation of [Swiperia](https://github.com/samavati/swiperia): platform-agnostic
utilities for analysing swipe gestures. No DOM listeners, no framework — just the maths
and the types that the rest of the stack is built on.

## Installation

```bash
npm install swiperia-core
```

> Ships both ESM and CommonJS with matching type declarations - `import` and `require` both work.

## Usage

```ts
import { direction, distance, movement, velocity, vxvy } from 'swiperia-core';

const start: [number, number] = [100, 200];
const end: [number, number] = [300, 250];
const duration = 500; // ms

direction(start, end); // 'right'
distance(start, end); // 206.15...
velocity(start, end, duration); // 0.41... px/ms
vxvy(start, end, duration); // [0.4, 0.1]
movement(start, end, duration); // everything above, in one object
```

## API

| Export               | Description                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `direction(a, b)`    | Dominant axis direction between two points: `'left' \| 'right' \| 'up' \| 'down'`, or `null` when the points are identical. |
| `distance(a, b)`     | Euclidean distance in pixels.                                                                                               |
| `velocity(a, b, dt)` | Speed over `dt`. `Infinity` when `dt` is `0`; throws when `dt` is negative.                                                 |
| `vxvy(a, b, dt)`     | Per-axis velocity as `[vx, vy]`.                                                                                            |
| `movement(a, b, dt)` | A full `MovementEvent`: deltas, absolutes, direction, velocity and distance.                                                |

### Types

`Vector2`, `SwipeDirection`, `MovementEvent`, `SwipeEvent`, `SwipeConfig`, `SwipeCallback`.

## License

MIT © Ehsan Samavati
