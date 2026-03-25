"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Plus, 
    Search, 
    MoreHorizontal,
    Filter,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Calendar,
    Users,
    Banknote
} from 'lucide-react';

const eventData = [
    { id: 1, name: 'CPD Ethics Seminar', date: 'Dec 23, 2024', participants: 42, revenue: '₱50,400', status: 'Published' },
    { id: 2, name: 'Real Estate Coaching', date: 'Dec 23, 2024', participants: 186, revenue: '₱223k', status: 'Published' },
    { id: 3, name: 'Property Law Mastery', date: 'Jan 15, 2025', participants: 0, revenue: '₱0', status: 'Draft' },
    { id: 4, name: 'Sales Strategy 2024', date: 'Oct 10, 2024', participants: 120, revenue: '₱144k', status: 'Completed' },
];

export default function ManageEvents() {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = [
        { name: 'All', count: 51 },
        { name: 'Published', count: 42 },
        { name: 'Drafts', count: 12 },
        { name: 'Completed', count: 8 },
    ];

    return (
        <div className="flex flex-col gap-12 pb-24">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-[#0A192F] tracking-tight mb-2">Manage Events</h1>
                    <p className="text-sm font-bold text-[#94A3B8]">Central Command for Your Event Ecosystem</p>
                </div>
                <Link href="/events/create" className="bg-[#0A192F] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1A293F] transition-all shadow-[0_15px_30px_-5px_rgba(10,25,47,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(10,25,47,0.4)] active:scale-95 flex items-center gap-3">
                    <Plus size={18} strokeWidth={3} />
                    Create New Experience
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Status Tabs */}
                <div className="lg:col-span-1 flex flex-col gap-3">
                    <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-4">Filter by Status</span>
                    <div className="bg-white p-3 rounded-[32px] border border-[#F1F5F9] shadow-sm flex flex-col gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center justify-between px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                                    activeTab === tab.name 
                                    ? 'bg-[#0A192F] text-white shadow-xl translate-x-1' 
                                    : 'text-[#94A3B8] hover:bg-[#F8FAFC] hover:text-[#0A192F]'
                                }`}
                            >
                                <span>{tab.name}</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === tab.name ? 'bg-white/10' : 'bg-[#F8FAFC]'}`}>
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Areas */}
                <div className="lg:col-span-3 flex flex-col gap-8">
                    {/* Toolbar */}
                    <div className="bg-white p-6 rounded-[32px] border border-[#F1F5F9] shadow-sm flex items-center justify-between gap-6">
                        <div className="relative group flex-grow">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#2B5CFE] transition-colors" size={18} strokeWidth={2.5} />
                            <input 
                                type="text" 
                                placeholder="Search by name, speaker, or location..." 
                                className="w-full pl-14 pr-6 py-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl text-xs font-bold outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 transition-all"
                            />
                        </div>
                        <button className="p-4 bg-white border border-[#F1F5F9] rounded-2xl text-[#0A192F] hover:bg-[#F8FAFC] transition-all shadow-sm">
                            <Filter size={20} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white rounded-[48px] border border-[#F1F5F9] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F8FAFC]/50">
                                        <th className="px-10 py-6 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9]">Experience Identity</th>
                                        <th className="px-10 py-6 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9] text-center">Traction</th>
                                        <th className="px-10 py-6 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9] text-center">Liquidity</th>
                                        <th className="px-10 py-6 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9] text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F1F5F9]">
                                    {eventData.map((event) => (
                                        <tr key={event.id} className="hover:bg-[#F8FAFC] transition-all duration-300 group cursor-pointer">
                                            <td className="px-10 py-6">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-16 h-16 rounded-[20px] bg-white border border-[#F1F5F9] overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                                                        <img 
                                                            src={`https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=100`} 
                                                            alt="" 
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-[16px] text-[#0A192F] group-hover:text-[#2B5CFE] transition-colors leading-tight mb-1">{event.name}</span>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{event.date}</span>
                                                            <div className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
                                                            <span className={`text-[9px] font-black uppercase tracking-widest ${
                                                                event.status === 'Published' ? 'text-green-500' : 
                                                                event.status === 'Draft' ? 'text-[#94A3B8]' : 
                                                                'text-[#2B5CFE]'
                                                            }`}>
                                                                {event.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6 text-center">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-[15px] font-black text-[#0A192F] tracking-tighter">{event.participants}</span>
                                                    <span className="text-[9px] text-[#94A3B8] font-black uppercase tracking-widest mt-0.5">Attending</span>
                                                </div>
                                            </td>
                                            <td className="px-10 py-6 text-center">
                                                <span className="text-[15px] font-black text-[#0A192F] tracking-tighter">{event.revenue}</span>
                                                <p className="text-[9px] text-[#94A3B8] font-black uppercase tracking-widest mt-0.5">Gross</p>
                                            </td>
                                            <td className="px-10 py-6 text-right">
                                                <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                                    <Link 
                                                        href={`/events/${event.id}/manage`}
                                                        className="p-3 bg-white border border-[#F1F5F9] rounded-xl text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all shadow-sm hover:shadow-xl active:scale-90"
                                                    >
                                                        <ArrowUpRight size={18} strokeWidth={2.5} />
                                                    </Link>
                                                    <button className="p-3 bg-white border border-[#F1F5F9] rounded-xl text-[#94A3B8] hover:bg-[#F8FAFC] hover:text-[#0A192F] transition-all shadow-sm active:scale-90">
                                                        <MoreHorizontal size={18} strokeWidth={2.5} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-10 py-8 bg-[#F8FAFC]/30 border-t border-[#F1F5F9] flex flex-col sm:flex-row justify-between items-center gap-6">
                            <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">Displaying 4 of 51 Command Nodes</span>
                            <div className="flex gap-4">
                                 <button className="flex items-center gap-2 px-6 py-3 bg-white border border-[#F1F5F9] rounded-xl text-[10px] font-black text-[#94A3B8] hover:bg-[#F8FAFC] transition-all"><ChevronLeft size={16}/> Back</button>
                                 <button className="flex items-center gap-2 px-6 py-3 bg-[#0A192F] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1A293F] transition-all shadow-lg">Next Step <ChevronRight size={16}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
