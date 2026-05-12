import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import groupPhoto from "@/assets/acknowledgement-group.jpg";

export const Route = createFileRoute("/acknowledgements")({
  head: () => ({
    meta: [
      { title: "Acknowledgements — Industrial Training Report" },
      {
        name: "description",
        content:
          "Professional gratitude to Ezidea Solutions Sdn Bhd, mentors, and Politeknik supervisors.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Section 01"
        title="Acknowledgements"
        description="A note of sincere gratitude to everyone who guided this industrial training journey."
      />
      <figure className="overflow-hidden rounded-2xl border shadow-lg">
        <img
          src={groupPhoto}
          alt="Internship team group photo at Ezidea Solutions"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <figcaption className="bg-muted/40 px-4 py-3 text-center text-xs text-muted-foreground italic">
          Team moments at Ezidea Solutions Sdn Bhd
        </figcaption>
      </figure>
      <Card>
        <CardContent className="prose prose-slate max-w-none p-8 text-foreground/90 leading-relaxed space-y-5">
          <p>
            First and foremost, I would like to express my deepest appreciation
            to <strong>Ezidea Solutions Sdn Bhd</strong> for the opportunity to
            undergo my industrial training at their Melawati Corporate Center
            office. The exposure to enterprise-grade cybersecurity, networking,
            and open-source infrastructure has been invaluable.
          </p>
          <p>
            I am especially grateful to my industry mentors and the engineering
            team at Ezidea, whose patience, technical guidance, and willingness
            to share real project experience accelerated my learning beyond
            anything I could have achieved on my own.
          </p>
          <p>
            My sincere thanks also go to the lecturers and supervisors of the{" "}
            <strong>Diploma in Information Technology</strong> programme for
            their academic guidance and continuous support throughout the
            industrial training duration.
          </p>
          <p>
            Finally, I would like to thank my family and peers for their
            constant encouragement and moral support during the 20 weeks of
            this attachment.
          </p>
          <p className="pt-4 italic text-muted-foreground">
            — Hazitz Iklil Bin Hessly Hafiz
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
