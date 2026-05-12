import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { weeks } from "@/data/weeks";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/weeks/")({
  component: WeeksIndex,
});

function WeeksIndex() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader
        eyebrow="Section 05"
        title="Weekly Activities"
        description="A chronological log of tasks, technical focus areas, and reflections throughout the 20-week industrial training period."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {weeks.map((week) => (
          <Card key={week.number} className="group hover:border-accent/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="font-mono">
                  Week {week.number}
                </Badge>
                <div className="flex items-center text-[10px] text-muted-foreground uppercase tracking-widest">
                  <Calendar className="mr-1 h-3 w-3" />
                  {week.dates}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                {week.focus}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {week.summary}
              </p>
              <Link
                to="/weeks/$week"
                params={{ week: String(week.number) }}
                className="inline-flex items-center text-sm font-semibold text-accent hover:gap-2 transition-all"
              >
                View Week <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}