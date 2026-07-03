import Image from "next/image";
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
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-mist-50 px-6 py-8 text-center transition-colors hover:border-green-300 hover:bg-green-50/40">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.logoWidth}
                  height={brand.logoHeight}
                  className="h-8 w-auto object-contain"
                />
                <span className="font-display text-lg font-semibold text-navy-800">
                  {brand.name}
                </span>
                <p className="text-sm text-navy-600/80">{brand.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
