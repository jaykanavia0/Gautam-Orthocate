"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Activity, ShieldCheck, Sparkles, X, CheckCircle2 } from "lucide-react";
import { WolverineButton } from "./button";

interface SpecialtyItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  stats: string;
  statLabel: string;
  highlights: string[];
  indications: string[];
  recoveryTimeline: string;
}

const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "joint-replacement",
    number: "01",
    tag: "ROBOTIC ARTHROPLASTY",
    title: "Robotic Joint Replacement",
    headline: "Knee & Hip Arthroplasty with Sub-Millimeter CT Navigation",
    description:
      "Advanced robotic-arm assisted total and partial joint replacements. Utilizing 3D pre-operative CT scans and real-time intraoperative optical trackers to achieve anatomical ligament balancing, minimal blood loss, and rapid 24-hour weight-bearing ambulation.",
    image: "/assets/WhatsApp Image 2026-06-23 at 6.17.41 PM.jpeg",
    stats: "99.4%",
    statLabel: "Implant Positioning Accuracy",
    highlights: [
      "Sub-millimeter bone resection margin",
      "Dynamic intraoperative ligament balancing",
      "US FDA approved biocompatible implants",
      "Rapid recovery fast-track protocol",
    ],
    indications: [
      "Severe Osteoarthritis & Cartilage Erosion",
      "Rheumatoid & Post-Traumatic Arthritis",
      "Avascular Necrosis (AVN) of the Hip",
      "Failed Previous Conservative Management",
    ],
    recoveryTimeline: "Independent walking with support in 24 hours; full daily activity within 4 to 6 weeks.",
  },
  {
    id: "arthroscopy",
    number: "02",
    tag: "KEYHOLE SURGERY",
    title: "Keyhole Arthroscopy",
    headline: "Minimally Invasive Sports Medicine & Ligament Reconstruction",
    description:
      "Precision keyhole procedures using high-definition 4K arthroscopic optics. Treating ACL/PCL tears, meniscus injuries, recurrent shoulder dislocations, and rotator cuff pathologies through miniature 4mm incisions for accelerated athletic rehabilitation.",
    image: "/assets/hero_bg.jpg",
    stats: "4mm",
    statLabel: "Micro-Incision Incision Size",
    highlights: [
      "High-definition 4K optical visualization",
      "Anatomic quad/hamstring tendon ACL graft",
      "Day-care procedure with same-day discharge",
      "Targeted sports rehabilitation roadmap",
    ],
    indications: [
      "ACL / PCL / Multi-Ligament Knee Tears",
      "Meniscus Tears & Bucket Handle Lesions",
      "Shoulder Labral Tears & Bankart Lesions",
      "Rotator Cuff Tears & Impingement",
    ],
    recoveryTimeline: "Full range-of-motion in 2-3 weeks; progressive athletic return in 4-6 months.",
  },
  {
    id: "trauma-care",
    number: "03",
    tag: "CRITICAL RECONSTRUCTION",
    title: "Complex Trauma & Fractures",
    headline: "High-Velocity Skeletal Reconstructions & Intra-Articular Fixation",
    description:
      "Advanced polytrauma management, pelvic-acetabular reconstructions, non-union salvages, and peri-articular compound fractures using biological internal fixation techniques to ensure optimal anatomical union and functional salvage.",
    image: "/assets/blog_quads_exercise.png",
    stats: "24/7",
    statLabel: "Emergency Trauma Readiness",
    highlights: [
      "Biological MIPO fixation techniques",
      "Preservation of fracture hematoma vascularity",
      "Locking titanium compression plates",
      "Multidisciplinary emergency critical care",
    ],
    indications: [
      "High-Velocity Road Traffic Accidents",
      "Complex Intra-Articular Joint Fractures",
      "Pelvic & Acetabular Fractures",
      "Non-Union & Delayed Bone Healing",
    ],
    recoveryTimeline: "Early joint mobilization within 48 hours; progressive bony union across 8-12 weeks.",
  },
  {
    id: "joint-preservation",
    number: "04",
    tag: "BIOLOGICAL RESTORATION",
    title: "Joint Conservation & Biologics",
    headline: "Cartilage Protection & Visco-Supplementation Therapies",
    description:
      "Evidence-based non-surgical and biologic interventions designed to preserve natural cartilage, relieve joint friction, and delay or eliminate the necessity of surgical joint replacement through lubrication injections and biomechanical unloading.",
    image: "/assets/blog_knee_habits.png",
    stats: "1:4",
    statLabel: "Body Load Reduction Ratio",
    highlights: [
      "High-molecular-weight Hyaluronic Acid injections",
      "Biomechanical gait analysis & offloader bracing",
      "Targeted Vastus Medialis (VMO) conditioning",
      "Nutritional chondro-protective regimens",
    ],
    indications: [
      "Mild to Moderate Knee Osteoarthritis (Grade 1-3)",
      "Patellofemoral Pain Syndrome & Chondromalacia",
      "Chronic Tendinopathies & Joint Stiffness",
      "Post-Surgical Joint Maintenance",
    ],
    recoveryTimeline: "Immediate pain reduction; sustained lubrication benefit for 6 to 12 months.",
  },
];

interface BrandsCarouselProps {
  onOpenBooking: () => void;
}

export const WolverineBrandsCarousel: React.FC<BrandsCarouselProps> = ({ onOpenBooking }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="specialties" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#f8f9fa] text-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>01 // CLINICAL DISCIPLINES & SPECIALIZATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans">
              Our Disciplines.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl mt-3">
              Explore Dr. Shubham Shah&apos;s surgical portfolio designed to restore biomechanical freedom and eliminate chronic joint pain.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="p-3.5 rounded-full bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-100 hover:border-black transition-all focus:outline-none shadow-sm"
              aria-label="Previous Specialty"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="p-3.5 rounded-full bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-100 hover:border-black transition-all focus:outline-none shadow-sm"
              aria-label="Next Specialty"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Container */}
      <div
        ref={scrollRef}
        className="w-horizontal-scroll gap-6 max-w-7xl mx-auto pb-8 snap-x snap-mandatory"
      >
        {SPECIALTIES.map((spec) => (
          <div
            key={spec.id}
            className="w-horizontal-item w-[320px] sm:w-[380px] lg:w-[420px] w-card p-6 sm:p-8 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-xl"
            onClick={() => setSelectedSpecialty(spec)}
          >
            <div>
              {/* Card Top Label */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                <span className="font-mono text-2xl font-bold text-neutral-400 group-hover:text-black transition-colors">
                  {spec.number}
                </span>
                <span className="w-badge text-[10px]">{spec.tag}</span>
              </div>

              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200">
                <Image
                  src={spec.image}
                  alt={spec.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Metric pill */}
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-950">
                  <span className="font-mono font-bold text-black text-sm">{spec.stats}</span>
                  <span className="text-[10px] font-mono text-neutral-600 ml-1.5 uppercase">{spec.statLabel}</span>
                </div>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight mb-2 group-hover:underline">
                {spec.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-6">
                {spec.description}
              </p>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-900 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                View Clinical Protocol →
              </span>
              <span className="text-xs text-neutral-500 font-mono">Surat OPD</span>
            </div>
          </div>
        ))}
      </div>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 shadow-2xl text-neutral-950">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-badge">
                {selectedSpecialty.number} // {selectedSpecialty.tag}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 font-sans uppercase tracking-tight">
              {selectedSpecialty.title}
            </h3>
            <p className="text-neutral-600 font-mono text-sm mb-6">
              {selectedSpecialty.headline}
            </p>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8">
              {selectedSpecialty.description}
            </p>

            {/* Clinical Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-xs font-mono text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> Surgical Highlights
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                  {selectedSpecialty.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-xs font-mono text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-2 font-bold">
                  <Activity className="w-3.5 h-3.5" /> Key Indications
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                  {selectedSpecialty.indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-900 font-mono font-bold">•</span>
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recovery Timeline Banner */}
            <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200 mb-8 flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-white text-neutral-900 border border-neutral-200 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Post-Operative Recovery Milestone
                </div>
                <div className="text-xs sm:text-sm text-neutral-950 font-bold mt-0.5">
                  {selectedSpecialty.recoveryTimeline}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200">
              <a
                href="tel:+917016838231"
                className="text-xs font-mono text-neutral-600 hover:text-black font-bold"
              >
                Call OPD Desk: +91 70168 38231
              </a>

              <WolverineButton
                variant="black"
                onClick={() => {
                  setSelectedSpecialty(null);
                  onOpenBooking();
                }}
              >
                Schedule Evaluation for {selectedSpecialty.title}
              </WolverineButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
