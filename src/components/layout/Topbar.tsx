import React from 'react';
import { Search, Bell } from 'lucide-react';
import './Topbar.css';

export default function Topbar() {
    return (
        <header className="app-topbar">
            <div className="topbar-search">
                <Search className="search-icon" size={18} />
                <input
                    type="text"
                    placeholder="Search brands, properties, or lawyers..."
                    className="search-input"
                />
            </div>
            <div className="topbar-actions">
                <button className="icon-btn" aria-label="Notifications">
                    <Bell size={20} />
                    <span className="notification-badge"></span>
                </button>
                <div className="profile-dropdown">
                    <div className="avatar small">JD</div>
                </div>
            </div>
        </header>
    );
}
