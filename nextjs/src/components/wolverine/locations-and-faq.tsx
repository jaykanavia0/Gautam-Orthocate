"use client";

import React, { useState } from "react";
import { MapPin, Clock, Phone, ChevronDown, Sparkles } from "lucide-react";

interface ClinicLocation {
  id: string;
  name: string;
  tag: string;
  address: string;
  opdHours: string;
  days: string;
  phone: string;
  mapLink: string;
}

const CLINICS: ClinicLocation[] = [
  {
    id: "gautam-ortho-care",
    name: "GAUTAM ORTHO CARE",
    tag: "PRIMARY ARTHROSCOPY & JOINT CARE CENTER",
    address: "407, 4th Floor, Wood Square, Nr. Vasupujya App., L.P. Savani Road, Pal, Adajan, Surat.",
    opdHours: "11:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    days: "Monday to Saturday",
    phone: "+91 70168 38231",
    mapLink: "https://maps.google.com/?q=Wood+Square+Pal+Adajan+Surat",
  },
  {
    id: "venus-hospital",
    name: "Venus Hospital Orthopedic Dept.",
    tag: "SURGICAL & ROBOTIC OT SUITE",
    address: "Ring Road, Begampura, Surat, Gujarat 395003",
    opdHours: "By Prior Appointment / Morning Surgical OT",
    days: "Monday through Saturday",
    phone: "+91 70168 38231",
    mapLink: "https://maps.google.com/?q=Venus+Hospital+Surat",
  },
  {
    id: "sports-rehab",
    name: "Sports Injury & Keyhole Arthroscopy Wing",
    tag: "KNEE, SHOULDER & HIP REHAB",
    address: "407, Wood Square, L.P. Savani Road, Pal, Adajan, Surat.",
    opdHours: "11:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    days: "Monday to Saturday",
    phone: "+91 70168 38231",
    mapLink: "https://maps.google.com/?q=Wood+Square+Pal+Adajan+Surat",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What documents should I bring for my first consultation with Dr. Shubham Shah?",
    answer:
      "Please bring your recent X-rays, MRI scans, CT reports, prescription sheets, blood investigation reports, insurance policy cards, and a government ID. This allows Dr. Shubham to accurately analyze your joint kinematics and formulate a customized treatment plan.",
  },
  {
    question: "Does Gautam Orthocare accept cashless health insurance for joint surgeries?",
    answer:
      "Yes. We support all major cashless health insurance TPAs and corporate panels for Robotic Knee Replacement, Hip Arthroplasty, Arthroscopic ACL Reconstructions, and complex fracture trauma care. Our dedicated desk manages pre-authorization paperwork seamlessly.",
  },
  {
    question: "How soon after Robotic Knee Replacement can I start walking?",
    answer:
      "Under our tissue-sparing fast-track rehabilitation protocol, most patients take their first assisted steps with a walker within 18 to 24 hours of surgery. Full independent walking without support typically happens within 3 to 4 weeks with scheduled physical therapy.",
  },
  {
    question: "Is Robotic Joint Replacement safer than conventional manual surgery?",
    answer:
      "Yes. Robotic systems use 3D CT mapping and active haptic boundaries to ensure implant placement accuracy within 0.5 degrees and 1 millimeter. This prevents accidental damage to surrounding healthy ligaments, minimizes intraoperative blood loss, and significantly enhances implant longevity.",
  },
];

interface LocationsAndFAQProps {
  onOpenBooking: () => void;
}

export const WolverineLocationsAndFAQ: React.FC<LocationsAndFAQProps> = ({ onOpenBooking }) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenFAQIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="locations" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-white text-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section 1: OPD Clinics */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-badge">
              06 // SURAT CLINICAL CONSULTATION HUBS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans mb-4">
            OPD Centers.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mb-12">
            Consult Dr. Shubham P. Shah across his primary clinical consultation centers and tertiary robotic surgical theaters in Surat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINICS.map((clinic) => (
              <div
                key={clinic.id}
                className="w-card p-6 sm:p-8 flex flex-col justify-between group border border-neutral-200 shadow-sm hover:shadow-lg bg-neutral-50/50"
              >
                <div>
                  <div className="w-badge text-[9px] mb-4">
                    {clinic.tag}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:underline font-sans">
                    {clinic.name}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-neutral-700 mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-neutral-950">{clinic.opdHours}</div>
                        <div className="text-[11px] text-neutral-500 font-mono">{clinic.days}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-neutral-900 shrink-0" />
                      <a
                        href={`tel:${clinic.phone.replace(/\s+/g, "")}`}
                        className="font-mono text-neutral-950 font-bold hover:underline"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                  <a
                    href={clinic.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-neutral-500 hover:text-black"
                  >
                    View Map Coordinates ↗
                  </a>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-mono text-neutral-950 uppercase font-bold hover:underline"
                  >
                    Book Here →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Frequently Asked Questions */}
        <div id="faq" className="border-t border-neutral-200 pt-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-badge">
              07 // PATIENT CLARIFICATIONS & FAQ
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-[0.04em] text-neutral-950 uppercase font-sans mb-8">
            Common Questions.
          </h2>

          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-base sm:text-lg font-bold text-neutral-950 hover:text-neutral-700 transition-colors focus:outline-none font-sans"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-900 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-700 leading-relaxed border-t border-neutral-200/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
