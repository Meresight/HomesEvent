"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalIcon } from 'lucide-react';

export default function CalendarModule() {
    const [currentDate, setCurrentDate] = useState(new Date('2026-10-01'));

    // Basic mock calendar days (just visually representative)
    const daysInMonth = 31;
    const firstDay = 4; // Thursday

    const days = Array.from({ length: 42 }, (_, i) => {
        const dayDisplay = i - firstDay + 1;
        if (dayDisplay > 0 && dayDisplay <= daysInMonth) {
            return dayDisplay;
        }
        return null;
    });

    const events: Record<number, { title: string; time: string }[]> = {
        15: [{ title: 'Q3 Townhall', time: '09:00 AM' }],
        18: [{ title: 'Engineering All-Hands', time: '02:30 PM' }],
        20: [{ title: 'Onboarding Workshop', time: '10:00 AM' }],
        22: [{ title: 'Design Sprint', time: '10:00 AM' }],
        25: [{ title: 'Leadership Training', time: '01:00 PM' }],
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary">Event Calendar</h1>
            </div>

            <div className="bg-background-card p-8 rounded-lg border border-border shadow-soft">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-primary">October 2026</h2>
                        <div className="flex gap-2">
                            <button className="p-2 border border-border rounded-md hover:bg-background-main transition-colors">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="p-2 border border-border rounded-md hover:bg-background-main transition-colors">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white border-primary">Month</button>
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-background-card text-text-muted border border-border hover:bg-background-main transition-all">Week</button>
                        <button className="px-4 py-2 rounded-full text-sm font-medium bg-background-card text-text-muted border border-border hover:bg-background-main transition-all">Day</button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-px bg-border border border-border rounded-lg overflow-hidden">
                    {/* Day Headers */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                        <div key={d} className="p-3 bg-background-main text-center font-bold text-xs uppercase tracking-wider text-text-muted">
                            {d}
                        </div>
                    ))}

                    {/* Days */}
                    {days.map((day, i) => (
                        <div key={i} className="min-h-[120px] bg-background-card p-2 flex flex-col gap-1.5 hover:bg-background-main/50 transition-colors">
                            {day && (
                                <>
                                    <span className={`w-7 h-7 flex items-center justify-center font-semibold text-sm rounded-full transition-all ${
                                        day === 15 
                                        ? 'bg-primary text-white shadow-sm' 
                                        : 'text-text-main'
                                    }`}>
                                        {day}
                                    </span>
                                    {events[day] && events[day].map((evt, idx) => (
                                        <div key={idx} className="p-2 bg-background-main border-l-4 border-accent rounded-r-md text-[10px] cursor-pointer hover:bg-background-main/80 transition-all">
                                            <div className="font-bold text-primary truncate">{evt.title}</div>
                                            <div className="text-text-muted">{evt.time}</div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
