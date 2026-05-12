import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Award, Heart } from "lucide-react";

export const Route = createFileRoute("/conclusions")({
  head: () => ({
    meta: [
      { title: "Conclusion — Industrial Training Report" },
      {
        name: "description",
        content: "Final summary and reflections of the industrial training period at Ezidea Solutions.",
      },
    ],
  }),
  component: Page,
});

const highlights = [
  {
    icon: GraduationCap,
    title: "Technical Mastery",
    desc: "Achieved proficiency in Elastic Stack, Linux administration, and network security auditing through hands-on tasks.",
  },
  {
    icon: Award,
    title: "Objective Completion",
    desc: "Successfully met all industrial training requirements and learning outcomes set by the Politeknik curriculum.",
  },
  {
    icon: TrendingUp,
    title: "Career Readiness",
    desc: "Gained the professional skills and confidence needed to enter the IT workforce as a competent Junior Infrastructure Engineer.",
  },
  {
    icon: Heart,
    title: "Personal Growth",
    desc: "Developed a deep appreciation for professional ethics, teamwork, and the corporate culture at Ezidea Solutions.",
  },
];

function Page() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PageHeader
        eyebrow="Section 06"
        title="Conclusion"
        description="Reflecting on a transformative 20-week journey and looking forward to the next chapter in my professional career."
      />

      <Card>
        <CardContent className="p-8 leading-relaxed space-y-4 text-foreground/90">
          <p>
            The 20-week industrial training at <strong>Ezidea Solutions Sdn Bhd</strong> has been a cornerstone of my academic and professional development. It provided a rare opportunity to witness how high-level cybersecurity and infrastructure projects are managed from initial kickoff to final handover.
          </p>
          <p>
            From the initial weeks of learning TCP/IP fundamentals to the final phases of deploying a complex Elastic observability stack for the UTM API Management project, every task has contributed to a more holistic understanding of IT operations. I have learned that modern technology is not just about individual tools, but about building resilient, interconnected systems that provide <em>Continuity by Design</em>.
          </p>
          <p>
            This experience has significantly bridged the gap between theoretical knowledge gained at Politeknik and the practical realities of the tech industry. The challenges faced—ranging from hardware troubleshooting to data migration—have sharpened my analytical thinking and problem-solving abilities.
          </p>
          <p>
            In conclusion, I am leaving Ezidea Solutions with not only technical knowledge but also with the professional discipline and a network of mentors that will guide me in my future career. I am confident that the skills acquired here will serve as a strong foundation for my contributions to the evolving landscape of Information Technology.
          </p>
        </CardContent>
      </Card>

      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Final Reflections</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((h) => (
            <Card key={h.title} className="hover:border-accent/50 transition-colors group">
              <CardContent className="flex gap-4 p-6">
                <div className="rounded-xl bg-gradient-brand p-3 text-white h-fit shadow-md">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold group-hover:text-accent transition-colors">{h.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}