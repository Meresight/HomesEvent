"use client";
import React from 'react';
import { FileText, Download, FilePlus, Search, Filter } from 'lucide-react';

const documents = [
  { id: 1, title: 'Deed of Absolute Sale', category: 'Sales', format: 'PDF', size: '250 KB' },
  { id: 2, title: 'Contract to Sell', category: 'General', format: 'DOCX', size: '180 KB' },
  { id: 3, title: 'Lease Agreement Template', category: 'Rental', format: 'PDF', size: '320 KB' },
  { id: 4, title: 'Special Power of Attorney', category: 'Authorization', format: 'PDF', size: '150 KB' },
  { id: 5, title: 'Earnest Money Agreement', category: 'Sales', format: 'PDF', size: '120 KB' },
];

export default function DocumentsPage() {
  return (
    <div className="documents-page">
      <div className="section-header" style={{ marginBottom: '2.5rem' }}>
        <h1 className="section-title">Real Estate Documents</h1>
        <p className="section-subtitle">Downloadable legal templates and resources</p>
      </div>

      <div className="flex gap-4 mb-8" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ position: 'relative', flexGrow: 1 }}>
          <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} size={18} />
          <input type="text" placeholder="Search templates..." style={{ 
            width: '100%', 
            padding: '0.75rem 1.25rem 0.75rem 3rem', 
            borderRadius: '0.5rem', 
            border: '1px solid var(--color-border)' 
          }} />
        </div>
        <button className="btn" style={{ border: '1px solid var(--color-border)', borderRadius: '0.5rem', padding: '0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={18} /> Filter
        </button>
        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FilePlus size={18} /> Upload Template
        </button>
      </div>

      <div className="card overflow-hidden" style={{ background: 'white', borderRadius: '1rem', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#f8fafc', borderBottom: '1px solid var(--color-border)' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: '1.25rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Document Name</th>
              <th style={{ textAlign: 'left', padding: '1.25rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Category</th>
              <th style={{ textAlign: 'left', padding: '1.25rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Filesize</th>
              <th style={{ textAlign: 'right', padding: '1.25rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc => (
              <tr key={doc.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FileText size={20} style={{ color: 'var(--color-primary)' }} />
                    <span style={{ fontWeight: 600 }}>{doc.title}</span>
                  </div>
                </td>
                <td style={{ padding: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>{doc.category}</span>
                </td>
                <td style={{ padding: '1.25rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{doc.size}</td>
                <td style={{ padding: '1.25rem', textAlign: 'right' }}>
                  <button className="btn-icon" style={{ color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Download size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
