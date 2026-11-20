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
          <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-[#faf7f2] bg-[#2e5440] border border-[#f4d35e]/50 px-4 py-1.5 rounded-full mb-3 shadow-sm font-bold">
            <span className="size-2 rounded-full bg-[#f4d35e]" />
            <span>REVYVE Sanctuary Offerings</span>
          </div>

          <h2 className="font-serif text-[length:var(--text-h2)] leading-tight tracking-tight mb-4 text-[#1c201d]">
            Sacred Experiences & Gatherings
          </h2>

          <p className="text-[#9c6849] text-base sm:text-lg max-w-2xl leading-relaxed font-serif font-medium">
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
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#2e5440]/30 bg-[#eae3d5]/90 backdrop-blur-md transition-all duration-500 hover:border-[#f4d35e] hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c201d]/80 via-[#1c201d]/20 to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[0.65rem] uppercase tracking-widest bg-[#1c201d]/90 backdrop-blur-md px-3 py-1 rounded-full text-[#f4d35e] border border-[#f4d35e]/50 font-bold">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="font-mono text-xs uppercase tracking-wider text-[#9c6849] font-bold mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif text-2xl font-bold tracking-tight mb-3 text-[#1c201d] group-hover:text-[#2e5440] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#555f58] text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-[#2e5440]/20 flex items-center justify-between">
                  <a
                    href="/retreats"
                    className="btn-link text-xs uppercase tracking-wider font-mono font-bold text-[#2e5440] hover:text-[#9c6849]"
                  >
                    Explore Offering
                  </a>
                  <span className="size-2 rounded-full bg-[#f4d35e] group-hover:scale-150 transition-all shadow-[0_0_8px_rgba(244,211,94,0.8)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
