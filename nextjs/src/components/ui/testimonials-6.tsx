"use client";

import React from "react";
import { Sparkles, Star } from "lucide-react";
import { Testimonial as CleanTestimonial } from "@/components/ui/clean-testimonial";
import { WolverineButton } from "@/components/wolverine/button";

interface TestimonialsSectionProps {
  onOpenBooking?: () => void;
}

export function TestimonialsSection({ onOpenBooking }: TestimonialsSectionProps) {
  return (
    <section id="outcomes" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-white text-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8 mb-12">
          <div>
            <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>04 // PATIENT RECOVERY OUTCOMES & TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans">
              Patient Voices.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl mt-3">
              Real recovery journeys of restored joint mobility, pain-free walking, and athletic return under Dr. Shubham Shah&apos;s care in Surat.
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

        {/* Cinematic Widescreen Patient Testimonial Showcase */}
        <div className="mb-14">
          <CleanTestimonial />
        </div>

        {/* Bottom Direct Action Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
              Need Guidance on Robotic Joint Replacement or Sports Arthroscopy?
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
}

export default TestimonialsSection;
