import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Claude Devs",
  description:
    "What claude-devs.com collects, which cookies it sets, when Google Analytics runs, and how to change your choice or ask for your data.",
  path: "/privacy",
});

const UPDATED = "26 November 2026";

const sections = [
  {
    title: "Who we are",
    body: [
      `This site, ${site.url.replace("https://", "")}, is run by Claude Devs, the team of ${site.parent.name}. For anything about your data, write to ${site.email}.`,
      site.independence,
    ],
  },
  {
    title: "What we collect when you write to us",
    body: [
      "The contact form asks for your name, your email address and a message. When you send it, the three fields are delivered to our team by email through Resend, our email delivery provider. The site does not store them in a database.",
      "We use what you send to reply to you and to prepare a proposal if you ask for one. We keep the correspondence as part of our business records.",
      "If you email, call or message us on WhatsApp instead, we receive what you choose to send through that service.",
    ],
  },
  {
    title: "Analytics",
    body: [
      "We use Google Analytics 4, loaded through Google Tag Manager, to see which pages are read and where visitors come from. We do not use advertising cookies and we do not sell data.",
      "If you visit from the European Economic Area, the United Kingdom or Switzerland, analytics stays off until you accept it in the cookie banner. No analytics script is requested before that. If we cannot tell which country you are in, we ask.",
      "From other countries analytics is on by default. You can switch it off at any time with the Cookie settings control below or in the footer.",
    ],
  },
  {
    title: "Cookies and local storage",
    list: [
      "cd_geo: the country your request came from, so the site knows whether to ask for consent. Removed when you close the browser.",
      "cd_consent: your answer to the cookie banner. Kept for 180 days.",
      "_ga and _ga_<id>: set by Google Analytics, only while analytics is on. Removed when you reject analytics.",
      "theme: your light or dark preference, kept in your browser's local storage.",
    ],
  },
  {
    title: "Other services that see your request",
    list: [
      "Vercel hosts the site and, like any host, processes your IP address to serve pages.",
      "The home page loads one background photograph from the Unsplash image service, which receives your IP address in the same way.",
      "Google receives analytics data only while analytics is on.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      `You can ask us what we hold about you, ask us to correct or delete it, or object to how we use it. Write to ${site.email} and we will answer.`,
      "If you are in the EEA or the UK and are not satisfied with our answer, you can complain to your data protection authority.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white dark:bg-gray-950 transition-colors duration-300">
        <section className="pt-36 pb-12 sm:pt-44 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Privacy policy
            </h1>
            <p className="text-gray-500 dark:text-gray-500 text-sm">Last updated: {UPDATED}</p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-cyan-500/60 pl-4"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.title === "Analytics" && (
                  <CookieSettingsButton className="mt-2 cursor-pointer rounded-lg border border-gray-300 dark:border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors" />
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
