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
        title: 'Property Management Seminar',
        date: 'December 23,2024',
        time: 'March 1, 2024 • 12:00AM - 3:30pm',
        image: 'https://images.unsplash.com/photo-1591115765373-520b7a21769b?auto=format&fit=crop&q=80&w=800',
        tags: ['Education'],
        price: 'Free'
    }
];

const recentRegistrations = [
    { id: 1, name: 'J. Dela Cruz', event: 'Legal Updates', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'A. Santos', event: 'Ethics 101', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 3, name: 'M. Roxas', event: 'Brokerage', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 4, name: 'L. Gomez', event: 'Legal Updates', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
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
                    
                    <div className="flex justify-between items-center mb-8 relative z-10 w-full">
                        <h3 className="text-[1.35rem] font-bold text-[#002143] tracking-tight">Registration this month</h3>
                        <div className="flex items-center gap-2">
                             <span className="text-[13px] font-medium text-[#002143] mr-2">Registration</span>
                             <button className="p-1 bg-[#1730A8] text-white rounded-md shadow-sm hover:bg-[#112480] transition-colors"><ChevronLeft size={16}/></button>
                             <button className="p-1 bg-[#1730A8] text-white rounded-md shadow-sm hover:bg-[#112480] transition-colors"><ChevronRight size={16}/></button>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-end w-full mb-6 relative z-10 pl-[25%] pr-4">
                        <span className="text-[12px] font-medium text-[#8D9CAE]">6 Registered</span>
                        <div className="text-[15px] font-bold text-[#002143]">
                            Total: <span className="text-[#FFB020]">43</span>
                        </div>
                    </div>
                    
                    <div className="h-[300px] w-full flex-grow relative z-10">
                        {isClient && (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>

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
                                        radius={[4, 4, 0, 0]} 
                                        barSize={32}
                                        fill="#1730A8"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>


                </div>

                {/* Mini Calendar Widget */}
                <div className="bg-[#1730A8] p-10 pb-12 rounded-[32px] shadow-[0_20px_50px_-20px_rgba(23,48,168,0.4)] h-full flex flex-col text-white group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <h3 className="text-xl font-bold tracking-tight mb-10 relative z-10">Calendar</h3>
                    
                    <div className="flex justify-center items-center mb-8 relative z-10">
                        <div className="flex gap-4 items-center">
                             <ChevronLeft size={16} className="text-white cursor-pointer hover:text-white/60 transition-colors" />
                             <h4 className="text-[13px] font-medium tracking-wide">September 2021</h4>
                             <ChevronRight size={16} className="text-white cursor-pointer hover:text-white/60 transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center relative z-10 px-2">
                        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
                            <span key={`${day}-${index}`} className="text-[9px] font-bold text-white uppercase tracking-wider mb-2">{day}</span>
                        ))}
                        {[...Array(31)].map((_, i) => {
                            const date = i + 1;
                            let dateClass = "text-white/90 hover:text-white hover:bg-white/10";
                            if (date === 7) dateClass = "bg-[#10B981] text-white shadow-md";
                            if (date === 10) dateClass = "bg-[#F59E0B] text-white shadow-md";
                            if (date === 19) dateClass = "bg-[#EF4444] text-white shadow-md";
                            if (date === 30) dateClass = "border-2 border-[#60A5FA] text-white";

                            return (
                                <div key={i} className="flex items-center justify-center">
                                    <span className={`w-8 h-8 flex items-center justify-center rounded-full text-[12px] transition-all cursor-pointer ${dateClass}`}>
                                        {date}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Available Events & Recent Registration Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-stretch">
                {/* Available Events Column */}
                <div className="xl:col-span-2 bg-white p-12 rounded-[48px] border border-[#F1F5F9] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden group/container flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-3xl font-black text-[#002143] tracking-tight">Available Events</h3>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#002143]" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]/30" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]/30" />
                            </div>
                            <span className="text-[11px] font-black text-[#002143] cursor-pointer hover:underline uppercase tracking-widest bg-[#F8FAFC] px-4 py-2 rounded-full transition-all hover:bg-[#F1F5F9]">View all</span>
                        </div>
                    </div>

                    <div className="flex gap-10 overflow-x-auto pb-8 scrollbar-hide snap-x flex-grow">
                        {availableEvents.map(event => (
                            <div key={event.id} className="min-w-[450px] bg-white rounded-[40px] overflow-hidden border border-[#F1F5F9] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col hover:-translate-y-2 snap-start">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute top-8 left-8 flex gap-2">
                                        {event.tags.map(tag => (
                                            <span key={tag} className="bg-[#002143]/80 backdrop-blur-md text-white text-[9px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <h4 className="text-2xl font-black text-[#002143] leading-tight mb-3 group-hover:text-[#002143] transition-colors">{event.title}</h4>
                                    <div className="mt-auto">
                                        <p className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-4">{event.date}</p>
                                        <div className="flex items-center gap-2 text-[11px] font-bold text-[#002143] bg-[#002143]/5 px-4 py-2 rounded-xl w-fit">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#002143] animate-pulse" />
                                            {event.time}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Registration Column */}
                <div className="bg-white p-12 rounded-[48px] border border-[#F1F5F9] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] flex flex-col h-full">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-2xl font-black text-[#002143] tracking-tight">Recent Registration</h3>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#002143]" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]/30" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]/30" />
                            </div>
                            <span className="text-[11px] font-black text-[#002143] cursor-pointer hover:underline uppercase tracking-widest bg-[#F8FAFC] px-4 py-2 rounded-full transition-all hover:bg-[#F1F5F9]">View all</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 flex-grow">
                        {recentRegistrations.map(reg => (
                            <div key={reg.id} className="flex items-center justify-between p-5 bg-white border border-[#F1F5F9] rounded-[32px] hover:shadow-xl transition-all group/item hover:-translate-y-1 duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#F1F5F9] group-hover/item:border-[#002143]/20 transition-all shadow-sm">
                                        <img src={reg.avatar} alt={reg.name} className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-[#002143]">{reg.name}</p>
                                        <p className="text-[10px] font-black text-[#FF8A00] uppercase tracking-widest mt-0.5">{reg.event}</p>
                                    </div>
                                </div>
                                <button className="text-[10px] font-black text-[#002143] uppercase tracking-widest hover:text-white transition-colors bg-[#F8FAFC] px-5 py-3 rounded-xl group-hover/item:bg-[#002143] group-hover/item:shadow-[0_10px_20px_-5px_rgba(0,33,67,0.4)] transition-all">Details</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
