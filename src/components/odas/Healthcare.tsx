import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Sections";
import { Photo } from "./Photo";

/* ---------------- OFFICE GALLERY ---------------- */

const officeShots = [
  { caption: ["Where healthcare", "meets creativity."], label: "Synapse office — studio floor", ratio: "aspect-[16/10]", w: "w-[86vw] md:w-[56vw]", y: "-2vw" },
  { caption: ["Where pharma", "meets strategy."], label: "Synapse office — strategy room", ratio: "aspect-[3/4]", w: "w-[62vw] md:w-[26vw]", y: "4vw" },
  { caption: ["Where science", "becomes story."], label: "Synapse office — collaboration space", ratio: "aspect-[4/3]", w: "w-[78vw] md:w-[38vw]", y: "-4vw" },
  { caption: ["Where ideas", "become campaigns."], label: "Synapse office — the war room", ratio: "aspect-[16/11]", w: "w-[86vw] md:w-[48vw]", y: "2vw" },
];

export function OfficeGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.1, 1], ["1%", "-72%"]);

  return (
    <section id="world" ref={ref} className="relative h-[500vh] bg-ink text-ink-foreground">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="px-5 md:px-10">
          <p className="eyebrow text-primary">Inside the agency</p>
          <h2 className="display mt-4 max-w-4xl text-[10vw] md:text-[4.4vw]">
            This is where
            <br />
            <span className="text-primary">healthcare ideas</span> come to life.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/55 md:text-base">
            Step inside the workplace where healthcare and pharma brands are built, challenged,
            shaped and brought to life.
          </p>
        </div>

        <motion.div
          className="mt-10 flex items-center gap-6 pl-5 md:mt-14 md:gap-16 md:pl-10"
          style={{ x }}
        >
          {officeShots.map((s) => (
            <figure key={s.label} className={`shrink-0 ${s.w}`} style={{ transform: `translateY(${s.y})` }}>
              <Photo label={s.label} alt={s.label} ratio={s.ratio} />
              <figcaption className="display mt-5 text-[5.5vw] leading-[0.95] md:text-[1.7vw]">
                {s.caption[0]}
                <br />
                <span className="text-primary">{s.caption[1]}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- BRAND STATEMENT ---------------- */

const words = [
  "Healthcare",
  "Pharma",
  "Science",
  "Strategy",
  "Storytelling",
  "Digital",
  "AI",
  "Creativity",
];

export function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-5">
        <motion.h2
          className="display absolute text-center text-[11vw] md:text-[5vw]"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.2, 0.26], [0, 1, 1, 0]) }}
        >
          We don&apos;t just
          <br />
          build campaigns.
          <br />
          <span className="text-primary">We build healthcare brands.</span>
        </motion.h2>

        {words.map((w, i) => {
          const s = 0.28 + i * 0.055;
          return (
            <motion.p
              key={w}
              className="display absolute text-center text-[16vw] md:text-[8vw]"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [s, s + 0.015, s + 0.038, s + 0.055],
                  [0, 1, 1, 0],
                ),
                y: useTransform(scrollYProgress, [s, s + 0.055], [24, -24]),
              }}
            >
              {w}
            </motion.p>
          );
        })}

        <motion.div
          className="absolute px-5 text-center"
          style={{ opacity: useTransform(scrollYProgress, [0.76, 0.84], [0, 1]) }}
        >
          <p className="display text-[8vw] md:text-[3.4vw]">
            From pharma to patients.
            <br />
            From science to story.
            <br />
            <span className="text-primary">From insight to impact.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- HEALTHCARE ECOSYSTEM ---------------- */

const categories = [
  "Pharma",
  "Hospitals",
  "Diagnostics",
  "Medical Devices",
  "OTC",
  "OTX",
  "Healthtech",
  "Patient Awareness",
  "Patient Support",
];

function Marquee({ reverse = false, speed = 46 }: { reverse?: boolean; speed?: number }) {
  const row = [...categories, ...categories];
  return (
    <div className="overflow-hidden py-3">
      <motion.div
        className="flex w-max gap-10 md:gap-20"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className={`display whitespace-nowrap text-[9vw] md:text-[4.2vw] ${
              i % 3 === 1 ? "text-primary" : "text-foreground/25"
            }`}
          >
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section className="bg-background py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">What we work on</p>
          <h2 className="display mt-4 text-[13vw] md:text-[7vw]">
            The healthcare
            <br />
            ecosystem.
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 border-y border-hairline md:mt-24">
        <Marquee />
        <Marquee reverse speed={58} />
      </div>
      <div className="mx-auto mt-12 max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="display max-w-2xl text-[6vw] text-muted-foreground md:text-[2vw]">
            Different healthcare challenges.
            <br />
            Different audiences.
            <br />
            <span className="text-foreground">One integrated way of thinking.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PEOPLE ---------------- */

const teams = [
  { t: "Strategy", label: "Strategy team at work" },
  { t: "Creative", label: "Creative team at work" },
  { t: "Account Management", label: "Account team at work" },
  { t: "Media", label: "Media team at work" },
  { t: "Research", label: "Research team at work" },
  { t: "Digital & AI", label: "Digital team at work" },
];

export function People() {
  return (
    <section id="people" className="bg-background py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">Our people</p>
          <h2 className="display mt-4 text-[13vw] md:text-[7vw]">
            Meet the people
            <br />
            behind the work.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Healthcare and pharma marketing isn&apos;t built by one person. It takes
                strategists, creatives, account teams, media specialists, researchers, digital
                experts and leaders working together to turn complex healthcare challenges into
                powerful ideas.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:mt-28 md:grid-cols-3 md:gap-8">
          {teams.map((m, i) => (
            <Reveal key={m.t} delay={(i % 3) * 0.08} className={i % 2 ? "md:mt-14" : ""}>
              <Photo label={m.label} alt={`Synapse ${m.t} team`} ratio="aspect-[4/5]" />
              <h3 className="display mt-5 text-[7vw] md:text-[2vw]">{m.t}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEADERSHIP ---------------- */

const leaders = [
  {
    name: "Aleem Merchant",
    role: "Founder & Director",
    d: "Leads the agency's vision for healthcare and pharma brand building.",
  },
  {
    name: "Rahul Pandit",
    role: "Founder & Director",
    d: "Shapes strategy and client partnerships across the healthcare ecosystem.",
  },
  {
    name: "Rudresh Bhagat",
    role: "Founder & Director",
    d: "Drives creative craft and campaign execution for pharma brands.",
  },
];

export function Leadership() {
  return (
    <section className="bg-ink py-28 text-ink-foreground md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">Leadership</p>
          <h2 className="display mt-4 text-[13vw] md:text-[6.5vw]">
            The people
            <br />
            who lead the thinking.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:mt-28 md:grid-cols-3 md:gap-10">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1} className={i === 1 ? "md:mt-20" : ""}>
              <div className="group">
                <Photo
                  label={`${l.name} — portrait`}
                  alt={`${l.name}, ${l.role} at Synapse`}
                  ratio="aspect-[3/4]"
                />
                <h3 className="display mt-6 text-[8vw] transition-colors duration-500 group-hover:text-primary md:text-[2.2vw]">
                  {l.name}
                </h3>
                <p className="eyebrow mt-3 text-ink-foreground/45 transition-colors duration-500 group-hover:text-gold">
                  {l.role}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/55">{l.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WORK ---------------- */

const workItems = [
  "Pharma",
  "Healthcare",
  "Diagnostics",
  "Hospitals",
  "Healthtech",
  "OTC",
  "Medical Devices",
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.1, 1], ["1%", "-80%"]);

  return (
    <section ref={ref} className="relative h-[450vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="px-5 md:px-10">
          <p className="eyebrow text-primary">Real work, real brands</p>
          <h2 className="display mt-4 text-[11vw] md:text-[5.4vw]">
            A glimpse of what
            <br />
            <span className="text-muted-foreground">we do.</span>
          </h2>
        </div>
        <motion.div className="mt-10 flex gap-6 pl-5 md:mt-16 md:gap-12 md:pl-10" style={{ x }}>
          {workItems.map((w, i) => (
            <figure
              key={w}
              className="w-[72vw] shrink-0 md:w-[30vw]"
              style={{ transform: `translateY(${(i % 2 ? 1 : -1) * 1.4}vw)` }}
            >
              <Photo label={`${w} campaign work`} alt={`Synapse ${w} campaign`} ratio="aspect-[4/3]" />
              <figcaption className="eyebrow mt-4 text-muted-foreground">{w}</figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- WHY SYNAPSE ---------------- */

export function WhySynapse() {
  return (
    <section className="bg-ink py-28 text-ink-foreground md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <h2 className="display text-[16vw] md:text-[9vw]">
            Why <span className="text-primary">Synapse?</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 border-t border-ink-foreground/12 pt-12 md:mt-28 md:grid-cols-2">
          <Reveal>
            <p className="display text-[14vw] text-primary md:text-[7vw]">20+ Years</p>
            <p className="eyebrow mt-4 text-ink-foreground/50">Of healthcare experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display text-[9vw] leading-[1.05] md:text-[3vw]">
              Science.
              <br />
              Strategy.
              <br />
              Storytelling.
              <br />
              <span className="text-gold">Scale.</span>
            </p>
            <p className="mt-10 text-sm leading-relaxed text-ink-foreground/55">
              Pharma. Healthcare. Diagnostics. Hospitals. Healthtech. And more.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
