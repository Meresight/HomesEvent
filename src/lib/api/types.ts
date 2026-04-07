// ─── Core API Types ───────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}

// ─── Auth Types ───────────────────────────────────────────────────────────────

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: 'user' | 'organizer';
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export type UserRole = 'admin' | 'organizer' | 'user';

// ─── User Types ───────────────────────────────────────────────────────────────

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatar?: string;
  prcLicenseNumber?: string;
  licenseExpiry?: string;
  organization?: string;
  mobileNumber?: string;
  createdAt: string;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  mobileNumber?: string;
  prcLicenseNumber?: string;
  licenseExpiry?: string;
  organization?: string;
}

// ─── Event Types ──────────────────────────────────────────────────────────────

export type EventStatus = 'Draft' | 'Published' | 'Completed' | 'Cancelled';
export type EventCategory = 'SEMINARS' | 'WORKSHOP' | 'CPD PROGRAMS' | 'NETWORKING' | 'CONFERENCING' | 'COACHING';
export type EventFormat = 'In Person' | 'Online' | 'Hybrid';

export interface Speaker {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Media';
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  tag?: string;
  tagColor?: string;
}

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  description?: string;
  availableSlots: number;
  totalSlots: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  status: EventStatus;
  format: EventFormat;
  image?: string;
  date: string;
  startTime: string;
  endTime: string;
  venue?: string;
  city: string;
  onlineLink?: string;
  maxAttendees: number;
  registeredCount: number;
  waitlistEnabled: boolean;
  isCpdAccredited: boolean;
  cpdHours?: number;
  cpdAccreditationBody?: string;
  speakers: Speaker[];
  partners: Partner[];
  agenda: AgendaItem[];
  ticketTiers: TicketTier[];
  organizerId: string;
  organizer?: User;
  price: number; // lowest ticket price (0 = free)
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventRequest {
  title: string;
  description: string;
  category: EventCategory;
  format: EventFormat;
  date: string;
  startTime: string;
  endTime: string;
  venue?: string;
  city: string;
  onlineLink?: string;
  maxAttendees: number;
  waitlistEnabled: boolean;
  isCpdAccredited: boolean;
  cpdHours?: number;
  cpdAccreditationBody?: string;
  ticketTiers: Omit<TicketTier, 'id' | 'availableSlots'>[];
  speakers?: Omit<Speaker, 'id'>[];
}

export interface EventFilters {
  search?: string;
  category?: string;
  city?: string;
  dateFrom?: string;
  dateTo?: string;
  priceMin?: number;
  priceMax?: number;
  format?: EventFormat;
  page?: number;
  limit?: number;
}

// ─── Registration Types ───────────────────────────────────────────────────────

export type RegistrationStatus = 'Pending' | 'Confirmed' | 'Cancelled' | 'Waitlisted' | 'CheckedIn';

export interface Registration {
  id: string;
  eventId: string;
  event?: Event;
  userId: string;
  user?: User;
  ticketTierId: string;
  ticketTier?: TicketTier;
  status: RegistrationStatus;
  paymentMethod?: 'GCash' | 'Maya' | 'Credit' | 'Free';
  paymentStatus?: 'Pending' | 'Paid' | 'Refunded';
  transactionId?: string;
  amountPaid: number;
  ticketCode: string;
  qrCode?: string;
  checkedInAt?: string;
  createdAt: string;
}

export interface CreateRegistrationRequest {
  eventId: string;
  ticketTierId: string;
  paymentMethod: 'GCash' | 'Maya' | 'Credit' | 'Free';
  attendeeInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    prcLicenseNumber?: string;
  };
}

// ─── CPD Types ────────────────────────────────────────────────────────────────

export interface CPDRecord {
  id: string;
  eventId: string;
  event?: Event;
  userId: string;
  hoursEarned: number;
  completedAt: string;
  certificateUrl?: string;
  accreditationBody: string;
  prcReferenceNumber?: string;
}

// ─── Notification Types ───────────────────────────────────────────────────────

export type NotificationType = 'event_update' | 'registration_confirmed' | 'reminder' | 'announcement' | 'check_in';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  relatedEventId?: string;
  relatedEvent?: Pick<Event, 'id' | 'title' | 'image'>;
  createdAt: string;
}

// ─── Feedback Types ───────────────────────────────────────────────────────────

export interface EventFeedback {
  id: string;
  eventId: string;
  userId: string;
  overallRating: number; // 1-5
  contentRating: number;
  speakerRating: number;
  venueRating: number;
  comment?: string;
  wouldRecommend: boolean;
  submittedAt: string;
}

export interface SubmitFeedbackRequest {
  overallRating: number;
  contentRating: number;
  speakerRating: number;
  venueRating: number;
  comment?: string;
  wouldRecommend: boolean;
}

// ─── Check-in Types ───────────────────────────────────────────────────────────

export interface CheckInResult {
  success: boolean;
  registration?: Registration;
  message: string;
  alreadyCheckedIn?: boolean;
}

// ─── Admin Types ──────────────────────────────────────────────────────────────

export interface AdminStats {
  totalEvents: number;
  totalUsers: number;
  totalRegistrations: number;
  totalRevenue: number;
  activeEvents: number;
  pendingApprovals: number;
}

export interface EventApproval {
  id: string;
  eventId: string;
  event: Event;
  status: 'Pending' | 'Approved' | 'Rejected';
  reviewedBy?: string;
  reviewNote?: string;
  submittedAt: string;
  reviewedAt?: string;
}
