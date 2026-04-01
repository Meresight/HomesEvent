"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Calendar,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Clock
} from "lucide-react";

const cities = [
  { name: "MANILA", events: "57,000 EVENTS", image: "/manila.jpg" },
  { name: "CEBU CITY", events: "24,000 EVENTS", image: "/cebu.jpg" },
  { name: "BOHOL", events: "12,000 EVENTS", image: "/bohol.jpg" },
  { name: "DAVAO", events: "18,000 EVENTS", image: "/davao.jpg" },
  { name: "BAGUIO", events: "9,000 EVENTS", image: "/baguio.jpg" }
];

const mockEvents = [
  { id: 1, title: "Puerto Rico's Rum Fest - Taste Of Rum", date: "Monday, April 14, 2025", time: "9:00 AM - 5:00 PM", category: "WORKSHOP", city: "Cebu City", image: "/Rectangle 12427.png" },
  { id: 2, title: "Mastering the Code: Real Estate Ethics", date: "Tuesday, April 15, 2025", time: "10:00 AM - 4:00 PM", category: "SEMINARS", city: "Manila", image: "/Rectangle 12428.png" },
  { id: 3, title: "Property Management Summit", date: "Wednesday, April 16, 2025", time: "9:00 AM - 5:00 PM", category: "CPD PROGRAMS", city: "Davao", image: "/Rectangle 12427.png" },
  { id: 4, title: "Broker Networking Night", date: "Thursday, April 17, 2025", time: "6:00 PM - 9:00 PM", category: "NETWORKING", city: "Quezon City", image: "/Rectangle 12428.png" },
  { id: 5, title: "Rum Fest Manila Edition", date: "Friday, April 18, 2025", time: "1:00 PM - 8:00 PM", category: "WORKSHOP", city: "Manila", image: "/Rectangle 12427.png" },
  { id: 6, title: "Legal Aspects of Real Estate", date: "Saturday, April 19, 2025", time: "9:00 AM - 12:00 PM", category: "SEMINARS", city: "Cebu City", image: "/Rectangle 12428.png" },
  { id: 7, title: "Modern Condo Sales Tactics", date: "Sunday, April 20, 2025", time: "10:00 AM - 3:00 PM", category: "WORKSHOP", city: "Manila", image: "/Rectangle 12427.png" },
  { id: 8, title: "CPD Final Review 2025", date: "Monday, April 21, 2025", time: "8:00 AM - 5:00 PM", category: "CPD PROGRAMS", city: "Baguio", image: "/Rectangle 12428.png" },
];

const categories = [
  { name: "SEMINARS", image: "/seminar.jpg" },
  { name: "WORKSHOP", image: "/workshop_cat.jpg" },
  { name: "CPD PROGRAMS", image: "/cpd_cat.jpg" },
  { name: "NETWORKING", image: "/networking_cat.jpg" }
];

export default function DiscoverEventsPage() {
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCity = selectedCity === "All Cities" || event.city === selectedCity;
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      return matchesSearch && matchesCity && matchesCategory;
    });
  }, [searchQuery, selectedCity, selectedCategory]);

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
          <a href="#" className="text-[#4A5568] font-bold text-sm hover:text-[#002143]">Create Events</a>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">Login</Link>
          <Link href="/signup" className="px-6 py-2.5 bg-[#1730A8] text-white rounded-md font-bold text-sm hover:bg-[#112480] transition-all">Sign up</Link>
          <Link href="/landing" className="px-6 py-2.5 bg-[#F6A51B] text-white rounded-md font-bold text-sm hover:bg-[#E09418] transition-all">Back</Link>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background — same as landing page */}
        <img
          src="/Rectangle 12427.png"
          alt="Discover Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Blue gradient overlay like the home page */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#000a26]/90 via-[#00174f]/75 to-[#00174f]/55" />

        {/* LEFT CIRCLE */}
        <div className="absolute left-0 bottom-0 hidden xl:block translate-y-[20%] animate-fade-in">
          <div className="w-[280px] h-[280px] rounded-full overflow-hidden relative shadow-2xl border-[8px] border-white">
            <img src="/happy-multi-ethnic-business-couple-isolated-png 1.png" className="w-full h-full object-cover scale-[1.6] translate-y-6" />
          </div>
        </div>

        {/* RIGHT CIRCLE */}
        <div className="absolute right-0 top-0 hidden xl:block -translate-y-[10%] animate-fade-in-right">
          <div className="w-[320px] h-[320px] rounded-full overflow-hidden relative shadow-2xl border-[8px] border-white">
            <img src="/gettyimages-1496378856-612x612 2.png" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-white text-5xl lg:text-7xl font-black mb-4 tracking-tighter shadow-sm">
            Discover Events <span className="text-[#FFB020]">Here</span>
          </h1>
          <p className="text-white/90 text-lg font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            Events near you. More than 186 million events based on your interests. Worldwide.
          </p>

          {/* SEARCH BOX */}
          <div className="bg-white p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto border border-white/20 backdrop-blur-sm">
            <div className="flex-1 flex items-center px-6 gap-4 w-full">
              <Search className="text-[#94A3B8]" size={24} />
              <input 
                type="text" 
                placeholder="Search events, topics, speakers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 bg-transparent outline-none text-base font-bold text-[#0A192F]"
              />
            </div>
            <button className="bg-[#FFB020] text-white px-12 py-4 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-[#E09418] hover:scale-105 transition-all shadow-lg w-full md:w-auto">
              Search
            </button>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <select 
              className="bg-white/10 backdrop-blur-md border border-white/40 px-6 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest cursor-pointer outline-none hover:bg-white/20 transition-all appearance-none text-center min-w-[140px]"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option className="text-black">All Cities</option>
              <option className="text-black">Manila</option>
              <option className="text-black">Cebu City</option>
              <option className="text-black">Davao</option>
              <option className="text-black">Quezon City</option>
            </select>
            <div className="bg-white/10 backdrop-blur-md border border-white/40 px-6 py-3 rounded-full flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest cursor-pointer hover:bg-white/20 transition-all">
              Any Date <ChevronRight size={14} className="rotate-90" />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/40 px-6 py-3 rounded-full flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest cursor-pointer hover:bg-white/20 transition-all">
              Any Price <ChevronRight size={14} className="rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRENDING CITIES ─── */}
      <section className="py-24 px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="mb-12">
          <p className="text-[#FFB020] text-xs font-black uppercase tracking-[0.3em] mb-3">EXPLORE LOCATIONS</p>
          <h2 className="text-4xl font-black text-[#0A192F] tracking-tight">Trending <span className="text-[#1730A8]">Cities</span></h2>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
          {cities.map((city, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedCity(city.name === "MANILA" ? "Manila" : city.name === "CEBU CITY" ? "Cebu City" : "All Cities")}
              className={`min-w-[320px] h-52 rounded-[32px] overflow-hidden relative group cursor-pointer transition-all border-b-[8px] ${selectedCity.toUpperCase() === city.name ? "border-[#FFB020] shadow-2xl scale-[1.02]" : "border-transparent hover:border-[#1730A8]"}`}
            >
              <img src={city.image || "/manila.jpg"} alt={city.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-black text-xl mb-1">{city.name}</h3>
                <p className="text-white/70 text-[10px] font-black tracking-widest uppercase">{city.events}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-10">
            {["Quezon City", "Baguio City", "Davao", "Samar", "Leyte", "Cagayan", "Iloilo"].map((loc, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedCity(loc)}
                  className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest border transition-all ${selectedCity === loc ? "bg-[#0A192F] text-white border-[#0A192F] shadow-lg" : "bg-white text-[#4A5568] border-[#E2E8F0] hover:border-[#FFB020]"}`}
                >
                    {loc}
                </button>
            ))}
        </div>
      </section>

      {/* ─── FEATURED EVENTS GRID ─── */}
      <section className="py-24 bg-[#F8FAFC] px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <p className="text-[#FFB020] text-xs font-black uppercase tracking-[0.3em] mb-3">HANDPICKED FOR YOU</p>
              <h2 className="text-4xl font-black text-[#0A192F] tracking-tight">Featured <span className="text-[#1730A8]">Events</span></h2>
            </div>
            <div className="flex gap-2">
                {["All", "Seminars", "Workshop", "CPD Programs"].map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? "bg-[#1730A8] text-white" : "bg-white border border-[#E2E8F0] text-[#4A5568] hover:border-[#1730A8]"}`}
                    >
                      {cat}
                    </button>
                ))}
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {filteredEvents.map((event, i) => (
                <div key={i} className="bg-white rounded-[40px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all border border-[#E2E8F0] hover:-translate-y-2 relative border-b-[6px] border-b-transparent hover:border-b-[#FFB020]">
                  <div className="h-72 relative overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent p-8 flex flex-col justify-end">
                      <span className="bg-white/20 backdrop-blur-xl text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-lg w-fit mb-4 border border-white/20">
                        {event.category}
                      </span>
                      <h3 className="text-white font-black text-xl leading-tight mb-4 group-hover:text-[#FFB020] transition-colors">{event.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2.5 text-white/80 text-[10px] font-black uppercase tracking-widest">
                          <Calendar size={14} className="text-[#FFB020]" /> {event.date}
                        </div>
                        <div className="flex items-center gap-2.5 text-white/80 text-[10px] font-black uppercase tracking-widest">
                          <Clock size={14} className="text-[#FFB020]" /> {event.time}
                        </div>
                        <div className="flex items-center gap-2.5 text-white/80 text-[10px] font-black uppercase tracking-widest">
                          <MapPin size={14} className="text-[#FFB020]" /> {event.city}
                        </div>
                      </div>
                      <Link href={`/events/${event.id}`} className="mt-8 bg-[#1730A8] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-[#112480] hover:scale-105 transition-all shadow-lg">
                        Lets Go
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-white rounded-[40px] border-2 border-dashed border-[#E2E8F0]">
                <Search size={48} className="mx-auto text-[#E2E8F0] mb-6" />
                <h3 className="text-2xl font-black text-[#0A192F] mb-2 uppercase">No Events Found</h3>
                <p className="text-[#94A3B8] font-bold">Try adjusting your filters or search keywords.</p>
                <button onClick={() => { setSearchQuery(""); setSelectedCity("All Cities"); setSelectedCategory("All"); }} className="mt-8 text-[#1730A8] font-black uppercase tracking-widest text-xs border-b-2 border-[#1730A8]">Reset Filters</button>
            </div>
          )}

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-3 mt-24 font-bold">
            <button className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] text-[#4A5568] flex items-center justify-center hover:bg-[#1730A8] hover:text-white transition-all shadow-sm"><ChevronFirst size={20} /></button>
            <button className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] text-[#4A5568] flex items-center justify-center hover:bg-[#1730A8] hover:text-white transition-all shadow-sm"><ChevronLeft size={20} /></button>
            {[1, 2, 3, "...", 10].map((p, i) => (
              <button 
                key={i} 
                onClick={() => typeof p === 'number' && setActivePage(p)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm ${activePage === p ? "bg-[#1730A8] text-white scale-110" : "bg-white border border-[#E2E8F0] text-[#4A5568] hover:border-[#1730A8] hover:bg-[#F8FAFC]"}`}
              >
                {p}
              </button>
            ))}
            <button className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] text-[#4A5568] flex items-center justify-center hover:bg-[#1730A8] hover:text-white transition-all shadow-sm"><ChevronRight size={20} /></button>
            <button className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] text-[#4A5568] flex items-center justify-center hover:bg-[#1730A8] hover:text-white transition-all shadow-sm"><ChevronLast size={20} /></button>
          </div>
        </div>
      </section>

      {/* ─── EVENTS NEAR YOU (MAP) ─── */}
      <section className="py-32 px-6 lg:px-10 max-w-[1440px] mx-auto">
        <p className="text-[#FFB020] text-xs font-black uppercase tracking-[0.3em] mb-3">FIND NEAREST EVENT</p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          <h2 className="text-4xl font-black text-[#0A192F] tracking-tight">Events <span className="text-[#1730A8]">Near You</span></h2>
          <div className="relative w-full max-w-2xl group">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#1730A8] transition-colors" size={22} />
             <input type="text" placeholder="Search areas, addresses, or landmarks..." className="w-full pl-16 pr-32 py-5 bg-white border-2 border-[#F1F5F9] rounded-[24px] text-base font-bold shadow-sm focus:border-[#1730A8] focus:shadow-xl outline-none transition-all" />
             <button className="absolute right-3 top-3 bottom-3 bg-[#FFB020] text-white px-8 rounded-[18px] font-black text-xs uppercase tracking-widest hover:bg-[#E09418] transition-all">Search</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 h-[650px] bg-[#F1F5F9] rounded-[48px] relative overflow-hidden border-2 border-[#F1F5F9] shadow-inner group">
              {/* MOCK MAP */}
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/121.0244,14.5547,12,0/1200x800?access_token=mock')] bg-cover bg-center transition-all duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-8 py-4 bg-white/90 backdrop-blur-xl rounded-full border-2 border-white shadow-2xl font-black text-[#0A192F] uppercase tracking-widest text-xs">INTERACTIVE MAP VIEW</div>
              </div>
              
              {/* MAP PINS */}
              <div className="absolute top-1/4 left-1/4 animate-bounce hover:scale-125 transition-transform cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#FFB020]">
                    <MapPin className="text-[#FFB020]" size={24} />
                  </div>
              </div>
              <div className="absolute top-1/2 left-2/3 animate-bounce delay-75 hover:scale-125 transition-transform cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#FFB020]">
                    <MapPin className="text-[#FFB020]" size={24} />
                  </div>
              </div>
              <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-150 scale-150 hover:scale-[1.8] transition-transform cursor-pointer z-10">
                  <div className="w-12 h-12 bg-[#1730A8] rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <MapPin className="text-white" size={24} />
                  </div>
              </div>
          </div>
          
          <div className="flex flex-col gap-8">
             <div className="flex-1 bg-white rounded-[40px] overflow-hidden border border-[#E2E8F0] shadow-sm relative group cursor-pointer hover:shadow-2xl transition-all">
                <img src="/gettyimages-1496378856-612x612 2.png" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent p-8 flex flex-col justify-end">
                    <span className="bg-[#FFB020] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg w-fit mb-3">WORKSHOP</span>
                    <h4 className="text-white font-black text-lg mb-3 leading-tight group-hover:text-[#FFB020] transition-colors">Puerto Rico's Rum Fest - Taste Of Rum Capital</h4>
                    <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Makati City • Apr 14</p>
                </div>
             </div>
             
             <div className="h-1/3 grid grid-cols-2 gap-6">
                <div className="bg-[#1730A8] rounded-[32px] p-6 flex flex-col justify-end hover:scale-105 transition-all cursor-pointer shadow-lg border-2 border-white/10">
                  <h4 className="text-white font-black text-[11px] leading-tight uppercase">Mastering Ethics Manila</h4>
                  <p className="text-white/40 text-[8px] font-black mt-2">12 SLOTS LEFT</p>
                </div>
                <div className="bg-white rounded-[32px] border-2 border-[#F1F5F9] p-6 flex flex-col justify-end hover:scale-105 transition-all cursor-pointer shadow-sm hover:border-[#FFB020]">
                  <h4 className="text-[#0A192F] font-black text-[11px] leading-tight uppercase">Condo Sales Baguio</h4>
                  <p className="text-[#94A3B8] text-[8px] font-black mt-2 underline">SEE DETAILS</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── BROWSE BY CATEGORIES ─── */}
      <section className="py-32 px-6 lg:px-10 max-w-[1440px] mx-auto bg-white">
        <div className="mb-16">
          <p className="text-[#FFB020] text-xs font-black uppercase tracking-[0.3em] mb-3 leading-none">EXPLORE</p>
          <h2 className="text-4xl font-black text-[#0A192F] tracking-tight leading-none uppercase">Browse By <span className="text-[#1730A8]">Categories</span></h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((cat, i) => (
            <div key={i} className={`h-56 rounded-[32px] overflow-hidden relative group cursor-pointer border-b-[8px] transition-all hover:-translate-y-2 hover:shadow-2xl ${selectedCategory === cat.name ? "border-[#1730A8]" : "border-transparent hover:border-[#FFB020]"}`}>
              <img src={cat.image || "/seminar.jpg"} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-[#1730A8]/60 transition-all flex items-center justify-center text-center px-6">
                <h3 className="text-white font-black text-2xl tracking-[0.1em] uppercase">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
            {["Seminars", "Workshop", "CPD Programs", "Networking", "Venue", "Legal", "Health", "Technical"].map((cat, i) => (
                <button 
                  key={i} 
                  className={`px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border transition-all ${i === 0 ? "bg-[#0A192F] text-white border-[#0A192F] shadow-xl" : "bg-white text-[#4A5568] border-[#F1F5F9] hover:border-[#FFB020] hover:shadow-md"}`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1730A8] pt-20 pb-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 px-10 md:px-20">
          <div className="lg:col-span-2">
            <img src="/Group 483036.png" alt="Homes.ph Events" className="h-10 mb-8 brightness-0 invert" />
            <p className="text-white/80 text-sm font-medium leading-relaxed mb-6 max-w-sm">
              Your trusted partner in finding the perfect home. Connecting Filipinos with quality properties nationwide.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Facebook size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Instagram size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors"><Twitter size={18} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-base mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/landing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Home</Link></li>
              <li><Link href="/my-tickets" className="text-white/80 hover:text-white text-sm font-medium transition-colors">My Tickets</Link></li>
              <li><Link href="/events" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Discover Events</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Create Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQs</a></li>
              <li><Link href="/login" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Login</Link></li>
              <li><Link href="/signup" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-base mb-6">Contact Us</h4>
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
