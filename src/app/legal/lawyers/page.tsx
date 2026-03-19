"use client";
import React from 'react';
import Link from 'next/link';
import { Users, Search, Filter, Star, MapPin, Award } from 'lucide-react';

const lawyers = [
  { id: 1, name: 'Atty. Maria Clara', specialty: 'Real Estate Law', experience: '15 years', rating: 4.9, location: 'Manila', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Atty. Jose Rizal Jr.', specialty: 'Civil Litigation', experience: '12 years', rating: 4.8, location: 'Quezon City', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Atty. Gabriela Silang', specialty: 'Property Disputes', experience: '8 years', rating: 4.7, location: 'Makati City', image: 'https://images.unsplash.com/photo-1551836022-d5d8b5c7190b?auto=format&fit=crop&q=80&w=400' },
];

export default function LawyersListingPage() {
  return (
    <div className="lawyers-listing">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">Professional Lawyers</h1>
        <p className="section-subtitle">Connect with expert legal consultants for your property needs</p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ position: 'relative', flexGrow: 1 }}>
          <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} size={18} />
          <input type="text" placeholder="Search by name or specialty..." style={{ 
            width: '100%', 
            padding: '1rem 1rem 1rem 3rem', 
            borderRadius: '0.75rem', 
            border: '1px solid var(--color-border)' 
          }} />
        </div>
        <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--color-border)', padding: '0 1.5rem', borderRadius: '0.75rem' }}>
          <Filter size={18} /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {lawyers.map(lawyer => (
          <Link href={`/legal/lawyers/${lawyer.id}`} key={lawyer.id} className="card hover:shadow-xl transition-all" style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '2rem',
            border: '1px solid var(--color-border)',
            textDecoration: 'none',
            color: 'inherit',
            textAlign: 'center'
          }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem' }}>
              <img src={lawyer.image} alt={lawyer.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{lawyer.name}</h3>
            <div style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>{lawyer.specialty}</div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Award size={14} /> {lawyer.experience}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={14} /> {lawyer.location}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {[1,2,3,4,5].map(star => (
                <Star key={star} size={16} fill={star <= Math.floor(lawyer.rating) ? "#f59e0b" : "none"} color="#f59e0b" />
              ))}
              <span style={{ marginLeft: '0.5rem', fontWeight: 700 }}>{lawyer.rating}</span>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }}>View Profile & Contact</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
