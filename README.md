# Last Mile Lease — website

Premium, SEO-geoptimaliseerde marketingwebsite voor **Last Mile Lease**, specialist in zakelijke leaseoplossingen voor professionele elektrische cargobikes (Urban Arrow, VOK Bikes, Fulpra). De site is gebouwd voor leadgeneratie: offerteaanvragen en adviesgesprekken.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router, TypeScript, strict mode)
- [Tailwind CSS](https://tailwindcss.com) met een custom design system (huisstijlkleuren, `Fredoka` + `Inter`)
- [Radix UI](https://www.radix-ui.com) primitives (Accordion, Select, Dialog, Label) als basis voor de UI-componenten
- [Framer Motion](https://www.framer.com/motion/) voor subtiele scroll-animaties
- [Lucide](https://lucide.dev) icons
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) voor formuliervalidatie
- ESLint + TypeScript strict mode

## Projectstructuur

```
src/
  app/                  # App Router pagina's (elke map = een route)
    operational-lease/
    financial-lease/
    sectoren/
    over-ons/
    contact/
    sitemap.ts          # dynamische sitemap.xml
    robots.ts           # robots.txt
    layout.tsx          # root layout: fonts, header, footer, metadata
  components/
    ui/                 # generieke UI-primitives (Button, Card, Select, Accordion, ...)
    layout/             # Header, Footer, MobileMenu
    sections/           # pagina-secties (Hero, Usps, Faq, CtaBanner, ...)
    shared/              # Logo, Reveal (animatie-wrapper), icon-map
  lib/
    site.ts             # centrale content: navigatie, USP's, sectoren, FAQ, site-config
    structured-data.ts  # JSON-LD (Organization, Service, FAQPage, Breadcrumb)
    validations.ts      # Zod-schema voor het leadformulier
    utils.ts            # cn() class-merge helper
public/
  brand/                # logo-assets (light/dark varianten)
  images/               # fotografie
```

## Aan de slag

Vereist: Node.js 18.18+ (20 LTS aanbevolen) en npm.

```bash
npm install
cp .env.example .env.local   # vul je formulier-endpoint in
npm run dev
```

De site draait vervolgens op [http://localhost:3000](http://localhost:3000).

### Beschikbare scripts

| Commando        | Beschrijving                                  |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Start de development server                    |
| `npm run build` | Maakt een production build (`next build`)      |
| `npm run start` | Start de production build lokaal               |
| `npm run lint`  | Voert ESLint uit                               |

## Leadformulier configureren

Het contactformulier (`/contact`) post naar een extern formulier-endpoint, zodat de site volledig statisch te hosten blijft zonder eigen backend.

1. Maak een gratis formulier aan bij [Formspree](https://formspree.io) of [Web3Forms](https://web3forms.com).
2. Zet de endpoint-URL in `.env.local`:

   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/jouw-form-id
   ```

3. Herstart de dev server. Zonder deze variabele valt de site terug op een placeholder-URL en zal versturen mislukken.

Het formulier bevat client- en schema-validatie (React Hook Form + Zod) en een verborgen honeypot-veld tegen spam.

## Content aanpassen

Vrijwel alle copy (navigatie, USP's, sectoren, leaseoplossingen, FAQ, vergelijkingstabel) staat gecentraliseerd in [`src/lib/site.ts`](src/lib/site.ts). Pas je hier de tekst, sectoren of FAQ's aan, dan werkt dit automatisch door op alle pagina's die deze content hergebruiken.

Bedrijfsgegevens (telefoon, e-mail, adres, KvK/BTW) staan in hetzelfde bestand (`siteConfig`) en in de footer (`src/components/layout/footer.tsx`).

## SEO

- Metadata (title/description), Open Graph- en Twitter-tags per pagina via de Next.js Metadata API
- Canonical URL's op elke pagina
- Structured data (JSON-LD): `Organization`, `Service` (lease-pagina's), `FAQPage`, `BreadcrumbList`
- Dynamische `sitemap.xml` (`src/app/sitemap.ts`) en `robots.txt` (`src/app/robots.ts`)
- Semantische heading-structuur (H1 → H3) en toegankelijke landmark-regio's

Pas `siteConfig.url` in `src/lib/site.ts` aan naar het definitieve domein voordat je live gaat — dit domein wordt gebruikt in alle canonical URL's, structured data en de sitemap.

## Fotografie & assets

- Het logo (`public/brand/logo-dark.png` en `logo-light.png`) is afgeleid van de aangeleverde huisstijl.
- De fotografie in `public/images/` bestaat uit royalty-free stockfoto's (Unsplash License, vrij voor commercieel gebruik). Vervang deze door eigen productfotografie van de cargobikes zodra beschikbaar voor het beste resultaat.

## Deployment

De site is een standaard Next.js-app en kan op elk platform draaien dat Next.js ondersteunt (bijvoorbeeld [Vercel](https://vercel.com), Netlify, of een eigen Node-server).

### Vercel (aanbevolen)

1. Importeer deze repository op [vercel.com/new](https://vercel.com/new).
2. Zet de environment variable `NEXT_PUBLIC_FORM_ENDPOINT` in de Vercel projectinstellingen.
3. Deploy. Vercel detecteert Next.js automatisch.

### Handmatig

```bash
npm run build
npm run start
```

## Licentie

De broncode van dit project is beschikbaar onder de [MIT-licentie](LICENSE). Aangeleverde huisstijl-assets (logo) en fotografie vallen buiten deze licentie en blijven eigendom van de respectievelijke rechthebbenden.
