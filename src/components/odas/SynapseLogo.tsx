export function SynapseLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 64" className="h-full w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="synapse-bolt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.15 78)" />
            <stop offset="100%" stopColor="oklch(0.65 0.2 40)" />
          </linearGradient>
        </defs>
        <path
          d="M30 0 8 30h11.5c2.6 0 4.2 2.8 2.9 5L4 64l26-32H18.6c-2.7 0-4.3-3-2.8-5.2L30 0Z"
          fill="url(#synapse-bolt)"
        />
      </svg>
      <span
        className="display text-[0.95rem] tracking-[0.2em]"
        style={{ fontWeight: 700, letterSpacing: "0.2em" }}
      >
        Synapse
      </span>
    </span>
  );
}
