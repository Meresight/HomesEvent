"use client";
import React, { useState } from "react";
import { Bell, CheckCheck, Trash2, CalendarDays, TicketCheck, Megaphone, Clock, AlertCircle } from "lucide-react";

type NotifType = "event_update" | "registration_confirmed" | "reminder" | "announcement" | "check_in";

interface MockNotif {
  id: string;
  type: NotifType;
  title: string;
  message: string;
  isRead: boolean;
  time: string;
  eventTitle?: string;
}

const mockNotifications: MockNotif[] = [
  { id: "1", type: "registration_confirmed", title: "Registration Confirmed!", message: "Your registration for Mastering the Code: Elevating Philippine Real Estate Ethics has been confirmed. Your ticket code is HME-2025-001.", isRead: false, time: "2 mins ago", eventTitle: "Mastering the Code" },
  { id: "2", type: "reminder", title: "Event Tomorrow", message: "Don't forget! CPD Ethics Seminar is happening tomorrow at 9:00 AM at Makati City. Please bring a valid ID.", isRead: false, time: "1 hour ago", eventTitle: "CPD Ethics Seminar" },
  { id: "3", type: "announcement", title: "New CPD Program Available", message: "A new Continuing Professional Development program has been listed: Advanced Real Estate Law 2025. Early bird rate ends April 20.", isRead: false, time: "3 hours ago" },
  { id: "4", type: "event_update", title: "Event Updated", message: "The venue for Property Management Summit has been changed to SMX Convention Center, Manila. All other details remain the same.", isRead: true, time: "Yesterday", eventTitle: "Property Management Summit" },
  { id: "5", type: "check_in", title: "Check-In Successful", message: "You have been checked in to Broker Networking Night. Enjoy the event!", isRead: true, time: "3 days ago", eventTitle: "Broker Networking Night" },
  { id: "6", type: "announcement", title: "Platform Update", message: "We have added new features including digital CPD certificates and QR code check-in. Update your app to version 2.4 for the best experience.", isRead: true, time: "1 week ago" },
];

const iconMap: Record<NotifType, React.ReactNode> = {
  registration_confirmed: <TicketCheck size={20} className="text-green-500" />,
  reminder: <Clock size={20} className="text-[#FFB020]" />,
  announcement: <Megaphone size={20} className="text-[#1730A8]" />,
  event_update: <AlertCircle size={20} className="text-purple-500" />,
  check_in: <CheckCheck size={20} className="text-green-600" />,
};

const bgMap: Record<NotifType, string> = {
  registration_confirmed: "bg-green-50 border-green-100",
  reminder: "bg-amber-50 border-amber-100",
  announcement: "bg-blue-50 border-blue-100",
  event_update: "bg-purple-50 border-purple-100",
  check_in: "bg-emerald-50 border-emerald-100",
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<MockNotif[]>(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const filtered = filter === "unread" ? notifications.filter((n) => !n.isRead) : notifications;

  const markRead = (id: string) =>
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));

  const deleteNotif = (id: string) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  return (
    <div className="max-w-[800px] w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#002143] tracking-tight">Notifications</h1>
          {unreadCount > 0 && (
            <p className="text-sm font-bold text-[#94A3B8] mt-1">{unreadCount} unread</p>
          )}
        </div>
        <div className="flex items-center gap-4">
          {/* Filter tabs */}
          <div className="flex bg-[#F8FAFC] border border-[#F1F5F9] rounded-2xl p-1">
            {(["all", "unread"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                  filter === tab ? "bg-white text-[#002143] shadow-sm" : "text-[#94A3B8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#002143] text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[#001730] transition-all shadow-sm"
            >
              <CheckCheck size={14} /> Mark All Read
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="py-24 flex flex-col items-center text-center bg-white rounded-[40px] border border-[#F1F5F9]">
            <div className="w-20 h-20 bg-[#F8FAFC] rounded-[28px] flex items-center justify-center mb-6">
              <Bell size={36} className="text-[#CBD5E1]" />
            </div>
            <h3 className="text-xl font-black text-[#002143] mb-2">All Caught Up!</h3>
            <p className="text-[#94A3B8] font-bold text-sm">No {filter === "unread" ? "unread " : ""}notifications right now.</p>
          </div>
        ) : (
          filtered.map((notif) => (
            <div
              key={notif.id}
              onClick={() => markRead(notif.id)}
              className={`group flex items-start gap-5 p-6 rounded-[28px] border transition-all cursor-pointer hover:shadow-md ${
                notif.isRead
                  ? "bg-white border-[#F1F5F9]"
                  : `${bgMap[notif.type]} border shadow-sm`
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${notif.isRead ? "bg-[#F8FAFC]" : "bg-white shadow-sm"}`}>
                {iconMap[notif.type]}
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className={`text-sm font-black leading-tight mb-1 ${notif.isRead ? "text-[#4A5568]" : "text-[#002143]"}`}>
                      {notif.title}
                    </h4>
                    {notif.eventTitle && (
                      <span className="text-[10px] font-black text-[#FFB020] uppercase tracking-widest">
                        {notif.eventTitle}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] font-bold text-[#94A3B8] whitespace-nowrap">{notif.time}</span>
                    {!notif.isRead && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1730A8] shadow-sm" />
                    )}
                  </div>
                </div>
                <p className={`text-xs font-medium leading-relaxed mt-2 ${notif.isRead ? "text-[#94A3B8]" : "text-[#4A5568]"}`}>
                  {notif.message}
                </p>
              </div>

              {/* Delete */}
              <button
                onClick={(e) => { e.stopPropagation(); deleteNotif(notif.id); }}
                className="opacity-0 group-hover:opacity-100 p-2 text-[#CBD5E1] hover:text-red-400 hover:bg-red-50 rounded-xl transition-all shrink-0"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
