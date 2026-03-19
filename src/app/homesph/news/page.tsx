"use client";
import React from 'react';
import Link from 'next/link';

const newsItems = [
  { id: 1, title: 'Real Estate Market Trends 2026', category: 'Market Info', date: 'Mar 15, 2026', summary: 'The Philippine real estate market shows strong growth in the residential sector...', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'BGC Development Phase 4 Begins', category: 'Development', date: 'Mar 12, 2026', summary: 'New infrastructure projects are set to transform the nördlich edge of Bonifacio Global City...', image: 'https://images.unsplash.com/photo-1449156003053-c30670b96839?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Tips for First-Time Home Buyers', category: 'Guides', date: 'Mar 10, 2026', summary: 'Navigating the home buying process can be overwhelming. Here is a step-by-step guide...', image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=400' },
];

export default function NewsListingPage() {
  return (
    <div className="news-listing">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <h1 className="section-title">News Details Page</h1>
        <p className="section-subtitle">Stay informed about the property market</p>
      </div>

      <div className="grid gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {newsItems.map(news => (
          <Link href={`/homesph/news/${news.id}`} key={news.id} className="news-card hover-effect" style={{
            background: 'white',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ height: '220px' }}>
              <img src={news.image} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', background: 'var(--color-bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 600 }}>{news.category}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{news.date}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{news.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineClamp: 3 }}>{news.summary}</p>
              <div style={{ marginTop: 'auto', color: 'var(--color-primary)', fontWeight: 600 }}>Read More</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
