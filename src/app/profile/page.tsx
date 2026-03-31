"use client";
import React from 'react';

export default function ProfileModule() {
    return (
        <div className="flex flex-col gap-10 pb-24 max-w-[1400px]">
             {/* Header Area */}
             <div className="flex justify-between items-center opacity-0 h-0 overflow-hidden">
                <h1 className="text-3xl font-black text-[#002143] tracking-tight uppercase">My Profile</h1>
            </div>

            <div className="bg-white rounded-[40px] border border-[#F1F5F9] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] p-12 lg:p-16 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Photo Management Column */}
                    <div className="flex flex-col gap-6 items-center lg:items-start shrink-0">
                        <div className="w-72 h-72 bg-[#EAEEF3] rounded-[32px] overflow-hidden relative group shadow-inner">
                            {/* Placeholder for Photo */}
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-xs font-black text-[#94A3B8] uppercase tracking-[0.2em]">Profile Photo</span>
                            </div>
                            <button className="absolute bottom-6 right-6 bg-[#1730A8] text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Change photo
                            </button>
                        </div>
                    </div>

                    {/* Form Information Column */}
                    <div className="flex-grow flex flex-col gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { label: 'First Name', placeholder: 'John Doe' },
                                { label: 'Last Name', placeholder: 'John Doe' },
                                { label: 'Email Address', placeholder: 'John Doe' },
                                { label: 'Email Address', placeholder: 'John Doe' },
                                { label: 'Mobile Number', placeholder: 'John Doe' },
                                { label: 'License Expiry', placeholder: 'John Doe' },
                            ].map((field, idx) => (
                                <div key={idx} className="flex flex-col gap-2.5">
                                    <label className="text-[12px] font-black text-[#002143] uppercase tracking-tight ml-1">{field.label}</label>
                                    <input 
                                        type="text" 
                                        placeholder={field.placeholder} 
                                        className="w-full px-6 py-4 bg-white border border-[#E2E8F0] rounded-[18px] text-[13px] font-bold text-[#002143] outline-none focus:ring-4 focus:ring-[#1730A8]/5 focus:border-[#1730A8]/30 placeholder:text-[#CBD5E1] transition-all"
                                    />
                                </div>
                            ))}

                            <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-2.5">
                                <label className="text-[12px] font-black text-[#002143] uppercase tracking-tight ml-1">PRC License Number</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe" 
                                    className="w-full px-6 py-4 bg-white border border-[#E2E8F0] rounded-[18px] text-[13px] font-bold text-[#002143] outline-none focus:ring-4 focus:ring-[#1730A8]/5 focus:border-[#1730A8]/30 placeholder:text-[#CBD5E1] transition-all"
                                />
                            </div>

                            <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-2.5">
                                <label className="text-[12px] font-black text-[#002143] uppercase tracking-tight ml-1">Organization/ Company</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe" 
                                    className="w-full px-6 py-4 bg-white border border-[#E2E8F0] rounded-[18px] text-[13px] font-bold text-[#002143] outline-none focus:ring-4 focus:ring-[#1730A8]/5 focus:border-[#1730A8]/30 placeholder:text-[#CBD5E1] transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-12 border-t border-[#F1F5F9]">
                    <button className="px-10 py-4 border-2 border-[#1730A8] text-[#1730A8] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1730A8]/5 active:scale-95 transition-all">
                        Cancel
                    </button>
                    <button className="px-16 py-4 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-[0.25em] shadow-[0_20px_40px_-10px_rgba(29,78,216,0.3)] hover:scale-[1.03] active:scale-95 transition-all">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
