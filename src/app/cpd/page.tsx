"use client";
import React from 'react';
import { 
    Award, 
    FileText, 
    Download, 
    Calendar,
    Search,
    Filter,
    ArrowUpRight,
    ChevronRight,
    CheckCircle2,
    Clock
} from 'lucide-react';
import StatCard from '@/components/shared/StatCard';

const creditHistory = [
    { id: 1, event: 'Ethics in Real Estate', date: 'Oct 15, 2024', points: 15, status: 'Approved' },
    { id: 2, event: 'Advanced Property Laws', date: 'Sep 10, 2024', points: 10, status: 'Approved' },
    { id: 3, event: 'Green Building 101', date: 'Aug 05, 2024', points: 5, status: 'Pending' },
];

const certificates = [
    { id: 1, name: 'Ethics Seminar 2024', date: 'Oct 20, 2024', size: '1.2 MB' },
    { id: 2, name: 'Law Mastery Course', date: 'Sep 15, 2024', size: '0.8 MB' },
    { id: 3, name: 'Sales Strategy Workshop', date: 'Aug 10, 2024', size: '1.5 MB' },
];

export default function CPDRecords() {
    return (
        <div className="flex flex-col gap-12 pb-24">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-[#0A192F] tracking-tight mb-2">My CPD Records</h1>
                    <p className="text-sm font-bold text-[#94A3B8]">Professional Development Tracking & Credentials</p>
                </div>
                <button className="px-8 py-4 bg-[#F8FAFC] border border-[#F1F5F9] text-[#0A192F] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#0A192F] hover:text-white transition-all shadow-sm">
                    Generate Report
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard 
                    title="Total CPD Points" 
                    value="45" 
                    icon={Award} 
                    iconColor="orange" 
                />
                <StatCard 
                    title="Required Points" 
                    value="60" 
                    icon={FileText} 
                    iconColor="blue" 
                />
                <StatCard 
                    title="Next Renewal" 
                    value="Dec 2025" 
                    icon={Calendar} 
                    iconColor="green" 
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                {/* Credit History Table */}
                <div className="lg:col-span-2 bg-white rounded-[48px] border border-[#F1F5F9] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)]">
                    <div className="p-10 border-b border-[#F1F5F9] flex justify-between items-center">
                        <h3 className="text-xl font-black text-[#0A192F] tracking-tight">Credit History</h3>
                        <div className="flex gap-3">
                             <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-[#2B5CFE]" size={16} />
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="pl-12 pr-4 py-3 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl text-xs font-bold w-48 focus:w-64 focus:ring-4 focus:ring-[#2B5CFE]/5 outline-none transition-all shadow-sm"
                                />
                             </div>
                             <button className="p-3 bg-[#F8FAFC] border border-[#F1F5F9] rounded-xl text-[#0A192F] hover:bg-[#E2E8F0] transition-colors">
                                <Filter size={18} />
                             </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#F8FAFC]/50">
                                    <th className="px-10 py-5 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9]">Event Details</th>
                                    <th className="px-10 py-5 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9]">Completion Date</th>
                                    <th className="px-10 py-5 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9] text-center">Credits</th>
                                    <th className="px-10 py-5 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] border-b border-[#F1F5F9]">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F1F5F9]">
                                {creditHistory.map((item) => (
                                    <tr key={item.id} className="hover:bg-[#F8FAFC] transition-all duration-300 group">
                                        <td className="px-10 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2B5CFE] group-hover:bg-[#2B5CFE] group-hover:text-white transition-all duration-500">
                                                    <Award size={18} strokeWidth={2.5} />
                                                </div>
                                                <span className="font-bold text-[15px] text-[#0A192F]">{item.event}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-sm font-bold text-[#94A3B8]">{item.date}</td>
                                        <td className="px-10 py-6 text-center">
                                            <span className="inline-block px-4 py-1.5 bg-white border border-[#F1F5F9] shadow-sm rounded-full text-xs font-black text-[#0A192F] group-hover:border-[#FFB020] transition-colors">
                                                +{item.points} pts
                                            </span>
                                        </td>
                                        <td className="px-10 py-6">
                                            <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center justify-center w-fit gap-2 shadow-sm ${
                                                item.status === 'Approved' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-orange-50 text-orange-500 border border-orange-100'
                                            }`}>
                                                {item.status === 'Approved' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-[#F8FAFC]/30">
                        <button className="w-full py-5 bg-white border border-[#F1F5F9] rounded-2xl text-[11px] font-black text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all duration-500 shadow-sm flex items-center justify-center gap-3 group/btn uppercase tracking-widest">
                            Access Full Credit Transcript
                            <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Certificate Downloads */}
                <div className="bg-white rounded-[48px] border border-[#F1F5F9] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] flex flex-col transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)]">
                    <div className="p-10 border-b border-[#F1F5F9]">
                        <h3 className="text-xl font-black text-[#0A192F] tracking-tight">Certifications</h3>
                    </div>
                    <div className="p-8 flex flex-col gap-6">
                        {certificates.map((cert) => (
                            <div key={cert.id} className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#F1F5F9] hover:border-[#2B5CFE] group transition-all duration-500 flex items-center gap-5 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#94A3B8] shadow-sm group-hover:bg-[#2B5CFE] group-hover:text-white transition-all duration-500">
                                    <FileText size={24} strokeWidth={2.5} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-[15px] font-black text-[#0A192F] mb-1 leading-tight">{cert.name}</h4>
                                    <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest leading-none">{cert.date} • {cert.size}</p>
                                </div>
                                <button className="p-3 bg-white border border-[#F1F5F9] rounded-xl text-[#0A192F] hover:bg-[#0A192F] hover:text-white group-hover:shadow-lg transition-all active:scale-90">
                                    <Download size={18} strokeWidth={3} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="p-10 mt-auto bg-[#F8FAFC]/30 border-t border-[#F1F5F9]">
                        <button className="w-full py-5 bg-[#0A192F] text-white rounded-[20px] font-black text-xs uppercase tracking-[0.2em] shadow-[0_15px_30px_-5px_rgba(10,25,47,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(10,25,47,0.4)] transition-all hover:scale-[1.02] active:scale-95">
                            Download Certificate Bundle (ZIP)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
