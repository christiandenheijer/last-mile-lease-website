import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Wrench, ShieldCheck, Gauge, HandCoins } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Reveal } from "@/components/shared/reveal";
import { faqs, siteConfig } from "@/lib/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Operational Lease cargobike | Vast maandbedrag, alles inbegrepen",
  description:
    "Operational Lease van elektrische cargobikes: vast maandbedrag inclusief onderhoud, verzekering en service. Maximale ontzorging voor jouw organisatie.",
  alternates: { canonical: "/operational-lease" },
};

const included = [
  {
    icon: HandCoins,
    title: "Eén vast maandbedrag",
    description:
      "Volledig inzicht in je kosten, zonder verrassingen achteraf. Ideaal voor een voorspelbare begroting.",
  },
  {
    icon: Wrench,
    title: "Onderhoud op locatie",
    description:
      "Onze monteurs komen naar jouw bedrijf toe voor gepland en ongepland onderhoud.",
  },
  {
    icon: ShieldCheck,
    title: "Verzekering inbegrepen",
    description:
      "Volledig gedekt tegen schade en diefstal, inclusief snelle schadeafhandeling.",
  },
  {
    icon: Gauge,
    title: "Vervangend vervoer",
    description:
      "Bij langdurige reparatie zorgen we voor vervangend vervoer, zodat je operatie doorloopt.",
  },
];

const operationalFaqs = faqs.filter((faq) =>
  ["Operational", "onderhoud", "verzekering", "levertijden"].some((k) =>
    faq.question.toLowerCase().includes(k.toLowerCase())
  )
);

const schema = [
  serviceSchema({
    name: "Operational Lease cargobike",
    description: metadata.description as string,
    url: `${siteConfig.url}/operational-lease`,
  }),
  breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Operational Lease", url: `${siteConfig.url}/operational-lease` },
  ]),
];

export default function OperationalLeasePage() {
  return (
    <>
      {schema.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <PageHero
        eyebrow="Operational Lease"
        title="Volledig zorgeloos rijden, tegen een vast maandbedrag"
        description="Operational Lease is dé oplossing voor organisaties die willen rijden zonder zich zorgen te maken over onderhoud, verzekering of restwaarde."
      />

      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Wat is inbegrepen"
            title="Maximale ontzorging, van dag één"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-navy-100 bg-mist-50 p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-mist-50">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Voor wie"
                title="Ideaal voor organisaties die willen rijden, niet regelen"
                description="Operational Lease is de meest gekozen oplossing binnen Last Mile Lease. Vooral geschikt voor organisaties die geen kapitaal willen vastleggen en op geen enkel moment omkijken willen hebben naar onderhoud of verzekering."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Geen technische kennis nodig in eigen team",
                  "Volledig voorspelbare maandlasten",
                  "Geen risico op onverwachte reparatiekosten",
                  "Eenvoudig op te schalen met extra cargobikes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-navy-800">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-10">
                <Link href="/contact">
                  Vraag offerte aan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-4xl border border-navy-100 bg-navy-950 p-10 text-white shadow-lift">
                <h3 className="font-display text-xl font-semibold">
                  Operational vs. Financial Lease
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Twijfel je nog tussen de twee leasevormen? Dit is het
                  belangrijkste verschil.
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-green-300">
                      Operational Lease
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Onderhoud en verzekering inbegrepen, geen eigendom na
                      afloop, maximale ontzorging.
                    </p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Financial Lease
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Eigendom na afloop, fiscale voordelen, lagere maandlast
                      zonder onderhoud inbegrepen.
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline-light" className="mt-8 w-full">
                  <Link href="/financial-lease">
                    Bekijk Financial Lease
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Faq items={operationalFaqs.length ? operationalFaqs : faqs.slice(0, 4)} title="Vragen over Operational Lease" />
      <CtaBanner />
    </>
  );
}
