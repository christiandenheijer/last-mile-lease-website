"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { navigation } from "@/lib/site";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/85 shadow-soft backdrop-blur-md"
          : "bg-white/0"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo priority />
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950",
                pathname === item.href && "bg-navy-50 text-navy-950"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Adviesgesprek</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">
              Vraag offerte aan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
