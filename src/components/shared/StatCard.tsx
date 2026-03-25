import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    iconColor: 'orange' | 'blue' | 'green';
}

export default function StatCard({ title, value, icon: Icon, iconColor }: StatCardProps) {
    const iconGradients = {
        orange: 'from-[#F97316] to-[#FB923C] shadow-[0_8px_30px_rgb(249,115,22,0.3)]',
        blue: 'from-[#2B5CFE] to-[#60A5FA] shadow-[0_8px_30px_rgb(43,92,254,0.3)]',
        green: 'from-[#059669] to-[#34D399] shadow-[0_8px_30px_rgb(5,150,105,0.3)]',
    };

    return (
        <div className="bg-white p-8 rounded-[32px] border border-[#F1F5F9] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex items-center gap-6 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 h-full group">
            <div className={`bg-gradient-to-br ${iconGradients[iconColor]} w-16 h-16 rounded-[22px] flex items-center justify-center text-white transition-transform group-hover:scale-110 duration-500`}>
                <Icon size={28} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-[0.15em]">{title}</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#0A192F] tracking-tighter">{value}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFB020] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>
        </div>
    );
}
