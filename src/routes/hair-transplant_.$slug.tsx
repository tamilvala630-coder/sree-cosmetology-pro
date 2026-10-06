import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HairTransplantDetail } from "@/components/HairTransplantDetail";
import { getHairTransplantOption, hairTransplantOptions } from "@/lib/hair-transplant-options";

export const Route = createFileRoute("/hair-transplant_/$slug")({
  loader: ({ params }) => {
    const option = getHairTransplantOption(params.slug);
    if (!option) throw notFound();
    return { option };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Hair transplant option not found | Sree Cosmetology" }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.option.title} in Rajahmundry | Sree Cosmetology`;
    return { meta: [{ title }, { name: "description", content: loaderData.option.text }, { property: "og:title", content: title }, { property: "og:description", content: loaderData.option.text }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `/hair-transplant/${params.slug}` }] };
  },
  component: Page,
  notFoundComponent: () => <section className="py-24"><div className="section-shell text-center"><h1 className="text-3xl font-semibold text-ink">Hair transplant option not found</h1><Button asChild variant="premium" className="mt-6"><Link to="/hair-transplant"><ArrowLeft/>Back to Hair Transplant</Link></Button></div></section>,
});

function Page() {
  const { option } = Route.useLoaderData();
  return <HairTransplantDetail option={option} related={hairTransplantOptions.filter((item) => item.slug !== option.slug)}/>;
}