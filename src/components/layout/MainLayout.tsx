"use client";

<<<<<<< HEAD
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useAuth } from "@/store/useAuth";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const isLandingOrAuth =
    pathname === "/landing" ||
    pathname?.startsWith("/landing/") ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/my-tickets" ||
    pathname === "/events" ||
    pathname?.startsWith("/events/");

  // Optional: redirect if not authenticated
  useEffect(() => {
    if (!isLandingOrAuth && !isAuthenticated) {
      router.push("/login");
=======
export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { isAuthenticated } = useAuth();
    
    // Check if current route is landing, auth, or admin related
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
        // Redirect to login if accessing a protected route without auth
        if (typeof window !== 'undefined' && !isLandingOrAuth && !isAuthenticated) {
            router.push('/login');
        }
    }, [isLandingOrAuth, isAuthenticated, router]);

    // For landing, auth, or admin routes, we don't wrap with Sidebar/Topbar (Admin has its own layout)
    if (isLandingOrAuth) {
        return <>{children}</>;
>>>>>>> 9b6d772 (Fixed errors)
    }
  }, [isAuthenticated, isLandingOrAuth, router]);

<<<<<<< HEAD
  if (isLandingOrAuth) {
    return <>{children}</>;
  }
=======
    // Show nothing until redirect occurs (prevents content flash on protected routes)
    if (!isAuthenticated) {
        return null;
    }
>>>>>>> 9b6d772 (Fixed errors)

  // Prevent flash before redirect
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-grow p-8 overflow-y-auto">
          <div className="max-w-[1200px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}