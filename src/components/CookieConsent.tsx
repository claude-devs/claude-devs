"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useConsentState } from "@/hooks/useConsentState";
import { ConsentChoice, setConsent, subscribeConsentOpen } from "@/lib/consent";

/**
 * The consent banner.
 *
 * It shows by itself only to visitors who have to be asked and have not
 * answered. Everyone else reaches it through "Cookie settings" in the footer,
 * which is also how a given answer is changed.
 *
 * Accept and Reject are the same button twice. A choice where one option is
 * louder than the other is not much of a choice.
 */
export default function CookieConsent() {
  const consent = useConsentState();
  const [reopened, setReopened] = useState(false);

  useEffect(() => subscribeConsentOpen(() => setReopened(true)), []);

  const open = consent !== "unknown" && (consent === "pending" || reopened);
  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    setReopened(false);
    // Picking the answer already in force only closes the banner.
    if (choice !== consent) setConsent(choice);
  };

  const button =
    "flex-1 sm:flex-none cursor-pointer rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8 pr-24 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            We use Google Analytics to see how this site is used. Your choice, the site works the
            same either way.{" "}
            <Link href="/privacy" className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
              Privacy policy
            </Link>
          </p>
          {consent !== "pending" && (
            <p className="mt-1 text-gray-500 dark:text-gray-500">
              {consent === "granted" ? "Right now analytics is on." : "Right now analytics is off."}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <button type="button" className={button} onClick={() => choose("denied")}>
            Reject
          </button>
          <button type="button" className={button} onClick={() => choose("granted")}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
