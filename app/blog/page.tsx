import type { Metadata } from "next";

import Link from "next/link";

import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "블로그 | 김재경",
  description: "플랫폼과 DX 관련 기술 블로그",
};

const BlogPage = () => {
  return (
    <>
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <header className="mb-12 space-y-2">
          <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Blog
          </p>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            기술 블로그
          </h1>
          <p className="text-sm text-[var(--muted)]">
            플랫폼·DX 설계를 하면서 마주친 문제와 해결 과정을 기록합니다.
          </p>
        </header>

        <div className="space-y-0">
          {BLOG_POSTS.map((post, i) => (
            <article key={post.slug}>
              <Link
                className="group block py-6"
                href={`/blog/${post.slug}`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-relaxed">
                    {post.title}
                  </h2>
                  <span className="text-xs font-mono text-[var(--muted)] shrink-0 pt-0.5">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
              {i < BLOG_POSTS.length - 1 && (
                <div className="h-px bg-[var(--border)]" />
              )}
            </article>
          ))}
        </div>
      </main>
      <Footer compact />
    </>
  );
};

export default BlogPage;
