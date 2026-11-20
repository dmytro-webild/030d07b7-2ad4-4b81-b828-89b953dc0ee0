import EmailSignupSection from "@/components/revyve/EmailSignupSection";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero Banner */}
      <section className="relative pt-[clamp(7rem,16svh,10rem)] pb-12 text-foreground">
        <div className="mx-auto w-[var(--container)]">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
                Get in Touch
              </span>
              <h1 className="font-serif text-[length:var(--text-h1)] leading-none tracking-tight mb-6">
                Connect with REVYVE
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                Whether inquiring about retreat bookings, venue rentals for weddings or corporate events, or private somatic sessions with Julie Brainard, we welcome your message.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 bg-card/80 border border-border p-6 rounded-3xl">
              <div>
                <span className="font-mono text-xs uppercase text-muted-foreground block mb-1">Sanctuary Location</span>
                <p className="font-serif text-lg font-medium">Hocking Hills, Ohio</p>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="font-mono text-xs uppercase text-muted-foreground block mb-1">Direct Contact</span>
                <p className="font-sans text-sm text-foreground">hello@revyveretreats.com</p>
                <p className="font-sans text-sm text-foreground">(740) 385-2100</p>
              </div>
              <div className="pt-3 border-t border-border/60">
                <span className="font-mono text-xs uppercase text-muted-foreground block mb-1">Response Time</span>
                <p className="font-sans text-xs text-muted-foreground">Within 24-48 business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <div id="contact" className="relative z-[45]">
        <ContactUnderlineForm
          title="Begin Your REVYVE Journey"
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
              placeholder: "hello@revyve.com",
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
              placeholder: "Share desired retreat dates, cabin stay preferences, or event details.",
              required: true
            }
          ]}
          servicesLabel="Inquiry Subject"
          services={[
            "Retreat Booking",
            "Matte Black A-Frame Stay",
            "Two-Story Treehouse Stay",
            "Wedding Event",
            "Corporate Wellness",
            "General Inquiry"
          ]}
          button={{
            text: "Send Message to REVYVE"
          }}
        />
      </div>

      {/* Email Signup Form */}
      <EmailSignupSection
        title="Join the REVYVE Journey"
        subtitle="Subscribe for exclusive updates, somatic wellness guides, and early access to upcoming retreat dates."
      />
    </>
  );
}
