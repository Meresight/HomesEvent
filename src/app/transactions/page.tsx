"use client";
import React, { useState } from 'react';
import { QrCode, CreditCard, ChevronRight, Upload, X, Check } from 'lucide-react';

export default function TransactionsPage() {
  const [selectedPayment, setSelectedPayment] = useState('GCash');

  const paymentTypes = [
    { id: 'GCash', name: 'GCash', sub: 'Globe Fintech', icon: 'G' },
    { id: 'Maya', name: 'Maya', sub: 'PayMaya', icon: 'M' },
    { id: 'BDO', name: 'BDO', sub: 'Banco De Oro', icon: 'B' },
    { id: 'BPI', name: 'BPI', sub: 'Bank of the PI', icon: 'B' },
    { id: 'UnionBank', name: 'UnionBank', sub: 'Union Bank', icon: 'U' },
    { id: 'OtherBank', name: 'Other Bank', sub: 'Custom Bank', icon: 'O' },
  ];

  return (
    <div className="transactions-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>
      <div className="header" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>Transactions</h1>
        <p style={{ color: '#64748b' }}>Manage payment methods & view received payments</p>
      </div>

      <div className="tabs" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginBottom: '2rem' }}>
        <button style={{ padding: '0.5rem 1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white', fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CreditCard size={18} /> PAYMENTS
        </button>
        <button style={{ padding: '0.5rem 1.5rem', borderRadius: '0.75rem', border: '1px solid var(--color-primary)', background: 'white', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
          <QrCode size={18} /> QR PAYMENTS
        </button>
      </div>

      <div className="card" style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', border: '1px solid #f1f5f9', position: 'relative' }}>
        <button style={{ position: 'absolute', right: '2rem', top: '2rem', color: '#94a3b8', border: 'none', background: 'none', cursor: 'pointer' }}>
          <X size={24} />
        </button>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem' }}>Add Payment QR</h2>

        <div className="form-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Payment Type */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '1rem' }}>Payment Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {paymentTypes.map((type) => (
                <div 
                  key={type.id}
                  onClick={() => setSelectedPayment(type.id)}
                  style={{ 
                    padding: '1.25rem', 
                    borderRadius: '1rem', 
                    border: selectedPayment === type.id ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                    background: selectedPayment === type.id ? '#eff6ff' : 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    position: 'relative'
                  }}
                >
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '0.75rem', 
                    background: type.id === 'GCash' ? '#3b82f6' : (type.id === 'Maya' ? '#000' : '#003366'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 800,
                    fontSize: '1.2rem'
                  }}>
                    {type.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{type.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{type.sub}</div>
                  </div>
                  {selectedPayment === type.id && (
                    <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: '#3b82f6', color: 'white', borderRadius: '50%', padding: '2px' }}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Assign to Location */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '1rem' }}>Assign to Location (Optional)</label>
            <select style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white', color: '#1e293b', appearance: 'none' }}>
              <option>All Locations (Global)</option>
              <option>Makati Branch</option>
              <option>BGC Branch</option>
            </select>
          </div>

          {/* Account Name */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '1rem' }}>Account Name</label>
            <input 
              type="text" 
              placeholder="e.g. Juan Dela Cruz" 
              style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: 'white' }}
            />
          </div>

          {/* QR Code Image */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '1rem' }}>QR Code Image</label>
            <div style={{ 
              border: '2px dashed #e2e8f0', 
              borderRadius: '1rem', 
              padding: '4rem', 
              textAlign: 'center', 
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              maxWidth: '300px'
            }}>
              <Upload size={32} />
              <div style={{ fontSize: '0.875rem' }}>
                <span style={{ color: '#3b82f6', fontWeight: 600 }}>Click to upload QR</span>
                <p style={{ marginTop: '0.25rem', fontSize: '0.75rem' }}>Auto-crops the QR square</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
