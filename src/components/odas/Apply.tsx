import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "./Sections";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(20),
  organisation: z.string().trim().min(1, "Required").max(120),
  designation: z.string().trim().min(1, "Required").max(120),
  why: z.string().trim().min(1, "Tell us why").max(1000),
});

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "organisation", label: "Organisation / College", type: "text" },
  { name: "designation", label: "Designation / Course", type: "text" },
] as const;

export function ApplySection({ onApply }: { onApply: () => void }) {
  return (
    <section id="apply" className="bg-ink py-32 text-ink-foreground md:py-52">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-primary">One Day at Synapse</p>
          <h2 className="display mt-6 text-[10vw] md:text-[5.5vw]">
            Ready to
            <br />
            step inside?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-ink-foreground/60">
            Step inside Synapse. See how healthcare and pharma brands are built. Meet the people
            behind the thinking. Experience ODAS.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-col gap-10 border-t border-ink-foreground/12 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="display text-[4vw] text-ink-foreground/60 md:text-[1.5vw]">
              Come. Be a part of ODAS.
            </p>

            <button
              onClick={onApply}
              className="group relative w-full overflow-hidden px-10 py-6 md:w-auto"
            >
              <span className="absolute inset-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-105 group-hover:scale-y-110" />
              <span className="eyebrow relative flex items-center justify-center gap-3 text-primary-foreground">
                Apply Now
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ApplyDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
  };

  const close = () => {
    onClose();
    setTimeout(() => {
      setDone(false);
      setErrors({});
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] overflow-y-auto bg-background"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto max-w-3xl px-5 py-12 md:px-10 md:py-20">
            <div className="flex items-start justify-between">
              <p className="eyebrow text-primary">Application</p>
              <button onClick={close} className="eyebrow text-muted-foreground hover:text-primary">
                Close ✕
              </button>
            </div>

            {done ? (
              <div className="py-24 text-center md:py-40">
                <h2 className="display text-[11vw] text-primary md:text-[5vw]">You&apos;re in.</h2>
                <p className="mt-6 text-muted-foreground">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <>
                <h2 className="display mt-8 text-[8vw] md:text-[3.4vw]">
                  One Day
                  <br />
                  at Synapse
                </h2>
                <form onSubmit={submit} className="mt-14 space-y-9" noValidate>
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="eyebrow text-muted-foreground">
                        {f.label}
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        maxLength={255}
                        className="mt-3 w-full border-b border-hairline bg-transparent pb-3 text-lg outline-none transition-colors focus:border-primary"
                      />
                      {errors[f.name] && (
                        <p className="mt-2 text-xs text-destructive">{errors[f.name]}</p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label htmlFor="why" className="eyebrow text-muted-foreground">
                      Why would you like to be a part of ODAS?
                    </label>
                    <textarea
                      id="why"
                      name="why"
                      rows={4}
                      maxLength={1000}
                      className="mt-3 w-full resize-none border-b border-hairline bg-transparent pb-3 text-lg outline-none transition-colors focus:border-primary"
                    />
                    {errors["why"] && (
                      <p className="mt-2 text-xs text-destructive">{errors["why"]}</p>
                    )}
                  </div>
                  <button type="submit" className="group relative overflow-hidden px-10 py-5">
                    <span className="absolute inset-0 bg-ink transition-colors duration-400 group-hover:bg-primary" />
                    <span className="eyebrow relative flex items-center gap-3 text-ink-foreground">
                      Submit Application
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
