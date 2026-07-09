---
description: 올리브영 테크 블로그 스타일 8단계 흐름으로 새 기술 블로그 글을 작성한다
argument-hint: [주제 또는 slug]
---

`content/blog/AGENTS.md`에 정의된 글쓰기 가이드를 먼저 읽고, 그 흐름과 톤/형식/체크리스트를 그대로 따라 새 글을 작성한다.

주제: $ARGUMENTS (비어 있으면 사용자에게 어떤 문제/작업을 다룰지 먼저 물어본다)

## 진행 순서

1. `content/blog/AGENTS.md`를 읽는다.
2. 기존 글 1~2개(예: `content/blog/typia-runtime-validation.mdx`, `content/blog/monorepo-shared-components.mdx`)를 읽고 실제 문장 톤·소제목 스타일·코드블록 배치를 참고한다.
3. 주제에 대해 아래 8단계 정보를 사용자에게 확인하거나, 대화 맥락에서 파악한다. 빠진 정보(특히 결과 수치)는 지어내지 말고 사용자에게 묻는다.
   1. 문제 상황 (구체적 장면/에러/수치)
   2. 고민 과정 (검토한 대안들)
   3. 원인 분석
   4. 해결 방안
   5. 트레이드오프
   6. 적용 중 어려움 (있었다면)
   7. 적용 후 검증
   8. 결과 & 교훈 (Before/After 수치)
4. `content/blog/{slug}.mdx`를 작성한다. 소제목은 8단계 라벨을 그대로 쓰지 않고 그 글의 핵심 개념 이름으로 짓는다.
5. `lib/blog-posts.ts`의 `BLOG_POSTS` 배열에 새 글의 slug, title, description, date, tags를 추가한다.
6. 작성한 글이 가이드의 체크리스트를 모두 만족하는지 스스로 검토한 뒤 결과를 요약해서 보고한다.
