"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
    ChevronRight, 
    Calendar, 
    Users, 
    Banknote, 
    Clock, 
    Search, 
    ChevronDown,
    Check
} from 'lucide-react';
import StatCard from '@/components/shared/StatCard';

const globalStats = [
    { title: 'Registered', value: '42', icon: Users, color: 'blue' },
    { title: 'Paid', value: '186', icon: Users, color: 'green' },
    { title: 'Waitlisted', value: '20', icon: Users, color: 'orange' },
    { title: 'Revenue', value: '₱ 52.5K', icon: Banknote, color: 'green' },
];

const paymentStats = [
    { title: 'Total Collected', value: '₱ 50,400', icon: Banknote, color: 'green' },
    { title: 'Pending', value: '₱ 3,600', icon: Banknote, color: 'blue' },
    { title: 'Refunded', value: '₱ 2,400', icon: Banknote, color: 'gray' },
    { title: 'Paid registrants', value: '38', icon: Users, color: 'orange' },
];

const attendeePayments = [
    { name: 'Juan dela Cruz', type: 'Member', amount: '₱ 1,200', method: 'GCash', date: 'April 1, 2026' },
    { name: 'Juan dela Cruz', type: 'Member', amount: '₱ 1,200', method: 'GCash', date: 'April 1, 2026' },
    { name: 'Juan dela Cruz', type: 'Member', amount: '₱ 1,200', method: 'GCash', date: 'April 1, 2026' },
    { name: 'Juan dela Cruz', type: 'Member', amount: '₱ 1,200', method: 'GCash', date: 'April 1, 2026' },
    { name: 'Juan dela Cruz', type: 'Member', amount: '₱ 1,200', method: 'GCash', date: 'April 1, 2026' },
    { name: 'Juan dela Cruz', type: 'Member', amount: '₱ 1,200', method: 'GCash', date: 'April 1, 2026' },
];

const registrations = [
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', type: 'Member', date: 'April 1, 2026', paid: true },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', type: 'Member', date: 'April 1, 2026', paid: true },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', type: 'Member', date: 'April 1, 2026', paid: true },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', type: 'Member', date: 'April 1, 2026', paid: true },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', type: 'Member', date: 'April 1, 2026', paid: true },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', type: 'Member', date: 'April 1, 2026', paid: true },
];

const waitlist = [
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', position: '#1' },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', position: '#1' },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', position: '#1' },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', position: '#1' },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', position: '#1' },
    { name: 'Juan dela Cruz', email: 'juan@gmail.com', position: '#1' },
];

const speakers = [
    {
        name: 'Arch. Juan Dela Cruz, REB',
        title: 'Senior Consultant at Homes.ph',
        bio: 'Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines.',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
        name: 'Arch. Juan Dela Cruz, REB',
        title: 'Senior Consultant at Homes.ph',
        bio: 'Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines.',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
        name: 'Arch. Juan Dela Cruz, REB',
        title: 'Senior Consultant at Homes.ph',
        bio: 'Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines.',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    },
];

export default function ManageEventDetails() {
    const [activeTab, setActiveTab] = useState('Registrations');

    return (
        <div className="flex flex-col gap-8 pb-24 max-w-[1400px]">
             {/* Breadcrumb */}
             <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#94A3B8]">
                <Link href="/" className="hover:text-[#0A192F] transition-colors">Dashboard</Link>
                <ChevronRight size={12} strokeWidth={3} />
                <span className="text-[#387CFF]">Mastering the Code</span>
            </div>

            {/* Banner */}
            <div className="w-full h-80 rounded-[48px] overflow-hidden border-4 border-white shadow-2xl relative">
                <img 
                    src="https://images.unsplash.com/photo-1540575861501-7ad058138a06?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover"
                    alt="Mastering the Code Banner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002143]/60 to-transparent flex flex-col justify-end p-12">
                     <span className="bg-[#FFB020] text-[#002143] px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-4">CPD ACCREDITED</span>
                     <h2 className="text-4xl font-black text-white tracking-tight uppercase">Mastering the Code</h2>
                </div>
            </div>

            {/* Info Header */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mt-4 px-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#0A192F] tracking-tight uppercase">Real Estate Education & Coaching</h1>
                    <div className="flex items-center gap-4 text-sm font-bold text-[#94A3B8]">
                        <div className="flex items-center gap-2 uppercase tracking-widest text-[10px]">
                            <Calendar size={14} className="text-[#387CFF]" />
                            Mon, Apr 14
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                        <div className="flex items-center gap-2 uppercase tracking-widest text-[10px]">
                            <Clock size={14} className="text-[#387CFF]" />
                            9:00 AM - 5:00 PM
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/events/1/edit" className="px-8 py-3.5 border-2 border-[#E2E8F0] text-[#0A192F] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F8FAFC] transition-all">
                        Edit event
                    </Link>
                    <button className="px-8 py-3.5 bg-[#387CFF] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#2B5CFE] transition-all">
                        Check-in
                    </button>
                    <button className="px-8 py-3.5 bg-[#002143] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
                        Details
                    </button>
                </div>
            </div>

            {/* Top Global Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {globalStats.map((stat, idx) => (
                    <StatCard 
                        key={idx}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        iconColor={stat.color as any}
                    />
                ))}
            </div>

            {/* Tabs System */}
            <div className="mt-8">
                <div className="flex items-center gap-12 border-b border-[#F1F5F9] px-4">
                    {['Registrations', 'Payments', 'Speakers'].map((tab) => (
                        <button 
                            key={tab} 
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${
                                activeTab === tab ? 'text-[#387CFF]' : 'text-[#94A3B8] hover:text-[#0A192F]'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#387CFF] rounded-t-full" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="py-10 flex flex-col gap-8 px-4">
                    {activeTab === 'Payments' && (
                        <div className="flex flex-col gap-8">
                            {/* Tab Specific Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {paymentStats.map((stat, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-[32px] border border-[#F1F5F9] shadow-sm flex items-center gap-6 group hover:translate-y-[-4px] transition-all duration-300">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                            stat.color === 'green' ? 'bg-green-50 text-green-600' :
                                            stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                            stat.color === 'orange' ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 text-gray-500'
                                        }`}>
                                            <stat.icon size={22} strokeWidth={2.5}/>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">{stat.title}</span>
                                            <span className="text-xl font-black text-[#0A192F] tracking-tight">{stat.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Search & Filter */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                                    <input 
                                        type="text" 
                                        placeholder="Search here" 
                                        className="w-full pl-14 pr-6 py-4 bg-white border border-[#F1F5F9] rounded-[24px] text-[13px] font-bold outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all shadow-sm"
                                    />
                                </div>
                                <button className="px-10 py-4 bg-white border border-[#F1F5F9] rounded-[24px] text-xs font-black text-[#0A192F] flex items-center gap-3 shadow-sm hover:bg-[#F8FAFC] transition-all">
                                    Method
                                    <ChevronDown size={16} />
                                </button>
                            </div>

                            {/* Data Table */}
                            <div className="bg-white rounded-[40px] border border-[#F1F5F9] overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#002143] text-white">
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Attendee</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Ticket Type</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Amount</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Method</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F1F5F9]">
                                        {attendeePayments.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                                                <td className="px-10 py-5 text-[14px] font-bold text-[#94A3B8] transition-colors">
                                                    {row.name}
                                                </td>
                                                <td className="px-10 py-5">
                                                    <span className="bg-[#EFF6FF] text-[#2563EB] px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                        {row.type}
                                                    </span>
                                                </td>
                                                <td className="px-10 py-5 text-[13px] font-black text-[#0A192F]">
                                                    {row.amount}
                                                </td>
                                                <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">
                                                    {row.method}
                                                </td>
                                                <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">
                                                    {row.date}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Registrations' && (
                        <div className="flex flex-col gap-10">
                            {/* Registrations Table */}
                            <div className="bg-white rounded-[40px] border border-[#F1F5F9] overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#002143] text-white">
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Name</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Email</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Ticket Type</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10]">Registered On</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10] text-center">Paid</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest text-center">Check In</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F1F5F9]">
                                        {registrations.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors group">
                                                <td className="px-10 py-5 text-[14px] font-bold text-[#0A192F] opacity-70 group-hover:opacity-100 transition-all">{row.name}</td>
                                                <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">{row.email}</td>
                                                <td className="px-10 py-5">
                                                    <span className="bg-[#EFF6FF] text-[#2563EB] px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                        {row.type}
                                                    </span>
                                                </td>
                                                <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">{row.date}</td>
                                                <td className="px-10 py-5 text-center">
                                                    <div className="flex justify-center">
                                                        {row.paid && <Check size={18} className="text-[#0A192F]" strokeWidth={3} />}
                                                    </div>
                                                </td>
                                                <td className="px-10 py-5 text-center">
                                                    <button className="bg-[#1D4ED8] text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1E40AF] transition-all shadow-md">
                                                        Check-in
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Waitlist Table */}
                            <div className="bg-white rounded-[40px] border border-[#F1F5F9] overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#002143] text-white">
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10] w-[30%]">Name</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10] w-[35%]">Joined waitlist</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest border-r border-[#ffffff10] text-center w-[15%]">Position</th>
                                            <th className="px-10 py-6 text-[11px] font-black uppercase tracking-widest text-center w-[20%]">Offer slot</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F1F5F9]">
                                        {waitlist.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors group">
                                                <td className="px-10 py-5 text-[14px] font-bold text-[#0A192F] opacity-70 group-hover:opacity-100 transition-all">{row.name}</td>
                                                <td className="px-10 py-5 text-[13px] font-bold text-[#94A3B8]">{row.email}</td>
                                                <td className="px-10 py-5 text-[13px] font-black text-center text-[#94A3B8]">{row.position}</td>
                                                <td className="px-10 py-5 text-center">
                                                    <button className="bg-[#1D4ED8] text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1E40AF] transition-all shadow-md">
                                                        Check-in
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Speakers' && (
                        <div className="flex flex-col gap-4">
                            <p className="text-xs font-black text-[#94A3B8] uppercase tracking-widest">
                                {speakers.length} speakers assigned to this event
                            </p>
                            {speakers.map((speaker, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm p-8 flex items-start gap-8 hover:translate-y-[-2px] hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="w-20 h-20 rounded-[20px] overflow-hidden shrink-0 shadow-inner border-2 border-[#F1F5F9]">
                                        <img
                                            src={speaker.photo}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-grow">
                                        <h3 className="text-lg font-black text-[#0A192F] tracking-tight">{speaker.name}</h3>
                                        <p className="text-[11px] font-black text-[#387CFF] uppercase tracking-widest">{speaker.title}</p>
                                        <p className="text-sm font-semibold text-[#64748B] leading-relaxed mt-1">{speaker.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination Area */}
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-xs font-bold text-[#94A3B8]">Showing 5 of 42 Attendee</span>
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, '...', '>'].map((page, idx) => (
                                <button 
                                    key={idx} 
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-all ${
                                        page === 1 ? 'bg-[#002143] text-white shadow-lg' :
                                        page === '>' ? 'text-[#0A192F] hover:bg-[#F1F5F9]' : 'text-[#94A3B8] hover:text-[#0A192F]'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
