import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { getService, services } from "@/data/services";
import { absoluteUrl, pageMetadata, site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-1"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = absoluteUrl(`/services/${service.slug}`);
  const others = services.filter((other) => other.slug !== service.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.h1,
      description: service.metaDescription,
      url,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: ["US", "GB", "AU", "EU"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/#services` },
        { "@type": "ListItem", position: 3, name: service.name, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Intro */}
        <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-500 mb-6">
              <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700 dark:text-gray-300">{service.name}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              {service.h1}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {service.lead}
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              Book a 30-minute call
            </Link>
          </div>
        </section>

        {/* Fit */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Who it is for</h2>
              <ul className="space-y-3">
                {service.fitFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Not a fit if</h2>
              <ul className="space-y-3">
                {service.notFor.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">What you get</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                >
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">How it runs</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6"
                >
                  <div className="font-mono text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
              The checks every change passes are listed on the{" "}
              <Link href="/process" className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
                process page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Questions</h2>
            <dl className="space-y-8">
              {service.faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-gray-900 dark:text-white font-semibold mb-2">{item.question}</dt>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Other services */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Other ways to work with us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group block bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:border-cyan-300 dark:hover:border-cyan-700/50 transition-colors duration-300"
                >
                  <h3 className="text-gray-900 dark:text-white font-semibold mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {other.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{other.cardHeadline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 sm:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-700/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-gray-900 dark:text-white font-semibold mb-1">Tell us what you are building</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  A 30-minute call with an engineer. No commitment, no pitch deck.
                </p>
              </div>
              <Link
                href="/#contact"
                className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Book a call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
