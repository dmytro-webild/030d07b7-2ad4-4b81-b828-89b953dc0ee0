"use client";

import { useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import useMenuDialog from "@/components/kit/useMenuDialog";

import CloverLogo from "@/components/ui/CloverLogo";

type NavItem = { name: string; href: string };

type NavbarMenuPillProps = {
  brand?: string;
  mark?: string;
  navItems?: NavItem[];
  contact?: { text: string; href: string };
  menuText?: string;
  closeText?: string;
};

const EXPO_OUT = [0.19, 1, 0.22, 1] as const;

const NavbarMenuPill = ({
  brand = "Ostra",
  mark,
  navItems = [
    { name: "Studio", href: "#about" },
    { name: "Work", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  contact = { text: "hello@ostra.studio", href: "mailto:hello@ostra.studio" },
  menuText = "Menu",
  closeText = "Close",
}: NavbarMenuPillProps) => {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const hidden = useRef(false);
  const y = useMotionValue("0%");
  const { scrollY } = useScroll();
  useMenuDialog(open, panelRef, () => setOpen(false));

  useMotionValueEvent(scrollY, "change", (v) => {
    setIsScrolled(v > 40);
    const prev = scrollY.getPrevious() ?? 0;
    const hide = v > 120 && v > prev;
    if (hide === hidden.current) return;
    hidden.current = hide;
    animate(y, hide ? "-110%" : "0%", { duration: reduce ? 0 : 0.6, ease: EXPO_OUT });
  });

  return (
    <>
      <motion.nav
        aria-label="Main"
        style={{ y: open ? "0%" : y }}
        className={`fixed inset-x-0 top-0 flex items-center justify-between py-[1.25rem] pl-[0.75rem] pr-[1.25rem] text-foreground lg:pl-[1.5rem] ${open ? "z-[56]" : "z-50"}`}
      >
        <a href="/" className="flex min-w-0 items-center gap-[0.75rem] group bg-[#1c201d]/85 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#1e3a2b]/60 shadow-lg transition-all duration-300 hover:border-[#e5aa24]/60">
          <div className="relative size-8 shrink-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isScrolled ? (
                <motion.div
                  key="star-logo"
                  initial={{ opacity: 0, scale: 0.7, rotate: -60 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: 60 }}
                  transition={{ duration: 0.35, ease: EXPO_OUT }}
                  className="relative size-8 rounded-full overflow-hidden border border-[#e5aa24]/70 shadow-[0_0_12px_rgba(229,170,36,0.35)]"
                >
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3MHUulfpl4c0IR72KBuyVPRP4VJ/uploaded-1795146930469-sovebs4e.webp"
                    alt="REVYVE Black Spinning Star Sri Yantra Logo"
                    className="size-full object-cover animate-[spin_10s_linear_infinite]"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="clover-logo"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.35, ease: EXPO_OUT }}
                >
                  <CloverLogo className="size-8 text-[#e5aa24] shrink-0 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_2px_8px_rgba(229,170,36,0.5)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-start leading-none pr-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate font-serif text-[length:var(--text-body-lg)] font-bold tracking-tight text-[#faf7f2]">{brand}</p>
              <span className="inline-block size-1.5 rounded-full bg-[#e5aa24]" />
            </div>
            {mark ? (
              <p className="text-[length:var(--text-label)] text-[#e5aa24] font-semibold">{mark}</p>
            ) : (
              <span className="text-[0.65rem] font-mono tracking-widest text-[#8c5a3c] font-semibold uppercase">
                {isScrolled ? "Sri Yantra Star" : "Clover Sanctuary"}
              </span>
            )}
          </div>
        </a>

        <div className="flex items-center gap-3">
          <a
            href={contact?.href || "/retreats"}
            className="hidden sm:inline-flex items-center justify-center min-h-[2.5rem] px-5 rounded-full bg-[#e5aa24] text-[#1c201d] font-mono text-[0.7rem] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#1e3a2b] hover:text-[#faf7f2] shadow-md border border-[#e5aa24]/40"
          >
            {contact?.text || "Book a Retreat"}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? closeText : menuText}
            onClick={() => setOpen((value) => !value)}
            className="flex h-[2.75rem] shrink-0 items-center justify-center gap-[0.5625rem] rounded-full border border-[#e5aa24]/40 px-[1.0625rem] bg-[#1e3a2b]/90 text-[#faf7f2] backdrop-blur-md transition-colors duration-300 hover:bg-[#8c5a3c] hover:text-[#faf7f2] shadow-md"
          >
            <div aria-hidden="true" className="grid font-mono text-[length:var(--text-label)] uppercase leading-none font-semibold">
              <p className={`col-start-1 row-start-1 transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}>{menuText}</p>
              <p className={`col-start-1 row-start-1 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>{closeText}</p>
            </div>
            <div aria-hidden="true" className="relative h-[0.5rem] w-[1.125rem] text-[#e5aa24]">
              <div className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <div className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={menuText}
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease: EXPO_OUT }}
            className="fixed inset-0 z-[55] flex flex-col bg-background px-[var(--gutter)] pb-[clamp(1.5rem,4svh,2.5rem)] pt-[clamp(6.5rem,16svh,9rem)] text-foreground"
          >
            <ul className="mx-auto flex w-[var(--container)] flex-col gap-[clamp(0.25rem,1svh,0.75rem)] overflow-y-auto">
              {navItems.map((item, i) => (
                <li key={`${i}-${item.href}`} className="border-b border-border pb-[clamp(0.25rem,1svh,0.75rem)]">
                  <a href={item.href} onClick={() => setOpen(false)} className="group flex items-start gap-[clamp(0.75rem,2vw,1.5rem)]">
                    <p className="pt-[0.6em] font-mono text-[length:var(--text-label)] text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                    <div className="overflow-hidden pb-[0.15em] -mb-[0.15em]">
                      <motion.p
                        initial={reduce ? false : { y: "110%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 1, ease: EXPO_OUT, delay: 0.2 + i * 0.06 }}
                        className="text-[length:var(--text-h2)] leading-none tracking-[-0.045em] [overflow-wrap:anywhere] transition-colors duration-300 group-hover:text-accent"
                      >
                        {item.name}
                      </motion.p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            {contact && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.4 }}
                className="mx-auto mt-auto flex w-[var(--container)] justify-between gap-[1rem] pt-[2rem] font-mono text-[length:var(--text-label)] uppercase"
              >
                <a href={contact.href} className="btn-link normal-case">
                  {contact.text}
                </a>
                <p className="text-muted-foreground">{brand}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMenuPill;
