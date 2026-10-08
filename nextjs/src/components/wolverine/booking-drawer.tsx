"use client";

import React, { useState } from "react";
import { X, Calendar, Phone, Clock, User, ShieldCheck, CheckCircle2 } from "lucide-react";
import { WolverineButton } from "./button";

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WolverineBookingDrawer: React.FC<BookingDrawerProps> = ({ isOpen, onClose }) => {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [selectedClinic, setSelectedClinic] = useState("Gautam Orthocare Primary OPD");
  const [selectedSpecialty, setSelectedSpecialty] = useState("Robotic Knee / Hip Replacement");
  const [symptoms, setSymptoms] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build pre-filled WhatsApp message
    const message = encodeURIComponent(
      `*New OPD Consultation Request*\n\n` +
      `*Patient Name:* ${patientName}\n` +
      `*Phone:* ${patientPhone}\n` +
      `*Preferred Date:* ${preferredDate || "Earliest Available"}\n` +
      `*Clinic Location:* ${selectedClinic}\n` +
      `*Procedure / Inquiry:* ${selectedSpecialty}\n` +
      `*Chief Complaint / Symptoms:* ${symptoms || "General Orthopedic Evaluation"}`
    );

    const whatsappUrl = `https://wa.me/917016838231?text=${message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl h-full bg-white border-l border-neutral-300 p-6 sm:p-10 overflow-y-auto flex flex-col justify-between shadow-2xl text-neutral-950">
        <div>
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 pb-5 mb-6">
            <div>
              <span className="w-badge mb-1">PRIORITY APPOINTMENT</span>
              <h3 className="text-2xl font-bold text-neutral-950 uppercase font-sans">
                Schedule Consultation
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-all focus:outline-none"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-neutral-950 mb-2">
                  Inquiry Initiated Successfully!
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Your consultation request has been forwarded to our WhatsApp coordination desk. Our clinical team will confirm your slot shortly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left text-xs text-neutral-700 space-y-2">
                <div><strong>Surgeon:</strong> Dr. Shubham P. Shah (MS Ortho)</div>
                <div><strong>Clinic:</strong> {selectedClinic}</div>
                <div><strong>Helpline:</strong> +91 70168 38231</div>
              </div>

              <WolverineButton
                variant="black"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full justify-center"
              >
                Close & Return
              </WolverineButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              {/* Patient Name */}
              <div>
                <label className="block text-neutral-600 uppercase tracking-wider mb-1.5 font-bold">
                  Full Name of Patient *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-neutral-600 uppercase tracking-wider mb-1.5 font-bold">
                  WhatsApp Contact Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              {/* Clinic Selector */}
              <div>
                <label className="block text-neutral-600 uppercase tracking-wider mb-1.5 font-bold">
                  Preferred OPD Center *
                </label>
                <select
                  value={selectedClinic}
                  onChange={(e) => setSelectedClinic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-950 focus:outline-none focus:border-black transition-colors font-sans text-sm"
                >
                  <option value="Gautam Orthocare Primary OPD">
                    Gautam Orthocare Primary OPD (Majura Gate / Ring Road)
                  </option>
                  <option value="Venus Hospital Orthopedic Dept.">
                    Venus Hospital Orthopedic Dept. (Morning OPD)
                  </option>
                  <option value="Aadinath Orthopedic Trust Care">
                    Aadinath Orthopedic Trust Care (Nanpura)
                  </option>
                </select>
              </div>

              {/* Procedure / Specialty */}
              <div>
                <label className="block text-neutral-600 uppercase tracking-wider mb-1.5 font-bold">
                  Area of Concern / Procedure *
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-950 focus:outline-none focus:border-black transition-colors font-sans text-sm"
                >
                  <option value="Robotic Knee / Hip Replacement">
                    Robotic Knee / Hip Joint Replacement
                  </option>
                  <option value="Keyhole Knee Arthroscopy & ACL Tear">
                    Keyhole Knee Arthroscopy (ACL / Meniscus)
                  </option>
                  <option value="Shoulder Arthroscopy & Rotator Cuff">
                    Shoulder Arthroscopy & Dislocation Repair
                  </option>
                  <option value="Complex Fracture & Trauma Care">
                    Complex Fracture / Trauma Emergency
                  </option>
                  <option value="Joint Preservation & Injections">
                    Joint Preservation & Cartilage Therapy
                  </option>
                  <option value="Second Surgical Opinion">
                    Second Opinion on Existing Scan / X-Ray
                  </option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-neutral-600 uppercase tracking-wider mb-1.5 font-bold">
                  Preferred Appointment Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-neutral-600 uppercase tracking-wider mb-1.5 font-bold">
                  Chief Complaints / Pain Duration
                </label>
                <textarea
                  rows={3}
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="e.g. Right knee severe grating pain when walking for 2 years..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans text-sm"
                />
              </div>

              <div className="pt-2">
                <WolverineButton
                  type="submit"
                  variant="black"
                  className="w-full justify-center text-sm py-3.5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Connecting to OPD Desk..." : "Confirm & Send via WhatsApp →"}
                </WolverineButton>
              </div>
            </form>
          )}
        </div>

        {/* Drawer Bottom Direct Call Strip */}
        <div className="pt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Encrypted Clinical Inquiry</span>
          </span>
          <a
            href="tel:+917016838231"
            className="text-neutral-950 font-bold hover:underline flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" /> Call +91 70168 38231
          </a>
        </div>
      </div>
    </div>
  );
};
