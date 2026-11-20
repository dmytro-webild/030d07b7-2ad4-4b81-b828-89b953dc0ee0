import { motion } from "motion/react";

export default function SriYantraPhilosophy() {
  return (
    <section className="relative py-[clamp(4rem,7vw,6.5rem)] text-foreground overflow-hidden bg-[#1c201d] text-[#faf7f2]">
      {/* Background organic glow elements */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-[#2e5440]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-[#9c6849]/40 blur-3xl" />

      <div className="relative z-10 mx-auto w-[var(--container)] max-w-4xl">
        {/* Sacred Philosophy Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center text-[#faf7f2]"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-[#1c201d] bg-[#f4d35e] px-4 py-1.5 rounded-full mb-4 font-bold shadow-md">
            <span>Sacred Geometry & Natural Harmony</span>
          </div>

          <h2 className="font-serif text-[length:var(--text-h2)] leading-tight tracking-tight mb-6 text-[#faf7f2]">
            The Sacred Sri Yantra Philosophy
          </h2>

          <div className="prose prose-lg text-[#d2c7b5] leading-relaxed space-y-4 max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg">
              At <strong className="text-[#f4d35e] font-serif">REVYVE</strong>, our philosophy is birthed from our emblem of the <strong className="text-[#faf7f2]">Sri Yantra</strong>. It is deeply rooted in its profound spiritual symbolism. Derived from ancient Hindu and Vedic traditions, the Sri Yantra is a sacred geometric pattern believed to harbor immense spiritual power.
            </p>
            <p className="text-base sm:text-lg">
              As the embodiment of divine energy, it is thought to usher in good health, prosperity, and success. The intricate design, representing the alignment of nine planets, holds the key to unlocking balance and harmony in one's life.
            </p>
            <p className="text-base sm:text-lg">
              At the core of our retreat center's philosophy lies in enhancing personal power and inviting good fortune and success across all facets of life. The Sri Yantra serves as a guiding symbol, aligning with our commitment to create a space where individuals can experience holistic well-being, abundance, and transformative energy.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#2e5440] text-[#faf7f2] font-mono text-xs uppercase tracking-widest font-bold border border-[#f4d35e]/50 hover:bg-[#9c6849] transition-all duration-300 shadow-lg"
            >
              Learn More About REVYVE
            </a>
            <span className="font-mono text-xs text-[#f4d35e] uppercase tracking-wider font-semibold">
              Airy Green • Earthy Brown • Soft Yellow • Charcoal
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}