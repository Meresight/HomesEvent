"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart, Search, Calendar, Clock, MapPin, Trash2 } from "lucide-react";

const mockFavorites = [
  { id: 1, title: "Mastering the Code: Elevating Philippine Real Estate Ethics", category: "WORKSHOP", date: "Monday, April 14, 2025", time: "9:00 AM - 5:00 PM", city: "Makati City", image: "/Rectangle 12428.png", price: 3000, slots: 38 },
  { id: 2, title: "CPD Final Review 2025", category: "CPD PROGRAMS", date: "Monday, April 21, 2025", time: "8:00 AM - 5:00 PM", city: "Baguio", image: "/Rectangle 12427.png", price: 1500, slots: 22 },
  { id: 3, title: "Broker Networking Night", category: "NETWORKING", date: "Thursday, April 17, 2025", time: "6:00 PM - 9:00 PM", city: "Quezon City", image: "/Rectangle 12428.png", price: 0, slots: 55 },
  { id: 4, title: "Modern Condo Sales Tactics", category: "WORKSHOP", date: "Sunday, April 20, 2025", time: "10:00 AM - 3:00 PM", city: "Manila", image: "/Rectangle 12427.png", price: 800, slots: 10 },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(mockFavorites);
  const [search, setSearch] = useState("");

  const filtered = favorites.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const remove = (id: number) =>
    setFavorites((prev) => prev.filter((f) => f.id !== id));

  return (
    <div className="max-w-[1200px] w-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#002143] tracking-tight">Saved Events</h1>
          <p className="text-sm font-bold text-[#94A3B8] mt-1">{favorites.length} events saved</p>
        </div>
        <div className="relative max-w-xs">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
          <input
            type="text"
            placeholder="Search saved events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-[#F1F5F9] rounded-2xl text-sm font-bold text-[#002143] outline-none focus:border-[#1730A8]/30 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-24 flex flex-col items-center text-center bg-white rounded-[40px] border border-[#F1F5F9]">
          <div className="w-20 h-20 bg-[#F8FAFC] rounded-[28px] flex items-center justify-center mb-6">
            <Heart size={36} className="text-[#CBD5E1]" />
          </div>
          <h3 className="text-xl font-black text-[#002143] mb-2">No Saved Events</h3>
          <p className="text-[#94A3B8] font-bold text-sm mb-8">
            {search ? "No results match your search." : "Start exploring and tap the heart icon to save events."}
          </p>
          <Link
            href="/events"
            className="px-8 py-4 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] transition-all shadow-lg"
          >
            Discover Events
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[40px] overflow-hidden border border-[#F1F5F9] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group relative"
            >
              {/* Remove button */}
              <button
                onClick={() => remove(event.id)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 transition-all shadow-sm"
                title="Remove from favorites"
              >
                <Trash2 size={16} />
              </button>

              {/* Image */}
              <div className="h-52 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="bg-[#FFB020] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                    {event.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1.5 rounded-lg border border-white/20">
                    {event.price === 0 ? "FREE" : `₱${event.price.toLocaleString()}`}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-7">
                <h3 className="text-base font-black text-[#002143] leading-tight mb-4 group-hover:text-[#1730A8] transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2.5 text-[#94A3B8] text-[11px] font-bold">
                    <Calendar size={13} className="text-[#FFB020]" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2.5 text-[#94A3B8] text-[11px] font-bold">
                    <Clock size={13} className="text-[#FFB020]" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2.5 text-[#94A3B8] text-[11px] font-bold">
                    <MapPin size={13} className="text-[#FFB020]" />
                    {event.city}
                  </div>
                </div>

                {/* Slots bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1.5">
                    <span>Slots Available</span>
                    <span className="text-[#FFB020]">{event.slots} left</span>
                  </div>
                  <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#1730A8] to-[#FFB020] rounded-full"
                      style={{ width: `${(event.slots / 80) * 100}%` }}
                    />
                  </div>
                </div>

                <Link
                  href={`/events/${event.id}`}
                  className="block w-full py-3.5 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest text-center hover:bg-[#112480] transition-all shadow-md"
                >
                  View Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
