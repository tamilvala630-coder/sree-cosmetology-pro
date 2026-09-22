import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/ClinicLayout";
import { clinic, whatsappUrl } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Sree Cosmetology, Rajahmundry" },
      { name: "description", content: "Request a hair, skin or hair transplant consultation at Sree Cosmetology in Danavaipeta, Rajahmundry." },
      { property: "og:title", content: "Book a Consultation | Sree Cosmetology" },
      { property: "og:description", content: "Share your concern and our team will contact you to arrange a consultation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Book a Consultation" text="Share a few details about your hair or skin concern and our team will get back to you." />
          <div className="mt-8 grid gap-3 text-sm">
            <p><strong>Address:</strong> {clinic.address}</p>
            <p><strong>Landmark:</strong> Opposite Gandhi Park, beside Jabilli Hospital</p>
            <p><strong>Phone:</strong> {clinic.phone || "Awaiting verification"}</p>
            <p><strong>Hours:</strong> {clinic.hours}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline"><a href={whatsappUrl()}><MessageCircle />WhatsApp</a></Button>
            <Button asChild variant="outline"><a href={clinic.phone ? `tel:${clinic.phone}` : "#contact-pending"}><Phone />Call clinic</a></Button>
          </div>
          <iframe title="Map showing Sree Cosmetology in Danavaipeta, Rajahmundry" loading="lazy" className="mt-8 min-h-72 w-full rounded-lg border border-border" src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`} />
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
