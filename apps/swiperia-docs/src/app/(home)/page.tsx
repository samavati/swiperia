import Image from 'next/image';
import Link from 'next/link';
import { asset } from '@/lib/asset';

const packages = [
  {
    name: 'swiperia-core',
    description:
      'Platform-agnostic gesture maths: direction, distance, velocity, movement. No DOM listeners.',
    href: '/docs/reference/movement',
  },
  {
    name: 'swiperia-js',
    description:
      'Mouse and touch detectors for the browser, emitting one consistent swipe event.',
    href: '/docs/web',
  },
  {
    name: 'swiperia-react',
    description:
      'A SwipeArea component and a useSwiperia hook for React applications.',
    href: '/docs/react',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto w-full max-w-3xl text-center">
        <Image
          src={asset('/assets/logotype/logotypex384.png')}
          alt="Swiperia"
          width={352}
          height={384}
          priority
          className="mx-auto mb-8 h-40 w-auto"
        />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Swipe gestures, without the guesswork
        </h1>
        <p className="text-fd-muted-foreground mx-auto mt-4 max-w-xl text-lg">
          Swiperia detects swipe direction, distance and velocity, and gives you
          the same event whether the input was a mouse or a finger.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className="bg-fd-primary text-fd-primary-foreground rounded-lg px-5 py-2.5 text-sm font-medium"
          >
            Get started
          </Link>
          <Link
            href="/docs/installation"
            className="border-fd-border rounded-lg border px-5 py-2.5 text-sm font-medium"
          >
            Installation
          </Link>
        </div>

        <div className="mt-14 grid gap-4 text-left sm:grid-cols-3">
          {packages.map((pkg) => (
            <Link
              key={pkg.name}
              href={pkg.href}
              className="border-fd-border hover:bg-fd-accent rounded-xl border p-4 transition-colors"
            >
              <h2 className="font-mono text-sm font-semibold">{pkg.name}</h2>
              <p className="text-fd-muted-foreground mt-2 text-sm">
                {pkg.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
