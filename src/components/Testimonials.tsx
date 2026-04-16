const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, FinTrack Inc.",
    avatar: "SM",
    gradient: "from-orange-500 to-amber-500",
    text: "Claude Devs transformed our backend infrastructure in just 6 weeks. Their AI-assisted development approach cut our delivery time in half while maintaining exceptional code quality. Genuinely the best dev team we've ever worked with.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Founder, LegalMind AI",
    avatar: "JO",
    gradient: "from-amber-500 to-yellow-500",
    text: "We needed a complex document analysis tool built on Claude's API — they delivered a production-ready product in 4 weeks. The team deeply understands both the Anthropic ecosystem and real-world engineering constraints.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Head of Product, Shopably",
    avatar: "EV",
    gradient: "from-orange-600 to-red-500",
    text: "Our AI-powered shopping assistant went from idea to launch in under 2 months. Claude Devs handled everything — architecture, API integration, UI, and deployment. Communication was flawless throughout.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Engineering Lead, Nexus Labs",
    avatar: "DC",
    gradient: "from-amber-400 to-orange-500",
    text: "The code review automation tool they built us saves our team 10+ hours per week. They used Claude brilliantly — the suggestions are context-aware and actually useful. Already planning our next project with them.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400">
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
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what the teams we&apos;ve
            worked with have to say about the experience.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-orange-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20"
            >
              {/* Quote icon */}
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-8 h-8 text-orange-800/60 mb-4"
              >
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 8.515 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C21.5 11.515 22.515 10 24 10V8z" />
              </svg>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                  >
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
      </div>
    </section>
  );
}
