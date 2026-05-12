import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap, MapPin, IdCard, User } from "lucide-react";
import logo from "@/assets/ezidea-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Final Industrial Training Report | Hazitz Iklil" },
      {
        name: "description",
        content:
          "Final Industrial Training Report (DUT6019, Diploma in Information Technology (Digital Technology)) by Hazitz Iklil Bin Hessly Hafiz at Ezidea Solutions Sdn Bhd.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="space-y-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 md:p-14 text-primary-foreground"
        style={{ boxShadow: "var(--shadow-elegant)" }}
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-[var(--brand-lime)]/25 blur-3xl" />
        <img
          src={logo}
          alt="Ezidea Solutions logo"
          className="pointer-events-none absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-40 md:w-72 opacity-20 md:opacity-30 drop-shadow-2xl rotate-[-8deg]"
        />
        <div className="relative">
          <Badge className="mb-4 bg-white/15 text-white border-white/20 hover:bg-white/20">
            Diploma in Information Technology (Digital Technology)
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
            FINAL REPORT OF
            <br />
            INDUSTRIAL TRAINING
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/85 font-medium">
            Session II 2025 / 2026 | 5 January 2026 – 22 May 2026
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/introduction"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              Read introduction <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/technical-report"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20"
            >
              Technical report
            </Link>
          </div>
        </div>
      </motion.section>

      <section>
        <h2 className="font-display text-2xl font-bold mb-4">Student Biodata</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: User,
              label: "Name",
              value: "Hazitz Iklil Bin Hessly Hafiz",
            },
            { icon: IdCard, label: "Student ID", value: "17DDT23F1999" },
            {
              icon: GraduationCap,
              label: "Programme",
              value: "Diploma in Information Technology",
            },
            {
              icon: MapPin,
              label: "Training Location",
              value:
                "Ezidea Solutions Sdn Bhd, Melawati Corporate Center, Kuala Lumpur",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
            >
              <Card>
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="rounded-xl bg-gradient-brand p-3 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 font-medium">{item.value}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { to: "/organization", title: "Organization", desc: "About Ezidea Solutions Sdn Bhd" },
          { to: "/weeks", title: "Weekly Activities", desc: "20 weeks of hands-on learning" },
          { to: "/technical-report", title: "Technical Report", desc: "Elastic Stack deployment" },
        ].map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group rounded-2xl border bg-card p-6 hover:border-accent transition-colors"
          >
            <div className="font-display font-bold text-lg group-hover:text-gradient-brand">
              {c.title}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
              Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
