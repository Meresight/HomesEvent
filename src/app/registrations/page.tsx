"use client";
import React from 'react';
import Link from 'next/link';
import { Ticket, Calendar, MapPin, XCircle } from 'lucide-react';
import '../events/events.css';

export default function RegistrationsModule() {
    const registrations = [
        { id: 1, eventId: 1, title: 'Q3 Townhall Meeting', date: '2026-10-15T09:00:00Z', location: 'Main Auditorium', status: 'Confirmed' },
        { id: 4, eventId: 4, title: 'Annual Company Retreat 2026', date: '2026-11-10T08:00:00Z', location: 'Boracay Island', status: 'Confirmed' },
    ];

    return (
        <div className="max-w-[800px] mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-primary">My Registrations</h1>
            </div>

            <div className="grid gap-6">
                {registrations.map(reg => {
                    const dateObj = new Date(reg.date);
                    const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
                    const formattedTime = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                    return (
                        <div key={reg.id} className="bg-background-card rounded-md shadow-soft p-6 border border-border flex gap-6 items-center">
                            <div className="w-[100px] h-[100px] bg-background-main rounded-md flex flex-col justify-center items-center border border-border">
                                <span className="text-danger font-bold text-sm uppercase">{dateObj.toLocaleDateString('en-US', { month: 'short' })}</span>
                                <span className="text-primary font-bold text-3xl leading-none">{dateObj.toLocaleDateString('en-US', { day: '2-digit' })}</span>
                            </div>

                            <div className="flex-grow">
                                <Link href={`/events/${reg.eventId}`} className="inline-block group">
                                    <h2 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{reg.title}</h2>
                                </Link>
                                <div className="flex gap-6 text-sm text-text-muted">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        <span>{formattedDate} at {formattedTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={14} />
                                        <span>{reg.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-4">
                                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    {reg.status}
                                </span>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-danger border border-danger/20 rounded-md hover:bg-danger/5 transition-colors">
                                    <XCircle size={14} />
                                    Cancel Registration
                                </button>
                            </div>
                        </div>
                    );
                })}

                {registrations.length === 0 && (
                    <div className="bg-background-card rounded-lg shadow-soft p-12 text-center border border-border">
                        <Ticket size={48} className="text-text-muted mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-bold text-primary mb-2">No Registrations Yet</h3>
                        <p className="text-text-muted mb-6">You haven&apos;t registered for any upcoming events.</p>
                        <Link href="/events" className="bg-accent hover:bg-accent-hover text-primary px-6 py-2 rounded-md font-bold transition-all shadow-sm">
                            Discover Events
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
