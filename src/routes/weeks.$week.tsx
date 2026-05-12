import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { weeks } from "@/data/weeks";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/weeks/$week")({
  head: ({ params }) => {
    const w = weeks.find((x) => String(x.number) === params.week);
    return {
      meta: [
        {
          title: w
            ? `Week ${w.number}: ${w.focus} — Industrial Training Report`
            : "Week — Industrial Training Report",
        },
        { name: "description", content: w?.summary ?? "Weekly activities" },
      ],
    };
  },
  component: WeekDetail,
  notFoundComponent: () => (
    <div className="text-center py-20">
      <h2 className="font-display text-2xl font-bold">Week not found</h2>
      <Link to="/weeks" className="mt-4 inline-block text-accent">
        Back to all weeks
      </Link>
    </div>
  ),
});

function WeekDetail() {
  const { week } = Route.useParams();
  const num = Number(week);
  const data = weeks.find((w) => w.number === num);
  if (!data) throw notFound();

  const prev = weeks.find((w) => w.number === num - 1);
  const next = weeks.find((w) => w.number === num + 1);

  // Scroll to top whenever the week changes so users land at the header.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [num]);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={`Week ${data.number} of 20`}
        title={data.focus}
        description={data.summary}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-display font-bold mb-4">Tasks completed</h3>
            <ul className="space-y-3">
              {data.tasks.map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tools & Tech
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {data.tools.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Reflection
              </div>
              <p className="mt-2 text-sm italic text-foreground/80">
                "{data.reflection}"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {data.details && data.details.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="font-display font-bold">Details</h3>
            {data.details.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-foreground/90 min-h-[1rem]">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      )}

      {data.images && data.images.length > 0 && (
        <div>
          <h3 className="font-display font-bold mb-4">Pictures</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.images.map((img, i) => (
              <figure
                key={i}
                className="overflow-hidden rounded-lg border bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt ?? `Week ${data.number} picture ${i + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {img.caption && (
                  <figcaption className="px-4 py-2 text-xs text-muted-foreground">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between border-t pt-6">
        {prev ? (
          <Link
            to="/weeks/$week"
            params={{ week: String(prev.number) }}
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Week {prev.number}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to="/weeks/$week"
            params={{ week: String(next.number) }}
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent"
          >
            Week {next.number} <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
