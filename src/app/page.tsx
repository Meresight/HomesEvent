"use client";
import React, { useState, useEffect } from 'react';
import { 
    Calendar as CalendarIcon, 
    Users, 
    Banknote, 
    ChevronLeft, 
    ChevronRight,
    Search,
    Filter
} from 'lucide-react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    Cell
} from 'recharts';
import StatCard from '@/components/shared/StatCard';

const chartData = [
    { name: 'Jun 1', value: 6 },
    { name: 'Jun 2', value: 4 },
    { name: 'Jun 3', value: 7 },
    { name: 'Jun 4', value: 6 },
    { name: 'Jun 5', value: 3 },
    { name: 'Jun 6', value: 8 },
    { name: 'Jun 7', value: 5 },
];

const availableEvents = [
    {
        id: 1,
        title: 'CPD Ethics Seminar',
        date: 'Dec 23, 2024',
        time: '12:00AM - 02:30PM',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
        tags: ['Education', 'CPD'],
        price: 'Free'
    },
    {
        id: 2,
        title: 'Real Estate Coaching',
        date: 'Dec 25, 2024',
        time: '09:00AM - 11:30AM',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
        tags: ['Coaching'],
        price: '₱500'
    }
];

export default function HomePage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex flex-col gap-12 pb-24">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard 
                    title="Total Events" 
                    value="12" 
                    icon={CalendarIcon} 
                    iconColor="orange" 
                />
                <StatCard 
                    title="Total Registered" 
                    value="1,286" 
                    icon={Users} 
                    iconColor="blue" 
                />
                <StatCard 
                    title="Total Revenue" 
                    value="₱423k" 
                    icon={Banknote} 
                    iconColor="green" 
                />
            </div>

            {/* Middle Section: Chart & Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                {/* Registration Chart */}
                <div className="lg:col-span-2 bg-white p-12 rounded-[48px] border border-[#F1F5F9] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] flex flex-col h-full relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
                    
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div>
                            <h3 className="text-2xl font-black text-[#0A192F] tracking-tight mb-2">Registration Performance</h3>
                            <div className="flex items-center gap-3">
                                <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest bg-[#F8FAFC] px-3 py-1 rounded-full">Monthly Trends</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                             <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-1">Current total</span>
                             <span className="text-3xl font-black text-[#FFB020] tracking-tighter">48 <span className="text-sm text-[#94A3B8] font-bold ml-1">New</span></span>
                        </div>
                    </div>
                    
                    <div className="h-[300px] w-full flex-grow relative z-10">
                        {isClient && (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0A192F" />
                                            <stop offset="100%" stopColor="#1e3a5f" />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                    <XAxis 
                                        dataKey="name" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 700 }}
                                        dy={10}
                                    />
                                    <YAxis 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 700 }}
                                    />
                                    <Tooltip 
                                        cursor={{ fill: '#F8FAFC', radius: 8 }}
                                        contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '16px' }}
                                    />
                                    <Bar 
                                        dataKey="value" 
                                        radius={[8, 8, 0, 0]} 
                                        barSize={40}
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 5 ? '#FFB020' : 'url(#barGradient)'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>

                    <div className="mt-10 flex items-center justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <button className="p-2.5 bg-white border border-[#F1F5F9] text-[#0A192F] rounded-xl hover:bg-[#F8FAFC] transition-all shadow-sm"><ChevronLeft size={18}/></button>
                            <button className="p-2.5 bg-white border border-[#F1F5F9] text-[#0A192F] rounded-xl hover:bg-[#F8FAFC] transition-all shadow-sm"><ChevronRight size={18}/></button>
                        </div>
                    </div>
                </div>

                {/* Mini Calendar Widget */}
                <div className="bg-[#0A192F] p-12 rounded-[48px] shadow-[0_20px_50px_-20px_rgba(10,25,47,0.3)] h-full flex flex-col text-white group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <h3 className="text-2xl font-black tracking-tight mb-12 relative z-10">Event Calendar</h3>
                    
                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <div className="flex gap-4 items-center">
                             <ChevronLeft size={20} className="text-white/30 cursor-pointer hover:text-[#FFB020] transition-colors" />
                             <h4 className="text-xs font-black uppercase tracking-[0.3em]">Sept 2021</h4>
                             <ChevronRight size={20} className="text-white/30 cursor-pointer hover:text-[#FFB020] transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-y-6 text-center relative z-10">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                            <span key={`${day}-${index}`} className="text-[10px] font-black text-white/20 uppercase tracking-tighter">{day}</span>
                        ))}
                        {[...Array(30)].map((_, i) => (
                            <div key={i} className="flex items-center justify-center">
                                <span className={`w-10 h-10 flex items-center justify-center rounded-2xl text-xs font-bold transition-all cursor-pointer relative ${
                                    i + 1 === 19 ? 'text-white border border-white group/date' : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}>
                                    {i + 1}
                                    {i + 1 === 19 && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FFB020] rounded-full shadow-[0_0_10px_#FFB020]" />}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-10 relative z-10">
                        <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
                            View All Events
                        </button>
                    </div>
                </div>
            </div>

            {/* Available Events Section */}
            <div className="flex flex-col gap-10">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-3xl font-black text-[#0A192F] tracking-tight">Available Events</h3>
                        <p className="text-sm font-bold text-[#94A3B8] mt-1">Recommended for your CPD requirements</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="p-3 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm text-[#0A192F] hover:bg-[#F8FAFC] transition-all"><Search size={20}/></button>
                        <button className="p-3 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm text-[#0A192F] hover:bg-[#F8FAFC] transition-all"><Filter size={20}/></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {availableEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-[48px] overflow-hidden border border-[#F1F5F9] shadow-[0_15px_45px_-20px_rgba(0,0,0,0.05)] group hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col hover:-translate-y-2">
                            <div className="h-72 relative overflow-hidden">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-8 left-8 flex gap-2">
                                    {event.tags.map(tag => (
                                        <span key={tag} className="bg-white/90 backdrop-blur-md text-[#0A192F] text-[9px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute bottom-8 right-8 bg-[#FFB020] text-[#0A192F] px-4 py-2 rounded-2xl font-black text-xs shadow-2xl">
                                    {event.price}
                                </div>
                            </div>
                            <div className="p-12">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-2xl font-black text-[#0A192F] leading-tight group-hover:text-[#2B5CFE] transition-colors">{event.title}</h4>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs font-black text-[#94A3B8] uppercase tracking-[0.2em]">{event.date}</p>
                                    <div className="text-sm text-[#2B5CFE] font-bold flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2B5CFE]" />
                                        {event.time}
                                    </div>
                                </div>
                                <button className="mt-8 w-full py-4 bg-[#F8FAFC] group-hover:bg-[#0A192F] text-[#0A192F] group-hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-sm group-hover:shadow-xl">
                                    View Event Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <button className="group flex items-center gap-4 px-12 py-5 border-2 border-[#FFB020] text-[#FFB020] rounded-full text-sm font-black hover:bg-[#FFB020] hover:text-white transition-all shadow-2xl hover:shadow-[#FFB020]/20">
                        Load More Experiences
                        <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
