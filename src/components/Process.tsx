import Link from "next/link";

const steps = [
  {
    title: "Discovery",
    body: "A short, paid phase. We read your code and requirements, agree what is in and out, and return a written scope, an architecture and a quote.",
  },
  {
    title: "Build",
    body: "Claude Code does a large share of the typing. Engineers plan the work, review every change and own the result. Tests and CI run before anything merges.",
  },
  {
    title: "Ship",
    body: "We deploy to your infrastructure and stay through launch. You see working software at each milestone, not only at the end.",
  },
  {
    title: "Handover",
    body: "You keep the repository, the documentation and the agent configuration we used, so your own team can continue the same way.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            From first call to{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
              handover
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            The same four steps whether you buy a fixed-scope project or a team on monthly capacity.
          </p>
        </div>

        {/* Steps */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-cyan-300 dark:hover:border-cyan-700/50 transition-colors duration-300"
            >
              <div className="font-mono text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-12">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 font-semibold transition-colors"
          >
            Read the full process
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
