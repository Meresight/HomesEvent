"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, MapPin, User, Settings, CreditCard, ChevronDown, ChevronRight as ChevronRightIcon } from 'lucide-react';
import './Sidebar.css';

const navItems = [
    { 
        name: 'HOMESPH', 
        href: '/homesph/rent', 
        icon: MapPin,
        subItems: [
            { name: 'Rent Property Page', href: '/homesph/rent' },
            { name: 'Projects Page Info', href: '/homesph/projects' },
            { name: 'Buy Details Page', href: '/homesph/buy' },
            { name: 'News Details Page', href: '/homesph/news' },
        ]
    },
    { 
        name: 'LEGALHOMES', 
        href: '/legal', 
        icon: User,
        subItems: [
            { name: 'Home', href: '/legal' },
            { name: 'Lawyers', href: '/legal/lawyers' },
            { name: 'Real Estate Law', href: '/legal/law-info' },
            { name: 'Documents', href: '/legal/documents' },
            { name: 'Dashboards', href: '/legal/user-dashboard' },
        ]
    },
    { 
        name: 'TRANSACTIONS', 
        href: '/transactions', 
        icon: CreditCard,
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [expandedMenus, setExpandedMenus] = React.useState<string[]>(['HOMESPH']);

    const toggleMenu = (name: string) => {
        setExpandedMenus(prev => 
            prev.includes(name) 
                ? prev.filter(m => m !== name) 
                : [...prev, name]
        );
    };

    return (
        <aside className="app-sidebar">
            <div className="sidebar-header">
                <div className="logo-placeholder">
                    <span className="logo-text">Homes.ph Portal</span>
                </div>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isMainActive = pathname.startsWith(item.href);
                        const isExpanded = expandedMenus.includes(item.name);
                        
                        return (
                            <li key={item.name}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Link href={item.href} className={`sidebar-link ${isMainActive && !item.subItems ? 'active' : ''}`} style={{ flexGrow: 1 }}>
                                        <Icon className="sidebar-icon" size={20} />
                                        <span>{item.name}</span>
                                    </Link>
                                    {item.subItems && (
                                        <button 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleMenu(item.name);
                                            }}
                                            style={{ padding: '8px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}
                                        >
                                            {isExpanded ? <ChevronDown size={16} /> : <ChevronRightIcon size={16} />}
                                        </button>
                                    )}
                                </div>
                                {item.subItems && isExpanded && (
                                    <ul className="sidebar-sub-nav">
                                        {item.subItems.map(sub => {
                                            const isSubActive = pathname === sub.href;
                                            return (
                                                <li key={sub.name}>
                                                    <Link href={sub.href} className={`sidebar-sub-link ${isSubActive ? 'active' : ''}`}>
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )}
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
