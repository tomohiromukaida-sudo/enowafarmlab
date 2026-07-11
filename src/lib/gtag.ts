/**
 * Thin wrapper around GTM's dataLayer. No existing GA4/GTM implementation
 * was found in this repo (it was empty prior to this LP), so this assumes a
 * standard GTM container. Set NEXT_PUBLIC_GTM_ID to enable — see
 * src/components/summer/GtmScript.tsx. If the brand's real site already
 * uses a different tag setup, replace this file's push() body to match it.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
