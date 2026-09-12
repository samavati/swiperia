<div align="center">
  <img height="192" width="176" src="https://raw.githubusercontent.com/samavati/swiperia/main/apps/swiperia-docs/public/assets/logotype/logotypex192.png" alt="Swiperia" />
</div>

# Swiperia

A small stack of libraries for swipe gestures on the web. Detect direction, distance and
velocity; get the same event shape whether the input was a mouse or a finger.

| Package                                     | What it is                                         |
| ------------------------------------------- | -------------------------------------------------- |
| [`swiperia-core`](packages/swiperia-core)   | Platform-agnostic gesture maths and types. No DOM. |
| [`swiperia-js`](packages/swiperia-js)       | Mouse and touch detectors for the browser.         |
| [`swiperia-react`](packages/swiperia-react) | `SwipeArea` component and `useSwiperia` hook.      |

Most applications only need `swiperia-js` (or `swiperia-react`); both pull in the core.

```bash
npm install swiperia-react   # React
npm install swiperia-js      # anything else in a browser
```

```tsx
import { SwipeArea } from 'swiperia-react';

<SwipeArea onSwipedLeft={next} onSwipedRight={previous}>
  <Card />
</SwipeArea>;
```

See each package README for the full API.

## Working in this repo

An [Nx](https://nx.dev) monorepo on pnpm. Packages live in `packages/*`. Each one ships a
dual build: `tsc` emits the ESM output and its declarations, `tsup` the CommonJS bundle
(`index.cjs`) and its `.d.cts`, so `import` and `require` both resolve with correct types.

```bash
nvm use                                         # Node version from .nvmrc
pnpm install
pnpm nx run-many -t build test lint typecheck   # everything
pnpm nx test swiperia-core                      # one project
pnpm nx dev swiperia-docs                       # docs site on :3000
pnpm nx graph                                   # see the dependency graph
pnpm verify-packaging                           # publint + are-the-types-wrong
```

The Node version lives in `.nvmrc` (current LTS) and is the single source of truth —
`nvm use` locally, and both GitHub workflows read it via `node-version-file`. The
`engines.node` field in each package is a separate thing: the oldest Node a _consumer_
may install on, deliberately lower than the version we develop against.

Local packages depend on each other with `workspace:*`; the real version number is
substituted into the tarball at publish time, so there is never a version to hand-edit.

## Documentation site

`apps/swiperia-docs` is a [Fumadocs](https://fumadocs.dev) site, deployed to GitHub Pages
by the `Docs` workflow on every push to `main` that touches it.

```bash
pnpm nx dev swiperia-docs         # local, served from /
pnpm nx build:pages swiperia-docs # production build into apps/swiperia-docs/out
```

A project site lives under `https://<user>.github.io/<repo>`, so the build needs that
prefix: `PAGES_BASE_PATH` sets Next's `basePath` and `SITE_URL` sets `metadataBase` for
Open Graph URLs. The workflow fills both from `actions/configure-pages`, so moving to a
custom domain needs no code change. Use `build:pages` rather than `build` for a real
deploy - it clears `.next` first, because a cache from a build with a different prefix
silently produces a site with unprefixed asset URLs.

## Releasing

Versioning is **fixed**: all three packages share one version and are released together,
so `swiperia-react` can never be paired with a stale `swiperia-core`. The next version is
derived from [Conventional Commits](https://www.conventionalcommits.org) since the last
`v*` tag — `fix:` bumps the patch, `feat:` the minor, and a `!` or `BREAKING CHANGE:`
footer the major.

```bash
pnpm nx release --dry-run    # preview version, changelog and tag
pnpm nx release              # version, changelog, tag, publish
```

Publishing runs from the `Release` GitHub Actions workflow, which needs an `NPM_TOKEN`
secret and publishes with [npm provenance](https://docs.npmjs.com/generating-provenance-statements).

To rehearse a publish against a local registry instead of npm:

```bash
pnpm nx local-registry        # verdaccio on :4873, in another terminal
pnpm nx release --dry-run
```

## License

MIT © Ehsan Samavati
