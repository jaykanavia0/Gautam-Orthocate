"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Clock, Sparkles, X, CheckCircle2 } from "lucide-react";
import { WolverineButton } from "./button";

interface BlogArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  subtitle: string;
  summary: string;
  doctorInsight: string;
  image: string;
  sections: {
    heading: string;
    content: string;
    bullets?: string[];
  }[];
}

const ARTICLES: BlogArticle[] = [
  {
    id: "knee-habits",
    category: "JOINT CONSERVATION",
    readTime: "5 MIN READ",
    title: "5 Crucial Habits to Prevent Knee Replacement Surgery",
    subtitle: "Biomechanical and Dietary Interventions for Cartilage Longevity",
    summary:
      "Osteoarthritis and progressive joint wear affect millions worldwide, but total knee replacement surgery isn't always inevitable. By adopting specific physiological adjustments early, you can significantly prolong cartilage life.",
    doctorInsight:
      "Joint conservation is always the first line of defense. Cartilage relies entirely on motion and synovial fluid for nutrients. Active prevention is your best medicine!",
    image: "/assets/blog_knee_habits.png",
    sections: [
      {
        heading: "Habit 1: Weight Management & The 1:4 Load Multiplier",
        content:
          "During normal level walking, the force on your knees is 1.5x body weight. On stairs, it multiplies to 3 to 4 times your body weight. For every single pound of body weight lost, you relieve 4 pounds of pressure on your knee joints! Losing 10 lbs removes 40 lbs of repetitive impact every single step.",
      },
      {
        heading: "Habit 2: Prioritize Low-Impact Aerobics",
        content:
          "Pounding on hard asphalt sends shockwaves through worn cartilage. Opt for joint-sparing cardio:",
        bullets: [
          "Swimming & Pool Walking: Complete buoyancy unloads joint pressure while building resistance.",
          "Stationary Cycling: Smooth rotational motion circulates lubricating synovial fluid.",
          "Elliptical Machines: Gliding mechanics eliminate harsh heel strikes.",
        ],
      },
      {
        heading: "Habit 3: Strengthen Quadriceps & Hip Abductors",
        content:
          "Your thigh muscles are your knee's primary shock absorbers. Targeting the Vastus Medialis Oblique (VMO) prevents kneecap misalignment and lateral cartilage wear.",
      },
      {
        heading: "Habit 4: Optimize Bone & Synovial Nutrition",
        content:
          "Ensure adequate Vitamin D3 (mandatory for calcium absorption) and explore doctor-approved Type-II Collagen peptides and Glucosamine to maintain the cartilage extracellular matrix.",
      },
      {
        heading: "Habit 5: Early Non-Surgical Clinical Care",
        content:
          "Never ignore morning stiffness or grating sounds. Early viscosupplementation (hyaluronic acid joint injections) and custom offloader braces can delay surgery by decades.",
      },
    ],
  },
  {
    id: "quads-guide",
    category: "PHYSIOTHERAPY PROTOCOL",
    readTime: "6 MIN READ",
    title: "Strengthening Your Quadriceps: A Doctor's Guide to Knee Support",
    subtitle: "Doctor-Approved Home Exercises to Build Natural Knee Shock Absorbers",
    summary:
      "Your quadriceps act like the suspension system of a luxury vehicle. When strong, they absorb walking and jumping forces, shielding sensitive hyaline cartilage underneath.",
    doctorInsight:
      "Strong thigh muscles reduce joint contact stresses by up to 30%. These 3 zero-impact exercises protect your knees without joint wear.",
    image: "/assets/blog_quads_exercise.png",
    sections: [
      {
        heading: "Exercise 1: Straight Leg Raises (SLR)",
        content:
          "Lie flat on your back. Bend one knee to 90 degrees with foot flat. Keep the other leg straight, flex your foot upward, and lift 12 inches off the mat. Hold 5 seconds and lower slowly. Perform 3 sets of 10 repetitions per leg daily.",
      },
      {
        heading: "Exercise 2: Wall Squats (Limited 45° Depth)",
        content:
          "Stand with head, back, and shoulders against a flat wall, feet 12 inches forward. Slide down until knees are bent to no more than 45-60 degrees. Hold for 5 to 7 seconds. Slide back up. Perform 10-15 repetitions.",
      },
      {
        heading: "Exercise 3: Clamshells for Hip Abductors",
        content:
          "Lie on your side with hips and knees bent 90 degrees. Keeping feet pinned together, raise your top knee without rolling your pelvis backward. Pause for 2 seconds. Perform 3 sets of 15 repetitions on each side to prevent knock-knee collapse.",
      },
    ],
  },
];

interface ClinicalInsightsProps {
  onOpenBooking: () => void;
}

export const WolverineClinicalInsights: React.FC<ClinicalInsightsProps> = ({ onOpenBooking }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section id="insights" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#f8f9fa] text-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8 mb-12">
          <div>
            <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              <span>05 // EVIDENCE-BASED MEDICAL JOURNAL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans">
              Clinical Insights.
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl mt-3">
              Doctor-authored patient guides and physiological exercise protocols by Dr. Shubham P. Shah.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-950 font-bold">
            <BookOpen className="w-4 h-4" />
            <span>DIRECT DOCTOR GUIDES</span>
          </div>
        </div>

        {/* 2 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="w-card p-6 sm:p-8 flex flex-col justify-between group cursor-pointer border border-neutral-200 shadow-sm hover:shadow-lg bg-white"
              onClick={() => setSelectedArticle(art)}
            >
              <div>
                {/* Article Top Tag */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                  <span className="w-badge text-[10px]">{art.category}</span>
                  <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </span>
                </div>

                {/* Banner Image */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-neutral-100 border border-neutral-200">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-2xl font-bold text-neutral-950 tracking-tight mb-2 group-hover:underline font-sans">
                  {art.title}
                </h3>
                <p className="text-xs font-mono text-neutral-600 mb-3 font-bold">
                  {art.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              {/* Read Full Action */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-950 uppercase tracking-wider font-bold group-hover:translate-x-1 transition-transform">
                  Read Clinical Guide →
                </span>
                <span className="text-xs text-neutral-500 font-mono">By Dr. Shubham Shah</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 shadow-2xl text-neutral-950">
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-all"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-badge">
                {selectedArticle.category} // {selectedArticle.readTime}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 font-sans uppercase">
              {selectedArticle.title}
            </h3>
            <p className="text-neutral-600 font-mono text-sm mb-6">
              {selectedArticle.subtitle}
            </p>

            {/* Doctor Note Box */}
            <div className="p-5 rounded-2xl bg-neutral-100 border border-neutral-200 mb-8">
              <div className="text-xs font-mono text-neutral-950 uppercase tracking-widest mb-1 font-bold">
                Doctor&apos;s Clinical Insight Note
              </div>
              <p className="text-sm text-neutral-700 italic">
                &ldquo;{selectedArticle.doctorInsight}&rdquo;
              </p>
            </div>

            {/* Article Content Sections */}
            <div className="space-y-6 mb-8 text-neutral-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.sections.map((sec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <h4 className="text-lg font-bold text-neutral-950 mb-2 font-sans">
                    {sec.heading}
                  </h4>
                  <p className="text-neutral-700 mb-3">{sec.content}</p>
                  {sec.bullets && (
                    <ul className="space-y-1.5 pl-2 text-xs sm:text-sm text-neutral-700">
                      {sec.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200">
              <span className="text-xs font-mono text-neutral-500">
                Author: Dr. Shubham P. Shah (MS Ortho)
              </span>

              <WolverineButton
                variant="black"
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenBooking();
                }}
              >
                Schedule Knee & Joint Checkup
              </WolverineButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
