export const siteConfig = {
  name: "Last Mile Lease",
  tagline: "Urban mobility",
  description:
    "Last Mile Lease is specialist in zakelijke leaseoplossingen voor professionele elektrische cargobikes. Operational en Financial Lease, inclusief onderhoud, verzekering en service.",
  url: "https://www.lastmilelease.nl",
  phone: "+31 85 90 22 111",
  phoneDisplay: "085 - 90 22 111",
  email: "info@lastmilelease.nl",
  address: {
    street: "Grote Esch 1001",
    postalCode: "2841 MJ",
    city: "Moordrecht",
    country: "NL",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/last-mile-lease",
  },
  formEndpoint:
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ??
    "https://hook.eu1.make.com/tbwclvk2jr16xrhx2c0iqtwt86rszfpd",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Operational Lease", href: "/operational-lease" },
  { label: "Financial Lease", href: "/financial-lease" },
  { label: "Sectoren", href: "/sectoren" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
] as const;

export const brands = [
  {
    name: "Urban Arrow",
    description: "Marktleider in elektrische cargobikes voor zakelijk gebruik.",
  },
  {
    name: "VOK Bikes",
    description: "Robuuste cargobikes, gebouwd voor intensief dagelijks gebruik.",
  },
  {
    name: "Fulpra",
    description: "Innovatieve cargobike-oplossingen voor stedelijke logistiek.",
  },
] as const;

export const usps = [
  {
    title: "Operational én Financial Lease",
    description:
      "Kies de leasevorm die past bij jouw organisatie: volledige ontzorging of eigendom na afloop.",
    icon: "Layers",
  },
  {
    title: "Onderhoud op locatie",
    description:
      "Onze monteurs komen naar jouw bedrijf toe, zodat jouw cargobikes altijd inzetbaar blijven.",
    icon: "Wrench",
  },
  {
    title: "Verzekering inbegrepen",
    description:
      "Volledig verzekerd tegen schade en diefstal, zonder gedoe bij een incident.",
    icon: "ShieldCheck",
  },
  {
    title: "Maatwerk voor iedere organisatie",
    description:
      "Van één cargobike tot een complete vloot: wij stellen een leaseoplossing op maat samen.",
    icon: "SlidersHorizontal",
  },
  {
    title: "Snelle levering",
    description:
      "Korte levertijden zodat je snel emissievrij aan de slag kunt in de binnenstad.",
    icon: "Truck",
  },
  {
    title: "Persoonlijk advies",
    description:
      "Een vast aanspreekpunt dat meedenkt over de beste oplossing voor jouw logistiek.",
    icon: "Users",
  },
] as const;

export const challenges = [
  {
    title: "Zero-emissiezones",
    description:
      "Vanaf 2025 mogen vervuilende bestelwagens steeds meer binnensteden niet meer in. Cargobikes wel.",
    icon: "Ban",
  },
  {
    title: "Beperkte toegankelijkheid",
    description:
      "Binnensteden worden autoluwer ingericht, met minder ruimte en venstertijden voor bestelverkeer.",
    icon: "MapPinOff",
  },
  {
    title: "Hogere operationele kosten",
    description:
      "Brandstof, parkeren, boetes en onderhoud van bestelwagens maken stadslogistiek steeds duurder.",
    icon: "TrendingUp",
  },
  {
    title: "Duurzaam ondernemen",
    description:
      "Klanten, gemeenten en medewerkers verwachten concrete stappen richting emissievrij werken.",
    icon: "Leaf",
  },
  {
    title: "Sneller bezorgen",
    description:
      "In drukke binnensteden is een cargobike vaak sneller van deur tot deur dan een bestelwagen.",
    icon: "Zap",
  },
  {
    title: "Betere bereikbaarheid",
    description:
      "Geen zoektocht naar een parkeerplek: cargobikes komen overal waar jouw klant is.",
    icon: "Navigation",
  },
] as const;

export const leaseSolutions = [
  {
    key: "operational",
    title: "Operational Lease",
    href: "/operational-lease",
    description:
      "Volledig zorgeloos rijden tegen een vast, voorspelbaar maandbedrag.",
    features: [
      "Vast maandbedrag, geen verrassingen",
      "Onderhoud volledig inbegrepen",
      "Verzekering inbegrepen",
      "Maximale ontzorging voor jouw organisatie",
    ],
  },
  {
    key: "financial",
    title: "Financial Lease",
    href: "/financial-lease",
    description:
      "Bouw aan eigendom met fiscaal aantrekkelijke, flexibele voorwaarden.",
    features: [
      "Eigendom van de cargobike na afloop",
      "Flexibele looptijden op maat",
      "Fiscale voordelen voor jouw onderneming",
      "Lage eerste investering",
    ],
  },
] as const;

export const sectors = [
  {
    key: "logistiek",
    title: "Logistiek",
    description:
      "Schaalbare last mile-oplossingen voor logistieke dienstverleners en koeriersbedrijven.",
    icon: "Package",
  },
  {
    key: "gemeenten",
    title: "Gemeenten",
    description:
      "Emissievrij onderhoud en toezicht in de binnenstad, in lijn met duurzaamheidsdoelen.",
    icon: "Landmark",
  },
  {
    key: "horeca",
    title: "Horeca",
    description:
      "Snelle, flexibele bezorging van bestellingen midden in de drukke binnenstad.",
    icon: "UtensilsCrossed",
  },
  {
    key: "installatie",
    title: "Installatie",
    description:
      "Servicemonteurs die met gereedschap en materiaal snel bij de klant zijn.",
    icon: "Wrench",
  },
  {
    key: "service",
    title: "Service",
    description:
      "Facilitaire en technische dienstverleners die efficiënt door de stad bewegen.",
    icon: "Settings2",
  },
  {
    key: "retail",
    title: "Retail",
    description:
      "Lokale bezorging vanuit de winkel, direct bij de klant op de stoep.",
    icon: "ShoppingBag",
  },
  {
    key: "zorg",
    title: "Zorg",
    description:
      "Zorgmedewerkers die stipt en emissievrij bij cliënten in de stad aankomen.",
    icon: "HeartPulse",
  },
  {
    key: "vastgoed",
    title: "Vastgoedbeheer",
    description:
      "Beheerders en onderhoudsteams die meerdere locaties efficiënt bedienen.",
    icon: "Building2",
  },
] as const;

export const comparisonPoints = [
  {
    label: "Toegang tot zero-emissiezones",
    cargobike: "Altijd toegankelijk",
    van: "Vaak geweerd of beperkt",
  },
  {
    label: "Exploitatiekosten per km",
    cargobike: "Aanzienlijk lager",
    van: "Hoog door brandstof en onderhoud",
  },
  {
    label: "Parkeren in de binnenstad",
    cargobike: "Overal, geen zoektijd",
    van: "Beperkt en tijdrovend",
  },
  {
    label: "Snelheid in drukke binnensteden",
    cargobike: "Sneller van deur tot deur",
    van: "Vertraging door verkeer",
  },
  {
    label: "CO₂-uitstoot",
    cargobike: "Nul uitstoot",
    van: "Aanzienlijke uitstoot",
  },
  {
    label: "Onderhoudskosten",
    cargobike: "Laag, eenvoudig te plannen",
    van: "Hoog, complexere techniek",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Adviesgesprek",
    description:
      "We bespreken jouw logistieke uitdagingen en brengen de beste oplossing in kaart.",
  },
  {
    number: "02",
    title: "Kies de juiste cargobike",
    description:
      "Samen kiezen we het model van Urban Arrow, VOK of Fulpra dat bij jouw werk past.",
  },
  {
    number: "03",
    title: "Ontvang leasevoorstel",
    description:
      "Een transparant voorstel op maat, met heldere voorwaarden en vast maandbedrag.",
  },
  {
    number: "04",
    title: "Direct rijden",
    description:
      "Snelle levering en overdracht, zodat je direct emissievrij aan de slag kunt.",
  },
] as const;

export const faqs = [
  {
    question: "Wat is het verschil tussen Operational en Financial Lease?",
    answer:
      "Bij Operational Lease betaal je een vast maandbedrag waarin onderhoud en verzekering zijn inbegrepen, en lever je de cargobike aan het einde van de looptijd weer in. Bij Financial Lease bouw je toe naar eigendom van de cargobike en profiteer je mogelijk van fiscale voordelen, tegen een lager maandbedrag zonder onderhoud en verzekering inbegrepen.",
  },
  {
    question: "Zit onderhoud inbegrepen bij mijn lease?",
    answer:
      "Bij Operational Lease is onderhoud standaard inbegrepen, inclusief onderhoud op locatie zodat jouw cargobikes altijd inzetbaar blijven. Bij Financial Lease kun je onderhoud optioneel toevoegen aan jouw contract.",
  },
  {
    question: "Is verzekering inbegrepen?",
    answer:
      "Ja, bij Operational Lease is een volledige verzekering tegen schade en diefstal inbegrepen. Bij Financial Lease adviseren we je graag over de juiste verzekeringsopties voor jouw situatie.",
  },
  {
    question: "Welke merken cargobikes leveren jullie?",
    answer:
      "Wij leveren professionele elektrische cargobikes van onder andere Urban Arrow, VOK Bikes en Fulpra. Op basis van jouw wensen en toepassing adviseren we welk model het beste past.",
  },
  {
    question: "Kan ik meerdere cargobikes leasen voor mijn organisatie?",
    answer:
      "Zeker. Wij leveren zowel losse cargobikes als complete vloten voor organisaties met meerdere medewerkers of vestigingen, inclusief flotebeheer en persoonlijke begeleiding.",
  },
  {
    question: "Wat zijn de levertijden van een cargobike?",
    answer:
      "Levertijden zijn afhankelijk van het gekozen model en de gewenste uitvoering. In veel gevallen kunnen we binnen enkele weken leveren. Tijdens het adviesgesprek geven we een concrete inschatting voor jouw situatie.",
  },
  {
    question: "Kan ik een cargobike aanpassen aan mijn bedrijfsactiviteiten?",
    answer:
      "Ja, we denken graag mee over belettering, opbouw en accessoires zodat de cargobike optimaal aansluit op jouw dagelijkse werkzaamheden.",
  },
  {
    question: "Wat gebeurt er bij schade of een defect?",
    answer:
      "Bij schade regelen wij de volledige afhandeling en zorgen indien nodig voor vervangend vervoer, zodat jouw organisatie zonder onderbreking door kan werken.",
  },
] as const;
