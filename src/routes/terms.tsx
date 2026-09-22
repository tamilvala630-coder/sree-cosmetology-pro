import { createFileRoute } from "@tanstack/react-router";
import { SimpleLegal } from "@/components/ContentPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Sree Cosmetology Hair & Skin Clinic" },
      { name: "description", content: "Terms covering the use of the Sree Cosmetology website and consultation enquiry form." },
      { property: "og:title", content: "Terms of Use | Sree Cosmetology" },
      { property: "og:description", content: "Conditions for using this website and submitting a consultation request." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <SimpleLegal title="Terms of Use">
      <p>This website provides general information about hair, skin and cosmetology services offered at Sree Cosmetology Hair &amp; Skin Clinic, Danavaipeta, Rajahmundry.</p>
      <p>Submitting the consultation form is a request for an appointment. It does not confirm an appointment, a treatment plan or suitability for any procedure; the clinic will contact you to discuss next steps.</p>
      <p>Please provide accurate contact details so the team can reach you. Misuse of the form, including automated or abusive submissions, may be blocked.</p>
      <p>Content on this site may be updated at any time as clinic information is verified.</p>
    </SimpleLegal>
  ),
});
