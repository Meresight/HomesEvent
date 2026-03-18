"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, X } from 'lucide-react';
import '../events.css';

export default function CreateEvent() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                <ArrowLeft size={18} />
                Back to Events
            </Link>

            <div className="section-header">
                <h1 className="section-title" style={{ fontSize: '2rem' }}>Create New Event</h1>
            </div>

            <div className="card">
                <form className="create-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label className="form-label">Event Title *</label>
                        <input type="text" className="input" placeholder="e.g. Q3 Townhall Meeting" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="input"
                            placeholder="What is this event about?"
                            style={{ minHeight: '120px', resize: 'vertical' }}
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Category *</label>
                            <select className="input" required>
                                <option value="">Select a category</option>
                                <option value="company-wide">Company-wide</option>
                                <option value="department">Department</option>
                                <option value="team-building">Team Building</option>
                                <option value="training">Training</option>
                                <option value="workshop">Workshop</option>
                                <option value="social">Social</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Organizer Department</label>
                            <select className="input">
                                <option value="">Select department</option>
                                <option value="hr">Human Resources</option>
                                <option value="engineering">Engineering</option>
                                <option value="marketing">Marketing</option>
                                <option value="sales">Sales</option>
                                <option value="product">Product</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Location (or Link for Virtual) *</label>
                        <input type="text" className="input" placeholder="e.g. Main Auditorium or Zoom Link" required />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Start Date & Time *</label>
                            <input type="datetime-local" className="input" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">End Date & Time *</label>
                            <input type="datetime-local" className="input" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Maximum Attendees</label>
                            <input type="number" className="input" placeholder="Leave empty for unlimited" min="1" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Banner Image URL</label>
                            <input type="url" className="input" placeholder="https://..." />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '16px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
                        <Link href="/events" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <X size={18} />
                            Cancel
                        </Link>
                        <button type="submit" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <Save size={18} />
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
