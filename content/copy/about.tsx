import type { ReactNode } from "react";

import type { Dictionary } from "@/lib/locale";

interface AboutCopy {
  headline: ReactNode;
  paragraphs: ReactNode[];
}

export const aboutCopy: Dictionary<AboutCopy> = {
  ko: {
    headline: (
      <>
        10개 어드민 서비스의{" "}
        <span className="underline underline-offset-4 decoration-[var(--accent)]">
          플랫폼과 DX
        </span>
        를<br className="hidden md:block" />
        설계하는 프론트엔드 엔지니어입니다.
      </>
    ),
    paragraphs: [
      <>
        2020년 12월부터 코코넛사일로에서 근무하며, 라오스 현지 O2O
        플랫폼(이커머스·차량·물류·택시)의{" "}
        <strong className="text-[var(--foreground)] font-medium">
          어드민 웹 서비스를 처음부터 함께 만들고 운영
        </strong>
        했습니다.
      </>,
      <>
        기능 구현에 머물지 않고,{" "}
        <strong className="text-[var(--foreground)] font-medium">
          팀이 더 빠르고 안정적으로 개발할 수 있는 환경을 직접 설계하고 정착
        </strong>
        시켜 왔습니다. 개별 레포 → 모노레포 전환 / 수동 배포 → CI/CD 자동화 /
        API 응답 불안정 → 런타임 검증 체계 구축처럼,{" "}
        <strong className="text-[var(--foreground)] font-medium">
          팀 전체가 체감하는 구조적 문제를 찾아 개선하는 일을 주도
        </strong>
        했습니다.
      </>,
      <>
        업무 외 시간에는{" "}
        <strong className="text-[var(--foreground)] font-medium">
          기획·설계·개발·배포까지 혼자 수행하는 풀스택 사이드 프로젝트
        </strong>
        를 진행하며 역량을 확장하고 있습니다.
      </>,
    ],
  },
  en: {
    headline: (
      <>
        A frontend engineer designing the{" "}
        <span className="underline underline-offset-4 decoration-[var(--accent)]">
          platform and DX
        </span>{" "}
        for 10+ admin services.
      </>
    ),
    paragraphs: [
      <>
        Since joining Coconutsilo in December 2020, I&apos;ve{" "}
        <strong className="text-[var(--foreground)] font-medium">
          built and operated admin web services from the ground up
        </strong>{" "}
        for KOKKOK, an O2O platform in Laos spanning e-commerce, ride-hailing,
        logistics, and taxi services.
      </>,
      <>
        Beyond shipping features, I&apos;ve{" "}
        <strong className="text-[var(--foreground)] font-medium">
          designed and embedded the environment that lets the team build faster
          and more reliably
        </strong>
        . From separate repos to a monorepo, manual deploys to CI/CD automation,
        unstable API responses to runtime validation —{" "}
        <strong className="text-[var(--foreground)] font-medium">
          I&apos;ve led the search for and resolution of structural problems the
          whole team feels
        </strong>
        .
      </>,
      <>
        Outside of work, I&apos;m growing my range through{" "}
        <strong className="text-[var(--foreground)] font-medium">
          full-stack side projects I plan, design, build, and ship solo
        </strong>
        .
      </>,
    ],
  },
};
