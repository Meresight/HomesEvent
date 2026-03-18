import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="app-layout">
            <Sidebar />
            <div className="app-main">
                <Topbar />
                <main className="app-content">
                    <div className="container">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
