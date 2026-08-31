import { motion } from "motion/react";

/**
 * Placeholder for real Synapse photography.
 * Replace `src` with an uploaded asset URL once the real image is available.
 */
export function Photo({
  src,
  alt,
  label,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={`group relative overflow-hidden bg-ink/90 ${ratio} ${className}`}>
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-ink-foreground/25 px-6 text-center">
          <span className="eyebrow text-primary">Image placeholder</span>
          <span className="display text-[5vw] leading-[0.95] text-ink-foreground/70 md:text-[1.3vw]">
            {label}
          </span>
          <span className="text-[11px] text-ink-foreground/35">Upload the real photograph here</span>
        </div>
      )}
    </div>
  );
}
