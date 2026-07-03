"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-800 hover:bg-navy-50 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-lift focus:outline-none">
          <div className="flex items-center justify-between">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Sluit menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-800 hover:bg-navy-50"
              >
                <X className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Navigatiemenu</Dialog.Title>
          <nav className="mt-10 flex flex-1 flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 font-display text-lg font-medium text-navy-900 transition-colors hover:bg-navy-50",
                  pathname === item.href && "bg-green-50 text-green-800"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-3 pt-8">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact">
                Vraag offerte aan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
