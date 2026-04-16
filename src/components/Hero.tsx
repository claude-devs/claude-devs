export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-orange-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-900/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-orange-950/30 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,146,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-950/60 border border-orange-700/50 text-orange-300 text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Powered by Anthropic Claude AI
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          AI-Powered{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Software
          </span>
          <br />
          Development
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Claude Devs builds next-generation digital products by combining expert
          engineering with the intelligence of Anthropic&apos;s Claude AI. Faster
          delivery, smarter solutions, exceptional quality.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-orange-900/40 hover:shadow-orange-700/50 hover:-translate-y-0.5"
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-200 hover:-translate-y-0.5"
          >
            View Our Work
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-gray-800 pt-10">
          {[
            { value: "50+", label: "Projects Shipped" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "3x", label: "Faster Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
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
