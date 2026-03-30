"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/useAuth";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ fullName: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Perform mock login
      login(formData.fullName);
      
      // Determine destination based on role
      const role = formData.fullName.toLowerCase().includes('admin') ? 'admin' : 'user';
      
      if (role === 'admin') {
        router.push("/admin");
      } else {
        router.push("/");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white font-[var(--font-inter)] flex flex-col">
      {/* ─── TOPBAR ─── */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0] shrink-0">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/landing" className="text-[#FFB020] font-bold text-sm">Home</Link>
          <Link href="/my-tickets" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">My Tickets</Link>
          <Link href="/events" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Discover Events</Link>
          <a href="#" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Create Events</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all">
            Sign in
          </Link>
          <Link href="/landing" className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all">
            Back
          </Link>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* LEFT COLUMN - IMAGE */}
        <div className="w-full md:w-1/2 relative bg-[#00174F] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img 
            src="/gettyimages-1730120071-612x612 1.png" 
            alt="Event Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <img 
            src="/Group 483037.png" 
            alt="Graphics" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90"
          />
          <div className="relative z-10 flex flex-col items-center w-full px-16">
            <img src="/Group 483038.png" alt="Homes.ph Events Event Management" className="w-full max-w-[600px] h-auto drop-shadow-2xl" />
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="w-full md:w-1/2 bg-white flex flex-col relative py-12 px-8 lg:px-20 lg:py-16">
          <div className="max-w-[400px] w-full mx-auto my-auto mt-20">
            <h1 className="text-[32px] font-bold text-[#0A192F] mb-2 leading-tight">Login</h1>
            <p className="text-[#4A5568] text-[13px] font-medium mb-10">Access your account for updates and exclusive access.</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-[#4A5568] text-[13px] font-bold mb-2">
                  Full Name <span className="text-[#1730A8]">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#1730A8] focus:ring-1 focus:ring-[#1730A8]/20 transition-all font-medium placeholder:text-[#A0AEC0]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[#4A5568] text-[13px] font-bold mb-2">
                  Password <span className="text-[#1730A8]">*</span>
                </label>
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#1730A8] focus:ring-1 focus:ring-[#1730A8]/20 transition-all font-medium placeholder:text-[#A0AEC0]"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-[#1730A8] text-white py-4 rounded-lg font-bold text-sm hover:bg-[#112480] transition-colors mt-2"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center">
              <span className="text-[#718096] text-[11px] font-bold">or continue with</span>
            </div>

            <button 
              type="button"
              className="mt-6 w-full bg-white border border-[#E2E8F0] text-[#1730A8] py-4 rounded-lg font-bold text-[14px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google Account
            </button>
          </div>

          <div className="mt-auto pt-10 text-center w-full">
            <p className="text-[#A0AEC0] text-[11px] font-medium">
              © 2026 Homes.ph. All rights reserved. Your dream home awaits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
