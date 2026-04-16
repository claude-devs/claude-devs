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
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-md shadow-orange-900/30">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 text-white"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <span className="font-bold text-sm tracking-tight">
              <span className="text-white font-mono">Claude</span>
              <span className="font-mono bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> Devs</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
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
