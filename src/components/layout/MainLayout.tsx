"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLanding = pathname === '/landing' || pathname?.startsWith('/landing/');

    if (isLanding) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-grow flex flex-col overflow-hidden">
                <Topbar />
                <main className="flex-grow p-8 overflow-y-auto">
                    <div className="max-w-[1200px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
