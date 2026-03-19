"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Calendar, MapPin, Users, Search } from 'lucide-react';
import './events.css';

const allEvents = [
    { id: 1, title: 'Q3 Townhall Meeting', date: '2026-10-15T09:00:00Z', location: 'Main Auditorium', category: 'Company-wide', attendees: 120, maxAttendees: 200, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Engineering All-Hands', date: '2026-10-18T14:30:00Z', location: 'Virtual', category: 'Department', attendees: 45, maxAttendees: null, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'New Hire Onboarding Workshop', date: '2026-10-20T10:00:00Z', location: 'Room 4B', category: 'HR', attendees: 12, maxAttendees: 20, image: 'https://images.unsplash.com/photo-1515169065240-5e608f7aa9d0?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Annual Company Retreat 2026', date: '2026-11-10T08:00:00Z', location: 'Boracay Island', category: 'Company-wide', attendees: 350, maxAttendees: 500, image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Product Design Sprint', date: '2026-10-22T10:00:00Z', location: 'Innovation Lab', category: 'Workshop', attendees: 8, maxAttendees: 10, image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Leadership Training', date: '2026-10-25T13:00:00Z', location: 'Executive Boardroom', category: 'Training', attendees: 15, maxAttendees: 30, image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800' },
];

export default function EventsList() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Company-wide', 'Department', 'HR', 'Workshop', 'Training'];

    const filteredEvents = filter === 'All' ? allEvents : allEvents.filter(e => e.category === filter);

    return (
        <div className="events-container">
            <div className="events-header">
                <h1 className="section-title" style={{ fontSize: '2rem' }}>Events</h1>
                <Link href="/events/create" className="btn btn-primary">
                    <Plus size={18} style={{ marginRight: '8px' }} />
                    Create Event
                </Link>
            </div>

            <div className="events-actions">
                <div className="topbar-search" style={{ width: '300px' }}>
                    <Search className="search-icon" size={18} />
                    <input type="text" placeholder="Search events..." className="search-input" />
                </div>
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="events-grid">
                {filteredEvents.map(event => {
                    const dateObj = new Date(event.date);
                    const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
                    const formattedTime = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                    return (
                        <Link href={`/events/${event.id}`} key={event.id} className="event-card-large">
                            <div
                                className="event-card-image"
                                style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <span className="event-card-category">{event.category}</span>
                            </div>
                            <div className="event-card-content">
                                <h3 className="event-card-title">{event.title}</h3>
                                <div className="event-card-meta">
                                    <div className="event-meta-row">
                                        <Calendar size={14} />
                                        <span>{formattedDate} at {formattedTime}</span>
                                    </div>
                                    <div className="event-meta-row">
                                        <MapPin size={14} />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <div className="event-card-footer">
                                    <div className="event-attendees">
                                        <Users size={14} />
                                        <span>{event.attendees} {event.maxAttendees ? `/ ${event.maxAttendees}` : ''} attendees</span>
                                    </div>
                                    <span className="view-all">View Details</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
