import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import entrance from "@/assets/synapse-entrance.png.asset.json";

function Panel({
  side,
  scale,
  x,
}: {
  side: "left" | "right";
  scale: ReturnType<typeof useTransform<number, number>>;
  x: ReturnType<typeof useTransform<number, number>>;
}) {
  return (
    <motion.div
      className="absolute top-0 h-full w-1/2 overflow-hidden"
      style={{ [side]: 0, x } as never}
    >
      <div
        className="absolute top-0 h-full w-[200%]"
        style={{ left: side === "left" ? 0 : "-100%" }}
      >
        <motion.img
          src={entrance.url}
          alt="The entrance to the Synapse Advertising office"
          className="h-full w-full object-cover"
          style={{ scale, transformOrigin: "53% 62%" }}
        />
      </div>
    </motion.div>
  );
}

export function DoorHero({ onApply }: { onApply: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const scale = useTransform(p, [0, 0.55, 1], [1.02, 2.4, 3.1]);
  const leftX = useTransform(p, [0.55, 0.95], ["0%", "-105%"]);
  const rightX = useTransform(p, [0.55, 0.95], ["0%", "105%"]);
  const heroTextOpacity = useTransform(p, [0, 0.18], [1, 0]);
  const heroTextY = useTransform(p, [0, 0.25], [0, -60]);
  const vignette = useTransform(p, [0, 0.5], [0.55, 0.15]);
  const welcomeOpacity = useTransform(p, [0.72, 0.9], [0, 1]);
  const welcomeY = useTransform(p, [0.72, 1], [40, 0]);

  return (
    <div ref={ref} id="top" className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        {/* what lies behind the doors */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-ink text-ink-foreground"
          style={{ opacity: welcomeOpacity, y: welcomeY }}
        >
          <p className="eyebrow text-primary">Welcome inside.</p>
          <h2 className="display mt-6 text-center text-[13vw] leading-[0.85] md:text-[8vw]">
            One Day at
            <br />
            Synapse
          </h2>
          <p className="display mt-6 text-[3vw] tracking-[0.4em] text-ink-foreground/40 md:text-[1.4vw]">
            ODAS
          </p>
        </motion.div>

        <Panel side="left" scale={scale} x={leftX} />
        <Panel side="right" scale={scale} x={rightX} />

        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: vignette,
            background:
              "radial-gradient(120% 90% at 53% 62%, transparent 20%, oklch(0.145 0.006 285 / 0.9) 100%)",
          }}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 flex flex-col justify-between px-5 pb-10 pt-28 md:px-10 md:pb-14"
          style={{ opacity: heroTextOpacity, y: heroTextY }}
        >
          <div className="max-w-3xl">
            <p className="eyebrow text-primary">Synapse Advertising presents</p>
            <h1 className="display mt-5 text-[13vw] text-ink-foreground md:text-[6.5vw]">
              One Day
              <br />
              at Synapse
            </h1>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="display text-[8vw] text-ink-foreground md:text-[2.4vw]">Step inside.</p>
              <p className="mt-3 max-w-xs text-sm text-ink-foreground/65">
                An immersive experience inside the world of Synapse.
              </p>
            </div>
            <div className="pointer-events-auto flex items-center gap-8">
              <button onClick={onApply} className="group relative overflow-hidden px-8 py-4">
                <span className="absolute inset-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-[1.06]" />
                <span className="eyebrow relative text-primary-foreground">
                  Apply Now{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
              <span className="eyebrow hidden text-ink-foreground/45 md:block">
                Scroll to open the doors
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
