"use client";
import React from 'react';
import { Camera, Mail, Phone, Calendar, Hash, Building2, User } from 'lucide-react';

export default function ProfileModule() {
    return (
        <div className="flex flex-col gap-12 pb-24">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-[#0A192F] tracking-tight mb-2">Account Settings</h1>
                    <p className="text-sm font-bold text-[#94A3B8]">Manage your professional presence and identity</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-white border border-[#F1F5F9] text-[#0A192F] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F8FAFC] transition-all shadow-sm">
                        View Public Profile
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[48px] border border-[#F1F5F9] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left Column: Avatar & Quick Info */}
                    <div className="p-12 border-b lg:border-b-0 lg:border-r border-[#F1F5F9] bg-[#F8FAFC]/30">
                        <div className="flex flex-col items-center">
                            <div className="w-56 h-56 bg-white border-8 border-white rounded-[40px] shadow-2xl overflow-hidden relative group mb-8">
                                <img 
                                    src="https://i.pravatar.cc/150?u=ken" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Profile"
                                />
                                <div className="absolute inset-0 bg-[#0A192F]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer backdrop-blur-sm">
                                    <Camera size={28} className="text-white mb-2" />
                                    <span className="text-white font-black text-[10px] uppercase tracking-widest">Update Identity</span>
                                </div>
                            </div>
                            
                            <h2 className="text-2xl font-black text-[#0A192F] tracking-tight mb-1">Kenneth S.</h2>
                            <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-8">Super Administrator</p>
                            
                            <div className="w-full flex flex-col gap-4">
                                <div className="p-5 bg-white rounded-2xl border border-[#F1F5F9] shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                                    <div className="w-10 h-10 bg-blue-50 text-[#2B5CFE] rounded-xl flex items-center justify-center">
                                        <Hash size={18} strokeWidth={2.5}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest mb-0.5">PRC License</span>
                                        <span className="text-xs font-bold text-[#0A192F]">0012345-REB</span>
                                    </div>
                                </div>
                                <div className="p-5 bg-white rounded-2xl border border-[#F1F5F9] shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                                        <Calendar size={18} strokeWidth={2.5}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest mb-0.5">Member Since</span>
                                        <span className="text-xs font-bold text-[#0A192F]">March 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Detailed Form */}
                    <div className="lg:col-span-2 p-12 lg:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { label: 'First Name', placeholder: 'Kenneth', icon: User },
                                { label: 'Last Name', placeholder: 'S.', icon: User },
                                { label: 'Email Address', placeholder: 'kenneth@homes.ph', icon: Mail },
                                { label: 'Mobile Number', placeholder: '+63 912 345 6789', icon: Phone },
                                { label: 'License Expiry', placeholder: 'December 2026', icon: Calendar },
                                { label: 'Organization', placeholder: 'Homes.ph Management', icon: Building2 },
                            ].map((field) => (
                                <div key={field.label} className="flex flex-col gap-3 group">
                                    <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">{field.label}</label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8] group-focus-within:text-[#2B5CFE] transition-colors">
                                            <field.icon size={18} strokeWidth={2.5} />
                                        </div>
                                        <input 
                                            type="text" 
                                            defaultValue={field.placeholder} 
                                            className="w-full pl-14 pr-6 py-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[22px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 focus:border-[#2B5CFE]/20 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                            ))}
                            
                            <div className="md:col-span-2 flex flex-col gap-3 group">
                                <label className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em] px-1">PRC License Description</label>
                                <textarea 
                                    className="w-full p-6 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[32px] text-sm font-bold text-[#0A192F] outline-none focus:ring-4 focus:ring-[#2B5CFE]/5 focus:border-[#2B5CFE]/20 transition-all shadow-sm h-32 resize-none"
                                    defaultValue="Licensed real estate broker with specialization in high-density residential developments and CPD event coordination."
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-12 border-t border-[#F1F5F9] gap-6">
                            <button className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest hover:text-red-500 transition-colors">
                                Deactivate Account
                            </button>
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <button className="flex-1 sm:flex-none px-12 py-5 bg-white border border-[#E2E8F0] rounded-[20px] text-[11px] font-black uppercase tracking-widest text-[#0A192F] hover:bg-[#F8FAFC] transition-all">
                                    Discard Changes
                                </button>
                                <button className="flex-1 sm:flex-none px-16 py-5 bg-[#0A192F] text-white rounded-[20px] font-black text-xs uppercase tracking-[0.2em] shadow-[0_15px_30px_-5px_rgba(10,25,47,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(10,25,47,0.4)] transition-all hover:scale-105 active:scale-95">
                                    Securely Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
