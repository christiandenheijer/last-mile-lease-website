"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { leadFormSchema, organizationTypes, type LeadFormValues } from "@/lib/validations";
import { siteConfig } from "@/lib/site";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bikeCountOptions = ["1", "2-5", "6-15", "16-50", "50+"] as const;

export function LeadForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    if (values.website) return;
    setStatus("idle");
    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Verzenden mislukt");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-green-200 bg-green-50 px-8 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="mt-5 font-display text-xl font-semibold text-navy-950">
          Bedankt voor je aanvraag
        </h3>
        <p className="mt-2 max-w-sm text-sm text-navy-700/80">
          We hebben je aanvraag ontvangen en nemen binnen één werkdag contact
          met je op.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Nieuwe aanvraag versturen
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        {...register("website")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Naam *</Label>
          <Input
            id="name"
            autoComplete="name"
            invalid={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="company">Bedrijfsnaam *</Label>
          <Input
            id="company"
            autoComplete="organization"
            invalid={!!errors.company}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
          />
          {errors.company ? (
            <p id="company-error" className="mt-1.5 text-xs text-red-600">
              {errors.company.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">E-mailadres *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            invalid={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email.message}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="phone">Telefoonnummer *</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            invalid={!!errors.phone}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="bikeCount">Aantal gewenste cargobikes *</Label>
          <Controller
            control={control}
            name="bikeCount"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="bikeCount"
                  invalid={!!errors.bikeCount}
                  aria-invalid={!!errors.bikeCount}
                >
                  <SelectValue placeholder="Kies een aantal" />
                </SelectTrigger>
                <SelectContent>
                  {bikeCountOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.bikeCount ? (
            <p className="mt-1.5 text-xs text-red-600">{errors.bikeCount.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="organizationType">Type organisatie *</Label>
          <Controller
            control={control}
            name="organizationType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="organizationType"
                  invalid={!!errors.organizationType}
                  aria-invalid={!!errors.organizationType}
                >
                  <SelectValue placeholder="Kies een type" />
                </SelectTrigger>
                <SelectContent>
                  {organizationTypes.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.organizationType ? (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.organizationType.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Opmerkingen</Label>
        <Textarea
          id="message"
          placeholder="Vertel ons meer over jouw situatie of vraag..."
          invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
        ) : null}
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Er ging iets mis bij het versturen. Probeer het opnieuw of mail
            ons direct op{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Versturen...
          </>
        ) : (
          "Verstuur aanvraag"
        )}
      </Button>
      <p className="text-center text-xs text-navy-500">
        Door dit formulier te versturen ga je akkoord dat we contact met je
        opnemen over jouw aanvraag.
      </p>
    </form>
  );
}
