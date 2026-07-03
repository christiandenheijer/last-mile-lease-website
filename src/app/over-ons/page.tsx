import type { Metadata } from "next";
import Image from "next/image";
import { Handshake, Target, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Over ons | Specialist in zakelijke cargobike lease",
  description:
    "Last Mile Lease is specialist in zakelijke leaseoplossingen voor professionele elektrische cargobikes. Persoonlijk advies, transparante voorwaarden en complete ontzorging.",
  alternates: { canonical: "/over-ons" },
};

const schema = breadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  { name: "Over ons", url: `${siteConfig.url}/over-ons` },
]);

const values = [
  {
    icon: Handshake,
    title: "Persoonlijk advies",
    description:
      "Eén vast aanspreekpunt dat de tijd neemt om jouw logistieke uitdaging écht te begrijpen.",
  },
  {
    icon: Target,
    title: "Transparante voorwaarden",
    description:
      "Heldere leasecontracten zonder kleine lettertjes, zodat je precies weet waar je aan toe bent.",
  },
  {
    icon: Sparkles,
    title: "Complete ontzorging",
    description:
      "Van advies tot onderhoud en schadeafhandeling: wij regelen het, jij blijft rijden.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow="Over ons"
        title="Dé specialist in zakelijke cargobike lease"
        description="Last Mile Lease helpt organisaties door heel Nederland bij de overstap naar emissievrije stadslogistiek, met persoonlijk advies en complete ontzorging."
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
                <Image
                  src="/images/over-ons-team.jpg"
                  alt="Vloot elektrische VOK Bikes cargobikes met verschillende opbouwvarianten"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Ons verhaal"
                title="Emissievrije stadslogistiek toegankelijk maken voor iedereen"
                description="Steden veranderen snel: zero-emissiezones, drukte en duurzaamheidsdoelen vragen om een nieuwe aanpak van last mile logistiek. Last Mile Lease is opgericht om organisaties hierin te ontzorgen, met professionele elektrische cargobikes van bewezen merken en leaseoplossingen die zonder gedoe werken."
              />
              <p className="mt-6 text-navy-700/80">
                Wij geloven dat de overstap naar emissievrij vervoer niet
                ingewikkeld of kapitaalintensief hoeft te zijn. Daarom bieden
                we Operational en Financial Lease aan, inclusief onderhoud,
                verzekering en persoonlijk advies - zodat elke organisatie,
                van koeriersbedrijf tot gemeente, vandaag nog kan starten.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-mist-50">
        <Container>
          <SectionHeading
            eyebrow="Waar wij voor staan"
            title="De waarden achter ons advies"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-card">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TrustedBrands />
      <CtaBanner />
    </>
  );
}
