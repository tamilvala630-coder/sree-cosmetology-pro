import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, CalendarDays, Check, Flower2, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, Syringe, UserRound } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { EmptyVerified, SectionHeading, TreatmentGrid } from "@/components/ClinicLayout";
import { DoctorProfile, ResultsGrid } from "@/components/ClinicMedia";
import { clinic, faqItems, skinTreatments, whatsappUrl } from "@/lib/clinic";
import { hairTransplantOptions } from "@/lib/hair-transplant-options";
import { nonSurgicalHairTreatments } from "@/lib/non-surgical-hair-treatments";
import heroImage from "@/assets/clinic-consultation.jpg";
import skinImage from "@/assets/skin-consultation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hair & Skin Clinic in Rajahmundry | Sree Cosmetology" },
      { name: "description", content: "Personalised hair loss, hair transplant, skin and cosmetology consultations at Sree Cosmetology in Danavaipeta, Rajahmundry." },
      { property: "og:title", content: "Sree Cosmetology Hair & Skin Clinic, Rajahmundry" },
      { property: "og:description", content: "Professional hair, skin and hair transplant care planned around you." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":["MedicalBusiness","LocalBusiness"], name: clinic.name, telephone: clinic.phone, address: { "@type":"PostalAddress", streetAddress:"DNO-46-15-15/2, Opposite Gandhi Park, Beside Jabilli Hospital, Danavaipeta", addressLocality:"Rajahmundry", addressRegion:"Andhra Pradesh", postalCode:"533103", addressCountry:"IN" }, areaServed:"Rajahmundry", sameAs:[clinic.googleBusinessUrl, clinic.instagramUrl], openingHoursSpecification:[{ "@type":"OpeningHoursSpecification", dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens:"10:00", closes:"19:00" }] }) }],
  }),
  component: Index,
});

function Index() {
  const concerns = ["Hair Fall","Hair Thinning","Baldness","Hairline Concerns","Acne & Acne Scars","Pigmentation","Skin Texture","Other Skin Concerns"];
  const concernSlugs = ["excessive-hair-fall","thinning-hair","baldness","receding-hairline","acne-and-acne-scars","pigmentation","skin-texture","other-skin-concerns"];
  const heroTrust = [["Personalised Consultation", UserRound],["Evidence-Based Treatments", ShieldCheck],["Caring & Professional Support", Stethoscope]] as const;
  const heroServices = [
    ["Hair Transplant", "Individual planning for natural-looking restoration", Activity, "/hair-transplant"],
    ["PRP / GFC", "Consultation-led regenerative hair care", Syringe, "/treatments"],
    ["Hair Loss Treatment", "Understand the cause before treatment", Stethoscope, "/hair"],
    ["Skin Treatments", "Care for clearer, healthier-looking skin", UserRound, "/skin"],
    ["Cosmetic Treatments", "Personalised options for your goals", Flower2, "/treatments"],
  ] as const;
  const loss = ["Male Pattern Hair Loss","Female Pattern Hair Loss","Excessive Hair Fall","Thinning Hair","Receding Hairline","Scalp Conditions","Dandruff / Scalp Issues","Alopecia"];
  return (
    <>
      <section className="relative overflow-hidden bg-surface pb-12 lg:pb-20">
        <div className="hero-sweep absolute inset-0 bg-soft-blue" aria-hidden="true" />
        <div className="section-shell relative grid min-h-[620px] items-center lg:grid-cols-[.88fr_1.12fr]">
          <div className="reveal-up relative z-10 py-12 lg:py-16 lg:pr-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.3em] text-royal">Hair • Skin • Cosmetology</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] text-ink sm:text-6xl lg:text-[4.25rem]">
              Expert Care for <span className="text-primary">Healthier Hair</span> and <span className="text-primary">Radiant Skin</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">From hair loss and hair transplantation to advanced skin and cosmetic treatments, we provide personalised care designed around your concerns, goals and condition.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="premium"><Link to="/contact"><CalendarDays />Book a consultation<ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Chat on WhatsApp</a></Button>
            </div>
            <div className="mt-9 grid max-w-2xl gap-4 border-t border-border pt-6 sm:grid-cols-3">
              {heroTrust.map(([label, Icon]) => <div key={label} className="flex min-w-0 items-center gap-3 text-xs font-semibold leading-5 text-ink"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-primary shadow-soft"><Icon className="size-4" /></span><span>{label}</span></div>)}
            </div>
          </div>
          <div className="relative h-full min-h-[460px] self-stretch lg:-mr-[calc((100vw-min(100vw-2rem,76rem))/2)] lg:min-h-[620px]">
            <img src={heroImage} alt="Hair and scalp consultation at a modern medical clinic" width={1600} height={1072} fetchPriority="high" className="relative h-full w-full object-cover object-center" />
            <div className="absolute bottom-6 left-5 max-w-[17rem] rounded-md border border-border bg-background/95 p-4 shadow-lift backdrop-blur sm:left-8 lg:bottom-24 lg:left-5">
              <div className="flex items-center gap-3"><ShieldCheck className="size-7 shrink-0 text-primary"/><div><strong className="block text-sm text-ink">Professional, considered care</strong><span className="text-xs text-muted-foreground">Ratings shown after verification</span></div></div>
            </div>
          </div>
        </div>
        <div className="section-shell relative z-20 -mt-1 lg:-mt-14">
          <div className="grid overflow-hidden rounded-lg border border-border bg-background shadow-lift sm:grid-cols-2 lg:grid-cols-[repeat(5,minmax(0,1fr))_.85fr]">
            {heroServices.map(([title,text,Icon,to])=><Link key={title} to={to} className="group min-h-44 border-b border-border p-5 transition-colors hover:bg-soft-blue sm:odd:border-r lg:border-b-0 lg:border-r"><Icon className="size-8 text-primary"/><h2 className="mt-5 text-base font-semibold text-ink">{title}</h2><p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p><ArrowRight className="mt-3 size-4 text-primary transition-transform group-hover:translate-x-1"/></Link>)}
            <div className="hidden flex-col justify-center p-6 lg:flex"><p className="font-display text-xl leading-7 text-ink">Trusted care.<br/>Real confidence.</p><span className="mt-5 h-px w-8 bg-primary"/><p className="mt-5 text-[10px] font-bold uppercase leading-5 tracking-[.2em] text-muted-foreground">Sree Cosmetology<br/>Hair and Skin Clinic</p></div>
          </div>
        </div>
      </section>
      <section className="py-24"><div className="section-shell"><SectionHeading eyebrow="Start with the concern" title="Your Hair or Skin Concern Deserves More Than a Guess" text="Hair loss, thinning, acne, pigmentation, scars and other cosmetic concerns can have different causes. A thoughtful assessment helps guide the next step."/><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{concerns.map((x,i)=><Link key={x} to={i<4?"/hair/$slug":"/skin/$slug"} params={{slug:concernSlugs[i] ?? ""}} className="group rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-soft"><Sparkles className="size-5 text-primary"/><h3 className="mt-8 text-lg font-semibold text-ink">{x}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Understand possible causes and explore consultation-led care.</p><span className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary">Explore treatment <ArrowRight className="size-4 group-hover:translate-x-1"/></span></Link>)}</div></div></section>
      <section className="bg-ink py-24"><div className="section-shell"><SectionHeading light eyebrow="Hair restoration" title="Hair Transplantation Planned Around Your Hair" text="Hair transplantation is not simply about adding grafts. Donor area, hair loss pattern, hairline design and long-term expectations all matter before deciding on a procedure."/><div className="mt-12"><TreatmentGrid items={hairTransplantOptions} defaultTo="/hair-transplant"/></div><Button asChild variant="warm" size="lg" className="mt-8"><Link to="/contact">Discuss your hair loss<ArrowRight/></Link></Button></div></section>
      <section className="py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="Understand the cause" title="Hair Loss Has a Cause. Find It First." text="Hair fall can be influenced by pattern loss, scalp health, health history and other factors. Assessment comes before treatment selection."/><Button asChild variant="premium" size="lg" className="mt-8"><Link to="/contact">Book hair loss consultation</Link></Button></div><div className="grid gap-3 sm:grid-cols-2">{loss.map(x=><div key={x} className="flex items-center gap-3 border-b border-border py-4 text-sm font-semibold text-ink"><Check className="size-4 text-primary"/>{x}</div>)}</div></div></section>
      <section className="bg-surface py-24"><div className="section-shell"><SectionHeading eyebrow="Non-surgical hair care" title="Not Every Hair Concern Needs Surgery" text="Treatment should depend on your condition and medical assessment. Options may include PRP, GFC, scalp assessment, medical management or scalp-focused care."/><div className="mt-10"><TreatmentGrid items={nonSurgicalHairTreatments} defaultTo="/treatments"/></div><p className="mt-6 text-sm italic text-muted-foreground">Treatment suitability varies from person to person. Consultation is recommended before choosing a treatment.</p></div></section>
      <section className="py-24"><div className="section-shell"><div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]"><SectionHeading eyebrow="Skin treatments" title="Healthy-Looking Skin Starts With the Right Approach" text="A considered plan begins with understanding your skin, your history and the concern you want to address."/><img src={skinImage} alt="Personalised skin consultation in a professional clinic" width={1600} height={1072} loading="lazy" className="aspect-[16/9] w-full rounded-lg object-cover shadow-soft"/></div><div className="mt-12"><TreatmentGrid items={skinTreatments} defaultTo="/skin"/></div></div></section>
      <section className="bg-ink py-24"><div className="section-shell"><SectionHeading light eyebrow="Why Sree Cosmetology" title="Why Patients Choose Sree Cosmetology"/><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-primary-foreground/10 bg-primary-foreground/10 md:grid-cols-5">{[["Personalised Care","Plans based on individual concerns and goals."],["Professional Approach","Consultation and careful treatment planning."],["Hygiene & Safety","A clean, organised clinical environment."],["Clear Communication","Procedures, expectations and aftercare explained."],["Hair & Skin Expertise","One destination for hair and skin concerns."]].map(([a,b])=><div className="bg-ink p-6" key={a}><Stethoscope className="size-5 text-soft-blue"/><h3 className="mt-7 text-lg font-semibold text-primary-foreground">{a}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/65">{b}</p></div>)}</div></div></section>
      <section className="py-24"><div className="section-shell"><SectionHeading eyebrow="Before & after" title="Real Treatment Journeys" text="Clinic-supplied hair transplant and skin care journeys showing individual treatment progress."/><div className="mt-10"><ResultsGrid limit={3}/></div><div className="mt-7 flex flex-wrap items-center gap-5"><Button asChild variant="outline"><Link to="/before-after">View all treatment journeys<ArrowRight/></Link></Button><p className="text-xs text-muted-foreground">Individual results vary and similar outcomes cannot be guaranteed.</p></div></div></section>
      <section className="bg-surface py-24"><div className="section-shell"><SectionHeading eyebrow="Our clinical team" title="Meet the Team" text="Professional, consultation-led care for your hair and skin concerns."/><div className="mt-10"><DoctorProfile/></div><Button asChild variant="outline" className="mt-6"><Link to="/about">About the clinic</Link></Button></div></section>
      <section className="py-24"><div className="section-shell"><SectionHeading eyebrow="Patient voice" title="What Our Patients Say" text="We publish only genuine, approved patient feedback. You can read patient reviews on our Google Business Profile."/><div className="mt-10"><EmptyVerified type="reviews"/></div><Button asChild variant="outline" className="mt-6"><a href={clinic.googleBusinessUrl} target="_blank" rel="noreferrer">View reviews on Google<ArrowRight/></a></Button></div></section>
      <section className="bg-soft-blue py-24"><div className="section-shell"><SectionHeading eyebrow="A clear path" title="How It Works"/><div className="mt-12 grid gap-8 md:grid-cols-4">{[["Book Consultation","Choose a convenient appointment time."],["Discuss Your Concern","Share your hair or skin concerns with the clinical team."],["Assessment & Planning","Understand available options for your condition."],["Begin Your Treatment","Proceed after understanding the process and expectations."]].map(([a,b],i)=><article key={a}><span className="text-4xl font-semibold text-primary/30">0{i+1}</span><h3 className="mt-5 text-lg font-semibold text-ink">{a}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{b}</p></article>)}</div></div></section>
      <section className="py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><SectionHeading eyebrow="Frequently asked" title="Clear Answers Before You Decide" text="General information to help you prepare for a consultation."/><Accordion type="single" collapsible className="border-t border-border">{faqItems.slice(0,6).map(([q,a],i)=><AccordionItem key={q} value={`q-${i}`}><AccordionTrigger className="py-5 text-base">{q}</AccordionTrigger><AccordionContent className="pr-8 leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
      <section className="bg-surface py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="Visit the clinic" title="Sree Cosmetology in Rajahmundry" text={clinic.address}/><div className="mt-8 grid gap-3 text-sm"><p><strong>Landmark:</strong> Opposite Gandhi Park, beside Jabilli Hospital</p><p><strong>Phone / WhatsApp:</strong> <a className="font-semibold text-primary" href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a></p><p><strong>Hours:</strong> {clinic.hours}</p></div><Button asChild variant="outline" className="mt-6"><a href={clinic.googleBusinessUrl} target="_blank" rel="noreferrer"><MapPin/>Get directions</a></Button></div><iframe title="Map showing Sree Cosmetology in Danavaipeta, Rajahmundry" loading="lazy" className="min-h-96 w-full rounded-lg border border-border" src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`} /></div></section>
      <section className="py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionHeading eyebrow="Book a consultation" title="Ready to Talk About Your Hair or Skin Concern?" text="Start with a consultation. Understand your options before deciding on treatment."/><div className="mt-8 flex gap-3"><Button asChild variant="outline"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp</a></Button><Button asChild variant="outline"><a href={`tel:${clinic.phone}`}><Phone/>Call clinic</a></Button></div></div><BookingForm/></div></section>
    </>
  );
}
