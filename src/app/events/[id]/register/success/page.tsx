"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { CheckCircle2, Calendar, Clock, MapPin, Download, Share2, CalendarPlus, QrCode } from "lucide-react";

export default function RegistrationSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);

  // In production: fetch registration by transactionId from searchParams
  const transactionId = searchParams.get("tx") || "HME-2025-001";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const mockTicket = {
    confirmationNumber: transactionId,
    ticketCode: `HME-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    eventTitle: "Mastering the Code: Elevating Philippine Real Estate Ethics",
    category: "WORKSHOP",
    date: "Monday, April 14, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Makati City, Philippines",
    ticket: "Full Event Pass (All 3 Sessions)",
    amount: "₱3,000",
    attendee: "Juan Dela Cruz",
    email: "juan@example.com",
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[var(--font-inter)] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0]">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div
          className={`w-full max-w-[680px] transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Success Banner */}
          <div className="bg-[#1730A8] rounded-t-[48px] p-10 text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFB020]/10 rounded-full" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle2 size={44} className="text-white" />
              </div>
              <h1 className="text-3xl font-black mb-2">You're Registered!</h1>
              <p className="text-white/80 font-medium text-sm max-w-sm mx-auto">
                Your payment was successful. Your ticket has been sent to your email inbox.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-3">
                <span className="text-[11px] font-black uppercase tracking-widest text-white/70">Confirmation #</span>
                <span className="text-base font-black text-[#FFB020]">{mockTicket.confirmationNumber}</span>
              </div>
            </div>
          </div>

          {/* Ticket Card */}
          <div className="bg-white border-x border-[#F1F5F9] px-10 py-8">
            {/* Dashed divider with circles */}
            <div className="flex items-center gap-2 -mx-10 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#F1F5F9] -ml-4 shrink-0" />
              <div className="flex-1 border-t-2 border-dashed border-[#F1F5F9]" />
              <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#F1F5F9] -mr-4 shrink-0" />
            </div>

            {/* Event Info */}
            <div className="flex gap-6 items-start mb-8">
              <div className="flex-1">
                <span className="bg-[#1730A8] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg inline-block mb-3">
                  {mockTicket.category}
                </span>
                <h2 className="text-xl font-black text-[#002143] leading-tight mb-4">
                  {mockTicket.eventTitle}
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-[#94A3B8] text-xs font-bold">
                    <Calendar size={14} className="text-[#FFB020]" /> {mockTicket.date}
                  </div>
                  <div className="flex items-center gap-2.5 text-[#94A3B8] text-xs font-bold">
                    <Clock size={14} className="text-[#FFB020]" /> {mockTicket.time}
                  </div>
                  <div className="flex items-center gap-2.5 text-[#94A3B8] text-xs font-bold">
                    <MapPin size={14} className="text-[#FFB020]" /> {mockTicket.venue}
                  </div>
                </div>
              </div>

              {/* QR Placeholder */}
              <div className="shrink-0 w-28 h-28 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-2xl flex flex-col items-center justify-center gap-2">
                <QrCode size={40} className="text-[#002143]" />
                <span className="text-[8px] font-black text-[#94A3B8] uppercase tracking-widest">QR Code</span>
              </div>
            </div>

            {/* Ticket details row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-b border-[#F1F5F9]">
              {[
                { label: "Ticket Type", value: mockTicket.ticket },
                { label: "Ticket Code", value: mockTicket.ticketCode },
                { label: "Attendee", value: mockTicket.attendee },
                { label: "Amount Paid", value: mockTicket.amount },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm font-black text-[#002143] leading-tight">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-b-[48px] border border-[#F1F5F9] border-t-0 px-10 pb-10 pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { icon: <Download size={18} />, label: "Download Ticket", action: () => {} },
                { icon: <Share2 size={18} />, label: "Share", action: () => navigator.share?.({ title: mockTicket.eventTitle, url: window.location.href }) },
                { icon: <CalendarPlus size={18} />, label: "Add to Calendar", action: () => {} },
                { icon: <QrCode size={18} />, label: "Show QR", action: () => {} },
              ].map(({ icon, label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="flex flex-col items-center gap-2 px-4 py-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl hover:bg-white hover:border-[#1730A8]/20 hover:shadow-md transition-all group"
                >
                  <div className="text-[#1730A8] group-hover:scale-110 transition-transform">{icon}</div>
                  <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest text-center leading-tight">{label}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/events/${params.id}`}
                className="flex-1 py-4 border-2 border-[#F1F5F9] text-[#002143] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F8FAFC] transition-all text-center"
              >
                Event Details
              </Link>
              <Link
                href="/my-tickets"
                className="flex-1 py-4 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] transition-all shadow-lg text-center"
              >
                My Tickets
              </Link>
            </div>

            <p className="text-center text-[11px] font-bold text-[#94A3B8] mt-6">
              A confirmation email has been sent to <span className="text-[#002143]">{mockTicket.email}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
