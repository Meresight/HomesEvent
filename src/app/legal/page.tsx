"use client";
import React from 'react';
import Link from 'next/link';
import { Gavel, Users, FileText, Layout, UserCircle, Briefcase } from 'lucide-react';

export default function LegalHomesPage() {
  const categories = [
    { title: 'Lawyers', href: '/legal/lawyers', icon: Users, description: 'Find registered lawyers and their professional info.' },
    { title: 'Real Estate Law', href: '/legal/law-info', icon: Gavel, description: 'Comprehensive guide to real estate laws in PH.' },
    { title: 'Documents', href: '/legal/documents', icon: FileText, description: 'Legal documents relating to real estate transactions.' },
  ];

  const dashboards = [
    { title: 'Lawyer Dashboard', href: '/legal/lawyer-dashboard', icon: Briefcase, color: '#4f46e5' },
    { title: 'User Dashboard', href: '/legal/user-dashboard', icon: UserCircle, color: '#0ea5e9' },
  ];

  return (
    <div className="legal-page">
      <div className="section-header">
        <h1 className="section-title">LEGALHOMES WEBSITE</h1>
        <p className="section-subtitle">Professional legal support for your property journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link href={cat.href} key={cat.title} className="card hover-effect" style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '1rem',
              border: '1px solid var(--color-border)',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                <Icon size={40} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{cat.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{cat.description}</p>
            </Link>
          );
        })}
      </div>

      <div style={{ 
        background: 'var(--color-bg-secondary)', 
        padding: '3rem', 
        borderRadius: '1.5rem',
        border: '1px solid var(--color-border)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Portal Dashboards</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {dashboards.map(db => {
            const Icon = db.icon;
            return (
              <Link href={db.href} key={db.title} style={{
                background: 'white',
                padding: '1.5rem 2.5rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                transition: 'all 0.2s ease',
                minWidth: '250px'
              }} className="hover:shadow-lg">
                <div style={{ color: db.color }}>
                  <Icon size={28} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{db.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
