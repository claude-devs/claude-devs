import { useSyncExternalStore } from "react";
import {
  ConsentState,
  getConsentState,
  getServerConsentState,
  subscribeConsent,
} from "@/lib/consent";

/**
 * The visitor's consent state. It is `unknown` on the server and during
 * hydration, so anything gated on it renders nothing until the cookies have
 * been read in the browser.
 */
export const useConsentState = (): ConsentState =>
  useSyncExternalStore(subscribeConsent, getConsentState, getServerConsentState);
