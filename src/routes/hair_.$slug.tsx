import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConcernDetail } from "@/components/ConcernDetail";
import { getHairCondition, hairConditions } from "@/lib/hair-conditions";

export const Route = createFileRoute("/hair_/$slug")({
  loader: ({ params }) => {
    const condition = getHairCondition(params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Hair concern not found | Sree Cosmetology" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.condition;
    const title = `${c.title} Treatment in Rajahmundry | Sree Cosmetology`;
    return {
      meta: [
        { title },
        { name: "description", content: c.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: c.intro },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/hair/${params.slug}` }],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <section className="py-24"><div className="section-shell text-center"><h1 className="text-3xl font-semibold text-ink">Hair concern not found</h1><Button asChild variant="premium" className="mt-6"><Link to="/hair"><ArrowLeft />Back to Hair</Link></Button></div></section>
  ),
  errorComponent: () => (
    <section className="py-24"><div className="section-shell text-center"><h1 className="text-3xl font-semibold text-ink">Something went wrong</h1><Button asChild variant="premium" className="mt-6"><Link to="/hair"><ArrowLeft />Back to Hair</Link></Button></div></section>
  ),
});

function Page() {
  const { condition } = Route.useLoaderData();
  return <ConcernDetail c={condition} kind="hair" related={hairConditions.filter((h) => h.slug !== condition.slug)} />;
}
