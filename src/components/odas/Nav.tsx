import { useEffect, useState } from "react";
import { SynapseLogo } from "./SynapseLogo";

const links = [
  { label: "ODAS", href: "#odas" },
  { label: "The Experience", href: "#experience" },
  { label: "The Journey", href: "#journey" },
  { label: "Our World", href: "#world" },
  { label: "Our People", href: "#people" },
];


export function Nav({ onApply }: { onApply: () => void }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/80 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
        <SynapseLogo
          className={`h-5 transition-colors duration-500 ${solid ? "text-foreground" : "text-ink-foreground"}`}
        />
        <nav className="flex items-center gap-6 md:gap-9">
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`eyebrow transition-colors duration-300 ${
                  solid
                    ? "text-muted-foreground hover:text-primary"
                    : "text-ink-foreground/70 hover:text-primary"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={onApply}
            className={`eyebrow group relative overflow-hidden px-4 py-2.5 transition-colors duration-500 ${
              solid ? "text-foreground" : "text-ink-foreground"
            }`}
          >
            <span className="absolute inset-0 border border-primary/60" />
            <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-400 ease-out group-hover:scale-x-100" />
            <span className="relative transition-colors duration-300 group-hover:text-primary-foreground">
              Apply Now
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
