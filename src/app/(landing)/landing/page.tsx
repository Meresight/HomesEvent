"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Map,
  X,
  Phone
} from "lucide-react";

const featuredEvents = [
  {
    id: 1,
    title: "Puerto Rico's Rum Fest - Taste Of Rum",
    category: "WORKSHOP",
    date: "Monday, April 14, 2025",
    time: "9:00 AM - 5:00 PM",
    image: "/Rectangle 12428.png",
  },
  {
    id: 2,
    title: "Puerto Rico's Rum Fest - Taste Of Rum",
    category: "WORKSHOP",
    date: "Monday, April 14, 2025",
    time: "9:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Puerto Rico's Rum Fest - Taste Of Rum",
    category: "WORKSHOP",
    date: "Monday, April 14, 2025",
    time: "9:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Puerto Rico's Rum Fest - Taste Of Rum",
    category: "WORKSHOP",
    date: "Monday, April 14, 2025",
    time: "9:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
  },
];

const categories = [
  { name: "SEMINARS", image: "https://images.unsplash.com/photo-1475721025871-7294069f2e3a?auto=format&fit=crop&q=80&w=800" },
  { name: "WORKSHOP", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  { name: "CPD PROGRAMS", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" },
  { name: "NETWORKING", image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800" },
];

const categoryPills = [
  "Seminars", "Workshop", "CPD Programs", "Networking", "Venue", "Legal", "Health", "Technical"
];

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("Seminars");

  return (
    <div className="min-h-screen bg-white font-[var(--font-inter)]">
      {/* ─── TOPBAR ─── */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white sticky top-0 z-50">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-[#FFB020] font-bold text-sm">Home</a>
            <a href="#" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">My Tickets</a>
            <a href="#" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Discover Events</a>
            <a href="#" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Create Events</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">
              Login
            </button>
            <button className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all">
              Sign in
            </button>
            <button className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all">
              Back
            </button>
          </div>
        </header>

        {/* ─── HERO ─── */}
        <section className="relative w-full">
          <div className="relative w-full h-[600px] overflow-hidden rounded-b-[60px] md:rounded-b-[80px]">
            {/* Background image & overlay */}
            <div className="absolute inset-0 z-0">
              <img src="/Rectangle 12427.png" alt="Hero Background" className="w-full h-full object-cover" />
              {/* Radial gradient overlay similar to screenshot */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#000a26]/90 via-[#00174f]/70 to-[#00174f]/50" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-10">
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white leading-tight mb-4 tracking-tight">
                Discover Real Estate <span className="text-[#F6A51B]">Events</span>
              </h1>
              <p className="text-white/90 text-[18px] md:text-xl font-medium max-w-2xl italic mb-10">
                From invite to applause manage your events, your attendees, and your updates in one place. Simple. Smart. Seamless.
              </p>
              <button className="bg-white text-[#1730A8] px-10 py-5 rounded-[40px] font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
                DISCOVER EVENTS!
              </button>
            </div>
          </div>

          {/* Floated Stats under Hero */}
          <div className="relative z-20 flex justify-center gap-6 -mt-16 px-10 flex-wrap pb-16">
            <div className="bg-[#465AA8]/90 backdrop-blur-md rounded-full px-12 py-5 border-[4px] border-white shadow-xl text-center flex-1 min-w-[200px] max-w-[280px]">
              <div className="text-[#F6A51B] font-black text-3xl">240+</div>
              <div className="text-white text-[10px] font-medium uppercase tracking-widest">Events held</div>
            </div>
            <div className="bg-[#465AA8]/90 backdrop-blur-md rounded-full px-12 py-5 border-[4px] border-white shadow-xl text-center flex-1 min-w-[200px] max-w-[280px]">
              <div className="text-[#F6A51B] font-black text-3xl">5,800</div>
              <div className="text-white text-[10px] font-medium uppercase tracking-widest">Active members</div>
            </div>
            <div className="bg-[#465AA8]/90 backdrop-blur-md rounded-full px-12 py-5 border-[4px] border-white shadow-xl text-center flex-1 min-w-[200px] max-w-[280px]">
              <div className="text-[#F6A51B] font-black text-3xl">120</div>
              <div className="text-white text-[10px] font-medium uppercase tracking-widest">Events listed</div>
            </div>
            <div className="bg-[#465AA8]/90 backdrop-blur-md rounded-full px-12 py-5 border-[4px] border-white shadow-xl text-center flex-1 min-w-[200px] max-w-[280px]">
              <div className="text-[#F6A51B] font-black text-3xl">98%</div>
              <div className="text-white text-[10px] font-medium uppercase tracking-widest">Satisfaction</div>
            </div>
          </div>
        </section>

        {/* ─── PLATFORM FEATURES 1 ─── */}
        <section className="py-20 px-10 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F6A51B] text-[11px] font-black uppercase tracking-widest mb-2">Platform Features</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0A192F] leading-[1.1] mb-6">
                Build And Manage Your <span className="text-[#1730A8]">Professional Events</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#1730A8] rounded-full mb-8"></div>
              
              <p className="text-[#4A5568] text-base leading-relaxed mb-10 font-medium">
                Our event management platform is specifically designed to handle complex professional development schedules, coaching, and seminars. Streamline your entire workflow from registration to certification, giving you back hours of time to focus on your attendees.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-[#F6A51B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A192F] mb-2">Manage CPD Programs:</h3>
                    <p className="text-[#718096] text-base font-medium leading-relaxed">Seamlessly organize and track Continuing Professional Development courses and requirements for your members.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-[#F6A51B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A192F] mb-2">Connect with Coaches:</h3>
                    <p className="text-[#718096] text-base font-medium leading-relaxed">Help your users find and book real estate coaches via direct REALESTATECOACH.com integration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-[#F6A51B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A192F] mb-2">Organize Seminars & Workshops:</h3>
                    <p className="text-[#718096] text-base font-medium leading-relaxed">Use our intuitive "Sponsorship Center" to connect with partners and co-create impactful seminars easily.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img src="/Dashboard (1) 1.png" alt="Dashboard Preview" className="w-[120%] lg:w-[130%] h-auto max-w-none rounded-[16px] xl:-mr-20 drop-shadow-2xl shadow-gray-400" />
            </div>
          </div>
        </section>

        {/* ─── PLATFORM FEATURES 2 (CAROUSEL) ─── */}
        <section className="py-20 px-10 md:px-20 overflow-hidden relative">
          <p className="text-[#F6A51B] text-[11px] font-black uppercase tracking-widest mb-2">Platform Features</p>
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-black text-[#0A192F]">
              Featured <span className="text-[#1730A8]">Events</span>
            </h2>
          </div>

          <div className="relative w-full">
            <div className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x">
              {featuredEvents.map((ev, index) => (
                <div key={index} className="min-w-[380px] w-[380px] h-[480px] rounded-[32px] overflow-hidden relative group cursor-pointer snap-start flex-shrink-0 shadow-lg">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000a26]/90 via-[#000a26]/40 to-transparent flex flex-col justify-end p-8">
                    <span className="text-[#F6A51B] border border-[#F6A51B] bg-black/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-sm w-fit mb-4">
                      {ev.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mb-6 leading-tight">
                      {ev.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/80 text-xs font-semibold mb-6">
                      <div className="flex items-center gap-2"><CalendarDays size={14} /> {ev.date}</div>
                      <div className="flex items-center gap-2">• {ev.time}</div>
                    </div>
                    <button className="bg-[#1730A8] text-white py-4 rounded-[20px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-[#112480] transition-colors w-1/2">
                      LETS GO
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Outside navigation buttons for Carousel mirroring Figma design */}
            <button className="absolute top-[40%] left-[-20px] md:left-2 -translate-y-1/2 w-12 h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-full flex items-center justify-center text-[#1730A8] z-10 hover:bg-gray-50 transition-colors">
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button className="absolute top-[40%] right-[-20px] md:right-2 -translate-y-1/2 w-12 h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-full flex items-center justify-center text-[#1730A8] z-10 hover:bg-gray-50 transition-colors">
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-20 px-10 md:px-20">
          <p className="text-[#F6A51B] text-[11px] font-black uppercase tracking-widest mb-2">How It Works</p>
          <h2 className="text-4xl font-black text-[#1730A8] mb-6">
            Get Started In 3 Simple Steps
          </h2>
          <p className="text-[#4A5568] text-base font-medium mb-12 max-w-2xl">
            From discovery to certification, we've made the entire journey seamless for real estate professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <span className="text-[#1730A8] font-black text-xs uppercase tracking-widest">Step 1</span>
              <h3 className="text-2xl font-black text-[#0A192F] mt-2 mb-4">Browse & discover</h3>
              <p className="text-[#718096] text-sm leading-relaxed relative z-10">
                Search CPD programs, seminars, and workshops by category, date, location, or topic. Filter for free events or online-only sessions.
              </p>
              <div className="absolute -bottom-8 right-4 text-[180px] font-black text-[#F6A51B]/30 leading-none select-none">1</div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <span className="text-[#1730A8] font-black text-xs uppercase tracking-widest">Step 2</span>
              <h3 className="text-2xl font-black text-[#0A192F] mt-2 mb-4">Register & pay</h3>
              <p className="text-[#718096] text-sm leading-relaxed relative z-10">
                Secure your seat in seconds via GCash, Maya, or card. Get a confirmation ticket and calendar invite instantly in your inbox.
              </p>
              <div className="absolute -bottom-8 right-4 text-[180px] font-black text-[#F6A51B]/30 leading-none select-none">2</div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <span className="text-[#1730A8] font-black text-xs uppercase tracking-widest">Step 3</span>
              <h3 className="text-2xl font-black text-[#0A192F] mt-2 mb-4">Attend & earn CPD</h3>
              <p className="text-[#718096] text-sm leading-relaxed relative z-10">
                Show up, learn, and collect your PRC-accredited CPD certificates and attendance records — all tracked automatically on...
              </p>
              <div className="absolute -bottom-8 right-4 text-[180px] font-black text-[#F6A51B]/30 leading-none select-none">3</div>
            </div>
          </div>
        </section>

        {/* ─── CATEGORIES ─── */}
        <section className="py-20 px-10 md:px-20">
          <p className="text-[#F6A51B] text-[11px] font-black uppercase tracking-widest mb-2">Explore</p>
          <h2 className="text-4xl font-black text-[#0A192F] mb-12">
            Browse By <span className="text-[#1730A8]">Categories</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((cat, i) => (
              <div key={i} className="relative h-48 rounded-[20px] overflow-hidden group cursor-pointer shadow-lg">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#000a26]/60 flex items-center justify-center">
                  <h3 className="text-2xl font-black text-white text-center tracking-wide">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {categoryPills.map((pill, i) => (
              <button 
                key={i}
                onClick={() => setActiveCategory(pill)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-colors flex items-center gap-2
                  ${activeCategory === pill ? 'bg-[#1730A8] text-white border-[#1730A8]' : 'bg-white text-[#4A5568] border-[#E2E8F0] hover:border-[#1730A8] hover:text-[#1730A8]'}`}
              >
                <span className="text-[16px]">⌂</span> {pill}
              </button>
            ))}
          </div>
        </section>

        {/* ─── FOR ORGANIZERS (CTA) ─── */}
        <section className="pt-24 pb-20 px-10 md:px-20 relative">
          <div className="relative w-full rounded-[40px] bg-gradient-to-r from-[#004BB8] to-[#000a26] shadow-2xl flex flex-col lg:flex-row items-center justify-end p-12 lg:p-20 z-10">
            {/* The people image perfectly resting on the bottom of the container and head breaking the top */}
            <div className="absolute bottom-0 left-0 lg:left-[5%] w-[320px] lg:w-[480px] pointer-events-none z-20 flex items-end">
              <img src="/happy-multi-ethnic-business-couple-isolated-png 1.png" alt="Happy Organizers" className="w-full h-auto drop-shadow-2xl translate-y-0" />
            </div>

            <div className="w-full lg:w-1/2 relative z-30 flex flex-col items-start mt-[300px] lg:mt-0 lg:pl-10">
              <p className="text-[#F6A51B] text-[11px] font-black uppercase tracking-widest mb-3">For Organizers</p>
              <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                Have An Event To Share?
              </h2>
              <p className="text-white/80 text-lg font-medium leading-relaxed mb-10">
                Publish to 5,800+ active real estate professionals. Manage tickets, track attendance, handle CPD compliance, and connect with sponsors — all in one place.
              </p>
              <button className="bg-white text-[#1730A8] px-10 py-4 rounded-[40px] font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
                Create an event
              </button>
            </div>
          </div>
        </section>

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
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><X size={18} /></div>
              </div>
            </div>

            <div>
              <h4 className="font-black text-base mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Home</a></li>
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">My Tickets</a></li>
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Discover Events</a></li>
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Create Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-base mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQs</a></li>
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Login</a></li>
                <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Register</a></li>
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
