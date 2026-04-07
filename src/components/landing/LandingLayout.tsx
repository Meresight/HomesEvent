"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// ─── Shared Landing Header ────────────────────────────────────────────────────

interface LandingHeaderProps {
  activePage?: "home" | "tickets" | "events" | "create";
}

export function LandingHeader({ activePage = "home" }: LandingHeaderProps) {
  const activeClass = "text-[#FFB020] font-bold text-sm";
  const inactiveClass =
    "text-[#4A5568] font-bold text-sm hover:text-[#002143] transition-colors";

  return (
    <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white sticky top-0 z-50 shadow-[0_1px_0_#E2E8F0]">
      <Link href="/landing" className="flex items-center">
        <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
      </Link>

      <nav className="hidden lg:flex items-center gap-10">
        <Link
          href="/landing"
          className={activePage === "home" ? activeClass : inactiveClass}
        >
          Home
        </Link>
        <Link
          href="/my-tickets"
          className={activePage === "tickets" ? activeClass : inactiveClass}
        >
          My Tickets
        </Link>
        <Link
          href="/events"
          className={activePage === "events" ? activeClass : inactiveClass}
        >
          Discover Events
        </Link>
        <Link
          href="/events/create"
          className={activePage === "create" ? activeClass : inactiveClass}
        >
          Create Events
        </Link>
      </nav>

      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/login"
          className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile hamburger placeholder */}
      <button className="lg:hidden flex flex-col gap-1.5 p-2">
        <span className="w-6 h-0.5 bg-[#0A192F] rounded" />
        <span className="w-6 h-0.5 bg-[#0A192F] rounded" />
        <span className="w-4 h-0.5 bg-[#0A192F] rounded" />
      </button>
    </header>
  );
}

// ─── Shared Landing Footer ────────────────────────────────────────────────────

export function LandingFooter() {
  return (
    <footer className="bg-[#002143] pt-20 pb-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 px-10 md:px-20">
        {/* Branding */}
        <div className="lg:col-span-2">
          <img
            src="/Group 483036.png"
            alt="Homes.ph Events"
            className="h-10 mb-8 brightness-0 invert"
          />
          <p className="text-white/80 text-sm font-medium leading-relaxed mb-6 max-w-sm">
            Your trusted partner in finding the perfect home. Connecting
            Filipinos with quality properties nationwide.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/homesph" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/homesph" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/homesph" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
              <X size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-black text-base mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/landing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Home</Link></li>
            <li><Link href="/my-tickets" className="text-white/80 hover:text-white text-sm font-medium transition-colors">My Tickets</Link></li>
            <li><Link href="/events" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Discover Events</Link></li>
            <li><Link href="/events/create" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Create Events</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-black text-base mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="/help" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About Us</Link></li>
            <li><Link href="/help" className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQs</Link></li>
            <li><Link href="/login" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Login</Link></li>
            <li><Link href="/signup" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Register</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-black text-base mb-6">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Phone size={18} className="mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">(+63) 977 815 0888</p>
                <p className="text-[10px] text-white/60">Mon-Sat 9AM-8PM</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail size={18} className="mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">info@homes.ph</p>
                <p className="text-[10px] text-white/60">We reply within 24hrs</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={18} className="mt-0.5 shrink-0" />
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
          <p className="text-white/60 text-xs font-medium">
            © 2026 Homes.ph. All rights reserved. Your dream home awaits.
          </p>
          <p className="text-white/40 text-[10px] mt-1">
            Powered by passion and innovation
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/help" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Privacy Policy</Link>
          <Link href="/help" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Terms of Service</Link>
          <Link href="/help" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
