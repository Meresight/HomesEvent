"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    ChevronUp,
    ChevronDown,
    Calendar,
    Clock,
    Trash2,
    Plus,
    Edit2,
} from 'lucide-react';

const categories = ['Venue', 'CPD', 'Technical', 'Legal', 'Workshop', 'Industry', 'Mechanical', 'Health'];
const statusMeta = [
    { label: 'Status', value: 'Published', badge: 'green' },
    { label: 'CPD approval', value: 'Approved', badge: 'blue' },
    { label: 'Event type', value: 'In person', badge: null },
    { label: 'Visibility', value: 'Public', badge: null },
    { label: 'Registered', value: '42/80', badge: null },
    { label: 'Revenue', value: '₱50,400', badge: null },
];
const paymentMethods = [
    { name: 'GCash', icon: '💚', active: true },
    { name: 'MasterCard', icon: '🔴', active: false },
    { name: 'VISA Visa', icon: '💳', active: false },
    { name: 'QRPh QR', icon: '📱', active: true },
    { name: 'Pay', icon: '💰', active: false },
];
const partnerTypes = ['Sponsorship', 'Venue', 'Speaker', 'Materials', 'Media', 'Others'];

function AccordionSection({ title, defaultOpen = true, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-10 py-7 hover:bg-[#F8FAFC] transition-colors"
            >
                <h3 className="text-base font-black text-[#0A192F] tracking-tight">{title}</h3>
                {open ? <ChevronUp size={18} className="text-[#94A3B8]" /> : <ChevronDown size={18} className="text-[#94A3B8]" />}
            </button>
            {open && <div className="px-10 pb-10 flex flex-col gap-7">{children}</div>}
        </div>
    );
}

function PersonRow({ initials, name, org }: { initials: string; name: string; org: string }) {
    return (
        <div className="flex items-center gap-4 py-4 border-t border-[#F1F5F9]">
            <div className="w-10 h-10 rounded-full bg-[#387CFF] text-white flex items-center justify-center text-[11px] font-black shrink-0">
                {initials}
            </div>
            <div className="flex flex-col flex-grow">
                <span className="text-[13px] font-black text-[#0A192F]">{name}</span>
                <span className="text-[11px] font-bold text-[#94A3B8]">{org}</span>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 text-[11px] font-black text-[#387CFF] uppercase tracking-widest hover:opacity-70 transition-opacity">
                    <Edit2 size={13} />
                    Edit
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-400 hover:bg-red-100 transition-all">
                    <Trash2 size={13} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
}

export default function EditEvent() {
    const [selectedCategory, setSelectedCategory] = useState('Venue');
    const [scheduleType, setScheduleType] = useState<'free' | 'paid'>('free');
    const [limitCapacity, setLimitCapacity] = useState<'yes' | 'no'>('no');
    const [visibility, setVisibility] = useState<'public' | 'private'>('public');
    const [openForPartners, setOpenForPartners] = useState(true);
    const [selectedPartnerTypes, setSelectedPartnerTypes] = useState(['Sponsorship', 'Venue', 'Speaker', 'Materials']);
    const [tickets, setTickets] = useState([
        { id: 1, name: 'Member rate', price: '₱1,200', qty: '' },
        { id: 2, name: 'Member rate', price: '₱1,200', qty: '' },
    ]);
    const [sessions, setSessions] = useState([
        { id: 1 }, { id: 2 }
    ]);

    const togglePartnerType = (type: string) => {
        setSelectedPartnerTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const addTicket = () => setTickets([...tickets, { id: Date.now(), name: '', price: '', qty: '' }]);
    const removeTicket = (id: number) => setTickets(tickets.filter(t => t.id !== id));
    const addSession = () => setSessions([...sessions, { id: Date.now() }]);
    const removeSession = (id: number) => setSessions(sessions.filter(s => s.id !== id));

    return (
        <div className="flex flex-col gap-8 pb-28 max-w-[1400px]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#94A3B8]">
                <Link href="/events" className="hover:text-[#0A192F] transition-colors">Manage Events</Link>
                <ChevronRight size={12} strokeWidth={3} />
                <Link href="/events/1/manage" className="hover:text-[#0A192F] transition-colors">Mastering the Code</Link>
                <ChevronRight size={12} strokeWidth={3} />
                <span className="text-[#387CFF]">Edit Event</span>
            </div>

            {/* Hero Banner */}
            <div className="w-full rounded-[40px] bg-[#002143] p-12 flex flex-col gap-3 overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#387CFF] rounded-full blur-[120px] opacity-20" />
                <h1 className="text-3xl font-black text-white tracking-tight relative z-10">Tell us about your event</h1>
                <p className="text-sm font-bold text-white/50 relative z-10">Fill in the details below to create and publish your event on Home.ph Events.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main Form Column */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* Basic Information */}
                    <AccordionSection title="Basic Information">
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Event Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Legal Updates in Real Estate 2026"
                                defaultValue="Mastering the Code"
                                className="w-full px-6 py-4 bg-white border border-[#E2E8F0] rounded-[18px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 focus:border-[#387CFF]/30 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Description</label>
                            <textarea
                                rows={4}
                                placeholder="What is this event about? Include topics covered, who should attend, and what attendees will learn."
                                className="w-full px-6 py-4 bg-white border border-[#E2E8F0] rounded-[24px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 focus:border-[#387CFF]/30 transition-all resize-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Category</label>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                            selectedCategory === cat
                                                ? 'bg-[#FFB020] text-[#002143] border-[#FFB020] shadow-md'
                                                : 'bg-white text-[#94A3B8] border-[#E2E8F0] hover:border-[#0A192F]/30 hover:text-[#0A192F]'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] font-bold text-[#94A3B8] ml-1">CPD Events require <span className="text-[#387CFF]">Home.ph Events</span> review before publishing.</p>
                        </div>
                    </AccordionSection>

                    {/* Date & Time (Schedule type + Capacity) */}
                    <AccordionSection title="Date & Time">
                        <div className="flex flex-col gap-3">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Event Schedule</label>
                            <div className="flex bg-[#F1F5F9] p-1.5 rounded-2xl w-fit gap-1">
                                {(['free', 'paid'] as const).map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setScheduleType(type)}
                                        className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all capitalize ${
                                            scheduleType === type ? 'bg-white text-[#0A192F] shadow-sm' : 'text-[#94A3B8] hover:text-[#0A192F]'
                                        }`}
                                    >
                                        {type === 'free' ? 'Free' : 'With payment'}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Limit Capacity?</label>
                            <div className="flex bg-[#F1F5F9] p-1.5 rounded-2xl w-fit gap-1">
                                <button
                                    onClick={() => setLimitCapacity('yes')}
                                    className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                        limitCapacity === 'yes' ? 'bg-white text-[#0A192F] shadow-sm' : 'text-[#94A3B8] hover:text-[#0A192F]'
                                    }`}
                                >
                                    Yes, limit seats
                                </button>
                                <button
                                    onClick={() => setLimitCapacity('no')}
                                    className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                        limitCapacity === 'no' ? 'bg-white text-[#0A192F] shadow-sm' : 'text-[#94A3B8] hover:text-[#0A192F]'
                                    }`}
                                >
                                    No limit
                                </button>
                            </div>
                        </div>
                        {limitCapacity === 'yes' && (
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">How many seats?</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        defaultValue={100}
                                        className="w-full px-6 py-4 bg-white border border-[#E2E8F0] rounded-[18px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 focus:border-[#387CFF]/30 transition-all"
                                    />
                                    <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                                </div>
                            </div>
                        )}
                    </AccordionSection>

                    {/* Event Type (Paid settings + ticket types + partners) */}
                    <AccordionSection title="Event Type">
                        {/* Accepted Payment Methods */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Accepted Payment Methods</label>
                            <div className="flex flex-wrap gap-3">
                                {paymentMethods.map(method => (
                                    <button
                                        key={method.name}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl border-2 text-[11px] font-black transition-all ${
                                            method.active
                                                ? 'bg-[#387CFF]/10 border-[#387CFF] text-[#387CFF]'
                                                : 'bg-white border-[#E2E8F0] text-[#94A3B8] hover:border-[#0A192F]/20'
                                        }`}
                                    >
                                        <span>{method.icon}</span>
                                        {method.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Ticket Types */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Ticket Types</label>
                            <div className="flex flex-col gap-3">
                                {tickets.map((ticket) => (
                                    <div key={ticket.id} className="grid grid-cols-3 gap-4 items-center">
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Ticket Name</span>
                                            <input
                                                type="text"
                                                placeholder="Member rate"
                                                defaultValue={ticket.name}
                                                className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Price</span>
                                            <input
                                                type="text"
                                                placeholder="₱1,200"
                                                defaultValue={ticket.price}
                                                className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all"
                                            />
                                        </div>
                                        <div className="flex items-end gap-3">
                                            <div className="flex flex-col gap-1.5 flex-grow">
                                                <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Quantity</span>
                                                <input
                                                    type="number"
                                                    placeholder="40"
                                                    className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all"
                                                />
                                            </div>
                                            <button
                                                onClick={() => removeTicket(ticket.id)}
                                                className="w-11 h-11 flex items-center justify-center rounded-[14px] bg-red-50 text-red-400 hover:bg-red-100 transition-all mb-0.5"
                                            >
                                                <Trash2 size={15} strokeWidth={2.5} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={addTicket}
                                    className="flex items-center justify-center gap-3 w-full py-4 border-2 border-dashed border-[#E2E8F0] rounded-[20px] text-[10px] font-black text-[#94A3B8] uppercase tracking-widest hover:border-[#387CFF]/30 hover:text-[#387CFF] transition-all"
                                >
                                    <Plus size={14} strokeWidth={3} />
                                    Add another date
                                </button>
                            </div>
                        </div>

                        {/* Open for Partners? */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest">Open for Partners?</label>
                                <button
                                    onClick={() => setOpenForPartners(!openForPartners)}
                                    className={`w-12 h-6 rounded-full transition-all relative ${openForPartners ? 'bg-[#387CFF]' : 'bg-[#E2E8F0]'}`}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm ${openForPartners ? 'left-6' : 'left-0.5'}`} />
                                </button>
                            </div>
                            {openForPartners && (
                                <div className="flex flex-wrap gap-3">
                                    {partnerTypes.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => togglePartnerType(type)}
                                            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl border-2 text-[11px] font-black transition-all ${
                                                selectedPartnerTypes.includes(type)
                                                    ? 'bg-[#002143] text-white border-[#002143] shadow-md'
                                                    : 'bg-white border-[#E2E8F0] text-[#94A3B8] hover:border-[#0A192F]/30 hover:text-[#0A192F]'
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Message to Potential */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-black text-[#0A192F] uppercase tracking-widest ml-1">Message to Potential</label>
                            <textarea
                                rows={3}
                                placeholder="What is this event about? Include topics covered, who should attend, and which attendees will learn..."
                                className="w-full px-6 py-4 bg-white border border-[#E2E8F0] rounded-[24px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 focus:border-[#387CFF]/30 transition-all resize-none"
                            />
                        </div>
                    </AccordionSection>

                    {/* Speakers */}
                    <AccordionSection title="Speakers">
                        {/* Add Speaker Form */}
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 mt-1">
                                <span className="text-2xl text-[#CBD5E1]">👤</span>
                            </div>
                            <div className="flex-grow flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">First Name</label>
                                        <input type="text" placeholder="First name" className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Last Name</label>
                                        <input type="text" placeholder="Last name" className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Company</label>
                                    <input type="text" placeholder="e.g. Legal Updates in Real Estate 2026" className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="px-8 py-3 border-2 border-[#E2E8F0] text-[#0A192F] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F8FAFC] transition-all">Cancel</button>
                                    <button className="px-8 py-3 bg-[#1D4ED8] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-md hover:bg-[#1E40AF] transition-all">Add Speaker</button>
                                </div>
                            </div>
                        </div>
                        <p className="text-[11px] font-bold text-[#94A3B8]">Added speakers will appear on the event listing and on their own dashboard under their event schedule.</p>
                        {/* Speakers List */}
                        <div className="flex flex-col">
                            <PersonRow initials="AT" name="Atty. Rosa Tan" org="Tan & Associates" />
                            <PersonRow initials="AT" name="Atty. Rosa Tan" org="Tan & Associates" />
                        </div>
                    </AccordionSection>

                    {/* Partners */}
                    <AccordionSection title="Partners">
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 mt-1">
                                <span className="text-2xl text-[#CBD5E1]">🏢</span>
                            </div>
                            <div className="flex-grow flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Sponsor Name</label>
                                    <input type="text" placeholder="e.g. Legal Updates in Real Estate 2026" className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest ml-1">Type of Company</label>
                                    <input type="text" placeholder="e.g. Legal Updates in Real Estate 2026" className="w-full px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-[16px] text-[13px] font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#387CFF]/5 transition-all" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="px-8 py-3 border-2 border-[#E2E8F0] text-[#0A192F] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F8FAFC] transition-all">Cancel</button>
                                    <button className="px-8 py-3 bg-[#1D4ED8] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-md hover:bg-[#1E40AF] transition-all">Add Speaker</button>
                                </div>
                            </div>
                        </div>
                        <p className="text-[11px] font-bold text-[#94A3B8]">Added partners will appear on the event listing and on their own dashboard under their event schedule.</p>
                        <div className="flex flex-col">
                            <PersonRow initials="AT" name="Property Pro Org" org="Accredited Partner" />
                            <PersonRow initials="AT" name="Property Pro Org" org="Accredited Partner" />
                        </div>
                    </AccordionSection>

                    {/* Visibility */}
                    <AccordionSection title="Visibility">
                        <div className="flex flex-col gap-3">
                            <p className="text-[13px] font-bold text-[#64748B]">Visibility of the event</p>
                            <div className="flex bg-[#F1F5F9] p-1.5 rounded-2xl w-fit gap-1">
                                <button
                                    onClick={() => setVisibility('public')}
                                    className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                        visibility === 'public' ? 'bg-white text-[#0A192F] shadow-sm' : 'text-[#94A3B8] hover:text-[#0A192F]'
                                    }`}
                                >
                                    Public
                                </button>
                                <button
                                    onClick={() => setVisibility('private')}
                                    className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                        visibility === 'private' ? 'bg-white text-[#0A192F] shadow-sm' : 'text-[#94A3B8] hover:text-[#0A192F]'
                                    }`}
                                >
                                    Private
                                </button>
                            </div>
                        </div>
                    </AccordionSection>
                </div>

                {/* Sidebar: Event Status */}
                <div className="lg:col-span-4 sticky top-6 flex flex-col gap-6">
                    <div className="bg-[#002143] rounded-[40px] p-10 text-white flex flex-col gap-8 overflow-hidden relative">
                        <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#387CFF] rounded-full blur-[100px] opacity-20" />
                        <h3 className="text-base font-black tracking-tight relative z-10">Event status</h3>
                        <div className="flex flex-col gap-4 relative z-10">
                            {statusMeta.map((meta) => (
                                <div key={meta.label} className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">{meta.label}</span>
                                    {meta.badge === 'green' ? (
                                        <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">{meta.value}</span>
                                    ) : meta.badge === 'blue' ? (
                                        <span className="bg-[#387CFF]/20 text-[#387CFF] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#387CFF]/20">{meta.value}</span>
                                    ) : (
                                        <span className="text-[13px] font-black text-white">{meta.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 relative z-10">
                            <button className="w-full py-4 bg-[#FFB020] text-[#002143] rounded-[20px] font-black text-[11px] uppercase tracking-widest hover:bg-[#FFC246] active:scale-95 transition-all shadow-lg">
                                Submit for review
                            </button>
                            <button className="w-full py-4 bg-transparent border-2 border-white/20 text-white rounded-[20px] font-black text-[11px] uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all">
                                Save as draft
                            </button>
                            <button className="w-full py-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-[20px] font-black text-[11px] uppercase tracking-widest hover:bg-red-500/20 active:scale-95 transition-all">
                                Cancel Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
