import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References — Industrial Training Report" },
      {
        name: "description",
        content: "Books, documentation, and resources used during industrial training.",
      },
    ],
  }),
  component: Page,
});

const references = [
  {
      category: "Educational Institution",
    items: [
      {
        title: "Politeknik Sultan Idris Shah (PSIS)",
        url: "https://psis.mypolycc.edu.my/",
        desc: "Official portal of Politeknik Sultan Idris Shah - Diploma in Information Technology (Digital Technology) programme provider.",
      },
    ],
  },
  {
    category: "Training Organization",
    items: [
      {
        title: "Ezidea Solutions Sdn Bhd",
        url: "https://ezidea.co/",
        desc: "Official website of Ezidea Solutions - The organization where the industrial training was conducted.",
      },
    ],
  },
  {
    category: "Elasticsearch Documentation",
    items: [
      {
        title: "Elasticsearch 8.x Documentation",
        url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
        desc: "Official Elasticsearch reference guide for cluster configuration and API endpoints.",
      },
      {
        title: "Kibana User Guide",
        url: "https://www.elastic.co/guide/en/kibana/current/index.html",
        desc: "Comprehensive guide to Kibana dashboards, visualizations, and analytics.",
      },
      {
        title: "Elastic Fleet Documentation",
        url: "https://www.elastic.co/guide/en/fleet/current/index.html",
        desc: "Fleet Server setup and Elastic Agent management for centralized monitoring.",
      },
    ],
  },
  {
    category: "Infrastructure & Linux",
    items: [
      {
        title: "Rocky Linux Documentation",
        url: "https://docs.rockylinux.org/",
        desc: "Official Rocky Linux documentation for system administration and configuration.",
      },
      {
        title: "Proxmox VE Documentation",
        url: "https://pve.proxmox.com/pve-docs/",
        desc: "Proxmox Virtual Environment administration and VM management guide.",
      },
      {
        title: "SSL/TLS Certificate Generation",
        url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/configuring-security.html",
        desc: "Securing Elasticsearch clusters with SSL/TLS encryption.",
      },
    ],
  },
  {
    category: "Security & DevOps",
    items: [
      {
        title: "X-Pack Security Configuration",
        url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/security-settings.html",
        desc: "User authentication, role-based access control, and security policies.",
      },
      {
        title: "systemctl & Service Management",
        url: "https://www.freedesktop.org/software/systemd/man/systemctl.html",
        desc: "Linux systemd service management and system control.",
      },
    ],
  },
];

function Page() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="References"
        title="Sources & Documentation"
        description="Books, official documentation, and online resources referenced during the 20-week industrial training program."
      />

      <div className="space-y-8">
        {references.map((section, sectionIdx) => (
          <section key={sectionIdx}>
            <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <Badge variant="secondary">{section.category}</Badge>
            </h2>
            <div className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <Card key={itemIdx} className="hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="rounded-lg bg-gradient-brand p-3 text-white h-fit flex-shrink-0">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent hover:underline flex items-center gap-2 group"
                        >
                          {item.title}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Card className="bg-muted/40">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">How to Cite</h3>
          <p className="text-sm text-muted-foreground">
            All external resources listed above are properly attributed with direct links to official documentation. 
            Each source was accessed during the training period (5 January 2026 – 22 May 2026) and represents best practices 
            in enterprise infrastructure, security, and observability.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}