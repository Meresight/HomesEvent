"use client";
import React from 'react';
import { 
    Download, 
    Calendar,
    Award,
    FileText
} from 'lucide-react';

const creditHistory = [
    { id: 1, event: 'Legal Updates in RE 2026', date: 'Mar 14', category: 'Technical', hours: '3 hrs' },
    { id: 2, event: 'Legal Updates in RE 2026', date: 'Mar 14', category: 'Technical', hours: '3 hrs' },
    { id: 3, event: 'Legal Updates in RE 2026', date: 'Mar 14', category: 'Technical', hours: '3 hrs' },
    { id: 4, event: 'Legal Updates in RE 2026', date: 'Mar 14', category: 'Technical', hours: '3 hrs' },
    { id: 5, event: 'Legal Updates in RE 2026', date: 'Mar 14', category: 'Technical', hours: '3 hrs' },
    { id: 6, event: 'Legal Updates in RE 2026', date: 'Mar 14', category: 'Technical', hours: '3 hrs' },
];

const certificates = [1, 2, 3, 4];

export default function CPDRecords() {
    return (
        <div className="flex flex-col gap-10 pb-24 max-w-[1400px]">
            {/* Header Area */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-[#002143] tracking-tight mb-2 uppercase">My CPD Records</h1>
                </div>
            </div>

            {/* Top Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sticky top-0 z-10">
                {/* Current cycle progress */}
                <div className="md:col-span-4 bg-white p-10 rounded-[32px] border border-[#F1F5F9] shadow-sm flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-[#94A3B8]">Current cycle progress</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black text-[#002143]">14</span>
                            <span className="text-lg font-bold text-[#94A3B8]">/ 30 hrs</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-3 bg-[#F1F5F9] rounded-full overflow-hidden">
                            <div className="w-[46%] h-full bg-[#FF8A00] rounded-full" />
                        </div>
                        <p className="text-[11px] font-bold text-[#94A3B8]">Cycle ends Dec 31, 2026 • 16 hrs remaining</p>
                    </div>
                </div>

                {/* Hours by category */}
                <div className="md:col-span-5 bg-white p-10 rounded-[32px] border border-[#F1F5F9] shadow-sm flex flex-col gap-6">
                    <span className="text-xs font-bold text-[#94A3B8]">Hours by category</span>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-[11px] font-bold text-[#002143]">
                                <span>Technical</span>
                            </div>
                            <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                                <div className="w-[75%] h-full bg-[#1730A8] rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-[11px] font-bold text-[#002143]">
                                <span>Ethics</span>
                            </div>
                            <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                                <div className="w-[35%] h-full bg-[#14B8A6] rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-[11px] font-bold text-[#002143]">
                                <span>Legal</span>
                            </div>
                            <div className="w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                                <div className="w-[50%] h-full bg-[#F59E0B] rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificate Earned */}
                <div className="md:col-span-3 bg-white p-10 rounded-[32px] border border-[#F1F5F9] shadow-sm flex flex-col items-center justify-center text-center gap-2 group hover:border-[#002143] transition-all duration-500">
                    <span className="text-7xl font-black text-[#002143] tracking-tighter group-hover:scale-110 transition-transform">6</span>
                    <span className="text-sm font-black text-[#1730A8] uppercase tracking-widest">Certificate Earned</span>
                </div>
            </div>

            {/* Credit History Section */}
            <div className="flex flex-col gap-6">
                <h3 className="text-xl font-black text-[#1730A8] tracking-tight uppercase">Credit History</h3>
                <div className="bg-white rounded-[32px] border border-[#F1F5F9] overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#1730A8] text-white">
                                <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Event</th>
                                <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Date</th>
                                <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Category</th>
                                <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">CPD Hours</th>
                                <th className="px-10 py-5 text-[11px] font-black uppercase tracking-widest text-center">Download</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F1F5F9]">
                            {creditHistory.map((row, idx) => (
                                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors group">
                                    <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8] group-hover:text-[#002143] transition-colors">{row.event}</td>
                                    <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">{row.date}</td>
                                    <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">{row.category}</td>
                                    <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">{row.hours}</td>
                                    <td className="px-10 py-5 text-center">
                                        <button className="bg-[#1730A8] text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#112480] transition-all shadow-md">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* My Certificates Section */}
            <div className="flex flex-col gap-8">
                <h3 className="text-xl font-black text-[#002143] tracking-tight uppercase">My Certificates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certificates.map((_, idx) => (
                        <div key={idx} className="bg-white rounded-[32px] border border-[#F1F5F9] overflow-hidden shadow-sm flex flex-col group hover:-translate-y-2 transition-all duration-500">
                            <div className="bg-[#EAEEF3] p-10 flex flex-col items-center justify-center gap-4 aspect-[4/3]">
                                <div className="flex items-center gap-1">
                                    <span className="text-2xl font-black text-[#002143]">l.lomes</span>
                                    <span className="text-lg font-bold text-[#1730A8]">.ph</span>
                                </div>
                                <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] text-center">Certificate of attendance</span>
                            </div>
                            <div className="p-4 bg-white border-t border-[#F1F5F9]">
                                <button className="w-full bg-[#1730A8] text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#112480] transition-all shadow-lg flex items-center justify-center gap-2">
                                    <Download size={14} />
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
