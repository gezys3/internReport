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
        eyebrow="Section 01"
        title="Introduction"
        description="Industrial training bridges academic study with professional practice — this report documents that journey at Ezidea Solutions Sdn Bhd."
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

      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Executive Summary</h2>
        <Card>
          <CardContent className="p-8 leading-relaxed space-y-4 text-foreground/90">
            <p>
              This industrial training report outlines a 20-week thorough attachment at Ezidea Solutions Sdn Bhd, 
              where I acquired practical experience in enterprise infrastructure, cybersecurity and open-source technologies. 
              The training program was intended to develop technical competency in multiple domains, beginning with networking 
              fundamentals and culminating in a distributed Elastic Stack deployment project. 
              Through hands-on work with Proxmox virtualization, Rocky Linux administration and API Gateway setup,
              I learned a lot about production-level IT operations and system integration.
            </p>
            <p>
              The training period has key accomplishments such as the successful deployment and configuration of a multi-node 
              Elasticsearch cluster with kibana visualization and fleet server management in physical and virtualized environments. 
              I participated in enterprise infrastructure discussions at UMPSA Kuantan, 
              gained understanding of Active Directory, FSMO roles, and API management concepts. I also maintained weekly logbook entries that documented daily learning outcomes, 
              technical troubleshooting, and system administration activities, demonstrating continuous professional development and meticulous attention to technical documentation detail.
            </p>
            <p>
              This training has significantly improved my ability to apply theoretical knowledge to practical solutions, 
              to work effectively within a professional group and to solve complex problems in IT using a structured methodology. 
              My time at Ezidea Solutions has given me the skills to succeed in entry-level positions in IT Operations, Infrastructure Support and System Administration.
              I have also been exposed to industry best practices in security, reliability and professional communication. 
              The technical skills I picked up, including Elastic Stack deployment, Linux server administration and enterprise security, have put me on track for continued growth in the IT industry.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}