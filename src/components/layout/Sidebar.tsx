"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, CalendarDays, CalendarClock, Megaphone, Ticket, User, Settings } from 'lucide-react';
import './Sidebar.css';

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Events', href: '/events', icon: CalendarDays },
    { name: 'Calendar', href: '/calendar', icon: CalendarClock },
    { name: 'Announcements', href: '/announcements', icon: Megaphone },
    { name: 'My Registrations', href: '/registrations', icon: Ticket },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Admin', href: '/admin', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="app-sidebar">
            <div className="sidebar-header">
                <div className="logo-placeholder">
                    <span className="logo-text">Homes.ph Event</span>
                </div>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                        return (
                            <li key={item.name}>
                                <Link href={item.href} className={`sidebar-link ${isActive ? 'active' : ''}`}>
                                    <Icon className="sidebar-icon" size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="sidebar-footer">
                <div className="user-mini-profile">
                    <div className="avatar">JD</div>
                    <div className="user-info">
                        <p className="user-name">John Doe</p>
                        <p className="user-role">Employee</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
