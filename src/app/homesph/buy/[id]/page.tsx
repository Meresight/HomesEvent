"use client";
import React from 'react';
import { MapPin, Phone, Mail, Bath, Bed, Square, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function BuyDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="property-details">
      <div className="mb-6">
        <h1 className="section-title">Modern Townhouse in Quezon City</h1>
        <div className="flex items-center text-secondary" style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-secondary)', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={16} /> Quezon City, Philippines</div>
          <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>₱8,500,000</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div>
          <div style={{ height: '400px', background: '#eee', borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Property" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="card" style={{ padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Investment Opportunity</h2>
            <p style={{ lineHeight: 1.8, color: 'var(--color-text-main)' }}>
              A perfect family home in a secured community. This property features a spacious living area, modern kitchen, and three well-appointed bedrooms. It was built with high-quality materials and designed for both comfort and efficiency. Located near major schools and commercial districts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
              <Bed className="mx-auto mb-2" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary)' }} />
              <div style={{ fontWeight: 600 }}>3 Bedrooms</div>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
              <Bath className="mx-auto mb-2" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary)' }} />
              <div style={{ fontWeight: 600 }}>2 Bathrooms</div>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center', background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
              <Square className="mx-auto mb-2" style={{ margin: '0 auto 0.5rem', color: 'var(--color-primary)' }} />
              <div style={{ fontWeight: 600 }}>120 sqm</div>
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ padding: '2rem', background: 'var(--color-bg-secondary)', borderRadius: '1rem', border: '1px solid var(--color-border)', position: 'sticky', top: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Agent Contact</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>RM</div>
              <div>
                <div style={{ fontWeight: 600 }}>Robert Manuel</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Licensed Broker</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> Call Broker
              </button>
              <button className="btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: '1px solid var(--color-border)' }}>
                <Mail size={18} /> Inquire Now
              </button>
            </div>
            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-success)', fontWeight: 600 }}>
                <ShieldCheck size={16} /> Certified Quality
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                <CheckCircle2 size={16} /> Bank Financing Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
