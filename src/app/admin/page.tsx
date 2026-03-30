"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/admin/dashboard');
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#1123AD] border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-500 font-medium">Redirecting to Dashboard...</p>
            </div>
        </div>
    );
}
