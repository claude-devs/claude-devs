const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinTrack Inc.",
    avatar: "SM",
    gradient: "from-cyan-500 to-sky-600",
    text: "Claude Devs transformed our backend in just 6 weeks. Their AI-assisted approach cut delivery time in half while keeping code quality exceptional. The team genuinely knows Claude inside out — it shows in every line of code.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Founder, LegalMind AI",
    avatar: "JO",
    gradient: "from-sky-500 to-blue-500",
    text: "We needed a complex document analysis tool built on Claude's API. They delivered a production-ready product in 4 weeks. No other agency understands the Anthropic ecosystem at this level.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Head of Product, Shopably",
    avatar: "EV",
    gradient: "from-cyan-600 to-sky-500",
    text: "Our AI shopping assistant went from idea to launch in under 2 months. What sets Claude Devs apart is how they think with Claude, not just through it. The product feels genuinely intelligent.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Engineering Lead, Nexus Labs",
    avatar: "DC",
    gradient: "from-sky-400 to-cyan-500",
    text: "The code review automation they built us saves 10+ hours per week. Claude's suggestions are context-aware and actually useful — because the team knows how to prompt and architect for it properly.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-cyan-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Teams that wanted more than a dev agency — they wanted a partner that
            actually knows how to build with Claude AI.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Quote icon */}
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-8 h-8 text-cyan-800/60 mb-4"
              >
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 8.515 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C21.5 11.515 22.515 10 24 10V8z" />
              </svg>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-700/50 hover:-translate-y-0.5"
          >
            Join Our Happy Clients
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
