"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import { cn } from '@/lib/utils';
import { useAuth } from '@/store/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Only run on client side
        if (typeof window !== 'undefined') {
            if (!isAuthenticated || user?.role !== 'admin') {
                router.push('/');
            }
        }
    }, [isAuthenticated, user, router]);

    // Show nothing while checking (to avoid flash of content)
    if (!isAuthenticated || user?.role !== 'admin') {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#F9FBFF]">
            <Sidebar 
                isCollapsed={isSidebarCollapsed} 
                onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
            />
            
            <div 
                className={cn(
                    "transition-all duration-300",
                    isSidebarCollapsed ? "pl-20" : "pl-64"
                )}
            >
                <Header 
                    isSidebarCollapsed={isSidebarCollapsed} 
                    onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
                />
                
                <main className="pt-[96px] px-8 pb-8">
                    <div className="max-w-[1400px] mx-auto animate-fade-in">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
