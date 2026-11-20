import { useState } from "react";
import { motion } from "motion/react";

type EmailSignupSectionProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function EmailSignupSection({
  title = "Join the REVYVE Journey",
  subtitle = "Subscribe for exclusive retreat announcements, somatic wellness rituals, and early sanctuary cabin reservation access in Hocking Hills.",
  className = "",
}: EmailSignupSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className={`relative py-[clamp(3.5rem,6vw,5.5rem)] text-foreground ${className}`}>
      <div className="mx-auto w-[var(--container)]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2e5440] via-[#1c201d] to-[#9c6849] border border-[#f4d35e]/50 p-8 sm:p-12 md:p-16 text-center shadow-2xl text-[#faf7f2]">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-[#f4d35e]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-[#9c6849]/30 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[#f4d35e] bg-[#f4d35e]/10 border border-[#f4d35e]/30 px-3.5 py-1 rounded-full mb-3 font-bold">
              Inner Circle • Hocking Hills, OH
            </span>

            <h2 className="font-serif text-[length:var(--text-h2)] leading-tight tracking-tight mb-4 text-[#faf7f2]">
              {title}
            </h2>

            <p className="text-[#d2c7b5] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md rounded-2xl bg-[#2e5440] border border-[#f4d35e]/50 p-5 text-center text-[#faf7f2]"
              >
                <p className="font-serif text-xl font-bold mb-1 text-[#f4d35e]">
                  Welcome to the REVYVE Community!
                </p>
                <p className="text-xs text-[#d2c7b5]">
                  We've reserved a special place for you. Look out for updates at <span className="font-mono text-[#faf7f2] font-semibold">{email}</span>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full border border-[#f4d35e]/40 bg-[#1c201d]/90 text-[#faf7f2] backdrop-blur-sm px-6 py-3.5 text-sm placeholder:text-[#d2c7b5]/60 outline-none focus:border-[#f4d35e] transition-colors"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#f4d35e] text-[#1c201d] py-3.5 px-8 font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#faf7f2] hover:text-[#2e5440] transition-all duration-300 shrink-0 shadow-lg"
                >
                  Join Now
                </button>
              </form>
            )}

            <p className="mt-4 font-mono text-[0.65rem] text-[#d2c7b5] uppercase tracking-wider">
              No spam. Only intentional invitations & somatic wellness wisdom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
