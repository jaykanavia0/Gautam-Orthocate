"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";
import { WolverineButton } from "./button";

interface FooterProps {
  onOpenBooking: () => void;
}

export const WolverineFooter: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020406] border-t border-white/10 pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden text-slate-300">
      {/* Background Decor */}
      <div className="ambient-glow -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-900/10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Top Split Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="w-badge w-badge-glow">
              RESTORING MOTION • REBUILDING LIVES
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[0.04em] text-white uppercase font-sans">
              Knee, Shoulder & Hip Care.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light">
              Arthroscopy, Joint Replacement & Sports Medicine Center under Dr. Shubham P. Shah in Surat.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
            <WolverineButton
              variant="cyan"
              onClick={onOpenBooking}
              className="text-base py-3.5 px-8 shadow-[0_0_30px_rgba(6,182,212,0.4)] w-full sm:w-auto justify-center"
            >
              Book In-Person Appointment
            </WolverineButton>

            <a
              href="tel:+917016838231"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-300 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contact: +91 70168 38231</span>
            </a>
          </div>
        </div>

        {/* Middle Navigation & Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-16 border-b border-white/10 text-xs font-mono">
          {/* Col 1 (4 cols) */}
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white p-1 flex items-center justify-center shrink-0 border border-white/20 shadow-md">
                <Image
                  src="/assets/logo.png"
                  alt="Gautam Ortho Care Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-sm text-white uppercase tracking-wider">
                GAUTAM ORTHO CARE
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Arthroscopy, Joint Replacement & Sports Medicine Center.
            </p>
            <div className="text-slate-300 space-y-2 text-[11px] leading-relaxed">
              <div>
                <strong className="text-cyan-400 block mb-0.5">📍 CLINIC ADDRESS:</strong>
                407, 4th Floor, Wood Square, Nr. Vasupujya App., L.P. Savani Road, Pal, Adajan, Surat.
              </div>
              <div>
                <strong className="text-cyan-400 block mb-0.5">🕐 CONSULTATION TIMINGS:</strong>
                Mon to Sat: 11:00 AM – 2:00 PM & 5:00 PM – 8:00 PM
              </div>
              <div>
                <strong className="text-cyan-400 block mb-0.5">📞 PHONE & APPOINTMENTS:</strong>
                <a href="tel:+917016838231" className="hover:text-white underline underline-offset-2">+91 70168 38231</a>
              </div>
            </div>
          </div>

          {/* Col 2 (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <div className="text-cyan-400 font-bold tracking-widest uppercase mb-2">
              [ SPECIALIZATIONS ]
            </div>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#specialties" className="hover:text-cyan-300">Robotic Total Knee Arthroplasty</a></li>
              <li><a href="#specialties" className="hover:text-cyan-300">Total Hip Replacement (THR)</a></li>
              <li><a href="#specialties" className="hover:text-cyan-300">Keyhole ACL & PCL Reconstruction</a></li>
              <li><a href="#specialties" className="hover:text-cyan-300">Meniscus Repair & Balancing</a></li>
              <li><a href="#specialties" className="hover:text-cyan-300">Rotator Cuff Shoulder Arthroscopy</a></li>
              <li><a href="#specialties" className="hover:text-cyan-300">Complex Pelvi-Acetabular Trauma</a></li>
            </ul>
          </div>

          {/* Col 3 (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <div className="text-cyan-400 font-bold tracking-widest uppercase mb-2">
              [ NAVIGATION ]
            </div>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#doctor" className="hover:text-cyan-300">About Dr. Shubham Shah</a></li>
              <li><a href="#technology" className="hover:text-cyan-300">Robotic Workflow (4-Step)</a></li>
              <li><a href="#outcomes" className="hover:text-cyan-300">Patient Recovery Stories</a></li>
              <li><a href="#insights" className="hover:text-cyan-300">5 Habits for Knee Health</a></li>
              <li><a href="#insights" className="hover:text-cyan-300">Quadriceps Exercises Guide</a></li>
              <li><a href="#locations" className="hover:text-cyan-300">OPD Centers & Timings</a></li>
              <li><a href="#faq" className="hover:text-cyan-300">Insurance & Cashless FAQ</a></li>
            </ul>
          </div>

          {/* Col 4 (2 cols) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-cyan-400 font-bold tracking-widest uppercase mb-2">
                [ SOCIAL & OPINION ]
              </div>
              <a
                href="https://www.instagram.com/drshubhamshahortho"
                target="_blank"
                rel="noreferrer"
                className="block text-slate-300 hover:text-cyan-300"
              >
                Instagram ↗
              </a>
              <a
                href="https://gautamorthocare.com"
                target="_blank"
                rel="noreferrer"
                className="block text-slate-300 hover:text-cyan-300"
              >
                Official Website ↗
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white p-3 rounded-2xl bg-white/5 border border-white/10 w-fit focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
              <span>TOP OF PAGE</span>
            </button>
          </div>
        </div>

        {/* Wolverine Giant Editorial Typography Wordmark */}
        <div className="py-12 select-none overflow-hidden text-center border-b border-white/10">
          <div className="text-[12vw] font-bold tracking-[0.03em] uppercase leading-none font-sans text-white/[0.07] hover:text-white/[0.12] transition-colors whitespace-nowrap">
            Gautam Orthocare
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© {new Date().getFullYear()} Gautam Orthocare & Dr. Shubham P. Shah. All Rights Reserved.</span>
          </div>
          <div>
            Surat, Gujarat, India • Medical Registration & Verified Practice
          </div>
        </div>
      </div>
    </footer>
  );
};
