"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { 
    Calendar, Users, UserPlus, Banknote, 
    Search, ChevronDown, Check, MoreHorizontal, ChevronRight
} from 'lucide-react';

const registrations = [
    { id: 1, name: "Juan dela Cruz", email: "juan@gmail.com", type: "Member", date: "April 1, 2026", paid: true },
    { id: 2, name: "Juan dela Cruz", email: "juan@gmail.com", type: "Member", date: "April 1, 2026", paid: true },
    { id: 3, name: "Juan dela Cruz", email: "juan@gmail.com", type: "Member", date: "April 1, 2026", paid: true },
    { id: 4, name: "Juan dela Cruz", email: "juan@gmail.com", type: "Member", date: "April 1, 2026", paid: true },
    { id: 5, name: "Juan dela Cruz", email: "juan@gmail.com", type: "Member", date: "April 1, 2026", paid: true },
    { id: 6, name: "Juan dela Cruz", email: "juan@gmail.com", type: "Member", date: "April 1, 2026", paid: true },
];

const waitlist = [
    { id: 1, name: "Juan dela Cruz", email: "juan@gmail.com", position: "#1" },
    { id: 2, name: "Juan dela Cruz", email: "juan@gmail.com", position: "#1" },
    { id: 3, name: "Juan dela Cruz", email: "juan@gmail.com", position: "#1" },
    { id: 4, name: "Juan dela Cruz", email: "juan@gmail.com", position: "#1" },
    { id: 5, name: "Juan dela Cruz", email: "juan@gmail.com", position: "#1" },
    { id: 6, name: "Juan dela Cruz", email: "juan@gmail.com", position: "#1" },
];

const payments = [
    { id: 1, attendee: "Juan dela Cruz", type: "Member", amount: "₱ 1,200", method: "GCash", date: "April 1, 2026" },
    { id: 2, attendee: "Juan dela Cruz", type: "Member", amount: "₱ 1,200", method: "GCash", date: "April 1, 2026" },
    { id: 3, attendee: "Juan dela Cruz", type: "Member", amount: "₱ 1,200", method: "GCash", date: "April 1, 2026" },
    { id: 4, attendee: "Juan dela Cruz", type: "Member", amount: "₱ 1,200", method: "GCash", date: "April 1, 2026" },
    { id: 5, attendee: "Juan dela Cruz", type: "Member", amount: "₱ 1,200", method: "GCash", date: "April 1, 2026" },
];

const speakers = [
    {
        id: 1,
        name: "Arch. Juan Dela Cruz, REB",
        title: "Senior Consultant at Homes.ph",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        desc: "Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines."
    },
    {
        id: 2,
        name: "Arch. Juan Dela Cruz, REB",
        title: "Senior Consultant at Homes.ph",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        desc: "Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines."
    },
    {
        id: 3,
        name: "Arch. Juan Dela Cruz, REB",
        title: "Senior Consultant at Homes.ph",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        desc: "Over 20 years of experience in real estate law, ethics compliance, and professional development for brokers and salespersons across the Philippines."
    }
];

export default function SingleEventDashboard({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [activeTab, setActiveTab] = useState("Registrations");

    return (
        <div className="max-w-[1100px] w-full pb-20 pt-4 flex flex-col gap-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[13px] font-bold">
                <Link href="/manage-events" className="text-[#94A3B8] hover:text-[#002143] transition-colors">Dashboard</Link>
                <span className="text-[#94A3B8] font-medium">&gt;</span>
                <span className="text-[#1730A8]">Mastering the Code</span>
            </div>

            {/* Hero Image Wrapper */}
            <div className="w-full aspect-[21/6] bg-[#002143] rounded-[32px] overflow-hidden flex items-center justify-center relative shadow-sm border border-black/5">
                <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80" 
                    alt="Event Banner" 
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002143]/90 to-transparent flex flex-col justify-end p-10 hidden">
                    <h2 className="text-4xl font-black text-white uppercase tracking-tight">Mastering The Code</h2>
                </div>
            </div>

            {/* Title & Actions */}
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black text-[#002143] tracking-tight">Real Estate Education & Coaching</h1>
                    <div className="flex items-center gap-3 text-[13px] font-black text-[#5C6B89]">
                        <span>Mon, Apr 14</span>
                        <span>9:00 AM - 5:00 PM</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href={`/manage-events/${id}/edit`} className="bg-white text-[#1730A8] border-2 border-[#1730A8]/20 px-6 py-3 rounded-2xl font-black text-xs hover:border-[#1730A8] transition-all">
                        Edit event
                    </Link>
                    <Link href="/check-in" className="bg-[#1730A8] text-white px-6 py-3 border-2 border-[#1730A8] rounded-2xl font-black text-xs hover:bg-[#112480] transition-all shadow-md">
                        Check-in
                    </Link>
                    <button className="bg-[#002143] text-white px-6 py-3 border-2 border-[#002143] rounded-2xl font-black text-xs hover:bg-black transition-all shadow-md">
                        Details
                    </button>
                </div>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-[24px] p-6 flex flex-row items-center gap-5 shadow-sm border border-[#F1F5F9]">
                    <div className="w-[60px] h-[60px] rounded-2xl bg-[#1730A8] text-white flex items-center justify-center shadow-md">
                        <Calendar size={24} strokeWidth={2.5}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black tracking-wide text-[#002143]">Registered</span>
                        <span className="text-3xl font-black text-[#002143] tracking-tight -mt-1">42</span>
                    </div>
                </div>

                <div className="bg-white rounded-[24px] p-6 flex flex-row items-center gap-5 shadow-sm border border-[#F1F5F9]">
                    <div className="w-[60px] h-[60px] rounded-2xl bg-[#10B981] text-white flex items-center justify-center shadow-md">
                        <Users size={24} strokeWidth={2.5}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black tracking-wide text-[#002143]">Paid</span>
                        <span className="text-3xl font-black text-[#002143] tracking-tight -mt-1">186</span>
                    </div>
                </div>

                <div className="bg-white rounded-[24px] p-6 flex flex-row items-center gap-5 shadow-sm border border-[#F1F5F9]">
                    <div className="w-[60px] h-[60px] rounded-2xl bg-[#F59E0B] text-white flex items-center justify-center shadow-md">
                        <UserPlus size={24} strokeWidth={2.5}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black tracking-wide text-[#002143]">Waitlisted</span>
                        <span className="text-3xl font-black text-[#002143] tracking-tight -mt-1">20</span>
                    </div>
                </div>

                <div className="bg-white rounded-[24px] p-6 flex flex-row items-center gap-5 shadow-sm border border-[#F1F5F9]">
                    <div className="w-[60px] h-[60px] rounded-2xl bg-[#059669] text-white flex items-center justify-center shadow-md">
                        <Banknote size={24} strokeWidth={2.5}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black tracking-wide text-[#002143]">Revenue</span>
                        <span className="text-3xl font-black text-[#002143] tracking-tight -mt-1">₱ 52.5K</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-8 border-b-2 border-transparent relative mt-4">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E2E8F0]" />
                {["Registrations", "Payments", "Speakers"].map(tab => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`text-[13px] pb-3 px-2 z-10 transition-colors relative ${activeTab === tab ? "font-black text-[#002143]" : "font-bold text-[#94A3B8] hover:text-[#002143]"}`}
                    >
                        {tab}
                        {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#002143] rounded-t-full" />}
                    </button>
                ))}
            </div>

            {/* Content per Tab */}
            <div className="flex flex-col gap-8">

                {activeTab === "Registrations" && (
                    <div className="flex flex-col gap-10">
                        {/* Main Registration Table */}
                        <div className="bg-white rounded-[24px] border border-[#F1F5F9] shadow-sm overflow-hidden flex flex-col pt-1">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#1730A8] text-white border-b-4 border-[#1730A8]">
                                            <th className="pl-6 pr-4 py-4 text-[13px] font-bold">Name</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Email</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Ticket Type</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Registered On</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Paid</th>
                                            <th className="px-6 py-4 text-[13px] font-bold border-l border-white/20">Check In</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F1F5F9]">
                                        {registrations.map(row => (
                                            <tr key={row.id} className="hover:bg-[#F8FAFC]">
                                                <td className="pl-6 pr-4 py-4 text-[13px] font-medium text-[#64748B]">{row.name}</td>
                                                <td className="px-4 py-4 text-[13px] font-medium text-[#64748B]">{row.email}</td>
                                                <td className="px-4 py-4 text-[13px]">
                                                    <span className="bg-[#E2E8F0]/60 text-[#1730A8] font-bold px-4 py-1.5 rounded-full">{row.type}</span>
                                                </td>
                                                <td className="px-4 py-4 text-[13px] font-medium text-[#64748B]">{row.date}</td>
                                                <td className="px-4 py-4">
                                                    <div className="w-5 h-5 rounded border-2 border-transparent bg-white shadow-sm flex items-center justify-center ml-2 border-[#1730A8]">
                                                        {row.paid && <Check size={14} className="text-[#002143]" strokeWidth={4} />}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button className="bg-[#1730A8] text-white font-bold text-[11px] px-6 py-2 rounded-lg hover:bg-[#112480] shadow-sm">
                                                        Check-in
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Waitlist Table */}
                        <div className="bg-white rounded-[24px] border border-[#F1F5F9] shadow-sm overflow-hidden flex flex-col">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#1730A8] text-white">
                                            <th className="pl-6 pr-4 py-4 text-[13px] font-bold">Name</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20 w-1/3">Joined waitlist</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Position</th>
                                            <th className="px-6 py-4 text-[13px] font-bold border-l border-white/20 w-[180px]">Offer slot</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F1F5F9]">
                                        {waitlist.map(row => (
                                            <tr key={row.id} className="hover:bg-[#F8FAFC]">
                                                <td className="pl-6 pr-4 py-4 text-[12px] font-medium text-[#64748B]">{row.name}</td>
                                                <td className="px-4 py-4 text-[12px] font-medium text-[#64748B]">{row.email}</td>
                                                <td className="px-4 py-4 text-[12px] font-medium text-[#64748B]">{row.position}</td>
                                                <td className="px-6 py-4">
                                                    <button className="bg-[#1730A8] text-white font-bold text-[11px] px-6 py-2 rounded-lg hover:bg-[#112480] shadow-sm w-full text-center">
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
                )}

                {activeTab === "Payments" && (
                    <div className="flex flex-col gap-8">
                        {/* Secondary Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F1F5F9] flex gap-4">
                                <div className="w-[45px] h-[45px] rounded-[14px] bg-[#10B981] text-white flex items-center justify-center">
                                    <Calendar size={20} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[10px] font-black tracking-wide text-[#002143]">Total Collected</span>
                                    <span className="text-xl font-black text-[#002143]">₱ 50,400</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F1F5F9] flex gap-4">
                                <div className="w-[45px] h-[45px] rounded-[14px] bg-[#3B82F6] text-white flex items-center justify-center">
                                    <Users size={20} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[10px] font-black tracking-wide text-[#002143]">Pending</span>
                                    <span className="text-xl font-black text-[#002143]">₱ 3,600</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F1F5F9] flex gap-4">
                                <div className="w-[45px] h-[45px] rounded-[14px] bg-[#64748B] text-white flex items-center justify-center">
                                    <Users size={20} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[10px] font-black tracking-wide text-[#002143]">Refunded</span>
                                    <span className="text-xl font-black text-[#002143]">₱ 2,400</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#F1F5F9] flex gap-4">
                                <div className="w-[45px] h-[45px] rounded-[14px] bg-[#F59E0B] text-white flex items-center justify-center">
                                    <Banknote size={20} />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[10px] font-black tracking-wide text-[#002143]">Paid registrants</span>
                                    <span className="text-xl font-black text-[#002143]">38</span>
                                </div>
                            </div>
                        </div>

                        {/* Search and Filters */}
                        <div className="flex flex-row justify-between items-center gap-4 bg-white p-2 rounded-[20px] shadow-sm border border-[#F1F5F9]">
                            <div className="relative flex-grow ml-2">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={16} />
                                <input 
                                    type="text" 
                                    placeholder="Search here" 
                                    className="w-full pl-10 pr-6 py-3 bg-white text-[13px] font-medium outline-none rounded-xl"
                                />
                            </div>
                            <div className="shrink-0 flex items-center pr-2">
                                <button className="flex items-center justify-between gap-8 bg-white border border-[#F1F5F9] px-6 py-3 rounded-xl text-[13px] font-bold text-[#002143]">
                                    Method
                                    <ChevronDown size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Payments Table */}
                        <div className="bg-white rounded-[24px] border border-[#F1F5F9] shadow-sm overflow-hidden flex flex-col">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#1730A8] text-white">
                                            <th className="pl-6 pr-4 py-4 text-[13px] font-bold">Attendee</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Ticket Type</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Amount</th>
                                            <th className="px-4 py-4 text-[13px] font-bold border-l border-white/20">Method</th>
                                            <th className="px-6 py-4 text-[13px] font-bold border-l border-white/20">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#F1F5F9]">
                                        {payments.map(row => (
                                            <tr key={row.id} className="hover:bg-[#F8FAFC]">
                                                <td className="pl-6 pr-4 py-4 text-[12px] font-medium text-[#64748B]">{row.attendee}</td>
                                                <td className="px-4 py-4 text-[13px]">
                                                    <span className="bg-[#E2E8F0]/60 text-[#1730A8] font-bold px-4 py-1.5 rounded-full">{row.type}</span>
                                                </td>
                                                <td className="px-4 py-4 text-[12px] font-medium text-[#64748B]">{row.amount}</td>
                                                <td className="px-4 py-4 text-[12px] font-medium text-[#64748B]">{row.method}</td>
                                                <td className="px-6 py-4 text-[12px] font-medium text-[#64748B]">{row.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            {/* Pagination (Visual only) */}
                            <div className="flexitems-center justify-between p-6 bg-[#F8FAFC]">
                                <span className="text-[12px] font-bold text-[#94A3B8]">Showing 5 of 42 Attendee</span>
                                <div className="flex gap-2 float-right items-center">
                                    <button className="w-8 h-8 rounded-lg bg-[#1730A8] text-white flex items-center justify-center text-xs font-bold">1</button>
                                    <button className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[#002143] hover:bg-[#F1F5F9] flex items-center justify-center text-xs font-bold">2</button>
                                    <button className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[#002143] hover:bg-[#F1F5F9] flex items-center justify-center text-xs font-bold">3</button>
                                    <span className="text-[#94A3B8] px-2">...</span>
                                    <button className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[#002143] hover:bg-[#F1F5F9] flex items-center justify-center"><ChevronRight size={14}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Speakers" && (
                    <div className="flex flex-col gap-6">
                        <span className="text-[13px] font-medium text-[#94A3B8] mb-2">3 speakers assigned to this event</span>
                        {speakers.map(speaker => (
                            <div key={speaker.id} className="bg-white rounded-[24px] border border-[#F1F5F9] shadow-sm p-8 flex items-center gap-8 hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="w-[110px] h-[110px] shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md">
                                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <h4 className="text-[18px] font-black text-[#002143]">{speaker.name}</h4>
                                    <span className="text-[12px] font-medium text-[#94A3B8] mb-3">{speaker.title}</span>
                                    <p className="text-[14px] text-[#475569] leading-relaxed max-w-[800px] font-medium">{speaker.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
