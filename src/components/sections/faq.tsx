import { faqs as allFaqs } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq({
  items = allFaqs,
  title = "Veelgestelde vragen",
}: {
  items?: readonly { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="section-padding bg-mist-50">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          align="center"
          className="mx-auto"
        />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 rounded-3xl border border-navy-100 bg-white px-6 sm:px-8">
            {items.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
