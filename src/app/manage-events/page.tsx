"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  CalendarDays, 
  Users, 
  Banknote, 
  Loader2,
  AlertCircle
} from "lucide-react";
import { eventsApi } from "@/lib/api";
import type { Event } from "@/lib/api/types";

export default function ManageEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const fetchData = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await eventsApi.getMyEvents();
      // For demonstration, mock some statuses
      const mockEvents = response.data.map((ev, i) => ({
        ...ev,
        status: i % 4 === 0 ? "Cancelled" : i % 4 === 1 ? "Published" : i % 4 === 2 ? "Draft" : "Completed"
      }));
      setEvents(mockEvents.length > 0 ? mockEvents : []);
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
    switch (status?.toLowerCase()) {
      case "cancelled": return "bg-red-50 text-red-600";
      case "published": return "bg-green-100 text-green-700";
      case "draft": return "bg-orange-100 text-orange-700";
      case "completed": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const filteredEvents = events.filter((event) => {
    if (activeTab === "all") return true;
    if (activeTab === "published") return event.status?.toLowerCase() === "published";
    if (activeTab === "drafts") return event.status?.toLowerCase() === "draft";
    if (activeTab === "completed") return event.status?.toLowerCase() === "completed";
    return true;
  });

  const stats = [
    {
      title: "Total Events",
      value: events.length.toString(),
      icon: CalendarDays,
      color: "bg-[#FF8A00]" // Orange
    },
    {
      title: "Total Registered",
      value: events.reduce((acc, curr) => acc + (curr.registeredCount || 0), 0).toLocaleString(),
      icon: Users,
      color: "bg-[#1730A8]" // Blue
    },
    {
      title: "Total Revenue",
      value: `₱${(events.reduce((acc, curr) => acc + (curr.registeredCount || 0) * (curr.ticketTiers?.[0]?.price || 0), 0) / 1000).toFixed(0)}k`,
      icon: Banknote,
      color: "bg-[#10B981]" // Green
    },
  ];

  if (isLoading) {
     return (
       <div className="flex flex-col items-center justify-center py-32 w-full">
         <Loader2 className="w-12 h-12 text-[#1730A8] animate-spin mb-4" />
       </div>
     );
  }

  if (error) {
     return (
       <div className="flex flex-col items-center justify-center py-20 w-full text-center px-6">
         <div className="w-20 h-20 bg-red-50 rounded-[32px] flex items-center justify-center text-red-500 mb-8 border-2 border-red-100">
           <AlertCircle size={40} />
         </div>
         <p className="text-[#94A3B8] font-bold mb-10 max-w-md">{error}</p>
         <button onClick={fetchData} className="px-10 py-4 bg-[#1730A8] text-white rounded-2xl font-bold text-sm hover:bg-[#112480] transition-all">Retry</button>
       </div>
     );
  }

  return (
    <div className="w-full pb-20 animate-fade-in">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] p-6 flex flex-row items-center gap-6 shadow-sm border border-gray-100"
          >
            <div
              className={`w-16 h-16 rounded-[16px] flex items-center justify-center text-white ${stat.color} shadow-md`}
            >
              <stat.icon size={28} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <p className="text-[#4A5568] font-bold text-xs mb-0.5">
                {stat.title}
              </p>
              <h3 className="text-[#0A192F] text-3xl font-black tracking-tight">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Section */}
      <div className="flex items-center gap-8 border-b border-gray-200 px-2 mb-6">
        {[
            { id: "all", label: `All (${events.length})` },
            { id: "published", label: `Published (${events.filter(e => e.status?.toLowerCase() === 'published').length})` },
            { id: "drafts", label: `Drafts (${events.filter(e => e.status?.toLowerCase() === 'draft').length})` },
            { id: "completed", label: `Completed (${events.filter(e => e.status?.toLowerCase() === 'completed').length})` }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 flex flex-row items-center gap-2 relative transition-all group ${
                isActive
                  ? "text-[#0A192F]"
                  : "text-[#94A3B8] hover:text-[#4A5568]"
              }`}
            >
              <span className={`text-[13px] font-bold ${isActive ? "font-black" : ""}`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A192F]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-[12px] p-6 flex items-center justify-between shadow-sm border border-gray-200"
          >
            <div className="flex flex-col gap-1">
               <h4 className="text-[#0A192F] font-black text-lg tracking-tight">
                 {event.title}
               </h4>
               <div className="flex items-center gap-3">
                 <p className="text-xs text-[#64748B] font-medium flex items-center">
                   {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {event.registeredCount || 0} registered
                 </p>
                 <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${getStatusColor(event.status || 'Draft')}`}>
                    {event.status || 'Draft'}
                 </span>
               </div>
            </div>

            <Link href={`/manage-events/${event.id}`} className="bg-[#1730A8] text-white px-6 py-2.5 rounded-lg font-bold text-[13px] hover:bg-[#112480] transition-all text-center">
              Manage
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
