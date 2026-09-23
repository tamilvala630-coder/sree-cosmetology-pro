import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyVerified, PageHero } from "@/components/ClinicLayout";
import { clinic } from "@/lib/clinic";
import clinicImage from "@/assets/clinic-consultation.jpg";
export const Route=createFileRoute("/reviews")({head:()=>({meta:[{title:"Patient Reviews | Sree Cosmetology Rajahmundry"},{name:"description",content:"Read patient feedback for Sree Cosmetology Hair & Skin Clinic in Rajahmundry on our Google Business Profile."},{property:"og:title",content:"Patient Reviews | Sree Cosmetology"},{property:"og:description",content:"Authentic patient experiences, published only after verification."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/reviews"}]}),component:Page});
function Page(){return <><PageHero eyebrow="Patient reviews" title="What Our Patients Say" text="Authentic feedback helps visitors understand the care experience. We publish only verified reviews, and you can read them directly on Google." image={clinicImage} alt="A professional hair consultation"/><section className="py-24"><div className="section-shell"><EmptyVerified type="reviews"/><Button asChild variant="premium" className="mt-8"><a href={clinic.googleBusinessUrl} target="_blank" rel="noreferrer">View more reviews on Google<ArrowRight/></a></Button></div></section></>}
