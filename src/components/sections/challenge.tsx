import Image from "next/image";
import { challenges } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { DynamicIcon } from "@/components/shared/icon-map";

export function Challenge() {
  return (
    <section className="section-padding overflow-hidden bg-navy-950">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="De uitdaging"
              title="Stadslogistiek verandert - snel"
              description="Steeds meer binnensteden sluiten hun deuren voor vervuilende bestelwagens. Organisaties die nu overstappen, houden grip op hun bereikbaarheid én kosten."
              light
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {challenges.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="flex gap-3.5">
                    <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-green-400">
                      <DynamicIcon name={item.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
              <Image
                src="/images/urban-traffic.jpg"
                alt="Drukke binnenstad met verkeer, waar bestelwagens moeite hebben zich te verplaatsen"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
