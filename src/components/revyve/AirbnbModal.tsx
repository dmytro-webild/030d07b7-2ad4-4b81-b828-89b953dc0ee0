import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type AirbnbModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AirbnbModal({ isOpen, onClose }: AirbnbModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-background border border-border p-6 sm:p-8 shadow-2xl text-foreground"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 hover:bg-foreground hover:text-background transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-foreground mb-4">
                <span className="size-2 rounded-full bg-accent animate-pulse" />
                Sanctuary Stays
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl tracking-tight mb-3">
                Coming Soon to Airbnb!
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mb-6">
                Our Hocking Hills sanctuary cabins—the Matte Black A-Frame and Luxury Two-Story Treehouse—will soon be live for direct Airbnb reservations. Join our VIP waitlist to receive priority access to open dates and exclusive launch discounts.
              </p>

              {/* Form / Submitted state */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full rounded-2xl bg-accent/15 border border-accent/40 p-4 text-center"
                >
                  <p className="font-serif text-lg font-medium text-foreground mb-1">
                    You're on the VIP list!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    We'll email you at <span className="font-mono text-foreground">{email}</span> as soon as Airbnb dates open.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-full border border-border bg-card/60 px-5 py-3 text.sm placeholder:text-muted-foreground outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary text-primary-foreground py-3 px-6 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent hover:text-accent-foreground transition-colors shadow-md"
                  >
                    Notify Me When Available
                  </button>
                </form>
              )}

              <p className="mt-4 font-mono text-[0.65rem] text-muted-foreground/80 uppercase tracking-wider">
                Hocking Hills, Ohio • REVYVE Sanctuary
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
