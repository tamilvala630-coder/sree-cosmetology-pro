import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkinTreatmentDetail } from "@/components/SkinTreatmentDetail";
import { getSkinTreatment, skinTreatmentOptions } from "@/lib/skin-treatments";

export const Route = createFileRoute("/skin-treatments/$slug")({
  loader: ({ params }) => {
    const treatment = getSkinTreatment(params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData, params }) => {
    const title = loaderData
      ? `${loaderData.treatment.title} in Rajahmundry | Sree Cosmetology`
      : "Skin treatment not found | Sree Cosmetology";
    const description = loaderData?.treatment.text ?? "The requested skin treatment is unavailable. Explore skin care at Sree Cosmetology in Rajahmundry.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: `/skin-treatments/${params.slug}` }],
    };
  },
  component: Page,
  notFoundComponent: () => <section className="py-24"><div className="section-shell text-center"><h1 className="text-3xl font-semibold text-ink">Skin treatment not found</h1><Button asChild variant="premium" className="mt-6"><Link to="/skin"><ArrowLeft />Back to Skin</Link></Button></div></section>,
});

function Page() {
  const { treatment } = Route.useLoaderData();
  return <SkinTreatmentDetail treatment={treatment} related={skinTreatmentOptions.filter((item) => item.slug !== treatment.slug)} />;
}