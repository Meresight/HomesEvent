"use client";
import React, { useState } from "react";
import {
  Lock, Bell, Trash2, Shield, Eye, EyeOff, CheckCircle2, Globe
} from "lucide-react";

type SettingsTab = "security" | "notifications" | "privacy";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("security");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  const [notifPrefs, setNotifPrefs] = useState({
    emailEvents: true,
    emailRegistrations: true,
    emailReminders: true,
    pushEnabled: false,
    smsReminders: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs: { id: SettingsTab; label: string; icon: React.ReactNode }[] = [
    { id: "security", label: "Security", icon: <Lock size={16} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={16} /> },
    { id: "privacy", label: "Privacy", icon: <Shield size={16} /> },
  ];

  return (
    <div className="max-w-[800px] w-full pb-10">
      <h1 className="text-3xl font-black text-[#002143] tracking-tight mb-10">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-2 bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl p-1.5 mb-8 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
              activeTab === tab.id
                ? "bg-white text-[#002143] shadow-sm"
                : "text-[#94A3B8] hover:text-[#4A5568]"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Security Tab */}
      {activeTab === "security" && (
        <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-10 shadow-sm flex flex-col gap-8">
          <div>
            <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-1">Security</p>
            <h2 className="text-2xl font-black text-[#002143]">Change Password</h2>
            <p className="text-sm text-[#94A3B8] font-medium mt-2">Use a strong password with at least 8 characters.</p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { label: "Current Password", key: "current", show: showCurrent, toggle: () => setShowCurrent((v) => !v) },
              { label: "New Password", key: "newPass", show: showNew, toggle: () => setShowNew((v) => !v) },
              { label: "Confirm New Password", key: "confirm", show: showConfirm, toggle: () => setShowConfirm((v) => !v) },
            ].map(({ label, key, show, toggle }) => (
              <div key={key} className="flex flex-col gap-2">
                <label className="text-[12px] font-black text-[#002143] uppercase tracking-tight">{label}</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    value={passwords[key as keyof typeof passwords]}
                    onChange={(e) => setPasswords((p) => ({ ...p, [key]: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full px-6 py-4 pr-14 bg-white border border-[#E2E8F0] rounded-[18px] text-sm font-bold text-[#002143] outline-none focus:ring-4 focus:ring-[#1730A8]/5 focus:border-[#1730A8]/30 placeholder:text-[#CBD5E1] transition-all"
                  />
                  <button
                    type="button"
                    onClick={toggle}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#002143] transition-colors"
                  >
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4 border-t border-[#F1F5F9]">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-10 py-4 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] transition-all shadow-lg"
            >
              {saved ? <><CheckCircle2 size={16} /> Saved!</> : "Update Password"}
            </button>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-10 shadow-sm flex flex-col gap-6">
          <div>
            <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-1">Preferences</p>
            <h2 className="text-2xl font-black text-[#002143]">Notification Settings</h2>
          </div>

          <div className="divide-y divide-[#F1F5F9]">
            {[
              { key: "emailEvents", label: "New Event Announcements", desc: "Get notified when new events are published in your area." },
              { key: "emailRegistrations", label: "Registration Confirmations", desc: "Receive email receipts and ticket details after registering." },
              { key: "emailReminders", label: "Event Reminders", desc: "Reminders 24 hours and 1 hour before your registered events." },
              { key: "pushEnabled", label: "Push Notifications", desc: "Browser push notifications for real-time updates." },
              { key: "smsReminders", label: "SMS Reminders", desc: "Text message reminders sent to your mobile number." },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between py-5">
                <div>
                  <p className="text-sm font-black text-[#002143]">{label}</p>
                  <p className="text-xs text-[#94A3B8] font-medium mt-0.5">{desc}</p>
                </div>
                <button
                  onClick={() => setNotifPrefs((p) => ({ ...p, [key]: !p[key as keyof typeof notifPrefs] }))}
                  className={`relative w-12 h-6 rounded-full transition-all shrink-0 ml-6 ${
                    notifPrefs[key as keyof typeof notifPrefs] ? "bg-[#1730A8]" : "bg-[#E2E8F0]"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                      notifPrefs[key as keyof typeof notifPrefs] ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4 border-t border-[#F1F5F9]">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-10 py-4 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] transition-all shadow-lg"
            >
              {saved ? <><CheckCircle2 size={16} /> Saved!</> : "Save Preferences"}
            </button>
          </div>
        </div>
      )}

      {/* Privacy Tab */}
      {activeTab === "privacy" && (
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-[40px] border border-[#F1F5F9] p-10 shadow-sm flex flex-col gap-6">
            <div>
              <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-1">Privacy</p>
              <h2 className="text-2xl font-black text-[#002143]">Profile Visibility</h2>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Public Profile", desc: "Allow organizers to view your profile name when you register for their events." },
                { label: "Show in Attendee List", desc: "Display your name in the public attendee list for events." },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-center justify-between py-4 border-b border-[#F1F5F9] last:border-0">
                  <div>
                    <p className="text-sm font-black text-[#002143]">{label}</p>
                    <p className="text-xs text-[#94A3B8] font-medium mt-0.5">{desc}</p>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-[#1730A8] relative ml-6 cursor-pointer">
                    <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 rounded-[32px] border border-red-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Trash2 size={18} className="text-red-500" />
              <h3 className="text-base font-black text-red-600">Danger Zone</h3>
            </div>
            <p className="text-sm text-red-500/80 font-medium mb-6">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <button className="px-8 py-3 bg-white border-2 border-red-200 text-red-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all">
              Delete My Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
