import { usps } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { DynamicIcon } from "@/components/shared/icon-map";

export function Usps() {
  return (
    <section className="section-padding bg-mist-50">
      <Container>
        <SectionHeading
          eyebrow="Waarom Last Mile Lease"
          title="Alles voor emissievrije stadslogistiek, geregeld"
          description="Van advies tot onderhoud: wij ontzorgen jouw organisatie volledig bij de overstap naar elektrische cargobikes."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp, i) => (
            <Reveal key={usp.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lift">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-colors group-hover:bg-green-400 group-hover:text-navy-950">
                  <DynamicIcon name={usp.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {usp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                  {usp.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
