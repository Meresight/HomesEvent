"use client";
import React from 'react';
import { Gavel, Scale, FileCheck, ShieldAlert, BookOpen } from 'lucide-react';

export default function RealEstateLawPage() {
  const laws = [
    { title: 'The Maceda Law', description: 'Protection for buyers of real estate on installment payments.', icon: Scale },
    { title: 'Condominium Act', description: 'Governs the ownership, management, and use of condominium units.', icon: BookOpen },
    { title: 'Urban Development Act', description: 'Policies and strategies for urban development and housing.', icon: Gavel },
    { title: 'Real Estate Service Act', description: 'Regulation of real estate practice in the Philippines.', icon: FileCheck },
  ];

  return (
    <div className="law-info">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <h1 className="section-title">Real Estate Law Information</h1>
        <p className="section-subtitle">A comprehensive guide to Philippine property laws</p>
      </div>

      <div className="grid gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {laws.map(law => {
          const Icon = law.icon;
          return (
            <div key={law.title} className="card" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '1rem',
              border: '1px solid var(--color-border)',
              display: 'flex',
              gap: '1.5rem'
            }}>
              <div style={{ color: 'var(--color-primary)' }}>
                <Icon size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{law.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{law.description}</p>
                <button className="btn-link" style={{ marginTop: '1rem', color: 'var(--color-primary)', fontWeight: 600, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>Read Full Text & Analysis</button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '4rem', padding: '3rem', background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          <ShieldAlert color="#dc2626" size={40} />
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#991b1b', marginBottom: '1rem' }}>Legal Disclaimer</h2>
            <p style={{ color: '#b91c1c', lineHeight: 1.6 }}>
              The information provided on this page is for general informational purposes only and does not constitute legal advice. Laws and regulations may change, and individual circumstances vary. Always consult with a qualified legal professional for specific legal concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
