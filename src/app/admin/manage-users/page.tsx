"use client";
import React from 'react';
import { 
    Search, 
    ChevronDown, 
    Plus,
    ChevronLeft,
    ChevronRight,
    Edit2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const users = [
    { name: 'Juan dela Cruz', email: 'juan@email.com', license: 'PRC-12345', cpd: '14/30' },
    { name: 'Juan dela Cruz', email: 'juan@email.com', license: 'PRC-12345', cpd: '14/30' },
    { name: 'Juan dela Cruz', email: 'juan@email.com', license: 'PRC-12345', cpd: '14/30' },
    { name: 'Juan dela Cruz', email: 'juan@email.com', license: 'PRC-12345', cpd: '14/30' },
    { name: 'Juan dela Cruz', email: 'juan@email.com', license: 'PRC-12345', cpd: '14/30' },
    { name: 'Juan dela Cruz', email: 'juan@email.com', license: 'PRC-12345', cpd: '14/30' },
];

export default function ManageUsers() {
    return (
        <div className="space-y-8 pb-12">
            <div className="flex justify-end">
                <button className="bg-[#1730A8] hover:bg-[#112480] text-white px-10 py-5 rounded-[24px] flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] shadow-premium-md transition-all transform active:scale-95">
                    <Plus className="w-5 h-5" />
                    <span>Add Member</span>
                </button>
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

            {/* User Table */}
            <div className="bg-white rounded-[48px] border border-gray-100 shadow-soft overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#1730A8] text-white">
                            <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Name</th>
                            <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Email</th>
                            <th className="px-10 py-8 text-[11px] font-black tracking-[0.15em] uppercase">PRC License</th>
                            <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">CPD hrs</th>
                            <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {users.map((user, idx) => (
                            <tr key={idx} className="group hover:bg-gray-50/50 transition-all duration-300">
                                <td className="px-10 py-8">
                                    <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-tight">{user.name}</span>
                                </td>
                                <td className="px-10 py-8">
                                    <span className="text-sm font-bold text-[#1123AD]/60 group-hover:text-[#1123AD] transition-colors underline decoration-2 decoration-[#1123AD]/10 group-hover:decoration-[#1123AD]/30 underline-offset-4">{user.email}</span>
                                </td>
                                <td className="px-10 py-8">
                                    <span className="text-sm font-bold text-gray-400 font-mono tracking-wider">{user.license}</span>
                                </td>
                                <td className="px-10 py-8">
                                    <span className="text-sm font-bold text-gray-400">{user.cpd}</span>
                                </td>
                                <td className="px-10 py-8 text-right">
                                    <button className="bg-[#1730A8] hover:bg-[#112480] text-white px-8 py-3 rounded-[12px] text-[10px] font-black uppercase tracking-[0.15em] transition-all shadow-md transform active:scale-95">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4">
                <p className="text-sm font-bold text-gray-300 tracking-wide italic">Showing 5 of 42 Events</p>
                <div className="flex items-center gap-3">
                    <button className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-[#1123AD] text-white font-black text-sm shadow-premium-md hover:scale-105 transition-transform">1</button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-white border border-gray-100 text-gray-400 font-black text-sm hover:bg-gray-50 transition-colors">2</button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-white border border-gray-100 text-gray-400 font-black text-sm hover:bg-gray-50 transition-colors">3</button>
                    <span className="px-2 text-gray-300 font-black">...</span>
                    <button className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-white border border-gray-100 text-gray-500 font-black text-sm hover:bg-[#1123AD] hover:text-white transition-all">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
