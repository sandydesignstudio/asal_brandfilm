import type { ReactNode } from "react";
import logoWhite from "@/assets/asal-logo-white.png.asset.json";
import logoNavy from "@/assets/asal-logo-navy.png.asset.json";

type Tone = "navy" | "deep" | "light" | "beige" | "charcoal";

const toneBg: Record<Tone, string> = {
  navy: "bg-navy text-offwhite",
  deep: "bg-navy-deep text-offwhite",
  light: "bg-offwhite text-navy",
  beige: "bg-beige text-navy",
  charcoal: "bg-charcoal text-offwhite",
};

export function Slide({
  tone = "navy",
  children,
  className = "",
  bare = false,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  bare?: boolean;
}) {
  return (
    <div className={`deck-canvas grain ${toneBg[tone]} ${className}`}>
      {bare ? children : <div className="absolute inset-0 px-[110px] py-[78px]">{children}</div>}
    </div>
  );
}

export function SlideHeader({
  index,
  label,
  tone = "dark",
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const dim = tone === "dark" ? "text-offwhite/45" : "text-navy/50";
  return (
    <div className="flex items-center gap-6">
      <span className="kicker text-blue-soft">{index}</span>
      <span className={`h-px w-14 ${tone === "dark" ? "bg-offwhite/25" : "bg-navy/20"}`} />
      <span className={`kicker ${dim}`}>{label}</span>
    </div>
  );
}

export function Mark({ variant = "white", className = "h-8" }: { variant?: "white" | "navy"; className?: string }) {
  const src = variant === "white" ? logoWhite.url : logoNavy.url;
  return <img src={src} alt="ASAL Engineering Services" className={`${className} w-auto`} loading="lazy" />;
}

/** Hand-drawn storyboard frame with director's annotations. */
export function StoryFrame({
  no,
  title,
  note,
  shot,
  move,
  img,
  className = "",
}: {
  no: string;
  title: string;
  note: string;
  shot: string;
  move?: string;
  img: string;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col ${className}`}>
      <div className="sb-frame border border-navy/25 aspect-video">
        <img src={img} alt={`Storyboard frame ${no} — ${title}`} loading="lazy" width={1024} height={576} className="h-full w-full object-cover" />
        {/* frame number tab */}
        <span className="absolute left-0 top-0 bg-navy px-2.5 py-1 slide-cap font-medium text-offwhite">{no}</span>
        {/* camera movement annotation */}
        {move ? (
          <span className="absolute bottom-2 right-2 flex items-center gap-1.5">
            <span className="editorial text-[13px] text-blue">{move}</span>
            <svg width="34" height="8" viewBox="0 0 34 8" fill="none" aria-hidden="true">
              <path d="M0 4h30M27 1l4 3-4 3" stroke="var(--asal-blue)" strokeWidth="1.2" />
            </svg>
          </span>
        ) : null}
        {/* framing crosshair */}
        <span className="pointer-events-none absolute inset-3 border border-blue/25" />
      </div>
      <figcaption className="mt-3">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="slide-cap font-medium uppercase tracking-[0.16em] text-navy">{title}</h4>
          <span className="editorial text-[13px] text-blue">{shot}</span>
        </div>
        <p className="slide-cap mt-1 text-navy/60">{note}</p>
      </figcaption>
    </figure>
  );
}

export function Rationale({ children }: { children: ReactNode }) {
  return (
    <p className="slide-cap max-w-[520px] uppercase tracking-[0.14em] text-blue-soft">
      <span className="text-cream">Creative rationale — </span>
      {children}
    </p>
  );
}