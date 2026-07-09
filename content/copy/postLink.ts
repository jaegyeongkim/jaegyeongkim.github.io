import type { Dictionary } from "@/lib/locale";

interface PostLinkCopy {
  readMore: string;
}

export const postLinkCopy: Dictionary<PostLinkCopy> = {
  ko: { readMore: "글 읽기 →" },
  en: { readMore: "Read article (KR) →" },
};
