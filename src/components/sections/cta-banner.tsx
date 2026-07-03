import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function CtaBanner({
  title = "Klaar voor emissievrije stadslogistiek?",
  description = "Ontdek welke leaseoplossing het beste past bij jouw organisatie.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/night-delivery.jpg"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70" />
      </div>
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/70">{description}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Vraag offerte aan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <Link href="/contact">
                <CalendarCheck2 className="h-4 w-4" />
                Plan adviesgesprek
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
