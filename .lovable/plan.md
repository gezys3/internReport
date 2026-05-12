# Industrial Training Report — Hazitz Iklil @ Ezidea Solutions

A modern, corporate multi-page React site (TanStack Start + Tailwind v4) presenting the final industrial training report. Sticky sidebar navigation, Ezidea brand palette (Dark Navy / Teal / Lime), dedicated route per section, and a full Technical Report on the Elastic Stack deployment.

## Information architecture (routes)

```
/                  Home — biodata + report cover
/acknowledgements  Gratitude to company & mentors
/introduction      Industrial training objectives
/organization      Ezidea Solutions company profile
/weeks             Weekly Activities index (grid of 15 weeks)
/weeks/$week       Week detail page (1–15)
/technical-report  Elastic Stack deployment — full technical report
```

Sidebar (shadcn `Sidebar`) lives in `src/routes/__root.tsx`, sticky on desktop, off-canvas on mobile. "Weekly Activities" is a `Collapsible` group listing Weeks 1–15.

## Page contents

**Home (`/`)** — Hero "FINAL REPORT OF INDUSTRIAL TRAINING" / "[DUT6019] SESSION II 2024/2025"; student card: Hazitz Iklil Bin Hessly Hafiz · 17DDT23F1999 · Diploma in IT · Ezidea Solutions Sdn Bhd, Melawati Corporate Center, KL.

**Acknowledgements** — formal gratitude to Ezidea team, mentors, and Politeknik supervisors.

**Introduction** — DUT6019 industrial training objectives, scope, expected outcomes.

**Organization** — Ezidea profile: mission *"Technology with Purpose — Continuity by Design"*; capability cards (Cybersecurity Intelligence, Enterprise Network Infrastructure, Open Source — Elastic Stack/OpenStack/Proxmox/AlmaLinux, Digital Engineering); industry chips (Government, Education/UTM, Telco, Financial Services).

**Weekly Activities** — index grid + dynamic detail route. Seeded 15 weeks:
- W1–3: IT fundamentals, TCP/IP, Proxmox + Rocky Linux install
- W4–6: AI infra, OpenStack, AD DS / FSMO, hardware troubleshooting (PSU swap)
- W7–9: Elastic Stack deploy, X-Pack security, rolling upgrades
- W10–12: Linux GUI training, UTM API Management kickoff
- W13–15: continuation, documentation, handover

Each week card: dates, focus area, tasks, tools, reflections. Data centralized in `src/data/weeks.ts`.

## Technical Report (`/technical-report`)

Full page rendering the user-supplied Elastic Stack content, organized into clearly anchored sections with a right-side in-page TOC. Visuals: hero banner with gradient, an architecture diagram (inline SVG) of the 4-node topology, and a phased timeline (Phase 1–4) using shadcn `Card` + step indicators.

Sections:

1. **Overview** — distributed observability and security platform using the Elastic Stack (Elasticsearch, Kibana, Fleet); centralized logging and endpoint management across nodes; identical logical architecture deployed twice (bare-metal vs Proxmox-virtualized) for reliability comparison.

2. **Introduction** — bulleted objectives:
   - Establish a distributed Elasticsearch cluster with multiple nodes for HA and scalability
   - Deploy Kibana for centralized log visualization, analysis, and dashboards
   - Implement Elastic Fleet with a dedicated Fleet server to manage Elastic Agents
   - Validate both physical and virtualized deployment methodologies
   - Two phases: **Bare-Metal** (4 physical PCs) and **Virtualized** (Proxmox + Rocky Linux VMs)

3. **Task Background — Infrastructure Architecture** — 4 node cards:
   - **Node 1 — Elasticsearch Primary**: indexing, queries, cluster management
   - **Node 2 — Elasticsearch Secondary**: replication, failover, load balancing
   - **Node 3 — Kibana**: UI and analytics dashboard
   - **Node 4 — Fleet Server**: control plane for Elastic Agents, routes data to Elasticsearch
   - Inline SVG architecture diagram showing agents → Fleet → Elasticsearch cluster ← Kibana

4. **Method of Implementation** — phased timeline cards:

   **Step 1 · Phase 1: Infrastructure Preparation** — Install Rocky Linux on all physical machines and Proxmox VMs; assign static IPs; configure `/etc/hosts` for name resolution.

   **Step 2 · Phase 2: Elasticsearch Cluster Configuration** — Install Elasticsearch on Nodes 1 and 2; edit configs with shared cluster name, peer static IPs for discovery, both as master-eligible; generate and apply SSL/TLS certificates for encrypted inter-node traffic; start services.

   **Step 3 · Phase 3: Kibana Configuration & Status Verification** — Install Kibana on its node; allow external web access; securely link to Elasticsearch backend. Cluster overview confirmed healthy. Elasticsearch nodes dashboard: **Green** health, zero alerts, three nodes `es01`, `es02`, `es03` at `192.168.100.41/.42/.43`, all Online, balanced at 60 shards each — distributed architecture stable and fully operational. Include a small "stats strip" component showing these values.

   **Step 4 · Phase 4: Fleet Server Deployment** — From Kibana, create Fleet Server policy pointing to Node 4's static IP; generate service token; download and enroll Elastic Agent on Node 4 using Kibana's install command; Node 4 becomes the dedicated Fleet Server managing agents across the network.

5. **Conclusion** — Fully functional Elasticsearch + Kibana infrastructure for enterprise-scale log aggregation and monitoring; successful implementation on both physical and virtualized platforms shows robustness of the Elastic Stack and reproducibility of the methodology; both offer identical functionality with different trade-offs in hardware investment, scalability, and operational flexibility; ready for production workloads.

## Visual design

- Tokens in `src/styles.css` (oklch):
  - `--primary` Dark Navy `#001f3f`, `--accent` Teal/Cyan, `--secondary` Lime Green
  - `--gradient-brand: linear-gradient(135deg, navy → teal → lime)` for hero/sidebar header
- Typography: Inter (body) + Montserrat (display) via Google Fonts in `__root.tsx` head
- Components: shadcn `Card`, `Badge`, `Sidebar`, `Collapsible`, `Separator`, `Tabs`
- Subtle framer-motion fade/slide on hero and step cards
- All colors via semantic tokens — no hardcoded hex in components

## Technical notes

- Stack: TanStack Start v1, Tailwind v4, shadcn ui, framer-motion (`bun add framer-motion`)
- Flat dot routing: `weeks.tsx`, `weeks.$week.tsx`, `technical-report.tsx`, etc.
- Each route exports `head()` with route-specific title, description, og tags
- Architecture diagrams as inline SVG components in `src/components/diagrams/`
- Replace placeholder `src/routes/index.tsx`
- Mobile: `Sidebar collapsible="offcanvas"` with trigger pinned in slim top bar

## Build order

1. Update `src/styles.css` with Ezidea palette + gradient
2. Add Inter/Montserrat to root head
3. Build `AppSidebar` with Weekly Activities collapsible (1–15)
4. Wrap root with `SidebarProvider` + sticky header trigger
5. Create `src/data/weeks.ts`
6. Create routes: `index`, `acknowledgements`, `introduction`, `organization`, `weeks`, `weeks.$week`, `technical-report`
7. Build `ElasticArchitecture.tsx` SVG and embed in Technical Report
8. Polish motion + responsive checks
