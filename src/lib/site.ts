import type { Metadata } from "next";

export const site = {
  name: "Claude Devs",
  url: "https://claude-devs.com",
  email: "hello@claude-devs.com",
  phone: "+34 634 839 752",
  /** One sentence that must read the same in the markup, llms.txt and the page body. */
  statement:
    "Claude Devs is an independent software engineering team that builds and ships products with Claude Code.",
  independence:
    "Claude Devs is not affiliated with, endorsed by, or sponsored by Anthropic. Claude and Claude Code are trademarks of Anthropic, PBC.",
  description:
    "Claude Devs is an independent engineering team that builds and ships MVPs, web apps and platforms with Claude Code. Fixed scope after discovery, or a dedicated team on monthly capacity.",
  parent: { name: "Smart-UI", url: "https://smart-ui.pro" },
  /** Bump by hand when the copy of a page changes. Used as lastModified in the sitemap. */
  contentUpdated: "2026-11-25",
} as const;

export const absoluteUrl = (path = "/") =>
  path === "/" ? site.url : `${site.url}${path}`;

/**
 * Next.js replaces `openGraph` and `alternates` from the layout whenever a page
 * sets its own, so every page builds the whole set here instead of relying on
 * a merge.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  // The generated image lives at the root segment. A page that sets its own
  // openGraph object loses it unless the image is named here as well.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: we ship real products with Claude Code` };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url,
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
