"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  ChevronRight,
  TrendingUp,
  Clock,
  QrCode,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone
} from "lucide-react";

const registrations = [
  {
    id: 1,
    title: "Legal Updates in Real Estate 2026",
    location: "Makati • April 14, 2024",
    type: "In-person",
    date: { month: "APR", day: "14" },
    cpdValue: 4,
    status: "Confirmed",
    tab: "upcoming"
  },
  {
    id: 2,
    title: "CPD Workshop: Ethics in Practice",
    location: "Online (Zoom) • April 28, 2024",
    type: "Virtual",
    date: { month: "APR", day: "28" },
    cpdValue: 3,
    status: "Confirmed",
    tab: "upcoming"
  },
  {
    id: 3,
    title: "Property Law Refresher",
    location: "Quezon City • May 5, 2024",
    type: "In-person",
    date: { month: "MAY", day: "5" },
    cpdValue: 3,
    status: "Confirmed",
    tab: "past"
  }
];

export default function MyTicketsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredRegistrations = registrations.filter(reg => 
    activeTab === "upcoming" ? reg.tab === "upcoming" : 
    activeTab === "past" ? reg.tab === "past" : 
    reg.tab === "cancelled"
  );

  const upcomingCount = registrations.filter(r => r.tab === "upcoming").length;
  const pastCount = registrations.filter(r => r.tab === "past").length;
  const cancelledCount = registrations.filter(r => r.tab === "cancelled").length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[var(--font-inter)]">
      {/* ─── HEADER ─── */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/landing" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Home</Link>
          <Link href="/my-tickets" className="text-[#FFB020] font-bold text-sm">My Tickets</Link>
          <Link href="/events" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Discover Events</Link>
          <a href="#" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Create Events</a>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">Login</Link>
          <Link href="/signup" className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all">Sign up</Link>
          <Link href="/landing" className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all">Back</Link>
        </div>
      </header>

      {/* ─── BREADCRUMBS ─── */}
      <div className="bg-[#002143] py-3.5 px-10">
        <div className="flex items-center gap-3 text-white/80 text-xs font-semibold">
          <Link href="/landing" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-white">My Tickets</span>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto py-10 px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* ─── LEFT CONTENT (REGISTRATIONS) ─── */}
          <div className="flex-1">
            <div className="bg-white rounded-[24px] border border-[#E2E8F0] shadow-sm p-8 pb-12">
              <h1 className="text-2xl font-black text-[#0A192F] mb-8">My Registrations</h1>
              
              {/* TABS */}
              <div className="flex items-center gap-8 border-b border-[#F1F5F9] mb-8">
                {[
                  { id: "upcoming", label: "Upcoming", count: upcomingCount },
                  { id: "past", label: "Past Events", count: pastCount },
                  { id: "cancelled", label: "Cancelled", count: cancelledCount }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-2 text-sm font-bold transition-all relative ${
                      activeTab === tab.id ? "text-[#1730A8]" : "text-[#94A3B8] hover:text-[#4A5568]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {tab.label}
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                        activeTab === tab.id ? "bg-[#1730A8] text-white" : "bg-[#F1F5F9] text-[#94A3B8]"
                      }`}>
                        {tab.count}
                      </span>
                    </div>
                    {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1730A8] rounded-t-full" />}
                  </button>
                ))}
              </div>

              {/* REGISTRATION LIST */}
              <div className="space-y-4">
                {filteredRegistrations.length > 0 ? (
                  filteredRegistrations.map((reg) => (
                    <div key={reg.id} className="flex flex-col md:flex-row items-stretch border border-[#E2E8F0] rounded-2xl overflow-hidden hover:border-[#1730A8]/30 hover:shadow-md transition-all">
                      {/* DATE SIDE */}
                      <div className="bg-[#0A192F] text-white p-4 flex flex-col items-center justify-center min-w-[100px]">
                        <span className="text-[11px] font-black uppercase tracking-widest">{reg.date.month}</span>
                        <span className="text-2xl font-black">{reg.date.day}</span>
                      </div>
                      
                      {/* DETAILS SIDE */}
                      <div className="flex-1 p-6 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-[15px] font-black text-[#0A192F] leading-tight mb-1">{reg.title}</h3>
                          <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-[#718096]">
                            <div className="flex items-center gap-1.5"><MapPin size={14} className="text-[#1730A8]" />{reg.location}</div>
                            <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#1730A8]" />{reg.type}</div>
                          </div>
                          <div className="mt-2 flex items-center gap-3">
                            <span className="text-[9px] font-black text-[#1730A8] bg-[#1730A8]/5 px-3 py-1 rounded-full uppercase tracking-widest border border-[#1730A8]/10 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-[#1730A8]"></span> {reg.status}
                            </span>
                            <button className="flex items-center gap-1.5 text-[#1730A8] text-[11px] font-bold hover:underline">
                              <QrCode size={16} /> View QR Code
                            </button>
                            <Link href="#" className="text-[#1730A8] text-[11px] font-bold border-b border-[#1730A8]">View On Order</Link>
                          </div>
                        </div>

                        <div className="mt-4 md:mt-0 md:text-right flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#F1F5F9] pt-4 md:pt-0 md:pl-8 min-w-[120px]">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-1">CPD value</span>
                          <span className="text-sm font-black text-[#0A192F]">{reg.cpdValue} hrs</span>
                          <div className="w-full h-1 bg-[#F1F5F9] rounded-full mt-2 overflow-hidden">
                            <div className="bg-[#1730A8] h-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center text-[#94A3B8] font-bold">No registrations found in this category.</div>
                )}
              </div>
            </div>
          </div>

          {/* ─── RIGHT SIDEBAR ─── */}
          <div className="w-full lg:w-[380px] space-y-8">
            <button className="w-full bg-[#1730A8] text-white py-5 rounded-[20px] font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_-5px_rgba(23,48,168,0.4)] hover:bg-[#112480] transition-all flex items-center justify-center gap-3">
              Browse Events
            </button>

            {/* CPD PROGRESS */}
            <div className="bg-white rounded-[24px] border border-[#E2E8F0] shadow-sm p-8">
              <h3 className="text-lg font-black text-[#0A192F] mb-2">My CPD Progress</h3>
              <p className="text-[11px] font-semibold text-[#94A3B8] mb-8">Current cycle ends Dec 31, 2026</p>
              
              <div className="flex items-center justify-center mb-10 relative">
                <div className="w-32 h-32 rounded-full border-[10px] border-[#F1F5F9] relative flex items-center justify-center">
                   <div className="absolute inset-[-10px] rounded-full border-[10px] border-t-[#1730A8] border-r-[#1730A8] border-b-transparent border-l-transparent rotate-45"></div>
                   <div className="text-center">
                     <div className="text-3xl font-black text-[#0A192F]">47%</div>
                     <div className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest">Completed</div>
                   </div>
                </div>
                <div className="ml-6">
                   <div className="text-[11px] font-black uppercase tracking-widest text-[#94A3B8] mb-1">Completed</div>
                   <div className="text-2xl font-black text-[#0A192F]">14 <span className="text-xs text-[#94A3B8]">hrs</span></div>
                   <div className="text-[9px] font-bold text-[#FFB020] mt-1 flex items-center gap-1"><Clock size={10} /> 16hrs remaining</div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Technical", value: 80, color: "bg-[#0A192F]", hrs: "8h" },
                  { label: "Ethics", value: 35, color: "bg-[#2D9B7F]", hrs: "3h" },
                  { label: "Legal", value: 55, color: "bg-[#8B5E3C]", hrs: "3h" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1.5">
                      <span className="text-[#94A3B8]">{item.label}</span>
                      <span className="text-[#0A192F]">{item.hrs}</span>
                    </div>
                    <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div className={`${item.color} h-full transition-all`} style={{ width: `${item.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NEXT UP */}
            <div className="bg-white rounded-[24px] border border-[#E2E8F0] shadow-sm p-8">
              <h3 className="text-lg font-black text-[#0A192F] mb-1">Next Up</h3>
              <p className="text-[11px] font-semibold text-[#94A3B8] mb-6">Your upcoming 2 events</p>
              
              <div className="space-y-6">
                {[
                  { date: "APR 14", title: "Legal Updates in Real Estate 2026", loc: "Makati • In-person" },
                  { date: "APR 28", title: "Ethics in Practice CPD Workshop", loc: "Online • Virtual" }
                ].map((ev, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-white flex flex-col items-center justify-center shrink-0">
                      <span className="text-[8px] font-black uppercase tracking-tighter">{ev.date.split(" ")[0]}</span>
                      <span className="text-base font-black leading-none">{ev.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#0A192F] group-hover:text-[#1730A8] transition-colors leading-tight mb-1">{ev.title}</h4>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#94A3B8]">
                        <MapPin size={10} className="text-[#1730A8]" /> {ev.loc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 text-[11px] font-black text-[#1730A8] uppercase tracking-widest border-b border-[#1730A8] pb-1 hover:text-[#112480] hover:border-[#112480] transition-all">
                View all upcoming events
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1730A8] pt-20 pb-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 px-10">
            <div className="lg:col-span-2">
              <img src="/Group 483036.png" alt="Homes.ph Events" className="h-10 mb-8 brightness-0 invert" />
              <p className="text-white/80 text-sm font-medium leading-relaxed mb-6 max-w-sm">
                Your trusted partner in finding the perfect home. Connecting Filipinos with quality properties nationwide.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer"><Facebook size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer"><Instagram size={18} /></div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer"><Twitter size={18} /></div>
              </div>
            </div>
            <div>
              <h4 className="font-black text-base mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/80 text-sm font-medium">
                <li><Link href="/landing" className="hover:text-white transition-all">Home</Link></li>
                <li><Link href="/my-tickets" className="hover:text-white transition-all">My Tickets</Link></li>
                <li><a href="#" className="hover:text-white transition-all">Discover Events</a></li>
                <li><a href="#" className="hover:text-white transition-all">Create Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-base mb-6">Resources</h4>
              <ul className="space-y-4 text-white/80 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-all">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-all">FAQs</a></li>
                <li><Link href="/login" className="hover:text-white transition-all">Login</Link></li>
                <li><Link href="/signup" className="hover:text-white transition-all">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-base mb-6">Contact Us</h4>
              <ul className="space-y-6 text-white text-sm font-bold">
                <li className="flex items-start gap-4"><Phone size={18} /> (+63) 977 815 0888</li>
                <li className="flex items-start gap-4"><Mail size={18} /> info@homes.ph</li>
                <li className="flex items-start gap-4"><MapPin size={18} /> Manila, Philippines</li>
              </ul>
            </div>
          </div>
          <hr className="w-[85%] mx-auto border-[#25406E] mb-8" />
          <div className="px-10 flex flex-col md:flex-row items-center justify-between text-white/60 text-xs font-medium gap-4">
            <p>© 2026 Homes.ph. All rights reserved. Your dream home awaits.</p>
            <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
      </footer>
    </div>
  );
}
