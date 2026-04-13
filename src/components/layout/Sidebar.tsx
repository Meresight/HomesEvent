"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    LayoutDashboard, 
    CalendarDays, 
    ClipboardList, 
    ChevronRight,
    Sparkles,
    ChevronLeft,
    CheckCircle2,
    User,
    LogOut,
    CalendarCheck,
    Users,
    BarChart3
} from 'lucide-react';
import { useSidebar } from '@/store/useSidebar';
import { useAuth } from '@/store/useAuth';

const navItems = [
    // Shared
    { name: 'Dashboard', href: '/', icon: LayoutDashboard, roles: ['admin', 'organizer', 'user'] },
    
    // Admin Specific
    { name: 'Event Approvals', href: '/admin/approvals', icon: CalendarCheck, roles: ['admin'] },
    { name: 'Manage Users', href: '/admin/users', icon: Users, roles: ['admin'] },
    { name: 'Reports', href: '/admin/reports', icon: BarChart3, roles: ['admin'] },

    // Member Specific (User / Organizer)
    { name: 'Manage Events', href: '/manage-events', icon: CalendarDays, roles: ['organizer', 'user'] },
    { name: 'My CPD Records', href: '/cpd', icon: ClipboardList, roles: ['organizer', 'user'] },
    { name: 'Live Check In', href: '/check-in', icon: CheckCircle2, roles: ['organizer', 'user'] },
    { name: 'My Profile', href: '/profile', icon: User, roles: ['organizer', 'user'] },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { isCollapsed, toggle } = useSidebar();
    const { user, logout } = useAuth();

    const filteredNavItems = navItems.filter(item => {
        if (!user) return item.roles.includes('user');
        return item.roles.includes(user.role);
    });

    return (
        <>
            <aside 
                className={`${isCollapsed ? 'w-[100px]' : 'w-[280px]'} text-[#FFFFFF] flex-shrink-0 flex flex-col h-screen sticky top-0 rounded-tr-3xl shadow-[10px_0_40px_rgba(0,0,0,0.1)] z-20 transition-all duration-500 ease-in-out overflow-hidden border-r border-[#FFFFFF]/5`}
                style={{
                    backgroundImage: "url('/Rectangle 1244.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            {/* Logo Section */}
            <div className={`h-24 flex items-center transition-all duration-500 ${isCollapsed ? 'justify-center' : 'px-8 justify-start'}`}>
                <div className="flex items-center gap-3">
                    {isCollapsed ? (
                        <div className="relative h-10 w-10 flex items-center justify-center flex-shrink-0 animate-in fade-in zoom-in duration-500">
                            <img 
                                src="/HomesLogoW 2 (1).png" 
                                alt="H" 
                                className="w-8 h-8 object-contain" 
                            />
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link href="/" className="flex items-center gap-2 active:scale-95 transition-transform">
                                <div className="h-10 flex items-center justify-center overflow-hidden">
                                    <img 
                                        src="/Group 483031.png" 
                                        alt="Homes.ph Events Logo" 
                                        className="h-[140%] w-auto object-contain" 
                                    />
                                </div>
                            </Link>

                            <button 
                                onClick={toggle}
                                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-95 translate-x-1"
                                title="Minimize Sidebar"
                            >
                                <ChevronLeft size={20} strokeWidth={2.5} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            {isCollapsed && (
                <div className="flex justify-center pb-4">
                    <button 
                        onClick={toggle}
                        className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-95"
                        title="Expand Sidebar"
                    >
                        <ChevronRight size={20} strokeWidth={2.5} />
                    </button>
                </div>
            )}

            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8 mb-8" />

            {/* Navigation */}
            <nav className="px-5 flex-grow overflow-y-auto scrollbar-hide">
                <ul className="list-none flex flex-col gap-2">
                    {filteredNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                        return (
                            <li key={item.name} className="relative">
                                <Link 
                                    href={item.href} 
                                    className={`group flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-5 py-4 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden ${
                                        isActive 
                                        ? 'bg-white text-[#1730A8] shadow-[0_10px_30px_rgba(255,255,255,0.1)] scale-[1.02]' 
                                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#FFB020] rounded-r-full z-20 shadow-[2px_0_10px_rgba(255,176,32,0.4)]" />
                                    )}
                                    <div className={`flex items-center ${isCollapsed ? 'gap-0' : 'gap-5'} relative z-10 ${!isCollapsed && 'pl-3'}`}>
                                        <Icon className={`flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-[#1730A8]' : 'text-white/80 group-hover:text-white'}`} size={22} strokeWidth={isActive ? 2.5 : 2} />
                                        {!isCollapsed && <span className="text-[14px] tracking-wide whitespace-nowrap animate-in slide-in-from-left-2 duration-300">{item.name}</span>}
                                    </div>
                                    {isActive && !isCollapsed && <div className="w-1.5 h-1.5 rounded-full bg-[#FFB020] shadow-[0_0_8px_#FFB020]" />}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Profile + Dropdown Section */}
            <div className={`p-6 flex flex-col gap-3 transition-all duration-500 relative ${isCollapsed ? 'items-center' : ''}`}>
                <div className={`group/profile cursor-pointer flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} bg-white/5 p-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-white/20 overflow-visible relative`}>
                    <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl border border-white/10 overflow-hidden shadow-xl relative z-10 transition-transform group-hover/profile:scale-105">
                            <img src="https://i.pravatar.cc/150?u=jd" alt="User" className="w-full h-full object-cover grayscale group-hover/profile:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-[#1730A8] rounded-full z-20"></div>
                    </div>
                    {!isCollapsed && (
                        <div className="flex flex-col overflow-hidden animate-in fade-in duration-500">
                            <p className="text-white font-bold text-xs truncate leading-none">{user?.fullName || 'Guest'}</p>
                            <p className="text-white/80 text-[8px] font-black uppercase tracking-widest mt-1">
                                {user?.role === 'admin' ? 'Administrator' : 'Event Member'}
                            </p>
                        </div>
                    )}

                    {/* Popover Dropdown Menu */}
                    <div className="absolute bottom-full left-0 mb-4 w-[230px] bg-[#112480] border border-white/10 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-300 translate-y-2 group-hover/profile:translate-y-0 z-50 overflow-hidden">
                        <Link href="/profile" className="block px-5 py-4 text-[13px] font-bold text-white hover:bg-white/10 transition-all border-b border-white/5">
                            <div className="flex items-center gap-3"><User size={16} className="text-white/50" /> My Profile</div>
                        </Link>
                        <button 
                            onClick={() => logout()}
                            className="w-full px-5 py-4 flex items-center gap-3 text-left text-red-400 hover:bg-red-500/10 transition-all uppercase tracking-widest text-[10px] font-black"
                        >
                            <LogOut size={16} /> Log Out
                        </button>
                    </div>
                </div>

                {isCollapsed && (
                    <button 
                        onClick={() => logout()}
                        className="w-[50px] h-[50px] flex items-center justify-center bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-500/30 text-white/80 hover:text-red-400 rounded-2xl transition-all duration-300 shadow-xl" 
                        title="Log Out"
                    >
                        <LogOut size={18} strokeWidth={2.5} />
                    </button>
                )}
            </div>
        </aside>
        </>
    );
}
