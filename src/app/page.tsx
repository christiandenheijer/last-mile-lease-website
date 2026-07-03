import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { Usps } from "@/components/sections/usps";
import { Challenge } from "@/components/sections/challenge";
import { LeaseSolutions } from "@/components/sections/lease-solutions";
import { SectorsGrid } from "@/components/sections/sectors-grid";
import { Comparison } from "@/components/sections/comparison";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { homeFaqSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Zakelijke lease van elektrische cargobikes`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <Hero />
      <TrustedBrands />
      <Usps />
      <Challenge />
      <LeaseSolutions />
      <SectorsGrid />
      <Comparison />
      <HowItWorks />
      <Faq />
      <CtaBanner />
    </>
  );
}
