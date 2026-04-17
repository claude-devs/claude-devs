"use client";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80&fit=crop')",
        }}
      />

      {/* Dark mode overlay */}
      <div className="absolute inset-0 dark:block hidden bg-gradient-to-r from-gray-950/97 via-gray-950/85 to-gray-950/50 pointer-events-none" />
      {/* Light mode overlay */}
      <div className="absolute inset-0 dark:hidden block bg-gradient-to-r from-white/97 via-white/90 to-white/60 pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-600/50 text-cyan-600 dark:text-cyan-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse" />
            Official Anthropic Claude AI Development Partner
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            We Build Smarter{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
              with Claude
            </span>
            <br />
            than Anyone Else
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Claude Devs is a software studio that lives and breathes Anthropic&apos;s Claude AI.
            We don&apos;t just use it as a tool — we build products, automations, and integrations
            on top of it every single day.
          </p>

          {/* Claude callout */}
          <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-700/40 rounded-2xl px-5 py-4 mb-10 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-500 dark:text-cyan-400 shrink-0" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <span>
                <span className="text-cyan-600 dark:text-cyan-300 font-semibold">Claude API</span>
                {" · "}
                <span className="text-cyan-600 dark:text-cyan-300 font-semibold">Claude Code</span>
                {" · "}
                <span className="text-cyan-600 dark:text-cyan-300 font-semibold">Anthropic SDK</span>
              </span>
            </div>
            <span className="hidden sm:block text-gray-300 dark:text-gray-600">—</span>
            <span>Deep expertise, real production experience</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mb-10 border-t border-gray-200 dark:border-gray-800 pt-8">
            {[
              { value: "50+", label: "AI Projects Shipped" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "3x", label: "Faster with Claude" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500 dark:text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-center"
            >
              Start Your AI Project
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              See What We&apos;ve Built
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 group cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-1.5 group-hover:border-current transition-colors">
          <div className="w-1 h-2.5 bg-current rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
