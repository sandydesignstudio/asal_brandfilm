import type { ComponentType } from "react";
import { Mark, Rationale, Slide, SlideHeader, StoryFrame, SdsMark } from "./parts";

import cover from "@/assets/cover-formwork.jpg";
import a1 from "@/assets/sb-a1.jpg";
import a2 from "@/assets/sb-a2.jpg";
import a3 from "@/assets/sb-a3.jpg";
import a4 from "@/assets/sb-a4.jpg";
import a5 from "@/assets/sb-a5.jpg";
import a6 from "@/assets/sb-a6.jpg";
import b1 from "@/assets/sb-b1.jpg";
import b2 from "@/assets/sb-b2.jpg";
import b3 from "@/assets/sb-b3.jpg";
import b4 from "@/assets/sb-b4.jpg";
import b5 from "@/assets/sb-b5.jpg";
import b6 from "@/assets/sb-b6.jpg";

const d = (i: number) => ({ animationDelay: `${i * 110}ms` });

/* 01 ------------------------------------------------------------------ */
function Cover() {
  return (
    <Slide tone="deep" bare className="vignette">
      <img
        src={cover}
        alt="Formwork panels raked by hard light in a dark industrial space"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between px-[110px] py-[78px]">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <Mark className="h-9 reveal-fade" />
            <span className="h-6 w-px bg-offwhite/20" />
            <SdsMark variant="white" className="h-7" />
          </div>
          <span className="kicker text-blue-soft reveal" style={d(1)}>
            Creative Film Proposal
          </span>
        </div>

        <div>
          <div className="rule-blue w-[120px] reveal-wipe" style={d(1)} />
          <h1 className="slide-mega mt-8 text-offwhite">
            <span className="block reveal" style={d(2)}>
              ASAL
            </span>
            <span className="block font-light text-offwhite/70 reveal" style={d(3)}>
              Formworks
            </span>
          </h1>
          <p className="editorial mt-8 text-[34px] text-cream reveal" style={d(5)}>
            A Cinematic Documentary &amp; Personal Brand Film
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center gap-5 slide-cap uppercase tracking-[0.3em] text-offwhite/60 reveal" style={d(6)}>
            {["People", "Process", "Precision", "Result"].map((w, i) => (
              <span key={w} className="flex items-center gap-5">
                {i > 0 && <span className="text-blue">→</span>}
                {w}
              </span>
            ))}
          </div>
          <span className="slide-cap text-offwhite/35">Asal Engineering Services</span>
        </div>
      </div>
    </Slide>
  );
}

/* 02 ------------------------------------------------------------------ */
const JOURNEY = ["People", "Process", "Precision", "Machinery", "Scale", "Expertise", "Final Result"];

function BigIdea() {
  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="01" label="The Big Idea" />
        <div>
          <h2 className="slide-mega text-offwhite reveal">
            From Form
            <span className="block text-blue-soft">To Final.</span>
          </h2>
          <p className="slide-lead mt-10 max-w-[720px] text-offwhite/75 reveal" style={d(2)}>
            ASAL is not just about the structure being built. It is about the people, process, precision and
            expertise behind it.
          </p>
        </div>

        <div className="flex items-end gap-0">
          {JOURNEY.map((w, i) => (
            <div key={w} className="flex flex-1 flex-col reveal" style={d(3 + i)}>
              <span className="num slide-cap text-blue-soft">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-3 h-px w-full bg-offwhite/20" />
              <span
                className="mt-4 slide-cap uppercase tracking-[0.14em] text-offwhite"
                style={{ opacity: 0.55 + i * 0.065 }}
              >
                {w}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* 03 ------------------------------------------------------------------ */
function Opportunity() {
  const gaps = [
    "Shows the finished output but not the thinking behind it",
    "Makes industrial businesses feel generic",
    "Focuses on machinery without creating human connection",
    "Makes the founder invisible",
    "Explains the work without making the brand memorable",
    "Does not communicate scale and precision emotionally",
  ];
  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="02" label="The Opportunity" tone="light" />
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <h2 className="slide-title text-navy reveal">
              Show the work.
              <span className="block text-blue">Show the people behind it.</span>
            </h2>
            <p className="slide-body mt-8 max-w-[420px] text-navy/70 reveal" style={d(2)}>
              A conventional corporate film shows what a company does. This film goes deeper — how the work
              happens, who makes it happen, the challenges involved, the precision behind every stage, and the
              expertise that turns a process into a finished structure.
            </p>
          </div>
          <div className="col-span-7">
            <p className="kicker text-navy/45">Where conventional corporate content stops</p>
            <ul className="mt-8">
              {gaps.map((g, i) => (
                <li
                  key={g}
                  className="flex items-baseline gap-6 border-t border-navy/12 py-4 reveal"
                  style={d(2 + i)}
                >
                  <span className="num slide-cap w-8 text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span className="slide-body text-navy/80">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="editorial max-w-[900px] text-[26px] text-navy">
          The result is not simply a film about formwork. It becomes a film about ASAL and the people behind the
          work.
        </p>
      </div>
    </Slide>
  );
}

/* 04 ------------------------------------------------------------------ */
const SOLVES = [
  {
    p: "The process is complex",
    pd: "The audience may see the finished structure without understanding everything that goes into creating it.",
    s: "Shows the process from preparation to final result.",
  },
  {
    p: "Industrial brands can feel impersonal",
    pd: "Machinery, materials and structures alone don't create a human connection.",
    s: "Places Asal at the centre of the story.",
  },
  {
    p: "The expertise is often invisible",
    pd: "The finished structure doesn't always communicate the precision behind it.",
    s: "Brings the details, decisions, materials and process into focus.",
  },
  {
    p: "Talking-head content can feel generic",
    pd: "Simply having someone speak to camera doesn't create a documentary.",
    s: "Combines natural conversation with cinematic B-roll, factory activity and montage.",
  },
  {
    p: "The brand needs a human connection",
    pd: "People connect with people, not only with companies and machinery.",
    s: "Builds Asal's personal and professional identity alongside the ASAL brand.",
  },
];

function Solves() {
  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between">
          <SlideHeader index="03" label="What this film solves" />
          <h2 className="slide-title text-offwhite reveal">
            From unknown <span className="text-blue-soft">to understood.</span>
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-7">
          {SOLVES.map((s, i) => (
            <div key={s.p} className="flex flex-col reveal" style={d(1 + i)}>
              <span className="num text-[52px] leading-none text-blue">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-6 h-px w-full bg-offwhite/20" />
              <h3 className="mt-6 slide-cap uppercase tracking-[0.14em] text-offwhite">{s.p}</h3>
              <p className="slide-cap mt-3 text-offwhite/55">{s.pd}</p>
              <p className="editorial mt-auto pt-8 text-[19px] leading-snug text-cream">{s.s}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <span className="kicker text-offwhite/40">Problem</span>
          <span className="h-px flex-1 bg-offwhite/15" />
          <span className="kicker text-cream">The film</span>
        </div>
      </div>
    </Slide>
  );
}

/* 05 ------------------------------------------------------------------ */
function Direction() {
  const list = [
    "Cinematic lighting",
    "Natural performance",
    "Strong compositions",
    "Controlled camera movements",
    "Authentic factory / work environment",
    "Heavy use of B-roll",
    "Cinematic sound design",
    "Premium colour grading",
  ];
  return (
    <Slide tone="deep" className="vignette">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="04" label="The Creative Direction" />
        <div className="grid grid-cols-12 gap-14">
          <div className="col-span-7">
            <h2 className="slide-hero text-offwhite reveal">
              Not a
              <br />
              corporate video.
              <span className="block text-blue-soft">A documentary.</span>
            </h2>
            <p className="editorial mt-10 max-w-[560px] text-[24px] text-cream reveal" style={d(2)}>
              “The overall content will follow a premium Netflix-style documentary approach, combining personal
              branding, cinematic storytelling, and behind-the-scenes visuals.”
            </p>
          </div>
          <div className="col-span-5 self-end">
            <p className="kicker text-offwhite/40">The visual language is built around</p>
            <ul className="mt-6 grid grid-cols-1 gap-0">
              {list.map((l, i) => (
                <li
                  key={l}
                  className="flex items-center gap-4 border-b border-offwhite/12 py-3 reveal"
                  style={d(2 + i)}
                >
                  <span className="h-1 w-1 bg-blue" />
                  <span className="slide-body text-offwhite/85">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div />
      </div>
    </Slide>
  );
}

/* 06 ------------------------------------------------------------------ */
function TwoStories() {
  return (
    <Slide tone="beige">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="05" label="The Content World" tone="light" />
        <h2 className="slide-hero text-navy reveal">
          One brand.
          <span className="block text-blue">Two stories.</span>
        </h2>
        <div className="grid grid-cols-2 gap-20">
          {[
            { n: "Story 01", t: "The Process", c: "The formwork journey — from preparation to completed structure." },
            { n: "Story 02", t: "The Person", c: "Asal's experience, approach, challenges and vision." },
          ].map((s, i) => (
            <div key={s.n} className="border-t border-navy/25 pt-8 reveal" style={d(2 + i * 2)}>
              <span className="kicker text-blue">{s.n}</span>
              <h3 className="slide-sub mt-5 uppercase text-navy">{s.t}</h3>
              <p className="slide-body mt-4 max-w-[420px] text-navy/70">{s.c}</p>
            </div>
          ))}
        </div>
        <p className="slide-cap uppercase tracking-[0.28em] text-navy/70">
          What ASAL does <span className="text-blue">+</span> How ASAL works <span className="text-blue">+</span>{" "}
          Who ASAL is
        </p>
      </div>
    </Slide>
  );
}

/* 07 ------------------------------------------------------------------ */
function DividerOne() {
  return (
    <Slide tone="deep" className="vignette">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="06" label="Section" />
        <div>
          <span className="num block text-[220px] leading-none text-offwhite/8 reveal-fade">01</span>
          <h2 className="slide-mega -mt-16 text-offwhite reveal">The Process</h2>
          <div className="rule-blue mt-10 w-[220px] reveal-wipe" style={d(2)} />
          <p className="slide-sub mt-8 font-light uppercase tracking-[0.06em] text-blue-soft reveal" style={d(3)}>
            From placement → to final form
          </p>
        </div>
        <ol className="flex gap-0">
          {[
            "Formwork preparation",
            "Workers setting up the structure",
            "Materials being placed",
            "Construction / formwork process",
            "Progress shots",
            "Final completed structure",
          ].map((s, i) => (
            <li key={s} className="flex-1 border-t border-offwhite/20 pr-6 pt-4 reveal" style={d(3 + i)}>
              <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
              <p className="slide-cap mt-2 text-offwhite/70">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}

/* 08 ------------------------------------------------------------------ */
const BOARD_A = [
  { no: "01", title: "Preparation", note: "Formwork components and materials prepared within the work environment.", shot: "Establishing / wide", move: "wide", img: a1 },
  { no: "02", title: "Setup", note: "Workers begin positioning and assembling the structure.", shot: "Wide + medium", move: "pan", img: a2 },
  { no: "03", title: "Placement", note: "Close-up details of materials and formwork components being positioned.", shot: "Macro / detail", move: "push in", img: a3 },
  { no: "04", title: "Process", note: "The formwork process actively taking shape.", shot: "Dynamic wide + medium", move: "track", img: a4 },
  { no: "05", title: "Progress", note: "The structure develops through the stages of construction.", shot: "Progress / observational", move: "lock off", img: a5 },
  { no: "06", title: "Final result", note: "The completed structure.", shot: "Hero wide", move: "tilt up", img: a6 },
];

function BoardOne() {
  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between">
          <SlideHeader index="07" label="Storyboard 01 — The Formwork Journey" tone="light" />
          <span className="editorial text-[20px] text-navy/50">director&apos;s board · not final frames</span>
        </div>
        <div className="grid grid-cols-3 gap-x-9 gap-y-7">
          {BOARD_A.map((f) => (
            <StoryFrame key={f.no} {...f} className="reveal" />
          ))}
        </div>
        <div className="flex items-center gap-6">
          <span className="kicker text-navy/45">Sequence</span>
          <span className="h-px flex-1 bg-navy/15" />
          <span className="kicker text-blue">Preparation → Final structure</span>
        </div>
      </div>
    </Slide>
  );
}

/* 09 ------------------------------------------------------------------ */
function MatchCut() {
  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between">
          <SlideHeader index="08" label="The Signature Moment" />
          <h2 className="slide-title text-offwhite reveal">The transition</h2>
        </div>

        <div className="relative grid grid-cols-2 items-center gap-24">
          <div className="reveal">
            <span className="kicker text-blue-soft">Frame A — Placement</span>
            <div className="sb-frame mt-4 aspect-video border border-offwhite/25">
              <img src={a3} alt="Storyboard: worker placing a formwork component" loading="lazy" width={1024} height={576} className="h-full w-full object-cover" />
              <span className="absolute inset-3 border border-blue/30" />
            </div>
            <p className="slide-cap mt-3 text-offwhite/60">A worker places a formwork component.</p>
          </div>

          <div className="reveal" style={d(2)}>
            <span className="kicker text-blue-soft">Frame B — Outcome</span>
            <div className="sb-frame mt-4 aspect-video border border-offwhite/25">
              <img src={a6} alt="Storyboard: the same position within the completed structure" loading="lazy" width={1024} height={576} className="h-full w-full object-cover" />
              <span className="absolute inset-3 border border-blue/30" />
            </div>
            <p className="slide-cap mt-3 text-offwhite/60">
              The same position becomes part of the completed building / structure.
            </p>
          </div>

          {/* connector */}
          <svg className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="180" height="60" viewBox="0 0 180 60" fill="none" aria-hidden="true">
            <path d="M4 30h150M150 24l8 6-8 6" stroke="var(--asal-blue)" strokeWidth="1.4" />
            <circle cx="4" cy="30" r="3" fill="var(--asal-blue)" />
          </svg>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-3 kicker text-blue">Match cut</span>
        </div>

        <div className="flex items-end justify-between">
          <p className="slide-lead max-w-[640px] text-offwhite/75">
            The composition connects the action to the outcome — a satisfying visual relationship between effort
            and result, and one of the signature moments of the film.
          </p>
          <span className="slide-cap uppercase tracking-[0.28em] text-cream">
            Placement <span className="text-blue">→</span> Transformation <span className="text-blue">→</span> Result
          </span>
        </div>
      </div>
    </Slide>
  );
}

/* 10 ------------------------------------------------------------------ */
function WhyMatchCut() {
  const steps = ["The action", "The process", "The transformation", "The final result"];
  return (
    <Slide tone="beige">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="09" label="Why the match cut matters" tone="light" />
        <div>
          <h2 className="slide-hero text-navy reveal">
            Every detail
            <span className="block text-blue">has an outcome.</span>
          </h2>
          <p className="slide-lead mt-8 max-w-[660px] text-navy/70 reveal" style={d(2)}>
            Instead of simply showing the finished structure, we show the relationship between the work and the
            result.
          </p>
        </div>
        <div className="flex items-stretch">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-1 items-center reveal" style={d(3 + i)}>
              <div className="flex-1 border-t-2 border-navy/80 pt-5">
                <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
                <p className="slide-sub mt-2 uppercase text-navy">{s}</p>
              </div>
              {i < steps.length - 1 && <span className="px-6 text-blue">→</span>}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* 11 ------------------------------------------------------------------ */
function DividerTwo() {
  return (
    <Slide tone="deep" className="vignette">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="10" label="Section" />
        <div>
          <span className="num block text-[220px] leading-none text-offwhite/8 reveal-fade">02</span>
          <h2 className="slide-mega -mt-16 text-offwhite reveal">The Person</h2>
          <div className="rule-blue mt-10 w-[220px] reveal-wipe" style={d(2)} />
          <p className="slide-sub mt-8 font-light uppercase tracking-[0.06em] text-blue-soft reveal" style={d(3)}>
            Behind the process
          </p>
        </div>
        <p className="editorial max-w-[760px] text-[26px] text-cream reveal" style={d(4)}>
          Asal becomes the primary subject of the documentary. Not as a conventional talking head — but as the
          person who understands the work from the inside.
        </p>
      </div>
    </Slide>
  );
}

/* 12 ------------------------------------------------------------------ */
function AsalTalks() {
  const topics = [
    "What he does",
    "How the company / work operates",
    "The formwork process",
    "Challenges involved",
    "His approach to the work",
    "What makes their work different",
    "His personal journey / experience",
  ];
  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="11" label="Asal's Story" tone="light" />
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <h2 className="slide-title text-navy reveal">Asal speaks naturally about</h2>
            <p className="slide-body mt-8 max-w-[400px] text-navy/70 reveal" style={d(2)}>
              While Asal speaks, the narration is continuously supported by cinematic B-roll and montage
              sequences.
            </p>
            <div className="sb-frame mt-8 aspect-video w-[380px] border border-navy/20 reveal" style={d(3)}>
              <img src={b2} alt="Storyboard: Asal speaking in a documentary interview frame" loading="lazy" width={1024} height={576} className="h-full w-full object-cover" />
              <span className="absolute inset-3 border border-blue/25" />
            </div>
          </div>
          <ul className="col-span-7 self-center">
            {topics.map((t, i) => (
              <li key={t} className="flex items-baseline gap-8 border-b border-navy/12 py-[18px] reveal" style={d(2 + i)}>
                <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
                <span className="slide-sub text-navy">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div />
      </div>
    </Slide>
  );
}

/* 13 ------------------------------------------------------------------ */
const BOARD_B = [
  { no: "01", title: "Opening", note: "Strong cinematic factory / construction visuals. Asal is introduced.", shot: "Interview / Voice", move: "push in", img: b1 },
  { no: "02", title: "Asal", note: "Asal speaks naturally about his work.", shot: "Interview / Voice", move: "lock off", img: b2 },
  { no: "03", title: "The work", note: "Workers, machinery, formwork, materials and factory environment.", shot: "B-roll", move: "pan", img: b3 },
  { no: "04", title: "The challenge", note: "Asal explains the process and challenges involved.", shot: "Interview / Voice", move: "cut", img: b4 },
  { no: "05", title: "The process", note: "Fast-paced cinematic montage of the actual work.", shot: "B-roll montage", move: "whip", img: b5 },
  { no: "06", title: "The ending", note: "A strong final shot of Asal, the factory or the completed work.", shot: "Premium brand ending", move: "tilt up", img: b6 },
];

function BoardTwo() {
  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between">
          <SlideHeader index="12" label="Storyboard 02 — The Documentary Story" tone="light" />
          <span className="editorial text-[20px] text-navy/50">director&apos;s board · not final frames</span>
        </div>
        <div className="grid grid-cols-3 gap-x-9 gap-y-7">
          {BOARD_B.map((f) => (
            <StoryFrame key={f.no} {...f} className="reveal" />
          ))}
        </div>
        <div className="flex items-center gap-6">
          <span className="kicker text-navy/45">Rhythm</span>
          <span className="h-px flex-1 bg-navy/15" />
          <span className="kicker text-blue">Voice → Visual → Voice → Visual</span>
        </div>
      </div>
    </Slide>
  );
}

/* 14 ------------------------------------------------------------------ */
function Rhythm() {
  const beats = [
    { k: "Opening", v: "Factory / construction" },
    { k: "Voice", v: "Asal introduces the work" },
    { k: "B-roll", v: "Workers / machinery / formwork / materials" },
    { k: "Voice", v: "Process + challenges" },
    { k: "B-roll montage", v: "Actual work in motion" },
    { k: "Ending", v: "Asal / factory / completed structure" },
  ];
  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="13" label="The Documentary Rhythm" />
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-4">
            <h2 className="slide-title text-offwhite reveal">
              Voice
              <span className="block text-blue-soft">Visual</span>
              Voice
              <span className="block text-blue-soft">Visual</span>
            </h2>
          </div>
          <ol className="col-span-8 self-center">
            {beats.map((b, i) => (
              <li key={b.k + i} className="flex items-baseline gap-8 border-b border-offwhite/12 py-4 reveal" style={d(1 + i)}>
                <span className="num slide-cap w-8 text-blue">{String(i + 1).padStart(2, "0")}</span>
                <span className="w-[220px] slide-cap uppercase tracking-[0.16em] text-cream">{b.k}</span>
                <span className="slide-body text-offwhite/80">{b.v}</span>
              </li>
            ))}
          </ol>
        </div>
        <div />
      </div>
    </Slide>
  );
}

/* 15 ------------------------------------------------------------------ */
function HumanConnection() {
  const pillars = ["Experience", "Expertise", "Process", "Leadership", "Trust", "Brand"];
  return (
    <Slide tone="deep" className="vignette">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="14" label="The Human Connection" />
        <div>
          <h2 className="slide-hero text-offwhite reveal">
            The brand
            <span className="block text-blue-soft">has a face.</span>
          </h2>
          <p className="slide-lead mt-6 max-w-[660px] text-offwhite/70 reveal" style={d(2)}>
            Asal isn&apos;t simply appearing in the film. He becomes the human connection between:
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            {pillars.map((p, i) => (
              <span key={p} className="slide-lead font-light uppercase text-offwhite/90 reveal" style={d(3 + i)}>
                {p}
                {i < pillars.length - 1 && <span className="ml-6 text-blue">·</span>}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between gap-16 border-t border-offwhite/15 pt-6">
          <p className="editorial max-w-[560px] text-[26px] text-cream">
            “Personal branding without looking like personal branding.”
          </p>
          <p className="slide-body max-w-[400px] text-right text-offwhite/60">
            The goal is to document the expert — not create a conventional influencer video.
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* 16 ------------------------------------------------------------------ */
function Reels() {
  const consistency = [
    "Documentary feel",
    "Visual identity",
    "Cinematic lighting",
    "Natural performance",
    "Strong compositions",
    "Controlled camera movement",
    "Authentic work environment",
    "B-roll-driven storytelling",
    "Cinematic sound design",
    "Premium colour grading",
  ];
  return (
    <Slide tone="beige">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="15" label="Personal Branding Reels" tone="light" />
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <h2 className="slide-title text-navy reveal">
              One<br />documentary
              <span className="block text-blue">world.</span>
            </h2>
            <p className="slide-lead mt-6 max-w-[420px] text-navy/75 reveal" style={d(2)}>
              Approximately <span className="num text-navy">4–5</span> personal branding reels featuring Asal.
            </p>
            <p className="slide-body mt-6 max-w-[420px] text-navy/65 reveal" style={d(3)}>
              The result is a consistent personal brand rather than disconnected social media videos.
            </p>
          </div>
          <div className="col-span-7 self-center">
            <p className="kicker text-navy/45">Every reel maintains the same</p>
            <div className="mt-6 grid grid-cols-2 gap-x-12">
              {consistency.map((c, i) => (
                <div key={c} className="flex items-center gap-4 border-b border-navy/12 py-[11px] reveal" style={d(2 + i * 0.6)}>
                  <span className="h-1 w-1 bg-blue" />
                  <span className="slide-body text-navy/80">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div />
      </div>
    </Slide>
  );
}

/* 17 ------------------------------------------------------------------ */
function Ecosystem() {
  const chain = [
    "Hero documentary",
    "Formwork process film",
    "Personal brand reels",
    "Cinematic B-roll",
    "Montage content",
    "Brand visual library",
  ];
  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="16" label="The Content Ecosystem" />
        <div className="flex items-end justify-between gap-20">
          <h2 className="slide-hero text-offwhite reveal">
            One shoot.
            <span className="block text-blue-soft">Multiple stories.</span>
          </h2>
          <p className="slide-lead max-w-[380px] text-offwhite/70 reveal" style={d(2)}>
            The objective is to create a content world, not just a single video.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-5">
          {chain.map((c, i) => (
            <div key={c} className="relative border-t-2 border-blue/70 pt-6 reveal" style={d(2 + i)}>
              <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 slide-body uppercase leading-tight tracking-[0.06em] text-offwhite">{c}</p>
              {i < chain.length - 1 && (
                <span className="absolute -right-3 top-[-9px] text-[13px] text-blue">→</span>
              )}
            </div>
          ))}
        </div>
        <Rationale>a consistent documentary language lets every asset feel like one premium brand world.</Rationale>
      </div>
    </Slide>
  );
}

/* 18 ------------------------------------------------------------------ */
function VisualLanguage() {
  const items = [
    { k: "Cinematic", v: "Controlled lighting, compositions and camera movement." },
    { k: "Authentic", v: "The real factory. The real people. The real process." },
    { k: "Industrial", v: "Machinery. Materials. Textures. Scale." },
    { k: "Human", v: "Asal. Workers. Experience. Story." },
    { k: "Premium", v: "Sound design. Colour grading. Editing. Visual consistency." },
  ];
  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="17" label="The Visual Language" tone="light" />
        <h2 className="slide-title text-navy reveal">
          This is how ASAL <span className="text-blue">should feel.</span>
        </h2>
        <div className="grid grid-cols-5 gap-8">
          {items.map((it, i) => (
            <div key={it.k} className="flex flex-col reveal" style={d(1 + i)}>
              <VisualGlyph i={i} />
              <h3 className="mt-8 slide-sub uppercase text-navy">{it.k}</h3>
              <p className="slide-body mt-4 text-navy/65">{it.v}</p>
            </div>
          ))}
        </div>
        <div />
      </div>
    </Slide>
  );
}

function VisualGlyph({ i }: { i: number }) {
  const s = { stroke: "var(--asal-blue)", strokeWidth: 1.2, fill: "none" } as const;
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true" className="text-blue">
      {i === 0 && (
        <>
          <rect x="8" y="20" width="80" height="46" {...s} />
          <path d="M8 32h80M8 54h80" {...s} strokeOpacity="0.4" />
        </>
      )}
      {i === 1 && (
        <>
          <path d="M8 76L34 30l18 30 12-18 24 34" {...s} />
          <circle cx="70" cy="20" r="7" {...s} />
        </>
      )}
      {i === 2 && (
        <>
          {[0, 1, 2, 3].map((n) => (
            <rect key={n} x={8 + n * 20} y={20 + n * 6} width="14" height={56 - n * 6} {...s} />
          ))}
        </>
      )}
      {i === 3 && (
        <>
          <circle cx="48" cy="30" r="12" {...s} />
          <path d="M20 78c0-16 12-26 28-26s28 10 28 26" {...s} />
        </>
      )}
      {i === 4 && (
        <>
          <path d="M48 10l38 38-38 38-38-38z" {...s} />
          <path d="M48 30l18 18-18 18-18-18z" {...s} strokeOpacity="0.45" />
        </>
      )}
    </svg>
  );
}

/* 19 ------------------------------------------------------------------ */
function Cinematography() {
  const lenses = [
    { n: "16", u: "mm", v: "Wide establishing / environment shots" },
    { n: "35", u: "mm", v: "Interviews / cinematic medium shots" },
    { n: "90", u: "mm Macro", v: "Machinery / materials / textures / close-ups" },
  ];
  return (
    <Slide tone="deep" className="vignette">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between">
          <SlideHeader index="18" label="The Cinematography" />
          <h2 className="slide-title text-offwhite reveal">Shot with intention.</h2>
        </div>
        <div className="grid grid-cols-3 gap-14">
          {lenses.map((l, i) => (
            <div key={l.n} className="border-t border-offwhite/25 pt-8 reveal" style={d(1 + i)}>
              <span className="num text-[132px] leading-[0.8] text-offwhite">
                {l.n}
                <span className="ml-2 slide-cap uppercase tracking-[0.2em] text-blue">{l.u}</span>
              </span>
              <p className="slide-body mt-8 max-w-[300px] text-offwhite/70">{l.v}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-14 border-t border-offwhite/15 pt-7">
          <div>
            <span className="kicker text-blue-soft">Camera</span>
            <p className="slide-body mt-3 text-offwhite/85">Sony FX3 / equivalent Surya Cam · Drone</p>
          </div>
          <div>
            <span className="kicker text-blue-soft">Lighting</span>
            <p className="slide-body mt-3 text-offwhite/85">Nanlite 300D × 2 · Nanlite 4-ft Tube Light × 2</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* 20 ------------------------------------------------------------------ */
function Production() {
  const phases = [
    { k: "Pre-production", v: ["Factory tour", "Location planning", "Interview locations", "B-roll locations", "Wardrobe preparation", "Machinery preparation"] },
    { k: "Production", v: ["Talking head", "Process filming", "Montages", "Drone", "Cinematic B-roll"] },
    { k: "Post-production", v: ["Editing", "Match cuts", "Sound design", "Colour grading", "Final brand treatment"] },
  ];
  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="19" label="The Production" tone="light" />
        <h2 className="slide-hero text-navy reveal">
          Built like <span className="text-blue">a film.</span>
        </h2>
        <div className="grid grid-cols-3 gap-16">
          {phases.map((p, i) => (
            <div key={p.k} className="relative reveal" style={d(1 + i)}>
              <div className="rule-blue w-full" />
              <div className="mt-6 flex items-baseline gap-4">
                <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="slide-sub uppercase text-navy">{p.k}</h3>
              </div>
              <ul className="mt-6">
                {p.v.map((v) => (
                  <li key={v} className="slide-body border-b border-navy/10 py-2.5 text-navy/70">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="slide-cap uppercase tracking-[0.26em] text-navy/55">
          Carefully produced — not simply filmed
        </p>
      </div>
    </Slide>
  );
}

/* 21 ------------------------------------------------------------------ */
function FactoryTour() {
  const areas = [
    "Main work areas",
    "Machinery",
    "Formwork production / process areas",
    "Material storage",
    "Worker areas",
    "Important operational sections",
    "Potential interview locations",
    "Potential cinematic B-roll locations",
  ];
  const identify = ["Best locations", "Camera angles", "Lighting opportunities", "Storytelling moments"];
  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="20" label="The Factory Tour" />
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <h2 className="slide-title text-offwhite reveal">
              Before the <span className="block text-blue-soft">camera rolls.</span>
            </h2>
            <p className="kicker mt-10 text-offwhite/40">Why this matters — the tour helps identify</p>
            <ul className="mt-5">
              {identify.map((v, i) => (
                <li key={v} className="slide-sub border-b border-offwhite/12 py-3 font-light text-cream reveal" style={d(3 + i)}>
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-7 self-center">
            <p className="kicker text-offwhite/40">The production team will be taken through</p>
            <div className="mt-6 grid grid-cols-2 gap-x-12">
              {areas.map((c, i) => (
                <div key={c} className="flex items-baseline gap-5 border-b border-offwhite/12 py-3.5 reveal" style={d(1 + i)}>
                  <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span className="slide-body text-offwhite/85">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div />
      </div>
    </Slide>
  );
}

/* 22 ------------------------------------------------------------------ */
function ClientPrep() {
  const items = [
    { k: "Wardrobe", v: "4–5 formal shirts for Asal. Different outfits across reels to maintain visual variety." },
    { k: "Location", v: "Factory / work location properly cleaned and organised before the shoot." },
    { k: "Machinery", v: "All major machines operational and available." },
    { k: "Materials", v: "Important equipment and materials properly arranged for filming." },
  ];
  return (
    <Slide tone="beige">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="21" label="Client Preparation" tone="light" />
        <h2 className="slide-hero text-navy reveal">
          To make the film
          <span className="block text-blue">look its best.</span>
        </h2>
        <div className="grid grid-cols-4 gap-10">
          {items.map((it, i) => (
            <div key={it.k} className="border-t-2 border-navy/80 pt-6 reveal" style={d(1 + i)}>
              <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 slide-sub uppercase text-navy">{it.k}</h3>
              <p className="slide-body mt-4 text-navy/70">{it.v}</p>
            </div>
          ))}
        </div>
        <div />
      </div>
    </Slide>
  );
}

/* 23 ------------------------------------------------------------------ */
function OnCamera() {
  const rules = [
    "Wear proper work attire",
    "Follow appropriate safety protocols",
    "Use required PPE / safety equipment",
    "Maintain a clean and professional appearance",
  ];
  return (
    <Slide tone="charcoal">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="22" label="The People on Camera" />
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-6">
            <h2 className="slide-title text-offwhite reveal">
              Real work.
              <span className="block text-blue-soft">Professional presentation.</span>
            </h2>
            <p className="slide-body mt-8 max-w-[420px] text-offwhite/60 reveal" style={d(2)}>
              All workers appearing on camera should:
            </p>
          </div>
          <ul className="col-span-6 self-center">
            {rules.map((r, i) => (
              <li key={r} className="flex items-baseline gap-6 border-b border-offwhite/15 py-4 reveal" style={d(2 + i)}>
                <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
                <span className="slide-sub font-light text-offwhite">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="slide-cap uppercase tracking-[0.3em] text-cream">
          Visual quality <span className="text-blue">+</span> Safety credibility
        </p>
      </div>
    </Slide>
  );
}

/* 24 ------------------------------------------------------------------ */
function Crew() {
  const members = [
    { name: "Rohith", role: "Creative Lead / Producer" },
    { name: "Karthi", role: "Director / Cinematographer" },
    { name: "Surya", role: "Camera Operator" },
    { name: "Hirthik", role: "Production Assistant" },
    { name: "Drone Person", role: "Aerial Cinematography" },
  ];

  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between">
          <SlideHeader index="23" label="The Production Team" tone="light" />
          <SdsMark variant="dark" className="h-7" />
        </div>
        <div>
          <h2 className="slide-title text-navy reveal">The crew</h2>
          <div className="mt-12 grid grid-cols-5 gap-6">
            {members.map((m, i) => (
              <div key={m.name} className="border-t-2 border-navy/80 pt-6 reveal" style={d(1 + i)}>
                <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="slide-sub mt-4 uppercase text-navy font-semibold">{m.name}</h3>
                <p className="slide-cap mt-2 text-navy/60 uppercase tracking-[0.08em]">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-navy/20 pt-6">
          <div className="flex items-center gap-4">
            <span className="kicker text-navy/45">Team Strength</span>
            <span className="slide-body font-medium text-navy/80">5 Key Production Members</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="kicker text-navy/45">Transportation</span>
            <p className="slide-body text-navy/70">Car required for the production team and equipment movement.</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* 25 ------------------------------------------------------------------ */
function ShootPlan() {
  const days = [
    { k: "Day 01", v: "Hot Division + Talking Head" },
    { k: "Day 02", v: "Montages + Drone Shots" },
    { k: "Day 03", v: "Script Shooting" },
    { k: "Next Day", v: "Completing Backup + Missing Shots" },
  ];
  return (
    <Slide tone="deep" className="vignette">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="24" label="Shoot Plan" />
        <h2 className="slide-hero text-offwhite reveal">
          3.5 days.
          <span className="block text-blue-soft">One complete content world.</span>
        </h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-[7px] h-px bg-offwhite/20" />
          <div className="relative grid grid-cols-4 gap-10">
            {days.map((day, i) => (
              <div key={day.k} className="reveal" style={d(1 + i)}>
                <span className="block h-[15px] w-[15px] -translate-y-[0px] rotate-45 border border-blue bg-navy-deep" />
                <span className="mt-8 block kicker text-blue">{day.k}</span>
                <p className="slide-sub mt-4 font-light text-offwhite">{day.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div />
      </div>
    </Slide>
  );
}

/* 26 ------------------------------------------------------------------ */
const BUILDS = [
  { k: "Brand recognition", v: "A consistent documentary visual identity creates a recognisable ASAL brand world." },
  { k: "Human connection", v: "Asal becomes a recognisable face and voice behind the company." },
  { k: "Process understanding", v: "The audience gets to see how the work actually happens." },
  { k: "Expert positioning", v: "Asal's experience and approach become part of the brand story." },
  { k: "Differentiation", v: "A documentary-led approach separates ASAL from conventional corporate construction content." },
  { k: "Premium perception", v: "Cinematic production communicates a stronger sense of quality, scale and professionalism." },
  { k: "Content value", v: "One production creates multiple stories, reels, B-roll sequences and visual assets." },
  { k: "Emotional connection", v: "The audience doesn't only see the final structure. They see the people and precision behind it." },
];

function MoreThanVideo() {
  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between">
          <SlideHeader index="25" label="What this film builds" />
          <h2 className="slide-title text-offwhite reveal">More than a video.</h2>
        </div>
        <div className="grid grid-cols-4 gap-x-12 gap-y-9">
          {BUILDS.map((b, i) => (
            <div key={b.k} className="border-t border-offwhite/20 pt-5 reveal" style={d(1 + i)}>
              <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 slide-body uppercase tracking-[0.1em] text-cream">{b.k}</h3>
              <p className="slide-cap mt-3 text-offwhite/60">{b.v}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-offwhite/15 pt-5">
          <span className="kicker text-blue-soft">Content Impact</span>
          <p className="slide-cap uppercase tracking-[0.24em] text-cream">
            Strategy <span className="text-blue">+</span> Storytelling <span className="text-blue">+</span> Brand Equity
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* 27 ------------------------------------------------------------------ */
function Transformation() {
  return (
    <Slide tone="light" bare>
      <div className="grid h-full grid-cols-2">
        <div className="flex flex-col justify-between bg-beige px-[80px] py-[78px]">
          <span className="kicker text-navy/45">Before</span>
          <div>
            <p className="slide-cap uppercase tracking-[0.24em] text-navy/50">A company that shows</p>
            <h3 className="slide-hero mt-6 text-navy/80 reveal">What we build</h3>
          </div>
          <span className="h-px w-24 bg-navy/25" />
        </div>
        <div className="flex flex-col justify-between bg-navy px-[80px] py-[78px]">
          <span className="kicker text-blue-soft">After</span>
          <div>
            <p className="slide-cap uppercase tracking-[0.24em] text-offwhite/50">A brand that communicates</p>
            <ul className="mt-6">
              {["Who builds it", "How it is built", "Why it matters", "What makes it different"].map((v, i) => (
                <li key={v} className="text-[32px] font-medium border-b border-offwhite/12 py-2.5 uppercase text-offwhite reveal" style={d(1 + i)}>
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <p className="slide-title text-blue-soft">
            From company
            <span className="block text-offwhite">to brand.</span>
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* 28 ------------------------------------------------------------------ */
function CoreStory() {
  const words = ["People.", "Process.", "Precision.", "Machinery.", "Scale.", "Expertise.", "Final result."];
  return (
    <Slide tone="deep" className="vignette">
      <div className="flex h-full flex-col justify-center">
        <div className="grid grid-cols-2 gap-x-24">
          {words.map((w, i) => (
            <h2
              key={w}
              className="slide-title py-2 text-offwhite reveal"
              style={{ ...d(1 + i), opacity: 1 }}
            >
              <span className="num mr-6 slide-cap align-super text-blue">{String(i + 1).padStart(2, "0")}</span>
              {w}
            </h2>
          ))}
          <h2 className="slide-title py-2 text-blue-soft reveal" style={d(9)}>
            This is ASAL.
          </h2>
        </div>
      </div>
    </Slide>
  );
}

/* 29 ------------------------------------------------------------------ */
function FinalExperience() {
  const know = [
    "What ASAL does.",
    "How ASAL works.",
    "Who ASAL is.",
    "What makes the work different.",
    "Why the process matters.",
  ];
  return (
    <Slide tone="beige">
      <div className="flex h-full flex-col justify-between">
        <SlideHeader index="26" label="The Final Experience" tone="light" />
        <div className="grid grid-cols-12 gap-16 items-center my-auto">
          <div className="col-span-5">
            <h2 className="slide-title text-navy reveal">The audience should leave knowing</h2>
            <p className="slide-lead mt-6 text-navy/70 reveal" style={d(2)}>
              Every frame and narrative beat is crafted to leave a clear, lasting impression of ASAL&apos;s identity and capabilities.
            </p>
          </div>
          <ul className="col-span-7">
            {know.map((k, i) => (
              <li key={k} className="flex items-baseline gap-6 border-b border-navy/15 py-3.5 reveal" style={d(1 + i)}>
                <span className="num slide-cap text-blue">{String(i + 1).padStart(2, "0")}</span>
                <span className="slide-sub font-normal text-navy">{k}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between border-t border-navy/15 pt-5">
          <span className="kicker text-navy/50">Core Takeaways</span>
          <p className="slide-cap uppercase tracking-[0.24em] text-navy/80">
            Awareness <span className="text-blue">→</span> Trust <span className="text-blue">→</span> Long-term Recognition
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* Previous Work Showcase ----------------------------------------------- */
function PreviousWork() {
  const works = [
    {
      no: "01 — BRAND FILM",
      url: "https://drive.google.com/file/d/1UALSk0ENT8SquUB9YAPbqKLQD1bmn9XA/preview",
      note: "Documentary-led narrative, natural performance, cinematic grade.",
    },
    {
      no: "02 — BRAND FILM",
      url: "https://drive.google.com/file/d/1LS8h9_rCqDtFE1gwOdlQafuGFJ1ZWJBv/preview",
      note: "Process-driven visuals, controlled camera movement, sound design.",
    },
  ];

  return (
    <Slide tone="navy">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <SlideHeader index="24" label="OUR PREVIOUS BRAND FILMS" />
          <SdsMark variant="badge" className="h-5" />
        </div>

        <div>
          <h2 className="slide-hero text-offwhite reveal">
            THE WORK BEHIND <span className="text-blue-soft">THE PROMISE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-10 my-auto">
          {works.map((w, i) => (
            <div key={w.no} className="flex flex-col reveal" style={d(1 + i * 2)}>
              <div className="relative aspect-video w-full overflow-hidden bg-black border border-offwhite/20">
                <iframe
                  src={w.url}
                  title={w.no}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-t border-offwhite/15 pt-3">
                <span className="slide-cap font-semibold uppercase tracking-[0.14em] text-blue-soft">{w.no}</span>
                <span className="slide-cap text-[14px] text-offwhite/70">{w.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="slide-cap uppercase tracking-[0.14em] text-blue font-medium">CREATIVE RATIONALE — </span>
          <span className="slide-cap uppercase tracking-[0.14em] text-blue">THIS IS THE EXACT CRAFT STANDARD WE WILL APPLY TO ASAL.</span>
        </div>
      </div>
    </Slide>
  );
}

/* Business Impact / What Asal Gains ------------------------------------ */
function BusinessImpact() {
  const gains = [
    {
      num: "01",
      title: "You stop competing on price.",
      body: "When a client sees the formwork process on film, the conversation moves from rate per square metre to engineering capability.",
    },
    {
      num: "02",
      title: "You shorten the sales cycle.",
      body: "The film answers the trust questions before the meeting. Contractors and developers arrive already convinced of your standard.",
    },
    {
      num: "03",
      title: "You become the known name.",
      body: "Asal on camera turns a supplier into a recognised industry voice. People buy from the person they have already listened to.",
    },
    {
      num: "04",
      title: "You get one year of content.",
      body: "One shoot produces the hero film, 4–5 reels and a library of B-roll for tenders, pitches, LinkedIn and the website.",
    },
    {
      num: "05",
      title: "You attract better people.",
      body: "Skilled labour and engineers join companies whose work looks serious. The film recruits while it sells.",
    },
    {
      num: "06",
      title: "You own an asset, not an ad.",
      body: "This footage keeps working in every proposal you send for years. No repeat spend, no expiry.",
    },
  ];

  return (
    <Slide tone="light">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <SlideHeader index="28" label="WHY THIS IS WORTH DOING" tone="light" />
            <h2 className="slide-hero mt-4 text-navy reveal max-w-[900px]">
              WHAT ASAL GAINS, <span className="block text-blue">DIRECTLY.</span>
            </h2>
          </div>
          <p className="slide-body max-w-[340px] text-navy/70 pt-6">
            This is not brand decoration. It is a B2B sales instrument built to win larger contracts.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-x-12 gap-y-7 my-auto">
          {gains.map((g, i) => (
            <div key={g.num} className="border-t border-navy/15 pt-4 reveal" style={d(1 + i)}>
              <span className="num slide-cap text-blue font-medium">{g.num}</span>
              <h3 className="slide-sub mt-2 text-[26px] font-semibold text-navy leading-snug">{g.title}</h3>
              <p className="slide-body mt-2 text-[15px] text-navy/65 leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-navy/15 pt-4">
          <p className="editorial text-[17px] text-navy/80">
            Position: ASAL is not a formwork supplier. ASAL is the engineering standard other builders are measured against.
          </p>
          <SdsMark variant="dark" className="h-5" showTag={false} />
        </div>
      </div>
    </Slide>
  );
}

/* 30 ------------------------------------------------------------------ */
function Closing() {
  return (
    <Slide tone="deep" bare className="vignette">
      <img
        src={cover}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full scale-x-[-1] object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/60" />
      <div className="absolute inset-0 flex flex-col justify-between px-[110px] py-[78px]">
        <SlideHeader index="29" label="Closing" />
        <div>
          <h2 className="slide-mega text-offwhite reveal">
            Let&apos;s build
            <span className="block text-blue-soft">the story.</span>
          </h2>
          <p className="slide-lead mt-10 max-w-[700px] text-offwhite/75 reveal" style={d(2)}>
            A premium documentary-led content system designed to make the work visible, the expertise memorable,
            and the brand human.
          </p>
          <div className="mt-8 flex gap-10 slide-cap uppercase tracking-[0.26em] text-cream reveal" style={d(3)}>
            <span>The work visible.</span>
            <span>The expertise memorable.</span>
            <span>The brand human.</span>
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-offwhite/20 pt-8">
          <div className="flex items-center gap-6">
            <Mark className="h-10" />
            <span className="h-6 w-px bg-offwhite/20" />
            <SdsMark variant="white" className="h-7" />
          </div>
          <span className="slide-cap uppercase tracking-[0.3em] text-offwhite/55">
            People <span className="text-blue">→</span> Process <span className="text-blue">→</span> Precision{" "}
            <span className="text-blue">→</span> Result
          </span>
        </div>
      </div>
    </Slide>
  );
}

export type SlideEntry = { label: string; component: ComponentType };

export const slides: SlideEntry[] = [
  { label: "Cover", component: Cover },
  { label: "The Big Idea", component: BigIdea },
  { label: "The Opportunity", component: Opportunity },
  { label: "What This Film Solves", component: Solves },
  { label: "The Creative Direction", component: Direction },
  { label: "One Brand. Two Stories.", component: TwoStories },
  { label: "Story 01 — The Process", component: DividerOne },
  { label: "Storyboard 01", component: BoardOne },
  { label: "The Transition", component: MatchCut },
  { label: "Why The Match Cut Matters", component: WhyMatchCut },
  { label: "Story 02 — The Person", component: DividerTwo },
  { label: "What Asal Talks About", component: AsalTalks },
  { label: "Storyboard 02", component: BoardTwo },
  { label: "The Documentary Rhythm", component: Rhythm },
  { label: "The Brand Has A Face", component: HumanConnection },
  { label: "Personal Branding Reels", component: Reels },
  { label: "Previous Work Showcase", component: PreviousWork },
  { label: "The Content Ecosystem", component: Ecosystem },
  { label: "The Visual Language", component: VisualLanguage },
  { label: "The Cinematography", component: Cinematography },
  { label: "The Production", component: Production },
  { label: "The Factory Tour", component: FactoryTour },
  { label: "Client Preparation", component: ClientPrep },
  { label: "The People On Camera", component: OnCamera },
  { label: "The Crew", component: Crew },
  { label: "Shoot Plan", component: ShootPlan },
  { label: "More Than A Video", component: MoreThanVideo },
  { label: "The Brand Transformation", component: Transformation },
  { label: "The Core Story", component: CoreStory },
  { label: "The Final Experience", component: FinalExperience },
  { label: "Direct B2B Business Impact", component: BusinessImpact },
  { label: "Let's Build The Story", component: Closing },
];