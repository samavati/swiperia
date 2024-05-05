//@ts-check

/**
 * we need this to fix the issue with integrating the nx with nextra
 */
if (process.cwd() !== __dirname) {
  process.chdir(__dirname);
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextra = require('nextra');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'export',
  basePath: '/swiperia',
  images: {
    loader: 'akamai',
    path: '',
  },
};

// @ts-ignore
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withNextra,
];

const composed = composePlugins(...plugins)(nextConfig);

module.exports = composed;
