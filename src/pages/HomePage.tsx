import HeroShapeSplit from "@/components/sections/hero/HeroShapeSplit";
import SriYantraPhilosophy from "@/components/revyve/SriYantraPhilosophy";
import CeoBiography from "@/components/revyve/CeoBiography";
import OfferingsSection from "@/components/revyve/OfferingsSection";
import VenueCabinsSection from "@/components/revyve/VenueCabinsSection";
import EmailSignupSection from "@/components/revyve/EmailSignupSection";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";
import ModelStage from "@/components/kit/ModelStage";
import LoaderWordmarkHandoff from "@/components/loaders/LoaderWordmarkHandoff";

export default function HomePage() {
  return (
    <>
      {/* 3D Ambient Element */}
      <ModelStage
        shape="petals"
        fixed={{
          sm: {
            y: 0.8,
            scale: 0.7
          },
          scroll: {
            rotate: 540,
            tilt: 14,
            scale: 0.08,
            x: 0.05
          }
        }}
        dpr={{
          lg: 1.5,
          sm: 1.25
        }}
      />

      <LoaderWordmarkHandoff
        brand="REVYVE"
      />

      {/* Hero Section */}
      <div id="hero" data-webild-section="HeroShapeSplit" data-webild-section-id="HeroShapeSplit-1" data-section="hero" className="relative z-[45]">
        <HeroShapeSplit
          tag="Revyve to Thryve • Hocking Hills, OH"
          title="Awaken Your Inner Harmony"
          description="A boutique wellness retreat brand, sanctuary lodging, and event venue led by founder Julie Brainard. Discover somatic yoga, breathwork, and transformational healing in nature."
          primaryButton={{
            text: "Book Airbnb Now",
            href: "#venue"
          }}
          secondaryButton={{
            text: "Explore Retreats",
            href: "/retreats"
          }}
          backgroundImageSrc="https://img.b2bpic.net/free-photo/dark-forest-trees_395237-133.jpg"
          scrollLabel="Scroll to discover sanctuary"
          introDelay={0}
        />
      </div>

      {/* Sri Yantra Sacred Geometry Philosophy */}
      <div id="philosophy" data-webild-section="SriYantraPhilosophy" data-section="philosophy" className="relative z-[45]">
        <SriYantraPhilosophy />
      </div>

      {/* Founder & CEO Biography Section */}
      <div id="about" data-webild-section="CeoBiography" data-section="about" className="relative z-[45]">
        <CeoBiography />
      </div>

      {/* 6 Core Offerings Section */}
      <div id="offerings" data-webild-section="OfferingsSection" data-section="offerings" className="relative z-[45]">
        <OfferingsSection />
      </div>

      {/* Venue & Cabins Lodging Section (With Airbnb Coming Soon Popup) */}
      <div id="venue" data-webild-section="VenueCabinsSection" data-section="venue" className="relative z-[45]">
        <VenueCabinsSection />
      </div>

      {/* Guest Stories / Testimonials */}
      <div id="testimonial" data-webild-section="TestimonialPortraitQuote" data-webild-section-id="TestimonialPortraitQuote-1" data-section="testimonial" className="relative z-[45]">
        <TestimonialPortraitQuote
          label="Sanctuary Experiences"
          title="Guest Stories & Testimonials"
          items={[
            {
              quote: "REVYVE completely shifted how I hold stress in my body. Julie's breathwork and the serene Hocking Hills backdrop created space for true healing.",
              name: "Rachel Walsh",
              role: "Retreat Guest",
              imageSrc: "https://img.b2bpic.net/free-photo/young-girl-walking-autumn-park_1328-1181.jpg",
              imageAlt: "Retreat guest walking in Hocking Hills autumn forest"
            },
            {
              quote: "Staying in the Matte Black A-frame cabin was pure magic. The architectural detail, outdoor soaking tub, and tree canopy views are unmatched.",
              name: "Jacob Reid",
              role: "Sanctuary Stay Guest",
              imageSrc: "https://img.b2bpic.net/free-photo/vertical-shot-man-wearing-red-hat-standing-wooden-fence-with-mountains_181624-26479.jpg",
              imageAlt: "Guest standing near Hocking Hills scenic overlook"
            },
            {
              quote: "Julie's guidance through somatic yoga and the Silent DJ starlight session brought our corporate team closer than ever. Truly unforgettable.",
              name: "Chloe Webb",
              role: "Corporate Retreat Leader",
              imageSrc: "https://img.b2bpic.net/free-photo/side-view-woman-with-backpack-adventure-nature_23-2148647964.jpg",
              imageAlt: "Corporate retreat leader on nature walk"
            }
          ]}
        />
      </div>

      {/* Join the REVYVE Journey Email Signup */}
      <div id="signup" data-webild-section="EmailSignupSection" data-section="signup" className="relative z-[45]">
        <EmailSignupSection
          title="Join the REVYVE Journey"
          subtitle="Subscribe for exclusive retreat announcements, somatic wellness practices, and priority access to Airbnb sanctuary cabin bookings."
        />
      </div>

      {/* Contact & Inquiry Form */}
      <div id="contact" data-webild-section="ContactUnderlineForm" data-webild-section-id="ContactUnderlineForm-1" data-section="contact" className="relative z-[45]">
        <ContactUnderlineForm
          title="Begin Your REVYVE Experience"
          fields={[
            {
              name: "name",
              label: "Full Name",
              placeholder: "Your full name",
              required: true
            },
            {
              name: "email",
              label: "Email Address",
              type: "email",
              placeholder: "hello@revyveretreats.com",
              required: true
            },
            {
              name: "phone",
              label: "Phone Number",
              type: "tel",
              placeholder: "(740) 385-2100"
            },
            {
              name: "message",
              label: "Inquiry Details",
              type: "textarea",
              placeholder: "Share desired retreat dates, cabin stay preferences, or event venue details.",
              required: true
            }
          ]}
          servicesLabel="Inquiry Type"
          services={[
            "Healing Retreat",
            "Corporate Wellness",
            "Wedding Event",
            "Yoga & Breathwork",
            "Forest Therapy",
            "Silent DJ Party",
            "Cabin Reservation"
          ]}
          button={{
            text: "Send Inquiry to REVYVE"
          }}
        />
      </div>
    </>
  );
}
