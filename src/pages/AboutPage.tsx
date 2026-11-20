import SriYantraPhilosophy from "@/components/revyve/SriYantraPhilosophy";
import CeoBiography from "@/components/revyve/CeoBiography";
import EmailSignupSection from "@/components/revyve/EmailSignupSection";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";

export default function AboutPage() {
  return (
    <>
      {/* About Hero Banner */}
      <section className="relative pt-[clamp(7rem,16svh,10rem)] pb-12 text-foreground">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#faf7f2] bg-[#2e5440] border border-[#f4d35e]/50 px-4 py-1.5 rounded-full mb-3 font-bold shadow-md inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#f4d35e]" />
              About REVYVE Sanctuary
            </span>
            <h1 className="font-serif text-[length:var(--text-h1)] leading-none tracking-tight mb-6">
              Birthed in Nature, Guided by Geometry
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              REVYVE ("Revyve to Thryve") is a boutique retreat center and event sanctuary nestled in the heart of Hocking Hills, Ohio. We weave somatic movement, ancient sacred geometry, and intentional architectural design to guide individuals back to wholeness.
            </p>
          </div>
        </div>
      </section>

      {/* Sri Yantra Philosophy */}
      <SriYantraPhilosophy />

      {/* CEO Biography */}
      <CeoBiography />

      {/* Gallery of Sanctuary Spaces */}
      <div className="relative z-[45]">
        <GalleryWordPanels
          label="Sanctuary Spaces"
          title="Designed for Deep Harmony"
          items={[
            {
              title: "Sacred",
              category: "Ancient Geometry",
              description: "Every structure at REVYVE is aligned to foster balance, harmony, and transformative personal power.",
              imageSrc: "https://img.b2bpic.net/free-photo/dark-forest-trees_395237-133.jpg?_wi=2",
              imageAlt: "REVYVE sacred forest sanctuary"
            },
            {
              title: "Movement",
              category: "Somatic Healing",
              description: "Guided somatic yoga and breathwork sessions to release stored stress and ground into body wisdom.",
              imageSrc: "https://img.b2bpic.net/free-photo/nice-leaves-aspen_23-2147829156.jpg?_wi=2",
              imageAlt: "sunlight in Hocking Hills leaves"
            },
            {
              title: "Sanctuary",
              category: "Curated Design",
              description: "Intentionally designed cabins crafted by Julie Brainard blending organic cedar, stone, and forest views.",
              imageSrc: "https://img.b2bpic.net/free-photo/dark-forest-trees_395237-133.jpg?_wi=3",
              imageAlt: "mossy tree trunk in Hocking Hills forest"
            },
            {
              title: "Nourish",
              category: "Collective Spirit",
              description: "Gatherings, fire circles, and mindful nourishment designed to mend and rejuvenate.",
              imageSrc: "https://img.b2bpic.net/free-photo/autumn-forest-reflected-lake_181624-52280.jpg?_wi=2",
              imageAlt: "serene autumn forest reflection"
            }
          ]}
        />
      </div>

      {/* Email Signup */}
      <EmailSignupSection
        title="Stay Connected with REVYVE"
        subtitle="Join Julie Brainard's monthly somatic wellness notes and retreat announcements."
      />
    </>
  );
}
