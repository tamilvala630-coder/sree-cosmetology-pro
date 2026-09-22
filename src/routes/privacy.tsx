import { createFileRoute } from "@tanstack/react-router";
import { SimpleLegal } from "@/components/ContentPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sree Cosmetology Hair & Skin Clinic" },
      { name: "description", content: "How Sree Cosmetology collects, stores and uses the details submitted through the consultation form." },
      { property: "og:title", content: "Privacy Policy | Sree Cosmetology" },
      { property: "og:description", content: "Our approach to handling enquiry details submitted on this website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <SimpleLegal title="Privacy Policy">
      <p>Details you submit through the consultation form — your name, phone number, concern, preferred appointment time and message — are stored privately and used only to respond to your enquiry and arrange care.</p>
      <p>Enquiry details are not published on this website, are not shared with advertisers, and are not sold to third parties.</p>
      <p>Access is restricted to the clinic team. Records are kept only for as long as needed to respond to and follow up on your enquiry.</p>
      <p>To ask what information is held about you, or to request its removal, contact the clinic using the details on the contact page.</p>
    </SimpleLegal>
  ),
});
