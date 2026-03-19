"use client";
import React from 'react';
import { Mail, Phone, Briefcase, MapPin, Edit3 } from 'lucide-react';

export default function ProfileModule() {
    const user = {
        name: 'John Doe',
        role: 'Senior Software Engineer',
        department: 'Engineering',
        email: 'john.doe@homes.ph.example.com',
        phone: '+63 912 345 6789',
        location: 'Manila, Philippines',
        joinDate: 'Jan 2024'
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="section-header">
                <h1 className="section-title" style={{ fontSize: '2rem' }}>My Profile</h1>
            </div>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ height: '120px', backgroundColor: 'var(--color-primary)' }}></div>

                <div style={{ padding: '0 32px 32px 32px', position: 'relative' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        border: '4px solid var(--color-bg-card)',
                        position: 'absolute',
                        top: '-50px',
                        boxShadow: 'var(--shadow-soft)'
                    }}>
                        JD
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '24px' }}>
                        <button className="btn btn-secondary" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Edit3 size={16} /> Edit Profile
                        </button>
                    </div>

                    <div style={{ marginTop: '16px' }}>
                        <h2 style={{ fontSize: '1.5rem', margin: '0 0 4px 0', color: 'var(--color-primary)' }}>{user.name}</h2>
                        <p style={{ margin: '0 0 16px 0', color: 'var(--color-text-muted)', fontSize: '1rem' }}>{user.role} • {user.department}</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <Mail color="var(--color-text-muted)" size={20} />
                            <div>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Email Address</p>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{user.email}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <Phone color="var(--color-text-muted)" size={20} />
                            <div>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Phone Number</p>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{user.phone}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <MapPin color="var(--color-text-muted)" size={20} />
                            <div>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Location</p>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{user.location}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <Briefcase color="var(--color-text-muted)" size={20} />
                            <div>
                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Joined</p>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{user.joinDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
