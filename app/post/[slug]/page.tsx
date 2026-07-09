import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import Footer from "@/components/Footer";
import PostTracker from "@/components/PostTracker";
import { POSTS } from "@/lib/posts";

const SITE_URL = "https://jaegyeongkim.github.io";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) return {};

  const url = `${SITE_URL}/post/${post.slug}`;
  const title = post.title;
  const description = post.description;

  return {
    title,
    description,
    keywords: post.tags,
    authors: [{ name: "김재경" }],
    openGraph: {
      type: "article",
      url,
      title,
      description,
      locale: "ko_KR",
      siteName: "김재경 포스트",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: new Date(post.date).toISOString(),
      authors: ["김재경"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  const { default: PostBody } = await import(`@/content/post/${slug}.mdx`);

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
          "@type": "Person",
          name: "김재경",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Person",
          name: "김재경",
          url: SITE_URL,
        },
        url: `${SITE_URL}/post/${post.slug}`,
        keywords: post.tags.join(", "),
        inLanguage: "ko",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/post/${post.slug}`,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <Script
          id="post-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <Link
          className="inline-flex items-center gap-1 text-xs font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
          href="/post"
        >
          ← 포스트 목록
        </Link>

        {post && (
          <header className="mb-10 space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  className="text-xs font-mono text-[var(--accent)] border border-[var(--accent)] border-opacity-30 px-2 py-0.5 rounded-full"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-xl font-bold text-[var(--foreground)] leading-snug">
              {post.title}
            </h1>
            <p className="text-xs font-mono text-[var(--muted)]">{post.date}</p>
            <div className="h-px bg-[var(--border)]" />
          </header>
        )}

        {post && (
          <PostTracker slug={post.slug} tags={post.tags} title={post.title} />
        )}
        <article>
          <PostBody />
        </article>
      </main>
      <Footer compact />
    </>
  );
}
