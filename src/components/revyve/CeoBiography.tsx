import { motion } from "motion/react";

export default function CeoBiography() {
  return (
    <section className="relative py-[clamp(4rem,7vw,6.5rem)] text-foreground">
      <div className="mx-auto w-[var(--container)]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Founder Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground bg-card border border-border px-3 py-1 rounded-full mb-4">
              <span>Sanctuary Founder & Visionary</span>
            </div>

            <h2 className="font-serif text-[length:var(--text-h2)] leading-none tracking-tight mb-3">
              Meet the CEO of REVYVE
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-accent font-medium mb-6">
              Julie Brainard — Somatic Yoga Practitioner, Breathwork Guide & Interior Designer
            </p>

            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p className="text-base sm:text-lg">
                Meet <strong className="text-foreground">Julie Brainard</strong>, the compassionate visionary and heart-centered soul behind REVYVE Retreat Center.
              </p>
              <p className="text-base sm:text-lg">
                Julie's life has been a mosaic of unexpected transformative experiences that sparked a profound realization—humanity yearns for a place to mend, rejuvenate, and rediscover the inherent harmony within.
              </p>
              <p className="text-base sm:text-lg">
                Fueled by the lessons learned from her own journey, Julie passionately crafted REVYVE as a haven for the collective spirit. This retreat center is more than brick and mortar; it's a manifestation of Julie's belief in somatic healing, intentional design, and deep connection with nature.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-3 bg-card/80 border border-border p-3 rounded-2xl">
                <span className="size-3 rounded-full bg-accent" />
                <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                  Hocking Hills, Ohio • Somatic & Breathwork Sanctuary
                </span>
              </div>
            </div>
          </motion.div>

          {/* CEO Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/30 via-secondary/20 to-primary/10 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl bg-card">
                <img
                  src="https://storage.googleapis.com/webild/users/user_3MHUulfpl4c0IR72KBuyVPRP4VJ/uploaded-1795146001694-w2m3lhxm.webp"
                  alt="Julie Brainard - Founder & CEO of REVYVE Retreat Center"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-foreground">
                  <p className="font-serif text-2xl font-medium mb-0.5">Julie Brainard</p>
                  <p className="font-mono text-xs text-accent uppercase tracking-wider">Founder & CEO, REVYVE</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
