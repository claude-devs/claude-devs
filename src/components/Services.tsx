const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "AI Product Development",
    headline: "Build Your AI Product from Zero to Production",
    description:
      "We design and ship complete AI-powered products on the Anthropic stack. Intelligent assistants, document processing platforms, decision-support tools, and AI-native SaaS — architected for scale with built-in evaluation, observability, and human-in-the-loop workflows.",
    badge: "Flagship",
    badgeStyle: "flagship",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
    title: "Claude Integration",
    headline: "Add Claude Intelligence to What You Already Have",
    description:
      "Upgrade your existing application with Claude-powered features — smart search, auto-categorization, content generation, and intelligent workflows. We audit your system, build a working prototype in 2 weeks, and deploy to production with zero disruption to your users.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "AI Team Augmentation & Rescue",
    headline: "Your Dev Team Is Stuck. We Unstick Them.",
    description:
      "Three modes: Embed our Claude-trained engineers to boost output 2–3×. Train your devs on Claude Code and Anthropic SDK in 2–4 weeks. Or Accelerate — we take over delivery entirely with no context lost and faster results from day one.",
    badge: "Most Requested",
    badgeStyle: "hot",
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "GPT-to-Claude Migration",
    headline: "Switch from OpenAI to Claude — Zero Downtime, Better Results",
    description:
      "Full audit, prompt re-engineering, eval pipeline rebuild, and A/B quality testing. Most migrations complete in 2–4 weeks with measurable output quality improvements and cost reduction up to 40%.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "AI Workflow Automation",
    headline: "Replace Manual Processes with Claude-Powered Automation",
    description:
      "Document processing, email triage, data extraction, report generation, compliance checking — every workflow custom-built for your business logic. Clients typically save 20–40 hours per week per workflow.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI Agents Development",
    headline: "Autonomous AI Agents That Actually Work in Production",
    description:
      "Single-agent and multi-agent systems with Claude: customer support agents, sales copilots, research assistants, coding agents. Full stack: tool use, persistent memory, planning loops, guardrails, and human escalation. Production systems, not demos.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Solve
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How We Help You{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Win with Claude AI
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don&apos;t list technologies — we solve business problems. Every engagement is built on deep Anthropic expertise and production-tested AI architecture.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.featured
                  ? "bg-gradient-to-br from-cyan-950/60 to-sky-950/40 border-cyan-500/70 hover:border-cyan-400 hover:shadow-cyan-950/40 ring-1 ring-cyan-500/20"
                  : service.badgeStyle === "flagship"
                  ? "bg-gray-950/80 border-sky-700/50 hover:border-sky-500/70 hover:bg-gray-900 hover:shadow-sky-950/20"
                  : "bg-gray-950 border-gray-800 hover:border-cyan-600/60 hover:bg-gray-900 hover:shadow-cyan-950/20"
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors ${
                service.featured
                  ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
                  : service.badgeStyle === "flagship"
                  ? "bg-sky-950/60 border-sky-600/50 text-sky-300"
                  : "bg-cyan-950 border-cyan-700/50 text-cyan-400 group-hover:bg-cyan-950/60"
              }`}>
                {service.icon}
              </div>

              {/* Title + badge */}
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                {service.badge && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    service.badgeStyle === "flagship"
                      ? "bg-sky-500/20 border-sky-400/40 text-sky-300"
                      : service.badgeStyle === "hot"
                      ? "bg-orange-500/20 border-orange-400/40 text-orange-300"
                      : "bg-cyan-500/20 border-cyan-400/40 text-cyan-300"
                  }`}>
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Headline */}
              <p className={`text-sm font-medium mb-2 ${
                service.featured ? "text-cyan-300" : "text-cyan-400/80"
              }`}>
                {service.headline}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Included-in-everything strip */}
        <div className="mt-10 rounded-2xl bg-gray-950/60 border border-gray-700/50 px-6 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          <span className="text-gray-500 font-medium uppercase tracking-wider text-xs">Every service includes</span>
          {[
            "Claude API & SDK expertise",
            "Production-grade architecture",
            "Eval & testing pipeline",
            "Post-launch support",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-500/70 shrink-0" />
              {item}
            </span>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-6 rounded-2xl bg-cyan-950/30 border border-cyan-700/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Not sure which engagement fits?</p>
              <p className="text-gray-400 text-sm">We&apos;ll scope it in a 30-minute call — no commitment, no pitch deck.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-950/40 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
