import { steps } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function HowItWorks() {
  return (
    <section className="section-padding bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="Zo werkt het"
          title="Van kennismaking tot rijden, in vier stappen"
          light
          align="center"
          className="mx-auto"
        />
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block"
          />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-400 font-display text-sm font-bold text-navy-950">
                    {step.number}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
