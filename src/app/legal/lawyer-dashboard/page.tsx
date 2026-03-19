"use client";
import React from 'react';
import { UserCircle, Calendar, MessageSquare, FileText, CheckCircle } from 'lucide-react';

export default function LawyerDashboard() {
  return (
    <div className="lawyer-dashboard">
      <div className="section-header" style={{ marginBottom: '2.5rem' }}>
        <h1 className="section-title">Lawyer Dashboard</h1>
        <p className="section-subtitle">Manage your cases and client consultations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Active Cases */}
          <div className="card" style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} /> Active Cases
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2].map(i => (
                <div key={i} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600 }}>Property Dispute - Case #{1020 + i}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Client: Juan Dela Cruz</div>
                  </div>
                  <div style={{ background: '#dcfce7', color: '#166534', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700 }}>In Progress</div>
                </div>
              ))}
            </div>
          </div>

          {/* New Inquiries */}
          <div className="card" style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={20} /> New Inquiries
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', padding: '2rem' }}>No new inquiries at the moment.</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Schedule */}
          <div className="card" style={{ padding: '1.5rem', background: 'var(--color-bg-secondary)', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={18} /> Today's Schedule
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                <div style={{ fontWeight: 600 }}>10:00 AM - Consultation</div>
                <div style={{ color: 'var(--color-text-secondary)' }}>Maria Santos</div>
              </div>
              <div style={{ padding: '0.75rem', background: 'white', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                <div style={{ fontWeight: 600 }}>02:30 PM - Document Review</div>
                <div style={{ color: 'var(--color-text-secondary)' }}>Deed of Sale #442</div>
              </div>
            </div>
          </div>

          {/* Profile Status */}
          <div className="card" style={{ padding: '1.5rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>JD</div>
              <h4 style={{ fontWeight: 700 }}>Atty. John Doe</h4>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 600, marginTop: '0.5rem' }}>
                <CheckCircle size={14} /> Verified Professional
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
