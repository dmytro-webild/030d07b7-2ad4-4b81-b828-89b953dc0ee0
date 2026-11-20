import { Outlet } from "react-router-dom";
import NavbarMenuPill from "@/components/navbars/NavbarMenuPill";
import FooterWordmarkLanding from "@/components/sections/footer/FooterWordmarkLanding";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarMenuPill
          brand="REVYVE"
          logoSrc="https://storage.googleapis.com/webild/users/user_3MHUulfpl4c0IR72KBuyVPRP4VJ/uploaded-1795146001693-d4b3no21.webp"
          navItems={[
            {
              name: "Home",
              href: "/"
            },
            {
              name: "Retreats",
              href: "/retreats"
            },
            {
              name: "Venue & Stay",
              href: "/venue"
            },
            {
              name: "About",
              href: "/about"
            },
            {
              name: "Contact",
              href: "/contact"
            }
          ]}
          contact={{
            text: "Book a Retreat",
            href: "/retreats"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer" className="relative z-[45]">
        <FooterWordmarkLanding
          brand="REVYVE"
          links={[
            {
              text: "Privacy Policy",
              href: "#"
            },
            {
              text: "Terms of Service",
              href: "#"
            },
            {
              text: "Contact Us",
              href: "#contact"
            }
          ]}
          tagline="Revyve to Thryve — Somatic movement, breathwork, and sanctuary in Hocking Hills."
          copyright="© 2026 REVYVE. All rights reserved."
        />
      </footer>
    </div>
  );
}
