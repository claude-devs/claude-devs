import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "How We Build with Claude Code | Claude Devs",
  description:
    "What the agent does, what an engineer checks, which gates every change passes before it merges, and what you receive at handover.",
  path: "/process",
});

const split = [
  {
    who: "Claude Code",
    items: [
      "Reads the codebase and proposes a plan for the agreed step",
      "Writes the code and the tests for that step",
      "Runs the build, the type check, the linter and the tests",
      "Drafts a report: what changed, what was checked, what was not",
    ],
  },
  {
    who: "An engineer",
    items: [
      "Decides scope and architecture",
      "Approves the plan before any code is written",
      "Reviews every change before it merges",
      "Makes every call that cannot be undone: deploys, migrations, deletions",
      "Answers to you for the result",
    ],
  },
];

const rules = [
  {
    title: "Project instructions live in the repository",
    body: "Conventions, commands and known pitfalls are written down in a file the agent reads at the start of every session. When a mistake happens once, the rule that prevents it goes into that file.",
  },
  {
    title: "Permissions are explicit",
    body: "The agent can read, edit and run the project's own checks. Anything that reaches outside the repository asks first.",
  },
  {
    title: "Nothing goes to production without a person saying yes",
    body: "The agent prepares a release. An engineer, and where you want it you, approve it.",
  },
  {
    title: "Secrets stay out of prompts and out of the repository",
    body: "Keys live in the environment of the service that needs them. The agent works with placeholders.",
  },
];

const gates = [
  "The production build passes",
  "Type check and linter are clean",
  "Automated tests pass, including the ones written for this change",
  "For anything a user sees: the page is opened and checked at desktop and phone widths",
  "For a redesign or a migration: URLs, titles, canonicals and structured data are compared with a snapshot taken before work started",
  "An engineer has read the diff",
];

const handover = [
  "The repository, with its full history",
  "Documentation for running, testing and deploying the product",
  "The agent configuration we used: project instructions, hooks, skills and connected tools",
  "A list of what is not done and what was not verified",
];

const limits = [
  "We do not quote a speed multiplier. Independent studies do not agree on one, so we commit to scope and dates instead.",
  "The agent is weak where requirements are ambiguous and where a decision has no test. Those stay with people.",
  "A change the agent cannot run and check is treated as unverified until an engineer has checked it.",
];

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-1"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Intro */}
        <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Process
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              How we build{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
                with Claude Code
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              An agent that writes code is only useful inside a process that catches its mistakes.
              This page is that process: who does what, the rules the agent works under, the checks
              every change passes, and what you keep when we are done.
            </p>
          </div>
        </section>

        {/* Who does what */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Who does what
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {split.map((column) => (
                <div
                  key={column.who}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8"
                >
                  <h3 className="font-mono text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-5">
                    {column.who}
                  </h3>
                  <ul className="space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              The rules the agent works under
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {rules.map((rule) => (
                <div key={rule.title}>
                  <dt className="text-gray-900 dark:text-white font-semibold mb-2">{rule.title}</dt>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{rule.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Gates */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What every change passes before it merges
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The same gates apply whoever wrote the code, a person or the agent.
            </p>
            <ol className="space-y-3">
              {gates.map((gate, index) => (
                <li
                  key={gate}
                  className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4"
                >
                  <span className="font-mono text-sm font-semibold text-cyan-600 dark:text-cyan-400 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{gate}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Stages */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Work moves in stages you can open
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                We agree the plan first and write code second. The work is cut into stages, and each
                stage ends in something you can open in a browser, not in a status update.
              </p>
              <p>
                Every stage closes with a short report: what was done, what was checked and how, and
                what was not checked. You approve the stage before it goes live.
              </p>
            </div>
          </div>
        </section>

        {/* Handover + limits */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What you keep
              </h2>
              <ul className="space-y-3">
                {handover.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What we do not claim
              </h2>
              <ul className="space-y-4">
                {limits.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-cyan-500/60 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 sm:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-700/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-gray-900 dark:text-white font-semibold mb-1">
                  Want to see this on your own project?
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  A 30-minute call with an engineer. No commitment, no pitch deck.
                </p>
              </div>
              <Link
                href="/#contact"
                className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Book a call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
