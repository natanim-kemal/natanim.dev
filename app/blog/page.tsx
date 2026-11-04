import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Reveal from '@/components/portfolio/Reveal';
import { getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Posts on whatever I\'m into at the moment: engineering, security, tools, or ideas I want to get out of my head.',
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'Blog | Natanim Kemal',
    description: 'Posts on whatever I\'m into at the moment: engineering, security, tools, or ideas I want to get out of my head.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Natanim Kemal',
    description: 'Posts on whatever I\'m into at the moment: engineering, security, tools, or ideas I want to get out of my head.',
  },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section id="blog" className="flex flex-col gap-8">
      <Reveal>
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Blog{' '}
            <span className="ml-1 rounded-md border border-border bg-card px-2 py-1 align-middle text-sm font-medium text-muted-foreground">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </span>
          </h1>
          <p className="text-sm text-muted-foreground">
            Posts on whatever I'm into at the moment: engineering, security, tools, or ideas I want to get out of my head.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-5">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={0.04 + index * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-x-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="mt-1.25 shrink-0 font-mono text-xs font-medium tabular-nums">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-y-2">
                <span className="text-lg font-medium leading-snug tracking-tight">
                  <span className="transition-colors group-hover:text-foreground">
                    {post.title}
                    <ChevronRight
                      className="inline-block size-4 -translate-x-2 stroke-3 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
