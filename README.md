# Last Mile Lease — website

Premium, SEO-geoptimaliseerde marketingwebsite voor **Last Mile Lease**, specialist in zakelijke leaseoplossingen voor professionele elektrische cargobikes (Urban Arrow, VOK Bikes). De site is gebouwd voor leadgeneratie: offerteaanvragen en adviesgesprekken.

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

Het contactformulier (`/contact`) post de aanvraag als JSON naar een webhook, zodat er geen eigen backend nodig is.

Standaard staat er een **Make.com (Integromat) custom webhook** geconfigureerd (scenario "Last Mile Lease - Contactformulier", map "Leadgeneratie"). Verwerking (bijv. doorzetten naar e-mail, CRM of Slack) bouw je verder uit in dat scenario in Make.

Wil je een ander endpoint gebruiken (eigen Make-scenario, Zapier, n8n, of een eigen backend)?

1. Zet de endpoint-URL in `.env.local`:

   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://hook.eu1.make.com/jouw-webhook-id
   ```

2. Herstart de dev server. Zonder deze variabele valt de site terug op de standaard-webhook hierboven.

Het endpoint ontvangt een POST-request met `Content-Type: application/json` en de velden `name`, `company`, `email`, `phone`, `bikeCount`, `organizationType`, `message`. Het formulier bevat client- en schema-validatie (React Hook Form + Zod) en een verborgen honeypot-veld (`website`) tegen spam — bots die dit veld invullen worden clientside al geblokkeerd, dus het veld hoeft niet apart afgehandeld te worden in het webhook-scenario.

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
- De fotografie in `public/images/` is eigen productfotografie (Urban Arrow en VOK Bikes cargobikes in het echt in gebruik).
- Partnerlogo's staan in `public/brand/partners/` (`urban-arrow.png`, `vok-bikes.svg`), gebruikt in de "vertrouwde merken"-sectie op de homepage.

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

### Plesk (VPS met Node.js-extensie)

Een `git pull` via Plesk's Git-integratie haalt alleen de broncode binnen — het bouwt en start de app niet. Volg deze stappen om de site als Node.js-app te draaien:

1. **Websites & Domains → jouw domein → Node.js** → zet Node.js op **aan**.
   - **Node.js-versie**: 20 LTS (of hoger).
   - **Document root**: de map waar de repository naartoe gepubliceerd is (bijv. `httpdocs`).
   - **Application root**: zelfde map als document root, tenzij je in een submap publiceert.
   - **Application startup file**: `server.js` (zit in de repository — dit is een minimale custom server die `next()` in productiemodus start en luistert op de poort die Plesk/Passenger via `process.env.PORT` doorgeeft).
2. Zet onder **Environment variables**: `NEXT_PUBLIC_FORM_ENDPOINT` (en eventueel `NODE_ENV=production`).
3. Klik op **NPM install**.
4. Bouw de productieversie. Plesk heeft hiervoor meestal een **"Run script"**-knop (kies `build`); heeft jouw Plesk-versie die niet, log dan in via SSH en run:
   ```bash
   cd ~/httpdocs   # of jouw document root
   npm run build
   ```
   Dit genereert de `.next`-map die `server.js` nodig heeft (deze map wordt bewust niet meegecommit naar Git).
5. Klik op **Restart App**.

**Bij elke nieuwe `git pull`** moet je stap 3–5 herhalen, anders draait de site nog op de oude build. Wil je dit automatiseren: open de **Git**-instellingen van het domein in Plesk en zet onder **"Additional deploy actions"** een script dat na elke pull `npm install && npm run build` uitvoert, gevolgd door een app-restart (bijv. via `touch tmp/restart.txt` als jouw Passenger-versie dat ondersteunt, of de Plesk CLI).

Zie je na het volgen van deze stappen nog steeds de standaard Linux-testpagina, controleer dan of het domein daadwerkelijk op "Node.js-app" staat ingesteld (en niet op "Static/PHP-website") en of de Application startup file exact `server.js` is.

## Licentie

De broncode van dit project is beschikbaar onder de [MIT-licentie](LICENSE). Aangeleverde huisstijl-assets (logo) en fotografie vallen buiten deze licentie en blijven eigendom van de respectievelijke rechthebbenden.
