import { Fragment, useEffect, useRef, useState, type PointerEvent } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useImageReady, useKitMotion } from "@/components/kit/kitMotion";
import CoverflowTeam from "@/components/library/scenes/team/CoverflowTeam";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Member = { name: string; role?: string; imageSrc: string; imageAlt?: string };

type TeamCoverflowCardsProps = {
  tag?: string;
  title?: string;
  subline?: string;
  items?: Member[];
  ariaLabel?: string;
  className?: string;
};

const photo = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&w=900`;

const defaultItems: Member[] = [
  { name: "Freja Lindholm", role: "Founder, creative director", imageSrc: photo(1036623) },
  { name: "Mads Kjær", role: "Design lead", imageSrc: photo(220453) },
  { name: "Ida Thorsen", role: "Brand strategist", imageSrc: photo(7900679) },
  { name: "Jonas Wolff", role: "Creative developer", imageSrc: photo(8801041) },
  { name: "Sofie Brandt", role: "Motion designer", imageSrc: photo(8727530) },
];

const Arrow = ({ flip }: { flip?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className={cn("size-[1rem]", flip && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M2 8h12M9 3l5 5-5 5" />
  </svg>
);

const TeamCoverflowCards = ({
  tag = "07 / The team",
  title = "The studio behind the work.",
  subline = "Five people. One standard.",
  items = defaultItems,
  ariaLabel,
  className,
}: TeamCoverflowCardsProps) => {
  const reduce = useReducedMotion() ?? false;
  const kit = useKitMotion();
  const count = items.length;
  const loop = count > 2;
  const [active, setActive] = useState(0);
  const index = useMotionValue(0);
  const spring = useSpring(index, { stiffness: 120, damping: 22, mass: 0.8 });
  const flow = useTransform(spring, (v) => (loop ? v : count > 1 ? v / (count - 1) : 0.5));
  const drag = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stageInView = useInView(stageRef, { once: true, margin: "0px 0px -10% 0px" });
  const stageReady = useImageReady(stageRef, stageInView);
  const words = title ? title.split(/\s+/) : [];
  const labelSteps = tag.length;

  useEffect(() => {
    index.set(active);
  }, [active, index]);

  if (!count) return null;

  const shown = ((active % count) + count) % count;
  const go = (dir: number) => setActive((a) => (loop ? a + dir : Math.min(count - 1, Math.max(0, a + dir))));

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const start = drag.current;
    drag.current = null;
    if (start === null) return;
    const dx = e.clientX - start;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const cards = items.map((item, i) => ({
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt ?? item.name,
    caption: (
      <div className={cn("flex flex-col gap-[0.25rem] px-[0.25rem] pb-[0.25rem] pt-[0.875rem]", i !== shown && "invisible")}>
        <h3 className="truncate text-[length:var(--text-body-lg)] leading-[1.2] tracking-[-0.03em]">{item.name}</h3>
        {item.role && <p className="truncate font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-[1.5] text-muted-foreground">{item.role}</p>}
      </div>
    ),
  }));

  const current = items[shown];

  return (
    <section
      aria-label={ariaLabel ?? title ?? "Team"}
      className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}
    >
      <div className="kit-glass mx-auto w-[var(--container)] p-[1.375rem] lg:p-[clamp(2rem,3.5vw,3.5rem)]">
      <div className="flex flex-col">
        <div className="flex items-center gap-[0.875rem]">
          <motion.p
            initial={reduce ? false : { clipPath: "inset(0% 100% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true }}
            transition={{ duration: labelSteps * 0.02, ease: (t: number) => Math.ceil(t * labelSteps) / labelSteps }}
            className="whitespace-nowrap font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-[1.5]"
          >
            {tag}
          </motion.p>
        </div>

        <div className="mt-[1.75rem] flex flex-col gap-[1.5rem] lg:mt-[2.5rem] lg:flex-row lg:items-center lg:justify-between lg:gap-[3rem]">
          <h2 className="min-w-0 max-w-[13em] text-balance text-[length:var(--text-h2)] [overflow-wrap:anywhere]">
            {words.map((word, i) => (
              <Fragment key={i}>
                <div className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
                  <motion.div
                    initial={reduce ? false : { y: "110%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: kit.base, ease: kit.ease, delay: labelSteps * 0.02 + i * 0.04 }}
                    className="inline-block"
                  >
                    {word}
                  </motion.div>
                </div>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </h2>
        </div>

        <div className="mt-[1.5rem] flex items-center justify-between gap-[1.5rem] lg:mt-[1rem]">
          {subline && <p className="min-w-0 font-[family-name:var(--font-label)] text-[length:var(--text-label)] uppercase leading-[1.5]">{subline}</p>}
          {count > 1 && (
            <div className="ml-auto flex shrink-0 gap-[0.75rem]">
              <button type="button" aria-label="Previous" onClick={() => go(-1)} className="grid size-[3rem] place-items-center rounded-full border border-foreground/25 transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background">
                <Arrow flip />
              </button>
              <button type="button" aria-label="Next" onClick={() => go(1)} className="grid size-[3rem] place-items-center rounded-full border border-foreground/25 transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background">
                <Arrow />
              </button>
            </div>
          )}
        </div>
      </div>

      <motion.div
        ref={stageRef}
        initial={reduce ? false : "hide"}
        animate={reduce || (stageInView && stageReady) ? "show" : "hide"}
        onPointerDown={(e) => (drag.current = e.clientX)}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current = null)}
        className="mt-[clamp(1.5rem,3vw,3rem)] w-full cursor-grab touch-pan-y select-none active:cursor-grabbing"
      >
        <motion.div
          variants={{ hide: { clipPath: "inset(100% 0% 0% 0%)" }, show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: kit.slow, ease: kit.ease } } }}
        >
        {reduce ? (
          <div className="mx-auto flex w-[clamp(13rem,30vw,22rem)] flex-col bg-card p-[0.625rem]">
            <Media src={current.imageSrc} alt={current.imageAlt ?? current.name} draggable={false} loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
            {cards[shown].caption}
          </div>
        ) : (
          <CoverflowTeam
            angle={38}
            items={cards}
            flowProgress={flow}
            flowStep={64}
            flowLoop={loop}
            className="h-[clamp(22rem,52vw,36rem)]"
            stageClassName="aspect-[3/4.2] h-full"
            cardClassName="rounded-none bg-card p-[0.625rem]"
            imageFrameClassName="rounded-none"
          />
        )}
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default TeamCoverflowCards;
