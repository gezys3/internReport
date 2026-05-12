import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Briefcase, Lightbulb, Users } from "lucide-react";

export const Route = createFileRoute("/introduction")({
  head: () => ({
    meta: [
      { title: "Introduction — Industrial Training Report" },
      {
        name: "description",
        content:
          "Overview and objectives of the DUT6019 industrial training programme at Ezidea Solutions.",
      },
    ],
  }),
  component: Page,
});

const objectives = [
  {
    icon: Target,
    title: "Apply technical knowledge",
    desc: "Translate classroom theory into practical, real-world IT and cybersecurity solutions.",
  },
  {
    icon: Briefcase,
    title: "Industry exposure",
    desc: "Experience day-to-day operations of an enterprise technology consultancy.",
  },
  {
    icon: Lightbulb,
    title: "Problem-solving",
    desc: "Develop critical thinking through troubleshooting servers, networks, and software stacks.",
  },
  {
    icon: Users,
    title: "Professional skills",
    desc: "Strengthen communication, teamwork, and documentation in a corporate setting.",
  },
];

function Page() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Section 02"
        title="Introduction"
        description="Industrial training (DUT6019) bridges academic study with professional practice — this report documents that journey at Ezidea Solutions Sdn Bhd."
      />

      <Card>
        <CardContent className="p-8 leading-relaxed space-y-4 text-foreground/90">
          <p>
            The Industrial Training programme is a compulsory component of the{" "}
            <strong>Diploma in Information Technology</strong> at Politeknik. It
            requires students to complete <strong>20 weeks</strong> of attachment
            with an approved organization, providing hands-on exposure to the
            real demands of the IT industry.
          </p>
          <p>
            For Session II 2025/2026, my training was conducted at{" "}
            <strong>Ezidea Solutions Sdn Bhd</strong>, a Malaysian technology
            consultancy specializing in cybersecurity, enterprise networking,
            and open-source infrastructure. Over 20 weeks I rotated through
            networking fundamentals, virtualization with Proxmox, Linux server
            administration, the Elastic observability stack, and a UTM API
            management migration project.
          </p>
        </CardContent>
      </Card>

      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Objectives</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {objectives.map((o) => (
            <Card key={o.title}>
              <CardContent className="flex gap-4 p-6">
                <div className="rounded-xl bg-gradient-brand p-3 text-white h-fit">
                  <o.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{o.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
