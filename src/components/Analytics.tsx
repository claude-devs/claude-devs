"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useConsentState } from "@/hooks/useConsentState";

/**
 * Google Tag Manager, and Google Analytics inside it, loaded only once the
 * visitor's consent state is `granted`. Until then no script is requested and
 * nothing is sent.
 *
 * The Consent Mode signals themselves are set by the inline script in the
 * layout, which runs before this component can render.
 */
export default function Analytics() {
  const consent = useConsentState();
  if (consent !== "granted") return null;
  return <GoogleTagManager gtmId="GTM-PTJPM2MQ" />;
}
