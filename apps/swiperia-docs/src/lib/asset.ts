/**
 * Prefix a path in `public/` with the deployment's base path.
 *
 * Next.js applies `basePath` to routes and to its own `_next/*` output, but not to
 * absolute paths you write yourself: `next/image` with `unoptimized` passes `src`
 * through untouched, and `metadata.icons` is emitted verbatim. On a GitHub Pages
 * project site those resolve above the repo prefix and 404.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}
