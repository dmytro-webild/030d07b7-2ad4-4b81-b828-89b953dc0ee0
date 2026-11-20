import { motion } from "motion/react";
import CloverLogo from "@/components/ui/CloverLogo";

export default function SriYantraPhilosophy() {
  return (
    <section className="relative py-[clamp(4rem,7vw,6.5rem)] text-foreground overflow-hidden">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Four-Leaf Clover Logo Graphic Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group p-10 sm:p-14 rounded-full bg-gradient-to-tr from-card/90 via-accent/20 to-card/50 border border-border/80 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl group-hover:bg-secondary/30 transition-all duration-700" />
              <CloverLogo className="relative z-10 size-48 sm:size-64 text-secondary drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Sacred Philosophy Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-secondary-foreground bg-secondary/30 px-3.5 py-1.5 rounded-full mb-4 border border-secondary/40 font-semibold">
              <span>Sacred Geometry & Natural Harmony</span>
            </div>

            <h2 className="font-serif text-[length:var(--text-h2)] leading-none tracking-tight mb-6">
              Our Sacred Four-Leaf Clover Philosophy
            </h2>

            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">
                At <strong className="text-foreground font-serif">REVYVE</strong>, our philosophy is birthed from our emblem of the <strong className="text-foreground">Four-Leaf Clover & Sacred Geometry</strong>. It is deeply rooted in profound spiritual symbolism and natural alignment.
              </p>
              <p className="text-base sm:text-lg">
                As the embodiment of divine energy, renewal, and fortune, the four petals represent the harmony of mind, body, spirit, and nature. It invites good health, prosperity, and alignment across all facets of life.
              </p>
              <p className="text-base sm:text-lg">
                At the core of our retreat sanctuary lies the mission to enhance personal power and foster transformative energy. The four-leaf clover serves as our guiding star, creating a haven where guests experience holistic well-being and peaceful abundance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="/about"
                className="btn-primary rounded-full px-6 py-3"
              >
                Learn More About REVYVE
              </a>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Hocking Hills • Ohio Sanctuary
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
