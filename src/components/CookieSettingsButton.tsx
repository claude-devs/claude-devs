"use client";

import { openConsentSettings } from "@/lib/consent";

/**
 * The way back to the consent banner: an answer that cannot be changed as
 * easily as it was given does not count as consent.
 */
export default function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Cookie settings
    </button>
  );
}
