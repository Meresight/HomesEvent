"use client";
import React from 'react';
import { 
    Search, 
    Check, 
    ChevronDown, 
    Calendar,
    Users,
    Banknote,
    QrCode
} from 'lucide-react';
import StatCard from '@/components/shared/StatCard';

const attendees = [
    { id: 1, name: 'Juan dela Cruz', ticket: 'Member', status: 'checked-in' },
    { id: 2, name: 'Juan dela Cruz', ticket: 'Member', status: 'pending' },
    { id: 3, name: 'Juan dela Cruz', ticket: 'Member', status: 'pending' },
    { id: 4, name: 'Juan dela Cruz', ticket: 'Member', status: 'pending' },
    { id: 5, name: 'Juan dela Cruz', ticket: 'Member', status: 'pending' },
    { id: 6, name: 'Juan dela Cruz', ticket: 'Member', status: 'pending' },
];

export default function LiveCheckIn() {
    return (
        <div className="flex flex-col gap-10 pb-24 max-w-[1400px]">
            {/* Header Area */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-[#002143] tracking-tight mb-2 uppercase">Live Check In</h1>
            </div>

            {/* Stats Row */}
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: QR Scanner */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-black text-[#002143] tracking-tight uppercase">QR Code Scanner</h3>
                        <div className="bg-white p-10 rounded-[40px] border border-[#F1F5F9] shadow-sm flex flex-col items-center gap-8">
                            <div className="w-full aspect-[4/3] rounded-[32px] border-4 border-dashed border-[#1730A8]/20 bg-[#F8FAFC] flex flex-col items-center justify-center gap-4 group transition-all duration-500 hover:border-[#1730A8]/40">
                                <QrCode size={80} className="text-[#1730A8] opacity-40 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Point camera at attendee QR code</p>
                            </div>
                            <button className="w-full bg-[#1730A8] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(29,78,216,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                                Enable Camera Scanner
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-[#EAEEF3]/50 border border-[#F1F5F9] rounded-[24px] p-5 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#1730A8] flex items-center justify-center text-white">
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <p className="text-[13px] font-bold text-[#002143]">
                                Last checked in: <span className="text-[#1730A8] uppercase tracking-tighter ml-1">Juan dela Cruz - 9:10 AM</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Manual Search */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="flex justify-between items-end">
                        <h3 className="text-xl font-black text-[#1730A8] tracking-tight uppercase">Manual Search</h3>
                    </div>

                    <div className="bg-white rounded-[40px] border border-[#F1F5F9] shadow-sm overflow-hidden flex flex-col">
                        <div className="p-8 border-b border-[#F1F5F9] flex gap-4">
                            <div className="relative flex-grow">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                                <input 
                                    type="text" 
                                    placeholder="Search here" 
                                    className="w-full pl-14 pr-6 py-4 bg-[#F8FAFC] rounded-2xl text-[13px] font-bold outline-none border border-transparent focus:border-[#1730A8]/20 focus:ring-4 focus:ring-[#1730A8]/5 transition-all"
                                />
                            </div>
                            <button className="px-8 py-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl text-xs font-black text-[#002143] flex items-center gap-3 hover:bg-white transition-all">
                                Status
                                <ChevronDown size={16} />
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#1730A8] text-white">
                                        <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Attendee</th>
                                        <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10] text-center">Ticket</th>
                                        <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10] text-center">Status</th>
                                        <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest text-right">Download</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#F1F5F9]">
                                    {attendees.map((attendee, index) => (
                                        <tr key={index} className="hover:bg-[#F8FAFC] transition-colors group">
                                            <td className="px-10 py-5 text-[14px] font-bold text-[#002143] opacity-70 group-hover:opacity-100 transition-opacity">
                                                {attendee.name}
                                            </td>
                                            <td className="px-10 py-5 text-center text-xs font-bold text-[#94A3B8]">
                                                {attendee.ticket}
                                            </td>
                                            <td className="px-10 py-5 text-center">
                                                <div className="flex justify-center">
                                                    <Check size={20} className="text-[#002143] opacity-50" strokeWidth={2.5} />
                                                </div>
                                            </td>
                                            <td className="px-10 py-5 text-right">
                                                <button className="bg-[#1730A8] text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#112480] transition-all shadow-md">
                                                    Check-in
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
