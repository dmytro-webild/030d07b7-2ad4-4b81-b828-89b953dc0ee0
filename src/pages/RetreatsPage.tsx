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
            <span className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold mb-3">
              Retreat Immersions & Waitlist
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

      {/* Upcoming Retreat Early Access & Waitlist Section */}
      <div id="pricing" className="relative z-[45]">
        <PricingScopeColumns
          tag="Upcoming Immersions"
          title="Retreat Dates Coming Soon"
          description="We are curating our upcoming season of intimate somatic retreats and sanctuary resets in Hocking Hills. Specific retreat dates are coming soon—get on the list now for early access and priority booking."
          items={[
            {
              title: "Summer & Fall Immersions",
              description: "Somatic Movement & Nervous System Resets",
              price: "Dates Coming Soon",
              period: "Early Access Waitlist Open",
              specs: [
                {
                  label: "Practices",
                  value: "Somatic Yoga, Breathwork & Sound Baths"
                },
                {
                  label: "Lodging",
                  value: "Sanctuary Cabins, Treehouse & A-Frames"
                },
                {
                  label: "Nourishment",
                  value: "Organic farm-to-table dining included"
                },
                {
                  label: "Waitlist Perk",
                  value: "First priority cabin selection & early bird window"
                }
              ],
              button: {
                text: "Join Early Access Waitlist",
                href: "#book"
              }
            },
            {
              title: "Winter & Spring Resets",
              description: "Deep Rest & Sacred Fireplace Journeys",
              price: "Dates Coming Soon",
              period: "Early Access Waitlist Open",
              specs: [
                {
                  label: "Practices",
                  value: "Shinrin-Yoku, Fire Circles & Breathwork"
                },
                {
                  label: "Lodging",
                  value: "Luxury Timber Suites & Heated Cabins"
                },
                {
                  label: "Nourishment",
                  value: "Warm herbal dining, teas & elixirs"
                },
                {
                  label: "Waitlist Perk",
                  value: "Direct VIP email invitation prior to public launch"
                }
              ],
              button: {
                text: "Join Early Access Waitlist",
                href: "#book"
              }
            },
            {
              title: "Private Group Retreats",
              description: "Bespoke Gatherings & Sacred Circles",
              price: "Inquire For Dates",
              period: "Custom Booking Available",
              specs: [
                {
                  label: "Capacity",
                  value: "Intimate groups of 6 to 16 guests"
                },
                {
                  label: "Customization",
                  value: "Tailored movement, meals & sound sessions"
                },
                {
                  label: "Exclusive Access",
                  value: "Full private reservation of sanctuary grounds"
                },
                {
                  label: "Booking Status",
                  value: "Now accepting custom group inquiries"
                }
              ],
              button: {
                text: "Inquire For Private Group",
                href: "#book"
              }
            }
          ]}
        />
      </div>

      {/* Early Access Waitlist Form */}
      <div id="book" className="relative z-[45]">
        <ContactUnderlineForm
          title="Get On The Early Access List"
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
              label: "Retreat Preferences & Questions",
              type: "textarea",
              placeholder: "Let us know which season you are interested in or if you have any questions about our retreat offerings.",
              required: true
            }
          ]}
          servicesLabel="Select Preferred Season"
          services={[
            "Summer & Fall Immersions (Waitlist)",
            "Winter & Spring Resets (Waitlist)",
            "Private Group Retreat Inquiry",
            "General Early Access Updates"
          ]}
          button={{
            text: "Join Early Access Waitlist"
          }}
        />
      </div>

      {/* Email Signup Form */}
      <EmailSignupSection
        title="Be The First To Know"
        subtitle="Subscribe to receive instant notifications when new retreat dates and registration windows open."
      />
    </>
  );
}
