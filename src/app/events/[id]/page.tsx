"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar as CalendarIcon, MapPin, Clock, Users, Building, Tag, Info } from 'lucide-react';

export default function EventDetails() {
    // Using mock data for the prototype
    const event = {
        id: 1,
        title: 'Annual Company Retreat 2026',
        date: '2026-11-10T08:00:00Z',
        endDate: '2026-11-12T18:00:00Z',
        location: 'Boracay Island, Philippines',
        category: 'Company-wide',
        organizer: 'People Experience Team',
        attendees: 350,
        maxAttendees: 500,
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000',
        description: `We are thrilled to announce our Annual Company Retreat for 2026! This year, we're heading to the beautiful beaches of Boracay. \n\nThis 3-day event will be packed with team-building activities, strategic alignment sessions, and plenty of time to relax and connect with colleagues across different departments.\n\nAccommodation and travel details will be provided upon confirmation of registration. Please ensure you register before October 15th to secure your spot and preferred room assignments.`,
        agenda: [
            { day: 'Day 1: Arrival & Welcome', times: '08:00 AM - 09:00 PM', desc: 'Travel, Check-in, Welcome Dinner & Mixer' },
            { day: 'Day 2: Strategy & Team Building', times: '09:00 AM - 10:00 PM', desc: 'Keynote, Department Breakouts, Beach Olympics, Gala Night' },
            { day: 'Day 3: Wellness & Departure', times: '07:00 AM - 03:00 PM', desc: 'Sunrise Yoga, Free Time, Closing Remarks, Departure' }
        ]
    };

    const startDateObj = new Date(event.date);
    const endDateObj = new Date(event.endDate);

    const formattedDates = `${startDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    return (
        <div>
            <Link href="/events" className="inline-flex items-center gap-2 mb-6 text-text-muted font-medium hover:text-primary transition-colors">
                <ArrowLeft size={18} />
                Back to Events
            </Link>

            <div className="h-[300px] rounded-lg bg-primary relative overflow-hidden flex items-end p-10 mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30 z-10"></div>
                <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-20 text-white w-full">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
                        {event.category}
                    </span>
                    <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <CalendarIcon size={18} />
                            <span>{formattedDates}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-background-card p-8 rounded-lg border border-border">
                        <h2 className="text-2xl font-bold text-primary mb-4">About This Event</h2>
                        <div className="whitespace-pre-line text-text-main leading-relaxed">
                            {event.description}
                        </div>
                    </div>

                    <div className="bg-background-card p-8 rounded-lg border border-border">
                        <h2 className="text-2xl font-bold text-primary mb-4">Agenda</h2>
                        <div className="flex flex-col gap-0">
                            {event.agenda.map((item, index) => (
                                <div key={index} className="py-4 border-b border-border last:border-0">
                                    <h3 className="text-lg font-bold text-primary mb-1">{item.day}</h3>
                                    <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
                                        <Clock size={14} />
                                        <span>{item.times}</span>
                                    </div>
                                    <p className="text-text-main">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-background-card p-8 rounded-lg border border-border sticky top-6">
                        <h3 className="text-xl font-bold text-primary mb-6">Registration</h3>

                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <Users size={18} className="text-text-muted" />
                                <span className="font-semibold">{event.attendees} / {event.maxAttendees} Registered</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building size={18} className="text-text-muted" />
                                <span>Organizer: <strong className="font-semibold">{event.organizer}</strong></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Tag size={18} className="text-text-muted" />
                                <span>Category: <strong className="font-semibold">{event.category}</strong></span>
                            </div>
                        </div>

                        <button className="w-full py-3.5 bg-accent hover:bg-accent-hover text-primary font-bold rounded-md transition-all shadow-sm mb-4">
                            Register for Event
                        </button>
                        <div className="flex justify-center items-center gap-1.5 text-sm text-text-muted">
                            <Info size={14} />
                            <span>Registration ends Oct 15, 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
