"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { WolverineButton } from "./button";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const WolverineHeader: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none px-4 sm:px-8 ${
          scrolled ? "pt-3 pb-2" : "pt-6 pb-4"
        }`}
      >
        <div
          className={`w-full max-w-7xl pointer-events-auto rounded-full transition-all duration-500 border ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-neutral-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.08)] py-2.5 px-4 sm:px-6 text-neutral-900"
              : "bg-slate-900/80 backdrop-blur-xl border-white/15 shadow-2xl py-3 px-5 sm:px-8 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Gautam Orthocare Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white p-1 flex items-center justify-center shrink-0 shadow-sm border border-neutral-200/80 group-hover:scale-105 transition-transform">
                <Image
                  src="/assets/logo.png"
                  alt="Gautam Ortho Care Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold tracking-[0.05em] text-sm sm:text-base uppercase transition-colors ${
                  scrolled ? "text-neutral-900 group-hover:text-neutral-600" : "text-white group-hover:text-cyan-300"
                }`}>
                  GAUTAM ORTHO CARE
                </span>
                <span className={`text-[10px] tracking-widest uppercase font-mono hidden sm:block transition-colors ${
                  scrolled ? "text-neutral-500" : "text-slate-400"
                }`}>
                  Knee, Shoulder & Hip Care • Dr. Shubham P. Shah
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className={`hidden lg:flex items-center gap-1 font-mono text-xs tracking-wider uppercase transition-colors ${
              scrolled ? "text-neutral-700" : "text-slate-300"
            }`}>
              {/* Specializations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("specialties")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("specialties")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all hover:text-black hover:bg-neutral-100 ${
                    activeDropdown === "specialties" ? "bg-neutral-100 text-black" : ""
                  }`}
                >
                  <span>Specialties</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "specialties" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Mega Menu (Wolverine Tile Style) */}
                {activeDropdown === "specialties" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-2xl bg-white border border-neutral-200 p-6 shadow-2xl animate-in fade-in duration-200">
                    <div className="text-[11px] font-mono text-neutral-500 tracking-widest mb-4 flex items-center gap-2 border-b border-neutral-100 pb-2">
                      <Sparkles className="w-3.5 h-3.5 text-neutral-900" /> SURGICAL DISCIPLINES
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="#specialties"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-100 hover:border-neutral-300 transition-all group"
                      >
                        <div className="text-neutral-950 text-xs font-bold group-hover:underline">
                          Robotic Arthroplasty
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-1">
                          Sub-mm alignment for Knee & Hip replacement
                        </div>
                      </a>
                      <a
                        href="#specialties"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-100 hover:border-neutral-300 transition-all group"
                      >
                        <div className="text-neutral-950 text-xs font-bold group-hover:underline">
                          Keyhole Arthroscopy
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-1">
                          ACL, PCL, Meniscus & Rotator Cuff repairs
                        </div>
                      </a>
                      <a
                        href="#specialties"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-100 hover:border-neutral-300 transition-all group"
                      >
                        <div className="text-neutral-950 text-xs font-bold group-hover:underline">
                          Complex Trauma
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-1">
                          Pelvi-acetabular & intra-articular fixations
                        </div>
                      </a>
                      <a
                        href="#specialties"
                        onClick={() => setActiveDropdown(null)}
                        className="p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-100 hover:border-neutral-300 transition-all group"
                      >
                        <div className="text-neutral-950 text-xs font-bold group-hover:underline">
                          Joint Preservation
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-1">
                          Visco-supplementation & biological therapies
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#doctor"
                className="px-3.5 py-2 rounded-full hover:text-black hover:bg-neutral-100 transition-all"
              >
                About Surgeon
              </a>

              <a
                href="#technology"
                className="px-3.5 py-2 rounded-full hover:text-black hover:bg-neutral-100 transition-all"
              >
                Robotic Tech
              </a>

              <a
                href="#outcomes"
                className="px-3.5 py-2 rounded-full hover:text-black hover:bg-neutral-100 transition-all"
              >
                Outcomes
              </a>

              <a
                href="#insights"
                className="px-3.5 py-2 rounded-full hover:text-black hover:bg-neutral-100 transition-all"
              >
                Medical Blog
              </a>

              <a
                href="#locations"
                className="px-3.5 py-2 rounded-full hover:text-black hover:bg-neutral-100 transition-all"
              >
                OPD Clinics
              </a>
            </nav>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <WolverineButton
                variant="black"
                onClick={onOpenBooking}
                className="text-xs sm:text-sm"
              >
                Book Appointment
              </WolverineButton>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="lg:hidden p-2.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 hover:bg-neutral-200 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-between p-6 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-4 font-mono text-base tracking-wider uppercase text-neutral-900">
            <div className="text-[11px] text-neutral-400 tracking-widest mb-2 border-b border-neutral-100 pb-2">
              [ NAVIGATION MENU ]
            </div>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-neutral-900 hover:text-neutral-600 border-b border-neutral-100"
            >
              <span>01 // Specialties</span>
              <ArrowRight className="w-4 h-4 text-neutral-900" />
            </a>
            <a
              href="#doctor"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-neutral-900 hover:text-neutral-600 border-b border-neutral-100"
            >
              <span>02 // About Dr. Shubham Shah</span>
              <ArrowRight className="w-4 h-4 text-neutral-900" />
            </a>
            <a
              href="#technology"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-neutral-900 hover:text-neutral-600 border-b border-neutral-100"
            >
              <span>03 // Robotic Innovation</span>
              <ArrowRight className="w-4 h-4 text-neutral-900" />
            </a>
            <a
              href="#outcomes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-neutral-900 hover:text-neutral-600 border-b border-neutral-100"
            >
              <span>04 // Patient Outcomes</span>
              <ArrowRight className="w-4 h-4 text-neutral-900" />
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-neutral-900 hover:text-neutral-600 border-b border-neutral-100"
            >
              <span>05 // Medical Blog</span>
              <ArrowRight className="w-4 h-4 text-neutral-900" />
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-neutral-900 hover:text-neutral-600 border-b border-neutral-100"
            >
              <span>06 // OPD Locations</span>
              <ArrowRight className="w-4 h-4 text-neutral-900" />
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-neutral-100">
            <a
              href="tel:+917016838231"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 font-mono text-xs"
            >
              <Phone className="w-4 h-4 text-neutral-900" />
              <span>Call Helpline: +91 70168 38231</span>
            </a>
            <WolverineButton
              variant="black"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full justify-center"
            >
              Book Priority Consultation
            </WolverineButton>
          </div>
        </div>
      )}
    </>
  );
};
