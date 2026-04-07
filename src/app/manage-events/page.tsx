"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  CalendarDays, 
  Users, 
  Banknote, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  ExternalLink, 
  Edit3, 
  Trash2, 
  Loader2,
  AlertCircle,
  Eye,
  CheckCircle2,
  Clock,
  XCircle,
  FileText
} from "lucide-react";
import { eventsApi } from "@/lib/api";
import type { Event } from "@/lib/api/types";

type EventStatus = "Cancelled" | "Published" | "Draft" | "Completed";

export default function ManageEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await eventsApi.getMyEvents();
      setEvents(response.data);
    } catch (err: any) {
      setError(err.message || "Failed to load your events. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "cancelled": return "bg-red-50 text-red-600 border-red-100";
      case "published": return "bg-green-50 text-green-600 border-green-100";
      case "draft": return "bg-orange-50 text-orange-600 border-orange-100";
      case "completed": return "bg-blue-50 text-blue-600 border-blue-100";
      default: return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "cancelled": return <XCircle size={12} />;
      case "published": return <CheckCircle2 size={12} />;
      case "draft": return <FileText size={12} />;
      case "completed": return <Clock size={12} />;
      default: return null;
    }
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    
    if (activeTab === "all") return true;
    if (activeTab === "published") return event.status?.toLowerCase() === "published";
    if (activeTab === "drafts") return event.status?.toLowerCase() === "draft";
    if (activeTab === "completed") return event.status?.toLowerCase() === "completed";
    return true;
  });

  const stats = [
    {
      title: "Active Events",
      value: events.filter(e => e.status?.toLowerCase() === "published").length.toString(),
      icon: CalendarDays,
      color: "bg-[#1730A8]",
      label: "LIVE NOW"
    },
    {
      title: "Total Registrations",
      value: events.reduce((acc, curr) => acc + (curr.registeredCount || 0), 0).toLocaleString(),
      icon: Users,
      color: "bg-[#FFB020]",
      label: "ATTENDEES"
    },
    {
      title: "Estimated Revenue",
      value: `₱${(events.reduce((acc, curr) => acc + (curr.registeredCount || 0) * (curr.ticketTiers?.[0]?.price || 0), 0) / 1000).toFixed(1)}k`,
      icon: Banknote,
      color: "bg-[#2D9B7F]",
      label: "GROSS"
    },
  ];

  if (isLoading) {
     return (
       <div className="flex flex-col items-center justify-center py-32 w-full">
         <Loader2 className="w-12 h-12 text-[#1730A8] animate-spin mb-4" />
         <p className="text-[#0A192F] font-black uppercase tracking-widest text-xs">Synchronizing Dashboard...</p>
       </div>
     );
  }

  if (error) {
     return (
       <div className="flex flex-col items-center justify-center py-20 w-full text-center px-6">
         <div className="w-20 h-20 bg-red-50 rounded-[32px] flex items-center justify-center text-red-500 mb-8 border-2 border-red-100">
           <AlertCircle size={40} />
         </div>
         <h3 className="text-2xl font-black text-[#0A192F] uppercase mb-4 tracking-tight">Access Interrupted</h3>
         <p className="text-[#94A3B8] font-bold mb-10 max-w-md">{error}</p>
         <button onClick={fetchData} className="px-10 py-4 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] transition-all shadow-xl">Reconnect Engine</button>
       </div>
     );
  }

  return (
    <div className="max-w-[1400px] w-full pb-20 animate-fade-in">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-[40px] p-10 flex flex-row items-center gap-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border-2 border-[#F1F5F9] hover:border-[#1730A8]/20 transition-all group"
          >
            <div
              className={`w-20 h-20 rounded-[28px] flex items-center justify-center text-white ${stat.color} shadow-2xl group-hover:scale-110 transition-transform duration-500`}
            >
              <stat.icon size={36} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <p className="text-[#94A3B8] font-black text-[10px] tracking-[0.2em] mb-2 uppercase flex items-center gap-2">
                {stat.title}
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </p>
              <h3 className="text-[#0A192F] text-4xl font-black tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-[#1730A8] font-black text-[9px] mt-1 tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          {/* Tabs Section */}
          <div className="flex items-center gap-10 border-b-2 border-[#F1F5F9] px-2">
            {[
                { id: "all", label: "All Experiences" },
                { id: "published", label: "Live" },
                { id: "drafts", label: "Drafts" },
                { id: "completed", label: "Archived" }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-6 flex flex-row items-center gap-3 relative transition-all group ${
                    isActive
                      ? "text-[#1730A8]"
                      : "text-[#94A3B8] hover:text-[#0A192F]"
                  }`}
                >
                  <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isActive ? "" : "group-hover:translate-x-1 transition-transform"}`}>
                    {tab.label}
                  </span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#1730A8] rounded-t-full shadow-[0_-4px_10px_rgba(23,48,168,0.3)]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
             <div className="relative group w-full sm:w-80">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#1730A8] transition-colors" size={18} />
                <input 
                   type="text" 
                   placeholder="Search experiences..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-white border-2 border-[#F1F5F9] focus:border-[#1730A8]/20 focus:ring-4 focus:ring-[#1730A8]/5 rounded-2xl pl-16 pr-6 py-4 text-sm font-bold text-[#0A192F] outline-none transition-all shadow-sm"
                />
             </div>
             <Link href="/events/create" className="w-full sm:w-auto bg-[#1730A8] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] hover:-translate-y-1 shadow-[0_20px_40px_-10px_rgba(23,48,168,0.3)] transition-all flex items-center justify-center gap-3">
                <Plus size={18} strokeWidth={3} /> Create New
             </Link>
          </div>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-[32px] p-8 flex flex-col lg:flex-row lg:items-center justify-between shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border-2 border-[#F1F5F9] hover:border-[#1730A8]/10 hover:shadow-xl transition-all group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-6 lg:mb-0">
               <div className="w-24 h-24 rounded-3xl overflow-hidden bg-[#F8FAFC] border-2 border-[#F1F5F9] shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=300"} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                     <span className={`px-4 py-1.5 border-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 ${getStatusColor(event.status || 'Draft')}`}>
                        {getStatusIcon(event.status || 'Draft')}
                        {event.status || 'Draft'}
                     </span>
                     <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">{event.category || 'Professional'}</p>
                  </div>
                  <h4 className="text-[#0A192F] font-black text-2xl tracking-tight group-hover:text-[#1730A8] transition-colors leading-tight">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-6">
                    <p className="text-[11px] text-[#94A3B8] font-black uppercase tracking-[0.1em] flex items-center gap-2">
                      <CalendarDays size={14} className="text-[#FFB020]" />
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <p className="text-[11px] text-[#94A3B8] font-black uppercase tracking-[0.1em] flex items-center gap-2">
                       <Users size={14} className="text-[#1730A8]" />
                       {event.registeredCount || 0} / {event.maxAttendees || 50} Registered
                    </p>
                    <p className="text-[11px] text-[#94A3B8] font-black uppercase tracking-[0.1em] flex items-center gap-2">
                       <Banknote size={14} className="text-[#2D9B7F]" />
                       ₱{(event.ticketTiers?.[0]?.price || 0).toLocaleString()}
                    </p>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-4 border-t lg:border-t-0 pt-6 lg:pt-0 border-[#F1F5F9]">
              <Link href={`/events/${event.id}`} target="_blank" className="p-4 bg-[#F8FAFC] text-[#94A3B8] hover:text-[#1730A8] hover:bg-white border-2 border-transparent hover:border-[#1730A8]/20 rounded-2xl transition-all shadow-sm">
                <ExternalLink size={20} />
              </Link>
              <Link href={`/events/edit/${event.id}`} className="p-4 bg-[#F8FAFC] text-[#94A3B8] hover:text-[#1730A8] hover:bg-white border-2 border-transparent hover:border-[#1730A8]/20 rounded-2xl transition-all shadow-sm">
                <Edit3 size={20} />
              </Link>
              <Link href={`/manage-events/${event.id}`} className="flex-1 lg:flex-none bg-[#1730A8] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] hover:-translate-y-1 shadow-lg hover:shadow-2xl shadow-[#1730A8]/20 transition-all text-center">
                Dashboard
              </Link>
              <button className="p-4 text-gray-300 hover:text-[#0A192F] transition-colors">
                 <MoreVertical size={24} />
              </button>
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <div className="py-24 bg-white rounded-[48px] border-4 border-dashed border-[#F1F5F9] flex flex-col items-center justify-center text-center px-6">
            <div className="w-24 h-24 bg-[#F8FAFC] rounded-[36px] flex items-center justify-center text-[#94A3B8] mb-8">
               <Filter size={40} />
            </div>
            <h3 className="text-2xl font-black text-[#0A192F] tracking-tight uppercase mb-4">No Experiences Located</h3>
            <p className="text-[#94A3B8] font-bold text-lg max-w-sm">We couldn't find any events matching your current filters or search query.</p>
            <button 
               onClick={() => { setActiveTab("all"); setSearchQuery(""); }} 
               className="mt-10 px-10 py-4 bg-[#F8FAFC] text-[#0A192F] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F1F5F9] transition-all border-2 border-transparent"
            >
               Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
