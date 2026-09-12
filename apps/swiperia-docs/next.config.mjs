import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// GitHub Pages serves a project site from https://<user>.github.io/<repo>, so every
// asset and route has to be prefixed. Unset it for local dev and for a custom domain,
// where the site is served from the root instead.
const basePath = process.env.PAGES_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  // Pages is a plain static host: no Next.js image optimiser runs there, and
  // directory-style URLs need the trailing slash to resolve to index.html.
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withMDX(config);
