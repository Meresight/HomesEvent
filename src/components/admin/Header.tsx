"use client";
import React from 'react';
import { Search, Bell, Plus, LayoutPanelLeft, Command, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAuth } from '@/store/useAuth';

export default function AdminHeader({ onSidebarToggle, isSidebarCollapsed }: { onSidebarToggle: () => void, isSidebarCollapsed: boolean }) {
    const { user, logout } = useAuth();

    return (
        <header className={cn(
            "bg-white border-b border-[#F1F5F9] h-20 z-40 transition-all duration-300 w-full"
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
                        
                        <div className="relative group/profile">
                            <div className="flex items-center gap-4 pl-4 border-l border-gray-100 cursor-pointer">
                                <div className="flex flex-col items-end hidden sm:flex">
                                    <span className="text-sm font-bold text-gray-800 leading-none">{user?.fullName || 'Admin'}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1123AD] mt-1">Administrator</span>
                                </div>
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1123AD]/10 shadow-sm transition-all group-hover/profile:scale-105">
                                    <img 
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150" 
                                        alt="Admin User" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Dropdown Menu - No Logout */}
                            <div className="absolute top-[110%] right-0 w-[200px] bg-white border border-[#F1F5F9] rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 translate-y-2 group-hover/profile:translate-y-0 z-50 overflow-hidden">
                                <Link 
                                    href="/admin/profile" 
                                    className="flex items-center gap-3 px-5 py-4 text-[12px] font-bold text-[#002143] hover:bg-[#F8FAFC] hover:text-[#1123AD] transition-all border-b border-[#F1F5F9]"
                                >
                                    <User size={16} className="text-gray-400" /> 
                                    My Profile
                                </Link>
                                <button 
                                    onClick={() => logout()}
                                    className="w-full flex items-center gap-3 px-5 py-4 text-left text-red-500 hover:bg-red-50 transition-all uppercase tracking-widest text-[10px] font-black"
                                >
                                    <LogOut size={16} /> 
                                    Log out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
