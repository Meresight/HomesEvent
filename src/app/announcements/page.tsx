"use client";
import React from 'react';
import { 
    Search, 
    Filter, 
    ChevronRight, 
    Calendar,
    MessageSquare,
    Trophy,
    AlertCircle,
    ArrowUpRight
} from 'lucide-react';

const announcements = [
    { 
        id: 1, 
        category: 'Event Update', 
        title: 'New Ethics Seminar Added to Q4 Schedule', 
        snippet: 'We have just added a new mandatory ethics seminar for all licensed real estate professionals. Registration is now open...', 
        date: 'Oct 24, 2024',
        icon: Calendar,
        color: 'blue'
    },
    { 
        id: 2, 
        category: 'Announcement', 
        title: 'Year-End Gathering: Save the Date!', 
        snippet: 'Celebrate another year of success with the whole Homes.ph family. Join us this December at the Grand Ballroom for a night of...', 
        date: 'Oct 22, 2024',
        icon: MessageSquare,
        color: 'orange'
    },
    { 
        id: 3, 
        category: 'Achievement', 
        title: 'Top Performers for September 2024', 
        snippet: 'Congratulations to our top sales and engineering teams for their outstanding performance last month. Check out the leaderboard...', 
        date: 'Oct 20, 2024',
        icon: Trophy,
        color: 'green'
    },
    { 
        id: 4, 
        category: 'System Alert', 
        title: 'Scheduled Maintenance: Oct 28', 
        snippet: 'Please be advised that the portal will be under maintenance on October 28 from 2:00 AM to 5:00 AM. Plan your tasks accordingly...', 
        date: 'Oct 18, 2024',
        icon: AlertCircle,
        color: 'red'
    },
];

export default function Announcements() {
    return (
        <div className="flex flex-col gap-12 pb-24">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-[#0A192F] tracking-tight mb-2">Announcements</h1>
                    <p className="text-sm font-bold text-[#94A3B8]">Stay synchronized with the latest event ecosystem updates</p>
                </div>
                <div className="flex gap-4">
                     <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-[#2B5CFE]" size={18} strokeWidth={2.5} />
                        <input 
                            type="text" 
                            placeholder="Find updates..." 
                            className="pl-12 pr-6 py-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl text-xs font-bold w-64 focus:w-80 focus:ring-4 focus:ring-[#2B5CFE]/5 outline-none transition-all shadow-sm"
                        />
                     </div>
                     <button className="p-4 bg-white border border-[#F1F5F9] rounded-2xl text-[#0A192F] hover:bg-[#F8FAFC] transition-all shadow-sm">
                        <Filter size={20} strokeWidth={2.5} />
                     </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {announcements.map((item) => (
                    <div key={item.id} className="bg-white rounded-[48px] border border-[#F1F5F9] p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] transition-all duration-700 group flex flex-col hover:-translate-y-2">
                        <div className="flex justify-between items-center mb-8">
                            <span className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${
                                item.color === 'blue' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                                item.color === 'orange' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
                                item.color === 'green' ? 'bg-green-50 text-green-600 border border-green-100' :
                                'bg-red-50 text-red-600 border border-red-100'
                            }`}>
                                {item.category}
                            </span>
                            <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">{item.date}</span>
                        </div>
                        
                        <div className="flex gap-6 mb-6">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500 ${
                                item.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white' :
                                item.color === 'orange' ? 'bg-gradient-to-br from-[#FFB020] to-[#F97316] text-white' :
                                item.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-700 text-white' :
                                'bg-gradient-to-br from-red-500 to-red-700 text-white'
                            }`}>
                                <item.icon size={28} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[#0A192F] group-hover:text-[#2B5CFE] transition-colors leading-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-black text-[#94A3B8] uppercase tracking-widest">{item.category}</p>
                            </div>
                        </div>

                        <p className="text-[15px] text-[#94A3B8] font-bold leading-relaxed mb-8 line-clamp-3">
                            {item.snippet}
                        </p>

                        <div className="mt-auto pt-8 border-t border-[#F1F5F9] flex justify-between items-center">
                            <button className="text-[11px] font-black text-[#0A192F] hover:text-[#2B5CFE] flex items-center gap-2 group/btn uppercase tracking-widest transition-all">
                                Expand Details 
                                <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-2xl border-4 border-white bg-[#F8FAFC] shadow-sm transform hover:scale-110 transition-transform cursor-pointer relative z-0 hover:z-10">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full object-cover rounded-[14px]" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-2xl border-4 border-white bg-[#0A192F] text-white flex items-center justify-center text-[9px] font-black shadow-sm">
                                    +12
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="w-full py-6 group flex items-center justify-center gap-4 text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.3em] hover:text-[#0A192F] transition-all duration-500">
                Load Historical Archives
                <ChevronRight size={18} className="rotate-90 group-hover:translate-y-2 transition-transform" />
            </button>
        </div>
    );
}
