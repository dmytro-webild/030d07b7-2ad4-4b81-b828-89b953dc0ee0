import { motion } from "motion/react";

export default function SriYantraPhilosophy() {
  return (
    <section className="relative py-[clamp(4rem,7vw,6.5rem)] text-foreground overflow-hidden">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Logo Graphic Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group p-6 sm:p-10 rounded-full bg-gradient-to-tr from-card/80 via-accent/15 to-card/40 border border-border shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-all duration-700" />
              <img
                src="https://storage.googleapis.com/webild/users/user_3MHUulfpl4c0IR72KBuyVPRP4VJ/uploaded-1795146001693-d4b3no21.webp"
                alt="REVYVE Sri Yantra Sacred Geometry Logo"
                className="relative z-10 size-64 sm:size-80 object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Philosophy Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-accent-foreground bg-accent/30 px-3 py-1 rounded-full mb-4">
              <span>Sacred Geometry & Guidance</span>
            </div>

            <h2 className="font-serif text-[length:var(--text-h2)] leading-none tracking-tight mb-6">
              Our Sri Yantra Philosophy
            </h2>

            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">
                At <strong className="text-foreground font-serif">REVYVE</strong>, our philosophy is birthed from our logo of the <strong className="text-foreground">Sri Yantra</strong>. It is deeply rooted in its profound spiritual symbolism. Derived from ancient Hindu and Vedic traditions, the Sri Yantra is a sacred geometric pattern believed to harbor immense spiritual power.
              </p>
              <p className="text-base sm:text-lg">
                As the embodiment of divine energy, it is thought to usher in good health, prosperity, and success. The intricate design, representing the alignment of nine planets, holds the key to unlocking balance and harmony in one's life.
              </p>
              <p className="text-base sm:text-lg">
                At the core of our retreat center's philosophy lies in enhancing personal power and inviting good fortune and success across all facets of life. The Sri Yantra serves as a guiding symbol, aligning with our commitment to create a space where individuals can experience holistic well-being, abundance, and transformative energy.
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
