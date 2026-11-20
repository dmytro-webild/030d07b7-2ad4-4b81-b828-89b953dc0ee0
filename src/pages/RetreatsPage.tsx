import OfferingsSection from "@/components/revyve/OfferingsSection";
import PricingScopeColumns from "@/components/sections/pricing/PricingScopeColumns";
import EmailSignupSection from "@/components/revyve/EmailSignupSection";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";

export default function RetreatsPage() {
  return (
    <>
      {/* Retreats Hero Banner */}
      <section className="relative pt-[clamp(7rem,16svh,10rem)] pb-12 text-foreground">
        <div className="mx-auto w-[var(--container)]">
          <div className="flex flex-col items-start max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
              Retreat Immersions & Offerings
            </span>
            <h1 className="font-serif text-[length:var(--text-h1)] leading-none tracking-tight mb-6">
              Transformative Retreats in Hocking Hills
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Step away from the demands of modern life and enter a space crafted for somatic movement, deep release, and spiritual elevation led by founder Julie Brainard.
            </p>
          </div>
        </div>
      </section>

      {/* The 6 Core Offerings Section */}
      <OfferingsSection />

      {/* Upcoming Retreat Pricing & Booking Cards */}
      <div id="pricing" className="relative z-[45]">
        <PricingScopeColumns
          tag="Upcoming Immersion Immersions"
          title="Reserve Your Retreat Experience"
          description="Intimate group retreats held at our Hocking Hills sanctuary. All meals, somatic sessions, and lodging included."
          items={[
            {
              title: "Summer Somatic",
              description: "Immersion & Nervous System Reset",
              price: "$850",
              period: "per guest",
              specs: [
                {
                  label: "Duration",
                  value: "3 Days, 2 Nights"
                },
                {
                  label: "Practices",
                  value: "Somatic Yoga & Breathwork"
                },
                {
                  label: "Lodging",
                  value: "Sanctuary Cabin included"
                },
                {
                  label: "Nourishment",
                  value: "Organic farm-to-table dining"
                }
              ],
              button: {
                text: "Book a Retreat",
                href: "#book"
              }
            },
            {
              title: "Autumn Release",
              description: "Deep Rest & Forest Bathing Intensive",
              price: "$1,200",
              period: "per guest",
              specs: [
                {
                  label: "Duration",
                  value: "5 Days, 4 Nights"
                },
                {
                  label: "Practices",
                  value: "Sound Bath & Shinrin-Yoku"
                },
                {
                  label: "Lodging",
                  value: "Treehouse or A-Frame loft"
                },
                {
                  label: "Nourishment",
                  value: "All organic meals & tea bar"
                }
              ],
              button: {
                text: "Book a Retreat",
                href: "#book"
              }
            },
            {
              title: "Winter Renewal",
              description: "Quiet Reflection & Sacred Fire Weekend",
              price: "$600",
              period: "per guest",
              specs: [
                {
                  label: "Duration",
                  value: "2 Days, 1 Night"
                },
                {
                  label: "Practices",
                  value: "Breathwork & Silent DJ Journey"
                },
                {
                  label: "Lodging",
                  value: "Boutique timber suite"
                },
                {
                  label: "Nourishment",
                  value: "Warm herbal dining & elixirs"
                }
              ],
              button: {
                text: "Book a Retreat",
                href: "#book"
              }
            }
          ]}
        />
      </div>

      {/* Retreat Booking Form */}
      <div id="book" className="relative z-[45]">
        <ContactUnderlineForm
          title="Book Your Retreat Spot"
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
              placeholder: "you@domain.com",
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
              label: "Retreat Interests & Requirements",
              type: "textarea",
              placeholder: "Please share which retreat immersion you wish to attend or any dietary/lodging preferences.",
              required: true
            }
          ]}
          servicesLabel="Select Offering"
          services={[
            "Summer Somatic Immersion",
            "Autumn Release Intensive",
            "Winter Renewal Weekend",
            "Corporate Wellness",
            "Private Breathwork Session"
          ]}
          button={{
            text: "Submit Retreat Booking Request"
          }}
        />
      </div>

      {/* Email Signup Form */}
      <EmailSignupSection
        title="Join the REVYVE Journey"
        subtitle="Subscribe for upcoming retreat date announcements, somatic practices, and early registration discounts."
      />
    </>
  );
}
