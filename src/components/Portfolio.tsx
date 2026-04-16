const projects = [
  {
    name: "NexusChat",
    description:
      "An enterprise-grade AI customer support platform powered by Claude. Handles 10,000+ daily conversations with automatic escalation and sentiment analysis.",
    tags: ["Next.js", "Claude API", "PostgreSQL", "WebSockets"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "CodePilot Pro",
    description:
      "An internal developer tool that uses Claude to review pull requests, generate documentation, and suggest code improvements in real time within GitHub.",
    tags: ["TypeScript", "GitHub Actions", "Anthropic SDK", "Node.js"],
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    name: "DocuMind",
    description:
      "A document intelligence SaaS that extracts, summarises, and answers questions from PDFs and Word docs using vector search and Claude for reasoning.",
    tags: ["Python", "FastAPI", "Pinecone", "React", "Claude API"],
    gradient: "from-orange-600 to-red-500",
  },
  {
    name: "ShopFlow AI",
    description:
      "A full-stack e-commerce platform with AI-powered product recommendations, automated SEO copy generation, and a personalised shopping assistant.",
    tags: ["Next.js", "Prisma", "Stripe", "OpenSearch", "Tailwind"],
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects We&apos;re{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Proud Of
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of recent work showcasing how we combine AI capabilities
            with solid engineering to create real business value.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8">
                {/* Project icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 text-white font-bold text-lg shadow-lg`}
                >
                  {project.name[0]}
                </div>

                <h3 className="text-white font-bold text-xl mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors group"
          >
            Interested in working together?
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
