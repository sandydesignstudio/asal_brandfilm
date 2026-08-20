import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { slides } from "./slides";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [fs, setFs] = useState(false);
  const [chrome, setChrome] = useState(true);
  const stageRef = useRef<HTMLDivElement>(null);
  const idleRef = useRef<number | null>(null);
  const wheelLock = useRef(0);
  const touchY = useRef(0);

  const total = slides.length;
  const go = useCallback(
    (n: number) => setIndex((i) => Math.min(total - 1, Math.max(0, typeof n === "number" ? n : i))),
    [total],
  );
  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const fit = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / 1600, height / 900));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(total - 1);
      else if (e.key.toLowerCase() === "f") toggleFs();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, total]);

  useEffect(() => {
    const onFs = () => setFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFs = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.();
  };

  const wake = useCallback(() => {
    setChrome(true);
    if (idleRef.current) window.clearTimeout(idleRef.current);
    idleRef.current = window.setTimeout(() => setChrome(false), 2800);
  }, []);

  useEffect(() => {
    wake();
    return () => {
      if (idleRef.current) window.clearTimeout(idleRef.current);
    };
  }, [wake, index]);

  const onWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - wheelLock.current < 700) return;
    if (Math.abs(e.deltaY) < 24) return;
    wheelLock.current = now;
    if (e.deltaY > 0) next();
    else prev();
  };

  const current = slides[index] ?? slides[0]!;
  const Current = current.component;

  return (
    <div
      className="relative h-[100dvh] w-full overflow-hidden bg-navy-deep"
      onWheel={onWheel}
      onMouseMove={wake}
      onTouchStart={(e) => {
        touchY.current = e.touches[0]?.clientY ?? 0;
      }}
      onTouchEnd={(e) => {
        const end = e.changedTouches[0]?.clientY;
        if (end === undefined) return;
        const delta = touchY.current - end;
        if (Math.abs(delta) > 50) (delta > 0 ? next : prev)();
      }}
    >
      <div ref={stageRef} className="absolute inset-0">
        <div
          key={index}
          className="absolute left-1/2 top-1/2 origin-center reveal-fade"
          style={{
            width: 1600,
            height: 900,
            marginLeft: -800,
            marginTop: -450,
            transform: `scale(${scale})`,
          }}
        >
          <Current />
        </div>
      </div>

      {/* progress */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] bg-offwhite/10">
        <div
          className="h-full bg-blue transition-[width] duration-700 ease-out"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* chrome */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 transition-opacity duration-500 sm:px-10 sm:pb-7 ${
          chrome ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="slide-cap uppercase tracking-[0.28em] text-offwhite/55 mix-blend-difference">
          <span className="num text-offwhite">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-2 text-offwhite/35">/</span>
          <span>{String(total).padStart(2, "0")}</span>
          <span className="ml-4 hidden sm:inline text-offwhite/40">{current.label}</span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center border border-offwhite/25 text-offwhite/80 transition-colors hover:border-blue hover:text-blue disabled:opacity-25"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
              <path d="M16 6H1M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={index === total - 1}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center border border-offwhite/25 text-offwhite/80 transition-colors hover:border-blue hover:text-blue disabled:opacity-25"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
              <path d="M0 6h15M10 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <button
            onClick={toggleFs}
            aria-label="Toggle presentation mode"
            className="ml-2 hidden h-10 items-center gap-2 border border-offwhite/25 px-4 text-offwhite/80 transition-colors hover:border-blue hover:text-blue sm:flex"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M1 4.5V1h3.5M12 8.5V12H8.5M12 4.5V1H8.5M1 8.5V12h3.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <span className="slide-cap uppercase tracking-[0.2em]">{fs ? "Exit" : "Present"}</span>
          </button>
        </div>
      </div>

      {/* slide ticks */}
      <div
        className={`pointer-events-auto absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-[7px] transition-opacity duration-500 lg:flex ${
          chrome ? "opacity-100" : "opacity-0"
        }`}
      >
        {slides.map((s, i) => (
          <button
            key={s.label + i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}: ${s.label}`}
            className={`h-px transition-all duration-300 ${
              i === index ? "w-7 bg-blue" : "w-3.5 bg-offwhite/30 hover:w-5 hover:bg-offwhite/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}