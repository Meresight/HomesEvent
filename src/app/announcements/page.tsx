"use client";
import React from 'react';
import { Bell, AlertCircle, CheckCircle, Info } from 'lucide-react';
import '../events/events.css';

export default function AnnouncementsModule() {
    const notifications = [
        { id: 1, type: 'alert', title: 'Mandatory Security Training due next Friday', desc: 'Please ensure you complete the Q3 security compliance training. Check your email for the link.', time: '2 hours ago' },
        { id: 2, type: 'info', title: 'Office facilities maintenance this weekend', desc: 'The 4th floor pantry will be unavailable from Saturday 8AM to Sunday 5PM.', time: 'Yesterday' },
        { id: 3, type: 'success', title: 'Registration Confirmed: Annual Company Retreat', desc: 'You are successfully registered. Travel details will follow next week.', time: '2 days ago' },
        { id: 4, type: 'info', title: 'Welcome our new VP of Engineering!', desc: 'Sarah Chen has joined us from TechCorp. Read her welcome interview on the intranet.', time: '3 days ago' },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'alert': return <AlertCircle color="var(--color-danger)" size={20} />;
            case 'success': return <CheckCircle color="var(--color-success)" size={20} />;
            default: return <Info color="var(--color-primary)" size={20} />;
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="section-header">
                <h1 className="section-title" style={{ fontSize: '2rem' }}>Announcements & Notifications</h1>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {notifications.map((notif, i) => (
                    <div key={notif.id} style={{
                        padding: '24px',
                        borderBottom: i < notifications.length - 1 ? '1px solid var(--color-border)' : 'none',
                        display: 'flex',
                        gap: '16px',
                        backgroundColor: notif.type === 'alert' ? 'rgba(244, 67, 54, 0.05)' : 'transparent'
                    }}>
                        <div style={{ marginTop: '2px' }}>
                            {getIcon(notif.type)}
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>{notif.title}</h3>
                                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap', marginLeft: '16px' }}>{notif.time}</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-main)' }}>{notif.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
