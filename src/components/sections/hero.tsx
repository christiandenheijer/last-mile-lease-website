import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-navy-700/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
      />
      <Container className="relative grid gap-12 pb-20 pt-16 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pb-28 lg:pt-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Specialist in cargobike lease
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.4rem]">
              Slimme leaseoplossingen voor emissievrije stadslogistiek
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Lease professionele elektrische cargobikes inclusief onderhoud,
              verzekering en service. Geschikt voor iedere organisatie die
              efficiënt wil blijven werken binnen zero-emissiezones.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Vraag offerte aan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link href="/contact">
                  <CalendarCheck2 className="h-4 w-4" />
                  Plan vrijblijvend adviesgesprek
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-2xl font-semibold text-white">100%</dt>
                <dd className="mt-1 text-sm text-white/50">Emissievrij</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-white">3</dt>
                <dd className="mt-1 text-sm text-white/50">A-merken</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-white">1</dt>
                <dd className="mt-1 text-sm text-white/50">Vast aanspreekpunt</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl shadow-lift sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src="/images/hero-cargo-bike-city.jpg"
              alt="Professionele elektrische cargobike met bezorger in een Europese binnenstad"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-lift sm:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              Toegang
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-navy-950">
              Alle zero-emissiezones
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
