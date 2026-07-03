import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { LeadForm } from "@/components/sections/lead-form";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact & offerte aanvragen",
  description:
    "Vraag een offerte aan of plan een vrijblijvend adviesgesprek over de lease van elektrische cargobikes. We reageren binnen één werkdag.",
  alternates: { canonical: "/contact" },
};

const schema = breadcrumbSchema([
  { name: "Home", url: siteConfig.url },
  { name: "Contact", url: `${siteConfig.url}/contact` },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-16 sm:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
        />
        <Container className="relative max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="bg-white/10 text-green-300">Contact</Eyebrow>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Vraag een offerte aan of plan een adviesgesprek
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Vul het formulier in en ons team neemt binnen één werkdag
              persoonlijk contact met je op.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="rounded-4xl border border-navy-100 bg-mist-50 p-8 lg:sticky lg:top-28">
                <h2 className="font-display text-xl font-semibold text-navy-950">
                  Direct contact
                </h2>
                <p className="mt-2 text-sm text-navy-700/80">
                  Liever meteen bellen of mailen? Dat kan natuurlijk ook.
                </p>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
                        Telefoon
                      </p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="font-medium text-navy-950 hover:text-green-700"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
                        E-mail
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-medium text-navy-950 hover:text-green-700"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
                        Adres
                      </p>
                      <p className="font-medium text-navy-950">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.postalCode} {siteConfig.address.city}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-navy-500">
                        Reactietijd
                      </p>
                      <p className="font-medium text-navy-950">
                        Binnen 1 werkdag
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-4xl border border-navy-100 bg-white p-8 shadow-card sm:p-10">
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
