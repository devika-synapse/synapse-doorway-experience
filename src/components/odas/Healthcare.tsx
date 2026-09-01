import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Sections";
import { Photo } from "./Photo";

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
        className="flex w-max gap-10 md:gap-16"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {row.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className={`display whitespace-nowrap text-[6vw] md:text-[2.8vw] ${
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
    <section id="world" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">What we work on</p>
          <h2 className="display mt-4 text-[8.5vw] md:text-[4.6vw]">
            The healthcare
            <br />
            ecosystem.
          </h2>
        </Reveal>
      </div>
      <div className="mt-12 border-y border-hairline md:mt-20">
        <Marquee />
        <Marquee reverse speed={58} />
      </div>
      <div className="mx-auto mt-10 max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="display max-w-2xl text-[4vw] text-muted-foreground md:text-[1.5vw]">
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
    <section id="people" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">Our people</p>
          <h2 className="display mt-4 text-[8.5vw] md:text-[4.6vw]">
            Meet the people
            <br />
            behind the work.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-10 md:mt-14 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Healthcare and pharma marketing isn&apos;t built by one person. It takes
                strategists, creatives, account teams, media specialists, researchers, digital
                experts and leaders working together to turn complex healthcare challenges into
                powerful ideas.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:mt-24 md:grid-cols-3 md:gap-8">
          {teams.map((m, i) => (
            <Reveal key={m.t} delay={(i % 3) * 0.08} className={i % 2 ? "md:mt-14" : ""}>
              <Photo label={m.label} alt={`Synapse ${m.t} team`} ratio="aspect-[4/5]" />
              <h3 className="display mt-4 text-[4.5vw] md:text-[1.5vw]">{m.t}</h3>
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
    <section className="bg-ink py-24 text-ink-foreground md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">Leadership</p>
          <h2 className="display mt-4 text-[8.5vw] md:text-[4.2vw]">
            The people
            <br />
            who lead the thinking.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-10">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1} className={i === 1 ? "md:mt-20" : ""}>
              <div className="group">
                <Photo
                  label={`${l.name} — portrait`}
                  alt={`${l.name}, ${l.role} at Synapse`}
                  ratio="aspect-[3/4]"
                />
                <h3 className="display mt-5 text-[5vw] transition-colors duration-500 group-hover:text-primary md:text-[1.7vw]">
                  {l.name}
                </h3>
                <p className="eyebrow mt-3 text-ink-foreground/45 transition-colors duration-500 group-hover:text-gold">
                  {l.role}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-foreground/55">{l.d}</p>
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
          <h2 className="display mt-4 text-[7vw] md:text-[3.6vw]">
            A glimpse of what
            <br />
            <span className="text-muted-foreground">we do.</span>
          </h2>
        </div>
        <motion.div className="mt-8 flex gap-6 pl-5 md:mt-14 md:gap-10 md:pl-10" style={{ x }}>
          {workItems.map((w, i) => (
            <figure
              key={w}
              className="w-[66vw] shrink-0 md:w-[26vw]"
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
    <section className="bg-ink py-24 text-ink-foreground md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <h2 className="display text-[10vw] md:text-[5.5vw]">
            Why <span className="text-primary">Synapse?</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 border-t border-ink-foreground/12 pt-10 md:mt-24 md:grid-cols-2">
          <Reveal>
            <p className="display text-[9vw] text-primary md:text-[4.5vw]">20+ Years</p>
            <p className="eyebrow mt-4 text-ink-foreground/50">Of healthcare experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display text-[6vw] leading-[1.05] md:text-[2.2vw]">
              Science.
              <br />
              Strategy.
              <br />
              Storytelling.
              <br />
              <span className="text-gold">Scale.</span>
            </p>
            <p className="mt-8 text-sm leading-relaxed text-ink-foreground/55">
              Pharma. Healthcare. Diagnostics. Hospitals. Healthtech. And more.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
