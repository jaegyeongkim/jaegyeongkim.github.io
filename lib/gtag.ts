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

export function trackPostLinkClick(
  slug: string,
  source: "portfolio" | "resume",
) {
  trackEvent("post_link_click", {
    post_slug: slug,
    source,
  });
}

export function trackPostView(slug: string, title: string, tags: string[]) {
  trackEvent("post_view", {
    post_slug: slug,
    post_title: title,
    post_tags: tags.join(","),
  });
}

export function trackPostReadComplete(slug: string, title: string) {
  trackEvent("post_read_complete", {
    post_slug: slug,
    post_title: title,
  });
}
