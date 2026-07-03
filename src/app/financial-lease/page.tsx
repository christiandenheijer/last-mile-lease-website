import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Coins, TrendingUp, CalendarClock, Landmark } from "lucide-react";
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
  title: "Financial Lease cargobike | Eigendom met fiscaal voordeel",
  description:
    "Financial Lease van elektrische cargobikes: bouw toe naar eigendom met flexibele looptijden en fiscale voordelen. Lage eerste investering.",
  alternates: { canonical: "/financial-lease" },
};

const included = [
  {
    icon: Landmark,
    title: "Eigendom na afloop",
    description:
      "Aan het einde van de looptijd is de cargobike volledig van jouw organisatie.",
  },
  {
    icon: CalendarClock,
    title: "Flexibele looptijden",
    description:
      "Kies een looptijd die aansluit op jouw investeringshorizon en gebruiksintensiteit.",
  },
  {
    icon: TrendingUp,
    title: "Fiscale voordelen",
    description:
      "Profiteer mogelijk van afschrijving en investeringsaftrek voor jouw onderneming.",
  },
  {
    icon: Coins,
    title: "Lage eerste investering",
    description:
      "Rijd direct op een nieuwe cargobike zonder de volledige aanschafwaarde vooraf te betalen.",
  },
];

const financialFaqs = faqs.filter((faq) =>
  ["Financial", "eigendom", "merken"].some((k) =>
    faq.question.toLowerCase().includes(k.toLowerCase())
  )
);

const schema = [
  serviceSchema({
    name: "Financial Lease cargobike",
    description: metadata.description as string,
    url: `${siteConfig.url}/financial-lease`,
  }),
  breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Financial Lease", url: `${siteConfig.url}/financial-lease` },
  ]),
];

export default function FinancialLeasePage() {
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
        eyebrow="Financial Lease"
        title="Bouw toe naar eigendom, met fiscaal voordeel"
        description="Financial Lease is de slimme keuze voor organisaties die willen investeren in hun eigen wagenpark, tegen een lage eerste investering."
      />

      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Wat is inbegrepen"
            title="Investeren in eigen vermogen, zonder de volledige aanschaflast"
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
                title="Ideaal voor organisaties die willen investeren in eigen bezit"
                description="Financial Lease past bij organisaties met technische kennis in huis, die willen bouwen aan eigen vermogen en fiscaal willen profiteren van de investering in cargobikes."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Volledige eigendom na afloop van de looptijd",
                  "Mogelijkheid tot afschrijving en investeringsaftrek",
                  "Zelf kiezen wie onderhoud uitvoert",
                  "Lagere maandlast dan Operational Lease",
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
                  Financial vs. Operational Lease
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Twijfel je nog tussen de twee leasevormen? Dit is het
                  belangrijkste verschil.
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-green-300">
                      Financial Lease
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Eigendom na afloop, fiscale voordelen, lagere maandlast
                      zonder onderhoud inbegrepen.
                    </p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Operational Lease
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Onderhoud en verzekering inbegrepen, geen eigendom na
                      afloop, maximale ontzorging.
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline-light" className="mt-8 w-full">
                  <Link href="/operational-lease">
                    Bekijk Operational Lease
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Faq items={financialFaqs.length ? financialFaqs : faqs.slice(0, 4)} title="Vragen over Financial Lease" />
      <CtaBanner />
    </>
  );
}
