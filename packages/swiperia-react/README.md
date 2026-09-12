# swiperia-react

React bindings for [Swiperia](https://github.com/samavati/swiperia): a `SwipeArea`
component and a `useSwiperia` hook, both backed by [`swiperia-js`](https://www.npmjs.com/package/swiperia-js).

## Installation

```bash
npm install swiperia-react
```

Requires React 18 or 19 as a peer dependency.

> Ships both ESM and CommonJS with matching type declarations - `import` and `require` both work.

## Usage

### `SwipeArea`

```tsx
import { SwipeArea } from 'swiperia-react';

const Card = () => (
  <SwipeArea
    style={{ width: 300, height: 300 }}
    onSwipedLeft={(e) => console.log('left', e.velocity)}
    onSwipedRight={() => console.log('right')}
  >
    Swipe me
  </SwipeArea>
);
```

`SwipeArea` renders a `div` and forwards every other prop and the `ref` to it.

### `useSwiperia`

Use the hook when you need the gesture on an element you already render.

```tsx
import { useSwiperia } from 'swiperia-react';

const Card = () => {
  const { ref } = useSwiperia({
    config: { threshold: 20, allowedTime: 400 },
    onSwiping: (e) => console.log(e.deltaX, e.deltaY),
    onSwiped: (e) => console.log('swiped', e.direction),
  });

  return <section ref={ref}>Swipe me</section>;
};
```

Inline handlers are safe: the hook reads the latest callbacks on every event instead
of re-attaching DOM listeners when they change identity.

## Callbacks

| Prop               | Fires                                                   |
| ------------------ | ------------------------------------------------------- |
| `onSwipeStart`     | when a gesture begins                                   |
| `onSwiping`        | on every move while the gesture is tracked              |
| `onSwiped`         | when a gesture completes                                |
| `onSwipedLeft`     | after `onSwiped`, when the direction was left           |
| `onSwipedRight`    | after `onSwiped`, when the direction was right          |
| `onSwipedUp`       | after `onSwiped`, when the direction was up             |
| `onSwipedDown`     | after `onSwiped`, when the direction was down           |
| `onSwipeCancelled` | when the gesture missed the threshold or the time limit |

Every callback receives a `SwipeEvent` with the direction, deltas, velocity, distance
and the originating DOM event.

## License

MIT © Ehsan Samavati
