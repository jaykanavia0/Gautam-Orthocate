"use client";

import React from "react";
import { Star, ShieldCheck, Quote, CheckCircle2, Sparkles } from "lucide-react";
import { WolverineButton } from "./button";

interface TestimonialItem {
  id: string;
  name: string;
  age: string;
  location: string;
  procedure: string;
  quote: string;
  recoveryNote: string;
  timeline: string;
  rating: number;
}

const REVIEWS: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Sunita Deshmukh",
    age: "58 Yrs",
    location: "Vesu, Surat",
    procedure: "Bilateral Robotic Knee Replacement",
    quote:
      "I had been suffering from severe knee stiffness and deformity for over 6 years. Dr. Shubham Shah guided me through the entire robotic process. I was walking with a walker within 24 hours of my surgery and returned to my normal temple walks in just 4 weeks!",
    recoveryNote: "Achieved full 125° knee flexion with painless weight bearing.",
    timeline: "Full Recovery: 4 Weeks",
    rating: 5,
  },
  {
    id: "review-2",
    name: "Amit Patel",
    age: "27 Yrs",
    location: "Adajan, Surat",
    procedure: "Arthroscopic ACL & Meniscus Reconstruction",
    quote:
      "Tore my anterior cruciate ligament during a weekend cricket match. Dr. Shubham’s keyhole surgery was seamless. The precision quad-graft technique and structured rehab program enabled me to resume running and athletic training without any knee instability.",
    recoveryNote: "Complete pivot stability restored; zero graft laxity.",
    timeline: "Athletic Return: 5 Months",
    rating: 5,
  },
  {
    id: "review-3",
    name: "Rahul B.",
    age: "46 Yrs",
    location: "City Light, Surat",
    procedure: "Unicompartmental (Partial) Knee Arthroplasty",
    quote:
      "Dr. Shubham recommended a partial knee replacement instead of removing my entire natural joint. His honest and deeply analytical clinical diagnosis saved healthy cartilage on my outer knee. My recovery was unbelievably fast with zero pain.",
    recoveryNote: "Retained native cruciate ligaments; natural knee kinematics.",
    timeline: "Full Recovery: 3 Weeks",
    rating: 5,
  },
  {
    id: "review-4",
    name: "Meera K.",
    age: "62 Yrs",
    location: "Ghod Dod Road, Surat",
    procedure: "Total Hip Replacement (Ceramic-on-Poly)",
    quote:
      "Severe hip arthritis made sitting down or walking excruciating. The surgical approach used by Dr. Shubham ensured zero limb-length discrepancy. I felt immediate relief from the chronic groin ache from day one.",
    recoveryNote: "Zero limp; equal leg length confirmed via digital measurement.",
    timeline: "Full Recovery: 5 Weeks",
    rating: 5,
  },
];

interface PatientOutcomesProps {
  onOpenBooking: () => void;
}

export const WolverinePatientOutcomes: React.FC<PatientOutcomesProps> = ({ onOpenBooking }) => {
  return (
    <section id="outcomes" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-white text-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8 mb-12">
          <div>
            <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>04 // CLINICAL OUTCOMES & RECOVERY TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans">
              Patient Voices.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl mt-3">
              Real journeys of restored mobility, independence, and athletic return under Dr. Shubham Shah&apos;s care in Surat.
            </p>
          </div>

          <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <div className="text-xs font-mono text-neutral-900 font-bold">
              4.9 / 5.0 Rating • 730+ Patients Treated
            </div>
          </div>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="w-card p-6 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-lg border border-neutral-200"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Quote className="w-5 h-5 text-neutral-900" />
                    <span className="w-badge text-[10px]">{rev.procedure}</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-700 font-bold">
                    {rev.timeline}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-800 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                {/* Clinical Note */}
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 font-mono flex items-start gap-2 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span>{rev.recoveryNote}</span>
                </div>
              </div>

              {/* Patient Bio Footer */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-neutral-950 font-sans">
                    {rev.name}
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    {rev.age} • {rev.location}
                  </div>
                </div>

                <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
              Need Guidance on Joint Replacement or Arthroscopy?
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-sans">
              Speak Directly with Dr. Shubham Shah
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Appointments available across Venus Hospital & Gautam Orthocare OPD clinics in Surat.
            </div>
          </div>

          <WolverineButton
            variant="white"
            onClick={onOpenBooking}
            className="shrink-0"
          >
            Book In-Person Consultation
          </WolverineButton>
        </div>
      </div>
    </section>
  );
};
