import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import { POSTS, VISIBLE_POST_SLUGS } from "@/lib/posts";

// 포스트 임시 비활성화 중, 검토가 끝난 글만 목록에 노출
const VISIBLE_POSTS = POSTS.filter((post) =>
  VISIBLE_POST_SLUGS.includes(post.slug),
);

export const metadata: Metadata = {
  title: "포스트 | 김재경",
  description:
    "Frontend 플랫폼 엔지니어 김재경의 기술 포스트. 번들 최적화, 모노레포 아키텍처, CI/CD 자동화, 타입 안전성, 상태관리 등 실무에서 겪은 문제와 해결 과정을 기록합니다.",
  keywords: [
    "기술 포스트",
    "Frontend",
    "TypeScript",
    "React",
    "번들 최적화",
    "모노레포",
    "CI/CD",
    "김재경",
  ],
  openGraph: {
    type: "website",
    url: "https://jaegyeongkim.github.io/post",
    title: "포스트 | 김재경",
    description:
      "Frontend 플랫폼 엔지니어 김재경의 기술 포스트. 번들 최적화, 모노레포 아키텍처, CI/CD 자동화, 타입 안전성, 상태관리 등 실무에서 겪은 문제와 해결 과정을 기록합니다.",
    locale: "ko_KR",
    siteName: "김재경 포스트",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "김재경 기술 포스트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "포스트 | 김재경",
    description:
      "Frontend 플랫폼 엔지니어 김재경의 기술 포스트. 번들 최적화, 모노레포 아키텍처, CI/CD 자동화 등 실무 기록.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jaegyeongkim.github.io/post",
  },
};

const PostListPage = () => {
  return (
    <>
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <header className="mb-12 space-y-2">
          <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
            Post
          </p>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            기술 포스트
          </h1>
          <p className="text-sm text-[var(--muted)]">
            플랫폼·DX 설계를 하면서 마주친 문제와 해결 과정을 기록합니다.
          </p>
        </header>

        <div className="space-y-0">
          {VISIBLE_POSTS.map((post, i) => (
            <article key={post.slug}>
              <Link className="group block py-6" href={`/post/${post.slug}`}>
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
                      className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded-full"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
              {i < VISIBLE_POSTS.length - 1 && (
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

export default PostListPage;
