"use client";
import React from 'react';
import { 
    Calendar, 
    Users, 
    Clock, 
    BarChart, 
    ChevronLeft, 
    ChevronRight,
    Search,
    ChevronDown
} from 'lucide-react';
import { 
    BarChart as RechartsBarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    Cell
} from 'recharts';
import { cn } from '@/lib/utils';

const stats = [
    { label: 'Total Events', value: '28', icon: Calendar, color: 'text-white', bgColor: 'bg-[#F6A51B]' },
    { label: 'Total Registration', value: '343', icon: Users, color: 'text-white', bgColor: 'bg-[#1730A8]' },
    { label: 'CPD hrs issued', value: '186', icon: Clock, color: 'text-white', bgColor: 'bg-[#9333EA]' },
    { label: 'Total Revenue', value: '₱223k', icon: BarChart, color: 'text-white', bgColor: 'bg-[#10B981]' },
];

const mainChartData = [
    { name: 'Jun 1', value: 5.5 },
    { name: 'Jun 2', value: 4 },
    { name: 'Jun 3', value: 6.5 },
    { name: 'Jun 4', value: 5.2 },
    { name: 'Jun 5', value: 3.5 },
    { name: 'Jun 6', value: 5.1 },
    { name: 'Jun 7', value: 4 },
];

const categoryData = [
    { name: 'Seminars', value: 480, color: '#3154DF' },
    { name: 'Workshops', value: 210, color: '#10B981' },
    { name: 'Conference', value: 180, color: '#60A5FA' },
    { name: 'Technical', value: 130, color: '#F6A51B' },
    { name: 'Ethics', value: 80, color: '#EF4444' },
    { name: 'Legal', value: 280, color: '#8B5CF6' },
    { name: 'Other', value: 190, color: '#94A3B8' },
];

const topEvents = [
    { title: 'Legal % Updates', org: 'Prooperty Pro Org', date: 'Apr 14', registered: '78/80', revenue: '₱ 93.6k' },
    { title: 'Legal % Updates', org: 'Prooperty Pro Org', date: 'Apr 14', registered: '78/80', revenue: '₱ 93.6k' },
    { title: 'Legal % Updates', org: 'Prooperty Pro Org', date: 'Apr 14', registered: '78/80', revenue: '₱ 93.6k' },
    { title: 'Legal % Updates', org: 'Prooperty Pro Org', date: 'Apr 14', registered: '78/80', revenue: '₱ 93.6k' },
    { title: 'Legal % Updates', org: 'Prooperty Pro Org', date: 'Apr 14', registered: '78/80', revenue: '₱ 93.6k' },
];

const cpdDist = [
    { category: 'Technical', events: 12, totalHrs: '168 hrs', members: 142 },
    { category: 'Technical', events: 12, totalHrs: '168 hrs', members: 142 },
    { category: 'Technical', events: 12, totalHrs: '168 hrs', members: 142 },
];

export default function Reports() {
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

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Registration Chart */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[48px] border border-gray-100 shadow-soft">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-2xl font-black tracking-tight">Registration this month</h3>
                            <p className="text-sm text-gray-400 font-bold mt-2">Total: <span className="text-[#1123AD] font-black">43</span></p>
                        </div>
                        <div className="flex items-center gap-4">
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
                            <RechartsBarChart data={mainChartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid vertical={false} stroke="#F1F5F9" strokeDasharray="3 3" />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 700 }}
                                    dy={15}
                                />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 700 }} />
                                <Tooltip 
                                    cursor={{ fill: '#F8FAFC', radius: 10 }}
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px -20px rgba(0,0,0,0.1)' }}
                                />
                                <Bar dataKey="value" fill="#1123AD" radius={[8, 8, 8, 8]} barSize={45} />
                            </RechartsBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Monthly Registrations breakdown */}
                <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-soft">
                    <h3 className="text-2xl font-black mb-10 tracking-tight">Monthly registrations</h3>
                    <div className="space-y-6">
                        {categoryData.map((cat) => (
                            <div key={cat.name} className="space-y-2.5">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">
                                    <span>{cat.name} <span className="text-gray-200">/</span> ₱{cat.value}k</span>
                                </div>
                                <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden shadow-inner">
                                    <div 
                                        className="h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
                                        style={{ width: `${(cat.value / 600) * 100}%`, backgroundColor: cat.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Events Table */}
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black tracking-tight">Top events by attendance</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-[#1730A8] transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search here" 
                            className="w-full bg-white border border-[#C7D2FE] pl-16 pr-8 py-4.5 rounded-full text-[13px] focus:ring-4 focus:ring-[#1730A8]/5 outline-none shadow-sm transition-all font-medium text-gray-600 placeholder:text-gray-300"
                        />
                    </div>
                    <button className="bg-white border border-gray-100 px-10 py-5 rounded-[80px] text-sm font-black text-gray-500 flex items-center gap-4 shadow-soft">
                        Filters <ChevronDown className="w-5 h-5 opacity-30" />
                    </button>
                </div>

                <div className="bg-white rounded-[48px] border border-gray-100 shadow-soft overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#1730A8] text-white">
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Event</th>
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Organizer</th>
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Date</th>
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Registered</th>
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Revenue</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {topEvents.map((evt, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-all duration-300 group">
                                    <td className="px-10 py-8"><span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-tight">{evt.title}</span></td>
                                    <td className="px-10 py-8"><span className="text-sm font-bold text-gray-400">{evt.org}</span></td>
                                    <td className="px-10 py-8"><span className="text-sm font-bold text-gray-400">{evt.date}</span></td>
                                    <td className="px-10 py-8"><span className="text-sm font-bold text-blue-600/60 group-hover:text-blue-600 transition-colors">{evt.registered}</span></td>
                                    <td className="px-10 py-8"><span className="text-sm font-black text-gray-900 font-mono tracking-tight">{evt.revenue}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Custom Pagination */}
                <div className="flex items-center justify-between px-2">
                    <p className="text-sm font-bold text-gray-300">Showing 5 of 42 Events</p>
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1123AD] text-white font-black text-sm shadow-lg">1</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 font-black text-sm">2</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 font-black text-sm">3</button>
                        <span className="px-2 text-gray-300">...</span>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-500 font-black text-sm">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* CPD Hours distributed Table */}
            <div className="space-y-6 pt-12">
                <h2 className="text-xl font-black">CPD hours distributed</h2>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-[#1730A8] transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search here" 
                            className="w-full bg-white border border-[#C7D2FE] pl-16 pr-8 py-4 rounded-full text-[13px] focus:ring-4 focus:ring-[#1730A8]/5 outline-none shadow-sm transition-all font-medium text-gray-600 placeholder:text-gray-300"
                        />
                    </div>
                    <button className="bg-white border border-gray-100 px-8 py-4 rounded-3xl text-sm font-black text-gray-500 flex items-center gap-3 shadow-sm">
                        Filters <ChevronDown className="w-5 h-5 opacity-40" />
                    </button>
                </div>

                <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#1730A8] text-white">
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Category</th>
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Events</th>
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Total hrs</th>
                                <th className="px-10 py-8 text-[11px] font-black tracking-[0.2em] uppercase">Members credited</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {cpdDist.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-8 py-6"><span className="text-sm font-bold text-gray-400">{item.category}</span></td>
                                    <td className="px-8 py-6"><span className="text-sm font-bold text-gray-300">{item.events}</span></td>
                                    <td className="px-8 py-6"><span className="text-sm font-bold text-gray-400">{item.totalHrs}</span></td>
                                    <td className="px-8 py-6"><span className="text-sm font-bold text-gray-300">{item.members}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Custom Pagination for CPD */}
                <div className="flex items-center justify-between px-2">
                    <p className="text-sm font-bold text-gray-300">Showing 5 of 42 CPD's</p>
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1123AD] text-white font-black text-sm shadow-lg">1</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 font-black text-sm">2</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 font-black text-sm">3</button>
                        <span className="px-2 text-gray-300">...</span>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-500 font-black text-sm">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
