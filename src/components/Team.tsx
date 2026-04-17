const founderAchievements = [
  "10+ years working with enterprise & startup technologies",
  "Founded and scaled a software services company from 0 to production",
  "Delivered 50+ digital products across web, mobile, and AI",
  "Deep expertise in product architecture and go-to-market strategy",
  "Knows how to build fast, validate quickly, and ship what matters",
  "Trusted by clients across Europe and beyond",
];

const teamStrengths = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Senior Engineers",
    body: "5+ years of hands-on experience each. Not juniors learning on your budget — engineers who've seen it all and know how to solve it.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Claude-Native",
    body: "We don't just prompt Claude — we architect around it. Our team has deep, native knowledge of Claude tools, the Anthropic SDK, and AI-assisted workflows.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Test-First Delivery",
    body: "We test before we ship. Every feature, every edge case. No 'it works on my machine' — flawless results in production.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Built for Speed",
    body: "AI-native development means we move faster than traditional teams. What takes months elsewhere takes us weeks — without cutting corners.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-gray-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            People Behind{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Claude Devs
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A tight-knit team of senior engineers led by a founder who has built,
            shipped, and scaled products for a decade.
          </p>
        </div>

        {/* Founder card */}
        <div className="mb-10 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20">
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-sky-500" />
          <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left: identity */}
            <div className="flex flex-col items-start gap-4">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center shadow-lg shadow-cyan-950/40 overflow-hidden">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Shoulders */}
                  <path d="M8,80 L10,67 C12,59 21,55 30,53 L40,57 L50,53 C59,55 68,59 70,67 L72,80 Z" fill="white" fillOpacity="0.12" />
                  {/* Head */}
                  <ellipse cx="40" cy="50" rx="18" ry="20" fill="white" fillOpacity="0.88" />
                  {/* Beard */}
                  <path d="M24,57 Q22,64 25,69 Q32,76 40,76 Q48,76 55,69 Q58,64 56,57 L51,59 Q45,63 40,63 Q35,63 29,59 Z" fill="white" fillOpacity="0.72" />
                  {/* Cap dome */}
                  <path d="M23,39 C23,21 57,21 57,39 L57,43 L23,43 Z" fill="white" fillOpacity="0.95" />
                  {/* Cap brim */}
                  <path d="M17,41 L63,41 L61,47 L19,47 Z" fill="white" fillOpacity="0.88" />
                  {/* Cap top button */}
                  <circle cx="40" cy="22" r="2" fill="white" fillOpacity="0.5" />
                  {/* Eyes */}
                  <circle cx="34" cy="52" r="2.5" fill="#0891b2" />
                  <circle cx="46" cy="52" r="2.5" fill="#0891b2" />
                  {/* Glasses */}
                  <rect x="27.5" y="47.5" width="12" height="9" rx="4" stroke="#0891b2" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
                  <rect x="40.5" y="47.5" width="12" height="9" rx="4" stroke="#0891b2" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
                  <line x1="39.5" y1="52" x2="40.5" y2="52" stroke="#0891b2" strokeOpacity="0.4" strokeWidth="1.5" />
                  {/* Mustache */}
                  <path d="M34,61 C36,63 38,63 40,61 C42,63 44,63 46,61" stroke="white" strokeOpacity="0.55" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-0.5">Oleksii Hashkov</h3>
                <p className="text-cyan-400 text-sm font-medium">Founder & CEO</p>
                <p className="text-gray-500 text-sm mt-1">Engineer · Builder · Strategist</p>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["10+ yrs exp", "Product", "Architecture", "Founder"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-cyan-950/60 border border-cyan-700/40 text-cyan-300 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: bio + achievements */}
            <div className="lg:col-span-2">
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Oleksii is the kind of founder who writes code in the morning and closes
                deals in the afternoon. With over a decade of experience across engineering,
                product management, and business development, he built Claude Devs to bridge
                the gap between cutting-edge AI capabilities and real-world software delivery.
              </p>
              <ul className="space-y-2.5">
                {founderAchievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Team strengths grid */}
        <div className="mb-8">
          <h3 className="text-white text-xl font-bold mb-6 text-center">
            The Engineering Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {teamStrengths.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-700/50 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-700/40 flex items-center justify-center text-cyan-400 shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-700/50 hover:-translate-y-0.5"
          >
            Work With Us
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
