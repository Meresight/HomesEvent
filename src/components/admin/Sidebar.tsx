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
                "fixed top-0 left-0 h-full text-white transition-all duration-300 ease-in-out z-50 flex flex-col rounded-tr-3xl shadow-[10px_0_40px_rgba(0,0,0,0.1)]",
                isCollapsed ? "w-20" : "w-64"
            )}
            style={{
                backgroundColor: "#1428AE"
            }}
        >
            <div className={`h-24 flex items-center transition-all duration-500 ${isCollapsed ? 'justify-center' : 'px-8 justify-between'}`}>
                {!isCollapsed ? (
                    <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-500">
                        <Link href="/" className="flex items-center group/logo active:scale-95 transition-transform">
                            <img 
                                src="/Group 483031.png" 
                                alt="Homes.ph Events" 
                                className="h-10 object-contain" 
                            />
                        </Link>
                        
                        <button 
                            onClick={onToggle}
                            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-95"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <div 
                            onClick={onToggle}
                            className="relative h-10 w-10 flex items-center justify-center flex-shrink-0 animate-in fade-in zoom-in duration-500 cursor-pointer active:scale-95 transition-transform"
                        >
                            <img 
                                src="/HomesLogoW 2 (1).png" 
                                alt="H" 
                                className="w-8 h-8 object-contain" 
                            />
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

            {/* Minimized Logout Button */}
            {isCollapsed && (
                <div className="p-4 flex flex-col items-center gap-4 mt-auto mb-6">
                    <button 
                        onClick={() => logout()}
                        className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-500/30 text-white/80 hover:text-red-400 rounded-2xl transition-all duration-300 shadow-xl active:scale-95" 
                        title="Log Out"
                    >
                        <LogOut size={20} strokeWidth={2.5} />
                    </button>
                </div>
            )}


        </aside>
    );
}
