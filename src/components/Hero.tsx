export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-950/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-950/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-950/30 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-600/50 text-cyan-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Official Anthropic Claude AI Development Partner
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          We Build Smarter{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
            with Claude
          </span>
          <br />
          than Anyone Else
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          Claude Devs is a software studio that lives and breathes Anthropic&apos;s Claude AI.
          We don&apos;t just use it as a tool — we build products, automations, and integrations
          on top of it every single day.
        </p>

        {/* Claude callout */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-cyan-950/40 border border-cyan-700/40 rounded-2xl px-6 py-4 mb-10 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400 shrink-0" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <span><span className="text-cyan-300 font-semibold">Claude API</span> · <span className="text-cyan-300 font-semibold">Claude Code</span> · <span className="text-cyan-300 font-semibold">Anthropic SDK</span></span>
          </div>
          <span className="hidden sm:block text-gray-600">—</span>
          <span className="text-gray-400">Deep expertise, real production experience</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-700/50 hover:-translate-y-0.5"
          >
            Start Your AI Project
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-200 hover:-translate-y-0.5"
          >
            See What We&apos;ve Built
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-gray-800 pt-10">
          {[
            { value: "50+", label: "AI Projects Shipped" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "3x", label: "Faster with Claude" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
