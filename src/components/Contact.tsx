"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-950 py-24 sm:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Let&apos;s Build Your Next{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
                Claude AI Product
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Whether you need a full product built, an existing app enhanced with Claude,
              or just a consultation — our team is ready. We respond within 24 hours.
            </p>

            {/* Why us list */}
            <ul className="space-y-3 mb-10">
              {[
                "Deep Anthropic SDK & Claude API expertise",
                "Production-proven Claude integrations",
                "End-to-end delivery — design to deployment",
                "Free initial consultation, no strings attached",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "hello@claude-devs.com",
                  href: "mailto:hello@claude-devs.com",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: "+34 634 839 752",
                  href: "tel:+34634839752",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  label: "WhatsApp: +34 634 839 752",
                  href: "https://wa.me/34634839752",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="text-cyan-500 dark:text-cyan-400">{item.icon}</div>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-cyan-500 dark:text-cyan-400" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project — what you're building and how Claude fits in..."
                    className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 dark:text-red-400 text-sm">Something went wrong. Please try again or contact us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-[0.98]"
                >
                  {status === "loading" ? "Sending…" : "Send Message — We Reply in 24h"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
