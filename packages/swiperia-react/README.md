# Swiperia React

Swiperia React is a React-specific library that provides a seamless integration of the Swiperia swipe gesture handling capabilities into your React applications. Built on top of `swiperia-core` and `swiperia-js`, this package offers a set of React components and hooks that make it easy to add swipe gesture support to your user interfaces.

## Features

- **Swipe Area Component**: A React component that wraps your content and provides swipe gesture detection and handling out of the box.
- **useSwiperia Hook**: A custom React hook that allows you to add swipe gesture handling capabilities to your functional components.
- **Consistent Swipe Event Handling**: Receive consistent swipe events (`start`, `move`, `end`, `cancel`) within your React components.
- **Customizable Swipe Configuration**: Customize the swipe behavior by providing configuration options, such as thresholds and constraints.
- **Seamless Integration with React**: Swiperia React is designed to work seamlessly with React, leveraging its component lifecycle and state management capabilities.

## Installation

You can install the `swiperia-react` package using npm or yarn:

```bash
npm install swiperia-react
# or
yarn add swiperia-react
```

## Usage
Here's a basic example of how to use the swiperia-react package:

```tsx
import React from 'react';
import { SwipeArea } from 'swiperia-react';

const MyComponent = () => {
  const handleSwipeStart = () => {
    console.log('Swipe started');
  };

  const handleSwipeEnd = (event) => {
    console.log('Swipe ended', event.direction);
  };

  return (
    <SwipeArea
      onSwipeStart={handleSwipeStart}
      onSwiped={handleSwipeEnd}
    >
      {/* Your swipeable content goes here */}
      <div>Swipe me!</div>
    </SwipeArea>
  );
};
```


## Documentation
For detailed documentation, including API references, advanced usage examples, and guides on using the useSwiperia hook, please visit the Swiperia Documentation.

## Contributing
We welcome contributions from the community! If you'd like to contribute to Swiperia React, please read our Contributing Guide for more information.

## License
Swiperia React is released under the MIT License.