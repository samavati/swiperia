import { type ThemeConfig } from 'nextra';
import Logo from './src/components/Logo/Logo';

const config: ThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Logo
        width={48}
        style={{ padding: 2, border: '1px solid', borderRadius: 50 }}
      />
      <span>Swiperia</span>
    </span>
  ),
  docsRepositoryBase: 'https://github.com/samavati/swiperia/tree/main/docs',
  project: {
    link: 'https://github.com/samavati/swiperia',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Swiperia',
    };
  },
  footer: {
    text: <span>MIT {new Date().getFullYear()} © Swiperia.</span>,
  },
};

export default config;
