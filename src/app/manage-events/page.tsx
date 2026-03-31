"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CalendarDays, Users, Banknote } from "lucide-react";

type EventStatus = "Cancelled" | "Published" | "Draft" | "Completed";

interface EventItem {
  id: string;
  title: string;
  date: string;
  registered: number;
  status: EventStatus;
}

const mockEvents: EventItem[] = [
  {
    id: "1",
    title: "Legal Updates in Real Estate 2026",
    date: "Apr 14, 2026",
    registered: 42,
    status: "Cancelled",
  },
  {
    id: "2",
    title: "Legal Updates in Real Estate 2026",
    date: "Apr 14, 2026",
    registered: 42,
    status: "Published",
  },
  {
    id: "3",
    title: "Legal Updates in Real Estate 2026",
    date: "Apr 14, 2026",
    registered: 42,
    status: "Draft",
  },
  {
    id: "4",
    title: "Legal Updates in Real Estate 2026",
    date: "Apr 14, 2026",
    registered: 42,
    status: "Completed",
  },
  {
    id: "5",
    title: "Legal Updates in Real Estate 2026",
    date: "Apr 14, 2026",
    registered: 18,
    status: "Published",
  },
];

const stats = [
  {
    title: "Total Events",
    value: "5",
    icon: CalendarDays,
    color: "bg-[#FF8A00]",
  },
  {
    title: "Total Registered",
    value: "186",
    icon: Users,
    color: "bg-[#1730A8]",
  },
  {
    title: "Total Revenue",
    value: "₱223k",
    icon: Banknote,
    color: "bg-[#059669]",
  },
];

const tabs = [
  { id: "all", label: "All", count: 5 },
  { id: "published", label: "Published", count: 3 },
  { id: "drafts", label: "Drafts", count: 1 },
  { id: "completed", label: "Completed", count: 4 },
];

export default function ManageEventsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const getStatusColor = (status: EventStatus) => {
    switch (status) {
      case "Cancelled":
        return "bg-red-100 text-red-600";
      case "Published":
        return "bg-green-100 text-green-600";
      case "Draft":
        return "bg-orange-100 text-orange-600";
      case "Completed":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredEvents = mockEvents.filter((event) => {
    if (activeTab === "all") return true;
    if (activeTab === "published") return event.status === "Published";
    if (activeTab === "drafts") return event.status === "Draft";
    if (activeTab === "completed") return event.status === "Completed";
    return true;
  });

  return (
    <div className="max-w-[1200px] w-full pb-10">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 flex flex-row items-center gap-5 shadow-sm border border-gray-100"
          >
            <div
              className={`w-16 h-16 rounded-[20px] flex items-center justify-center text-white ${stat.color} shadow-lg`}
            >
              <stat.icon size={28} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <p className="text-[#002143] font-bold text-xs tracking-wide mb-1">
                {stat.title}
              </p>
              <h3 className="text-[#002143] text-4xl font-extrabold tracking-tight">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs Section */}
      <div className="flex items-center gap-8 border-b border-gray-200 mb-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 flex flex-row items-center gap-2 relative transition-all ${
                isActive
                  ? "text-[#002143] font-black"
                  : "text-gray-400 font-bold hover:text-gray-600"
              }`}
            >
              <span className="text-sm">{tab.label}</span>
              <span
                className={`text-xs ${
                  isActive ? "text-[#002143]" : "text-gray-400"
                }`}
              >
                ({tab.count})
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#002143] rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-[#002143] font-black text-lg">
                {event.title}
              </h4>
              <div className="flex flex-row items-center gap-3">
                <p className="text-sm text-gray-500 font-medium">
                  {event.date} · {event.registered} registered
                </p>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusColor(
                    event.status
                  )}`}
                >
                  {event.status}
                </span>
              </div>
            </div>

            <Link href={`/manage-events/${event.id}`} className="mt-4 sm:mt-0 bg-[#1730A8] text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#112480] hover:scale-[1.02] shadow-sm hover:shadow-lg transition-all text-center">
              Manage
            </Link>
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <div className="py-16 text-center text-gray-400 font-bold">
            No events found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
