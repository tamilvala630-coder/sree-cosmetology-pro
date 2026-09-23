import { Link } from "@tanstack/react-router";
import { CalendarDays, ChevronRight, HeartPulse, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { clinic, nav, whatsappUrl } from "@/lib/clinic";

export function Brand() {
  return <Link to="/" className="flex items-center gap-3" aria-label="Sree Cosmetology home"><span className="grid size-10 place-items-center rounded-full border border-primary/25 bg-teal-soft text-primary"><Sparkles className="size-5" /></span><span><strong className="block font-display text-[15px] font-semibold leading-tight text-ink">Sree Cosmetology</strong><small className="block text-[10px] font-semibold uppercase tracking-[.16em] text-muted-foreground">Hair & Skin Clinic</small></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);
  return <header className={`sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl transition-all ${scrolled ? "py-2 shadow-soft" : "py-4"}`}><div className="section-shell flex items-center justify-between gap-5"><Brand /><nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">{nav.map(([label,to]) => <Link key={to} to={to} className="text-xs font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{className:"text-primary"}}>{label}</Link>)}</nav><Button asChild variant="premium" className="hidden lg:inline-flex"><Link to="/contact"><CalendarDays />Book consultation</Link></Button><Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</Button></div>{open && <nav className="section-shell grid gap-1 py-4 xl:hidden">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted">{label}</Link>)}</nav>}</header>;
}

export function Footer() {
  const groups = [
    ["Clinic", [["About","/about"],["Reviews","/reviews"],["Gallery","/gallery"],["Contact","/contact"]]],
    ["Hair", [["Hair Loss","/hair"],["Hair Transplant","/hair-transplant"],["FUE","/hair-transplant"],["PRP & GFC","/treatments"]]],
    ["Skin", [["Acne","/skin"],["Acne Scars","/skin"],["Pigmentation","/skin"],["Skin Treatments","/skin"]]],
  ] as const;
  return <footer className="bg-ink pb-24 pt-16 text-primary-foreground md:pb-10"><div className="section-shell"><div className="grid gap-10 md:grid-cols-[1.4fr_2fr]"><div><Brand /><p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/65">Professional hair, skin, cosmetology and hair transplant care in Danavaipeta, Rajahmundry.</p></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{groups.map(([title, links]) => <div key={title}><h3 className="mb-4 text-sm font-semibold text-gold">{title}</h3><div className="grid gap-3">{links.map(([label,to]) => <Link key={label} to={to} className="text-sm text-primary-foreground/65 hover:text-primary-foreground">{label}</Link>)}</div></div>)}<div><h3 className="mb-4 text-sm font-semibold text-gold">Contact</h3><div className="grid gap-3 text-sm text-primary-foreground/65"><a href={`tel:${clinic.phone}`} className="hover:text-primary-foreground">{clinic.phoneDisplay}</a><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">WhatsApp</a><span>{clinic.hours}</span><a href={clinic.googleBusinessUrl} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">Google Profile</a><a href={clinic.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">Instagram</a></div></div></div></div><div className="mt-12 border-t border-primary-foreground/10 pt-6 text-xs leading-6 text-primary-foreground/55">Treatment suitability and results vary from person to person. A consultation is recommended before choosing any medical or cosmetic treatment.<div className="mt-4 flex gap-5"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms</Link><Link to="/disclaimer">Disclaimer</Link></div></div></div></footer>;
}

export function ClinicLayout({ children }: { children: ReactNode }) {
  const phoneHref = `tel:${clinic.phone}`;
  return <><Header /><main>{children}</main><Footer /><a href={whatsappUrl()} className="fixed bottom-7 right-7 z-40 hidden size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 md:flex" aria-label="WhatsApp Sree Cosmetology"><MessageCircle /></a><div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden"><a href={phoneHref} className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold"><Phone className="size-4" />Call</a><a href={whatsappUrl()} className="flex flex-col items-center gap-1 border-x border-border py-1 text-[11px] font-semibold"><MessageCircle className="size-4" />WhatsApp</a><Link to="/contact" className="flex flex-col items-center gap-1 py-1 text-[11px] font-semibold text-primary"><CalendarDays className="size-4" />Book</Link></div></>;
}

export function SectionHeading({ eyebrow, title, text, light=false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <div className="max-w-3xl"><p className={`mb-3 text-xs font-bold uppercase tracking-[.2em] ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</p><h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-ink"}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{text}</p>}</div>;
}

export function PageHero({ eyebrow, title, text, image, alt }: { eyebrow: string; title: string; text: string; image: string; alt: string }) {
  return <section className="overflow-hidden border-b border-border bg-ivory"><div className="section-shell grid min-h-[560px] items-center gap-10 py-16 lg:grid-cols-[1fr_.85fr]"><div className="reveal-up"><p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-primary">{eyebrow}</p><h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] text-ink sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" variant="premium"><Link to="/contact">Book a consultation<ChevronRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/treatments">Explore treatments</Link></Button></div></div><img src={image} alt={alt} width={1600} height={1072} className="aspect-[4/5] w-full rounded-lg object-cover shadow-lift lg:aspect-[5/6]" /></div></section>;
}

export function TreatmentGrid({ items }: { items: ReadonlyArray<{ title: string; text: string }> }) {
  return <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{items.map((item, i) => <article key={item.title} className="group bg-background p-7 transition-colors hover:bg-ivory"><span className="text-xs font-bold text-gold">{String(i+1).padStart(2,"0")}</span><h3 className="mt-8 text-xl font-semibold text-ink">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></span></article>)}</div>;
}

export function EmptyVerified({ type }: { type: "reviews" | "doctors" | "results" }) {
  const copy = { reviews: ["Verified patient reviews", "Approved reviews and the current Google rating will appear here once supplied."], doctors: ["Verified clinical team", "Doctor names, qualifications, experience and professional photographs will appear here once confirmed."], results: ["Genuine treatment journeys", "Clinic-approved before-and-after photographs will appear here with treatment context and consent."] }[type];
  return <div className="rounded-lg border border-dashed border-primary/35 bg-teal-soft/35 px-6 py-12 text-center"><HeartPulse className="mx-auto size-7 text-primary"/><h3 className="mt-4 text-xl font-semibold text-ink">{copy[0]}</h3><p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-muted-foreground">{copy[1]}</p></div>;
}