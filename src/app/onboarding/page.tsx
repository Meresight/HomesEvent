"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, ChevronRight, User, Award, Building2 } from "lucide-react";

type Step = 1 | 2 | 3;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [role, setRole] = useState<"broker" | "salesperson" | "appraiser" | "">("");
  const [formData, setFormData] = useState({
    prcLicenseNumber: "",
    licenseExpiry: "",
    organization: "",
    cpdGoalHours: "45",
  });

  const handleFinish = async () => {
    // TODO: await usersApi.updateProfile(formData)
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-white font-[var(--font-inter)] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0]">
        <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        <Link href="/" className="text-[#94A3B8] text-sm font-bold hover:text-[#002143] transition-colors">
          Skip for now →
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-[560px]">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-10">
            {([1, 2, 3] as Step[]).map((s) => (
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                  s < step ? "bg-green-500 text-white" :
                  s === step ? "bg-[#1730A8] text-white shadow-lg scale-110" :
                  "bg-[#F1F5F9] text-[#94A3B8]"
                }`}>
                  {s < step ? <CheckCircle2 size={16} /> : s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 rounded-full transition-all ${s < step ? "bg-green-500" : "bg-[#F1F5F9]"}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step 1 — Role */}
          {step === 1 && (
            <div>
              <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-2">Step 1 of 3</p>
              <h1 className="text-3xl font-black text-[#002143] mb-2 leading-tight">What's your role in real estate?</h1>
              <p className="text-[#94A3B8] font-medium text-sm mb-8">This helps us personalize your CPD tracking and event recommendations.</p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: "broker", label: "Real Estate Broker", desc: "Licensed broker managing property sales and transactions.", icon: <Award size={24} /> },
                  { id: "salesperson", label: "Real Estate Salesperson", desc: "Accredited salesperson under a licensed broker.", icon: <User size={24} /> },
                  { id: "appraiser", label: "Real Estate Appraiser / Consultant", desc: "Valuation and advisory services for properties.", icon: <Building2 size={24} /> },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setRole(opt.id as typeof role)}
                    className={`flex items-center gap-5 p-6 rounded-[24px] border-2 text-left transition-all ${
                      role === opt.id
                        ? "border-[#1730A8] bg-[#1730A8]/5 shadow-md"
                        : "border-[#E2E8F0] bg-white hover:border-[#1730A8]/30"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                      role === opt.id ? "bg-[#1730A8] text-white" : "bg-[#F8FAFC] text-[#94A3B8]"
                    }`}>
                      {opt.icon}
                    </div>
                    <div>
                      <p className={`font-black text-base ${role === opt.id ? "text-[#1730A8]" : "text-[#002143]"}`}>{opt.label}</p>
                      <p className="text-xs text-[#94A3B8] font-medium mt-0.5">{opt.desc}</p>
                    </div>
                    {role === opt.id && (
                      <CheckCircle2 className="ml-auto text-[#1730A8] shrink-0" size={20} />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => role && setStep(2)}
                disabled={!role}
                className="w-full mt-8 py-5 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Continue <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* Step 2 — PRC Details */}
          {step === 2 && (
            <div>
              <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-2">Step 2 of 3</p>
              <h1 className="text-3xl font-black text-[#002143] mb-2 leading-tight">Your PRC License Details</h1>
              <p className="text-[#94A3B8] font-medium text-sm mb-8">Used to verify CPD credit eligibility. You can update this later in My Profile.</p>

              <div className="flex flex-col gap-5">
                {[
                  { label: "PRC License Number", key: "prcLicenseNumber", placeholder: "e.g. 0012345", type: "text" },
                  { label: "License Expiry Date", key: "licenseExpiry", placeholder: "", type: "date" },
                  { label: "Organization / Brokerage", key: "organization", placeholder: "e.g. Ayala Land Inc.", type: "text" },
                ].map(({ label, key, placeholder, type }) => (
                  <div key={key}>
                    <label className="block text-[12px] font-black text-[#002143] uppercase tracking-tight mb-2">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formData[key as keyof typeof formData]}
                      onChange={(e) => setFormData((p) => ({ ...p, [key]: e.target.value }))}
                      className="w-full px-5 py-4 bg-white border border-[#E2E8F0] rounded-[18px] text-sm font-bold text-[#002143] outline-none focus:ring-4 focus:ring-[#1730A8]/5 focus:border-[#1730A8]/30 placeholder:text-[#CBD5E1] transition-all"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep(1)} className="flex-1 py-5 border-2 border-[#F1F5F9] text-[#002143] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F8FAFC] transition-all">
                  Back
                </button>
                <button onClick={() => setStep(3)} className="flex-[2] py-5 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] transition-all shadow-lg flex items-center justify-center gap-2">
                  Continue <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — CPD Goal */}
          {step === 3 && (
            <div>
              <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-2">Step 3 of 3</p>
              <h1 className="text-3xl font-black text-[#002143] mb-2 leading-tight">Set Your CPD Goal</h1>
              <p className="text-[#94A3B8] font-medium text-sm mb-8">PRC requires 45 CPD units every 3 years for license renewal. How many are you targeting?</p>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-black text-[#002143]">CPD Goal</span>
                  <span className="text-3xl font-black text-[#1730A8]">{formData.cpdGoalHours} units</span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={90}
                  step={5}
                  value={formData.cpdGoalHours}
                  onChange={(e) => setFormData((p) => ({ ...p, cpdGoalHours: e.target.value }))}
                  className="w-full accent-[#1730A8]"
                />
                <div className="flex justify-between text-[10px] font-bold text-[#94A3B8] mt-2">
                  <span>15 units</span>
                  <span className="text-[#FFB020] font-black">Required: 45</span>
                  <span>90 units</span>
                </div>
              </div>

              <div className="bg-[#EFF6FF] border border-[#1730A8]/10 rounded-2xl p-5">
                <p className="text-sm font-bold text-[#1730A8]">
                  🎯 With this goal, you need approximately <strong>{Math.ceil(Number(formData.cpdGoalHours) / 3)} units per year</strong> to stay on track for your next renewal.
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep(2)} className="flex-1 py-5 border-2 border-[#F1F5F9] text-[#002143] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F8FAFC] transition-all">
                  Back
                </button>
                <button
                  onClick={handleFinish}
                  className="flex-[2] py-5 bg-[#FFB020] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#E09418] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={16} /> Finish Setup
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
