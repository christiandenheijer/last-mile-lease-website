import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { leaseSolutions } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function LeaseSolutions() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Onze leaseoplossingen"
          title="Twee heldere manieren om te leasen"
          description="Welke vorm het beste past, hangt af van jouw organisatie. We adviseren je graag persoonlijk."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {leaseSolutions.map((solution, i) => (
            <Reveal key={solution.key} delay={i * 0.1}>
              <div
                className={
                  solution.key === "operational"
                    ? "relative flex h-full flex-col rounded-4xl bg-navy-950 p-10 text-white shadow-lift"
                    : "relative flex h-full flex-col rounded-4xl border border-navy-100 bg-mist-50 p-10 shadow-card"
                }
              >
                {solution.key === "operational" ? (
                  <span className="absolute right-8 top-8 rounded-full bg-green-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950">
                    Meest gekozen
                  </span>
                ) : null}
                <h3
                  className={
                    solution.key === "operational"
                      ? "font-display text-2xl font-semibold text-white"
                      : "font-display text-2xl font-semibold text-navy-950"
                  }
                >
                  {solution.title}
                </h3>
                <p
                  className={
                    solution.key === "operational"
                      ? "mt-3 text-white/70"
                      : "mt-3 text-navy-700/80"
                  }
                >
                  {solution.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={
                          solution.key === "operational"
                            ? "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-navy-950"
                            : "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white"
                        }
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span
                        className={
                          solution.key === "operational"
                            ? "text-sm text-white/85"
                            : "text-sm text-navy-800"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={solution.key === "operational" ? "primary" : "secondary"}
                  className="mt-10 w-full sm:w-fit"
                >
                  <Link href={solution.href}>
                    Meer over {solution.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
