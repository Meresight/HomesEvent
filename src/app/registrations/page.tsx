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
        <div>
            <div className="section-header">
                <h1 className="section-title" style={{ fontSize: '2rem' }}>My Registrations</h1>
            </div>

            <div style={{ display: 'grid', gap: '24px' }}>
                {registrations.map(reg => {
                    const dateObj = new Date(reg.date);
                    const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
                    const formattedTime = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                    return (
                        <div key={reg.id} className="card" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                            <div style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: 'var(--color-bg-main)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '1px solid var(--color-border)'
                            }}>
                                <span style={{ color: 'var(--color-danger)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase' }}>{dateObj.toLocaleDateString('en-US', { month: 'short' })}</span>
                                <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>{dateObj.toLocaleDateString('en-US', { day: '2-digit' })}</span>
                            </div>

                            <div style={{ flexGrow: 1 }}>
                                <Link href={`/events/${reg.eventId}`} style={{ display: 'inline-block' }}>
                                    <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', margin: '0 0 8px 0' }}>{reg.title}</h2>
                                </Link>
                                <div style={{ display: 'flex', gap: '24px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Calendar size={14} />
                                        <span>{formattedDate} at {formattedTime}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <MapPin size={14} />
                                        <span>{reg.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                                <span style={{
                                    padding: '4px 12px',
                                    backgroundColor: 'var(--color-success-bg)',
                                    color: 'var(--color-success)',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase'
                                }}>
                                    {reg.status}
                                </span>
                                <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', display: 'flex', gap: '6px', color: 'var(--color-danger)', borderColor: 'var(--color-danger)' }}>
                                    <XCircle size={14} />
                                    Cancel Registration
                                </button>
                            </div>
                        </div>
                    );
                })}

                {registrations.length === 0 && (
                    <div className="card" style={{ textAlign: 'center', padding: '48px' }}>
                        <Ticket size={48} color="var(--color-text-muted)" style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                        <h3 style={{ margin: '0 0 8px 0', color: 'var(--color-primary)' }}>No Registrations Yet</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>You haven't registered for any upcoming events.</p>
                        <Link href="/events" className="btn btn-primary">Discover Events</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
