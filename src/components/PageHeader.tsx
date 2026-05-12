import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border bg-gradient-brand p-8 md:p-12 text-primary-foreground shadow-elegant"
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-[var(--brand-lime)]/20 blur-3xl" />
      <div className="relative">
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/85">
            {description}
          </p>
        )}
      </div>
    </motion.header>
  );
}
