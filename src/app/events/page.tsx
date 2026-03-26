"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Plus, 
    Search, 
    Filter,
    Calendar,
    Users,
    Banknote,
    MoreVertical
} from 'lucide-react';
import StatCard from '@/components/shared/StatCard';

const eventData = [
    { id: 1, name: 'Legal Updates in Real Estate 2026', date: 'Apr 14, 2026', participants: 42, status: 'Cancelled' },
    { id: 2, name: 'Legal Updates in Real Estate 2026', date: 'Apr 14, 2026', participants: 42, status: 'Published' },
    { id: 3, name: 'Legal Updates in Real Estate 2026', date: 'Apr 14, 2026', participants: 42, status: 'Draft' },
    { id: 4, name: 'Legal Updates in Real Estate 2026', date: 'Apr 14, 2026', participants: 42, status: 'Completed' },
];

export default function ManageEvents() {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = [
        { name: 'All', count: 5 },
        { name: 'Published', count: 3 },
        { name: 'Drafts', count: 1 },
        { name: 'Completed', count: 4 },
    ];

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'Published': return 'bg-[#ECFDF5] text-[#059669]';
            case 'Cancelled': return 'bg-[#FEF2F2] text-[#DC2626]';
            case 'Draft': return 'bg-[#FFFBEB] text-[#D97706]';
            case 'Completed': return 'bg-[#F0F9FF] text-[#0284C7]';
            default: return 'bg-[#F8FAFC] text-[#64748B]';
        }
    };

    return (
        <div className="flex flex-col gap-10 pb-24 max-w-[1400px]">
            {/* Header Area */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black text-[#0A192F] tracking-tight mb-2 uppercase">Manage Events</h1>
                    <p className="text-sm font-bold text-[#94A3B8]">Monitor and manage your event life cycle</p>
                </div>
            </div>

            {/* Statistics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard 
                    title="Total Events" 
                    value="5" 
                    icon={Calendar} 
                    iconColor="orange" 
                />
                <StatCard 
                    title="Total Registered" 
                    value="186" 
                    icon={Users} 
                    iconColor="blue" 
                />
                <StatCard 
                    title="Total Revenue" 
                    value="₱223k" 
                    icon={Banknote} 
                    iconColor="green" 
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-8">
                {/* Tabs & Search Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-[#F1F5F9] pb-6">
                    <div className="flex gap-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`relative pb-6 text-sm font-bold tracking-tight transition-all duration-300 ${
                                    activeTab === tab.name 
                                    ? 'text-[#0A192F]' 
                                    : 'text-[#94A3B8] hover:text-[#0A192F]'
                                }`}
                            >
                                {tab.name} ({tab.count})
                                {activeTab === tab.name && (
                                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#002143] rounded-t-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full lg:w-96">
                        <div className="relative flex-grow group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#002143] transition-colors" size={16} strokeWidth={3} />
                            <input 
                                type="text" 
                                placeholder="Search events..." 
                                className="w-full pl-12 pr-6 py-3 bg-white border border-[#F1F5F9] rounded-2xl text-[13px] font-bold outline-none focus:ring-4 focus:ring-[#002143]/5 transition-all shadow-sm"
                            />
                        </div>
                        <button className="p-3 bg-white border border-[#F1F5F9] rounded-2xl text-[#0A192F] hover:bg-[#F8FAFC] transition-all shadow-sm">
                            <Filter size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Event Cards List */}
                <div className="flex flex-col gap-5">
                    {eventData.map((event) => (
                        <div 
                            key={event.id} 
                            className="bg-white p-8 rounded-[32px] border border-[#F1F5F9] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] transition-all duration-500 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-8">
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-2xl font-black text-[#0A192F] tracking-tight group-hover:text-[#002143] transition-colors">
                                        {event.name}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest">{event.date}</span>
                                        <div className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
                                        <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest">{event.participants} registered</span>
                                        <div className="w-1 h-1 rounded-full bg-[#E2E8F0]" />
                                        <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full ${getStatusStyles(event.status)}`}>
                                            {event.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 transition-all duration-500 opacity-100 visible">
                                <Link 
                                    href={`/events/${event.id}/manage`}
                                    className="bg-[#002143] text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all"
                                >
                                    Manage
                                </Link>
                                <button className="p-4 bg-[#F8FAFC] text-[#94A3B8] hover:text-[#0A192F] rounded-2xl transition-all">
                                    <MoreVertical size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
