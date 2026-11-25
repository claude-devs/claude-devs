const founderAchievements = [
  "10+ years working with enterprise & startup technologies",
  "Founded a software services company in 2018 and has run it since",
  "Led full-stack engineering for a US product company for five years",
  "Puts the right team on each request and stays accountable for delivery",
  "Clients in the US, the UK, Australia and the EU",
];

const teamStrengths = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Senior Engineers",
    body: "The engineers who scope your project are the ones who build it. No juniors learning on your budget.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Claude Code in the Workflow",
    body: "Project instructions, hooks, MCP connections and review rules are set up per repository, so the agent works to the same standard as the team.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tested Before It Ships",
    body: "Automated tests and CI gate every merge, whoever wrote the code. Nothing reaches production on the strength of a demo.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "A Scope You Can Hold Us To",
    body: "After discovery you get a written scope and a quote. We do not promise a speed multiplier. We promise what will be delivered and when.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white dark:bg-gray-950 py-24 sm:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            People Behind{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
              Claude Devs
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            An engineering team that has shipped products together since 2018,
            led by a founder with more than ten years in digital transformation.
          </p>
        </div>

        {/* Founder card */}
        <div className="mb-10 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-300 dark:hover:border-cyan-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-100 dark:hover:shadow-cyan-950/20">
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-sky-500" />
          <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left: identity */}
            <div className="flex flex-col items-start gap-4">
              <div className="w-20 h-20 rounded-2xl shadow-lg shadow-cyan-500/10 overflow-hidden">
                <img
                  src="/VBXbAtFIesk.jpg"
                  alt="Oleksii Hashkov"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-0.5">Oleksii Hashkov</h3>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">Founder & CEO</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Engineer · Tech lead · Founder</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["10+ yrs exp", "Delivery", "Architecture", "Founder"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-700/40 text-cyan-600 dark:text-cyan-300 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: bio + achievements */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                Oleksii has spent more than ten years in digital transformation, as an
                engineer, a tech lead and a founder. At Claude Devs he runs delivery: he
                assembles the team for each request and answers for the result.
              </p>
              <ul className="space-y-2.5">
                {founderAchievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5"
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
          <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-6 text-center">
            The Engineering Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {teamStrengths.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-cyan-300 dark:hover:border-cyan-700/50 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-cyan-950/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-700/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-semibold">{item.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
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
