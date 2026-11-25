import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { absoluteUrl, site } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: `${site.statement} ${site.independence}`,
    email: site.email,
    telephone: site.phone,
    parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
    areaServed: ["US", "GB", "AU", "EU"],
    knowsAbout: ["Claude Code", "Product engineering", "Web application development", "Model Context Protocol"],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: absoluteUrl(`/services/${service.slug}`),
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Work />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
