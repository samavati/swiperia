import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { asset } from './asset';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // The mark on its own reads better in a horizontal bar than the stacked
      // logotype, which already contains the wordmark.
      title: (
        <>
          <Image
            src={asset('/assets/logo/logox192.png')}
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
          <span className="font-medium">{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
