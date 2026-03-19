"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar as CalendarIcon, MapPin, Clock, Users, Building, Tag, Info } from 'lucide-react';
import '../events.css';

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
            <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                <ArrowLeft size={18} />
                Back to Events
            </Link>

            <div className="event-details-hero">
                <div className="hero-overlay"></div>
                <img
                    src={event.image}
                    alt={event.title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                />
                <div className="hero-content">
                    <span className="featured-tag">{event.category}</span>
                    <h1 className="hero-title">{event.title}</h1>
                    <div className="hero-meta">
                        <div className="event-meta-row">
                            <CalendarIcon size={18} />
                            <span>{formattedDates}</span>
                        </div>
                        <div className="event-meta-row">
                            <MapPin size={18} />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="event-content-grid">
                <div>
                    <div className="event-section">
                        <h2 className="event-section-title">About This Event</h2>
                        <div style={{ whiteSpace: 'pre-line', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
                            {event.description}
                        </div>
                    </div>

                    <div className="event-section">
                        <h2 className="event-section-title">Agenda</h2>
                        <div className="announcement-list">
                            {event.agenda.map((item, index) => (
                                <div key={index} className="announcement-item" style={{ padding: '16px 0' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '4px' }}>{item.day}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '8px' }}>
                                        <Clock size={14} />
                                        <span>{item.times}</span>
                                    </div>
                                    <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card registration-card">
                        <h3 className="section-title" style={{ marginBottom: '24px' }}>Registration</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                            <div className="event-meta-row">
                                <Users size={18} color="var(--color-text-muted)" />
                                <span style={{ fontWeight: 500 }}>{event.attendees} / {event.maxAttendees} Registered</span>
                            </div>
                            <div className="event-meta-row">
                                <Building size={18} color="var(--color-text-muted)" />
                                <span>Organizer: <strong>{event.organizer}</strong></span>
                            </div>
                            <div className="event-meta-row">
                                <Tag size={18} color="var(--color-text-muted)" />
                                <span>Category: <strong>{event.category}</strong></span>
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '16px', marginBottom: '16px' }}>
                            Register for Event
                        </button>
                        <div style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-muted)', display: 'flex', justifyContent: 'center', gap: '6px', alignItems: 'center' }}>
                            <Info size={14} />
                            <span>Registration ends Oct 15, 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
