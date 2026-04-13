"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function RegisterPage() {
  const [selectedPayment, setSelectedPayment] = useState("gcash");
  const [selectedTicket, setSelectedTicket] = useState("member");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const ticketPrices: Record<string, number> = { member: 1200, nonmember: 1800, group: 5000 };
  const basePrice = ticketPrices[selectedTicket];
  const discount = promoApplied ? 0 : 0;
  const total = basePrice - discount;

  const paymentMethods = [
    { id: "gcash", label: "Pay with Gcash", icon: "G·GCash" },
    { id: "visa", label: "Pay with Visa", icon: "VISA" },
    { id: "mastercard", label: "Pay with MasterCard", icon: "MC" },
    { id: "qr", label: "Pay using QR code", icon: "QRPh" },
    { id: "fee", label: "Pay with fee", icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
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
          <Link href="/events/1" className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all">Back</Link>
        </div>
      </header>

      {/* ─── BREADCRUMBS ─── */}
      <div className="bg-[#002143] py-4 px-10">
        <div className="flex items-center gap-3 text-white/80 text-[11px] font-black uppercase tracking-widest max-w-[1440px] mx-auto flex-wrap">
          <Link href="/landing" className="hover:text-[#FFB020] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-[#FFB020]" />
          <Link href="/events" className="hover:text-[#FFB020] transition-colors">Discover Events</Link>
          <ChevronRight size={14} className="text-[#FFB020]" />
          <Link href="/events/1" className="hover:text-[#FFB020] transition-colors">Event Details</Link>
          <ChevronRight size={14} className="text-[#FFB020]" />
          <span className="text-white">Register</span>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto py-16 px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT — FORM */}
          <div className="flex-1 space-y-10">
            {/* PERSONAL DETAILS */}
            <div className="bg-white rounded-[32px] border-2 border-[#F1F5F9] p-10 shadow-sm">
              <h2 className="text-2xl font-black text-[#0A192F] mb-8 tracking-tight">Your Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[11px] font-black text-[#4A5568] uppercase tracking-widest mb-2">FIRST NAME</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full border-2 border-[#F1F5F9] rounded-2xl px-6 py-4 text-sm font-bold text-[#0A192F] focus:border-[#1730A8] focus:shadow-lg outline-none transition-all bg-[#F8FAFC] focus:bg-white placeholder-[#C4CDD5]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-[#4A5568] uppercase tracking-widest mb-2">LAST NAME</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full border-2 border-[#F1F5F9] rounded-2xl px-6 py-4 text-sm font-bold text-[#0A192F] focus:border-[#1730A8] focus:shadow-lg outline-none transition-all bg-[#F8FAFC] focus:bg-white placeholder-[#C4CDD5]"
                  />
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: "EMAIL ADDRESS", placeholder: "Enter your email address", type: "email" },
                  { label: "MOBILE NUMBER", placeholder: "Enter your mobile number", type: "tel" },
                  { label: "PRC LICENSE NUMBER", placeholder: "Optional for non-members", type: "text" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[11px] font-black text-[#4A5568] uppercase tracking-widest mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border-2 border-[#F1F5F9] rounded-2xl px-6 py-4 text-sm font-bold text-[#0A192F] focus:border-[#1730A8] focus:shadow-lg outline-none transition-all bg-[#F8FAFC] focus:bg-white placeholder-[#C4CDD5]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="bg-white rounded-[32px] border-2 border-[#F1F5F9] p-10 shadow-sm">
              <h2 className="text-2xl font-black text-[#0A192F] mb-8 tracking-tight">Select Payment Method</h2>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`flex items-center gap-6 px-8 py-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedPayment === method.id ? "border-[#1730A8] bg-[#EFF6FF]" : "border-[#F1F5F9] bg-white hover:border-[#1730A8]/30"}`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedPayment === method.id ? "border-[#1730A8]" : "border-[#D1D5DB]"}`}>
                      {selectedPayment === method.id && <div className="w-3 h-3 rounded-full bg-[#1730A8]" />}
                    </div>
                    <span className="text-sm font-black text-[#4A5568] min-w-[60px]">{method.icon}</span>
                    <span className="text-sm font-bold text-[#0A192F] flex-1">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="w-full lg:w-[400px] space-y-8">
            {/* ORDER SUMMARY CARD */}
            <div className="bg-[#1730A8] rounded-[32px] p-8 text-white shadow-2xl">
              <h3 className="text-lg font-black mb-6 uppercase tracking-widest">Order Summary</h3>
              <div className="bg-white/10 rounded-2xl p-6 mb-6 border border-white/10">
                <h4 className="font-black text-base mb-1">Legal Updates in RE 2026</h4>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">April 4 · Makati · 1 Ticket</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-white/70">Member rate (x1)</span>
                  <span>₱{basePrice.toLocaleString()}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-white/70">Promo code</span>
                    <span className="text-[#4ADE80]">- ₱0</span>
                  </div>
                )}
                <hr className="border-white/10" />
                <div className="flex justify-between text-xl font-black">
                  <span>Total</span>
                  <span>₱{total.toLocaleString()}</span>
                </div>
              </div>

              {/* CPD Badge */}
              <div className="bg-[#FFB020]/20 border border-[#FFB020]/40 rounded-xl px-5 py-3 flex items-center gap-3 mb-6">
                <CheckCircle2 size={18} className="text-[#FFB020] shrink-0" />
                <span className="text-[11px] font-black text-[#FFB020] uppercase tracking-widest">3 CPD hours awarded after attendance</span>
              </div>

              {/* PROMO CODE */}
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-3">Promo code</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-sm font-bold text-white placeholder-white/30 outline-none focus:border-[#FFB020] transition-all"
                  />
                  <button
                    onClick={() => setPromoApplied(true)}
                    className="bg-[#FFB020] text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-[#E09418] transition-all"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#FFB020] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#E09418] transition-all shadow-lg">
                Continue to payment
              </button>
            </div>

            {/* TICKET TYPE CARD */}
            <div className="bg-white rounded-[32px] border-2 border-[#F1F5F9] p-8 shadow-sm">
              <h3 className="text-sm font-black text-[#0A192F] mb-6 uppercase tracking-widest">Select Ticket Type</h3>
              <div className="space-y-4">
                {[
                  { id: "member", label: "Member Rate", sub: "For NESPH members", price: "₱1,200" },
                  { id: "nonmember", label: "Non-Member Rate", sub: "Open to all professionals", price: "₱1,800" },
                  { id: "group", label: "Group (5 pax)", sub: "Save ₱1,200", price: "₱5,000" },
                ].map((ticket) => (
                  <label
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket.id)}
                    className={`flex items-center justify-between px-6 py-5 border-2 rounded-2xl cursor-pointer transition-all ${selectedTicket === ticket.id ? "border-[#1730A8] bg-[#EFF6FF]" : "border-[#F1F5F9] hover:border-[#1730A8]/30"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedTicket === ticket.id ? "border-[#1730A8]" : "border-[#D1D5DB]"}`}>
                        {selectedTicket === ticket.id && <div className="w-2.5 h-2.5 rounded-full bg-[#1730A8]" />}
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#0A192F]">{ticket.label}</p>
                        <p className="text-xs font-bold text-[#94A3B8]">{ticket.sub}</p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[#0A192F]">{ticket.price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1730A8] pt-20 pb-10 text-white mt-10">
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
                <div><p className="text-sm font-bold text-white">(+63) 977 815 0888</p><p className="text-[10px] text-white/60">Mon-Sat 9AM-8PM</p></div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1"><Mail size={18} /></span>
                <div><p className="text-sm font-bold text-white">info@homes.ph</p><p className="text-[10px] text-white/60">We reply within 24hrs</p></div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1"><MapPin size={18} /></span>
                <div><p className="text-sm font-bold text-white">Manila, Philippines</p><p className="text-[10px] text-white/60">Serving nationwide</p></div>
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
