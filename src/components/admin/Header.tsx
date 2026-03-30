"use client";
import React from 'react';
import { Search, Bell, Plus, LayoutPanelLeft, Command } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/store/useAuth';

export default function AdminHeader({ onSidebarToggle, isSidebarCollapsed }: { onSidebarToggle: () => void, isSidebarCollapsed: boolean }) {
    const { user, logout } = useAuth();

    return (
        <header className={cn(
            "fixed top-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 z-40 transition-all duration-300 shadow-sm",
            isSidebarCollapsed ? "left-20" : "left-64"
        )}>
            <div className="h-full px-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={onSidebarToggle}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
                    >
                        <LayoutPanelLeft className="w-6 h-6" />
                    </button>
                    
                    <div className="relative group hidden lg:block">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-[#1730A8] transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search for events, venues or speakers..." 
                            className="pl-16 pr-16 py-3.5 bg-gray-50/50 border border-gray-100 rounded-full text-[13px] w-[500px] focus:ring-4 focus:ring-[#1730A8]/5 focus:bg-white focus:border-[#C7D2FE] transition-all outline-none font-medium text-gray-600 placeholder:text-gray-400 shadow-sm"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm pointer-events-none">
                            <span className="text-[10px] font-black text-gray-400">⌘</span>
                            <span className="text-[10px] font-black text-gray-400">K</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="bg-[#1123AD] hover:bg-[#0A192F] text-white px-5 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#1123AD]/20 transition-all transform active:scale-95">
                        <Plus className="w-4 h-4" />
                        <span>Add Event</span>
                    </button>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        
                        <div className="flex items-center gap-4 pl-4 border-l border-gray-100">
                            <div className="flex flex-col items-end hidden sm:flex">
                                <span className="text-sm font-bold text-gray-800 leading-none">{user?.fullName || 'Admin'}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#1123AD] mt-1">Administrator</span>
                            </div>
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1123AD]/10 shadow-sm transition-all hover:scale-105">
                                <img 
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150" 
                                    alt="Admin User" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
