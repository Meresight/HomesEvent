"use client";
import React from 'react';
import Link from 'next/link';
import { MapPin, Bath, Bed, Square } from 'lucide-react';

const properties = [
  { id: 1, title: 'Modern Studio in Makati', price: '₱25,000/mo', location: 'Makati City', beds: 1, baths: 1, sqm: 30, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: '2BR Condo near BGC', price: '₱45,000/mo', location: 'Taguig City', beds: 2, baths: 2, sqm: 65, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Luxury Penthouse', price: '₱120,000/mo', location: 'Ortigas Center', beds: 3, baths: 3, sqm: 150, image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=400' },
];

export default function RentListingPage() {
  return (
    <div className="rent-listing">
      <div className="section-header flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="section-title">Rent Property Page</h1>
          <p className="section-subtitle">Browse available rental properties</p>
        </div>
        <div className="filters" style={{ display: 'flex', gap: '0.5rem' }}>
          <select className="input" style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
            <option>Location</option>
          </select>
          <select className="input" style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
            <option>Price Range</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {properties.map(prop => (
          <Link href={`/homesph/rent/${prop.id}`} key={prop.id} className="card hover:shadow-lg transition-all" style={{
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
