import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NonSurgicalHairDetail } from "@/components/NonSurgicalHairDetail";
import { getNonSurgicalHairTreatment, nonSurgicalHairTreatments } from "@/lib/non-surgical-hair-treatments";

export const Route = createFileRoute("/treatments_/$slug")({
  loader: ({ params }) => {
    const treatment = getNonSurgicalHairTreatment(params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Treatment not found | Sree Cosmetology" }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.treatment.title} in Rajahmundry | Sree Cosmetology`;
    return { meta: [{ title }, { name: "description", content: loaderData.treatment.text }, { property: "og:title", content: title }, { property: "og:description", content: loaderData.treatment.text }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `/treatments/${params.slug}` }] };
  },
  component: Page,
  notFoundComponent: () => <section className="py-24"><div className="section-shell text-center"><h1 className="text-3xl font-semibold text-ink">Treatment not found</h1><Button asChild variant="premium" className="mt-6"><Link to="/treatments"><ArrowLeft/>Back to Treatments</Link></Button></div></section>,
});

function Page() {
  const { treatment } = Route.useLoaderData();
  return <NonSurgicalHairDetail treatment={treatment} related={nonSurgicalHairTreatments.filter((item) => item.slug !== treatment.slug)}/>;
}