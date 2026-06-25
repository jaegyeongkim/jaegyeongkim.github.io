import type { Metadata } from "next";

import Link from "next/link";

import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} | 김재경` : "블로그 | 김재경",
    description: post?.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <Link
          className="inline-flex items-center gap-1 text-xs font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
          href="/blog"
        >
          ← 블로그 목록
        </Link>

        {post && (
          <header className="mb-10 space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-[var(--accent)] border border-[var(--accent)] border-opacity-30 px-2 py-0.5 rounded-full"
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

        <article>
          <Post />
        </article>
      </main>
      <Footer compact />
    </>
  );
}
