"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ShieldCheck, Activity, Cpu, ArrowRight } from "lucide-react";
import { WolverineButton } from "./button";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  features: string[];
  metric: string;
  metricLabel: string;
  image: string;
}

const TECH_STEPS: StepItem[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "3D CT Patient-Specific Mapping",
    subtitle: "Pre-Operative Virtual Digital Model Construction",
    description:
      "A high-resolution volumetric CT scan is converted into a 3D digital facsimile of your knee joint. Dr. Shubham Shah pre-plans the exact implant sizing, orientation, and bone cuts to align with your natural biomechanical axis down to 0.5 degrees.",
    badge: "PRE-OPERATIVE PLANNING",
    features: [
      "Customized patient-specific implant sizing",
      "Calculated bone-cut angles to 0.5 degrees",
      "Prediction of post-operative ligament balance",
      "Eliminates guesswork and arbitrary mechanical jigs",
    ],
    metric: "0.5°",
    metricLabel: "Rotational Precision",
    image: "/assets/WhatsApp Image 2026-06-23 at 6.17.41 PM.jpeg",
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Real-Time Intra-Op Optical Tracking",
    subtitle: "Active Infrared Navigation in the OT",
    description:
      "Sterile infrared optical arrays track microscopic joint motion at 60 frames per second. Real-time feedback instantly registers flexion-extension gaps and validates bone density before a single incision is made.",
    badge: "INTRA-OPERATIVE REAL-TIME FEEDBACK",
    features: [
      "Infrared spatial trackers detect dynamic kinematics",
      "Real-time soft-tissue tension graphs",
      "Instant feedback on joint stability under load",
      "Continuous synchronization with robotic guidance",
    ],
    metric: "60 FPS",
    metricLabel: "Infrared Optical Refresh",
    image: "/assets/hero_bg.jpg",
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Robotic Haptic Boundary Execution",
    subtitle: "Sub-Millimeter Safe Bone Resection",
    description:
      "The robotic arm enforces active haptic feedback. If the surgical burr moves even 1 millimeter outside the planned safe safety zone, the system automatically disengages, safeguarding vital collateral ligaments, nerves, and vessels.",
    badge: "SUB-MILLIMETER SAFETY",
    features: [
      "Active haptic barrier prevents soft tissue tears",
      "Zero risk of accidental posterior cruciate damage",
      "Minimal bone resection preserves maximum natural bone",
      "Substantially reduced intra-operative blood loss",
    ],
    metric: "< 1.0 mm",
    metricLabel: "Spatial Bone Margin",
    image: "/assets/blog_knee_habits.png",
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Fast-Track 24-Hour Recovery",
    subtitle: "Painless Functional Joint Rehabilitation",
    description:
      "Because surrounding muscles, tendons, and ligaments remain untraumatized, post-operative inflammation is dramatically lower. Patients begin assisted standing and walking within 18 to 24 hours of surgery.",
    badge: "POST-OPERATIVE REHABILITATION",
    features: [
      "Assisted walking initiated in under 24 hours",
      "Significantly lower narcotic pain medication requirement",
      "Hospital stay reduced to 2-3 days",
      "Return to daily active routines within 4-6 weeks",
    ],
    metric: "18-24 hrs",
    metricLabel: "First Steps Ambulation",
    image: "/assets/blog_quads_exercise.png",
  },
];

interface TechnologyShowcaseProps {
  onOpenBooking: () => void;
}

export const WolverineTechnologyShowcase: React.FC<TechnologyShowcaseProps> = ({ onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = TECH_STEPS[activeStepIndex];

  return (
    <section id="technology" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#f8f9fa] text-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8 mb-12">
          <div>
            <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>03 // ROBOTIC INNOVATION & SURGICAL WORKFLOW</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans">
              The Robotic Pathway.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl mt-3">
              How our 4-step computer-assisted robotic protocol achieves anatomical alignment and accelerated patient recovery.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-950 font-bold">
            <Cpu className="w-4 h-4" />
            <span>CT-GUIDED HAPTIC WORKFLOW</span>
          </div>
        </div>

        {/* 4 Step Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {TECH_STEPS.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 focus:outline-none group ${
                activeStepIndex === idx
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-white text-neutral-900 border-neutral-200 hover:border-black"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs tracking-widest uppercase font-bold ${
                    activeStepIndex === idx ? "text-neutral-300" : "text-neutral-400"
                  }`}
                >
                  STEP {step.stepNumber}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    activeStepIndex === idx ? "bg-white" : "bg-neutral-300"
                  }`}
                />
              </div>
              <div className="text-sm sm:text-base font-bold tracking-tight line-clamp-1 font-sans">
                {step.title}
              </div>
              <div
                className={`text-[11px] mt-1 font-mono ${
                  activeStepIndex === idx ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                {step.metric} • {step.metricLabel}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Grid */}
        <div className="w-card p-6 sm:p-10 lg:p-12 border border-neutral-200 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-md bg-white">
          {/* Left Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-badge">
                STEP {activeStep.stepNumber} // {activeStep.badge}
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-neutral-950 uppercase font-sans tracking-tight mb-2">
                {activeStep.title}
              </h3>
              <p className="text-neutral-600 font-mono text-sm">
                {activeStep.subtitle}
              </p>
            </div>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {activeStep.description}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activeStep.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-200">
              <WolverineButton
                variant="black"
                onClick={onOpenBooking}
              >
                Consult on Robotic Surgery
              </WolverineButton>

              <button
                type="button"
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % TECH_STEPS.length)}
                className="text-xs font-mono text-neutral-600 hover:text-black flex items-center gap-2 px-3 py-2 font-bold"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual Frame (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 group shadow-lg">
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

              {/* Metric Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 flex items-center justify-between text-neutral-950">
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    Precision Benchmark
                  </div>
                  <div className="text-xl font-bold font-mono text-neutral-950">
                    {activeStep.metric}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    Validation Standard
                  </div>
                  <div className="text-xs font-bold text-neutral-950">
                    {activeStep.metricLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
