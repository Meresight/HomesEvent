"use client";
import React from 'react';
import { 
    CheckCircle2, 
    Clock, 
    CheckSquare, 
    XCircle,
    Search,
    ChevronDown,
    Calendar,
    Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
    { label: 'Total Approvals', value: '1234', icon: CheckCircle2, color: 'text-white', bgColor: 'bg-[#1730A8]' },
    { label: 'Pending', value: '53', icon: Clock, color: 'text-white', bgColor: 'bg-[#F6A51B]' },
    { label: 'Approved', value: '332', icon: CheckSquare, color: 'text-white', bgColor: 'bg-[#10B981]' },
    { label: 'Rejected', value: '543', icon: XCircle, color: 'text-white', bgColor: 'bg-[#EF4444]' },
];

const events = [
    { id: 1, title: 'Legal Updates in Real Estate 2026', org: 'Property Pro Org', date: 'Apr 8', capacity: '80', cpd: '3 CPD hrs', type: 'Seminar' },
    { id: 2, title: 'Legal Updates in Real Estate 2026', org: 'Property Pro Org', date: 'Apr 8', capacity: '80', cpd: '3 CPD hrs', type: 'Seminar' },
    { id: 3, title: 'Legal Updates in Real Estate 2026', org: 'Property Pro Org', date: 'Apr 8', capacity: '80', cpd: '3 CPD hrs', type: 'Seminar' },
    { id: 4, title: 'Legal Updates in Real Estate 2026', org: 'Property Pro Org', date: 'Apr 8', capacity: '80', cpd: '3 CPD hrs', type: 'Seminar' },
];

export default function EventApprovals() {
    return (
        <div className="space-y-8 pb-12">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-soft flex items-center gap-6 hover:shadow-premium-md transition-all duration-300">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg", stat.bgColor)}>
                            <stat.icon className={cn("w-6 h-6", stat.color)} />
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-3xl font-black text-gray-900 mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-1 group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-[#1730A8] transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search here" 
                        className="w-full bg-white border border-[#C7D2FE] pl-16 pr-8 py-4.5 rounded-full text-[13px] focus:ring-4 focus:ring-[#1730A8]/5 outline-none shadow-sm transition-all font-medium text-gray-600 placeholder:text-gray-300"
                    />
                </div>
                <button className="bg-white border border-gray-100 px-10 py-5 rounded-[80px] text-sm font-black text-gray-500 flex items-center gap-4 hover:bg-gray-50 transition-colors shadow-soft outline-none">
                    Filters
                    <ChevronDown className="w-5 h-5 opacity-30" />
                </button>
            </div>

            {/* Event Cards List */}
            <div className="space-y-8">
                {events.map((event) => (
                    <div key={event.id} className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-soft hover:shadow-premium-lg transition-all duration-500 group">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                            <div className="flex-1 space-y-6">
                                <div className="flex flex-wrap items-center gap-4">
                                    <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-[#1123AD] transition-colors">{event.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-md shadow-blue-600/20">{event.cpd}</span>
                                        <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-blue-100">{event.type}</span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-3 text-sm text-gray-400 font-bold tracking-wide">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-[#1123AD] font-black underline underline-offset-4 decoration-2 decoration-[#1123AD]/10">Property Pro Org</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Calendar className="w-4 h-4 text-blue-400" />
                                        <span>Apr 8</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Users className="w-4 h-4 text-blue-400" />
                                        <span>{event.capacity} Capacity</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <button className="bg-[#1730A8] hover:bg-[#112480] text-white px-8 py-4.5 rounded-[20px] text-[11px] font-black uppercase tracking-[0.15em] transition-all shadow-premium-md transform active:scale-95">
                                    Review details
                                </button>
                                <button className="bg-[#DCFCE7] hover:bg-green-200 text-[#166534] border border-[#BBF7D0] px-8 py-4.5 rounded-[20px] text-[11px] font-black uppercase tracking-[0.15em] transition-all transform active:scale-95 flex items-center gap-2">
                                    <CheckSquare className="w-4 h-4" /> Approve
                                </button>
                                <button className="bg-[#FEE2E2] hover:bg-red-200 text-[#991B1B] border border-[#FECACA] px-8 py-4.5 rounded-[20px] text-[11px] font-black uppercase tracking-[0.15em] transition-all transform active:scale-95 flex items-center gap-2">
                                    <XCircle className="w-4 h-4" /> Reject
                                </button>
                                <button className="bg-white hover:bg-gray-50 text-gray-400 border border-gray-200 px-8 py-4.5 rounded-[20px] text-[11px] font-black uppercase tracking-[0.15em] transition-all transform active:scale-95 shadow-sm">
                                    Request Changes
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
