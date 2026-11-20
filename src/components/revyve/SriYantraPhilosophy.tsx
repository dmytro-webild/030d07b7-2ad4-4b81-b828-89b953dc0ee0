import { motion } from "motion/react";

export default function SriYantraPhilosophy() {
  return (
    <section className="relative py-[clamp(4rem,7vw,6.5rem)] text-foreground overflow-hidden bg-[#1c201d] text-[#faf7f2]">
      {/* Background organic glow elements */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-[#1e3a2b]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-[#8c5a3c]/40 blur-3xl" />

      <div className="relative z-10 mx-auto w-[var(--container)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Logo Showcase: Sri Yantra Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center gap-6"
          >
            <div className="relative group p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-[#1e3a2b]/90 via-[#8c5a3c]/40 to-[#1c201d] border border-[#e5aa24]/40 shadow-2xl flex flex-col items-center justify-center w-full">
              <div className="absolute inset-0 rounded-3xl bg-[#e5aa24]/10 blur-2xl group-hover:bg-[#e5aa24]/20 transition-all duration-700" />

              <div className="relative z-10 flex flex-col items-center justify-center gap-4 my-4">
                <div className="relative size-36 sm:size-44 rounded-full overflow-hidden border-2 border-[#e5aa24]/70 shadow-[0_0_30px_rgba(229,170,36,0.4)] transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3MHUulfpl4c0IR72KBuyVPRP4VJ/uploaded-1795146930469-sovebs4e.webp"
                    alt="REVYVE Sri Yantra Sacred Geometry Logo"
                    className="size-full object-cover animate-[spin_16s_linear_infinite]"
                  />
                </div>
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[#e5aa24] font-bold bg-[#1c201d]/90 px-4 py-1.5 rounded-full border border-[#e5aa24]/40 shadow-md">
                  Sri Yantra Sacred Logo
                </span>
              </div>

              <p className="relative z-10 font-mono text-xs text-[#d2c7b5] text-center mt-2 uppercase tracking-wider">
                Sacred Geometric Emblem • Hocking Hills, OH
              </p>
            </div>
          </motion.div>

          {/* Sacred Philosophy Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start text-[#faf7f2]"
          >
            <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-[#1c201d] bg-[#e5aa24] px-4 py-1.5 rounded-full mb-4 font-bold shadow-md">
              <span>Sacred Geometry & Natural Harmony</span>
            </div>

            <h2 className="font-serif text-[length:var(--text-h2)] leading-tight tracking-tight mb-6 text-[#faf7f2]">
              The Sacred Sri Yantra Philosophy
            </h2>

            <div className="prose prose-lg text-[#d2c7b5] leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">
                At <strong className="text-[#e5aa24] font-serif">REVYVE</strong>, our philosophy is birthed from our logo of the <strong className="text-[#faf7f2]">Sri Yantra</strong>. It is deeply rooted in its profound spiritual symbolism. Derived from ancient Hindu and Vedic traditions, the Sri Yantra is a sacred geometric pattern believed to harbor immense spiritual power.
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
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1e3a2b] text-[#faf7f2] font-mono text-xs uppercase tracking-widest font-bold border border-[#e5aa24]/50 hover:bg-[#8c5a3c] transition-all duration-300 shadow-lg"
              >
                Learn More About REVYVE
              </a>
              <span className="font-mono text-xs text-[#e5aa24] uppercase tracking-wider font-semibold">
                Forest Green • Earthy Brown • Golden Yellow • Charcoal
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}