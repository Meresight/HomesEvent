"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  CheckCircle2,
  Briefcase,
  Share2,
  Heart,
  Loader2,
  AlertCircle,
  ArrowLeft,
  CalendarCheck,
  Trophy,
  Globe,
  ShieldCheck,
  X
} from "lucide-react";
import { eventsApi } from "@/lib/api";
import type { Event } from "@/lib/api/types";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedTicketId, setSelectedTicketId] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchEvent = async () => {
      setIsLoading(true);
      setError("");
      try {
        const data = await eventsApi.getById(id);
        setEvent(data);
        if (data.ticketTiers && data.ticketTiers.length > 0) {
          setSelectedTicketId(data.ticketTiers[0].id);
        }
      } catch (err: any) {
        setError(err.message || "Failed to load event details.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  const handleRegister = async () => {
    if (!event || !selectedTicketId) return;
    setIsRegistering(true);
    try {
      // Mock registration call - In a real app, this would call an API
      await new Promise(r => setTimeout(r, 1500));
      setIsRegistered(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRegistering(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <Loader2 className="w-16 h-16 text-[#1730A8] animate-spin mb-6" />
        <p className="text-[#0A192F] font-black uppercase tracking-[0.4em] text-sm">Loading event experience...</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8">
           <AlertCircle className="w-12 h-12 text-red-500" />
        </div>
        <h2 className="text-3xl font-black text-[#0A192F] mb-4">Event Not Found</h2>
        <p className="text-[#4A5568] font-bold text-lg mb-12 max-w-md">{error || "The event you are looking for might have been removed or moved."}</p>
        <button 
          onClick={() => router.push("/events")}
          className="px-12 py-5 bg-[#1730A8] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#112480] transition-all shadow-2xl flex items-center gap-3"
        >
          <ArrowLeft size={20} /> Back to Discover
        </button>
      </div>
    );
  }

  const selectedTicket = event.ticketTiers.find(t => t.id === selectedTicketId);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[var(--font-inter)]">
      {/* ─── HEADER ─── */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/landing" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Home</Link>
          <Link href="/my-tickets" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">My Tickets</Link>
          <Link href="/events" className="text-[#FFB020] font-bold text-sm">Discover Events</Link>
          <Link href="/events/create" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Create Events</Link>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">Login</Link>
          <Link href="/signup" className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all">Sign up</Link>
          <button onClick={() => router.back()} className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all shadow-sm">Back</button>
        </div>
      </header>

      {/* ─── BREADCRUMBS ─── */}
      <div className="bg-[#002143] py-5 px-10 border-b border-white/5">
        <div className="flex items-center gap-4 text-white/50 text-[11px] font-black uppercase tracking-[0.2em] max-w-[1500px] mx-auto">
          <Link href="/events" className="hover:text-[#FFB020] transition-colors">Discover Events</Link>
          <ChevronRight size={14} className="text-[#FFB020]" />
          <span className="text-white line-clamp-1">{event.title}</span>
        </div>
      </div>

      {/* ─── EVENT BANNER ─── */}
      <div className="relative h-[650px] overflow-hidden">
         <img 
           src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000"} 
           alt={event.title} 
           className="w-full h-full object-cover grayscale brightness-50" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#002143] via-[#002143]/60 to-transparent flex flex-col justify-end px-10 pb-28">
            <div className="max-w-[1500px] mx-auto w-full">
               <div className="max-w-[1000px] animate-fade-in">
                  <div className="bg-[#FFB020] text-white text-[11px] font-black uppercase tracking-[0.4em] px-6 py-3 rounded-2xl w-fit mb-10 shadow-[0_20px_40px_-5px_rgba(255,176,32,0.4)] border-2 border-white/20">
                    {event.category}
                  </div>
                  <h1 className="text-white text-6xl lg:text-8xl font-black mb-10 leading-[1.05] tracking-tighter uppercase line-clamp-2">
                     {event.title}
                  </h1>
                  <div className="flex flex-wrap gap-10 text-white text-[13px] font-black uppercase tracking-[0.2em] bg-white/5 backdrop-blur-2xl p-8 rounded-[40px] border border-white/10 w-fit shadow-2xl">
                     <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFB020] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all text-white"><Calendar size={24} /></div>
                        <div>
                          <p className="text-white/40 text-[10px] mb-0.5">DATE</p>
                          {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                     </div>
                     <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFB020] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all text-white"><Clock size={24} /></div>
                        <div>
                          <p className="text-white/40 text-[10px] mb-0.5">TIME</p>
                          {event.startTime} - {event.endTime}
                        </div>
                     </div>
                     <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#FFB020] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all text-white"><MapPin size={24} /></div>
                        <div>
                          <p className="text-white/40 text-[10px] mb-0.5">LOCATION</p>
                          {event.city}, PH
                        </div>
                     </div>
                     <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-[#1730A8] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all text-white"><Users size={24} /></div>
                        <div>
                          <p className="text-white/40 text-[10px] mb-0.5">AVAILABILITY</p>
                          {(event.maxAttendees || 0) - (event.registeredCount || 0)} / {event.maxAttendees} SLOTS LEFT
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <main className="max-w-[1500px] mx-auto py-24 px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
           
           {/* LEFT CONTENT AREA */}
           <div className="flex-1 bg-white rounded-[56px] border-2 border-[#F1F5F9] shadow-sm overflow-hidden min-h-[800px]">
              {/* TABS */}
              <div className="flex px-12 border-b-2 border-[#F1F5F9] bg-[#F8FAFC]/50 overflow-x-auto scrollbar-hide">
                {["Overview", "Speakers", "Agenda", "Partners", "CPD Info"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-10 px-8 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative whitespace-nowrap ${
                      activeTab === tab ? "text-[#1730A8]" : "text-[#94A3B8] hover:text-[#4A5568]"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1730A8] rounded-t-full shadow-[0_-4px_10px_rgba(23,48,168,0.3)]" />}
                  </button>
                ))}
              </div>

              <div className="p-16">
                {activeTab === "Overview" && (
                  <div className="space-y-20 animate-fade-in">
                     <section>
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-10 h-1bg-[#FFB020] rounded-full" />
                           <p className="text-[#FFB020] text-[12px] font-black uppercase tracking-[0.4em] leading-none">ABOUT THIS EVENT</p>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#0A192F] mb-12 tracking-tight uppercase leading-[1.1]">
                          Professional <br /><span className="text-[#1730A8]">Excellence</span> Experience
                        </h2>
                        
                        <div className="bg-[#1730A8] p-12 rounded-[40px] mb-12 shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000 border border-white/10"></div>
                           <p className="text-white font-bold text-2xl italic leading-relaxed relative z-10 max-w-3xl">
                              "Step into the future of real estate with {event.title}. A curated experience designed for those who demand excellence."
                           </p>
                        </div>
                        
                        <div className="text-[#4A5568] text-xl font-medium leading-[2.1] space-y-10">
                           <p className="first-letter:text-6xl first-letter:font-black first-letter:text-[#1730A8] first-letter:mr-4 first-letter:float-left">
                              {event.description}
                           </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                           <div className="p-10 bg-[#F8FAFC] rounded-[32px] border-2 border-[#F1F5F9] hover:border-[#1730A8] transition-all group">
                              <CalendarCheck className="text-[#1730A8] mb-6 group-hover:scale-110 transition-transform" size={40} />
                              <h4 className="text-lg font-black text-[#0A192F] mb-3 uppercase">Verified Schedule</h4>
                              <p className="text-[#94A3B8] font-bold text-sm uppercase tracking-widest">Guaranteed Start Time</p>
                           </div>
                           <div className="p-10 bg-[#F8FAFC] rounded-[32px] border-2 border-[#F1F5F9] hover:border-[#FFB020] transition-all group">
                              <Trophy className="text-[#FFB020] mb-6 group-hover:scale-110 transition-transform" size={40} />
                              <h4 className="text-lg font-black text-[#0A192F] mb-3 uppercase">CPD Accredited</h4>
                              <p className="text-[#94A3B8] font-bold text-sm uppercase tracking-widest">{event.cpdHours || 0} Professional Hours</p>
                           </div>
                           <div className="p-10 bg-[#F8FAFC] rounded-[32px] border-2 border-[#F1F5F9] hover:border-[#0A192F] transition-all group">
                              <Globe className="text-[#0A192F] mb-6 group-hover:scale-110 transition-transform" size={40} />
                              <h4 className="text-lg font-black text-[#0A192F] mb-3 uppercase">Expert Insight</h4>
                              <p className="text-[#94A3B8] font-bold text-sm uppercase tracking-widest">Industry Leading Speakers</p>
                           </div>
                        </div>
                     </section>
                  </div>
                )}

                {activeTab === "Speakers" && (
                   <div className="space-y-16 animate-fade-in">
                      <div className="text-center md:text-left">
                        <p className="text-[#FFB020] text-[12px] font-black uppercase tracking-[0.4em] mb-4 leading-none">FACILITATORS</p>
                        <h2 className="text-5xl font-black text-[#0A192F] tracking-tight mb-6 uppercase">Meet the <span className="text-[#1730A8]">Maestros</span></h2>
                        <p className="text-[#94A3B8] font-bold text-xl max-w-2xl leading-relaxed">Engage with world-class professionals who are shaping the landscape of Philippine Real Estate.</p>
                      </div>
                      
                      {event.speakers && event.speakers.length > 0 ? (
                        <div className="grid grid-cols-1 gap-10 mt-16">
                           {event.speakers.map((s, i) => (
                              <div key={i} className="flex flex-col md:flex-row gap-12 p-12 border-2 border-[#F1F5F9] rounded-[48px] hover:border-[#1730A8] hover:shadow-2xl transition-all group bg-white relative overflow-hidden">
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#1730A8]/5 rounded-bl-[80px]"></div>
                                 <div className="relative shrink-0">
                                    <img src={s.image || `https://i.pravatar.cc/300?u=${s.name}`} alt={s.name} className="w-48 h-48 rounded-[40px] object-cover ring-[12px] ring-[#F8FAFC] group-hover:ring-[#1730A8]/10 transition-all shadow-xl" />
                                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#FFB020] rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white"><Trophy size={20} /></div>
                                 </div>
                                 <div className="relative z-10 flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                       <div>
                                          <h3 className="text-3xl font-black text-[#0A192F] group-hover:text-[#1730A8] transition-colors uppercase tracking-tight">{s.name}</h3>
                                          <p className="text-[#FFB020] text-xs uppercase font-black tracking-[0.3em] mt-2">{s.role}</p>
                                       </div>
                                       <div className="flex gap-3">
                                          {["Facebook", "LinkedIn", "Twitter"].map(social => (
                                             <div key={social} className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-[#94A3B8] hover:bg-[#1730A8] hover:text-white transition-all cursor-pointer"><Share2 size={16} /></div>
                                          ))}
                                       </div>
                                    </div>
                                    <div className="bg-[#F8FAFC] p-10 rounded-[32px] border-2 border-transparent group-hover:border-[#1730A8]/10 transition-all">
                                       <p className="text-lg text-[#4A5568] leading-[1.8] font-medium italic">"{s.bio || "An industry veteran with extensive experience in driving innovation and excellence within the Philippine real estate market."}"</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                      ) : (
                        <div className="py-20 text-center bg-[#F8FAFC] rounded-[40px] border-4 border-dashed border-[#E2E8F0]">
                           <Users size={64} className="mx-auto text-[#CBD5E1] mb-6" />
                           <h3 className="text-2xl font-black text-[#0A192F] uppercase mb-2">Speakers to be announced</h3>
                           <p className="text-[#94A3B8] font-bold">The roster of expert facilitators for this event is being finalized.</p>
                        </div>
                      )}
                   </div>
                )}

                 {activeTab === "Agenda" && (
                   <div className="space-y-12 animate-fade-in">
                     <div>
                       <p className="text-[#FFB020] text-[12px] font-black uppercase tracking-[0.4em] mb-4 leading-none">THE EXPERIENCE MAP</p>
                       <h2 className="text-5xl font-black text-[#0A192F] tracking-tight uppercase">Event <span className="text-[#1730A8]">Flow</span></h2>
                     </div>
                     
                     {event.agenda && event.agenda.length > 0 ? (
                       <div className="space-y-4">
                         {event.agenda.map((item, i) => (
                           <div key={i} className="flex gap-12 p-10 group hover:bg-[#F8FAFC] rounded-[32px] transition-all border-2 border-transparent hover:border-[#F1F5F9]">
                             <div className="w-24 shrink-0 flex flex-col justify-center">
                               <span className="text-lg font-black text-[#1730A8] uppercase tracking-tighter leading-none mb-1">{item.time}</span>
                               <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">START</span>
                             </div>
                             <div className="flex-1">
                               <div className="flex items-center gap-4 mb-3">
                                  <h4 className="text-2xl font-black text-[#0A192F] uppercase tracking-tight">{item.title}</h4>
                                  {item.tag && (
                                     <span className={`text-[10px] font-black px-5 py-2 rounded-xl uppercase tracking-widest ${item.tagColor || 'bg-[#EFF6FF] text-[#1730A8]'}`}>
                                        {item.tag}
                                     </span>
                                  )}
                               </div>
                               <p className="text-lg text-[#94A3B8] font-medium leading-relaxed max-w-2xl">{item.description || "Engage in a curated session focused on the core themes of this professional development event."}</p>
                             </div>
                           </div>
                         ))}
                       </div>
                     ) : (
                        <div className="py-20 text-center bg-[#F8FAFC] rounded-[40px] border-4 border-dashed border-[#E2E8F0]">
                           <Clock size={64} className="mx-auto text-[#CBD5E1] mb-6" />
                           <h3 className="text-2xl font-black text-[#0A192F] uppercase mb-2">Schedule pending</h3>
                           <p className="text-[#94A3B8] font-bold">The detailed itinerary for this event is currently being finalized.</p>
                        </div>
                     )}
                   </div>
                 )}

                 {activeTab === "Partners" && (
                   <div className="space-y-16 animate-fade-in">
                     <div>
                       <p className="text-[#FFB020] text-[12px] font-black uppercase tracking-[0.4em] mb-4 leading-none">COLLABORATORS</p>
                       <h2 className="text-5xl font-black text-[#0A192F] tracking-tight uppercase">Event <span className="text-[#1730A8]">Support</span></h2>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {event.partners && event.partners.length > 0 ? (
                          event.partners.map((p, i) => (
                             <div key={i} className="flex items-center gap-8 p-10 border-2 border-[#F1F5F9] rounded-[32px] bg-white hover:border-[#1730A8] hover:shadow-xl transition-all cursor-pointer relative group">
                               <div className="absolute top-4 right-8 bg-[#1730A8]/5 text-[#1730A8] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{p.tier || 'PLATINUM'}</div>
                               <div className="w-20 h-20 bg-[#F8FAFC] rounded-2xl flex items-center justify-center font-black text-[#0A192F] text-2xl shrink-0 group-hover:bg-[#1730A8] group-hover:text-white transition-all shadow-inner">
                                  {p.logo ? <img src={p.logo} alt={p.name} className="w-full h-full object-contain p-2" /> : p.name.substring(0, 2).toUpperCase()}
                               </div>
                               <div>
                                  <h4 className="text-xl font-black text-[#0A192F] uppercase tracking-tight mb-1 group-hover:text-[#1730A8] transition-colors">{p.name}</h4>
                                  <p className="text-[#94A3B8] text-[11px] font-bold uppercase tracking-widest">{p.tier || 'Primary'} Partner</p>
                               </div>
                             </div>
                          ))
                       ) : (
                          <div className="col-span-1 md:col-span-2 py-20 text-center bg-[#F8FAFC] rounded-[40px] border-4 border-dashed border-[#E2E8F0]">
                             <ShieldCheck size={64} className="mx-auto text-[#CBD5E1] mb-6" />
                             <h3 className="text-2xl font-black text-[#0A192F] uppercase mb-2">Partners to be listed</h3>
                             <p className="text-[#94A3B8] font-bold">We are currently finalizing our list of supporting organizations.</p>
                          </div>
                       )}
                     </div>
                     
                     <div className="bg-[#1730A8] rounded-[48px] p-16 text-center text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 group-hover:scale-110 transition-transform duration-[20s]"></div>
                        <div className="relative z-10">
                           <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Accelerate your <span className="text-[#FFB020]">Brand</span></h3>
                           <p className="text-white/70 text-lg font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
                              Position your organization at the forefront of the industry. Limited partnership opportunities for sponsorship and media coverage are available.
                           </p>
                           <button className="bg-[#FFB020] text-white px-16 py-6 rounded-[28px] font-black text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-[#1730A8] transition-all shadow-2xl">Partner with this Event</button>
                        </div>
                     </div>
                   </div>
                 )}

                 {activeTab === "CPD Info" && (
                   <div className="space-y-16 animate-fade-in">
                     <div>
                       <p className="text-[#FFB020] text-[12px] font-black uppercase tracking-[0.4em] mb-4 leading-none">PROFESSIONAL CREDENTIALS</p>
                       <h2 className="text-5xl font-black text-[#0A192F] tracking-tight uppercase">CPD <span className="text-[#1730A8]">Accreditation</span></h2>
                     </div>
                     <div className="bg-white rounded-[48px] border-2 border-[#F1F5F9] overflow-hidden shadow-sm">
                        {[
                          { label: "Accreditation Status", value: event.isCpdAccredited ? "OFFICIALLY ACCREDITED" : "PENDING", color: event.isCpdAccredited ? "text-[#2D9B7F]" : "text-[#FFB020]" },
                          { label: "Governing Body", value: event.cpdAccreditationBody || "NESPH / PRC PHILIPPINES" },
                          { label: "Total CPD Hours", value: `${event.cpdHours || 0} Hours Qualified` },
                          { label: "Certificate Format", value: "Verified Digital & Physical" },
                          { label: "Issuance Policy", value: "Same day completion" },
                        ].map((row, i) => (
                          <div key={i} className={`flex justify-between items-center px-12 py-8 ${i % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"}`}>
                            <span className="text-xs font-black text-[#4A5568] uppercase tracking-widest">{row.label}</span>
                            <span className={`text-base font-black uppercase tracking-tight text-right ${row.color || 'text-[#0A192F]'}`}>{row.value}</span>
                          </div>
                        ))}
                     </div>
                     <div className="flex bg-[#EFF6FF] border-2 border-[#1730A8]/20 rounded-[40px] p-12 gap-8 items-start">
                        <div className="w-16 h-16 bg-[#1730A8] rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-white"><ShieldCheck size={32} /></div>
                        <div>
                           <h4 className="text-xl font-black text-[#0A192F] mb-4 uppercase">Credential Integrity</h4>
                           <p className="text-lg text-[#4A5568] leading-relaxed font-medium">
                             To ensure the integrity of CPD credits, all attendees are required to present a valid PRC ID or government-issued identification. Certificates will only be issued to participants who complete the mandatory hours as prescribed by the governing body.
                           </p>
                        </div>
                     </div>
                   </div>
                 )}
              </div>
           </div>

           {/* RIGHT SIDEBAR - REGISTRATION */}
           <div className="w-full lg:w-[500px] space-y-12 sticky top-32">
              <div className="bg-white rounded-[64px] border-4 border-[#1730A8] shadow-[0_60px_120px_-30px_rgba(23,48,168,0.25)] overflow-hidden">
                 <div className="p-12">
                    <div className="flex justify-between items-start mb-12">
                        <div>
                           <div className="flex items-baseline gap-2">
                             <span className="text-5xl font-black text-[#0A192F]">₱{(selectedTicket?.price || 0).toLocaleString()}</span>
                             <span className="text-[#94A3B8] text-xs font-bold uppercase tracking-widest">/ Admission</span>
                           </div>
                           <p className="text-[#94A3B8] text-[11px] font-black mt-4 uppercase tracking-widest leading-none">All inclusive of materials & certificates</p>
                        </div>
                        <div className="flex gap-4">
                           <button className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border-2 border-[#F1F5F9] text-[#1730A8] hover:bg-[#1730A8] hover:text-white transition-all shadow-sm flex items-center justify-center"><Share2 size={24} /></button>
                           <button className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border-2 border-[#F1F5F9] text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm flex items-center justify-center"><Heart size={24} /></button>
                        </div>
                    </div>

                    <div className="bg-[#2D9B7F]/10 p-6 rounded-3xl border-2 border-[#2D9B7F]/20 mb-12 flex items-center justify-center shadow-inner">
                       <div className="flex items-center gap-4 text-[#2D9B7F] font-black text-[12px] uppercase tracking-[0.25em]">
                          <CheckCircle2 size={24} /> Verified Experience
                       </div>
                    </div>

                    <div className="space-y-5 mb-12">
                       <div className="flex justify-between text-[11px] font-black text-[#0A192F] uppercase tracking-[0.3em] leading-none mb-2">
                          <span>REGISTRATION STATUS</span>
                          <span className="text-[#FFB020]">{event.registeredCount || 0} / {event.maxAttendees} ATTENDEES</span>
                       </div>
                       <div className="w-full h-4 bg-[#F1F5F9] rounded-full overflow-hidden p-1 shadow-inner">
                          <div 
                            className="bg-gradient-to-r from-[#1730A8] to-[#FFB020] h-full rounded-full transition-all duration-[2s] shadow-lg" 
                            style={{ width: `${Math.min(100, ((event.registeredCount || 0) / (event.maxAttendees || 1)) * 100)}%` }}
                          ></div>
                       </div>
                    </div>

                    <hr className="border-[#F1F5F9] mb-12" />

                    <div className="space-y-8">
                       <p className="text-[12px] font-black uppercase tracking-[0.4em] text-[#94A3B8] leading-none px-1">Select Tier</p>
                       <div className="space-y-4">
                          {event.ticketTiers.map((tier) => (
                            <label 
                              key={tier.id} 
                              onClick={() => setSelectedTicketId(tier.id)}
                              className={`flex items-center justify-between p-8 border-2 rounded-[36px] cursor-pointer transition-all relative group ${
                                selectedTicketId === tier.id ? "border-[#1730A8] bg-[#1730A8]/5 shadow-xl scale-[1.03]" : "border-[#F1F5F9] bg-white hover:border-[#1730A8]/30"
                              }`}
                            >
                               <div className="flex items-center gap-5">
                                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                                      selectedTicketId === tier.id ? "border-[#1730A8] bg-white" : "border-[#E2E8F0] group-hover:border-[#1730A8]/40"
                                  }`}>
                                      {selectedTicketId === tier.id && <div className="w-4 h-4 rounded-full bg-[#FFB020] shadow-md animate-scale-in"></div>}
                                  </div>
                                  <div className="flex flex-col">
                                     <span className={`text-base font-black transition-colors uppercase tracking-tight ${selectedTicketId === tier.id ? "text-[#1730A8]" : "text-[#4A5568]"}`}>{tier.name}</span>
                                     <span className="text-[10px] font-bold text-[#94A3B8] uppercase mt-1">{tier.availableSlots} SLOTS REMAINING</span>
                                  </div>
                               </div>
                               <span className={`text-xl font-black transition-colors ${selectedTicketId === tier.id ? "text-[#1730A8]" : "text-[#0A192F]"}`}>₱{tier.price.toLocaleString()}</span>
                               <input type="radio" name="ticket" className="hidden" defaultChecked={selectedTicketId === tier.id} />
                            </label>
                          ))}
                          
                          {!isRegistered ? (
                            <button
                              onClick={handleRegister}
                              disabled={isRegistering || selectedTicket?.availableSlots === 0}
                              className={`w-full py-7 rounded-[36px] font-black text-sm uppercase tracking-[0.4em] mt-12 shadow-2xl transition-all flex items-center justify-center gap-4 ${
                                isRegistering 
                                ? "bg-[#F1F5F9] text-[#94A3B8] cursor-not-allowed" 
                                : "bg-[#1730A8] text-white hover:bg-[#112480] hover:-translate-y-2 active:scale-95 shadow-[#1730A8]/30"
                              }`}
                            >
                              {isRegistering ? <Loader2 className="animate-spin" /> : "Secure My Seat"}
                            </button>
                          ) : (
                             <div className="mt-12 bg-[#2D9B7F] text-white py-7 rounded-[36px] font-black text-sm uppercase tracking-[0.4em] text-center shadow-2xl flex items-center justify-center gap-4 animate-fade-in shadow-[#2D9B7F]/30">
                                <CheckCircle2 size={24} /> Registered Successfully
                             </div>
                          )}
                       </div>
                    </div>

                    <p className="text-center text-[11px] font-black text-[#94A3B8] mt-10 uppercase tracking-[0.2em] leading-relaxed">
                      Instant Confirmation • Secure Checkout <br /><span className="text-[#1730A8] underline cursor-pointer">View Refund Policy</span>
                    </p>

                    <div className="mt-16 pt-12 border-t-2 border-[#F1F5F9]">
                       <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#94A3B8] mb-8 leading-none px-1">Industry Preferred Partners</p>
                       <div className="flex gap-5">
                          {["GCash", "Maya", "Visa", "Master"].map(pay => (
                             <div key={pay} className="flex-1 h-16 bg-white rounded-2xl border-2 border-[#F1F5F9] flex items-center justify-center font-black text-[#0A192F] text-[11px] uppercase tracking-tighter hover:border-[#1730A8] transition-all cursor-pointer shadow-sm">
                                {pay}
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              {/* BECOME A PARTNER CARD */}
              <div className="bg-[#0A192F] rounded-[56px] shadow-2xl p-12 flex flex-col items-center text-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[120px] transition-all group-hover:scale-110"></div>
                 <div className="w-24 h-24 rounded-[36px] bg-[#FFB020] text-white flex items-center justify-center mb-10 shadow-2xl relative z-10 group-hover:rotate-12 transition-all duration-500">
                    <Briefcase size={48} />
                 </div>
                 <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter relative z-10 leading-tight">Host Your <br /><span className="text-[#FFB020]">Brand</span> Here</h3>
                 <p className="text-white/60 text-lg font-bold mb-12 max-w-[320px] relative z-10 leading-relaxed">
                    Connect with high-value professionals and elevate your brand presence within the Philippine Real Estate ecosystem.
                 </p>
                 <button className="w-full bg-white text-[#0A192F] py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-[#FFB020] hover:text-white transition-all shadow-xl hover:-translate-y-2 relative z-10">
                    Explore Partnerships
                 </button>
              </div>
           </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1730A8] pt-20 pb-10 text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 px-10 md:px-20">
          <div className="lg:col-span-2">
            <img src="/Group 483036.png" alt="Homes.ph Events" className="h-10 mb-8 brightness-0 invert" />
            <p className="text-white/80 text-sm font-medium leading-relaxed mb-6 max-w-sm">
              Your trusted partner in finding the perfect home. Connecting Filipinos with quality properties nationwide.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Facebook size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Instagram size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><X size={18} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-base mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/landing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Home</Link></li>
              <li><Link href="/my-tickets" className="text-white/80 hover:text-white text-sm font-medium transition-colors">My Tickets</Link></li>
              <li><Link href="/events" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Discover Events</Link></li>
              <li><Link href="/events/create" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Create Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQs</a></li>
              <li><Link href="/login" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Login</Link></li>
              <li><Link href="/signup" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1"><Phone size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-white">(+63) 977 815 0888</p>
                  <p className="text-[10px] text-white/60">Mon-Sat 9AM-8PM</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1"><Mail size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-white">info@homes.ph</p>
                  <p className="text-[10px] text-white/60">We reply within 24hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1"><MapPin size={18} /></span>
                <div>
                  <p className="text-sm font-bold text-white">Manila, Philippines</p>
                  <p className="text-[10px] text-white/60">Serving nationwide</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="w-[85%] mx-auto border-[#25406E] mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-10 md:px-20">
          <div>
            <p className="text-white/60 text-xs font-medium">© 2026 Homes.ph. All rights reserved. Your dream home awaits.</p>
            <p className="text-white/40 text-[10px] mt-1">Powered by passion and innovation</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-xs font-medium transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
