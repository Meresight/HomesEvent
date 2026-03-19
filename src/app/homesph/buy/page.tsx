"use client";
import React from 'react';
import Link from 'next/link';
import { MapPin, Bath, Bed, Square, TrendingUp } from 'lucide-react';

const properties = [
  { id: 1, title: 'Modern Townhouse in Quezon City', price: '₱8,500,000', location: 'Quezon City', beds: 3, baths: 2, sqm: 120, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'BGC Premier Condo Unit', price: '₱15,200,000', location: 'Taguig City', beds: 2, baths: 2, sqm: 85, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Family Home in Nuvali', price: '₱12,800,000', location: 'Santa Rosa, Laguna', beds: 4, baths: 3, sqm: 220, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=400' },
];

export default function BuyListingPage() {
  return (
    <div className="buy-listing">
      <div className="section-header flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="section-title">Buy Details Page</h1>
          <p className="section-subtitle">Invest in your permanent home</p>
        </div>
        <div className="flex items-center gap-2" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
          <TrendingUp size={20} />
          <span>Market Price Index: +4.2%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {properties.map(prop => (
          <Link href={`/homesph/buy/${prop.id}`} key={prop.id} className="card hover-shadow-lg transition-all" style={{
            background: 'white',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{ height: '200px', width: '100%', background: '#eee', overflow: 'hidden' }}>
              <img src={prop.image} alt={prop.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{prop.price}</div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{prop.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                <MapPin size={14} className="mr-1" style={{ marginRight: '0.25rem' }} />
                {prop.location}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Bed size={16} /> {prop.beds} Bed</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Bath size={16} /> {prop.baths} Bath</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Square size={16} /> {prop.sqm} sqm</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
