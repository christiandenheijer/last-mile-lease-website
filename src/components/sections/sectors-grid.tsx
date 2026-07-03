import { sectors } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { DynamicIcon } from "@/components/shared/icon-map";
import { cn } from "@/lib/utils";

export function SectorsGrid({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <section className={cn("section-padding bg-mist-50", className)}>
      <Container>
        {!compact ? (
          <SectionHeading
            eyebrow="Sectoren"
            title="Voor iedere organisatie in de stad"
            description="Van koeriersbedrijf tot gemeente: onze cargobikes sluiten aan op uiteenlopende dagelijkse werkzaamheden."
            align="center"
            className="mx-auto"
          />
        ) : null}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => (
            <Reveal key={sector.key} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-green-300">
                  <DynamicIcon name={sector.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-navy-950">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                  {sector.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
