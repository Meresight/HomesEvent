"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Loader2,
  AlertCircle,
  X
} from "lucide-react";
import { eventsApi } from "@/lib/api";
import type { Event } from "@/lib/api/types";

const cities = [
  { name: "MANILA", events: "57,000 EVENTS", image: "/manila.png" },
  { name: "CEBU CITY", events: "24,000 EVENTS", image: "https://images.unsplash.com/photo-1595166092002-3932e6047dc3?auto=format&fit=crop&q=80&w=800" },
  { name: "BOHOL", events: "12,000 EVENTS", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=800" },
  { name: "DAVAO", events: "18,000 EVENTS", image: "https://images.unsplash.com/photo-1583091392657-37589ed92338?auto=format&fit=crop&q=80&w=800" },
  { name: "BAGUIO", events: "9,000 EVENTS", image: "https://images.unsplash.com/photo-1571210835565-df2ea2707253?auto=format&fit=crop&q=80&w=800" }
];

const categories = [
  { name: "SEMINARS", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800" },
  { name: "WORKSHOP", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" },
  { name: "CPD PROGRAMS", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { name: "NETWORKING", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" }
];

export default function DiscoverEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await eventsApi.getAll();
        setEvents(response.data || []);
      } catch (err: any) {
        setError(err.message || "Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCity = selectedCity === "All Cities" || event.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      return matchesSearch && matchesCity && matchesCategory;
    });
  }, [events, searchQuery, selectedCity, selectedCategory]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage) || 1;
  const currentEvents = filteredEvents.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  return (
    <div className="min-h-screen bg-white font-[var(--font-inter)]">
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
          <Link href="/signup" className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all">Sign in</Link>
          <Link href="/landing" className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all">Back</Link>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000"
          alt="Discover Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#000a26]/90 via-[#00174f]/75 to-[#00174f]/55" />

        <div className="absolute left-0 bottom-0 hidden xl:block translate-y-[20%] animate-fade-in">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden relative shadow-2xl border-[10px] border-white">
            <img src="/happy-multi-ethnic-business-couple-isolated-png 1.png" className="w-full h-full object-cover scale-[1.6] translate-y-6" alt="Happy couple" />
          </div>
        </div>

        <div className="absolute right-0 top-0 hidden xl:block -translate-y-[10%] animate-fade-in-right">
          <div className="w-[350px] h-[350px] rounded-full overflow-hidden relative shadow-2xl border-[10px] border-white">
            <img src="/gettyimages-1496378856-612x612 2.png" className="w-full h-full object-cover" alt="Event graphics" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-white text-6xl lg:text-8xl font-black mb-6 tracking-tighter shadow-sm leading-tight">
            Discover Events <span className="text-[#FFB020]">Here</span>
          </h1>
          <p className="text-white/90 text-xl font-bold mb-14 max-w-2xl mx-auto leading-relaxed">
            Events near you. More than 186 million events based on your interests. Worldwide.
          </p>

          <div className="bg-white p-2 rounded-full shadow-[0_30px_70px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto border border-white/20 backdrop-blur-sm">
            <div className="flex-1 flex items-center px-8 gap-5 w-full">
              <Search className="text-[#94A3B8]" size={28} />
              <input 
                type="text" 
                placeholder="Search events, topics, speakers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-5 bg-transparent outline-none text-lg font-bold text-[#0A192F]"
              />
            </div>
            <button className="bg-[#FFB020] text-white px-14 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-[#E09418] hover:scale-105 transition-all shadow-lg w-full md:w-auto">
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <select 
              className="bg-white/15 backdrop-blur-xl border border-white/30 px-8 py-4 rounded-full text-white text-[12px] font-black uppercase tracking-widest cursor-pointer outline-none hover:bg-white/25 transition-all appearance-none text-center min-w-[160px]"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option className="text-black">All Cities</option>
              <option className="text-black">Manila</option>
              <option className="text-black">Cebu City</option>
              <option className="text-black">Davao</option>
              <option className="text-black">Quezon City</option>
              <option className="text-black">Makati</option>
              <option className="text-black">BGC</option>
            </select>
            <div className="bg-white/15 backdrop-blur-xl border border-white/30 px-8 py-4 rounded-full flex items-center gap-3 text-white text-[12px] font-black uppercase tracking-widest cursor-pointer hover:bg-white/25 transition-all shadow-sm">
              Any Date <ChevronRight size={16} className="rotate-90" />
            </div>
            <div className="bg-white/15 backdrop-blur-xl border border-white/30 px-8 py-4 rounded-full flex items-center gap-3 text-white text-[12px] font-black uppercase tracking-widest cursor-pointer hover:bg-white/25 transition-all shadow-sm">
              Any Price <ChevronRight size={16} className="rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BROWSE BY CITIES ─── */}
      <section className="py-24 px-6 lg:px-20 bg-white max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[#FFB020] text-[13px] font-black uppercase tracking-[0.4em] mb-3 px-1">Top Locations</p>
            <h2 className="text-[#0A192F] text-5xl font-black tracking-tight leading-none">Browse by <span className="text-[#1730A8]">Cities</span></h2>
          </div>
          <div className="flex gap-5">
            <button className="w-14 h-14 rounded-2xl border-2 border-[#E2E8F0] flex items-center justify-center text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button className="w-14 h-14 rounded-2xl bg-[#0A192F] text-white flex items-center justify-center shadow-xl hover:bg-[#1730A8] transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {cities.map((city, idx) => (
            <div 
              key={idx} 
              className={`group relative h-80 rounded-[40px] overflow-hidden cursor-pointer transition-all hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] ${selectedCity.toUpperCase() === city.name ? 'ring-4 ring-[#FFB020] scale-[1.03]' : ''}`}
              onClick={() => setSelectedCity(city.name === "MANILA" ? "Manila" : city.name === "CEBU CITY" ? "Cebu City" : city.name.charAt(0) + city.name.slice(1).toLowerCase())}
            >
              <img src={city.image} alt={city.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FFB020] mb-2">{city.events}</p>
                <h3 className="text-2xl font-black">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BROWSE BY CATEGORIES ─── */}
      <section className="py-24 px-6 lg:px-20 bg-[#F8FAFC]">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-16">
            <p className="text-[#FFB020] text-[13px] font-black uppercase tracking-[0.4em] mb-3 px-1">Explore</p>
            <h2 className="text-[#0A192F] text-5xl font-black tracking-tight leading-none">Event <span className="text-[#1730A8]">Categories</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`group relative h-56 rounded-[40px] overflow-hidden cursor-pointer transition-all hover:shadow-[0_25px_50px_-12px_rgba(23,48,168,0.25)] ${selectedCategory === cat.name ? 'ring-4 ring-[#1730A8] scale-[1.03]' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#00174F]/40 transition-colors group-hover:bg-[#1730A8]/50" />
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white text-2xl font-black text-center tracking-widest leading-tight uppercase">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENT LIST ─── */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 px-2 gap-10">
            <div>
              <h2 className="text-[#0A192F] text-5xl font-black tracking-tight mb-4 leading-none">Upcoming <span className="text-[#1730A8]">Events</span></h2>
              <p className="text-[#4A5568] font-bold text-lg">Showing {filteredEvents.length} results for <span className="text-[#1730A8]">"{selectedCategory === "All" ? "All Categories" : selectedCategory}"</span> in {selectedCity}</p>
            </div>
            
            <div className="flex bg-[#F1F5F9] rounded-2xl p-2 shadow-inner border border-[#E2E8F0]">
              {["All", "SEMINARS", "WORKSHOP", "CPD PROGRAMS", "NETWORKING"].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    selectedCategory === cat ? "bg-white text-[#1730A8] shadow-lg" : "text-[#4A5568] hover:bg-white/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-40 bg-[#F8FAFC] rounded-[60px] border-4 border-dashed border-[#E2E8F0] animate-pulse">
              <Loader2 className="w-16 h-16 text-[#1730A8] animate-spin mb-6" />
              <p className="text-[#0A192F] font-black uppercase tracking-[0.4em] text-sm">Loading premium events...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-40 bg-white rounded-[60px] border-4 border-dashed border-red-100 shadow-sm">
              <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
              <p className="text-[#0A192F] font-black text-3xl mb-4">Connection Issue</p>
              <p className="text-[#4A5568] font-medium mb-12 max-w-lg text-center text-lg leading-relaxed">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-12 py-5 bg-[#1730A8] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#112480] hover:-translate-y-1 transition-all shadow-2xl"
              >
                Retry Connection
              </button>
            </div>
          ) : currentEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-40 bg-[#F8FAFC] rounded-[60px] border-4 border-dashed border-[#E2E8F0]">
              <div className="w-32 h-32 bg-[#E2E8F0] rounded-full flex items-center justify-center mb-8">
                 <Search size={48} className="text-[#94A3B8]" />
              </div>
              <p className="text-[#0A192F] font-black text-3xl mb-4">No events found</p>
              <p className="text-[#4A5568] font-bold text-lg mb-12">We couldn't find any results matching your current filters.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSelectedCity("All Cities"); setSearchQuery(""); }}
                className="px-12 py-5 bg-[#002143] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#1730A8] transition-all shadow-xl"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {currentEvents.map((event) => (
                <Link 
                  key={event.id} 
                  href={`/events/${event.id}`}
                  className="group bg-white rounded-[48px] border-2 border-[#F1F5F9] overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all flex flex-col hover:-translate-y-3 relative border-b-[8px] border-b-transparent hover:border-b-[#FFB020]"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-2xl text-[10px] font-black text-[#0A192F] uppercase tracking-widest shadow-xl border border-white">
                        {event.category}
                      </span>
                    </div>
                    {event.isCpdAccredited && (
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-[#FFB020] px-5 py-2.5 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest shadow-2xl border-2 border-white/20">
                          CPD ACCREDITED
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex flex-col items-center justify-center w-14 h-14 bg-[#F8FAFC] rounded-[20px] border-2 border-[#F1F5F9] shadow-sm">
                        <span className="text-[11px] font-black text-[#1730A8] uppercase leading-none mb-1">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                        <span className="text-lg font-black text-[#0A192F] leading-none">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-[#94A3B8] font-black text-[11px] uppercase tracking-widest">
                          <MapPin size={14} className="text-[#1730A8]" />
                          {event.city}
                        </div>
                        <div className="flex items-center gap-4 text-[#94A3B8] font-black text-[11px] uppercase tracking-widest mt-1.5">
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-[#FFB020]" />
                            {event.startTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-[#0A192F] mb-6 leading-tight group-hover:text-[#1730A8] transition-colors line-clamp-2 min-h-[64px]">{event.title}</h3>
                    <div className="mt-auto pt-8 border-t-2 border-[#F8FAFC] flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-1">Pass starting at</p>
                        <p className="text-2xl font-black text-[#0A192F]">{event.price > 0 ? `₱${event.price.toLocaleString()}` : "FREE"}</p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border-2 border-[#F1F5F9] flex items-center justify-center text-[#1730A8] group-hover:bg-[#1730A8] group-hover:text-white group-hover:rotate-45 transition-all shadow-sm">
                        <ChevronRight size={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          {!isLoading && !error && totalPages > 1 && (
            <div className="mt-24 flex flex-col items-center gap-10">
              <div className="h-1 w-24 bg-[#E2E8F0] rounded-full" />
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setActivePage(1)}
                  disabled={activePage === 1}
                  className="w-14 h-14 rounded-2xl bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronFirst size={22} />
                </button>
                <button 
                  onClick={() => setActivePage(p => Math.max(1, p - 1))}
                  disabled={activePage === 1}
                  className="w-14 h-14 rounded-2xl bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronLeft size={22} />
                </button>
                
                <div className="flex gap-3">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setActivePage(pageNum)}
                        className={`w-14 h-14 rounded-2xl font-black text-sm transition-all shadow-md ${
                          activePage === pageNum 
                            ? "bg-[#1730A8] text-white scale-110 shadow-[#1730A8]/30" 
                            : "bg-white border-2 border-[#E2E8F0] text-[#4A5568] hover:border-[#1730A8] hover:text-[#1730A8]"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button 
                  onClick={() => setActivePage(p => Math.min(totalPages, p + 1))}
                  disabled={activePage === totalPages}
                  className="w-14 h-14 rounded-2xl bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronRight size={22} />
                </button>
                <button 
                  onClick={() => setActivePage(totalPages)}
                  disabled={activePage === totalPages}
                  className="w-14 h-14 rounded-2xl bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronLast size={22} />
                </button>
              </div>
              <p className="text-[12px] font-black text-[#94A3B8] uppercase tracking-[0.3em]">Page {activePage} of {totalPages}</p>
            </div>
          )}
        </div>
      </section>

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
