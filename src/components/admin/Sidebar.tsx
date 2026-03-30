"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, CalendarCheck, Users, BarChart3, ChevronLeft, ChevronRight, User, LogOut } from 'lucide-react';
import { useAuth } from '@/store/useAuth';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
    { name: 'Event Approvals', icon: CalendarCheck, href: '/admin/event-approvals' },
    { name: 'Manage Users', icon: Users, href: '/admin/manage-users' },
    { name: 'Reports', icon: BarChart3, href: '/admin/reports' },
];

export default function Sidebar({ isCollapsed, onToggle }: { isCollapsed: boolean, onToggle: () => void }) {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    return (
        <aside 
            className={cn(
                "fixed top-0 left-0 h-full bg-[#1123AD] text-white transition-all duration-300 ease-in-out z-50 flex flex-col pt-8",
                isCollapsed ? "w-20" : "w-64"
            )}
        >
            <div className="px-8 mb-12 flex items-center justify-between transition-all duration-500">
                {!isCollapsed && (
                    <div className="flex flex-col animate-in fade-in slide-in-from-left-4 duration-500">
                        <Link href="/" className="flex items-center group/logo active:scale-95 transition-transform">
                            <img 
                                src="/Group 483031.png" 
                                alt="Homes.ph Events" 
                                className="h-10 object-contain" 
                            />
                        </Link>
                    </div>
                )}
                {isCollapsed && (
                    <div className="w-full flex justify-center active:scale-110 transition-transform cursor-pointer group/logo relative">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 group-hover/logo:bg-white/20 transition-colors shadow-lg">
                            <span className="text-white font-black text-xl">H</span>
                        </div>
                    </div>
                )}
            </div>

            <nav className="flex-1 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <div key={item.name} className="px-4">
                            <Link 
                                href={item.href}
                                className={cn(
                                    "flex items-center transition-all group relative duration-300",
                                    isCollapsed ? "justify-center h-14 w-14 mx-auto rounded-2xl" : "gap-4 py-4 px-6 rounded-2xl",
                                    isActive 
                                        ? "bg-white text-[#1123AD] font-black shadow-[0_10px_30px_rgba(255,255,255,0.15)] scale-[1.02]" 
                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-accent rounded-r-full z-20 shadow-[2px_0_15px_rgba(255,176,32,0.6)]" />
                                )}
                                <item.icon className={cn("w-5 h-5 transition-all duration-300", isActive ? "text-[#1123AD] scale-110" : "group-hover:scale-110 group-hover:text-white")} />
                                {!isCollapsed && (
                                    <span className="text-[13px] tracking-wide animate-in slide-in-from-left-2 duration-300 uppercase font-black">
                                        {item.name}
                                    </span>
                                )}
                                {isActive && !isCollapsed && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                )}
                            </Link>
                        </div>
                    );
                })}
            </nav>

            {/* Profile Section at Bottom */}
            <div className={cn("mt-auto relative transition-all duration-500", isCollapsed ? "p-3" : "p-4")}>
                {!isCollapsed ? (
                    <div className="group/profile relative">
                        {/* Popover Dropdown Menu */}
                        <div className="absolute bottom-full left-0 mb-4 w-full bg-[#1e293b] border border-white/10 rounded-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 translate-y-2 group-hover/profile:translate-y-0 z-50 overflow-hidden p-2">
                            <Link href="/admin/profile" className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 rounded-2xl transition-all group/link">
                                <User className="w-5 h-5 text-white/40 group-hover/link:text-white transition-colors" />
                                <span className="text-[13px] font-bold tracking-wide">My Profile</span>
                            </Link>
                            <button 
                                onClick={() => logout()}
                                className="w-full flex items-center gap-4 px-6 py-4 hover:bg-[#ef4444]/10 text-[#ef4444] rounded-2xl transition-all group/logout mt-1"
                            >
                                <LogOut className="w-5 h-5 group-hover/logout:scale-110 transition-transform" />
                                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Log Out</span>
                            </button>
                        </div>

                        {/* Visible User Card */}
                        <div className="p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-[32px] flex items-center gap-4 transition-all duration-300 cursor-pointer">
                            <div className="relative flex-shrink-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150" 
                                    alt="User" 
                                    className="w-10 h-10 rounded-2xl object-cover ring-2 ring-white/10" 
                                />
                                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-[3px] border-[#1123AD] rounded-full" />
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <span className="text-[12px] font-bold truncate text-white/90">boncheturma.12@gmail.com</span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/30 mt-0.5">Administrator</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="group/profile relative hover:scale-110 transition-transform active:scale-95 cursor-pointer">
                        <div className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 relative group-hover/profile:border-white/20">
                            <img 
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150" 
                                alt="User" 
                                className="w-10 h-10 object-cover rounded-xl" 
                            />
                            <div className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 border-2 border-[#1123AD] rounded-full" />
                        </div>
                        
                        {/* Simple Popover for Collapsed */}
                        <div className="absolute left-full bottom-0 ml-4 w-[200px] bg-[#1e293b] border border-white/10 rounded-[24px] shadow-2xl opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 translate-x-[-10px] group-hover/profile:translate-x-0 z-50 p-2">
                            <Link href="/admin/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl transition-all">
                                <User className="w-4 h-4 text-white/40" />
                                <span className="text-[12px] font-bold">Profile</span>
                            </Link>
                            <button onClick={() => logout()} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 text-red-500 rounded-xl transition-all mt-1">
                                <LogOut className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Log Out</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}
