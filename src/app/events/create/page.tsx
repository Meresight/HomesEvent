"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    CreditCard,
    ChevronLeft,
    Sparkles,
    Loader2,
    AlertCircle,
    CheckCircle2,
    Info
} from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEventSchema, type CreateEventValues } from "@/lib/validations/event";
import { eventsApi } from "@/lib/api";

export default function CreateEventPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState("");
    const [success, setSuccess] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<CreateEventValues>({
        resolver: zodResolver(createEventSchema) as any,
        defaultValues: {
            title: "",
            description: "",
            category: "SEMINARS",
            format: "In Person",
            date: "",
            startTime: "",
            endTime: "",
            city: "",
            venue: "",
            onlineLink: "",
            maxAttendees: 50,
            waitlistEnabled: false,
            isCpdAccredited: false,
            cpdHours: 0,
            cpdAccreditationBody: "",
            image: "",
            ticketTiers: [{ name: "General Admission", price: 0, totalSlots: 50, description: "" }],
            speakers: [{ name: "", role: "", bio: "", image: "" }],
        },
    });

    const { fields: ticketFields, append: appendTicket, remove: removeTicket } = useFieldArray({
        control,
        name: "ticketTiers",
    });

    const { fields: speakerFields, append: appendSpeaker, remove: removeSpeaker } = useFieldArray({
        control,
        name: "speakers",
    });

    const currentFormat = watch("format");
    const isCpd = watch("isCpdAccredited");

    const onSubmit = async (data: CreateEventValues) => {
        setIsSubmitting(true);
        setServerError("");
        try {
            await eventsApi.create(data);
            setSuccess(true);
            setTimeout(() => {
                router.push("/events");
            }, 2000);
        } catch (err: any) {
            setServerError(err.message || "Failed to create event. Please verify your inputs.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                <div className="w-24 h-24 bg-[#2D9B7F] text-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-[#2D9B7F]/20">
                    <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-black text-[#0A192F] mb-4">Event Created Successfully!</h2>
                <p className="text-[#94A3B8] font-bold text-lg mb-12">Your experience is now live and ready for discovery.</p>
                <div className="flex gap-4">
                    <button onClick={() => router.push("/events")} className="px-10 py-4 bg-[#1730A8] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all">Go to Discovery</button>
                    <button onClick={() => setSuccess(false)} className="px-10 py-4 bg-white border-2 border-[#F1F5F9] text-[#0A192F] rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#F8FAFC] transition-all">Create Another</button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12 pb-32 max-w-6xl mx-auto px-6">
            {/* Header Area */}
            <div className="flex items-center justify-between pt-10">
                <div className="flex items-center gap-6">
                    <Link href="/events" className="w-14 h-14 bg-white border border-[#F1F5F9] rounded-2xl flex items-center justify-center text-[#0A192F] hover:bg-[#F8FAFC] transition-all shadow-sm hover:shadow-md active:scale-90">
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </Link>
                    <div>
                        <h1 className="text-4xl font-black text-[#0A192F] tracking-tight mb-2">Create Experience</h1>
                        <p className="text-sm font-bold text-[#94A3B8]">Architecting the next standard in professional events</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-blue-50 text-[#1730A8] rounded-2xl border border-blue-100">
                    <Sparkles size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Premium Drafting Engine</span>
                </div>
            </div>

            {serverError && (
                <div className="p-6 bg-red-50 border-2 border-red-100 rounded-[32px] flex items-center gap-5 text-red-600 animate-fade-in shadow-sm">
                    <AlertCircle size={28} />
                    <p className="font-bold text-sm tracking-tight">{serverError}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Form Area */}
                <div className="lg:col-span-8 flex flex-col gap-12">
                    
                    {/* Section 1: Basic Information */}
                    <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-12 h-12 bg-[#0A192F] text-white rounded-[18px] flex items-center justify-center shadow-lg">
                                <span className="text-sm font-black">01</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#0A192F] tracking-tight uppercase">Identity & Vision</h3>
                                <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mt-1">Core details of your event</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Event Master Title</label>
                                <input 
                                    {...register("title")}
                                    type="text" 
                                    placeholder="Enter a compelling title..." 
                                    className={`w-full px-8 py-5 bg-[#F8FAFC] border-2 rounded-[24px] text-sm font-bold text-[#0A192F] outline-none transition-all ${errors.title ? 'border-red-200 focus:ring-4 focus:ring-red-50' : 'border-[#F1F5F9] focus:ring-4 focus:ring-[#1730A8]/5 focus:border-[#1730A8]/20'}`}
                                />
                                {errors.title && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest px-2">{errors.title.message}</p>}
                            </div>

                            <div className="flex flex-col gap-4">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Experience Description</label>
                                <textarea 
                                    {...register("description")}
                                    placeholder="Describe the curriculum, objectives, and value proposition..." 
                                    rows={6}
                                    className={`w-full px-8 py-6 bg-[#F8FAFC] border-2 rounded-[32px] text-sm font-bold text-[#0A192F] outline-none transition-all resize-none ${errors.description ? 'border-red-200 focus:ring-4 focus:ring-red-50' : 'border-[#F1F5F9] focus:ring-4 focus:ring-[#1730A8]/5 focus:border-[#1730A8]/20'}`}
                                />
                                {errors.description && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest px-2">{errors.description.message}</p>}
                            </div>

                            <div className="flex flex-col gap-4">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Classification</label>
                                <div className="flex flex-wrap gap-3">
                                    {(["SEMINARS", "WORKSHOP", "CPD PROGRAMS", "NETWORKING", "CONFERENCING", "COACHING"] as const).map(cat => (
                                        <button 
                                            key={cat}
                                            type="button"
                                            onClick={() => setValue("category", cat)}
                                            className={`px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                                                watch("category") === cat 
                                                ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-xl scale-105' 
                                                : 'bg-white text-[#94A3B8] border-[#F1F5F9] hover:border-[#1730A8]/20 hover:text-[#0A192F]'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Temporal Scope */}
                    <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-12 h-12 bg-[#0A192F] text-white rounded-[18px] flex items-center justify-center shadow-lg">
                                <span className="text-sm font-black">02</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#0A192F] tracking-tight uppercase">Temporal Scope</h3>
                                <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mt-1">Timeline and scheduling</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4 group">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Scheduled Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#1730A8] transition-colors" size={20} />
                                    <input 
                                        {...register("date")}
                                        type="date" 
                                        className={`w-full pl-16 pr-8 py-5 bg-[#F8FAFC] border-2 rounded-[24px] text-sm font-bold text-[#0A192F] outline-none transition-all ${errors.date ? 'border-red-200' : 'border-[#F1F5F9] focus:ring-4 focus:ring-[#1730A8]/5'}`} 
                                    />
                                </div>
                                {errors.date && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest px-2">{errors.date.message}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-4 group">
                                    <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Commencement</label>
                                    <div className="relative">
                                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                                        <input 
                                            {...register("startTime")}
                                            type="time" 
                                            className={`w-full pl-14 pr-4 py-5 bg-[#F8FAFC] border-2 rounded-[24px] text-sm font-bold text-[#0A192F] outline-none transition-all ${errors.startTime ? 'border-red-200' : 'border-[#F1F5F9]'}`} 
                                        />
                                    </div>
                                    {errors.startTime && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest px-2">{errors.startTime.message}</p>}
                                </div>
                                <div className="flex flex-col gap-4 group">
                                    <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Conclusion</label>
                                    <div className="relative">
                                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                                        <input 
                                            {...register("endTime")}
                                            type="time" 
                                            className={`w-full pl-14 pr-4 py-5 bg-[#F8FAFC] border-2 rounded-[24px] text-sm font-bold text-[#0A192F] outline-none transition-all ${errors.endTime ? 'border-red-200' : 'border-[#F1F5F9]'}`} 
                                        />
                                    </div>
                                    {errors.endTime && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest px-2">{errors.endTime.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Deployment Strategy */}
                    <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-12 h-12 bg-[#0A192F] text-white rounded-[18px] flex items-center justify-center shadow-lg">
                                <span className="text-sm font-black">03</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#0A192F] tracking-tight uppercase">Deployment</h3>
                                <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mt-1">Venue and environment</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {(["In Person", "Online", "Hybrid"] as const).map(type => (
                                <button 
                                    key={type}
                                    type="button"
                                    onClick={() => setValue("format", type)}
                                    className={`flex flex-col items-center gap-5 p-8 rounded-[36px] transition-all duration-500 group relative border-2 ${
                                        currentFormat === type 
                                        ? 'bg-[#0A192F] text-white shadow-2xl scale-105 border-transparent' 
                                        : 'bg-white border-[#F1F5F9] text-[#94A3B8] hover:border-[#1730A8]/20'
                                    }`}
                                >
                                    <div className={`p-4 rounded-2xl transition-all duration-500 ${
                                        currentFormat === type ? 'bg-white/10 text-white' : 'bg-[#F8FAFC] text-[#94A3B8] group-hover:bg-[#0A192F] group-hover:text-white group-hover:-translate-y-1'
                                    }`}>
                                        {type === "In Person" ? <MapPin size={28} /> : type === "Online" ? <Globe size={28} /> : <Video size={28} />}
                                    </div>
                                    <span className="font-black text-[11px] uppercase tracking-[0.2em]">{type}</span>
                                    {currentFormat === type && <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
                                </button>
                            ))}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">City</label>
                                <input 
                                    {...register("city")}
                                    type="text" 
                                    placeholder="e.g. Makati City" 
                                    className={`w-full px-8 py-5 bg-[#F8FAFC] border-2 rounded-[24px] text-sm font-bold text-[#0A192F] outline-none transition-all ${errors.city ? 'border-red-200' : 'border-[#F1F5F9] focus:ring-4 focus:ring-[#1730A8]/5'}`} 
                                />
                                {errors.city && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest px-2">{errors.city.message}</p>}
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Venue / Online Link</label>
                                <input 
                                    {...register(currentFormat === "Online" ? "onlineLink" : "venue")}
                                    type="text" 
                                    placeholder={currentFormat === "Online" ? "https://zoom.us/j/..." : "Enter physical venue..."}
                                    className={`w-full px-8 py-5 bg-[#F8FAFC] border-2 rounded-[24px] text-sm font-bold text-[#0A192F] outline-none transition-all ${errors.venue || errors.onlineLink ? 'border-red-200' : 'border-[#F1F5F9] focus:ring-4 focus:ring-[#1730A8]/5'}`} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Monetization */}
                    <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 bg-[#0A192F] text-white rounded-[18px] flex items-center justify-center shadow-lg">
                                    <span className="text-sm font-black">04</span>
                                </div>
                                <h3 className="text-2xl font-black text-[#0A192F] tracking-tight uppercase">Monetization</h3>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <label className="text-[12px] font-black text-[#94A3B8] uppercase tracking-[0.2em] px-2">Ticket Tiers</label>
                                <div className="space-y-6">
                                    {ticketFields.map((field, index) => (
                                        <div key={field.id} className="p-8 bg-[#F8FAFC] border-2 border-[#F1F5F9] rounded-[40px] flex flex-col md:flex-row gap-8 items-start md:items-center relative group hover:bg-white hover:border-[#1730A8]/20 transition-all shadow-sm">
                                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest px-1">Tier Name</span>
                                                    <input 
                                                        {...register(`ticketTiers.${index}.name` as const)}
                                                        className="bg-transparent text-lg font-black text-[#0A192F] outline-none border-b-2 border-transparent focus:border-[#1730A8]/20 transition-all py-1" 
                                                        placeholder="e.g. VIP Pass" 
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest px-1">Price (PHP)</span>
                                                    <input 
                                                        {...register(`ticketTiers.${index}.price` as const)}
                                                        type="number"
                                                        className="bg-transparent text-lg font-black text-[#0A192F] outline-none border-b-2 border-transparent focus:border-[#1730A8]/20 transition-all py-1" 
                                                        placeholder="0.00" 
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest px-1">Available Slots</span>
                                                    <input 
                                                        {...register(`ticketTiers.${index}.totalSlots` as const)}
                                                        type="number"
                                                        className="bg-transparent text-lg font-black text-[#0A192F] outline-none border-b-2 border-transparent focus:border-[#1730A8]/20 transition-all py-1" 
                                                        placeholder="100" 
                                                    />
                                                </div>
                                            </div>
                                            <button 
                                                type="button"
                                                onClick={() => removeTicket(index)}
                                                className="w-12 h-12 rounded-2xl bg-white border-2 border-[#F1F5F9] flex items-center justify-center text-[#E2E8F0] hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    ))}
                                    <button 
                                        type="button"
                                        onClick={() => appendTicket({ name: "", price: 0, totalSlots: 50 })}
                                        className="w-full py-8 border-4 border-dashed border-[#F1F5F9] rounded-[40px] text-[#94A3B8] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#F8FAFC] hover:border-[#1730A8]/20 hover:text-[#1730A8] transition-all flex items-center justify-center gap-4 group"
                                    >
                                        <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                                        Engineer New Tier
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Speakers */}
                    <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-12 h-12 bg-[#0A192F] text-white rounded-[18px] flex items-center justify-center shadow-lg">
                                <span className="text-sm font-black">05</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#0A192F] tracking-tight uppercase">Facilitators</h3>
                                <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mt-1">Expert roster</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {speakerFields.map((field, index) => (
                                <div key={field.id} className="p-10 bg-[#F8FAFC] border-2 border-[#F1F5F9] rounded-[48px] relative group hover:bg-white hover:border-[#1730A8]/20 transition-all">
                                    <div className="flex flex-col md:flex-row gap-10">
                                        <div className="w-32 h-32 rounded-[32px] bg-white border-2 border-[#F1F5F9] flex flex-col items-center justify-center text-[#E2E8F0] hover:text-[#1730A8] hover:border-[#1730A8]/20 transition-all cursor-pointer shadow-sm shrink-0">
                                            <Upload size={32} />
                                            <span className="text-[8px] font-black uppercase mt-2">Upload</span>
                                        </div>
                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="flex flex-col gap-3">
                                                <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest px-1">Full Name</span>
                                                <input 
                                                    {...register(`speakers.${index}.name` as const)}
                                                    className="bg-transparent text-lg font-black text-[#0A192F] outline-none border-b-2 border-transparent focus:border-[#1730A8]/20 transition-all py-1" 
                                                    placeholder="Dr. Jordan Santos" 
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest px-1">Expertise / Role</span>
                                                <input 
                                                    {...register(`speakers.${index}.role` as const)}
                                                    className="bg-transparent text-lg font-black text-[#0A192F] outline-none border-b-2 border-transparent focus:border-[#1730A8]/20 transition-all py-1" 
                                                    placeholder="Lead Consultant" 
                                                />
                                            </div>
                                            <div className="flex flex-col gap-3 md:col-span-2">
                                                <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest px-1">Short Bio</span>
                                                <textarea 
                                                    {...register(`speakers.${index}.bio` as const)}
                                                    rows={3}
                                                    className="bg-transparent text-sm font-bold text-[#4A5568] outline-none border-b-2 border-transparent focus:border-[#1730A8]/20 transition-all py-2 resize-none" 
                                                    placeholder="Industry veteran with 15+ years experience..." 
                                                />
                                            </div>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={() => removeSpeaker(index)}
                                            className="self-start p-4 rounded-2xl bg-white border-2 border-[#F1F5F9] text-[#E2E8F0] hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button 
                                type="button"
                                onClick={() => appendSpeaker({ name: "", role: "", bio: "" })}
                                className="w-full py-8 border-4 border-dashed border-[#F1F5F9] rounded-[48px] text-[#94A3B8] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#F8FAFC] hover:border-[#1730A8]/20 hover:text-[#1730A8] transition-all flex items-center justify-center gap-4"
                            >
                                <Plus size={24} />
                                Recruit Facilitator
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar area */}
                <div className="lg:col-span-4 flex flex-col gap-10">
                    <div className="bg-[#0A192F] rounded-[56px] p-12 shadow-2xl text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#1730A8] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
                        <h4 className="text-xl font-black uppercase tracking-tight mb-10 flex items-center gap-4 relative z-10">
                           <Upload size={24} className="text-[#FFB020]" /> Visual Asset
                        </h4>
                        <div className="aspect-[4/5] bg-white/5 border-4 border-dashed border-white/10 rounded-[40px] flex flex-col items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all cursor-pointer relative z-10">
                            <Upload className="mb-6 text-white/40" size={48} />
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 text-center px-10">Drop experience banner <br />(4:5 Recommendation)</p>
                        </div>
                        <p className="mt-8 text-[10px] font-black text-white/30 uppercase tracking-widest text-center relative z-10">Accepted: JPG, WEBP, PNG (Max 5MB)</p>
                    </div>

                    <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
                        <h4 className="text-xl font-black text-[#0A192F] uppercase mb-10 flex items-center gap-4">
                           <Info size={24} className="text-[#1730A8]" /> Regulatory
                        </h4>
                        <div className="space-y-10">
                            <label className="flex items-center gap-5 cursor-pointer group">
                                <div className="relative">
                                    <input {...register("isCpdAccredited")} type="checkbox" className="sr-only peer" />
                                    <div className="w-14 h-8 bg-[#F1F5F9] rounded-full peer peer-checked:bg-[#2D9B7F] transition-all border-2 border-transparent peer-focus:ring-4 peer-focus:ring-[#2D9B7F]/10"></div>
                                    <div className="absolute left-1.5 top-1.5 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-6 shadow-sm"></div>
                                </div>
                                <span className="text-[11px] font-black text-[#4A5568] uppercase tracking-widest">CPD Accreditation</span>
                            </label>
                            
                            {isCpd && (
                                <div className="space-y-6 animate-fade-in pl-5 border-l-4 border-[#2D9B7F]/20">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest">Hours</span>
                                        <input {...register("cpdHours")} type="number" className="bg-[#F8FAFC] px-6 py-4 rounded-xl border border-[#F1F5F9] text-sm font-black text-[#0A192F] outline-none focus:border-[#2D9B7F]/40" placeholder="3.0" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest">Body</span>
                                        <input {...register("cpdAccreditationBody")} className="bg-[#F8FAFC] px-6 py-4 rounded-xl border border-[#F1F5F9] text-sm font-black text-[#0A192F] outline-none focus:border-[#2D9B7F]/40" placeholder="PRC PHIL" />
                                    </div>
                                </div>
                            )}

                            <label className="flex items-center gap-5 cursor-pointer group">
                                <div className="relative">
                                    <input {...register("waitlistEnabled")} type="checkbox" className="sr-only peer" />
                                    <div className="w-14 h-8 bg-[#F1F5F9] rounded-full peer peer-checked:bg-[#1730A8] transition-all border-2 border-transparent peer-focus:ring-4 peer-focus:ring-[#1730A8]/10"></div>
                                    <div className="absolute left-1.5 top-1.5 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-6 shadow-sm"></div>
                                </div>
                                <span className="text-[11px] font-black text-[#4A5568] uppercase tracking-widest">Auto Waitlist</span>
                            </label>
                        </div>
                    </div>

                    <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex flex-col gap-6">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-7 bg-[#1730A8] text-white rounded-[32px] font-black text-sm uppercase tracking-[0.4em] shadow-[0_20px_50px_-10px_rgba(23,48,168,0.4)] hover:shadow-[0_25px_60px_-10px_rgba(23,48,168,0.5)] hover:-translate-y-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : "Launch Now"}
                        </button>
                        <button type="button" className="w-full py-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] border-2 border-transparent hover:border-[#F1F5F9] rounded-[24px] transition-all">
                           Save for later
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
