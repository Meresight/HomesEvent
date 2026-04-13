import api from './client';
import type {
  Event,
  CreateEventRequest,
  EventFilters,
  PaginatedResponse,
  ApiResponse,
  Registration,
  EventFeedback,
  SubmitFeedbackRequest,
} from './types';

const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

const dummyEvents: Event[] = [
  {
    id: "1",
    title: "Homes.ph Real Estate Summit 2026",
    description: "Join the biggest real estate summit in the Philippines. Learn from top developers and expand your network.",
    date: new Date(Date.now() + 86400000 * 10).toISOString(),
    endDate: new Date(Date.now() + 86400000 * 10 + 28800000).toISOString(),
    location: "SMX Convention Center, Pasay",
    coordinates: { lat: 14.5323, lng: 120.9822 },
    category: "Summit",
    status: "Published",
    organizerId: "org_1",
    maxAttendees: 500,
    registeredCount: 412,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    isFeatured: true,
    ticketTiers: [{ id: "t1", title: "General Admission", price: 1500, quantity: 500 }],
    tags: ["Real Estate", "Networking", "Investment"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Brokers Networking Night",
    description: "Exclusive networking night for licensed brokers hosted by Homes.ph.",
    date: new Date(Date.now() + 86400000 * 5).toISOString(),
    endDate: new Date(Date.now() + 86400000 * 5 + 14400000).toISOString(),
    location: "Makati Shangri-La",
    coordinates: { lat: 14.5547, lng: 121.0244 },
    category: "Networking",
    status: "Published",
    organizerId: "org_1",
    maxAttendees: 150,
    registeredCount: 150,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false,
    ticketTiers: [{ id: "t2", title: "VIP Registration", price: 2500, quantity: 150 }],
    tags: ["Networking", "Brokers"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Legal Updates in RE 2026",
    description: "Important CPD seminar covering the new real estate laws.",
    date: new Date(Date.now() + 86400000 * 30).toISOString(),
    endDate: new Date(Date.now() + 86400000 * 30 + 14400000).toISOString(),
    location: "BGC Arts Center",
    coordinates: { lat: 14.5517, lng: 121.0494 },
    category: "Seminar",
    status: "Draft",
    organizerId: "org_1",
    maxAttendees: 200,
    registeredCount: 0,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false,
    ticketTiers: [{ id: "t3", title: "Member Rate", price: 1200, quantity: 200 }],
    tags: ["CPD", "Legal"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export const eventsApi = {
  // ─── Public ─────────────────────────────────────────────────────────────

  getAll: async (filters?: EventFilters): Promise<PaginatedResponse<Event>> => {
    await mockDelay();
    return { data: dummyEvents.filter(e => e.status === "Published"), total: 2, page: 1, limit: 10 };
  },

  getById: async (id: string): Promise<Event> => {
    await mockDelay();
    const evt = dummyEvents.find(e => e.id === id);
    if (!evt) throw new Error("Event not found");
    return evt;
  },

  getFeatured: async (): Promise<Event[]> => {
    await mockDelay();
    return dummyEvents.filter(e => e.status === "Published");
  },

  getNearby: async (city: string): Promise<Event[]> => {
    await mockDelay();
    return dummyEvents.filter(e => e.status === "Published");
  },

  // ─── Organizer ──────────────────────────────────────────────────────────

  getMyEvents: async (filters?: Partial<EventFilters>): Promise<PaginatedResponse<Event>> => {
    await mockDelay();
    return { data: dummyEvents, total: 3, page: 1, limit: 10 };
  },

  create: async (data: CreateEventRequest): Promise<Event> => {
    await mockDelay();
    return { ...dummyEvents[2], ...data } as Event;
  },

  update: async (id: string, data: Partial<CreateEventRequest>): Promise<Event> => {
    await mockDelay();
    const evt = dummyEvents.find(e => e.id === id);
    if (!evt) throw new Error("Not found");
    return { ...evt, ...data } as Event;
  },

  publish: async (id: string): Promise<Event> => {
    await mockDelay();
    const evt = dummyEvents.find(e => e.id === id);
    if (!evt) throw new Error("Not found");
    return { ...evt, status: "Published" };
  },

  cancel: async (id: string, reason?: string): Promise<Event> => {
    await mockDelay();
    const evt = dummyEvents.find(e => e.id === id);
    if (!evt) throw new Error("Not found");
    return { ...evt, status: "Cancelled" };
  },

  delete: async (id: string): Promise<ApiResponse<null>> => {
    await mockDelay();
    return { message: "Deleted" } as any;
  },

  uploadImage: async (id: string, file: File): Promise<{ url: string }> => {
    await mockDelay(1000);
    return { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000" };
  },

  // ─── Registrations ──────────────────────────────────────────────────────

  getRegistrations: async (eventId: string, page = 1, limit = 50): Promise<PaginatedResponse<Registration>> => {
    await mockDelay();
    return { data: [], total: 0, page: 1, limit: 50 };
  },

  exportRegistrations: async (eventId: string): Promise<{ downloadUrl: string }> => {
    await mockDelay();
    return { downloadUrl: "https://example.com/export.csv" };
  },

  sendAnnouncement: async (eventId: string, subject: string, message: string): Promise<ApiResponse<null>> => {
    await mockDelay();
    return { message: "Sent successfully" } as any;
  },

  // ─── Feedback ───────────────────────────────────────────────────────────

  submitFeedback: async (eventId: string, data: SubmitFeedbackRequest): Promise<EventFeedback> => {
    await mockDelay();
    return { id: "f1", eventId, userId: "tester", rating: data.rating, comment: data.comment, createdAt: new Date().toISOString(), isAnonymous: !!data.isAnonymous };
  },

  getFeedbackSummary: async (eventId: string) => {
    await mockDelay();
    return { averageRating: 4.8, totalResponses: 120, breakdown: { "5": 100, "4": 15, "3": 5, "2": 0, "1": 0 } };
  },

  // ─── Check-In ───────────────────────────────────────────────────────────

  checkIn: async (eventId: string, ticketCode: string) => {
    await mockDelay();
    return { success: true, message: "Checked in successfully", attendeeName: "John Doe" };
  },
};
