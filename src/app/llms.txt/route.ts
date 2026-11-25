import { services } from "@/data/services";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.statement}`,
    "",
    site.independence,
    "",
    `${site.name} is run by the team of ${site.parent.name} (${site.parent.url}), a product engineering company that has shipped products since 2018.`,
    "It works in two formats: a fixed-scope project after a paid discovery, or a dedicated team on monthly capacity.",
    "It does not publish prices. A quote follows the discovery.",
    "",
    "## Services",
    "",
    ...services.map(
      (service) => `- [${service.name}](${absoluteUrl(`/services/${service.slug}`)}): ${service.metaDescription}`,
    ),
    "",
    "## How the team works",
    "",
    `- [Process](${absoluteUrl("/process")}): what the agent does, what an engineer checks, the gates every change passes before it merges, and what the client keeps at handover.`,
    "",
    "## Contact",
    "",
    `- Email: ${site.email}`,
    `- Phone and WhatsApp: ${site.phone}`,
    `- Website: ${site.url}`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
