"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalIcon } from 'lucide-react';
import '../events/events.css';

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
        <div className="events-container">
            <div className="section-header">
                <h1 className="section-title" style={{ fontSize: '2rem' }}>Event Calendar</h1>
            </div>

            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--color-primary)' }}>October 2026</h2>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button className="icon-btn" style={{ padding: '8px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                <ChevronLeft size={16} />
                            </button>
                            <button className="icon-btn" style={{ padding: '8px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="filter-btn active">Month</button>
                        <button className="filter-btn">Week</button>
                        <button className="filter-btn">Day</button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', backgroundColor: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    {/* Day Headers */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                        <div key={d} style={{ padding: '12px', backgroundColor: 'var(--color-bg-main)', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>
                            {d}
                        </div>
                    ))}

                    {/* Days */}
                    {days.map((day, i) => (
                        <div key={i} style={{
                            minHeight: '120px',
                            backgroundColor: 'var(--color-bg-card)',
                            padding: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px'
                        }}>
                            {day && (
                                <>
                                    <span style={{ fontWeight: 500, fontSize: '0.875rem', color: day === 15 ? 'var(--color-accent)' : 'var(--color-text-main)', display: 'inline-block', padding: day === 15 ? '2px 6px' : '2px 6px', backgroundColor: day === 15 ? 'var(--color-primary)' : 'transparent', borderRadius: '100px' }}>
                                        {day}
                                    </span>
                                    {events[day] && events[day].map((evt, idx) => (
                                        <div key={idx} style={{ padding: '4px 6px', backgroundColor: 'var(--color-bg-main)', borderLeft: '2px solid var(--color-accent)', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>
                                            <div style={{ fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{evt.title}</div>
                                            <div style={{ color: 'var(--color-text-muted)' }}>{evt.time}</div>
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
