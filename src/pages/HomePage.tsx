import HeroShapeSplit from "@/components/sections/hero/HeroShapeSplit";
import PricingScopeColumns from "@/components/sections/pricing/PricingScopeColumns";
import ProcessBentoPanels from "@/components/sections/features/ProcessBentoPanels";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";
import TeamCoverflowCards from "@/components/sections/team/TeamCoverflowCards";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";
import ModelStage from "@/components/kit/ModelStage";
import LoaderWordmarkHandoff from "@/components/loaders/LoaderWordmarkHandoff";

export default function HomePage() {
  return (
    <>
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

      <div id="hero" data-webild-section="HeroShapeSplit" data-webild-section-id="HeroShapeSplit-1" data-section="hero" className="relative z-[45]">
        <HeroShapeSplit
          tag="Revyve to Thryve"
          title="Awaken Your Inner Rhythm"
          description="Somatic movement, breathwork, and deep connection in the serene Hocking Hills."
          primaryButton={{
            text: "View retreats",
            href: "#pricing"
          }}
          secondaryButton={{
            text: "Stay with us",
            href: "#process"
          }}
          scrollLabel="Scroll to explore"
          introDelay={0}
        />
      </div>

      <div id="pricing" data-webild-section="PricingScopeColumns" data-webild-section-id="PricingScopeColumns-1" data-section="pricing" className="relative z-[45]">
        <PricingScopeColumns
          tag="Upcoming"
          title="Gather in the Hills"
          description="Intimate group immersions tailored for personal alignment and deep rest."
          items={[
            {
              title: "Summer",
              description: "Weekend Somatic Immersion",
              price: "$850",
              period: "per guest",
              specs: [
                {
                  label: "Duration",
                  value: "3 days, 2 nights"
                },
                {
                  label: "Dining",
                  value: "Organic meals included"
                },
                {
                  label: "Sessions",
                  value: "Daily somatic & breathwork"
                }
              ],
              button: {
                text: "Book a retreat",
                href: "#contact"
              }
            },
            {
              title: "Autumn",
              description: "Deep Release Intensive",
              price: "$1,200",
              period: "per guest",
              specs: [
                {
                  label: "Duration",
                  value: "5 days, 4 nights"
                },
                {
                  label: "Dining",
                  value: "Organic meals included"
                },
                {
                  label: "Sessions",
                  value: "Guided hikes & sound baths"
                }
              ],
              button: {
                text: "Book a retreat",
                href: "#contact"
              }
            },
            {
              title: "Winter",
              description: "Restorative Weekend",
              price: "$600",
              period: "per guest",
              specs: [
                {
                  label: "Duration",
                  value: "2 days, 1 night"
                },
                {
                  label: "Dining",
                  value: "Organic meals included"
                },
                {
                  label: "Sessions",
                  value: "Guided meditation & rest"
                }
              ],
              button: {
                text: "Book a retreat",
                href: "#contact"
              }
            }
          ]}
        />
      </div>

      <div id="process" data-webild-section="ProcessBentoPanels" data-webild-section-id="ProcessBentoPanels-1" data-section="process" className="relative z-[45]">
        <ProcessBentoPanels
          tag="03 / VENUE"
          title="Designed for Quiet"
          description="Boutique spaces crafted with organic materials to hold space for healing."
          items={[
            {
              title: "The Cottage",
              description: "Warm interior design, soft linens, and natural light framed by forest."
            },
            {
              title: "Serene Views",
              description: "Expansive window framing and peaceful outdoor spaces in Hocking Hills."
            },
            {
              title: "Wellness Kitchen",
              description: "Stocked with organic local teas, whole foods, and nourishing ingredients."
            },
            {
              title: "Organic Design",
              description: "Curated spaces featuring natural wood, tactile stone, and calm earth tones."
            }
          ]}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWordPanels" data-webild-section-id="GalleryWordPanels-1" data-section="gallery" className="relative z-[45]" data-scene>
        <GalleryWordPanels
          label="Sacred Spaces"
          title="Immerse in Restful Sanctuary"
          items={[
            {
              title: "Breath",
              category: "Somatic Breathwork",
              description: "Guided somatic breathing sessions designed to release stored tension and awaken inner calm.",
              imageSrc: "https://img.b2bpic.net/free-photo/autumn-forest-reflected-lake_181624-52280.jpg",
              imageAlt: "serene autumn forest lake landscape"
            },
            {
              title: "Movement",
              category: "Somatic Yoga",
              description: "Gentle flow yoga practices held in timber sanctuary spaces overlooking Hocking Hills forests.",
              imageSrc: "https://img.b2bpic.net/free-photo/nice-leaves-aspen_23-2147829156.jpg",
              imageAlt: "sunlight filtering through green leaves"
            },
            {
              title: "Sanctuary",
              category: "Curated Lodging",
              description: "Thoughtfully designed rooms crafted by Julie Brainard blending organic textures and forest tranquility.",
              imageSrc: "https://img.b2bpic.net/free-photo/dark-forest-trees_395237-133.jpg",
              imageAlt: "mossy tree trunk in forest"
            },
            {
              title: "Nourish",
              category: "Mindful Dining",
              description: "Wholesome seasonal meals served at shared tables to nourish body and foster warmth.",
              imageSrc: "https://img.b2bpic.net/free-photo/high-angle-delicious-food-nature_23-2149212362.jpg",
              imageAlt: "sun rays in misty forest"
            }
          ]}
        />
      </div>

      <div id="team" data-webild-section="TeamCoverflowCards" data-webild-section-id="TeamCoverflowCards-1" data-section="team" className="relative z-[45]">
        <TeamCoverflowCards
          tag="05 / OUR GUIDES"
          title="Held by Experienced Hands"
          subline="Grounded guides for your journey."
          items={[
            {
              name: "Julie Brainard",
              role: "Founder & Somatic Guide",
              imageSrc: "https://img.b2bpic.net/free-photo/medium-shot-smiley-woman-outdoors_23-2149059868.jpg"
            },
            {
              name: "Chloe Webb",
              role: "Breathwork Practitioner",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-with-curly-hair-wearing-earphones-garden-remixed-media_53876-104277.jpg"
            },
            {
              name: "Jacob Reid",
              role: "Sound Healing Guide",
              imageSrc: "https://img.b2bpic.net/free-photo/tourist-man-standing-trolltunga-enjoys-beautiful-view-norwegian-fjord_613910-20632.jpg"
            },
            {
              name: "Rachel Walsh",
              role: "Retreat Experience Host",
              imageSrc: "https://img.b2bpic.net/free-photo/woman-sitting-bike-portrait-young-woman-city-park-riding-bycicle_197531-22656.jpg"
            },
            {
              name: "Natalie Hayes",
              role: "Somatic Yoga Teacher",
              imageSrc: "https://img.b2bpic.net/free-photo/sun-shining-woman-with-curly-hair-surrounded-by-trees-grass_181624-30896.jpg"
            },
            {
              name: "Andre Patel",
              role: "Mindfulness & Movement Lead",
              imageSrc: "https://img.b2bpic.net/free-photo/adventure-seeker-gazes-valley-mountain-peaks-ahead_482257-117983.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPortraitQuote" data-webild-section-id="TestimonialPortraitQuote-1" data-section="testimonial" className="relative z-[45]">
        <TestimonialPortraitQuote
          label="Guest Stories"
          title="Words from Our Guests"
          items={[
            {
              quote: "REVYVE completely shifted how I hold stress in my body. The space itself is pure calm.",
              name: "Rachel Walsh",
              role: "Retreat Guest",
              imageSrc: "https://img.b2bpic.net/free-photo/young-girl-walking-autumn-park_1328-1181.jpg",
              imageAlt: "young girl walking in autumn park"
            },
            {
              quote: "The most restorative weekend I have spent anywhere. Julie's presence sets everyone at ease.",
              name: "Jacob Reid",
              role: "Retreat Guest",
              imageSrc: "https://img.b2bpic.net/free-photo/vertical-shot-man-wearing-red-hat-standing-wooden-fence-with-mountains_181624-26479.jpg",
              imageAlt: "Vertical shot of a man wearing a red hat and standing on a wooden fence with mountains"
            },
            {
              quote: "Julie's guidance through breathwork helped me release years of quiet tension.",
              name: "Chloe Webb",
              role: "Retreat Guest",
              imageSrc: "https://img.b2bpic.net/free-photo/side-view-woman-with-backpack-adventure-nature_23-2148647964.jpg",
              imageAlt: "Side view of woman with backpack on adventure in nature"
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactUnderlineForm" data-webild-section-id="ContactUnderlineForm-1" data-section="contact" className="relative z-[45]">
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
              placeholder: "Share desired retreat dates or venue details",
              required: true
            }
          ]}
          servicesLabel="Inquiry Type"
          services={[
            "Weekend Retreat",
            "Private Booking",
            "Venue Rental",
            "Somatic Yoga",
            "General Stay"
          ]}
          button={{
            text: "Send Inquiry"
          }}
        />
      </div>
    </>
  );
}
