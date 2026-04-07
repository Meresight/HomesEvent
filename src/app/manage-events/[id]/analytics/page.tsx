"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";
import { TrendingUp, Users, DollarSign, Star } from "lucide-react";

const registrationsByDay = [
  { day: "Apr 8", count: 4 }, { day: "Apr 9", count: 7 }, { day: "Apr 10", count: 12 },
  { day: "Apr 11", count: 9 }, { day: "Apr 12", count: 18 }, { day: "Apr 13", count: 22 },
  { day: "Apr 14", count: 15 }, { day: "Apr 15", count: 8 },
];

const ticketBreakdown = [
  { name: "Full Event Pass", value: 28, color: "#1730A8" },
  { name: "Session 1 Only", value: 8, color: "#FFB020" },
  { name: "Session 2 Only", value: 4, color: "#002143" },
  { name: "Session 3 Only", value: 2, color: "#64748B" },
];

const revenueByDay = [
  { day: "Apr 8", revenue: 12000 }, { day: "Apr 9", revenue: 21000 },
  { day: "Apr 10", revenue: 36000 }, { day: "Apr 11", revenue: 27000 },
  { day: "Apr 12", revenue: 54000 }, { day: "Apr 13", revenue: 66000 },
  { day: "Apr 14", revenue: 45000 }, { day: "Apr 15", revenue: 24000 },
];

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (!percent) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return percent > 0.05 ? (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

export default function EventAnalyticsPage() {
  const params = useParams();
  const [period, setPeriod] = useState<"7d" | "30d" | "all">("7d");

  const stats = [
    { label: "Total Registrations", value: "42", delta: "+12 this week", icon: <Users size={20} />, color: "bg-[#1730A8]" },
    { label: "Total Revenue", value: "₱126,000", delta: "+₱45k this week", icon: <DollarSign size={20} />, color: "bg-[#059669]" },
    { label: "Avg. Rating", value: "4.7 / 5", delta: "Based on 18 reviews", icon: <Star size={20} />, color: "bg-[#FFB020]" },
    { label: "Check-In Rate", value: "89%", delta: "37 of 42 attended", icon: <TrendingUp size={20} />, color: "bg-[#7C3AED]" },
  ];

  return (
    <div className="max-w-[1200px] w-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
        <div>
          <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-1">Event Analytics</p>
          <h1 className="text-3xl font-black text-[#002143] tracking-tight">
            Mastering the Code: Real Estate Ethics
          </h1>
          <p className="text-sm font-bold text-[#94A3B8] mt-1">April 14, 2025 · Makati City</p>
        </div>
        {/* Period selector */}
        <div className="flex bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl p-1">
          {(["7d", "30d", "all"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                period === p ? "bg-white text-[#002143] shadow-sm" : "text-[#94A3B8]"
              }`}
            >
              {p === "7d" ? "7 Days" : p === "30d" ? "30 Days" : "All Time"}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-[28px] border border-[#F1F5F9] p-6 shadow-sm">
            <div className={`w-11 h-11 rounded-2xl ${stat.color} flex items-center justify-center text-white mb-4 shadow-sm`}>
              {stat.icon}
            </div>
            <p className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-[#002143]">{stat.value}</p>
            <p className="text-[11px] font-bold text-[#94A3B8] mt-1">{stat.delta}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* Registrations over time */}
        <div className="bg-white rounded-[32px] border border-[#F1F5F9] p-8 shadow-sm">
          <h3 className="text-base font-black text-[#002143] mb-6">Registrations Over Time</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={registrationsByDay} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 16, border: "none", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", fontSize: 12, fontWeight: 700 }} />
              <Bar dataKey="count" fill="#1730A8" radius={[8, 8, 0, 0]} name="Registrations" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue over time */}
        <div className="bg-white rounded-[32px] border border-[#F1F5F9] p-8 shadow-sm">
          <h3 className="text-base font-black text-[#002143] mb-6">Revenue (₱)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueByDay}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94A3B8", fontWeight: 700 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₱${(v / 1000).toFixed(0)}k`} />
              <Tooltip contentStyle={{ borderRadius: 16, border: "none", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", fontSize: 12, fontWeight: 700 }} formatter={(v: any) => [`₱${Number(v).toLocaleString()}`, "Revenue"]} />
              <Line type="monotone" dataKey="revenue" stroke="#FFB020" strokeWidth={3} dot={{ fill: "#FFB020", r: 5 }} activeDot={{ r: 7 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ticket Breakdown + Feedback */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Ticket breakdown pie */}
        <div className="bg-white rounded-[32px] border border-[#F1F5F9] p-8 shadow-sm">
          <h3 className="text-base font-black text-[#002143] mb-6">Ticket Type Breakdown</h3>
          <div className="flex gap-6 items-center">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={ticketBreakdown} cx="50%" cy="50%" outerRadius={85} dataKey="value" labelLine={false} label={renderCustomLabel}>
                  {ticketBreakdown.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-3 flex-1">
              {ticketBreakdown.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ background: item.color }} />
                    <span className="text-xs font-bold text-[#4A5568]">{item.name}</span>
                  </div>
                  <span className="text-sm font-black text-[#002143]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback summary */}
        <div className="bg-white rounded-[32px] border border-[#F1F5F9] p-8 shadow-sm">
          <h3 className="text-base font-black text-[#002143] mb-6">Feedback Summary</h3>
          <div className="flex items-center gap-6 mb-6">
            <div className="text-center">
              <p className="text-5xl font-black text-[#002143]">4.7</p>
              <div className="flex gap-1 justify-center mt-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} className={s <= 5 ? "text-[#FFB020] fill-[#FFB020]" : "text-[#E2E8F0]"} />
                ))}
              </div>
              <p className="text-[10px] font-bold text-[#94A3B8] mt-1">18 reviews</p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {[
                { label: "Overall", value: 4.7 }, { label: "Content", value: 4.8 },
                { label: "Speaker", value: 4.6 }, { label: "Venue", value: 4.5 },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest w-14">{label}</span>
                  <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB020] rounded-full" style={{ width: `${(value / 5) * 100}%` }} />
                  </div>
                  <span className="text-xs font-black text-[#002143] w-6">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl p-4">
            <p className="text-xs font-black text-[#002143] mb-1">Would Recommend</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-3 bg-[#F1F5F9] rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "94%" }} />
              </div>
              <span className="text-sm font-black text-green-600">94%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
