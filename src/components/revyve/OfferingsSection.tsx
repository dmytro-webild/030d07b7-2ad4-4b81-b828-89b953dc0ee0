import { motion } from "motion/react";

export interface Offering {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  tag: string;
}

const offerings: Offering[] = [
  {
    title: "Healing & Wellness Retreats",
    category: "Restorative Journey",
    tag: "01 / HEALING",
    description: "Multi-day immersive experiences blending somatic movement, sound bath therapy, herbal infusions, and deep restorative silence in the tranquility of Hocking Hills.",
    imageSrc: "https://img.b2bpic.net/free-photo/autumn-forest-reflected-lake_181624-52280.jpg?_wi=1",
  },
  {
    title: "Corporate Wellness",
    category: "Executive Alignment",
    tag: "02 / CORPORATE",
    description: "Tailored corporate retreats designed for leadership teams seeking clarity, burnout recovery, mindful strategy, and collective nervous system reset in nature.",
    imageSrc: "https://images.pexels.com/photos/461073/pexels-photo-461073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "Wedding Events",
    category: "Sacred Gatherings",
    tag: "03 / WEDDINGS",
    description: "Intimate woodland wedding ceremonies, bridal somatic immersions, and soul-centered celebrations surrounded by old-growth forest views and natural elegance.",
    imageSrc: "https://img.b2bpic.net/free-photo/nice-leaves-aspen_23-2147829156.jpg?_wi=1",
  },
  {
    title: "Yoga & Breathwork",
    category: "Somatic Practice",
    tag: "04 / YOGA & BREATH",
    description: "Guided somatic movement flows and transformational pranayama breathwork led by founder Julie Brainard, designed to release stored trauma and restore vitality.",
    imageSrc: "https://img.b2bpic.net/free-photo/dark-forest-trees_395237-133.jpg?_wi=1",
  },
  {
    title: "Forest Therapy",
    category: "Shinrin-Yoku",
    tag: "05 / FOREST THERAPY",
    description: "Guided sensory immersion walks through Hocking Hills trails, slowing down to awaken the senses, lower cortisol, and connect deeply with the living forest.",
    imageSrc: "https://img.b2bpic.net/free-photo/high-angle-delicious-food-nature_23-2149212362.jpg",
  },
  {
    title: "Silent DJ Parties",
    category: "Mindful Celebration",
    tag: "06 / SILENT DJ",
    description: "Ecstatic dance and ambient musical immersions using wireless high-definition headphones, celebrating joy, movement, and starlight connection under the trees.",
    imageSrc: "https://img.b2bpic.net/free-photo/sun-shining-woman-with-curly-hair-surrounded-by-trees-grass_181624-30896.jpg",
  },
];

export default function OfferingsSection() {
  return (
    <section className="relative py-[clamp(4rem,7vw,6.5rem)] text-foreground">
      <div className="mx-auto w-[var(--container)]">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-accent bg-card border border-border px-3 py-1 rounded-full mb-3">
            <span>REVYVE Sanctuary Offerings</span>
          </div>

          <h2 className="font-serif text-[length:var(--text-h2)] leading-tight tracking-tight mb-4">
            Sacred Experiences & Gatherings
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            Every offering at REVYVE is designed to nurture personal alignment, invite transformative energy, and foster joyful connection in Hocking Hills.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md transition-all duration-500 hover:border-accent hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[0.65rem] uppercase tracking-widest bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-foreground border border-border">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif text-2xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <a
                    href="/retreats"
                    className="btn-link text-xs uppercase tracking-wider font-mono font-semibold"
                  >
                    Explore Offering
                  </a>
                  <span className="size-2 rounded-full bg-accent/60 group-hover:bg-accent group-hover:scale-125 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
