import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- SECTION 2 — WHAT IS ODAS ---------------- */

const statements = [
  ["See how healthcare", "campaigns are built"],
  ["See how pharma", "brands are positioned"],
  ["See how science", "becomes story"],
  ["See how AI is", "changing healthcare marketing"],
  ["See how ideas", "move into execution"],
];

export function WhatIsOdas() {
  return (
    <section id="odas" className="relative bg-background py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <h2 className="display text-[14vw] md:text-[8.5vw]">
            What happens
            <br />
            inside <span className="text-primary">Synapse?</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-4 md:col-start-8">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                One Day at Synapse is an immersive experience inside a healthcare and pharma
                advertising agency — where science meets strategy, creativity meets technology, and
                insights become campaigns.
              </p>
            </Reveal>
          </div>
        </div>


        <ul className="mt-20 border-t border-hairline md:mt-32">
          {statements.map(([a, b], i) => (
            <motion.li
              key={a}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative overflow-hidden border-b border-hairline py-7 md:py-11"
            >
              <div className="flex items-baseline gap-5 md:gap-12">
                <span className="eyebrow w-8 shrink-0 text-muted-foreground group-hover:text-primary">
                  0{i + 1}
                </span>
                <h3 className="display text-[8vw] transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-[4.4vw]">
                  <span className="text-foreground">{a} </span>
                  <span className="text-muted-foreground transition-colors duration-500 group-hover:text-primary">
                    {b}
                  </span>
                </h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3 — THE JOURNEY ---------------- */

const sessions = [
  {
    n: "01",
    t: ["Master the art of writing briefs", "that inspire great work"],
    s: "Because a strong healthcare campaign starts with the right question.",
  },
  {
    n: "02",
    t: ["Learn how to turn", "market research into an insight"],
    s: "From healthcare audiences to pharma market realities.",
  },
  {
    n: "03",
    t: ["Master the principles behind", "effective campaign strategy"],
    s: "Building strategy for complex healthcare and pharma brands.",
  },
  {
    n: "04",
    t: ["Understand how science and", "storytelling work together"],
    s: "Turning scientific complexity into communication people understand.",
  },
  {
    n: "05",
    t: ["Experience the journey", "from insight to big idea"],
    s: "Where healthcare insight becomes a campaign idea.",
  },
];


export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.08, 1], ["2%", "-78%"]);
  const line = useTransform(scrollYProgress, [0.08, 1], ["0%", "100%"]);

  return (
    <section id="journey" ref={ref} className="relative h-[500vh] bg-ink text-ink-foreground">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="px-5 md:px-10">
          <p className="eyebrow text-primary">The journey</p>
          <h2 className="display mt-4 text-[10vw] md:text-[4.6vw]">
            From a brief <span className="text-ink-foreground/35">to a big idea.</span>
          </h2>
        </div>

        <div className="relative mt-10 h-px w-full bg-ink-foreground/15 md:mt-14">
          <motion.div className="h-px bg-primary" style={{ width: line }} />
        </div>

        <motion.div className="mt-10 flex gap-8 pl-5 md:mt-16 md:gap-24 md:pl-10" style={{ x }}>
          {sessions.map((s, i) => (
            <article
              key={s.n}
              className="w-[78vw] shrink-0 md:w-[44vw]"
              style={{ transform: `translateY(${(i % 2 ? 1 : -1) * 1.6}vw)` }}
            >
              <span
                className="display block text-[22vw] leading-[0.7] text-transparent md:text-[11vw]"
                style={{ WebkitTextStroke: "1px oklch(0.965 0.006 85 / 0.28)" }}
              >
                {s.n}
              </span>
              <h3 className="display mt-6 text-[6.5vw] md:text-[2.5vw]">
                {s.t[0]}
                <br />
                <span className="text-primary">{s.t[1]}</span>
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/50">{s.s}</p>

            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 4 — THE SYNAPSE WAY ---------------- */

const steps = ["Insight", "Strategy", "Storytelling", "Execution", "Big Idea"];

export function SynapseWay() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-background py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <h2 className="display max-w-4xl text-[12vw] md:text-[6vw]">
            How does an idea become <span className="text-primary">a campaign?</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20 pl-10 md:mt-32 md:pl-[22%]">
          <div className="absolute left-1 top-0 h-full w-px bg-hairline md:left-[calc(22%-2.5rem)]">
            <motion.div className="w-px bg-primary" style={{ height }} />
          </div>
          {steps.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-25% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-6 py-6 md:py-10"
            >
              <span className="eyebrow text-muted-foreground">0{i + 1}</span>
              <h3
                className={`display text-[10vw] md:text-[5vw] ${
                  i === steps.length - 1 ? "text-primary" : "text-foreground"
                }`}
              >
                {s}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 5 — EXPERIENCE SYNAPSE ---------------- */

const pillars = [
  { t: "Real-time case studies", d: "Live work, unpacked as it happens — not slides after the fact." },
  { t: "Marketing campaign development", d: "See a campaign built from brief to big idea." },
  { t: "Futuristic marketing techniques", d: "The methods shaping what comes next." },
  { t: "Specialists across functions", d: "Strategy, creative, media and research in one room." },
  { t: "AI", d: "How intelligence tools sharpen the thinking, not replace it." },
  { t: "Execution", d: "The craft of turning an idea into work that ships." },
];

export function ExperienceSynapse() {
  return (
    <section id="experience" className="bg-ink py-28 text-ink-foreground md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <h2 className="display text-[12vw] md:text-[6.5vw]">
            Don&apos;t just
            <br />
            learn about it.
            <br />
            <span className="text-primary">Experience it.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid border-t border-ink-foreground/12 md:mt-28 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.t}
              delay={(i % 3) * 0.08}
              className="border-b border-ink-foreground/12 px-0 py-8 md:border-r md:px-8 md:py-14"
            >
              <span className="eyebrow text-gold">0{i + 1}</span>
              <h3 className="display mt-5 text-[6vw] md:text-[1.8vw]">{p.t}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/55">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 6 — THE BIG IDEA ---------------- */

const beats = ["An insight.", "A question.", "A strategy.", "A story."];

export function BigIdea() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const bigScale = useTransform(scrollYProgress, [0.6, 0.85], [0.35, 1]);
  const bigOpacity = useTransform(scrollYProgress, [0.58, 0.68], [0, 1]);
  const yourTurn = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <section ref={ref} className="relative h-[420vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-5">
        <motion.h2
          className="display absolute text-center text-[9vw] md:text-[4vw]"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.06, 0.14], [0, 1, 0]) }}
        >
          Every big idea
          <br />
          starts somewhere.
        </motion.h2>

        {beats.map((b, i) => {
          const s = 0.16 + i * 0.1;
          return (
            <motion.p
              key={b}
              className="display absolute text-center text-[11vw] md:text-[5vw]"
              style={{
                opacity: useTransform(scrollYProgress, [s, s + 0.03, s + 0.07, s + 0.1], [0, 1, 1, 0]),
                y: useTransform(scrollYProgress, [s, s + 0.1], [30, -30]),
              }}
            >
              {b}
            </motion.p>
          );
        })}

        <motion.p
          className="display absolute text-center text-[22vw] text-primary md:text-[14vw]"
          style={{ opacity: bigOpacity, scale: bigScale }}
        >
          A big idea.
        </motion.p>

        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-ink"
          style={{ opacity: yourTurn }}
        >
          <p className="display text-[20vw] text-ink-foreground md:text-[12vw]">Your turn.</p>
        </motion.div>
      </div>
    </section>
  );
}
