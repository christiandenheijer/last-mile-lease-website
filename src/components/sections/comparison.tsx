import { Bike, Truck as VanIcon } from "lucide-react";
import { comparisonPoints } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function Comparison() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Waarom een cargobike?"
          title="Cargobike versus bestelwagen"
          description="Een directe vergelijking op de punten die er voor jouw organisatie echt toe doen."
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-4xl border border-navy-100 shadow-card">
            <div className="grid grid-cols-2 bg-navy-950 text-white sm:grid-cols-[1.4fr_1fr_1fr]">
              <div className="hidden items-center px-6 py-5 sm:flex">
                <span className="text-sm font-medium text-white/50">
                  Vergelijking
                </span>
              </div>
              <div className="flex items-center gap-2.5 border-l border-white/10 px-5 py-5 sm:px-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-400 text-navy-950">
                  <Bike className="h-4 w-4" />
                </span>
                <span className="font-display text-sm font-semibold sm:text-base">
                  Cargobike
                </span>
              </div>
              <div className="flex items-center gap-2.5 border-l border-white/10 px-5 py-5 sm:px-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70">
                  <VanIcon className="h-4 w-4" />
                </span>
                <span className="font-display text-sm font-semibold sm:text-base">
                  Bestelwagen
                </span>
              </div>
            </div>
            {comparisonPoints.map((point, i) => (
              <div
                key={point.label}
                className={
                  "grid grid-cols-2 sm:grid-cols-[1.4fr_1fr_1fr] " +
                  (i % 2 === 0 ? "bg-mist-50" : "bg-white")
                }
              >
                <div className="col-span-2 px-6 pt-4 text-sm font-medium text-navy-900 sm:col-span-1 sm:flex sm:items-center sm:py-5 sm:pt-0">
                  {point.label}
                </div>
                <div className="border-l border-navy-100 px-5 py-4 text-sm font-medium text-green-700 sm:px-6 sm:py-5">
                  {point.cargobike}
                </div>
                <div className="border-l border-navy-100 px-5 py-4 text-sm text-navy-500 sm:px-6 sm:py-5">
                  {point.van}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
