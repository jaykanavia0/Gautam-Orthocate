"use client";

import React from "react";

const TICKER_ITEMS = [
  "RESTORING MOTION • REBUILDING LIVES",
  "ARTHROSCOPY, JOINT REPLACEMENT & SPORTS MEDICINE CENTER",
  "KNEE, SHOULDER AND HIP CARE",
  "DR. SHUBHAM P. SHAH (MS, DNB ORTHO)",
  "407 WOOD SQUARE • PAL • ADAJAN • SURAT",
  "SUB-MILLIMETER ROBOTIC PRECISION",
  "KEYHOLE LIGAMENT RECONSTRUCTION",
  "HELPLINE: +91 70168 38231",
];

export const WolverineMarquee: React.FC = () => {
  return (
    <div className="relative w-full py-5 bg-black text-white overflow-hidden border-y border-neutral-800 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
        {TICKER_ITEMS.concat(TICKER_ITEMS).concat(TICKER_ITEMS).map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mx-6 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
};
