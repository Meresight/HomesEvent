"use client";
import React from 'react';
import { Settings, BarChart3, Users, CalendarDays, Plus } from 'lucide-react';
import Link from 'next/link';
import '../events/events.css';

export default function AdminModule() {
    return (
        <div className="dashboard-container">
            <div className="section-header">
                <h1 className="section-title" style={{ fontSize: '2rem' }}>Admin Dashboard</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
                <div className="stat-card" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}><CalendarDays color="var(--color-primary)" /></div>
                    <div className="stat-value">24</div>
                    <div className="stat-label">Total Events</div>
                </div>
                <div className="stat-card" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}><Users color="var(--color-primary)" /></div>
                    <div className="stat-value">450</div>
                    <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-card" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}><BarChart3 color="var(--color-primary)" /></div>
                    <div className="stat-value">82%</div>
                    <div className="stat-label">Avg Attendance</div>
                </div>
                <div className="stat-card" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}><Settings color="var(--color-primary)" /></div>
                    <div className="stat-value">12</div>
                    <div className="stat-label">Departments</div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-column">
                    <div className="card">
                        <div className="section-header">
                            <h3 className="section-title">Manage Events</h3>
                            <Link href="/events/create" className="btn btn-primary" style={{ padding: '6px 12px' }}><Plus size={16} style={{ marginRight: '6px' }} /> New Event</Link>
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                                    <th style={{ padding: '12px 8px' }}>Event Name</th>
                                    <th style={{ padding: '12px 8px' }}>Date</th>
                                    <th style={{ padding: '12px 8px' }}>Registrations</th>
                                    <th style={{ padding: '12px 8px' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '12px 8px', fontWeight: 500 }}>Q3 Townhall Meeting</td>
                                    <td style={{ padding: '12px 8px', color: 'var(--color-text-muted)' }}>Oct 15, 2026</td>
                                    <td style={{ padding: '12px 8px' }}>120 / 200</td>
                                    <td style={{ padding: '12px 8px' }}><Link href="/events/1" className="view-all">Edit</Link></td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '12px 8px', fontWeight: 500 }}>Annual Company Retreat</td>
                                    <td style={{ padding: '12px 8px', color: 'var(--color-text-muted)' }}>Nov 10, 2026</td>
                                    <td style={{ padding: '12px 8px' }}>350 / 500</td>
                                    <td style={{ padding: '12px 8px' }}><Link href="/events/4" className="view-all">Edit</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-column">
                    <div className="card">
                        <div className="section-header">
                            <h3 className="section-title">Quick Actions</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '12px' }}>Manage Users</button>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '12px' }}>Create Announcement</button>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '12px' }}>View Analytics Reports</button>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'flex-start', padding: '12px' }}>System Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
