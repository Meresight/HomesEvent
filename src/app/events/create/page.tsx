"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
    ArrowLeft, 
    Upload, 
    Plus, 
    Trash2, 
    MapPin, 
    Globe, 
    Video,
    Calendar,
    Clock,
    DollarSign,
    CreditCard,
    Smartphone,
    UserPlus,
    Banknote,
    ChevronLeft,
    Sparkles
} from 'lucide-react';

export default function CreateEvent() {
    const [tickets, setTickets] = useState([{ id: 1, name: 'General Admission', price: '1,500' }]);
    const [speakers, setSpeakers] = useState([{ id: 1, name: 'Engr. Michael Chen', role: 'Lead Architect' }]);

    const addTicket = () => setTickets([...tickets, { id: Date.now(), name: '', price: '' }]);
    const addSpeaker = () => setSpeakers([...speakers, { id: Date.now(), name: '', role: '' }]);

    return (
        <div className="flex flex-col gap-12 pb-32 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/events" className="w-14 h-14 bg-white border border-[#F1F5F9] rounded-2xl flex items-center justify-center text-[#0A192F] hover:bg-[#F8FAFC] transition-all shadow-sm hover:shadow-md active:scale-90">
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black text-[#0A192F] tracking-tight mb-2">Create Experience</h1>
                        <p className="text-sm font-bold text-[#94A3B8]">Architecting the next standard in professional events</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-blue-50 text-[#2B5CFE] rounded-2xl border border-blue-100">
                    <Sparkles size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Premium Drafting Engine</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Form Area */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                    {/* Section 1: Basic Information */}
                    <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 bg-[#0A192F] text-white rounded-xl flex items-center justify-center">
                                <span className="text-xs font-black">01</span>
                            </div>
                            <h3 className="text-xl font-black text-[#0A192F] tracking-tight">Identity & Vision</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3 group">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Event Master Title</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter a compelling title..." 
                                    className="w-full px-8 py-5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[22px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 focus:border-[#2B5CFE]/20 transition-all shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-3 group">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Experience Description</label>
                                <textarea 
                                    placeholder="Describe the curriculum, objectives, and value proposition..." 
                                    rows={6}
                                    className="w-full px-8 py-5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[32px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 focus:border-[#2B5CFE]/20 transition-all shadow-sm resize-none"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Classification</label>
                                <div className="flex flex-wrap gap-3">
                                    {['Seminar', 'Workshop', 'Conference', 'Coaching', 'Others'].map(cat => (
                                        <button key={cat} className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                                            cat === 'Seminar' 
                                            ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-lg' 
                                            : 'bg-white text-[#94A3B8] border-[#F1F5F9] hover:border-[#0A192F] hover:text-[#0A192F]'
                                        }`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Date & Time */}
                    <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#0A192F] text-white rounded-xl flex items-center justify-center">
                                    <span className="text-xs font-black">02</span>
                                </div>
                                <h3 className="text-xl font-black text-[#0A192F] tracking-tight">Temporal Scope</h3>
                            </div>
                            <div className="flex bg-[#F8FAFC] p-1.5 rounded-2xl border border-[#F1F5F9]">
                                <button className="px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white text-[#0A192F] shadow-sm transition-all">Single Phase</button>
                                <button className="px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#94A3B8] transition-all">Multi-Schedule</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-3 group">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Scheduled Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#2B5CFE] transition-colors" size={20} strokeWidth={2.5} />
                                    <input type="date" className="w-full pl-16 pr-8 py-5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[22px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 transition-all shadow-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-3 group">
                                    <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Commencement</label>
                                    <div className="relative">
                                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} strokeWidth={2.5} />
                                        <input type="time" className="w-full pl-14 pr-4 py-5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[22px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 transition-all shadow-sm" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 group">
                                    <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Conclusion</label>
                                    <div className="relative">
                                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} strokeWidth={2.5} />
                                        <input type="time" className="w-full pl-14 pr-4 py-5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[22px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 transition-all shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Event Type */}
                    <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 bg-[#0A192F] text-white rounded-xl flex items-center justify-center">
                                <span className="text-xs font-black">03</span>
                            </div>
                            <h3 className="text-xl font-black text-[#0A192F] tracking-tight">Deployment Strategy</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {[
                                { name: 'In Person', icon: MapPin, active: true },
                                { name: 'Online', icon: Globe, active: false },
                                { name: 'Hybrid', icon: Video, active: false },
                            ].map(type => (
                                <button key={type.name} className={`flex flex-col items-center gap-5 p-8 rounded-[32px] transition-all duration-500 group relative overflow-hidden ${
                                    type.active 
                                    ? 'bg-[#0A192F] text-white shadow-2xl scale-105 border-transparent' 
                                    : 'bg-white border-2 border-[#F1F5F9] text-[#94A3B8] hover:border-[#0A192F]/20'
                                }`}>
                                    <div className={`p-4 rounded-2xl transition-all duration-500 shadow-sm ${
                                        type.active ? 'bg-white/10 text-white translate-y-0' : 'bg-[#F8FAFC] text-[#94A3B8] group-hover:bg-[#0A192F] group-hover:text-white group-hover:-translate-y-1'
                                    }`}>
                                        <type.icon size={28} strokeWidth={2.5} />
                                    </div>
                                    <span className="font-black text-[11px] uppercase tracking-[0.2em]">{type.name}</span>
                                    {type.active && <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3 group">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Physical Location / Venue</label>
                                <div className="relative">
                                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={20} />
                                    <input type="text" placeholder="e.g. Grand Convention Center, Hall B" className="w-full pl-16 pr-8 py-5 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[22px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 transition-all shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Pricing */}
                    <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#0A192F] text-white rounded-xl flex items-center justify-center">
                                    <span className="text-xs font-black">04</span>
                                </div>
                                <h3 className="text-xl font-black text-[#0A192F] tracking-tight">Monetization & Tiers</h3>
                            </div>
                            <div className="flex bg-[#F8FAFC] p-1.5 rounded-2xl border border-[#F1F5F9]">
                                <button className="px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#94A3B8] transition-all">Free Experience</button>
                                <button className="px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white text-[#0A192F] shadow-sm transition-all">Commercial</button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Secure Gateways</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { name: 'Maya', active: true },
                                        { name: 'GCash', active: true },
                                        { name: '7-11', active: false },
                                        { name: 'Card', active: true }
                                    ].map(method => (
                                        <button key={method.name} className={`flex items-center gap-3 p-5 rounded-2xl border transition-all ${
                                            method.active 
                                            ? 'bg-white border-[#0A192F] text-[#0A192F] shadow-md scale-105' 
                                            : 'bg-[#F8FAFC] border-[#F1F5F9] text-[#94A3B8] hover:border-[#0A192F]/20'
                                        }`}>
                                            <CreditCard size={18} strokeWidth={2.5}/>
                                            <span className="text-[10px] font-black uppercase tracking-widest">{method.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">Ticket Matrix</label>
                                {tickets.map((ticket, idx) => (
                                    <div key={ticket.id} className="flex gap-6 p-8 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[32px] transition-all hover:bg-white hover:shadow-xl group">
                                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Tier Title</span>
                                                <input defaultValue={ticket.name} type="text" className="bg-transparent font-black text-[16px] text-[#0A192F] outline-none group-focus-within:text-[#2B5CFE] transition-colors" placeholder="e.g. VIP Access" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Entry Value (PHP)</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl font-black text-[#0A192F]">₱</span>
                                                    <input defaultValue={ticket.price} type="text" className="bg-transparent font-black text-xl text-[#0A192F] outline-none w-full" placeholder="0.00" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-end">
                                            <button className="p-4 bg-white text-[#E2E8F0] hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all shadow-sm">
                                                <Trash2 size={20} strokeWidth={2.5} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button onClick={addTicket} className="flex items-center justify-center gap-4 w-full py-8 border-4 border-dashed border-[#F1F5F9] rounded-[32px] text-[#94A3B8] font-black text-[11px] uppercase tracking-[0.3em] hover:border-[#0A192F]/20 hover:text-[#0A192F] transition-all active:scale-[0.98]">
                                    <Plus size={20} strokeWidth={3} />
                                    Engineer New Tier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Media & Publish */}
                <div className="lg:col-span-4 flex flex-col gap-10">
                    <div className="bg-[#0A192F] rounded-[48px] p-10 shadow-2xl text-white overflow-hidden relative group">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2B5CFE] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
                        <h3 className="text-lg font-black tracking-tight mb-8 relative z-10 flex items-center gap-3">
                            <Upload size={20} className="text-blue-400" />
                            Creative Asset
                        </h3>
                        <div className="w-full aspect-[4/5] bg-white/5 border-2 border-dashed border-white/10 rounded-[40px] flex flex-col items-center justify-center text-white/40 hover:border-white/30 hover:bg-white/10 transition-all cursor-pointer relative z-10">
                             <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Upload size={32} className="text-white/60" />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center px-10 leading-relaxed">Broadcast Banner Ingestion Area</span>
                             <p className="text-[10px] font-bold text-white/20 mt-4 italic">Recommended: 16:9 UHD</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] flex flex-col gap-6">
                        <button className="w-full py-6 bg-gradient-to-r from-[#0A192F] to-[#1A294F] text-white rounded-[24px] font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_40px_-10px_rgba(10,25,47,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(10,25,47,0.5)] transition-all hover:-translate-y-1 active:scale-95">
                            Launch Experience
                        </button>
                        <button className="w-full py-5 border-2 border-[#F1F5F9] rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] text-[#0A192F] hover:bg-[#F8FAFC] transition-all">
                            Preserve Draft
                        </button>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Cloud Sync Active</span>
                        </div>
                    </div>

                    <div className="bg-[#FFB020]/10 border border-[#FFB020]/20 rounded-[40px] p-8 shadow-sm">
                         <div className="flex items-center gap-3 mb-4 text-[#B45309]">
                            <Sparkles size={18} strokeWidth={2.5}/>
                            <h4 className="text-[11px] font-black uppercase tracking-widest">Architect's Note</h4>
                         </div>
                         <p className="text-[13px] text-[#B45309]/80 leading-relaxed font-bold">
                            High-engagement events utilize multi-tier pricing and 4K-ready visual banners. Ensure your vision is communicated effectively.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
