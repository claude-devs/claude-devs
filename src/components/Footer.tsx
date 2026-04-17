import CdLogo from "@/components/CdLogo";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <CdLogo size={30} gradId="cd-footer" />
            <span className="text-sm font-bold tracking-tight">
              <span className="text-white font-mono">Claude</span>
              <span className="font-mono bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent"> Devs</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-600 text-sm text-center md:text-right">
            &copy; {year} Claude Devs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
