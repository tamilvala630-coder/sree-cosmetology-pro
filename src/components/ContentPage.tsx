import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, TreatmentGrid } from "@/components/ClinicLayout";
import clinicImage from "@/assets/clinic-interior.jpg";

export function ContentPage({ eyebrow, title, intro, items, children }: { eyebrow: string; title: string; intro: string; items?: ReadonlyArray<{title:string;text:string}>; children?: React.ReactNode }) {
  return <><PageHero eyebrow={eyebrow} title={title} text={intro} image={clinicImage} alt="Premium hair and skin clinic environment"/><section className="py-24"><div className="section-shell">{items && <TreatmentGrid items={items}/>} {children}</div></section><section className="bg-ink py-16"><div className="section-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-gold"><MapPin className="size-4"/>Rajahmundry</p><h2 className="mt-3 text-3xl font-semibold text-primary-foreground">Understand your options with a consultation.</h2></div><Button asChild variant="warm" size="lg"><Link to="/contact">Book consultation<ArrowRight/></Link></Button></div></section></>;
}

export function SimpleLegal({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="py-24"><div className="section-shell max-w-3xl"><SectionHeading eyebrow="Sree Cosmetology" title={title}/><div className="mt-10 space-y-6 text-sm leading-7 text-muted-foreground">{children}</div></div></section>;
}