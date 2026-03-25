"use client";
import React from 'react';
import { 
    QrCode, 
    Search, 
    Check, 
    ChevronDown, 
    Camera,
    Users,
    Calendar,
    Banknote
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
        <div className="flex flex-col gap-8 pb-12">
            <h1 className="text-3xl font-bold text-primary">Live Check In</h1>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left: QR Scanner Area */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white rounded-[32px] border border-border p-8 shadow-sm flex flex-col items-center">
                        <div className="w-full flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-primary">QR Code Scanner</h3>
                        </div>
                        
                        <div className="w-full aspect-video bg-[#F1F5F9] rounded-2xl border-2 border-dashed border-[#2563EB]/30 flex flex-col items-center justify-center relative overflow-hidden group">
                            <QrCode size={64} className="text-[#2563EB] mb-4 opacity-50" />
                            <p className="text-sm font-medium text-text-muted">Point camera at attendee QR code</p>
                            <div className="absolute inset-0 border-[40px] border-white/50 pointer-events-none"></div>
                        </div>

                        <button className="w-full mt-8 py-4 bg-[#1E3A8A] text-white rounded-xl font-bold text-sm hover:bg-[#1E3A8A]/90 transition-all shadow-lg flex items-center justify-center gap-2">
                             <Camera size={20} />
                             Activate Camera Scanner
                        </button>
                    </div>

                    <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white">
                            <Check size={16} />
                        </div>
                        <p className="text-sm font-bold text-[#1E3A8A]">
                            Last checked in: <span className="text-[#2563EB]">Juan dela Cruz - 9:11 AM</span>
                        </p>
                    </div>
                </div>

                {/* Right: Manual Search & Table */}
                <div className="bg-white rounded-[32px] border border-border shadow-sm flex flex-col overflow-hidden">
                    <div className="p-8 pb-4">
                         <h3 className="text-lg font-bold text-primary mb-6">Manual Search</h3>
                         <div className="flex gap-3 mb-6">
                            <div className="relative flex-grow">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                <input 
                                    type="text" 
                                    placeholder="Search here" 
                                    className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-accent/20 outline-none"
                                />
                            </div>
                            <button className="px-6 py-3 bg-[#F8FAFC] rounded-xl text-sm font-bold text-primary flex items-center gap-2 border border-transparent hover:border-border transition-all">
                                Status
                                <ChevronDown size={16} />
                            </button>
                         </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Attendee</th>
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Ticket</th>
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Status</th>
                                    <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Download</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {attendees.map((attendee, index) => (
                                    <tr key={index} className="hover:bg-background-main/50 transition-colors group">
                                        <td className="px-8 py-4 text-sm font-bold text-primary opacity-70">
                                            {attendee.name}
                                        </td>
                                        <td className="px-8 py-4 text-center text-[10px] font-bold text-text-muted uppercase tracking-wider">
                                            {attendee.ticket}
                                        </td>
                                        <td className="px-8 py-4 text-center">
                                            <div className="flex justify-center">
                                                <Check size={18} className="text-primary" />
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 text-right">
                                            <button className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-lg hover:opacity-90 transition-all shadow-sm">
                                                Check-In
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
    );
}
