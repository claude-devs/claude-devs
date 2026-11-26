import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import { CONSENT_REGIONS } from "@/lib/consent";
import { pageMetadata, site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({
    title: "Claude Devs: Product Engineering with Claude Code",
    description: site.description,
    path: "/",
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Search Console ownership for the https://claude-devs.com property. Keep it: removing the tag drops verification.
  verification: { google: "C12e4rUW-YimB7RZI1q5wBJ-qSL7ZsUfxhz8BUhBvPQ" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        {/*
          Consent Mode signals, set before anything else can run. Visitors from the
          EEA, the UK and Switzerland start with analytics and ad storage denied; a
          stored "granted" answer switches analytics back on. Tag Manager itself is
          rendered by <Analytics />, and only once the consent state is granted.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(CONSENT_REGIONS)}});if(/(?:^|; )cd_consent=granted/.test(document.cookie)){gtag('consent','update',{analytics_storage:'granted'});}`,
          }}
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
