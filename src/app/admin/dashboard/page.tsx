"use client";
import React from 'react';
import { 
    Calendar, 
    Clock, 
    Users, 
    BarChart, 
    ChevronLeft, 
    ChevronRight,
    MoreHorizontal
} from 'lucide-react';
import { 
    BarChart as RechartsBarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';

const stats = [
    { label: 'Upcoming events', value: '8', icon: Calendar, color: 'text-white', bgColor: 'bg-[#EF4444]' },
    { label: 'Pending approvals', value: '3', icon: Clock, color: 'text-white', bgColor: 'bg-[#F6A51B]' },
    { label: 'Total Users', value: '186', icon: Users, color: 'text-white', bgColor: 'bg-[#1730A8]' },
    { label: 'Revenue this month', value: '₱223k', icon: BarChart, color: 'text-white', bgColor: 'bg-[#10B981]' },
];

const chartData = [
    { name: 'Jun 1', value: 5.5 },
    { name: 'Jun 2', value: 4 },
    { name: 'Jun 3', value: 6.5 },
    { name: 'Jun 4', value: 5.2 },
    { name: 'Jun 5', value: 3.5 },
    { name: 'Jun 6', value: 5.1 },
    { name: 'Jun 7', value: 4 },
];

const pendingApprovals = [
    { id: 1, title: 'Legal Updates 2026', org: 'Property Pro Org', date: 'Apr 8' },
    { id: 2, title: 'Legal Updates 2026', org: 'Property Pro Org', date: 'Apr 8' },
    { id: 3, title: 'Legal Updates 2026', org: 'Property Pro Org', date: 'Apr 8' },
    { id: 4, title: 'Legal Updates 2026', org: 'Property Pro Org', date: 'Apr 8' },
];

const recentRegistrations = [
    { name: 'J. Dela Cruz', event: 'Legal Updates', image: 'https://i.pravatar.cc/150?u=1' },
    { name: 'J. Dela Cruz', event: 'Legal Updates', image: 'https://i.pravatar.cc/150?u=2' },
    { name: 'J. Dela Cruz', event: 'Legal Updates', image: 'https://i.pravatar.cc/150?u=3' },
    { name: 'J. Dela Cruz', event: 'Legal Updates', image: 'https://i.pravatar.cc/150?u=4' },
];

export default function Dashboard() {
    return (
        <div className="space-y-8 pb-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-soft flex items-center gap-6 hover:shadow-premium-md transition-all duration-300">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg", stat.bgColor)}>
                            <stat.icon className={cn("w-6 h-6", stat.color)} />
                        </div>
                        <div>
                            <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-3xl font-black text-gray-900 mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Registration Chart */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[48px] border border-gray-100 shadow-soft">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-xl font-black tracking-tight text-[#0A192F]">Registration this month</h3>
                            <p className="text-sm text-gray-400 font-bold mt-2">Total: <span className="text-[#F6A51B] font-black">43</span></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#1123AD] rounded-full" />
                                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Registration</span>
                            </div>
                            <div className="flex gap-2 bg-gray-50 p-1.5 rounded-xl">
                                <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg text-[#1123AD] transition-all">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg text-[#1123AD] transition-all">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid vertical={false} stroke="#F1F5F9" strokeDasharray="3 3" />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 700 }}
                                    dy={15}
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 700 }}
                                />
                                <Tooltip 
                                    cursor={{ fill: '#F8FAFC', radius: 10 }}
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px -20px rgba(0,0,0,0.1)' }}
                                />
                                <Bar 
                                    dataKey="value" 
                                    fill="#1123AD" 
                                    radius={[8, 8, 8, 8]} 
                                    barSize={45}
                                />
                            </RechartsBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Calendar Widget */}
                <div className="bg-[#1123AD] text-white p-10 rounded-[48px] shadow-premium-lg relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-2xl font-black tracking-tight">Calendar</h3>
                            <div className="p-2 bg-white/10 rounded-xl cursor-not-allowed">
                                <MoreHorizontal className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-8">
                            <button className="p-2 hover:bg-white/10 rounded-xl transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                            <span className="text-lg font-black tracking-tight">September 2021</span>
                            <button className="p-2 hover:bg-white/10 rounded-xl transition-colors"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                        <div className="grid grid-cols-7 gap-y-6 text-center">
                            {['SAN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                                <span key={day} className="text-[10px] font-black opacity-40 tracking-[0.2em]">{day}</span>
                            ))}
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(date => {
                                const isSelected = date === 30;
                                let bgColor = "";
                                if (date === 10) bgColor = "bg-orange-500 shadow-[0_10px_20px_rgba(249,115,22,0.4)]";
                                if (date === 19) bgColor = "bg-red-500 shadow-[0_10px_20px_rgba(239,68,68,0.4)]";
                                if (date === 7) bgColor = "bg-green-500 shadow-[0_10px_20px_rgba(34,197,94,0.4)]";
                                if (date === 30) bgColor = "bg-blue-400 shadow-[0_10px_20px_rgba(96,165,250,0.4)]";

                                return (
                                    <div key={date} className="flex items-center justify-center p-0.5">
                                        <span className={cn(
                                            "w-10 h-10 flex items-center justify-center rounded-xl text-sm font-black transition-all cursor-pointer",
                                            bgColor ? bgColor : "hover:bg-white/10 opacity-80 hover:opacity-100"
                                        )}>
                                            {date}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-[80px]" />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Pending Event Approvals */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[48px] border border-gray-100 shadow-soft">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-black tracking-tight">Pending event approvals</h3>
                        <div className="flex items-center gap-2 cursor-pointer bg-gray-50 px-5 py-2.5 rounded-2xl hover:bg-gray-100 transition-colors">
                            <span className="text-sm font-black text-[#1123AD]">All Events</span>
                            <ChevronDown className="w-4 h-4 text-[#1123AD]" />
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        {pendingApprovals.map((item) => (
                            <div key={item.id} className="bg-gray-50/30 p-8 rounded-[32px] flex items-center justify-between group hover:bg-white hover:shadow-premium-md transition-all duration-300 border border-transparent hover:border-gray-100">
                                <div>
                                    <h4 className="text-lg font-black text-gray-900 group-hover:text-[#1123AD] transition-colors">{item.title}</h4>
                                    <p className="text-sm font-bold text-gray-400 mt-1.5 uppercase tracking-widest">{item.org} <span className="mx-2 opacity-30">|</span> {item.date}</p>
                                </div>
                                <button className="bg-[#1123AD] hover:bg-[#0A192F] text-white px-10 py-4 rounded-[20px] text-xs font-black uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-premium-md">
                                    Review
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Registration */}
                <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-soft self-start">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-black tracking-tight">Recent Registration</h3>
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-50 rounded-xl cursor-pointer">
                                <MoreHorizontal className="w-5 h-5 text-gray-400" />
                            </div>
                            <span className="text-sm font-bold text-[#1123AD] cursor-pointer hover:underline underline-offset-4 decoration-2">View all</span>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        {recentRegistrations.map((user, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white p-2 rounded-[24px] hover:translate-x-2 transition-transform cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-[20px] overflow-hidden border-4 border-gray-50 shadow-sm">
                                        <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-gray-900">{user.name}</h4>
                                        <p className="text-[10px] uppercase font-black text-orange-500 tracking-[0.15em] mt-1">{user.event}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
