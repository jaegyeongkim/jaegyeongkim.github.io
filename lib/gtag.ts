declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      targetId: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export const GA_ID = "G-R5G6DM9KM5";

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export function trackBlogLinkClick(
  slug: string,
  source: "portfolio" | "resume",
) {
  trackEvent("blog_link_click", {
    post_slug: slug,
    source,
  });
}

export function trackBlogPostView(slug: string, title: string, tags: string[]) {
  trackEvent("blog_post_view", {
    post_slug: slug,
    post_title: title,
    post_tags: tags.join(","),
  });
}

export function trackBlogReadComplete(slug: string, title: string) {
  trackEvent("blog_read_complete", {
    post_slug: slug,
    post_title: title,
  });
}
