import { createFileRoute } from "@tanstack/react-router";
import { SimpleLegal } from "@/components/ContentPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | Sree Cosmetology Hair & Skin Clinic" },
      { name: "description", content: "Information on this website is general in nature and does not replace an individual medical consultation." },
      { property: "og:title", content: "Medical Disclaimer | Sree Cosmetology" },
      { property: "og:description", content: "Treatment suitability and results vary from person to person." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <SimpleLegal title="Medical Disclaimer">
      <p>Information on this website is general and for educational purposes only. It is not medical advice and does not replace an individual consultation, examination or diagnosis.</p>
      <p>Treatment suitability and results vary from person to person. A consultation is recommended before choosing any medical or cosmetic treatment.</p>
      <p>No outcome, timeline or degree of improvement is promised or guaranteed anywhere on this website.</p>
      <p>If you have an urgent medical concern, seek immediate care from a qualified medical professional.</p>
    </SimpleLegal>
  ),
});
