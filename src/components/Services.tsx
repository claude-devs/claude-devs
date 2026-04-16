const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Full-stack web applications built with Next.js, React, and TypeScript — accelerated by Claude-assisted code generation, review, and testing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3" />
      </svg>
    ),
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with React Native and Expo. Claude handles the boilerplate — our engineers handle the craft.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Claude AI Integration",
    description:
      "We integrate Claude directly into your product. Chatbots, document analysis, code generation, agents — we know the Anthropic SDK inside out.",
    highlight: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "API Development",
    description:
      "Robust RESTful and GraphQL APIs with authentication, rate limiting, and documentation. Built to integrate with any frontend or third-party service.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud Solutions",
    description:
      "Architecture and DevOps on AWS, GCP, and Vercel. CI/CD pipelines, Docker, and serverless infrastructure — shipped fast with AI assistance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces designed in Figma and built with Tailwind CSS. Design systems, prototypes, and user research — all faster with AI.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services Supercharged{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              by Claude AI
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every service we offer is accelerated by our deep knowledge of the Anthropic
            ecosystem — meaning faster delivery and smarter results for you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                service.highlight
                  ? "bg-violet-950/40 border-violet-700/60 hover:border-violet-500 hover:shadow-violet-900/30"
                  : "bg-gray-950 border-gray-800 hover:border-violet-700/60 hover:bg-gray-900 hover:shadow-violet-900/20"
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors ${
                service.highlight
                  ? "bg-violet-900/60 border-violet-600/50 text-violet-300"
                  : "bg-violet-950 border-violet-800/50 text-violet-400 group-hover:bg-violet-900/60"
              }`}>
                {service.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                {service.highlight && (
                  <span className="text-[10px] font-semibold bg-violet-600/30 border border-violet-500/40 text-violet-300 px-2 py-0.5 rounded-full">
                    Core
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Claude CTA banner */}
        <div className="mt-14 rounded-2xl bg-violet-950/30 border border-violet-800/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Need a Claude AI integration?</p>
              <p className="text-gray-400 text-sm">We&apos;re one of the most experienced teams building on the Anthropic stack. Let&apos;s talk.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-900/40 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
