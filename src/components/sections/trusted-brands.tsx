import { brands } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/reveal";

export function TrustedBrands() {
  return (
    <section className="border-b border-navy-100 bg-white py-14">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium text-navy-500">
            Wij leveren uitsluitend professionele cargobikes van bewezen
            kwaliteit
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-navy-100 bg-mist-50 px-6 py-8 text-center transition-colors hover:border-green-300 hover:bg-green-50/40">
                <span className="font-display text-2xl font-semibold text-navy-800">
                  {brand.name}
                </span>
                <p className="mt-2 text-sm text-navy-600/80">
                  {brand.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
