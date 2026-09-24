import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/ClinicLayout";
import { clinicGallery } from "@/lib/clinic-media";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Clinic Gallery | Sree Cosmetology Rajahmundry" },
      { name: "description", content: "A look inside Sree Cosmetology Hair & Skin Clinic in Danavaipeta, Rajahmundry — consultation spaces, treatment areas and clinic environment." },
      { property: "og:title", content: "Clinic Gallery | Sree Cosmetology" },
      { property: "og:description", content: "See the consultation and treatment environment at our Rajahmundry hair and skin clinic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = clinicGallery;

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : images[active] ?? null;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <PageHero eyebrow="Clinic gallery" title="A Look Inside Sree Cosmetology" text="Explore the clinic branding, services area, reception and waiting environment in Danavaipeta, Rajahmundry." image={images[3].src} alt="Sree Cosmetology clinic reception in Rajahmundry" />
      <section className="py-24">
        <div className="section-shell">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {images.map((image, i) => (
              <button key={i} type="button" onClick={() => setActive(i)} className="group block w-full overflow-hidden rounded-lg border border-border text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                <img src={image.src} alt={image.alt} loading="lazy" className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
                <span className="block bg-background px-4 py-3 text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">{image.caption}</span>
              </button>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">These photographs were supplied by Sree Cosmetology and show the clinic environment.</p>
        </div>
      </section>
      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.caption} className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-6" onClick={() => setActive(null)}>
          <button type="button" aria-label="Close image" className="absolute right-6 top-6 rounded-full bg-background/15 p-2 text-primary-foreground" onClick={() => setActive(null)}><X /></button>
          <img src={current.src} alt={current.alt} className="max-h-[80vh] w-auto max-w-full rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
