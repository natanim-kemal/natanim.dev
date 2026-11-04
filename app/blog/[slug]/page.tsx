import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Reveal from '@/components/portfolio/Reveal';
import GiscusTheme from '@/components/portfolio/GiscusTheme';
import { formatPostDate, getPost, getPosts } from '@/lib/blog';
import { profile } from '@/lib/portfolio';

type Params = { slug: string };

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  const publishedTime = post.date;
  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime,
      authors: [profile.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.description,
    url: `https://natanim.dev/blog/${post.slug}`,
    author: { '@type': 'Person', name: profile.name },
  };

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal>
        <Link
          href="/blog"
          aria-label="Back to Blog"
          className="group mb-6 inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronLeft className="size-3 transition-transform group-hover:-translate-x-px" aria-hidden />
          Back to Blog
        </Link>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground">{formatPostDate(post.date)}</p>
        </div>
      </Reveal>

      <div
        className="my-6 h-px w-full bg-border"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
      />

      <article className="prose max-w-none text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-headings:text-foreground prose-a:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-li:marker:text-muted-foreground">
        <MDXRemote source={post.content} />
      </article>

      <div className="my-6 h-px w-full bg-border" aria-hidden />

      <Reveal>
        <h2 className="text-xl font-semibold tracking-tighter">Discussion</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Sign in with GitHub to join the conversation.
        </p>
      </Reveal>
      <section aria-label="Discussion" className="mt-4">
        <GiscusTheme />
      </section>
    </section>
  );
}
