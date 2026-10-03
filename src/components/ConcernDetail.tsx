import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { whatsappUrl } from "@/lib/clinic";
import type { Concern } from "@/lib/hair-conditions";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-background p-7 shadow-soft">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((i) => <li key={i} className="flex gap-3 text-sm leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{i}</li>)}
      </ul>
    </div>
  );
}

export function ConcernDetail({ c, kind, related }: { c: Concern; kind: "hair" | "skin"; related: Concern[] }) {
  const section = kind === "hair" ? "Hair" : "Skin";
  const back = kind === "hair" ? "/hair" : "/skin";
  return (
    <>
      <section className="overflow-hidden border-b border-border bg-surface">
        <div className="section-shell grid items-center gap-10 py-14 lg:grid-cols-[1fr_.85fr] lg:py-16">
          <div className="reveal-up">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs font-semibold text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="size-3" />
              <Link to={back} className="hover:text-primary">{section}</Link><ChevronRight className="size-3" />
              <span aria-current="page" className="text-ink">{c.title}</span>
            </nav>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.2em] text-royal">{section} concern</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">{c.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="premium"><Link to="/contact">Book a consultation<ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp us</a></Button>
            </div>
          </div>
          <figure>
            <img src={c.image} alt={c.imageAlt} width={1024} height={1280} fetchPriority="high" className="aspect-[4/5] w-full rounded-lg object-cover shadow-lift lg:aspect-[5/6]" />
            <figcaption className="mt-3 text-xs text-muted-foreground">Illustrative image only — not a patient result.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-ink">Understanding the condition</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{c.understanding}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <List title="Common signs" items={c.signs} />
            <List title="Possible causes" items={c.causes} />
            <List title="How the clinic assesses the concern" items={c.assessment} />
            <List title="Suitable treatment options" items={c.options} />
          </div>
          <p className="text-sm italic text-muted-foreground">This page is general information, not a diagnosis. Treatment suitability and results vary from person to person; a consultation is recommended before choosing any treatment.</p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="section-shell max-w-3xl">
          <h2 className="text-3xl font-semibold text-ink">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-6">
            {c.faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-7 text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <h2 className="text-3xl font-semibold text-ink">Related {section.toLowerCase()} concerns</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => {
              const inner = <><span className="font-semibold text-ink">{r.title}</span><span className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">Learn more<ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span></>;
              const cls = "group rounded-lg border border-border bg-background p-5 transition-colors hover:bg-soft-blue";
              return kind === "hair"
                ? <Link key={r.slug} to="/hair/$slug" params={{ slug: r.slug }} className={cls}>{inner}</Link>
                : <Link key={r.slug} to="/skin/$slug" params={{ slug: r.slug }} className={cls}>{inner}</Link>;
            })}
          </div>
          <Link to={back} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="size-4" />Back to {section}</Link>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="section-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-3xl font-semibold text-primary-foreground">Talk to us about {c.title.toLowerCase()}.</h2>
          <Button asChild variant="warm" size="lg"><Link to="/contact">Book consultation<ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
}
