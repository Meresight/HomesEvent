import { z } from "zod";

export const ticketTierSchema = z.object({
  name: z.string().min(2, "Tier name is required"),
  price: z.coerce.number().min(0, "Price must be positive"),
  description: z.string().optional(),
  totalSlots: z.coerce.number().min(1, "At least 1 slot required"),
});

export const speakerSchema = z.object({
  name: z.string().min(2, "Speaker name is required"),
  role: z.string().min(2, "Speaker role is required"),
  bio: z.string().optional(),
  image: z.string().url("Invalid image URL").optional().or(z.literal("")),
});

export const createEventSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  category: z.enum(["SEMINARS", "WORKSHOP", "CPD PROGRAMS", "NETWORKING", "CONFERENCING", "COACHING"]),
  format: z.enum(["In Person", "Online", "Hybrid"]),
  date: z.string().min(1, "Date is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  venue: z.string().optional(),
  city: z.string().min(2, "City is required"),
  onlineLink: z.string().url("Invalid meeting link").optional().or(z.literal("")),
  maxAttendees: z.coerce.number().min(1, "Max attendees must be at least 1"),
  waitlistEnabled: z.boolean().default(false),
  isCpdAccredited: z.boolean().default(false),
  cpdHours: z.coerce.number().optional(),
  cpdAccreditationBody: z.string().optional(),
  ticketTiers: z.array(ticketTierSchema).min(1, "At least one ticket tier is required"),
  speakers: z.array(speakerSchema).optional(),
  image: z.string().optional(),
});

export type CreateEventValues = z.infer<typeof createEventSchema>;
export type TicketTierValues = z.infer<typeof ticketTierSchema>;
export type SpeakerValues = z.infer<typeof speakerSchema>;
