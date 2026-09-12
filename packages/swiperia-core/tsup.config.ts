import { defineConfig } from 'tsup';

/**
 * CommonJS half of the dual build: emits dist/index.cjs + dist/index.d.cts.
 * The ESM output and its declarations come from tsc (`nx build`).
 */
export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs'],
  dts: { only: false },
  sourcemap: false,
  clean: false,
  treeshake: true,
  tsconfig: 'tsconfig.dts.json',
});
