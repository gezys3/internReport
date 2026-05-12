import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Boxes, Cpu } from "lucide-react";
import logo from "@/assets/ezidea-logo.png";

export const Route = createFileRoute("/organization")({
  head: () => ({
    meta: [
      { title: "Organization — Ezidea Solutions Sdn Bhd" },
      {
        name: "description",
        content:
          "Profile of Ezidea Solutions Sdn Bhd — cybersecurity, enterprise networking, and open-source infrastructure.",
      },
    ],
  }),
  component: Page,
});

const capabilities = [
  {
    icon: Shield,
    title: "Cybersecurity Intelligence",
    desc: "Threat detection, incident response, and continuous monitoring for enterprise environments.",
  },
  {
    icon: Network,
    title: "Enterprise Network Infrastructure",
    desc: "Design and deployment of high-availability network and data-center infrastructure.",
  },
  {
    icon: Boxes,
    title: "Open Source Solutions",
    desc: "Elastic Stack, OpenStack, Proxmox, and AlmaLinux — production-grade open-source platforms.",
  },
  {
    icon: Cpu,
    title: "Digital Engineering",
    desc: "Custom integration, automation, and modernization of mission-critical systems.",
  },
];

const industries = ["Government", "Education (UTM)", "Telco", "Financial Services"];

function Page() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Section 03"
        title="Ezidea Solutions Sdn Bhd"
        description="Technology with Purpose — Continuity by Design."
      />

      <Card>
        <CardContent className="p-8 grid gap-6 md:grid-cols-[1fr_auto] items-center">
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              <strong>Ezidea Solutions Sdn Bhd</strong> is a Malaysian technology
              consultancy headquartered at <em>Melawati Corporate Center, Kuala
              Lumpur</em>. The company partners with public and private sector
              clients to deliver resilient, secure, and future-ready digital
              infrastructure.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 italic font-display text-lg text-foreground">
              "Technology with Purpose — Continuity by Design."
            </blockquote>
          </div>
          <img
            src={logo}
            alt="Ezidea Solutions logo"
            className="w-40 md:w-48 mx-auto drop-shadow-xl"
          />
        </CardContent>
      </Card>

      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Core Capabilities</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((c) => (
            <Card key={c.title} className="hover:shadow-md transition-shadow">
              <CardContent className="flex gap-4 p-6">
                <div className="rounded-xl bg-gradient-brand p-3 text-white h-fit">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Industries Served</h2>
        <div className="flex flex-wrap gap-2">
          {industries.map((i) => (
            <Badge
              key={i}
              variant="secondary"
              className="text-sm px-4 py-2 border border-accent/30"
            >
              {i}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
