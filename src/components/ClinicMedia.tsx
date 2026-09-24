import { clinicDoctorPhoto, treatmentResults } from "@/lib/clinic-media";

export function ResultsGrid({ limit }: { limit?: number }) {
  const items = limit ? treatmentResults.slice(0, limit) : treatmentResults;
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <article key={item.caption} className="overflow-hidden rounded-lg border border-border bg-background shadow-soft"><img src={item.src} alt={item.alt} loading="lazy" className="aspect-[4/5] w-full object-cover"/><div className="p-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-primary">{item.type}</p><h3 className="mt-2 text-lg font-semibold text-ink">{item.caption}</h3></div></article>)}</div>;
}

export function DoctorProfile() {
  return <article className="grid overflow-hidden rounded-lg border border-border bg-background shadow-soft sm:grid-cols-[.8fr_1.2fr]"><img src={clinicDoctorPhoto} alt="Doctor at Sree Cosmetology conducting a hair and scalp examination" loading="lazy" className="h-full min-h-80 w-full object-cover"/><div className="flex flex-col justify-center p-7"><p className="text-xs font-bold uppercase tracking-[.16em] text-primary">Clinical team</p><h3 className="mt-3 text-2xl font-semibold text-ink">Clinic Doctor</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Professional hair and skin consultations at Sree Cosmetology. The doctor’s name, qualifications and registration details will be displayed after confirmation.</p></div></article>;
}