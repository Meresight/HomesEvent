"use client";
import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, Mail, Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    category: "Registration & Tickets",
    items: [
      { q: "How do I register for an event?", a: "Browse events on the Discover Events page, click on an event you're interested in, select your ticket tier, fill in your attendee details, then proceed to payment. You'll receive a confirmation email with your ticket QR code within minutes." },
      { q: "Can I transfer my ticket to someone else?", a: "Tickets are non-transferable by default. If you need to transfer your registration, please contact the event organizer directly. Some organizers may allow transfers on a case-by-case basis, subject to their cancellation policy." },
      { q: "What payment methods are accepted?", a: "We accept GCash, Maya (PayMaya), and major credit/debit cards (Visa, Mastercard, AMEX). Payment is processed securely through our payment gateway. All prices are in Philippine Peso (₱)." },
      { q: "How do I cancel my registration and get a refund?", a: "Cancellations are subject to each event's cancellation policy. You can cancel through My Tickets > [Event Name] > Cancel Registration. Refunds are typically processed within 5-7 business days to your original payment method. Check the event page for specific refund deadlines." },
    ],
  },
  {
    category: "CPD Programs",
    items: [
      { q: "What is a CPD-accredited event?", a: "CPD (Continuing Professional Development) events are accredited by the Professional Regulation Commission (PRC) of the Philippines. Attending these events earns CPD units that count toward your license renewal requirements as a Real Estate Broker, Appraiser, or Consultant." },
      { q: "How do I receive my CPD certificate?", a: "CPD certificates are distributed on the day of the event after the program. Bring a valid government-issued ID or your PRC ID for verification. You must be present for the full duration of each session to earn CPD credit. Digital copies will also be available in your My CPD Records dashboard." },
      { q: "How many CPD units do I need for license renewal?", a: "As per PRC guidelines, Real Estate Brokers need a minimum of 45 CPD units every 3 years for license renewal. Check their official website at www.prc.gov.ph for the most current requirements." },
    ],
  },
  {
    category: "For Organizers",
    items: [
      { q: "How do I create and publish an event?", a: "Once logged in, go to Create Events from the navigation menu. Fill in your event details — title, date, venue, ticket tiers, speakers — then upload your event banner. Submit for review and our team will approve within 24-48 hours. You can also save as draft and publish later." },
      { q: "How do I manage attendee check-ins?", a: "Use the Live Check In page or the organizer's Manage event dashboard. Attendees can be checked in by scanning their QR code ticket or by searching their name/email. You can also export the check-in list as a CSV." },
      { q: "When will I receive event revenue?", a: "Revenue from paid events is settled to your registered bank account within 3-5 business days after the event concludes, minus the platform service fee. You can view your earnings breakdown in Manage Events > Analytics." },
    ],
  },
  {
    category: "Account & Profile",
    items: [
      { q: "How do I update my PRC license number?", a: "Go to My Profile from the sidebar, scroll to the PRC License Number field, enter your license number and expiry date, then click Save Changes. This information is used to verify CPD eligibility automatically." },
      { q: "I forgot my password. What do I do?", a: "On the login page, click Forgot Password and enter your registered email address. We'll send you a password reset link valid for 1 hour. If you don't see the email, check your spam/junk folder." },
      { q: "Can I have both an attendee and organizer account?", a: "Yes! Your account can serve as both. Organizer privileges are granted based on your profile verification. Contact support@homes.ph to upgrade your account to include organizer access." },
    ],
  },
];

export default function HelpPage() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const filtered = search
    ? faqs.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(search.toLowerCase()) ||
            item.a.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : faqs;

  return (
    <div className="max-w-[800px] w-full pb-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-[#002143] tracking-tight mb-2">Help Center</h1>
        <p className="text-[#94A3B8] font-bold text-sm">Find answers to common questions or contact our support team.</p>
      </div>

      {/* Search */}
      <div className="relative mb-10">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={20} />
        <input
          type="text"
          placeholder="Search for answers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-16 pr-6 py-5 bg-white border border-[#E2E8F0] rounded-[24px] text-sm font-bold text-[#002143] outline-none focus:border-[#1730A8]/30 focus:ring-4 focus:ring-[#1730A8]/5 placeholder:text-[#CBD5E1] transition-all shadow-sm"
        />
      </div>

      {/* FAQ Sections */}
      <div className="flex flex-col gap-6">
        {filtered.map((cat) => (
          <div key={cat.category} className="bg-white rounded-[32px] border border-[#F1F5F9] overflow-hidden shadow-sm">
            <div className="px-8 py-5 bg-[#F8FAFC] border-b border-[#F1F5F9]">
              <h2 className="text-sm font-black text-[#002143] uppercase tracking-widest">{cat.category}</h2>
            </div>
            <div className="divide-y divide-[#F1F5F9]">
              {cat.items.map((item, i) => {
                const key = `${cat.category}-${i}`;
                const isOpen = openItems[key];
                return (
                  <div key={i}>
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <span className={`text-sm font-black pr-8 ${isOpen ? "text-[#1730A8]" : "text-[#002143] group-hover:text-[#1730A8]"} transition-colors`}>
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={18} className="text-[#1730A8] shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-[#94A3B8] shrink-0 group-hover:text-[#1730A8] transition-colors" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-8 pb-6 bg-[#F8FAFC]">
                        <p className="text-sm text-[#4A5568] font-medium leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="py-20 text-center bg-white rounded-[40px] border border-[#F1F5F9]">
            <Search size={40} className="text-[#CBD5E1] mx-auto mb-4" />
            <h3 className="text-lg font-black text-[#002143] mb-2">No results found</h3>
            <p className="text-[#94A3B8] font-bold text-sm">Try different keywords or contact support below.</p>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="mt-10 bg-[#002143] rounded-[40px] p-10 text-white">
        <h3 className="text-xl font-black mb-2">Still need help?</h3>
        <p className="text-white/70 text-sm font-medium mb-8">Our support team is available Monday–Saturday, 9AM–8PM.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <Mail size={20} />, label: "Email Us", value: "support@homes.ph", href: "mailto:support@homes.ph" },
            { icon: <Phone size={20} />, label: "Call Us", value: "(+63) 977 815 0888", href: "tel:+639778150888" },
            { icon: <MessageCircle size={20} />, label: "Live Chat", value: "Chat with us", href: "#" },
          ].map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-3 p-5 bg-white/10 border border-white/10 rounded-2xl hover:bg-white/20 transition-all text-center"
            >
              <div className="w-10 h-10 bg-[#FFB020] rounded-xl flex items-center justify-center">{icon}</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60">{label}</p>
                <p className="text-sm font-bold text-white mt-0.5">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
