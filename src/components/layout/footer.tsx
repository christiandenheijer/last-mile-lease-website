import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { navigation, siteConfig, sectors } from "@/lib/site";
import { Logo } from "@/components/shared/logo";
import { LinkedInIcon } from "@/components/shared/social-icons";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Last Mile Lease op LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-green-400 hover:text-green-400"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Navigatie
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-green-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Sectoren
            </h3>
            <ul className="mt-5 space-y-3">
              {sectors.slice(0, 5).map((sector) => (
                <li key={sector.key}>
                  <Link
                    href="/sectoren"
                    className="text-sm text-white/70 transition-colors hover:text-green-400"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-green-400">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-green-400">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </span>
              </li>
            </ul>
            <Button asChild size="sm" className="mt-6">
              <Link href="/contact">
                Vraag offerte aan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Alle rechten
            voorbehouden.
          </p>
          <p>KvK 00000000 · BTW NL000000000B00</p>
        </div>
      </Container>
    </footer>
  );
}
