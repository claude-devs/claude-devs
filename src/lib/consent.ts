/**
 * Consent for analytics.
 *
 * Two first-party cookies carry everything:
 *
 * - `cd_geo` is written by the proxy with the visitor's country, so a static
 *   page can still tell who has to be asked.
 * - `cd_consent` holds the visitor's own answer once they have given one.
 *
 * Nothing here loads a tracker. The Analytics component reads the state and
 * decides whether to render Tag Manager at all, so "denied" and "not asked
 * yet" both mean no request leaves the browser.
 */

export const GEO_COOKIE = "cd_geo";
export const CONSENT_COOKIE = "cd_consent";

const CONSENT_MAX_AGE_DAYS = 180;

// EU member states, the rest of the EEA, the UK and Switzerland: the places
// where analytics cookies need an opt-in. Visitors from anywhere else get
// analytics by default and can switch it off from the footer. To ask
// everyone, make `isConsentRegion` return true.
//
// The same list is inlined in the Consent Mode defaults in app/layout.tsx.
export const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES",
  "SE", "IS", "LI", "NO", "GB", "CH",
];

// Cookies the trackers leave behind, by prefix. Removed whenever a visitor says no.
const TRACKER_COOKIE_PREFIXES = ["_ga", "_gcl_"];

/**
 * - `unknown`: not determined yet (server render and the first client pass)
 * - `pending`: the visitor has to be asked and has not answered
 * - `granted` / `denied`: the answer, or the default outside consent regions
 */
export type ConsentState = "unknown" | "pending" | "granted" | "denied";
export type ConsentChoice = "granted" | "denied";

const CHANGE_EVENT = "claudedevs:consent-change";
const OPEN_EVENT = "claudedevs:consent-open";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const readCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

/**
 * True when the visitor is in a region that needs an opt-in. A missing country
 * counts as one: if we cannot tell, we ask.
 */
export const isConsentRegion = (): boolean => {
  const country = readCookie(GEO_COOKIE);
  return !country || CONSENT_REGIONS.includes(country);
};

export const getConsentState = (): ConsentState => {
  const stored = readCookie(CONSENT_COOKIE);
  if (stored === "granted" || stored === "denied") return stored;
  return isConsentRegion() ? "pending" : "granted";
};

export const getServerConsentState = (): ConsentState => "unknown";

const clearTrackerCookies = () => {
  const names = document.cookie
    .split("; ")
    .map((pair) => pair.split("=")[0])
    .filter((name) => TRACKER_COOKIE_PREFIXES.some((prefix) => name.startsWith(prefix)));

  // GA writes to the registrable domain, so each name is expired on every
  // parent domain as well as with no domain at all.
  const parts = window.location.hostname.split(".");
  const domains = parts
    .map((_, index) => parts.slice(index).join("."))
    .filter((domain) => domain.includes("."));

  names.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; Path=/`;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${domain}`;
    });
  });
};

export const setConsent = (choice: ConsentChoice) => {
  const wasGranted = getConsentState() === "granted";
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${
    CONSENT_MAX_AGE_DAYS * 24 * 60 * 60
  }; Path=/; SameSite=Lax${secure}`;

  if (choice === "denied") clearTrackerCookies();

  // Scripts that are already running cannot be unloaded. Withdrawing a consent
  // that was in force therefore reloads, and the reloaded page never requests
  // them.
  if (wasGranted && choice === "denied") {
    window.location.reload();
    return;
  }

  // The banner asks about analytics only, so the advertising signals keep the
  // default set in the layout: denied in consent regions.
  if (choice === "granted") window.gtag?.("consent", "update", { analytics_storage: "granted" });

  window.dispatchEvent(new Event(CHANGE_EVENT));
};

export const subscribeConsent = (listener: () => void) => {
  window.addEventListener(CHANGE_EVENT, listener);
  return () => window.removeEventListener(CHANGE_EVENT, listener);
};

/** Reopens the banner, for the "Cookie settings" control in the footer. */
export const openConsentSettings = () => {
  window.dispatchEvent(new Event(OPEN_EVENT));
};

export const subscribeConsentOpen = (listener: () => void) => {
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
};
