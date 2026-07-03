import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectorsGrid } from "@/components/sections/sectors-grid";
import { LeaseSolutions } from "@/components/sections/lease-solutions";
import { CtaBanner } from "@/components/sections/cta-banner";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sectoren | Cargobike lease voor iedere organisatie",
  description:
    "Van koeriersbedrijven en gemeenten tot horeca en zorginstellingen: ontdek hoe elektrische cargobikes jouw sector helpen bij emissievrije stadslogistiek.",
  alternates: { canonical: "/sectoren" },
};

const schema = breadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  { name: "Sectoren", url: `${siteConfig.url}/sectoren` },
]);

export default function SectorenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Sectoren"
        title="Eén oplossing, tientallen toepassingen"
        description="Cargobikes van Last Mile Lease sluiten aan op de dagelijkse praktijk van uiteenlopende organisaties in de stad."
      />
      <SectorsGrid compact className="bg-white pt-16" />
      <LeaseSolutions />
      <CtaBanner
        title="Herken je jouw organisatie hierboven?"
        description="Vraag een offerte aan en ontdek wat een cargobike voor jouw sector kan betekenen."
      />
    </>
  );
}
