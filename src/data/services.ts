export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  /** Short name used on cards, in navigation and in breadcrumbs. */
  name: string;
  /** Badge on the home page card, if any. */
  badge?: string;
  /** One line under the card title on the home page. */
  cardHeadline: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  fitFor: string[];
  notFor: string[];
  deliverables: string[];
  steps: ServiceStep[];
  faq: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "product-development",
    name: "Product Development",
    badge: "Fixed scope",
    cardHeadline: "MVPs, web apps and platforms, built with Claude Code",
    cardDescription:
      "We start with a short paid discovery and come back with a scope, an architecture and a quote we commit to. Then we build, test and ship. Agent features and MCP integrations are part of the build when the product needs them.",
    metaTitle: "Product Development with Claude Code | Claude Devs",
    metaDescription:
      "MVPs, web apps and platforms built with Claude Code by a senior engineering team. A paid discovery first, then a fixed scope and a quote we commit to.",
    h1: "Product development with Claude Code",
    lead: "We build MVPs, web apps and platforms and take them to production. Claude Code does a large share of the typing. Engineers decide what gets built, review every change and answer for the result.",
    fitFor: [
      "Technical founders and CTOs who need a product shipped",
      "Teams that already use Claude and want the build done the same way",
      "Products that need agent features or MCP integrations as part of the build",
    ],
    notFor: [
      "You want an open-ended timesheet. The dedicated team fits that better.",
      "The scope cannot be written down yet. Start with the discovery on its own.",
    ],
    deliverables: [
      "A written scope, an architecture and a quote after discovery",
      "Working software at each milestone, in an environment you can open",
      "Automated tests and a CI pipeline",
      "Deployment to your own infrastructure and accounts",
      "The repository, the documentation and the agent configuration used to build it",
    ],
    steps: [
      {
        title: "Discovery",
        body: "A short, paid phase. We read your requirements and any existing code, agree what is in and out, and return a written scope, an architecture and a quote.",
      },
      {
        title: "Build in stages",
        body: "The work is cut into stages. Each one ends in something you can open, with a report of what was done, what was checked and what was not.",
      },
      {
        title: "Launch",
        body: "We deploy to your infrastructure, watch the first days in production and fix what real use reveals.",
      },
      {
        title: "Handover or support",
        body: "You keep everything. Your team takes over with the documentation, or we stay on for maintenance.",
      },
    ],
    faq: [
      {
        question: "How is the price set?",
        answer:
          "After the discovery you get a written scope and a quote for that scope. If the scope changes, we agree the change and its cost before doing the work. We do not publish a price list, because the range between a two-screen MVP and a marketplace is too wide to be useful.",
      },
      {
        question: "Do you only build on Claude?",
        answer:
          "Our delivery process is built around Claude Code, so that is what we use to write the software. The product itself can call any model, or none at all.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. The work happens in your repository and under your accounts from the first day.",
      },
      {
        question: "Is AI-written code safe to run in production?",
        answer:
          "Code is safe when it is reviewed and tested, whoever wrote it. Every change passes the same gates: build, type check, linter, automated tests and a review by an engineer. The full list is on our process page.",
      },
    ],
  },
  {
    slug: "dedicated-team",
    name: "Dedicated Team",
    badge: "Monthly capacity",
    cardHeadline: "A senior team on monthly capacity",
    cardDescription:
      "A named team that works inside your repo and your process: your backlog, your reviews, your releases. You agree the team and a minimum term up front and pay for monthly capacity, not for hours on a timesheet.",
    metaTitle: "Dedicated Engineering Team with Claude Code | Claude Devs",
    metaDescription:
      "A named engineering team on monthly capacity that works inside your repository and process, with Claude Code, MCP and agent tooling in the loop.",
    h1: "A dedicated engineering team on monthly capacity",
    lead: "A named team that joins your backlog and works the way you already work, with Claude Code in the loop. You pay for monthly capacity and a result you can inspect, not for hours on a timesheet.",
    fitFor: [
      "Engineering leaders who need more delivery capacity without a hiring round",
      "Companies with a product in production and a backlog that has outgrown the team",
      "Teams that want engineers who already work with Claude Code, MCP and agent tooling",
    ],
    notFor: [
      "You need one freelancer for a few days.",
      "You are looking for the lowest hourly rate on the market.",
    ],
    deliverables: [
      "A named team agreed before the start: who, and in which roles",
      "Work inside your repository, your tracker and your review process",
      "A demo of working software at the end of each cycle",
      "A monthly summary: what shipped, what is next, what is blocked",
      "Agent configuration for your repository that stays with you",
    ],
    steps: [
      {
        title: "Scoping call",
        body: "We look at the product, the backlog and how your team works today.",
      },
      {
        title: "Team and term",
        body: "We propose who joins, in which roles, and a minimum term. Nothing starts until you have agreed both.",
      },
      {
        title: "Onboarding",
        body: "Access, project instructions for the agent and a first small release, so the process is proven on something low risk.",
      },
      {
        title: "Monthly cycle",
        body: "We plan the month with you, ship, show what shipped and adjust the plan.",
      },
    ],
    faq: [
      {
        question: "What does monthly capacity mean?",
        answer:
          "You reserve a team for the month. We plan that month's work with you, show what shipped at the end and adjust the plan. You are not billed by the hour.",
      },
      {
        question: "What is the minimum term?",
        answer:
          "We agree it before the start, together with the team composition. It depends on the size of the team and the product.",
      },
      {
        question: "Can the team grow or shrink?",
        answer:
          "Yes, with the notice period written into the agreement. Adding people needs time to onboard them properly.",
      },
      {
        question: "Do your engineers replace ours?",
        answer:
          "No. They work alongside your team under your technical lead, or under ours if you do not have one.",
      },
    ],
  },
  {
    slug: "ai-code-rescue",
    name: "AI-Code Rescue",
    cardHeadline: "Make an AI-built app safe to run in production",
    cardDescription:
      "For products with real users that were built fast with Claude Code, Cursor or a no-code builder. We audit the codebase, fix what blocks production (security, data, tests, deploys) and can stay on for maintenance.",
    metaTitle: "AI-Code Rescue: Production-Ready AI-Built Apps | Claude Devs",
    metaDescription:
      "An audit and a fix sprint for apps built with Claude Code, Cursor or a no-code builder: security, data handling, tests and deployment, then a codebase a team can maintain.",
    h1: "Make an AI-built app safe to run in production",
    lead: "Your product was built fast with Claude Code, Cursor or a no-code builder. It has real users, and now it breaks in ways nobody can explain. We audit it, fix what blocks production and leave you with a codebase a team can maintain.",
    fitFor: [
      "Founders with real users on an app that was built with AI tools",
      "Teams that inherited an AI-generated codebase with no tests and no documentation",
      "Products that did not pass a security review or a due diligence check",
    ],
    notFor: [
      "A prototype with no users yet. It is usually cheaper to keep prototyping.",
      "You need a single bug fixed today.",
    ],
    deliverables: [
      "A written audit: security, data handling, tests, deployment and dependencies",
      "A prioritised list: what blocks production, what can wait, what is fine",
      "Fixes for the blocking items, each one covered by a test",
      "A working deployment pipeline and basic monitoring",
      "A recommendation: keep and harden, or rebuild a part of it",
    ],
    steps: [
      {
        title: "Audit",
        body: "We read the code, run it and try to break it. You get a written report, not a call.",
      },
      {
        title: "Fix sprint",
        body: "We fix what blocks production first. Every fix comes with a test, so it stays fixed.",
      },
      {
        title: "Decision",
        body: "With the facts on the table you decide: keep hardening what exists, or rebuild the part that cannot be saved.",
      },
      {
        title: "Maintenance",
        body: "Optional. We keep the product running, or hand it to your team with documentation.",
      },
    ],
    faq: [
      {
        question: "Will you tell us to rewrite everything?",
        answer:
          "Only if the audit shows a rewrite is cheaper than a repair. The report says which parts are sound and which are not, so the decision is yours and it is based on facts.",
      },
      {
        question: "Does it matter which tool wrote the code?",
        answer:
          "No. The checklist is the same for code from Claude Code, Cursor, Lovable, Bolt, Replit or a contractor: does it build, is it tested, is the data safe, can it be deployed and rolled back.",
      },
      {
        question: "Can you stay on after the fixes?",
        answer:
          "Yes. After the fixes we can keep maintaining the product, or hand it to your team with documentation.",
      },
    ],
  },
  {
    slug: "claude-code-rollout",
    name: "Claude Code Rollout",
    cardHeadline: "Set up Claude Code across your engineering team",
    cardDescription:
      "We configure Claude Code on your own repositories: project instructions, permissions, hooks, MCP connections and review rules. Moving an existing integration from OpenAI to Claude is handled as part of the same work.",
    metaTitle: "Claude Code Rollout for Engineering Teams | Claude Devs",
    metaDescription:
      "Claude Code set up on your own repositories: project instructions, permissions, hooks, MCP connections and review rules. By an independent engineering team.",
    h1: "Claude Code rollout for engineering teams",
    lead: "Buying seats is the easy part. We set Claude Code up on your own repositories, so the agent works to your standards, your engineers trust its output and your security team knows what it can touch.",
    fitFor: [
      "Engineering leaders rolling Claude Code out to a whole team",
      "Teams where a few people use it well and the rest do not",
      "Companies whose security team asks what the agent can read and run",
    ],
    notFor: [
      "You want a general AI strategy. We set up one tool on real code.",
      "Your procurement requires a listed Anthropic partner. We are an independent team.",
    ],
    deliverables: [
      "Project instructions for each repository: conventions, commands and known pitfalls",
      "Permission settings: what the agent may run without asking",
      "Hooks and review rules, including checks in CI",
      "MCP connections to the internal tools your team actually uses",
      "Working sessions with your engineers on their own tasks",
      "A short written guide your team can keep extending",
    ],
    steps: [
      {
        title: "Audit",
        body: "How the team works today, where the agent already helps and where it gets in the way.",
      },
      {
        title: "One repository first",
        body: "We set everything up on a single repository and prove it on real tasks.",
      },
      {
        title: "Roll out",
        body: "The same setup, adapted, goes to the other repositories and teams.",
      },
      {
        title: "Review",
        body: "A few weeks later we look at what is used, what is ignored and what to change.",
      },
    ],
    faq: [
      {
        question: "Are you an Anthropic partner?",
        answer:
          "No. Claude Devs is an independent engineering team. We are not affiliated with or endorsed by Anthropic. We work with Claude Code on our own delivery, and that is the experience we bring.",
      },
      {
        question: "We use OpenAI in our product. Can you move it to Claude?",
        answer:
          "Yes. Moving an integration covers prompts, tool definitions, evaluation and a side by side quality check before the switch. It is scoped as part of the same engagement.",
      },
      {
        question: "Do you train our engineers?",
        answer:
          "We work with them on their own tasks in their own repository, which transfers more than a slide deck. Anthropic also publishes free courses, and we point your team to the ones worth their time.",
      },
      {
        question: "How long does it take?",
        answer:
          "It depends on the number of repositories and tools. You get a scope and dates after the audit.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
