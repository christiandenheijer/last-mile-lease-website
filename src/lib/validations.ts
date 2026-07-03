import { z } from "zod";

export const organizationTypes = [
  "Koeriersbedrijf / bezorgdienst",
  "Gemeente",
  "Installatiebedrijf",
  "Servicebedrijf",
  "Facilitair bedrijf",
  "Horeca",
  "Zorginstelling",
  "Retail",
  "Logistiek bedrijf",
  "Vastgoedbeheer",
  "Anders",
] as const;

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Vul je volledige naam in.")
    .max(80, "Naam is te lang."),
  company: z
    .string()
    .trim()
    .min(2, "Vul je bedrijfsnaam in.")
    .max(100, "Bedrijfsnaam is te lang."),
  email: z
    .string()
    .trim()
    .min(1, "Vul je e-mailadres in.")
    .email("Vul een geldig e-mailadres in."),
  phone: z
    .string()
    .trim()
    .min(8, "Vul een geldig telefoonnummer in.")
    .max(20, "Telefoonnummer is te lang.")
    .regex(/^[0-9+()\s-]+$/, "Vul een geldig telefoonnummer in."),
  bikeCount: z.enum(["1", "2-5", "6-15", "16-50", "50+"], {
    message: "Kies het gewenste aantal cargobikes.",
  }),
  organizationType: z.enum(organizationTypes, {
    message: "Kies het type organisatie.",
  }),
  message: z.string().trim().max(1000, "Bericht is te lang.").optional(),
  website: z.string().max(0, "Ongeldige inzending.").optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
