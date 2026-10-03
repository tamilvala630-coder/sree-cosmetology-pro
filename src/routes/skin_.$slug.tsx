import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConcernDetail } from "@/components/ConcernDetail";
import { getSkinConcern, skinConcerns } from "@/lib/skin-concerns";

export const Route = createFileRoute("/skin_/$slug")({
  loader: ({ params }) => {
    const concern = getSkinConcern(params.slug);
    if (!concern) throw notFound();
    return { concern };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Skin concern not found | Sree Cosmetology" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.concern;
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
      links: [{ rel: "canonical", href: `/skin/${params.slug}` }],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <section className="py-24"><div className="section-shell text-center"><h1 className="text-3xl font-semibold text-ink">Skin concern not found</h1><Button asChild variant="premium" className="mt-6"><Link to="/skin"><ArrowLeft />Back to Skin</Link></Button></div></section>
  ),
  errorComponent: () => (
    <section className="py-24"><div className="section-shell text-center"><h1 className="text-3xl font-semibold text-ink">Something went wrong</h1><Button asChild variant="premium" className="mt-6"><Link to="/skin"><ArrowLeft />Back to Skin</Link></Button></div></section>
  ),
});

function Page() {
  const { concern } = Route.useLoaderData();
  return <ConcernDetail c={concern} kind="skin" related={skinConcerns.filter((s) => s.slug !== concern.slug)} />;
}
