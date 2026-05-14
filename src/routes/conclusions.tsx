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
            The 20 weeks industrial training at <strong>Ezidea Solutions Sdn Bhd</strong> is a stepping stone to my academic and professional journey. It was a rare opportunity to witness first hand the management of a high level cybersecurity and infrastructure project, from the initial kickoff to the final handover.          
          </p>
          <p>
            From the first weeks of learning the basics of TCP/IP to the last stages of deploying a sophisticated Elastic observability stack for UTM API Management project, all tasks have contributed to a more holistic understanding of IT operations. Modern technology is not about individual tools but about building resilient, interconnected systems that deliver <em>Continuity by Design</em>.          </p>
          <p>
            This experience has really helped me to bridge the gap between the theoretical knowledge I got from Politeknik and the practical realities of the tech industry. “Troubleshooting hardware, migrating data… These challenges have really improved my analytical thinking and problem-solving skills.          </p>
          <p>
            In conclusion, I am leaving Ezidea Solutions with technical knowledge but also with the professional discipline and a network of mentors that will guide me in my future career. I am sure that the skills learned here will be a good base for my contribution to the changing world of Information Technology.          </p>
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