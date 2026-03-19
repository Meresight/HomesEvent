"use client";
import React from 'react';
import Link from 'next/link';
import { Building2, Filter, Star, MapPin } from 'lucide-react';

const projects = [
  { id: 1, name: 'The Rise Tower', developer: 'Shang Properties', units: 280, available: 45, completion: '2025', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Vista Heights', developer: 'Vista Land', units: 350, available: 12, completion: 'Q4 2026', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Empire East Place', developer: 'Empire East', units: 150, available: 80, completion: 'Ready for Occupancy', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400' },
];

export default function ProjectsListingPage() {
  return (
    <div className="projects-listing">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">Projects Page Info</h1>
        <p className="section-subtitle">Discover new developments and exclusive properties</p>
      </div>

      <div className="card mb-8" style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '1rem', border: '1px solid var(--color-border)', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Filter size={20} />
        <span style={{ fontWeight: 600 }}>Filter by:</span>
        <select className="input" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem' }}><option>Developer</option></select>
        <select className="input" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem' }}><option>Status</option></select>
      </div>

      <div className="grid gap-6" style={{ display: 'grid', gap: '1.5rem' }}>
        {projects.map(project => (
          <Link href={`/homesph/projects/${project.id}`} key={project.id} className="card hover-effect" style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            background: 'white',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{ height: '100%', minHeight: '200px' }}>
              <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{project.name}</h3>
                  <div style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>by {project.developer}</div>
                </div>
                <div style={{ background: '#f0f9ff', color: '#0369a1', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700 }}>
                  {project.completion}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Total Units</div>
                  <div style={{ fontWeight: 600 }}>{project.units}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Available</div>
                  <div style={{ fontWeight: 600, color: 'var(--color-success)' }}>{project.available} Units</div>
                </div>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                View Project Information <Building2 size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
