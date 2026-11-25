import CdLogo from "@/components/CdLogo";
import Link from "next/link";
import { services } from "@/data/services";

const footerLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/process" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <CdLogo size={30} gradId="cd-footer" />
            <span className="text-sm font-bold tracking-tight">
              <span className="text-gray-900 dark:text-white font-mono">Claude</span>
              <span className="font-mono bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent"> Devs</span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-400 dark:text-gray-600 text-sm text-center md:text-right">
            &copy; {year} Claude Devs. All rights reserved.
          </p>
        </div>

        {/* Services */}
        <nav aria-label="Services" className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
            >
              {service.name}
            </Link>
          ))}
        </nav>

        {/* Independence notice */}
        <p className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-500 text-xs leading-relaxed text-center max-w-3xl mx-auto">
          Claude Devs is an independent software engineering agency. We are not affiliated with,
          endorsed by, or sponsored by Anthropic. Claude and Claude Code are trademarks of Anthropic, PBC.
        </p>
      </div>
    </footer>
  );
}
