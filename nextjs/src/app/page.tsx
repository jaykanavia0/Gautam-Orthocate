"use client";

import React, { useState } from "react";
import { WolverineHeader } from "@/components/wolverine/header";
import { WolverineHero } from "@/components/wolverine/hero";
import { WolverineMarquee } from "@/components/wolverine/marquee";
import { WolverineBrandsCarousel } from "@/components/wolverine/brands-carousel";
import { WolverineDoctorStory } from "@/components/wolverine/doctor-story";
import { WolverineTechnologyShowcase } from "@/components/wolverine/technology-showcase";
import { TestimonialsSection } from "@/components/ui/testimonials-6";
import { WolverineClinicalInsights } from "@/components/wolverine/clinical-insights";
import { WolverineLocationsAndFAQ } from "@/components/wolverine/locations-and-faq";
import { WolverineFooter } from "@/components/wolverine/footer";
import { WolverineBookingDrawer } from "@/components/wolverine/booking-drawer";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#010101] font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* 1. Floating Capsule Nav Header (Wolverine .c-header style) */}
      <WolverineHeader onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. Full-Bleed Bold Editorial Typography Hero with Lamp Effect */}
      <WolverineHero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 3. Continuous Infinite Ticker Strip */}
      <WolverineMarquee />

      {/* 4. Horizontal Brands/Disciplines Carousel (Wolverine .c-brands style) */}
      <WolverineBrandsCarousel onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 5. Editorial Split-Screen Doctor Story (Wolverine .c-story style) */}
      <WolverineDoctorStory onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 6. 4-Step Robotic Surgical Pathway Explorer */}
      <WolverineTechnologyShowcase onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 7. Merged Patient Voices & Testimonials (3-Column Vertical Infinite Slider) */}
      <TestimonialsSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 8. Evidence-Based Clinical Insights & Exercise Guides */}
      <WolverineClinicalInsights onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 9. Surat OPD Locations & Insurance FAQs */}
      <WolverineLocationsAndFAQ onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 10. Massive Typographic Mega Wordmark Footer (Wolverine .c-footer style) */}
      <WolverineFooter onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 11. Priority Appointment Drawer with WhatsApp Routing */}
      <WolverineBookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
