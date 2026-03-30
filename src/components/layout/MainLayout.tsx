"use client";
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useAuth } from '@/store/useAuth';
import { useEffect } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
<<<<<<< Updated upstream
    const isLandingOrAuth = pathname === '/landing' || pathname?.startsWith('/landing/') || pathname === '/login' || pathname === '/signup' || pathname === '/my-tickets';
=======
    const router = useRouter();
    const { isAuthenticated } = useAuth();
    
    const isLandingOrAuth = 
      pathname === '/landing' || 
      pathname?.startsWith('/landing/') || 
      pathname === '/login' || 
      pathname === '/signup' || 
      pathname === '/my-tickets' || 
      pathname === '/events' || 
      pathname?.startsWith('/events/') ||
      pathname === '/admin' ||
      pathname?.startsWith('/admin/');

    useEffect(() => {
        if (typeof window !== 'undefined' && !isLandingOrAuth && !isAuthenticated) {
            router.push('/login');
        }
    }, [isLandingOrAuth, isAuthenticated, router]);
>>>>>>> Stashed changes

    if (isLandingOrAuth) {
        return <>{children}</>;
    }

    // Show nothing until redirect occurs (prevents content flash)
    if (!isAuthenticated) {
        return null;
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
