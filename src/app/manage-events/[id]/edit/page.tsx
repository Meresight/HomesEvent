"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { ChevronDown, Calendar, Trash2, MapPin, Upload, Plus } from 'lucide-react';

export default function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    // Basic Information
    const [category, setCategory] = useState("Venue");
    const categories = ["Venue", "CPD", "Technical", "Legal", "Workshop", "Industry", "Mechanical", "Health"];

    // Date & Time
    const [scheduleType, setScheduleType] = useState("Single Date");

    // Event Plan
    const [eventPlan, setEventPlan] = useState("Paid");

    // Event Type
    const [eventType, setEventType] = useState("In-person");

    // Reservation & Capacity
    const [reservationType, setReservationType] = useState("Free");
    const [limitCapacity, setLimitCapacity] = useState("Yes, limit seats");

    // Tickets
    const [salesSchedule, setSalesSchedule] = useState("Live");
    const [openForPartners, setOpenForPartners] = useState(true);
    const [partnerTags, setPartnerTags] = useState(["Sponsorship", "Venue", "Speaker"]);

    // Visibility
    const [visibility, setVisibility] = useState("Public");

    return (
        <div className="max-w-[1200px] w-full pb-20 pt-4 flex flex-col xl:flex-row gap-8 relative">
            
            {/* Main Form Area */}
            <div className="flex-1 flex flex-col gap-5">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[12px] font-bold mb-1">
                    <Link href="/manage-events" className="text-[#94A3B8] hover:text-[#002143] transition-colors">Manage Events</Link>
                    <span className="text-[#94A3B8] font-medium">&gt;</span>
                    <Link href={`/manage-events/${id}`} className="text-[#94A3B8] hover:text-[#002143] transition-colors">Mastering the Code</Link>
                    <span className="text-[#94A3B8] font-medium">&gt;</span>
                    <span className="text-[#1730A8]">Edit event</span>
                </div>

                {/* Hero Header */}
                <div className="w-full bg-[#002143] rounded-[24px] p-8 flex flex-col relative overflow-hidden shadow-sm border border-[#002143]/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                    <h1 className="text-2xl font-black text-white tracking-tight relative z-10">Tell us about your event</h1>
                    <p className="text-sm font-medium text-white/60 mt-2 relative z-10 max-w-lg">Provide clear, organized information to give your attendees a perfect understanding of what they are signing up for.</p>
                </div>

                {/* 1. Basic Information */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Basic Information</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-[13px] font-bold text-[#002143]">Event Name</label>
                            <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#64748B] outline-none focus:border-[#1730A8]" placeholder="e.g. Legal Updates in Real Estate 2026" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[13px] font-bold text-[#002143]">Description</label>
                            <textarea className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#64748B] outline-none focus:border-[#1730A8] min-h-[100px]" placeholder="What is this event about? Include topics covered..."></textarea>
                        </div>
                        <div className="flex flex-col gap-3 mt-1">
                            <label className="text-[13px] font-bold text-[#002143]">Category</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {categories.map(cat => (
                                    <button 
                                        key={cat}
                                        onClick={() => setCategory(cat)}
                                        className={`py-3 rounded-xl border font-bold text-[13px] transition-colors ${category === cat ? 'border-[#FF8A00] bg-[#FF8A00]/10 text-[#002143]' : 'border-[#CBD5E1] bg-white text-[#475569] hover:bg-[#F8FAFC]'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <p className="text-[12px] text-[#94A3B8] font-medium mt-1">
                                CPD Events require <span className="text-[#1730A8]">Home.ph Events</span> review before publishing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Date & Time */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Date & Time</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col gap-3">
                            <label className="text-[13px] font-bold text-[#002143]">Event Schedule</label>
                            <div className="inline-flex bg-[#F1F5F9] rounded-full p-1 self-start shadow-inner border border-[#E2E8F0]">
                                {["Single Date", "Multiple Dates"].map(type => (
                                    <button 
                                        key={type}
                                        onClick={() => setScheduleType(type)}
                                        className={`px-8 py-2 rounded-full text-[12px] font-bold transition-all ${scheduleType === type ? 'bg-white text-[#002143] shadow-sm' : 'text-[#64748B] hover:text-[#002143]'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {scheduleType === "Single Date" && (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-[13px] font-bold text-[#002143]">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#002143]" size={18} strokeWidth={2.5}/>
                                        <input type="text" className="w-full pl-12 pr-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="April 24, 2026" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#002143]">Start time</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="9:00 AM" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#002143]">End time</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="5:00 PM" />
                                </div>
                            </div>
                        )}

                        {scheduleType === "Multiple Dates" && (
                            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 mt-2">
                                {/* Session 1 */}
                                <div className="p-4 border border-[#CBD5E1] rounded-[16px] flex flex-col gap-2">
                                    <div className="hidden md:grid grid-cols-12 gap-4">
                                        <div className="col-span-5"><span className="text-[13px] font-bold text-[#002143]">Session 1</span></div>
                                        <div className="col-span-3"><span className="text-[13px] font-bold text-[#002143]">Start time</span></div>
                                        <div className="col-span-3"><span className="text-[13px] font-bold text-[#002143]">End time</span></div>
                                        <div className="col-span-1"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                        <div className="md:col-span-5 flex flex-col gap-1 relative">
                                            <span className="md:hidden text-[13px] font-bold text-[#002143]">Session 1</span>
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#002143] md:mt-0 mt-[10px]" size={16} strokeWidth={2.5}/>
                                            <input type="text" className="w-full pl-10 pr-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="April 24, 2026" />
                                        </div>
                                        <div className="md:col-span-3 flex flex-col gap-1">
                                            <span className="md:hidden text-[13px] font-bold text-[#002143]">Start time</span>
                                            <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="9:00 AM" />
                                        </div>
                                        <div className="md:col-span-3 flex flex-col gap-1">
                                            <span className="md:hidden text-[13px] font-bold text-[#002143]">End time</span>
                                            <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="5:00 PM" />
                                        </div>
                                        <div className="md:col-span-1 flex justify-center h-[46px]">
                                            <button className="bg-[#FF3B30] hover:bg-[#E6352B] w-[46px] h-full rounded-xl transition-all flex items-center justify-center">
                                                <Trash2 size={18} className="text-white" strokeWidth={2.5}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Session 2 */}
                                <div className="p-4 border border-[#CBD5E1] rounded-[16px] flex flex-col gap-2">
                                    <div className="hidden md:grid grid-cols-12 gap-4">
                                        <div className="col-span-5"><span className="text-[13px] font-bold text-[#002143]">Session 2</span></div>
                                        <div className="col-span-3"><span className="text-[13px] font-bold text-[#002143]">Start time</span></div>
                                        <div className="col-span-3"><span className="text-[13px] font-bold text-[#002143]">End time</span></div>
                                        <div className="col-span-1"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                        <div className="md:col-span-5 flex flex-col gap-1 relative">
                                            <span className="md:hidden text-[13px] font-bold text-[#002143]">Session 2</span>
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#002143] md:mt-0 mt-[10px]" size={16} strokeWidth={2.5}/>
                                            <input type="text" className="w-full pl-10 pr-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="April 24, 2026" />
                                        </div>
                                        <div className="md:col-span-3 flex flex-col gap-1">
                                            <span className="md:hidden text-[13px] font-bold text-[#002143]">Start time</span>
                                            <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="9:00 AM" />
                                        </div>
                                        <div className="md:col-span-3 flex flex-col gap-1">
                                            <span className="md:hidden text-[13px] font-bold text-[#002143]">End time</span>
                                            <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="5:00 PM" />
                                        </div>
                                        <div className="md:col-span-1 flex justify-center h-[46px]">
                                            <button className="bg-[#FF3B30] hover:bg-[#E6352B] w-[46px] h-full rounded-xl transition-all flex items-center justify-center">
                                                <Trash2 size={18} className="text-white" strokeWidth={2.5}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Add Button */}
                                <button className="w-full py-5 border-2 border-dashed border-[#CBD5E1] rounded-[16px] text-[#94A3B8] font-bold text-[13px] hover:border-[#1730A8] hover:text-[#1730A8] hover:bg-[#1730A8]/5 transition-all flex items-center justify-center gap-2">
                                    <Plus size={16} strokeWidth={3}/> Add another date
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* 4. Event Plan */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Event Plan</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col gap-3">
                            <label className="text-[13px] font-bold text-[#002143]">Type of Event</label>
                            <div className="inline-flex border border-[#CBD5E1] rounded-full overflow-hidden self-start">
                                {["Free", "Sponsored", "Paid"].map(type => (
                                    <button 
                                        key={type}
                                        onClick={() => setEventPlan(type)}
                                        className={`px-8 py-2.5 text-[12px] font-bold transition-all ${eventPlan === type ? 'bg-[#1730A8] text-white' : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Event Type (Venue Details) */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Event Type</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col gap-3">
                            <label className="text-[13px] font-bold text-[#002143]">How will this event be held?</label>
                            <div className="inline-flex bg-[#F1F5F9] rounded-full p-1 self-start shadow-inner border border-[#E2E8F0]">
                                {["Online", "In-person", "Both"].map(type => (
                                    <button 
                                        key={type}
                                        onClick={() => setEventType(type)}
                                        className={`px-8 py-2 rounded-full text-[12px] font-bold transition-all ${eventType === type ? 'bg-white text-[#002143] shadow-sm' : 'text-[#64748B] hover:text-[#002143]'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {(eventType === "In-person" || eventType === "Both") && (
                            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300 mt-3">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#002143]">Venue name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="Makati Diamond Residences" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#002143]">Full address</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="Legaspi Village, Makati City, Metro Manila" />
                                </div>
                                
                                <div className="w-full h-[180px] bg-[#E2E8F0] rounded-xl overflow-hidden mt-1 relative border border-[#CBD5E1]">
                                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-70" alt="Map" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-1">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[13px] font-bold text-[#002143]">Longitude</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="121.0244" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[13px] font-bold text-[#002143]">Latitude</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="14.5547" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {(eventType === "Online" || eventType === "Both") && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-300 mt-2">
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-[13px] font-bold text-[#002143]">Platform</label>
                                    <div className="relative">
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none appearance-none" defaultValue="Zoom" />
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3B82F6]" size={18} strokeWidth={2.5} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[13px] font-bold text-[#002143]">Meeting Link</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" placeholder="https://zoom.us/j/..." />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 6. Reservation & Capacity */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Reservation & Capacity</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col gap-3">
                            <label className="text-[13px] font-bold text-[#002143]">Event Payment Type</label>
                            <div className="inline-flex bg-[#F1F5F9] rounded-full p-1 self-start shadow-inner border border-[#E2E8F0]">
                                {["Free", "With payment"].map(type => (
                                    <button 
                                        key={type}
                                        onClick={() => setReservationType(type)}
                                        className={`px-8 py-2 rounded-full text-[12px] font-bold transition-all ${reservationType === type ? 'bg-white text-[#002143] shadow-sm' : 'text-[#64748B] hover:text-[#002143]'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-[13px] font-bold text-[#002143]">Limit Capacity?</label>
                            <div className="inline-flex bg-[#F1F5F9] rounded-full p-1 self-start shadow-inner border border-[#E2E8F0]">
                                {["Yes, limit seats", "No limit"].map(type => (
                                    <button 
                                        key={type}
                                        onClick={() => setLimitCapacity(type)}
                                        className={`px-8 py-2 rounded-full text-[12px] font-bold transition-all ${limitCapacity === type ? 'bg-white text-[#002143] shadow-sm' : 'text-[#64748B] hover:text-[#002143]'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {limitCapacity === "Yes, limit seats" && (
                            <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
                                <label className="text-[13px] font-bold text-[#002143]">How many seats?</label>
                                <div className="relative">
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none appearance-none cursor-pointer" defaultValue="100" />
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" size={18} strokeWidth={2.5} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 7. Tickets & Pricing */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Tickets & Pricing</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col gap-3">
                            <label className="text-[13px] font-bold text-[#002143]">Event Schedule</label>
                            <div className="inline-flex bg-[#F1F5F9] rounded-full p-1 self-start shadow-inner border border-[#E2E8F0]">
                                {["Free", "With payment"].map(type => (
                                    <button 
                                        key={type}
                                        onClick={() => setReservationType(type)}
                                        className={`px-8 py-2 rounded-full text-[12px] font-bold transition-all ${reservationType === type ? 'bg-white text-[#002143] shadow-sm' : 'text-[#64748B] hover:text-[#002143]'}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="text-[13px] font-bold text-[#002143]">Accepted Payment Methods</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {/* GCash Block */}
                                <label className="flex items-center justify-between p-3 border border-[#3B82F6] rounded-xl bg-[#EFF6FF] cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-[10px]">G</div>
                                        <span className="text-[12px] font-bold text-[#3B82F6]">Gcash</span>
                                    </div>
                                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#3B82F6] focus:ring-[#3B82F6]" />
                                </label>
                                {/* MasterCard Block */}
                                <label className="flex items-center justify-between p-3 border border-[#CBD5E1] rounded-xl bg-white cursor-pointer hover:border-[#94A3B8] transition-all">
                                    <div className="flex items-center gap-2">
                                        <div className="flex w-6 h-6 items-center justify-center">
                                            <div className="w-4 h-4 rounded-full bg-[#EB001B] -mr-2 z-10 mix-blend-multiply"></div>
                                            <div className="w-4 h-4 rounded-full bg-[#F79E1B] mix-blend-multiply"></div>
                                        </div>
                                        <span className="text-[12px] font-bold text-[#002143]">MasterCard</span>
                                    </div>
                                    <input type="checkbox" className="w-4 h-4 rounded border-[#CBD5E1] text-[#3B82F6] focus:ring-[#3B82F6]" />
                                </label>
                                {/* Visa */}
                                <label className="flex items-center justify-between p-3 border border-[#CBD5E1] rounded-xl bg-white cursor-pointer hover:border-[#94A3B8] transition-all">
                                    <div className="flex items-center gap-2 pl-1">
                                        <span className="text-[#1A1F71] font-black italic text-[16px]">VISA</span>
                                        <span className="text-[12px] font-bold text-[#002143] ml-1">Visa</span>
                                    </div>
                                    <input type="checkbox" className="w-4 h-4 rounded border-[#CBD5E1] text-[#3B82F6] focus:ring-[#3B82F6]" />
                                </label>
                                {/* QRPh */}
                                <label className="flex items-center justify-between p-3 border border-[#CBD5E1] rounded-xl bg-white cursor-pointer hover:border-[#94A3B8] transition-all">
                                    <div className="flex items-center gap-2 pl-1">
                                        <div className="font-bold flex tracking-tight">
                                            <span className="text-[#FFB81C] text-[13px]">QR</span><span className="text-[#E70012] text-[13px]">Ph</span>
                                        </div>
                                        <span className="text-[12px] font-bold text-[#3B82F6] ml-2">GR</span>
                                    </div>
                                    <input type="checkbox" className="w-4 h-4 rounded border-[#CBD5E1] text-[#3B82F6] focus:ring-[#3B82F6]" />
                                </label>
                                {/* Fee Block */}
                                <label className="flex items-center justify-between p-3 border border-[#CBD5E1] rounded-xl bg-white cursor-pointer hover:border-[#94A3B8] transition-all">
                                    <div className="flex items-center gap-2 pl-2">
                                        <span className="text-[#1A1F71] font-black text-[15px]">₱</span>
                                        <span className="text-[12px] font-bold text-[#3B82F6] ml-2">Fee</span>
                                    </div>
                                    <input type="checkbox" className="w-4 h-4 rounded border-[#CBD5E1] text-[#3B82F6] focus:ring-[#3B82F6]" />
                                </label>
                            </div>
                        </div>

                        {/* Ticket Types */}
                        <div className="flex flex-col gap-3 mt-2">
                            <label className="text-[13px] font-bold text-[#002143]">Ticket Types</label>
                            
                            {/* Ticket 1 */}
                            <div className="p-4 border border-[#CBD5E1] rounded-[12px] flex flex-col gap-3">
                                <div className="grid grid-cols-12 gap-3 items-end mb-1">
                                    <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
                                        <span className="text-[12px] font-bold text-[#002143]">Ticket Name</span>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" placeholder="Member rate" />
                                    </div>
                                    <div className="col-span-5 md:col-span-3 flex flex-col gap-2">
                                        <span className="text-[12px] font-bold text-[#002143]">Price</span>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] font-bold text-[13px]">P</span>
                                            <input type="text" className="w-full pl-8 pr-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="1,200" />
                                        </div>
                                    </div>
                                    <div className="col-span-5 md:col-span-3 flex flex-col gap-2">
                                        <span className="text-[12px] font-bold text-[#002143]">Quantity</span>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="50" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1 flex justify-center pb-0">
                                        <button className="bg-[#FF3B30] hover:bg-[#E6352B] p-2.5 rounded-xl transition-all flex items-center justify-center">
                                            <Trash2 size={18} className="text-white" strokeWidth={2.5}/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Ticket 2 */}
                            <div className="p-4 border border-[#CBD5E1] rounded-[12px] flex flex-col gap-3">
                                <div className="grid grid-cols-12 gap-3 items-end mb-1">
                                    <div className="col-span-12 md:col-span-5 flex flex-col gap-2">
                                        <span className="text-[12px] font-bold text-[#002143]">Ticket Name</span>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" placeholder="Member rate" />
                                    </div>
                                    <div className="col-span-5 md:col-span-3 flex flex-col gap-2">
                                        <span className="text-[12px] font-bold text-[#002143]">Price</span>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] font-bold text-[13px]">P</span>
                                            <input type="text" className="w-full pl-8 pr-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="1,200" />
                                        </div>
                                    </div>
                                    <div className="col-span-5 md:col-span-3 flex flex-col gap-2">
                                        <span className="text-[12px] font-bold text-[#002143]">Quantity</span>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none" defaultValue="50" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1 flex justify-center pb-0">
                                        <button className="bg-[#FF3B30] hover:bg-[#E6352B] p-2.5 rounded-xl transition-all flex items-center justify-center">
                                            <Trash2 size={18} className="text-white" strokeWidth={2.5}/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 mt-2 border-2 border-dashed border-[#CBD5E1] rounded-[16px] text-[#94A3B8] font-bold text-[13px] hover:border-[#1730A8] hover:bg-[#1730A8]/5 transition-all flex items-center justify-center gap-2">
                                <Plus size={16} strokeWidth={3}/> Add another date
                            </button>
                        </div>

                        {/* Open for Partners Toggle */}
                        <div className="flex items-center gap-3 mt-2">
                            <label className="text-[13px] font-bold text-[#002143]">Open for Partners?</label>
                            <button 
                                onClick={() => setOpenForPartners(!openForPartners)}
                                className={`w-[44px] h-[26px] rounded-full flex items-center px-1 transition-all ${openForPartners ? 'bg-[#3B82F6] justify-end' : 'bg-[#CBD5E1] justify-start'}`}
                            >
                                <div className="w-[18px] h-[18px] rounded-full bg-white shadow-sm"></div>
                            </button>
                        </div>

                        {openForPartners && (
                            <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                {[
                                    { name: "Sponsorship", icon: "🎉" },
                                    { name: "Venue", icon: "🏠" },
                                    { name: "Speaker", icon: "🎤" },
                                    { name: "Materials", icon: "📦" },
                                    { name: "Media", icon: "📺" },
                                    { name: "Others", icon: "🏷️" }
                                ].map(tag => {
                                    const isSelected = partnerTags.includes(tag.name);
                                    return (
                                        <button 
                                            key={tag.name} 
                                            onClick={() => {
                                                if(isSelected) setPartnerTags(partnerTags.filter(t => t !== tag.name));
                                                else setPartnerTags([...partnerTags, tag.name]);
                                            }}
                                            className={`px-5 py-2.5 rounded-xl text-[12px] font-bold border transition-all flex items-center gap-2 ${isSelected ? 'border-[#3B82F6] text-[#3B82F6] bg-[#EFF6FF]' : 'border-[#CBD5E1] text-[#64748B] bg-white hover:border-[#94A3B8]'}`}
                                        >
                                            <span className="text-[16px]">{tag.icon}</span> {tag.name}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        <div className="flex flex-col gap-2 mt-2">
                            <label className="text-[13px] font-bold text-[#002143]">Message to Potential</label>
                            <textarea className="w-full px-4 py-4 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium text-[#94A3B8] outline-none min-h-[100px]" placeholder="What is this event about? Include topics covered, who should attend, and what attendees will learn..." />
                        </div>

                    </div>
                </div>

                {/* 7. Speakers */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Speakers</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-[100px] h-[100px] rounded-full bg-[#D9D9D9] shrink-0"></div>
                            <div className="flex flex-col gap-4 flex-grow w-full mt-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[12px] font-bold text-[#002143]">First Name</span>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium outline-none text-[#94A3B8]" placeholder="First name" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[12px] font-bold text-[#002143]">Last Name</span>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium outline-none text-[#94A3B8]" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[12px] font-bold text-[#002143]">Company</span>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium outline-none text-[#94A3B8]" placeholder="e.g. Legal Updates in Real Estate 2026" />
                                </div>
                                <div className="flex justify-end gap-3 mt-4">
                                    <button className="px-10 py-2.5 border border-[#CBD5E1] rounded-full text-[13px] font-bold text-[#64748B] hover:bg-[#F8FAFC]">Cancel</button>
                                    <button className="px-10 py-2.5 bg-[#1730A8] rounded-full text-[13px] font-bold text-white hover:bg-[#112480]">Add Speaker</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-[#E2E8F0] mt-4 mb-2"></div>

                        <p className="text-[11px] font-bold text-[#002143] leading-relaxed pr-8">
                            Added speakers will appear on the event listing and on their own dashboard under their event schedule.
                        </p>

                        <div className="flex flex-col gap-3">
                            {/* Added Speaker 1 */}
                            <div className="flex items-center justify-between p-4 border border-[#CBD5E1] rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex items-center justify-center font-black text-[#1730A8] text-[13px]">
                                        AT
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[13px] font-black text-[#002143]">Atty. Rosa Tan</span>
                                        <span className="text-[11px] font-bold text-[#002143]">Tan & Associates</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-[13px] font-bold text-[#1730A8] hover:text-[#112480]">Edit</button>
                                    <button className="bg-[#FF3B30] hover:bg-[#E6352B] p-2.5 rounded-[10px] transition-all flex items-center justify-center text-white">
                                        <Trash2 size={16} strokeWidth={3}/>
                                    </button>
                                </div>
                            </div>

                            {/* Added Speaker 2 */}
                            <div className="flex items-center justify-between p-4 border border-[#CBD5E1] rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex items-center justify-center font-black text-[#1730A8] text-[13px]">
                                        AT
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[13px] font-black text-[#002143]">Atty. Rosa Tan</span>
                                        <span className="text-[11px] font-bold text-[#002143]">Tan & Associates</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-[13px] font-bold text-[#1730A8] hover:text-[#112480]">Edit</button>
                                    <button className="bg-[#FF3B30] hover:bg-[#E6352B] p-2.5 rounded-[10px] transition-all flex items-center justify-center text-white">
                                        <Trash2 size={16} strokeWidth={3}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8. Partners */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Partners</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-6 bg-white">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-[100px] h-[100px] rounded-full bg-[#D9D9D9] shrink-0"></div>
                            <div className="flex flex-col gap-4 flex-grow w-full mt-1">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[12px] font-bold text-[#002143]">Sponsor Name</span>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium outline-none text-[#94A3B8]" placeholder="e.g. Legal Updates in Real Estate 2026" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[12px] font-bold text-[#002143]">Type of Company</span>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-[13px] font-medium outline-none text-[#94A3B8]" placeholder="e.g. Legal Updates in Real Estate 2026" />
                                </div>
                                <div className="flex justify-end gap-3 mt-4">
                                    <button className="px-10 py-2.5 border border-[#CBD5E1] rounded-full text-[13px] font-bold text-[#64748B] hover:bg-[#F8FAFC]">Cancel</button>
                                    <button className="px-10 py-2.5 bg-[#1730A8] rounded-full text-[13px] font-bold text-white hover:bg-[#112480]">Add Partner</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-[#E2E8F0] mt-4 mb-2"></div>

                        <p className="text-[11px] font-bold text-[#002143] leading-relaxed pr-8">
                            Added partners will appear on the event listing and on their own dashboard under their event schedule.
                        </p>

                        <div className="flex flex-col gap-3">
                            {/* Added Partner 1 */}
                            <div className="flex items-center justify-between p-4 border border-[#CBD5E1] rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex items-center justify-center font-black text-[#1730A8] text-[13px]">
                                        AT
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[13px] font-black text-[#1730A8]">Property Pro Org</span>
                                        <span className="text-[11px] font-bold text-[#002143]">Accredited Partner</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-[13px] font-bold text-[#1730A8] hover:text-[#112480]">Edit</button>
                                    <button className="bg-[#FF3B30] hover:bg-[#E6352B] p-2.5 rounded-[10px] transition-all flex items-center justify-center text-white">
                                        <Trash2 size={16} strokeWidth={3}/>
                                    </button>
                                </div>
                            </div>

                            {/* Added Partner 2 */}
                            <div className="flex items-center justify-between p-4 border border-[#CBD5E1] rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex items-center justify-center font-black text-[#1730A8] text-[13px]">
                                        AT
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[13px] font-black text-[#1730A8]">Property Pro Org</span>
                                        <span className="text-[11px] font-bold text-[#002143]">Accredited Partner</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-[13px] font-bold text-[#1730A8] hover:text-[#112480]">Edit</button>
                                    <button className="bg-[#FF3B30] hover:bg-[#E6352B] p-2.5 rounded-[10px] transition-all flex items-center justify-center text-white">
                                        <Trash2 size={16} strokeWidth={3}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 9. Visibility */}
                <div className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-[#CBD5E1] flex justify-between items-center cursor-pointer">
                        <h3 className="text-[16px] font-black text-[#002143]">Visibility</h3>
                        <ChevronDown size={20} className="text-[#002143]" strokeWidth={2.5}/>
                    </div>
                    <div className="p-6 flex flex-col gap-3 bg-white">
                        <span className="text-[13px] font-bold text-[#002143]">Visibility of the event</span>
                        <div className="inline-flex bg-[#F1F5F9] rounded-full p-1 self-start shadow-inner border border-[#E2E8F0]">
                            {["Public", "Private"].map((type) => (
                                <button 
                                    key={type}
                                    onClick={() => setVisibility(type)}
                                    className={`px-8 py-2 rounded-full text-[12px] font-bold transition-all ${visibility === type ? 'bg-white text-[#002143] shadow-sm' : 'text-[#64748B] hover:text-[#002143]'}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Sticky Right Side Panel */}
            <div className="w-full xl:w-[320px] shrink-0">
                <div className="sticky top-[100px] flex flex-col gap-6">
                    <div className="w-full bg-[#1730A8] rounded-[32px] p-8 flex flex-col shadow-xl overflow-hidden relative border border-[#1730A8]/20 group">
                        {/* Decorative background flair */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-white/20 transition-all duration-700" />
                        
                        <h3 className="text-[18px] font-black tracking-tight text-white mb-8 relative z-10 flex items-center gap-2">
                             Presentations
                        </h3>

                        <div className="flex flex-col gap-5 relative z-10 mb-8">
                            <div className="flex justify-between items-center text-[12px] font-bold border-b border-white/10 pb-4">
                                <span className="text-white/60">Status</span>
                                <span className="text-white bg-[#10B981] px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider">Published</span>
                            </div>
                            <div className="flex justify-between flex-col gap-2 text-[12px] font-bold border-b border-white/10 pb-4">
                                <span className="text-white/60">Registered</span>
                                <div className="w-full bg-white/10 h-3 rounded-full mt-1 overflow-hidden">
                                     <div className="bg-[#FF8A00] h-full w-[42%] rounded-full shadow-[0_0_4px_#FF8A00]"></div>
                                </div>
                                <div className="flex justify-between w-full mt-1 text-[10px]">
                                     <span className="text-white">42 Registered</span>
                                     <span className="text-white/40">100 Limit</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-[12px] font-bold border-b border-white/10 pb-4">
                                <span className="text-white/60">Revenue</span>
                                <span className="text-white text-[15px] tracking-tight font-black">₱ 52.5K</span>
                            </div>
                            <div className="flex justify-between items-center text-[12px] font-bold">
                                <span className="text-white/60">Waitlist</span>
                                <span className="text-[#FF8A00]">20 users</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 relative z-10">
                            <button className="w-full bg-[#FF8A00] text-[#002143] py-4 rounded-full font-black text-[12px] hover:bg-[#E67E00] hover:scale-[1.02] transition-all shadow-md tracking-wide">
                                Save as Draft
                            </button>
                            <button className="w-full bg-white text-[#1730A8] py-4 rounded-full font-black text-[12px] hover:bg-[#F8FAFC] transition-all shadow-sm tracking-wide">
                                Preview Deal
                            </button>
                            <button className="w-full bg-white/10 border-2 border-white/20 text-white py-4 rounded-full font-bold text-[12px] hover:bg-white/20 transition-all tracking-wide">
                                Publish Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
