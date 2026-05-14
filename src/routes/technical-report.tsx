import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ElasticArchitecture } from "@/components/diagrams/ElasticArchitecture";
import {
  Database,
  LayoutDashboard,
  Server,
  Shield,
  CheckCircle2,
  Activity,
} from "lucide-react";
import phase1 from "@/assets/phase1.png";
import phase1_2 from "@/assets/phase1.1.png";
import phase2 from "@/assets/phase2.png";
import phase3 from "@/assets/phase3.png";
import phase3_2 from "@/assets/phase3.1.png";
import phase4 from "@/assets/phase4.png";

export const Route = createFileRoute("/technical-report")({
  head: () => ({
    meta: [
      {
        title: "Technical Report — Elastic Stack Deployment | Industrial Training",
      },
      {
        name: "description",
        content:
          "Deployment and configuration of a distributed Elastic Stack (Elasticsearch, Kibana, Fleet) on bare-metal and Proxmox-virtualized infrastructure.",
      },
      {
        property: "og:title",
        content: "Technical Report — Elastic Stack Deployment",
      },
      {
        property: "og:description",
        content:
          "Centralized observability and endpoint management with Elasticsearch, Kibana, and Fleet across 4 nodes.",
      },
    ],
  }),
  component: Page,
});

const nodes = [
  {
    icon: Database,
    title: "Node 1 — Elasticsearch Primary",
    desc: "Handles data indexing, search queries, and cluster management.",
  },
  {
    icon: Database,
    title: "Node 2 — Elasticsearch Secondary",
    desc: "Provides data replication, failover, and load balancing.",
  },
  {
    icon: LayoutDashboard,
    title: "Node 3 — Kibana",
    desc: "User interface and analytics dashboard for the cluster.",
  },
  {
    icon: Server,
    title: "Node 4 — Fleet Server",
    desc: "Control plane for Elastic Agents, routing data into Elasticsearch.",
  },
];

const phases = [
 {
  step: "Step 1",
  phase: "Phase 1 · Infrastructure Preparation",
  images: [
    { src: phase1, desc: "Proxmox VE interface showing Rocky Linux VMs configuration" },
    { src: phase1_2, desc: "Network configuration and static IP assignment" },
  ],
  body: "Installed Rocky Linux on all physical machines and Proxmox virtual machines. Assigned static IP addresses to every node for persistent network connectivity, and configured local /etc/hosts files so machines could resolve one another by name.",
},

  {
    step: "Step 2",
    phase: "Phase 2 · Elasticsearch Cluster Configuration",
    images: [
    { src: phase2, desc: "Elasticsearch cluster configuration showing YML File setup" },
  ],
    body: "Deployed the Elasticsearch data layer on the first two nodes. Configuration files were modified to bind them into a single unified cluster — sharing a cluster name, pointing to each other's static IPs for discovery, and designating both as master-eligible. Generated and applied SSL/TLS certificates to encrypt inter-node traffic before starting the services.",
  },
  {
    step: "Step 3",
    phase: "Phase 3 · Kibana Configuration & Status Verification",
    images: [
    { src: phase3, desc: "Kibana cluster overview dashboard displaying Green health status" },
    { src: phase3_2, desc: "Elasticsearch nodes dashboard showing 3 active nodes with 60 shards each" },
  ],
    body: 'Installed Kibana on its dedicated node, allowed external web access, and securely linked it to the Elasticsearch backend. The "Cluster overview" dashboard confirmed Kibana was healthy and connected. The "Elasticsearch nodes" dashboard showed a perfect Green health status with zero alerts across three active nodes — es01, es02, and es03 (192.168.100.41, .42, .43) — all Online and balanced at exactly 60 data shards each. This confirmed the distributed architecture was stable and fully operational.',
  },
  {
    step: "Step 4",
    phase: "Phase 4 · Fleet Server Deployment",
    images: [
    { src: phase4, desc: "Fleet Server enrollment interface in Kibana with agent management dashboard" },
    ],
    body: "From the Kibana web interface, created a Fleet Server policy pointing to Node 4's static IP and generated a unique service token. Using that token and the install command from Kibana, downloaded and enrolled the Elastic Agent on Node 4 — transforming it into the dedicated Fleet Server, ready to manage and ingest data from agents across the network.",
  },
];

function Page() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Technical Report"
        title="Elastic Stack — Distributed Observability & Endpoint Management"
        description="Deployment and configuration of Elasticsearch, Kibana, and Fleet across four nodes."
      />

      {/* Overview */}
      <Card>
        <CardContent className="p-8 space-y-4 text-foreground/90 leading-relaxed">
          <p>
            This technical report describes the deployment and configuration of a distributed observability and security platform based on the{" "} 
            <strong>Elastic Stack</strong> (Elasticsearch, Kibana and Fleet).
            The goal was to implement a centralized logging and endpoint management system with visualization across multiple nodes.
          </p>
          <p>
            The Elastic Stack is a powerful set of tools for log aggregation, storage, and visualization. 
            To ensure reliability and to compare deployment methodologies. First, on{" "} <strong>bare-metal physical machines</strong>, 
            and second in a virtualized environment utilizing <strong>Proxmox</strong> as the hypervisor.
          </p>
 
          <p>
            This report is a comprehensive account of the infrastructure setup process, 
            configuration steps and operational testing of a fully functional Elasticsearch cluster, 
            integrated with Kibana for real-time monitoring and Fleet for centralized agent management.
          </p>
        </CardContent>
      </Card>

      {/* Introduction / Objectives */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Introduction</h2>
        <Card>
          <CardContent className="p-8 space-y-5">
            <ul className="space-y-3">
              {[
                "Establish a distributed Elasticsearch cluster with multiple nodes for high availability and scalability.",
                "Deploy Kibana for centralized log visualization, analysis, and dashboard creation.",
                "Implement Elastic Fleet with a dedicated Fleet server to manage Elastic Agents.",
                "Validate both physical and virtualized deployment methodologies.",
              ].map((o) => (
                <li key={o} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-5">
              <div className="text-sm font-semibold mb-3">
                The project was executed in two phases:
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border bg-muted/40 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Phase A
                  </div>
                  <div className="mt-1 font-display font-bold">
                    Bare-Metal Deployment
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Four distinct physical PCs.
                  </p>
                </div>
                <div className="rounded-xl border bg-muted/40 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Phase B
                  </div>
                  <div className="mt-1 font-display font-bold">
                    Virtualized Deployment
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Proxmox VE running Rocky Linux server VMs.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Task Background */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-2">Task Background</h2>
        <p className="text-muted-foreground mb-5 max-w-3xl">
          A structured, phased approach ensures each component is properly
          configured before integration. The methodology emphasizes proper
          network configuration, service isolation, and secure inter-node
          communication.
        </p>

        <ElasticArchitecture />

        <h3 className="font-display font-bold mt-8 mb-3">
          Infrastructure Architecture
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {nodes.map((n) => (
            <Card key={n.title}>
              <CardContent className="flex gap-4 p-6">
                <div className="rounded-xl bg-gradient-brand p-3 text-white h-fit">
                  <n.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{n.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{n.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Method of Implementation */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-5">
          Method of Implementation
        </h2>
        <div className="space-y-5">
          {phases.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="bg-gradient-brand text-primary-foreground w-24 md:w-32 flex-shrink-0 flex items-center justify-center p-6">
                        <div className="text-center">
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                            Step
                          </div>
                          <div className="font-display text-3xl md:text-4xl font-extrabold text-white">
                            {i + 1}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {p.step}
                        </Badge>
                        <h3 className="font-display text-lg font-bold">
                          {p.phase}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                          {p.body}
                        </p>
                        {i === 2 && (
                          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              { k: "Health", v: "Green" },
                              { k: "Alerts", v: "0" },
                              { k: "Nodes Online", v: "3 / 3" },
                              { k: "Shards / node", v: "60" },
                            ].map((s) => (
                              <div
                                key={s.k}
                                className="rounded-lg border bg-muted/40 p-3 text-center"
                              >
                                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                                  {s.k}
                                </div>
                                <div className="mt-0.5 font-display font-bold text-accent">
                                  {s.v}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>


{/* Image Section */}
{p.images && (
  <div className="px-6 py-6 border-t border-slate-700 space-y-6">
    {p.images.map((img, imgIndex) => (
      <div key={imgIndex}>
        <img
          src={img.src}
          alt={img.desc}
          className="w-full h-auto object-cover rounded-lg border border-slate-700 mb-3"
        />
        <p className="text-sm text-muted-foreground italic">
          Figure {i + 1}.{imgIndex + 1}: {img.desc}
        </p>
      </div>
    ))}
  </div>
)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Conclusion</h2>
        <Card>
          <CardContent className="p-8 space-y-4 text-foreground/90 leading-relaxed">
            <p>
              This report documents a fully functional Elasticsearch and Kibana
              infrastructure capable of supporting{" "}
              <strong>enterprise-scale log aggregation and monitoring</strong>{" "}
              requirements. The successful implementation across both physical
              and virtualized platforms demonstrates the robustness of the
              Elastic Stack architecture and the reproducibility of the
              deployment methodology.
            </p>
            <p>
              Both configurations provide identical functionality while
              offering different trade-offs in terms of hardware investment,
              scalability, and operational flexibility. The infrastructure is
              now ready for production deployment and can support real-world
              logging, monitoring, and analytics workloads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t">
              {[
                { icon: Shield, label: "Secured with SSL/TLS" },
                { icon: Activity, label: "Green cluster health" },
                { icon: Server, label: "Bare-metal & virtualized" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <div className="rounded-lg bg-gradient-brand p-2 text-white">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}