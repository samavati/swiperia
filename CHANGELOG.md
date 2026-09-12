## 1.1.2 (2026-09-12)

### 🩹 Fixes

- **swiperia-js:** honor destroy() called from the start callback ([a7c7067](https://github.com/samavati/swiperia/commit/a7c7067))
- **swiperia-js:** clear the detector list when a Swiper is destroyed ([87649cb](https://github.com/samavati/swiperia/commit/87649cb))
- **swiperia-react:** keep swipe listeners attached across re-renders ([4fc1e51](https://github.com/samavati/swiperia/commit/4fc1e51))
- **swiperia-react:** correct SwipeArea props and add a display name ([21a78e4](https://github.com/samavati/swiperia/commit/21a78e4))

### ❤️ Thank You

- Ehsan Samavati

## 1.1.1 (2025-04-21)

### 🩹 Fixes

- **swiperia-react:** version bump only — no source changes since 1.1.0 ([12a5215](https://github.com/samavati/swiperia/commit/12a5215))

### ❤️ Thank You

- Ehsan Samavati

## 1.1.0 (2025-04-21)

### 🚀 Features

- **swiperia-react:** add onSwipeCancelled callback ([e6cb6b6](https://github.com/samavati/swiperia/commit/e6cb6b6))

### 🧪 Tests

- **swiperia-react:** add test for onSwipeCancelled callback in useSwiperia hook ([d1e398d](https://github.com/samavati/swiperia/commit/d1e398d))

### ❤️ Thank You

- Ehsan Samavati

## 1.0.2 (2024-05-30)

### 🩹 Fixes

- **swiperia-react:** lets fix minor issue with the react package ([35940c9](https://github.com/samavati/swiperia/commit/35940c9))
- **swiperia-react:** :art: fix the issue ([811e3df](https://github.com/samavati/swiperia/commit/811e3df))

### ❤️ Thank You

- Ehsan Samavati

## 1.0.1 (2024-05-30)

### 🚀 Features

- **docs:** :memo: docs setup added ([d7a3b70](https://github.com/samavati/swiperia/commit/d7a3b70))

### 🩹 Fixes

- **swiperia-react:** :bug: correct versioning ([27c1dff](https://github.com/samavati/swiperia/commit/27c1dff))
- **swiperia-react:** :bug: automatic package versioning ([a2af35d](https://github.com/samavati/swiperia/commit/a2af35d))

### ❤️ Thank You

- Ehsan Samavati

# 1.0.0 (2024-04-26)

### 🚀 Features

- **core:** initialize swiperia-core package with NX setup ([236e337](https://github.com/samavati/swiperia/commit/236e337))
- **core:** add Vector2 type for 2D vector representation ([7f55615](https://github.com/samavati/swiperia/commit/7f55615))
- **core:** add Point type and distance calculation function ([5d90ede](https://github.com/samavati/swiperia/commit/5d90ede))
- **core:** add Velocity type and functions to calculate velocities ([5e76a64](https://github.com/samavati/swiperia/commit/5e76a64))
- **core:** introduce Direction type and directional computation function ([ad06a8d](https://github.com/samavati/swiperia/commit/ad06a8d))
- **core:** define SwipeCallback and SwipeConfig types ([8c37af5](https://github.com/samavati/swiperia/commit/8c37af5))
- **core:** add MovementEvent type and movement computation function ([deb980a](https://github.com/samavati/swiperia/commit/deb980a))
- **core:** introduce SwipeEvent type extending MovementEvent ([d865e4b](https://github.com/samavati/swiperia/commit/d865e4b))
- **core-js:** refine swipe event handling and update SwipeEvent type ([fe2deff](https://github.com/samavati/swiperia/commit/fe2deff))
- **examples:** add Vanilla JavaScript example for Swiperia usage ([dffe4d2](https://github.com/samavati/swiperia/commit/dffe4d2))
- **js:** implement AbstractSwipeDetector base class ([72e958c](https://github.com/samavati/swiperia/commit/72e958c))
- **js:** add MouseSwipeDetector and TouchSwipeDetector classes ([c06c780](https://github.com/samavati/swiperia/commit/c06c780))
- **js:** introduce SwipeDetector class to manage multiple detectors ([db80471](https://github.com/samavati/swiperia/commit/db80471))
- **swiperia-react:** :sparkles: the swiperia-react package with its examples created ([623681c](https://github.com/samavati/swiperia/commit/623681c))

### ❤️ Thank You

- Ehsan Samavati

---

### A note on the releases above

Everything above 1.0.0 predates the rebuild of this workspace, when the packages were
versioned independently: the 1.1.0 and 1.1.1 entries shipped `swiperia-react` only, while
`swiperia-core` and `swiperia-js` stayed at 1.0.2. The 1.0.2 → 1.1.1 entries were
reconstructed from the commit history, which the changelog of the time did not record.

From the next release onwards all three packages share one version and are released
together, so an entry here applies to every package.
