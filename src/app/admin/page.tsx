"use client";
import React from 'react';
import { Settings, BarChart3, Users, CalendarDays, Plus } from 'lucide-react';
import Link from 'next/link';

export default function AdminModule() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="bg-background-card p-6 rounded-lg border border-border shadow-soft flex flex-col items-center text-center">
                    <div className="mb-2 text-primary"><CalendarDays size={24} /></div>
                    <div className="text-3xl font-bold text-primary">24</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-text-muted mt-1">Total Events</div>
                </div>
                <div className="bg-background-card p-6 rounded-lg border border-border shadow-soft flex flex-col items-center text-center">
                    <div className="mb-2 text-primary"><Users size={24} /></div>
                    <div className="text-3xl font-bold text-primary">450</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-text-muted mt-1">Active Users</div>
                </div>
                <div className="bg-background-card p-6 rounded-lg border border-border shadow-soft flex flex-col items-center text-center">
                    <div className="mb-2 text-primary"><BarChart3 size={24} /></div>
                    <div className="text-3xl font-bold text-primary">82%</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-text-muted mt-1">Avg Attendance</div>
                </div>
                <div className="bg-background-card p-6 rounded-lg border border-border shadow-soft flex flex-col items-center text-center">
                    <div className="mb-2 text-primary"><Settings size={24} /></div>
                    <div className="text-3xl font-bold text-primary">12</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-text-muted mt-1">Departments</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-background-card p-6 rounded-lg border border-border shadow-soft">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-primary">Manage Events</h3>
                            <Link href="/events/create" className="bg-accent hover:bg-accent-hover text-primary p-1.5 px-3 rounded-md text-sm font-bold transition-all shadow-sm flex items-center gap-2">
                                <Plus size={16} /> New Event
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="border-b-2 border-border text-left text-text-muted uppercase text-[10px] font-bold tracking-wider">
                                        <th className="pb-3 px-2">Event Name</th>
                                        <th className="pb-3 px-2">Date</th>
                                        <th className="pb-3 px-2">Registrations</th>
                                        <th className="pb-3 px-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border hover:bg-background-main/30 transition-colors">
                                        <td className="py-4 px-2 font-bold text-primary">Q3 Townhall Meeting</td>
                                        <td className="py-4 px-2 text-text-muted">Oct 15, 2026</td>
                                        <td className="py-4 px-2 font-medium">120 / 200</td>
                                        <td className="py-4 px-2 text-accent font-bold uppercase text-[10px] cursor-pointer hover:underline">Edit</td>
                                    </tr>
                                    <tr className="border-b border-border hover:bg-background-main/30 transition-colors">
                                        <td className="py-4 px-2 font-bold text-primary">Annual Company Retreat</td>
                                        <td className="py-4 px-2 text-text-muted">Nov 10, 2026</td>
                                        <td className="py-4 px-2 font-medium">350 / 500</td>
                                        <td className="py-4 px-2 text-accent font-bold uppercase text-[10px] cursor-pointer hover:underline">Edit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-background-card p-6 rounded-lg border border-border shadow-soft h-full">
                        <h3 className="text-xl font-bold text-primary mb-6">Quick Actions</h3>
                        <div className="flex flex-col gap-3">
                            <button className="w-full p-4 border border-border rounded-lg text-left font-bold text-primary hover:bg-background-main hover:border-accent transition-all">Manage Users</button>
                            <button className="w-full p-4 border border-border rounded-lg text-left font-bold text-primary hover:bg-background-main hover:border-accent transition-all">Create Announcement</button>
                            <button className="w-full p-4 border border-border rounded-lg text-left font-bold text-primary hover:bg-background-main hover:border-accent transition-all">View Analytics Reports</button>
                            <button className="w-full p-4 border border-border rounded-lg text-left font-bold text-primary hover:bg-background-main hover:border-accent transition-all">System Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
