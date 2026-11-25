import Image from "next/image";

const projects = [
  {
    name: "Fine Matter",
    kind: "Marketplace",
    image: "/work/fine-matter.jpg",
    summary:
      "A marketplace for design-led fine jewellery that brings 94 independent makers together in one storefront.",
    facts: [
      "Built and supported since 2022",
      "Shopify runs cart and checkout, the storefront and the maker side are custom",
      "Each maker sees only their own sales",
    ],
    stack: ["React", "Gatsby", "Shopify", "Prismic", "CloudFront"],
  },
  {
    name: "Completedworks",
    kind: "E-commerce",
    image: "/work/completedworks.jpg",
    summary:
      "A London jewellery and homeware brand with more than a thousand products, rebuilt on Shopify Online Store 2.0.",
    facts: [
      "Migration and redesign shipped in one release",
      "Custom theme connected to Git, so every change is reviewed",
      "URLs and redirects mapped before launch",
    ],
    stack: ["Shopify", "Liquid", "Online Store 2.0", "Metaobjects"],
  },
  {
    name: "ECR Retail Loss Group",
    kind: "Research platform",
    image: "/work/ecr-retail-loss.jpg",
    summary:
      "A research library on retail loss for three audiences: retailers, academics and solution providers.",
    facts: [
      "Topics and search as entry points, not a date feed",
      "Long reports with charts and tables that stay readable on a phone",
      "New publications added by the group without a developer",
    ],
    stack: ["Gatsby", "Prismic", "styled-components"],
  },
  {
    name: "HoundDog.ai",
    kind: "B2B product website",
    image: "/work/hound-dog.jpg",
    summary:
      "A website that explains an AI code-scanning product to security and compliance buyers at the same time.",
    facts: [
      "Design in Figma, reviewed with the client before any build",
      "Every block on every page is editable by the client's team",
      "Caching and on-page SEO configured at handover",
    ],
    stack: ["WordPress", "Advanced Custom Fields", "Tailwind CSS"],
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-white dark:bg-gray-950 py-24 sm:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Products this team{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
              has shipped
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Delivered by our team at Smart-UI, the product engineering company behind Claude Devs.
            Most of this work predates our Claude Code workflow. It is here to show what the team
            ships and keeps running.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-300 dark:hover:border-cyan-700/50 transition-colors duration-300"
            >
              <div className="relative aspect-[20/13] border-b border-gray-200 dark:border-gray-800">
                <Image
                  src={project.image}
                  alt={`${project.name} website`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-xl">{project.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-cyan-100 dark:bg-cyan-500/20 border-cyan-300 dark:border-cyan-400/40 text-cyan-700 dark:text-cyan-300">
                    {project.kind}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>

                <ul className="space-y-2 mb-5">
                  {project.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-2.5 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                      {fact}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
