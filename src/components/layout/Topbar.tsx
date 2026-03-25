"use client";
import React from 'react';
import { Bell, Plus, PanelLeft, PanelRight, Search, Command } from 'lucide-react';
import { useSidebar } from '@/store/useSidebar';

export default function Topbar() {
    const { isCollapsed, toggle } = useSidebar();

    return (
        <header className="flex items-center justify-between px-10 h-20 bg-white border-b border-[#F1F5F9] flex-shrink-0 z-10 sticky top-0 transition-all duration-500">
            <div className="flex items-center gap-6">
                <div className="relative group hidden xl:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-[#FFB020]" size={16} strokeWidth={2.5} />
                    <input 
                        type="text" 
                        placeholder="Search for events, venues or speakers..." 
                        className="pl-12 pr-16 py-3 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl text-[11px] font-bold text-[#0A192F] w-[360px] focus:ring-4 focus:ring-[#FFB020]/5 focus:border-[#FFB020]/20 outline-none transition-all shadow-sm group-hover:bg-[#F1F5F9]"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 bg-white border border-[#F1F5F9] rounded-md shadow-sm">
                        <Command size={8} className="text-[#94A3B8]" />
                        <span className="text-[9px] font-black text-[#94A3B8]">K</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-8">
                <button className="hidden sm:flex items-center gap-2.5 bg-[#FFB020] text-[#0A192F] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-wider hover:scale-105 transition-all shadow-lg active:scale-95">
                    <Plus size={16} strokeWidth={3} />
                    Add Event
                </button>

                <div className="flex items-center gap-6">
                    <button className="relative text-[#94A3B8] hover:text-[#FFB020] transition-all p-2 hover:bg-[#F8FAFC] rounded-xl active:scale-95 group" aria-label="Notifications">
                        <Bell size={22} strokeWidth={2} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-[#FFB020] rounded-full border-2 border-white shadow-lg animate-pulse"></span>
                    </button>

                    <div className="flex items-center gap-3 cursor-pointer group p-1 hover:bg-[#F8FAFC] rounded-xl transition-all duration-500">
                        <div className="flex flex-col items-end hidden lg:flex">
                            <span className="text-xs font-black text-[#0A192F] leading-none mb-1">Kenneth S.</span>
                            <span className="text-[8px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">Super Admin</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl border border-[#F1F5F9] overflow-hidden shadow-lg group-hover:border-[#E2E8F0] transition-all duration-500 group-hover:scale-105">
                            <img 
                                src="https://i.pravatar.cc/150?u=ken" 
                                alt="User avatar" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
