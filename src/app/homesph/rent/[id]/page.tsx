"use client";
import React from 'react';
import { Home, Phone, Mail, MapPin, Bath, Bed, Square, CheckCircle2 } from 'lucide-react';

export default function RentDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="property-details">
      <div className="mb-6">
        <h1 className="section-title">Modern Studio in Makati</h1>
        <div className="flex items-center text-secondary" style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-secondary)', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={16} /> Makati City, Philippines</div>
          <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>₱25,000 / month</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div>
          <div style={{ height: '400px', background: '#eee', borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" alt="Property" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="card" style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Description</h2>
            <p style={{ lineHeight: 1.8, color: 'var(--color-text-main)' }}>
              This modern studio apartment is strategically located in the heart of Makati. Perfect for young professionals, it offers a clean, minimalist design with high-quality finishes. The unit comes fully furnished with a compact kitchen, queen-sized bed, and a sleek work area.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
              <Bed className="mx-auto mb-2" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary)' }} />
              <div style={{ fontWeight: 600 }}>1 Bedroom</div>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
              <Bath className="mx-auto mb-2" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary)' }} />
              <div style={{ fontWeight: 600 }}>1 Bathroom</div>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
              <Square className="mx-auto mb-2" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary)' }} />
              <div style={{ fontWeight: 600 }}>30 sqm</div>
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ padding: '2rem', background: 'var(--color-bg-secondary)', borderRadius: '1rem', border: '1px solid var(--color-border)', position: 'sticky', top: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Agent Listing</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>AS</div>
              <div>
                <div style={{ fontWeight: 600 }}>Alice Santos</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Senior Property Consultant</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> Call Agent
              </button>
              <button className="btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: '1px solid var(--color-border)' }}>
                <Mail size={18} /> Send Message
              </button>
            </div>
            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-success)', fontWeight: 600 }}>
                <CheckCircle2 size={16} /> Verified Listing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
