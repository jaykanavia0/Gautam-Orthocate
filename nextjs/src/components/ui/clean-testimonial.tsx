"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
  procedure: string;
  recoveryNote: string;
  avatar: string;
  rating?: number;
}

const PATIENT_STORIES: TestimonialItem[] = [
  {
    quote: "I had been suffering from severe knee stiffness and deformity for over 6 years. Dr. Shubham Shah guided me through the robotic procedure. I was walking with a walker within 24 hours and returned to my normal morning temple walks in 4 weeks!",
    author: "Sunita Deshmukh",
    role: "Age 58 • Homemaker",
    location: "Vesu, Surat",
    procedure: "Bilateral Robotic Knee Replacement",
    recoveryNote: "Full 125° knee flexion with painless weight bearing",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Tore my ACL and meniscus during a tournament cricket match. Dr. Shubham's keyhole arthroscopy was seamless. The precision graft placement and rehab allowed me to resume competitive running without any knee instability.",
    author: "Amit Patel",
    role: "Age 27 • District Athlete",
    location: "Adajan, Surat",
    procedure: "Keyhole ACL & Meniscus Reconstruction",
    recoveryNote: "Complete pivot stability restored; returned to sports in 5 months",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Severe hip arthritis made sitting down or walking excruciating. The surgical approach used by Dr. Shubham ensured zero limb-length discrepancy. I felt immediate relief from the chronic groin ache from day one.",
    author: "Meera Kapadia",
    role: "Age 62 • Retired Teacher",
    location: "Ghod Dod Road, Surat",
    procedure: "Total Hip Arthroplasty (THR)",
    recoveryNote: "Zero limp; equal leg length confirmed digitally",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Dr. Shubham recommended a partial knee replacement instead of removing my whole joint. His honest clinical evaluation saved healthy cartilage on my outer knee. Recovery was unbelievably fast with zero pain.",
    author: "Rahul Bhargav",
    role: "Age 46 • Business Executive",
    location: "City Light, Surat",
    procedure: "Unicompartmental Partial Knee Replacement",
    recoveryNote: "Retained native cruciate ligaments; natural knee feel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Following a severe road accident, my tibial fracture was complex. Dr. Shubham's biological fixation technique preserved blood supply and ensured my bone healed with perfect joint alignment.",
    author: "Rajesh Mehta",
    role: "Age 54 • Textile Trader",
    location: "Katargam, Surat",
    procedure: "Complex Intra-Articular Trauma Fixation",
    recoveryNote: "Anatomical fracture union with smooth joint gliding",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Recurrent shoulder dislocations prevented me from gym workouts. Dr. Shubham performed a keyhole Bankart repair through 3 tiny marks. My shoulder feels rock solid and fully secure.",
    author: "Vikram Chauhan",
    role: "Age 32 • Fitness Enthusiast",
    location: "Piplod, Surat",
    procedure: "Shoulder Arthroscopy & Labral Repair",
    recoveryNote: "Full overhead range of motion restored",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "High-flexion robotic knee replacement allowed me to sit cross-legged comfortably for prayers. The surgical precision at Venus Hospital OT was world-class.",
    author: "Jyoti Parekh",
    role: "Age 59 • Homemaker",
    location: "Nanpura, Surat",
    procedure: "High-Flexion Robotic Knee Replacement",
    recoveryNote: "Achieved 130° flexion with full joint balance",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.3,
            delay: i * 0.02,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Testimonial({ items = PATIENT_STORIES }: { items?: TestimonialItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  usePreloadImages(items.map((t) => t.avatar));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentTestimonial = items[activeIndex] || items[0];

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-[32px] bg-[#05070a] text-white p-6 sm:p-10 lg:p-14 border border-neutral-800/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] select-none cursor-pointer overflow-hidden group transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNext}
    >
      {/* Ambient background glow layers */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Custom magnetic interactive cursor (Desktop) */}
      <motion.div
        className="pointer-events-none absolute z-50 mix-blend-difference hidden sm:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white flex items-center justify-center shadow-2xl"
          animate={{
            width: isHovered ? 84 : 0,
            height: isHovered ? 84 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-black text-xs font-bold tracking-wider uppercase font-mono"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Next Story →
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Top Header Strip: Procedure Tag, Ratings, Index, and Avatar Gallery */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/10 relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{currentTestimonial.procedure}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold ml-1">5.0</span>
          </div>
        </div>

        {/* Stacked Interactive Avatar Previews + Index Counter */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2 items-center">
            {items.map((t, i) => (
              <motion.div
                key={i}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#05070a] overflow-hidden transition-all duration-300 ${
                  i === activeIndex
                    ? "ring-2 ring-cyan-400 scale-110 z-10 opacity-100"
                    : "grayscale opacity-40 hover:opacity-80"
                }`}
                whileHover={{ scale: 1.2, opacity: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(i);
                }}
                title={t.author}
              >
                <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="flex items-baseline gap-1 font-mono text-sm text-neutral-400 pl-2 border-l border-white/10">
            <motion.span
              className="text-xl sm:text-2xl font-bold text-cyan-400"
              key={activeIndex}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-500">{String(items.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* Main Quote Content with SplitText animation */}
      <div className="relative z-10 py-4 min-h-[140px] sm:min-h-[160px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed sm:leading-snug tracking-tight text-white/95"
          >
            &ldquo;<SplitText text={currentTestimonial.quote} />&rdquo;
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Author Details & Recovery Milestone */}
      <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 shrink-0">
            <motion.div
              className="absolute -inset-1 rounded-full border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            {items.map((t, i) => (
              <motion.img
                key={t.avatar + i}
                src={t.avatar}
                alt={t.author}
                className="absolute inset-0 w-14 h-14 rounded-full object-cover"
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  zIndex: i === activeIndex ? 1 : 0,
                  scale: i === activeIndex ? 1 : 0.85,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="relative pl-4 border-l-2 border-cyan-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-lg font-bold text-white tracking-wide">
                {currentTestimonial.author}
              </div>
              <div className="text-xs text-cyan-300 font-medium mt-0.5">
                {currentTestimonial.role} • <span className="text-neutral-400">{currentTestimonial.location}</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{currentTestimonial.recoveryNote}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous / Next Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all focus:outline-none"
            aria-label="Previous patient story"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="p-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] focus:outline-none"
            aria-label="Next patient story"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="mt-8 h-1 bg-neutral-800/80 rounded-full relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
