export const GA_MEASUREMENT_ID = "G-QMX4S3JFBC";

export function pageview(url) {
  if (typeof window.gtag === "undefined") return;
  window.gtag("event", "page_view", {
    page_path: url,
  });
}

export function event(action, params = {}) {
  if (typeof window.gtag === "undefined") return;
  window.gtag("event", action, params);
}
