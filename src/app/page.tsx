"use client";
import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import './page.css';

const upcomingEvents = [
  { id: 1, title: 'Q3 Townhall Meeting', date: '2026-10-15T09:00:00Z', location: 'Main Auditorium', duration: '2 hours' },
  { id: 2, title: 'Engineering All-Hands', date: '2026-10-18T14:30:00Z', location: 'Virtual', duration: '1 hour' },
  { id: 3, title: 'New Hire Onboarding Workshop', date: '2026-10-20T10:00:00Z', location: 'Room 4B', duration: '4 hours' },
];

const announcements = [
  { id: 1, text: 'Mandatory Security Training due next Friday.', time: '2 hours ago' },
  { id: 2, text: 'Office facilities maintenance this weekend.', time: 'Yesterday' },
  { id: 3, text: 'Welcome our new VP of Engineering!', time: '2 days ago' },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="section-header">
        <h1 className="section-title" style={{ fontSize: '2rem' }}>Dashboard</h1>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-column">
          {/* Featured Event */}
          <div className="featured-event">
            <div className="featured-bg"></div>
            <div className="featured-content">
              <span className="featured-tag">Featured</span>
              <h2 className="featured-title">Annual Company Retreat 2026</h2>
              <div className="featured-meta">
                <div className="featured-meta-item">
                  <Calendar size={16} />
                  <span>Nov 10 - Nov 12, 2026</span>
                </div>
                <div className="featured-meta-item">
                  <MapPin size={16} />
                  <span>Boracay Island</span>
                </div>
              </div>
              <button className="btn btn-primary">Register Now</button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="card">
            <div className="section-header">
              <h3 className="section-title">Upcoming Events</h3>
              <Link href="/events" className="view-all">View All</Link>
            </div>
            <div className="event-list">
              {upcomingEvents.map(event => {
                const dateObj = new Date(event.date);
                const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
                const day = dateObj.toLocaleDateString('en-US', { day: '2-digit' });
                return (
                  <Link href={`/events/${event.id}`} key={event.id} className="event-card">
                    <div className="event-date-box">
                      <span className="event-month">{month}</span>
                      <span className="event-day">{day}</span>
                    </div>
                    <div className="event-info">
                      <h4 className="event-title">{event.title}</h4>
                      <div className="event-details">
                        <div className="event-detail-item">
                          <MapPin size={14} />
                          <span>{event.location}</span>
                        </div>
                        <div className="event-detail-item">
                          <Clock size={14} />
                          <span>{event.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ArrowRight size={20} className="event-detail-item" style={{ color: 'var(--color-border)' }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="dashboard-column">
          {/* Action Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">3</div>
              <div className="stat-label">Registered</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">12</div>
              <div className="stat-label">This Month</div>
            </div>
          </div>

          {/* Announcements */}
          <div className="card">
            <div className="section-header">
              <h3 className="section-title">Announcements</h3>
            </div>
            <div className="announcement-list">
              {announcements.map(announcement => (
                <div key={announcement.id} className="announcement-item">
                  <div className="announcement-title">{announcement.text}</div>
                  <div className="announcement-time">{announcement.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* My Registrations */}
          <div className="card" style={{ flexGrow: 1 }}>
            <div className="section-header">
              <h3 className="section-title">My Registrations</h3>
              <Link href="/registrations" className="view-all">View All</Link>
            </div>
            <div className="event-list">
              {upcomingEvents.slice(0, 2).map(event => {
                const dateObj = new Date(event.date);
                const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
                const day = dateObj.toLocaleDateString('en-US', { day: '2-digit' });
                return (
                  <div key={`reg-${event.id}`} className="event-card" style={{ background: 'var(--color-bg-main)', border: 'none', cursor: 'default' }}>
                    <div className="event-date-box" style={{ background: 'white' }}>
                      <span className="event-month">{month}</span>
                      <span className="event-day">{day}</span>
                    </div>
                    <div className="event-info">
                      <h4 className="event-title" style={{ fontSize: '0.875rem' }}>{event.title}</h4>
                      <div className="event-details">
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-success)' }}>Confirmed</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
