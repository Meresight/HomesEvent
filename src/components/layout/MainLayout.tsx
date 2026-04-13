"use client";

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

  // Check if current route is landing, auth, or admin related
  const isLandingOrAuth =
    pathname === "/landing" ||
    pathname?.startsWith("/landing/") ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/my-tickets" ||
    pathname === "/events" ||
    pathname?.startsWith("/events/") ||
    pathname === "/admin" ||
    pathname?.startsWith("/admin/");

  useEffect(() => {
    // Redirect to login if accessing a protected route without auth
    if (typeof window !== "undefined" && !isLandingOrAuth && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLandingOrAuth, isAuthenticated, router]);

  // For landing, auth, or admin routes, we don't wrap with Sidebar/Topbar (Admin has its own layout)
  if (isLandingOrAuth) {
    return <>{children}</>;
  }

  // Show nothing until redirect occurs (prevents content flash on protected routes)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-grow flex flex-col overflow-hidden bg-white">
        <Topbar />
        <main className="flex-grow p-8 overflow-y-auto bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}