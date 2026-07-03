import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-16 sm:pb-24 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"
      />
      <Container className="relative max-w-3xl text-center">
        <Reveal>
          <Eyebrow className="bg-white/10 text-green-300">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
