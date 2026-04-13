import api from './client';
import type { AdminStats, EventApproval, PaginatedResponse, User, Event } from './types';

const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const adminApi = {
  getStats: async (): Promise<AdminStats> => {
    await mockDelay();
    return {
      totalUsers: 1250,
      activeEvents: 45,
      totalRevenue: 2500000,
      pendingApprovals: 3
    };
  },

  getUsers: async (params?: { search?: string; role?: string; page?: number; limit?: number }) => {
    await mockDelay();
    return {
      data: [
        { id: "u1", name: "Admin Setup", email: "admin@homes.ph", role: "admin", createdAt: new Date().toISOString() },
        { id: "u2", name: "Organizer Juan", email: "juan@dev.com", role: "organizer", createdAt: new Date().toISOString() }
      ],
      total: 2,
      page: 1,
      limit: 10
    } as PaginatedResponse<User>;
  },

  updateUserRole: async (userId: string, role: 'admin' | 'organizer' | 'user') => {
    await mockDelay();
    return { id: userId, role } as User;
  },

  suspendUser: async (userId: string, reason: string) => {
    await mockDelay();
    return { id: userId, isSuspended: true } as User;
  },

  getPendingApprovals: async (): Promise<EventApproval[]> => {
    await mockDelay();
    return [];
  },

  approveEvent: async (eventId: string) => {
    await mockDelay();
    return { id: eventId, status: "approved" } as any;
  },

  rejectEvent: async (eventId: string, note: string) => {
    await mockDelay();
    return { id: eventId, status: "rejected" } as any;
  },

  getRevenueReport: async (params: { from: string; to: string; groupBy?: 'day' | 'week' | 'month' }) => {
    await mockDelay();
    return {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      revenue: [10000, 25000, 45000, 30000],
      registrations: [50, 150, 200, 120]
    };
  },

  getAllEvents: async (params?: { search?: string; status?: string; page?: number }) => {
    await mockDelay();
    return {
      data: [],
      total: 0,
      page: 1,
      limit: 10
    } as PaginatedResponse<Event>;
  },

  broadcastAnnouncement: async (title: string, message: string) => {
    await mockDelay();
    return { sent: 1250 };
  },
};
