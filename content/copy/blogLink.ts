import type { Dictionary } from "@/lib/locale";

interface BlogLinkCopy {
  readMore: string;
}

export const blogLinkCopy: Dictionary<BlogLinkCopy> = {
  ko: { readMore: "글 읽기 →" },
  en: { readMore: "Read article (KR) →" },
};
