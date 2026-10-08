"use client";

import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { ShieldCheck, Award, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { WolverineButton } from "./button";

interface HeroProps {
  onOpenBooking: () => void;
}

export const WolverineHero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      <LampContainer>
        {/* Top High-Contrast Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-md mb-4 text-center"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase">
            KNEE, SHOULDER AND HIP CARE
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-xs font-mono text-emerald-400 hidden sm:flex items-center gap-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> RNH FELLOWSHIP CERTIFIED
          </span>
        </motion.div>

        {/* Lamp Headline */}
        <motion.h1
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-1 bg-gradient-to-br from-white via-slate-100 to-slate-300 py-2 bg-clip-text text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent uppercase font-sans leading-[1.05] max-w-5xl"
        >
          Restoring Motion. <br />
          Rebuilding Lives.
        </motion.h1>

        {/* Specialty Center Highlight Pill below headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="mt-4 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-center shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-sm"
        >
          [ ARTHROSCOPY, JOINT REPLACEMENT & SPORTS MEDICINE CENTER ]
        </motion.div>

        {/* Subtitle & Doctor Info */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="mt-5 text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
        >
          <strong className="text-white font-medium">Gautam Ortho Care</strong> • Led by <strong className="text-white font-medium">Dr. Shubham P. Shah</strong> (MS, DNB Ortho, RNH Robotic Fellow) — Specializing in advanced sub-millimeter robotic joint restoration in Surat.
        </motion.p>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <WolverineButton
            variant="white"
            onClick={onOpenBooking}
            className="text-sm sm:text-base py-3.5 px-8 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.35)]"
          >
            Schedule Consultation
          </WolverineButton>

          <WolverineButton
            variant="glass"
            href="#specialties"
            className="text-sm sm:text-base py-3.5 px-8 text-white border-white/20 bg-white/10 hover:bg-white/20"
          >
            Explore Disciplines ↓
          </WolverineButton>

          <a
            href="https://www.instagram.com/drshubhamshahortho"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 px-3 py-2"
          >
            <span>@drshubhamshahortho</span>
            <span className="text-cyan-400">↗</span>
          </a>
        </motion.div>

        {/* Clinical Statistics Bar inside Lamp */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              4,000+
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">
              Surgeries Done
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Joints & keyhole repairs
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400 tracking-tight">
              99.4%
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">
              Alignment Accuracy
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              CT-guided robotic cuts
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              24-Hour
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">
              Fast Ambulation
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Painless recovery protocol
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
              100%
            </div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mt-1">
              Sterile Laminar OT
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Zero infection standard
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
};
