import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-white">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-green-700">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
          Deze pagina bestaat niet (meer)
        </h1>
        <p className="mx-auto mt-4 max-w-md text-navy-700/80">
          Mogelijk is de pagina verplaatst. Ga terug naar de homepage of vraag
          direct een offerte aan.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              Naar de homepage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Vraag offerte aan</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
