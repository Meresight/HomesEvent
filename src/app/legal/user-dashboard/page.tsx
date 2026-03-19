"use client";
import React from 'react';
import { User, FileText, Bookmark, Bell, ShieldCheck } from 'lucide-react';

export default function UserDashboard() {
  return (
    <div className="user-dashboard">
      <div className="section-header" style={{ marginBottom: '2.5rem' }}>
        <h1 className="section-title">User Dashboard</h1>
        <p className="section-subtitle">Manage your property documents and legal consultations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Profile Card */}
        <div className="card" style={{ padding: '2rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '1.5rem', textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#f1f5f9', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={48} color="var(--color-primary)" />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>John Doe</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Premium Member</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-success)', fontWeight: 600 }}>
            <ShieldCheck size={18} /> Account Verified
          </div>
        </div>

        {/* Saved Items */}
        <div className="card" style={{ padding: '2rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bookmark size={20} /> Saved Properties
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', padding: '1rem' }}>No saved properties yet.</p>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Browse Properties</button>
        </div>

        {/* Notifications */}
        <div className="card" style={{ padding: '2rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bell size={20} /> Recent Notifications
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ fontWeight: 600 }}>Consultation Scheduled</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>With Atty. Maria Clara • Tomorrow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
