import { useState } from "react";
import { motion } from "motion/react";
import AirbnbModal from "./AirbnbModal";

export default function VenueCabinsSection() {
  const [isAirbnbModalOpen, setIsAirbnbModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-[clamp(4rem,7vw,6.5rem)] text-foreground">
        <div className="mx-auto w-[var(--container)]">
          {/* Section Header */}
          <div className="flex flex-col items-start mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-[#faf7f2] bg-[#8c5a3c] border border-[#e5aa24]/50 px-4 py-1.5 rounded-full mb-3 font-bold shadow-md">
              <span className="size-2 rounded-full bg-[#e5aa24]" />
              <span>Sanctuary Lodging • Hocking Hills</span>
            </div>

            <h2 className="font-serif text-[length:var(--text-h2)] leading-tight tracking-tight mb-4 text-[#1c201d]">
              Curated Cabins & Treehouse Stays
            </h2>

            <p className="text-[#8c5a3c] text-base sm:text-lg max-w-2xl leading-relaxed font-serif font-medium">
              Designed by founder and interior designer Julie Brainard, our lodging spaces fuse organic architecture with quiet luxury for profound restorative stay experiences.
            </p>
          </div>

          {/* Cabin 1: Matte Black A-Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-3xl border border-[#1e3a2b]/40 bg-[#1c201d] text-[#faf7f2] p-6 sm:p-10 mb-12 shadow-2xl"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e5aa24] font-bold mb-2">
                  Modern Forest Architectural Icon
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl tracking-tight mb-4 text-[#faf7f2]">
                  The Matte Black A-Frame Cabin
                </h3>
                <p className="text-[#d2c7b5] text-base sm:text-lg leading-relaxed mb-6">
                  A striking architectural masterpiece set against the deep green forests of Hocking Hills. Featuring sleek matte black timber exteriors, floor-to-ceiling forest windows that frame rolling woodland sunrises, a custom Scandinavian wood-burning stove, private outdoor cedar soaking tub, and custom minimalist interior design by Julie Brainard.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-8 pt-4 border-t border-[#1e3a2b]/80 font-mono text-xs text-[#d2c7b5]">
                  <div>
                    <span className="block text-[#e5aa24] font-semibold uppercase">Capacity</span>
                    Sleeps up to 4 Guests
                  </div>
                  <div>
                    <span className="block text-[#e5aa24] font-semibold uppercase">Highlights</span>
                    Cedar Soaking Tub & Stove
                  </div>
                  <div>
                    <span className="block text-[#e5aa24] font-semibold uppercase">Setting</span>
                    Secluded Pine Ridge
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setIsAirbnbModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#e5aa24] text-[#1c201d] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#1e3a2b] hover:text-[#faf7f2] transition-all duration-300 shadow-md"
                  >
                    Book on Airbnb
                  </button>
                  <a
                    href="#venue-inquiry"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#8c5a3c] text-[#faf7f2] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#1e3a2b] transition-all duration-300 border border-[#e5aa24]/30"
                  >
                    Private Venue Inquiry
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-square border border-[#e5aa24]/30">
                  <img
                    src="https://img.b2bpic.net/free-photo/dark-forest-trees_395237-133.jpg"
                    alt="Matte Black A-Frame Cabin in Hocking Hills"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c201d]/90 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 font-mono text-xs bg-[#1c201d]/90 text-[#e5aa24] px-3 py-1 rounded-full border border-[#e5aa24]/40 font-bold">
                    Matte Black A-Frame • Hocking Hills
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cabin 2: Luxury Two-Story Treehouse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-[#1e3a2b]/40 bg-[#1e3a2b] text-[#faf7f2] p-6 sm:p-10 mb-16 shadow-2xl"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-square border border-[#e5aa24]/30">
                  <img
                    src="https://img.b2bpic.net/free-photo/autumn-forest-reflected-lake_181624-52280.jpg"
                    alt="Luxury Two-Story Treehouse suspended in canopy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a2b]/90 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 font-mono text-xs bg-[#1e3a2b]/90 text-[#e5aa24] px-3 py-1 rounded-full border border-[#e5aa24]/40 font-bold">
                    Two-Story Treehouse • Canopy View
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e5aa24] font-bold mb-2">
                  Suspended Forest Haven
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl tracking-tight mb-4 text-[#faf7f2]">
                  The Luxury Two-Story Treehouse
                </h3>
                <p className="text-[#d2c7b5] text-base sm:text-lg leading-relaxed mb-6">
                  Suspended high in the lush Hocking Hills canopy, this two-story treehouse sanctuary offers wrap-around panoramic observation decks, sky-lit dual master suites, an open-air outdoor rain shower, freestanding clawfoot tub, and a full organic chef's kitchen crafted with natural hardwood and soft earth-tone linens.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full mb-8 pt-4 border-t border-[#8c5a3c]/60 font-mono text-xs text-[#d2c7b5]">
                  <div>
                    <span className="block text-[#e5aa24] font-semibold uppercase">Capacity</span>
                    Sleeps up to 6 Guests
                  </div>
                  <div>
                    <span className="block text-[#e5aa24] font-semibold uppercase">Highlights</span>
                    Sky Deck & Rain Shower
                  </div>
                  <div>
                    <span className="block text-[#e5aa24] font-semibold uppercase">Setting</span>
                    High Canopy Ridge
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setIsAirbnbModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#e5aa24] text-[#1c201d] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#8c5a3c] hover:text-[#faf7f2] transition-all duration-300 shadow-md"
                  >
                    Book on Airbnb
                  </button>
                  <a
                    href="#venue-inquiry"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1c201d] text-[#faf7f2] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#8c5a3c] transition-all duration-300 border border-[#e5aa24]/30"
                  >
                    Private Venue Inquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Airbnb Callout Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8c5a3c] via-[#1c201d] to-[#1e3a2b] border border-[#e5aa24]/50 p-8 sm:p-12 text-center flex flex-col items-center shadow-2xl text-[#faf7f2]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#e5aa24] font-bold mb-2">
              Airbnb Launch Notification
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight mb-4 text-[#faf7f2]">
              Plan Your Stay on Airbnb
            </h3>
            <p className="text-[#d2c7b5] text-base max-w-xl mb-6">
              Our Hocking Hills sanctuary cabins will soon be available for Airbnb reservations. Click below to sign up for instant notification when booking calendar dates open.
            </p>
            <button
              onClick={() => setIsAirbnbModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#e5aa24] text-[#1c201d] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#faf7f2] transition-all duration-300 shadow-xl"
            >
              Book on Airbnb (Join VIP List)
            </button>
          </div>
        </div>
      </section>

      {/* Airbnb Modal */}
      <AirbnbModal
        isOpen={isAirbnbModalOpen}
        onClose={() => setIsAirbnbModalOpen(false)}
      />
    </>
  );
}
