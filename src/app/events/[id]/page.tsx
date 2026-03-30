"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  CheckCircle2,
  Briefcase,
  Share2,
  Heart,
  Loader2
} from "lucide-react";

const speakers = [
  {
    name: "Arch. Juan Dela Cruz, REB",
    role: "Senior Consultant at Homes.ph",
    image: "https://i.pravatar.cc/150?u=juan",
    bio: "Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines."
  },
  {
    name: "Arch. Juan Dela Cruz, REB",
    role: "Senior Consultant at Homes.ph",
    image: "https://i.pravatar.cc/150?u=juan2",
    bio: "Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines."
  },
  {
    name: "Arch. Juan Dela Cruz, REB",
    role: "Senior Consultant at Homes.ph",
    image: "https://i.pravatar.cc/150?u=juan3",
    bio: "Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines."
  }
];

export default function EventDetailPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedSession, setSelectedSession] = useState("all");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const prices = {
    all: 3000,
    session1: 1200,
    sessions12: 2200
  };

  const handleRegister = () => {
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setIsRegistered(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[var(--font-inter)]">
      {/* ─── HEADER ─── */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/landing" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Home</Link>
          <Link href="/my-tickets" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">My Tickets</Link>
          <Link href="/events" className="text-[#FFB020] font-bold text-sm">Discover Events</Link>
          <a href="#" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Create Events</a>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">Login</Link>
          <Link href="/signup" className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all">Sign in</Link>
          <Link href="/events" className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all">Back</Link>
        </div>
      </header>

      {/* ─── BREADCRUMBS ─── */}
      <div className="bg-[#002143] py-4 px-10">
        <div className="flex items-center gap-3 text-white/80 text-[11px] font-black uppercase tracking-widest max-w-[1440px] mx-auto">
          <Link href="/events" className="hover:text-[#FFB020] transition-colors">Discover Events</Link>
          <ChevronRight size={14} className="text-[#FFB020]" />
          <span className="text-white">Mastering the Code</span>
        </div>
      </div>

      {/* ─── EVENT BANNER ─── */}
      <div className="relative h-[550px] overflow-hidden">
         <img src="/gettyimages-1496378856-612x612 2.png" alt="Banner" className="w-full h-full object-cover grayscale brightness-[0.3]" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#002143]/90 via-[#002143]/40 to-transparent flex flex-col justify-end px-10 pb-20">
            <div className="max-w-[1440px] mx-auto w-full">
               <div className="max-w-[900px] animate-fade-in">
                  <div className="bg-[#FFB020] text-white text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-lg w-fit mb-8 shadow-lg">WORKSHOP</div>
                  <h1 className="text-white text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
                     Mastering the Code:<br />
                     <span className="text-[#FFB020]">Elevating Philippine <br />Real Estate Ethics</span>
                  </h1>
                  <div className="flex flex-wrap gap-12 text-white/90 text-[12px] font-black uppercase tracking-[0.2em] mt-12 bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-fit">
                     <div className="flex items-center gap-3"><Calendar size={22} className="text-[#FFB020]" /> Monday, April 14, 2025</div>
                     <div className="flex items-center gap-3"><Clock size={22} className="text-[#FFB020]" /> 9:00 AM - 5:00 PM</div>
                     <div className="flex items-center gap-3"><MapPin size={22} className="text-[#FFB020]" /> Makati City, PH</div>
                     <div className="flex items-center gap-3"><Users size={22} className="text-[#FFB020]" /> 38 / 80 slots</div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <main className="max-w-[1440px] mx-auto py-16 px-6 lg:px-10">
        <div className="flex flex-col lg:row lg:flex-row gap-12 items-start">
           
           {/* LEFT CONTENT AREA */}
           <div className="flex-1 bg-white rounded-[48px] border-2 border-[#F1F5F9] shadow-sm overflow-hidden min-h-[1000px]">
              {/* TABS */}
              <div className="flex px-10 border-b-2 border-[#F1F5F9] bg-[#F8FAFC]/50">
                {["Overview", "Speakers", "Agenda", "Partners", "CPD Info"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-8 px-6 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${
                      activeTab === tab ? "text-[#1730A8]" : "text-[#94A3B8] hover:text-[#4A5568]"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#1730A8] rounded-t-full" />}
                  </button>
                ))}
              </div>

              <div className="p-12">
                {activeTab === "Overview" && (
                  <div className="space-y-16 animate-fade-in">
                     <section>
                        <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-[0.3em] mb-4 leading-none">ABOUT THIS EVENT</p>
                        <h2 className="text-4xl font-black text-[#0A192F] mb-10 tracking-tight">Real Estate Education & Coaching</h2>
                        
                        <div className="bg-[#1730A8] p-10 rounded-[32px] mb-12 shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                           <p className="text-white font-bold text-xl italic leading-relaxed relative z-10">
                              "Elevate your professional standing and stay ahead of the curve in the evolving Philippine real estate market."
                           </p>
                        </div>
                        
                        <div className="text-[#4A5568] text-lg font-medium leading-[2] space-y-8">
                           <p>
                              Join us for an intensive, high-impact seminar designed for real estate practitioners, brokers, and industry leaders. Mastering the Code: Elevating Philippine Real Estate Ethics is more than just a lecture — it's a strategic roadmap to navigating the legal and ethical complexities of the modern property industry.
                           </p>
                           <p>
                              As CPD-accredited professionals, attendees will gain <span className="text-[#1730A8] font-black">3 hours of CPD credit per session</span>, contributing directly to license renewal requirements while gaining actionable insights from leading experts in Philippine real estate law and practice.
                           </p>
                        </div>
                     </section>

                     <section>
                        <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-[0.3em] mb-4 leading-none">FEATURED SPEAKERS</p>
                        <h2 className="text-3xl font-black text-[#0A192F] mb-10 uppercase tracking-tight">Industry Experts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {speakers.slice(0, 2).map((s, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 border-2 border-[#F1F5F9] rounded-[32px] hover:border-[#1730A8] hover:shadow-xl transition-all cursor-pointer group bg-white">
                                    <img src={s.image} alt={s.name} className="w-20 h-20 rounded-2xl overflow-hidden object-cover ring-4 ring-[#F1F5F9] group-hover:ring-[#1730A8]/20 transition-all" />
                                    <div>
                                        <h4 className="text-base font-black text-[#0A192F] group-hover:text-[#1730A8] transition-colors leading-none mb-2">{s.name}</h4>
                                        <p className="text-[#94A3B8] text-[10px] uppercase font-black tracking-widest leading-none">{s.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </section>

                     <section>
                        <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-[0.3em] mb-4 leading-none">EVENT PARTNERS</p>
                        <h2 className="text-3xl font-black text-[#0A192F] mb-10 tracking-tight">Supporting Organizations</h2>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-6 p-6 pr-12 border-2 border-[#F1F5F9] rounded-[24px] bg-white hover:border-[#1730A8] transition-all cursor-pointer shadow-sm">
                               <div className="w-14 h-14 bg-[#F1F5F9] rounded-xl flex items-center justify-center font-black text-[#0A192F] text-xl">PR</div>
                               <div>
                                  <span className="text-base font-black text-[#0A192F] block">Property Pro Org</span>
                                  <span className="text-[10px] font-bold text-[#94A3B8] uppercase">Platinum Partner</span>
                               </div>
                            </div>
                            <div className="flex items-center gap-6 p-6 pr-12 border-2 border-[#F1F5F9] rounded-[24px] bg-white hover:border-[#1730A8] transition-all cursor-pointer shadow-sm">
                               <div className="w-14 h-14 bg-[#F1F5F9] rounded-xl flex items-center justify-center font-black text-[#0A192F] text-xl">RE</div>
                               <div>
                                  <span className="text-base font-black text-[#0A192F] block">RE Leads Phil</span>
                                  <span className="text-[10px] font-bold text-[#94A3B8] uppercase">Gold Partner</span>
                               </div>
                            </div>
                            <div className="flex items-center gap-4 p-6 border-2 border-dashed border-[#E2E8F0] rounded-[24px] bg-[#F8FAFC]/50 flex-1 justify-center max-w-[280px] cursor-pointer hover:bg-[#F8FAFC] hover:border-[#FFB020] group transition-all">
                               <span className="text-xs font-black text-[#94A3B8] group-hover:text-[#FFB020] uppercase tracking-widest">+ Become a partner</span>
                            </div>
                        </div>
                     </section>
                  </div>
                )}

                {activeTab === "Speakers" && (
                   <div className="space-y-12 animate-fade-in">
                      <div>
                        <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-[0.3em] mb-4 leading-none">CONFIRMED SPEAKERS</p>
                        <h2 className="text-4xl font-black text-[#0A192F] tracking-tight mb-4">Meet the Experts</h2>
                        <p className="text-[#94A3B8] font-bold text-lg max-w-2xl">Learn from the leading figures in the Philippine real estate industry.</p>
                      </div>
                      <div className="space-y-8 mt-12">
                         {speakers.map((s, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-8 p-10 border-2 border-[#F1F5F9] rounded-[48px] hover:border-[#1730A8] hover:shadow-2xl transition-all group bg-white relative overflow-hidden">
                               <div className="absolute top-0 right-0 w-24 h-24 bg-[#1730A8]/5 rounded-bl-[60px]"></div>
                               <img src={s.image} alt={s.name} className="w-32 h-32 rounded-[32px] object-cover ring-8 ring-[#F1F5F9] group-hover:ring-[#1730A8]/10 transition-all shrink-0 shadow-lg" />
                               <div className="relative z-10">
                                  <h3 className="text-2xl font-black text-[#0A192F] mb-2 group-hover:text-[#1730A8] transition-colors">{s.name}</h3>
                                  <p className="text-[#94A3B8] text-[12px] uppercase font-black tracking-[0.3em] mb-6">{s.role}</p>
                                  <p className="text-base text-[#4A5568] leading-relaxed font-medium bg-[#F8FAFC] p-6 rounded-2xl italic group-hover:bg-white transition-colors border border-transparent group-hover:border-[#F1F5F9]">{s.bio}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                )}

                 {activeTab === "Agenda" && (
                   <div className="space-y-8 animate-fade-in">
                     <div>
                       <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-[0.3em] mb-2 leading-none">PROGRAM SCHEDULE</p>
                       <h2 className="text-3xl font-black text-[#0A192F] tracking-tight">Event Agenda</h2>
                     </div>
                     <div className="space-y-0 divide-y-2 divide-[#F1F5F9]">
                       {[
                         { time: "8:30 AM", title: "Registration & Welcome Coffee", desc: "Networking, kit distribution, and light refreshments", tag: "Registration", tagColor: "bg-[#E8F5E9] text-[#2D9B7F]" },
                         { time: "9:00 AM", title: "Session 1 — The RESA Code Revisited", desc: "A comprehensive review of RA 9646 and its implications for active brokers and salespersons.", tag: "CPD Session · 3 hours", tagColor: "bg-[#EFF6FF] text-[#1730A8]" },
                         { time: "12:00 PM", title: "Lunch Break", desc: "Lunch provided for all full-event registrants", tag: "Break · 1 hour", tagColor: "bg-[#FFF9EC] text-[#FFB020]" },
                         { time: "1:00 PM", title: "Session 2 — Ethical Dilemmas in Modern Transactions", desc: "Case studies on dual agency, disclosure obligations, and anti-money laundering compliance.", tag: "CPD Session · 3 hours", tagColor: "bg-[#EFF6FF] text-[#1730A8]" },
                         { time: "4:00 PM", title: "Session 3 — Future-Proofing Your Practice", desc: "Networking, kit distribution, and light refreshments", tag: "Registration", tagColor: "bg-[#E8F5E9] text-[#2D9B7F]" },
                         { time: "5:00 PM", title: "Open Forum & Closing Ceremony", desc: "Q&A with speakers, certificate distribution, and networking", tag: "Closing", tagColor: "bg-[#FFF0F0] text-red-500" },
                       ].map((item, i) => (
                         <div key={i} className="flex gap-8 py-8 group hover:bg-[#F8FAFC] -mx-6 px-6 rounded-2xl transition-all">
                           <div className="w-20 shrink-0">
                             <span className="text-sm font-black text-[#94A3B8] group-hover:text-[#1730A8] transition-colors">{item.time}</span>
                           </div>
                           <div className="flex-1">
                             <h4 className="text-base font-black text-[#0A192F] mb-2">{item.title}</h4>
                             <p className="text-sm text-[#94A3B8] font-medium mb-4 leading-relaxed">{item.desc}</p>
                             <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${item.tagColor}`}>{item.tag}</span>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {activeTab === "Partners" && (
                   <div className="space-y-10 animate-fade-in">
                     <div>
                       <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-[0.3em] mb-2 leading-none">EVENT PARTNERS</p>
                       <h2 className="text-3xl font-black text-[#0A192F] tracking-tight">Organizations Supporting This Event</h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {[{ code: "PR", name: "Property Pro Org" }, { code: "PR", name: "Property Pro Org" }].map((p, i) => (
                         <div key={i} className="flex items-center gap-6 p-6 border-2 border-[#F1F5F9] rounded-[24px] bg-white hover:border-[#1730A8] transition-all cursor-pointer shadow-sm">
                           <div className="w-14 h-14 bg-[#F1F5F9] rounded-xl flex items-center justify-center font-black text-[#0A192F] text-xl shrink-0">{p.code}</div>
                           <span className="text-base font-black text-[#0A192F]">{p.name}</span>
                         </div>
                       ))}
                     </div>
                     <div className="bg-[#F8FAFC] border-2 border-dashed border-[#E2E8F0] rounded-[32px] p-10 text-center">
                       <h3 className="text-xl font-black text-[#0A192F] mb-3">This event is open for partnerships</h3>
                       <p className="text-sm text-[#94A3B8] font-medium mb-8">The organizer is looking for organizations to support this event.</p>
                       <div className="flex flex-wrap justify-center gap-3 mb-8">
                         {["Sponsorship", "Speaker", "Media"].map(t => <span key={t} className="px-5 py-2 border border-[#E2E8F0] rounded-full text-[11px] font-black text-[#94A3B8] uppercase">{t}</span>)}
                       </div>
                       <div className="bg-[#FFF9EC] border border-[#FFB020]/30 rounded-2xl p-6 text-left mb-8">
                         <p className="text-sm font-bold text-[#0A192F]"><span className="text-[#FFB020]">From the organizer:</span> We are looking for sponsors and media partners to help promote this CPD seminar. Branding will appear on all event materials, the Homes.ph event management listing, and certificates.</p>
                       </div>
                       <button className="bg-[#1730A8] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#112480] transition-all shadow-xl">Become a Partner of This Event</button>
                       <p className="text-[10px] text-[#94A3B8] font-bold mt-4">No account needed — fill in a short form and the organizer will review your request.</p>
                     </div>
                   </div>
                 )}

                 {activeTab === "CPD Info" && (
                   <div className="space-y-10 animate-fade-in">
                     <div>
                       <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-[0.3em] mb-2 leading-none">CONTINUING PROFESSIONAL DEVELOPMENT</p>
                       <h2 className="text-3xl font-black text-[#0A192F] tracking-tight">CPD Accreditation Details</h2>
                     </div>
                     <div className="bg-white rounded-[32px] border-2 border-[#F1F5F9] overflow-hidden shadow-sm">
                       {[
                         { label: "Accreditation Body", value: "NESPH / PRC" },
                         { label: "CPD Hours per Session", value: "3 hours" },
                         { label: "Total CPD Hours (All 3 Sessions)", value: "9 hours" },
                         { label: "Certificate Issued", value: "Yes — day of event" },
                         { label: "Eligible Professions", value: "Brokers, Appraisers, Consultants" },
                       ].map((row, i) => (
                         <div key={i} className={`flex justify-between items-center px-8 py-6 ${i % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"}`}>
                           <span className="text-sm font-black text-[#4A5568]">{row.label}</span>
                           <span className="text-sm font-black text-[#0A192F] text-right">{row.value}</span>
                         </div>
                       ))}
                     </div>
                     <p className="text-sm text-[#4A5568] leading-relaxed font-medium bg-[#EFF6FF] p-8 rounded-2xl border border-[#1730A8]/10">
                       CPD certificates will be distributed on the day of the event. Attendees must be present for the <strong>full duration of each session</strong> to receive credit. A government-issued ID or PRC ID will be required for verification upon entry.
                     </p>
                   </div>
                 )}
              </div>
           </div>

           {/* RIGHT SIDEBAR - REGISTRATION */}
           <div className="w-full lg:w-[480px] space-y-10 sticky top-28">
              <div className="bg-white rounded-[56px] border-4 border-[#1730A8] shadow-[0_40px_100px_-20px_rgba(23,48,168,0.2)] overflow-hidden">
                 <div className="p-10">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                           <div className="flex items-baseline gap-2">
                             <span className="text-4xl font-black text-[#0A192F]">₱{prices[selectedSession as keyof typeof prices].toLocaleString()}</span>
                             <span className="text-[#94A3B8] text-xs font-bold uppercase tracking-widest">/ Registration</span>
                           </div>
                           <p className="text-[#94A3B8] text-[11px] font-black mt-3 uppercase tracking-tighter">Member rate applied • <span className="text-[#1730A8]">Non-member: ₱1,800</span></p>
                        </div>
                        <div className="flex gap-3">
                           <button className="p-3.5 rounded-2xl bg-[#F8FAFC] border-2 border-[#F1F5F9] text-[#1730A8] hover:bg-[#1730A8] hover:text-white transition-all shadow-sm"><Share2 size={20} /></button>
                           <button className="p-3.5 rounded-2xl bg-[#F8FAFC] border-2 border-[#F1F5F9] text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"><Heart size={20} /></button>
                        </div>
                    </div>

                    <div className="bg-[#2D9B7F]/10 p-5 rounded-2xl border-2 border-[#2D9B7F]/20 mb-10 flex items-center justify-center">
                       <div className="flex items-center gap-3 text-[#2D9B7F] font-black text-[11px] uppercase tracking-[0.2em]">
                          <CheckCircle2 size={20} /> CPD ELIGIBLE • 3 HOURS PER SESSION
                       </div>
                    </div>

                    <div className="space-y-4 mb-10">
                       <div className="flex justify-between text-[11px] font-black text-[#0A192F] uppercase tracking-widest leading-none mb-1">
                          <span>SEATS REMAINING</span>
                          <span className="text-[#FFB020]">38 / 80 AVAILABLE</span>
                       </div>
                       <div className="w-full h-3 bg-[#F1F5F9] rounded-full overflow-hidden p-0.5">
                          <div className="bg-gradient-to-r from-[#1730A8] to-[#FFB020] h-full rounded-full transition-all duration-1000 shadow-sm" style={{ width: '47%' }}></div>
                       </div>
                    </div>

                    <hr className="border-[#F1F5F9] mb-10" />

                    <div className="space-y-8">
                       <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#94A3B8] leading-none">SELECT REGISTRATION TYPE</p>
                       <div className="space-y-4">
                          {[
                            { id: "all", name: "Full Event Pass (All 3 Sessions)", price: "₱3,000", badge: "POPULAR" },
                            { id: "session1", name: "Session 1 Exclusive Pass", price: "₱1,200" },
                            { id: "sessions12", name: "Double Session Pass (1 & 2)", price: "₱2,200" }
                          ].map((opt) => (
                            <label 
                              key={opt.id} 
                              onClick={() => setSelectedSession(opt.id)}
                              className={`flex items-center justify-between p-6 border-2 rounded-[28px] cursor-pointer transition-all relative group ${
                                selectedSession === opt.id ? "border-[#1730A8] bg-[#1730A8]/5 shadow-md scale-[1.02]" : "border-[#F1F5F9] bg-white hover:border-[#1730A8]/40"
                              }`}
                            >
                               {opt.badge && (
                                   <div className="absolute -top-3 left-10 bg-[#FFB020] text-white text-[8px] font-black px-3 py-1 rounded-full shadow-lg border-2 border-white">
                                       {opt.badge}
                                   </div>
                               )}
                               <div className="flex items-center gap-4">
                                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                      selectedSession === opt.id ? "border-[#1730A8]" : "border-[#E2E8F0] group-hover:border-[#1730A8]/40"
                                  }`}>
                                      {selectedSession === opt.id && <div className="w-3 h-3 rounded-full bg-[#FFB020] shadow-sm"></div>}
                                  </div>
                                  <span className={`text-[13px] font-black transition-colors ${selectedSession === opt.id ? "text-[#1730A8]" : "text-[#4A5568]"}`}>{opt.name}</span>
                               </div>
                               <span className={`text-sm font-black transition-colors ${selectedSession === opt.id ? "text-[#1730A8]" : "text-[#0A192F]"}`}>{opt.price}</span>
                               <input type="radio" name="session" className="hidden" defaultChecked={selectedSession === opt.id} />
                            </label>
                          ))}
                           {!isRegistered ? (
                       <Link
                         href="/events/1/register"
                         className="w-full text-white py-6 rounded-[32px] font-black text-sm uppercase tracking-[0.3em] mt-12 shadow-2xl bg-[#1730A8] hover:bg-[#112480] hover:-translate-y-1 active:scale-95 flex items-center justify-center transition-all"
                       >
                         Register Now
                       </Link>
                     ) : (
                        <div className="mt-12 bg-[#2D9B7F] text-white py-6 rounded-[32px] font-black text-sm uppercase tracking-[0.3em] text-center shadow-xl">Successfully Registered!</div>
                     )}
                       </div>
                    </div>

                    <p className="text-center text-[10px] font-black text-[#94A3B8] mt-6 uppercase tracking-widest">Free cancellation until Sunday, Apr 7 • NO HIDDEN FEES</p>

                    <div className="mt-12 pt-10 border-t-2 border-[#F1F5F9]">
                       <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#94A3B8] mb-6 leading-none">SECURE PAYMENTS BY</p>
                       <div className="flex gap-4">
                          {["GCash", "Maya", "Credit"].map(pay => (
                             <div key={pay} className="flex-1 h-14 bg-white rounded-2xl border-2 border-[#F1F5F9] flex items-center justify-center font-black text-[#0A192F] text-[10px] uppercase tracking-tighter hover:border-[#1730A8] transition-all cursor-pointer shadow-sm">
                                {pay}
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              {/* BECOME A PARTNER CARD */}
              <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] shadow-sm p-10 flex flex-col items-center text-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB020]/5 rounded-bl-[100px] transition-all group-hover:scale-110"></div>
                 <div className="w-20 h-20 rounded-[28px] bg-[#0A192F] text-white flex items-center justify-center mb-8 shadow-2xl relative z-10 group-hover:scale-110 transition-all duration-500">
                    <Briefcase size={40} />
                 </div>
                 <h3 className="text-2xl font-black text-[#0A192F] mb-4 uppercase tracking-tighter relative z-10">OPEN FOR <span className="text-[#FFB020]">PARTNERSHIP</span></h3>
                 <p className="text-[#94A3B8] text-sm font-bold mb-10 leading-relaxed max-w-[280px] relative z-10">
                    Sponsorship, Speaker slots, and Media Coverage opportunities are still available for this flagship event.
                 </p>
                 <div className="flex flex-wrap gap-3 justify-center mb-10 relative z-10">
                    {["Sponsorship", "Speaker", "Media"].map((tag) => (
                      <span key={tag} className="px-6 py-2.5 bg-[#F1F5F9] rounded-full text-[10px] font-black text-[#94A3B8] uppercase tracking-widest border border-white hover:border-[#FFB020] transition-all cursor-default">{tag}</span>
                    ))}
                 </div>
                 <button className="w-full bg-[#0A192F] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl hover:-translate-y-1 relative z-10">
                    Become our Partner
                 </button>
              </div>
           </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1730A8] pt-20 pb-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 px-10 md:px-20">
          <div className="lg:col-span-2">
            <img src="/Group 483036.png" alt="Homes.ph Events" className="h-10 mb-8 brightness-0 invert" />
            <p className="text-white/80 text-sm font-medium leading-relaxed mb-6 max-w-sm">
              Your trusted partner in finding the perfect home. Connecting Filipinos with quality properties nationwide.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Facebook size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Instagram size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Twitter size={18} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-base mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/landing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Home</Link></li>
              <li><Link href="/my-tickets" className="text-white/80 hover:text-white text-sm font-medium transition-colors">My Tickets</Link></li>
              <li><Link href="/events" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Discover Events</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Create Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQs</a></li>
              <li><Link href="/login" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Login</Link></li>
              <li><Link href="/signup" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1"><Phone size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-white">(+63) 977 815 0888</p>
                  <p className="text-[10px] text-white/60">Mon-Sat 9AM-8PM</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1"><Mail size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-white">info@homes.ph</p>
                  <p className="text-[10px] text-white/60">We reply within 24hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1"><MapPin size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-white">Manila, Philippines</p>
                  <p className="text-[10px] text-white/60">Serving nationwide</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="w-[85%] mx-auto border-[#25406E] mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-10 md:px-20">
          <div>
            <p className="text-white/60 text-xs font-medium">© 2026 Homes.ph. All rights reserved. Your dream home awaits.</p>
            <p className="text-white/40 text-[10px] mt-1">Powered by passion and innovation</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
