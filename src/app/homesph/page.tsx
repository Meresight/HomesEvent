"use client";
import React from 'react';
import Link from 'next/link';
import { Home, Building2, Key, Newspaper, BellRing, Share2 } from 'lucide-react';

export default function HomesPHPage() {
  const sections = [
    { title: 'Rent Properties', href: '/homesph/rent', icon: Key, description: 'Find your next home to rent.' },
    { title: 'Projects List', href: '/homesph/projects', icon: Building2, description: 'Explore new developments and agent listings.' },
    { title: 'Buy Properties', href: '/homesph/buy', icon: Home, description: 'Invest in your future home.' },
    { title: 'News Listings', href: '/homesph/news', icon: Newspaper, description: 'Stay updated with the latest real estate news.' },
  ];

  return (
    <div className="brand-page">
      <div className="section-header">
        <h1 className="section-title">HOMESPH</h1>
        <p className="section-subtitle">Your gateway to Philippine Real Estate</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link href={section.href} key={section.title} className="card hover-effect" style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              background: 'white',
              borderRadius: '1rem',
              border: '1px solid var(--color-border)',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <Icon size={32} />
              </div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{section.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{section.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Subscribe Section */}
        <div className="card" style={{ padding: '2rem', background: 'var(--color-bg-secondary)', borderRadius: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <BellRing className="mr-2" style={{ color: 'var(--color-primary)' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Subscribe to News</h2>
          </div>
          <p style={{ marginBottom: '1.5rem' }}>Get the latest property alerts and market updates delivered to your inbox.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Enter your email" style={{ 
              flexGrow: 1, 
              padding: '0.75rem 1rem', 
              borderRadius: '0.5rem', 
              border: '1px solid var(--color-border)' 
            }} />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>

        {/* Ads Section */}
        <div className="card" style={{ padding: '2rem', background: 'var(--color-bg-secondary)', borderRadius: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <Share2 className="mr-2" style={{ color: 'var(--color-primary)' }} />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Ads Section</h2>
          </div>
          <div style={{ 
            height: '150px', 
            background: 'var(--color-border)', 
            borderRadius: '0.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--color-text-secondary)',
            border: '2px dashed var(--color-text-secondary)'
          }}>
            Featured Ad Placement
          </div>
        </div>
      </div>
    </div>
  );
}
