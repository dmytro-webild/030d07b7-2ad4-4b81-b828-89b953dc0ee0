import VenueCabinsSection from "@/components/revyve/VenueCabinsSection";
import EmailSignupSection from "@/components/revyve/EmailSignupSection";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";

export default function VenuePage() {
  return (
    <>
      {/* Venue Hero Banner */}
      <section className="relative pt-[clamp(7rem,16svh,10rem)] pb-12 text-foreground">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
              Venue & Sanctuary Stay
            </span>
            <h1 className="font-serif text-[length:var(--text-h1)] leading-none tracking-tight mb-6">
              The REVYVE Sanctuary
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Experience boutique lodging and sacred event grounds in Hocking Hills, Ohio. Whether staying in our architectural Matte Black A-Frame, floating in our Luxury Two-Story Treehouse, or hosting a private wellness gathering, REVYVE provides an unforgettable sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Cabins & Airbnb Interest Popup Section */}
      <VenueCabinsSection />

      {/* Venue Inquiry Form */}
      <div id="venue-inquiry" className="relative z-[45]">
        <ContactUnderlineForm
          title="Reserve the Venue or Private Stay"
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
              name: "guests",
              label: "Estimated Guest Count / Dates",
              placeholder: "Desired stay dates & guest count"
            },
            {
              name: "message",
              label: "Stay or Event Details",
              type: "textarea",
              placeholder: "Tell us about your event, wedding, corporate retreat, or lodging reservation request.",
              required: true
            }
          ]}
          servicesLabel="Booking Type"
          services={[
            "Matte Black A-Frame Stay",
            "Luxury Treehouse Stay",
            "Full Venue Rental",
            "Wedding Event",
            "Corporate Wellness Event"
          ]}
          button={{
            text: "Submit Venue Reservation Inquiry"
          }}
        />
      </div>

      {/* Email Signup Form */}
      <EmailSignupSection
        title="Join the REVYVE Journey"
        subtitle="Sign up for priority booking windows, sanctuary cabin updates, and upcoming Airbnb availability."
      />
    </>
  );
}
