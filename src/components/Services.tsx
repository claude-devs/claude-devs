const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Product Development",
    headline: "MVPs, web apps and platforms, built with Claude Code",
    description:
      "We start with a short paid discovery and come back with a scope, an architecture and a quote we commit to. Then we build, test and ship. Agent features and MCP integrations are part of the build when the product needs them.",
    badge: "Fixed scope",
    badgeStyle: "flagship",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Dedicated Team",
    headline: "A senior team on monthly capacity",
    description:
      "A named team that works inside your repo and your process: your backlog, your reviews, your releases. You agree the team and a minimum term up front and pay for monthly capacity, not for hours on a timesheet.",
    badge: "Monthly capacity",
    badgeStyle: "hot",
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "AI-Code Rescue",
    headline: "Make an AI-built app safe to run in production",
    description:
      "For products with real users that were built fast with Claude Code, Cursor or a no-code builder. We audit the codebase, fix what blocks production (security, data, tests, deploys) and can stay on for maintenance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Claude Code Rollout",
    headline: "Set up Claude Code across your engineering team",
    description:
      "We configure Claude Code on your own repositories: project instructions, permissions, hooks, MCP connections and review rules. Moving an existing integration from OpenAI to Claude is handled as part of the same work.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Four ways to{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
              work with us
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We do not sell hours with an AI label. You get working software, a scope you agreed to and a process you can inspect.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.featured
                  ? "bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/60 dark:to-sky-950/40 border-cyan-300 dark:border-cyan-500/70 hover:border-cyan-400 hover:shadow-cyan-100 dark:hover:shadow-cyan-950/40 ring-1 ring-cyan-200 dark:ring-cyan-500/20"
                  : service.badgeStyle === "flagship"
                  ? "bg-white dark:bg-gray-950/80 border-sky-200 dark:border-sky-700/50 hover:border-sky-400 dark:hover:border-sky-500/70 hover:bg-sky-50 dark:hover:bg-gray-900 hover:shadow-sky-100 dark:hover:shadow-sky-950/20"
                  : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 hover:border-cyan-300 dark:hover:border-cyan-600/60 hover:bg-gray-50 dark:hover:bg-gray-900 hover:shadow-gray-100 dark:hover:shadow-cyan-950/20"
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors ${
                service.featured
                  ? "bg-cyan-100 dark:bg-cyan-500/20 border-cyan-300 dark:border-cyan-400/50 text-cyan-600 dark:text-cyan-300"
                  : service.badgeStyle === "flagship"
                  ? "bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-600/50 text-sky-600 dark:text-sky-300"
                  : "bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-700/50 text-cyan-600 dark:text-cyan-400"
              }`}>
                {service.icon}
              </div>

              {/* Title + badge */}
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg">{service.title}</h3>
                {service.badge && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    service.badgeStyle === "flagship"
                      ? "bg-sky-100 dark:bg-sky-500/20 border-sky-300 dark:border-sky-400/40 text-sky-600 dark:text-sky-300"
                      : service.badgeStyle === "hot"
                      ? "bg-orange-100 dark:bg-orange-500/20 border-orange-300 dark:border-orange-400/40 text-orange-600 dark:text-orange-300"
                      : "bg-cyan-100 dark:bg-cyan-500/20 border-cyan-300 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300"
                  }`}>
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Headline */}
              <p className={`text-sm font-medium mb-2 ${
                service.featured ? "text-cyan-600 dark:text-cyan-300" : "text-cyan-600 dark:text-cyan-400/80"
              }`}>
                {service.headline}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Included-in-everything strip */}
        <div className="mt-10 rounded-2xl bg-white dark:bg-gray-950/60 border border-gray-200 dark:border-gray-700/50 px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider text-xs">Every engagement includes</span>
          {[
            "Engineers review every change",
            "Tests and CI before merge",
            "Your repo and your accounts",
            "Handover with agent configuration",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-500/70 shrink-0" />
              {item}
            </span>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-700/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900 dark:text-white font-semibold mb-1">Not sure which one fits?</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">We will scope it in a 30-minute call. No commitment, no pitch deck.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book a 30-minute call
          </a>
        </div>
      </div>
    </section>
  );
}
