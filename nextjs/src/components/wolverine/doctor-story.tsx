"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";
import { WolverineButton } from "./button";

interface DoctorStoryProps {
  onOpenBooking: () => void;
}

export const WolverineDoctorStory: React.FC<DoctorStoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctor" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-white text-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-badge">
            02 // SURGICAL EXCELLENCE & LEADERSHIP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Philosophy Chapters (7 Cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans mb-6">
                Clinical Precision. <br />
                Human Empathy.
              </h2>
              <p className="text-base sm:text-xl text-neutral-600 leading-relaxed font-normal">
                At Gautam Orthocare, joint restoration is a rigorous science of biomechanical alignment. Every knee and hip joint has unique natural kinematics. Our practice combines advanced robotic CT-navigation with anatomical soft-tissue preservation so patients return to active, pain-free lives.
              </p>
            </div>

            {/* Philosophy Chapters */}
            <div className="space-y-6">
              {/* Chapter 01 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
                  <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase font-bold">
                    CHAPTER 01 // SUB-MILLIMETER BONE PRESERVATION
                  </span>
                  <span className="text-xs font-mono text-neutral-950 font-bold">0.5mm Accuracy</span>
                </div>
                <h4 className="text-xl font-bold text-neutral-950 mb-2 font-sans">
                  Robotic Haptic Boundary Protection
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Traditional manual cuts rely on mechanical jigs with subjective visual tolerances. Our robotic platform enforces active haptic safety boundaries, eliminating accidental soft-tissue abrasion and conserving healthy bone stock for maximal implant longevity.
                </p>
              </div>

              {/* Chapter 02 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
                  <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase font-bold">
                    CHAPTER 02 // DYNAMIC KINEMATIC ALIGNMENT
                  </span>
                  <span className="text-xs font-mono text-neutral-950 font-bold">Patient-Specific</span>
                </div>
                <h4 className="text-xl font-bold text-neutral-950 mb-2 font-sans">
                  Custom Ligament Tension Balancing
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Rather than forcing every patient into an arbitrary average, we replicate your natural pre-arthritic joint line. Real-time digital sensors measure flexion and extension gaps under load, ensuring normal joint feel and zero post-op stiffness.
                </p>
              </div>

              {/* Chapter 03 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
                  <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase font-bold">
                    CHAPTER 03 // LAMINAR AIRFLOW SURGICAL ASEPSIS
                  </span>
                  <span className="text-xs font-mono text-emerald-700 font-bold">Zero Infection Protocol</span>
                </div>
                <h4 className="text-xl font-bold text-neutral-950 mb-2 font-sans">
                  Ultra-Clean Operating Theaters
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  All joint arthroplasties are performed under high-efficiency particulate air (HEPA) positive-pressure laminar airflow systems with strict barrier asepsis to guarantee zero surgical site infection risk.
                </p>
              </div>

              {/* Chapter 04 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-4">
                  <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase font-bold">
                    CHAPTER 04 // FAST-TRACK 24-HOUR AMBULATION
                  </span>
                  <span className="text-xs font-mono text-neutral-950 font-bold">Rapid Recovery</span>
                </div>
                <h4 className="text-xl font-bold text-neutral-950 mb-2 font-sans">
                  Tissue-Sparing Multimodal Analgesia
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Through adductor canal nerve blocks, minimally invasive muscle-splitting approaches, and local infiltration analgesia, patients experience minimal post-operative discomfort and stand on their feet within 18 to 24 hours.
                </p>
              </div>
            </div>

            {/* Action Banner */}
            <div className="p-8 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Second Opinions & Clinical Evaluations
                </div>
                <div className="text-lg font-bold text-white mt-1">
                  Have an existing MRI scan or X-ray?
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Consult Dr. Shubham Shah for an in-depth surgical case evaluation.
                </div>
              </div>

              <WolverineButton
                variant="white"
                onClick={onOpenBooking}
                className="shrink-0"
              >
                Book Direct Consultation
              </WolverineButton>
            </div>
          </div>

          {/* Right Column: Sticky Doctor Portrait & Fellowship Photo (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative rounded-[24px] overflow-hidden bg-neutral-100 border border-neutral-200 p-1.5 shadow-xl">
              <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden bg-neutral-900">
                <Image
                  src="/assets/my_profile.png"
                  alt="Dr. Shubham P. Shah"
                  fill
                  className="object-cover object-top filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-950">
                  <div className="flex items-center gap-2 text-neutral-600 font-mono text-xs uppercase mb-1 font-bold">
                    <GraduationCap className="w-4 h-4 text-neutral-950" /> Academic Credentials
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 font-sans">
                    Dr. Shubham P. Shah
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    MS (Orthopaedics), DNB (Orthopaedics)
                  </p>
                  <p className="text-xs text-neutral-800 font-mono mt-0.5 font-bold">
                    Fellow in Joint Replacement & Arthroscopy (RNH Hospital)
                  </p>
                </div>
              </div>
            </div>

            {/* Fellowship Award Recognition Card */}
            <div className="w-card p-5 border border-neutral-200 flex items-center gap-4 shadow-sm">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-neutral-200 bg-neutral-100">
                <Image
                  src="/assets/WhatsApp Image 2026-06-23 at 6.17.17 PM.jpeg"
                  alt="RNH Fellowship Recognition"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-bold">
                  Verified Accreditation
                </div>
                <div className="text-xs font-bold text-neutral-950 mt-0.5">
                  Robotic Fellowship Award Ceremony
                </div>
                <div className="text-[11px] text-neutral-600 mt-0.5">
                  Trained under Dr. Mukesh Laddha at RNH Hospital, Nagpur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
