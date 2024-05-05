<div align='center'>
  <div align='center'>[![Swiperia — The modern swipe gesture detector](https://raw.githubusercontent.com/samavati/swiperia/main/docs/public/assets/logo/logox152.png)](https://samavati.github.io/swiperia/)</div>
  <h1 style="color:#00B3B1">Swiperia</h1>
</div>

Welcome to Swiperia, a comprehensive suite of libraries designed to enhance web and mobile applications with advanced swipe gesture capabilities. This monorepo contains several packages including `swiperia-core`, `swiperia-js`, and `swiperia-react`, each tailored to different environments and requirements.

For a detailed docs, please visit the [Swiperia Documentation](https://samavati.github.io/swiperia/).

## Packages

- **swiperia-core**: Provides the fundamental logic and utilities for detecting and handling swipe gestures. It's platform-agnostic and can be used across different JavaScript environments.
- **swiperia-js**: A library built on top of `swiperia-core` for adding swipe gesture support in any web application.
- **swiperia-react**: Offers React components and hooks that integrate swipe functionality seamlessly into React applications.

## Features

- **Unified Swipe Event Handling**: Consistent swipe events (`start`, `move`, `end`, `cancel`) across all libraries.
- **Customizable Swipe Configuration**: Set thresholds and constraints to tailor the swipe detection to your needs.
- **Extensible Architecture**: Extend the core functionalities to create custom solutions.
- **Cross-Platform**: Supports web, Node.js, and React Native environments.

## Installation

Each package can be installed separately depending on the needs of your project. Below are the installation commands for each package:

```bash
# Install swiperia-core
npm install swiperia-core
# or
yarn add swiperia-core

# Install swiperia-js
npm install swiperia-js
# or
yarn add swiperia-js

# Install swiperia-react
npm install swiperia-react
# or
yarn add swiperia-react
```

## Usage

### swiperia-js

```ts
import { Swiper, MouseSwiper, TouchSwiper } from 'swiperia-js';

const targetElement = document.getElementById('swipeable');
const swiper = new Swiper(targetElement, [MouseSwiper, TouchSwiper]);

swiper.listen((event) => {
  console.log(`Swipe ${event.type}:`, event.direction);
});
```

### swiperia-react

```tsx
import React from 'react';
import { SwipeArea } from 'swiperia-react';

const MyComponent = () => (
  <SwipeArea onSwipeStart={() => console.log('Swipe started')>
    <div>Swipe me!</div>
  </SwipeArea>
);

export default MyComponent;
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Please refer to each package's `README.md` for more detailed information on how to contribute.

## License

All packages in this repository are MIT licensed.

## Acknowledgments

- Thanks to Nx for the monorepo management tools.
- Thanks to all contributors who have helped to shape this project.

For more detailed documentation, please refer to the individual package directories within this repository.
