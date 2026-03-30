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
    }
  }, [isAuthenticated, isLandingOrAuth, router]);

  if (isLandingOrAuth) {
    return <>{children}</>;
  }

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