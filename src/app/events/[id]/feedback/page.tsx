"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Star, CheckCircle2, ChevronLeft } from "lucide-react";

type RatingKey = "overallRating" | "contentRating" | "speakerRating" | "venueRating";

const ratingLabels: Record<RatingKey, string> = {
  overallRating: "Overall Experience",
  contentRating: "Content Quality",
  speakerRating: "Speaker Performance",
  venueRating: "Venue / Platform",
};

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(star)}
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <Star
            size={32}
            className={`transition-colors ${
              star <= (hover || value)
                ? "text-[#FFB020] fill-[#FFB020]"
                : "text-[#E2E8F0]"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function EventFeedbackPage() {
  const params = useParams();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    overallRating: 0,
    contentRating: 0,
    speakerRating: 0,
    venueRating: 0,
    comment: "",
    wouldRecommend: true,
  });

  const ratingDescriptions: Record<number, string> = {
    0: "Select a rating",
    1: "Poor",
    2: "Below Average",
    3: "Average",
    4: "Good",
    5: "Excellent",
  };

  const setRating = (key: RatingKey, value: number) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.overallRating) return;
    setIsLoading(true);

    // TODO: await eventsApi.submitFeedback(params.id as string, form);
    await new Promise((res) => setTimeout(res, 1200));

    setIsLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">
        <div className="bg-white rounded-[56px] border border-[#F1F5F9] shadow-xl p-16 max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={52} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-black text-[#002143] mb-3">Thank You!</h1>
          <p className="text-[#94A3B8] font-medium leading-relaxed mb-10">
            Your feedback helps us improve future events and provide the best experience for the real estate community.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/events"
              className="w-full py-4 bg-[#1730A8] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#112480] transition-all shadow-lg text-center"
            >
              Discover More Events
            </Link>
            <Link
              href="/my-tickets"
              className="w-full py-4 border-2 border-[#F1F5F9] text-[#002143] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F8FAFC] transition-all text-center"
            >
              My Tickets
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[var(--font-inter)]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>
        <Link href={`/events/${params.id}`} className="flex items-center gap-2 text-sm font-bold text-[#4A5568] hover:text-[#002143] transition-colors">
          <ChevronLeft size={16} /> Back to Event
        </Link>
      </header>

      {/* Breadcrumb */}
      <div className="bg-[#002143] py-4 px-10">
        <div className="flex items-center gap-3 text-white/80 text-[11px] font-black uppercase tracking-widest max-w-[1440px] mx-auto">
          <Link href="/events" className="hover:text-[#FFB020] transition-colors">Events</Link>
          <span className="text-[#FFB020]">›</span>
          <Link href={`/events/${params.id}`} className="hover:text-[#FFB020] transition-colors">Event Detail</Link>
          <span className="text-[#FFB020]">›</span>
          <span className="text-white">Feedback</span>
        </div>
      </div>

      <main className="max-w-[700px] mx-auto py-16 px-6 lg:px-0">
        {/* Title */}
        <div className="mb-10">
          <p className="text-[#FFB020] text-[11px] font-black uppercase tracking-widest mb-2">Post-Event</p>
          <h1 className="text-4xl font-black text-[#002143] tracking-tight leading-tight">
            Share Your Experience
          </h1>
          <p className="text-[#94A3B8] font-medium mt-3">
            Your honest feedback helps organizers improve and helps other professionals find the right events.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Rating cards */}
          {(Object.keys(ratingLabels) as RatingKey[]).map((key) => (
            <div key={key} className="bg-white rounded-[32px] border border-[#F1F5F9] p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-base font-black text-[#002143]">{ratingLabels[key]}</h3>
                  <p className="text-[11px] font-bold text-[#FFB020] uppercase tracking-widest mt-1">
                    {ratingDescriptions[form[key]]}
                  </p>
                </div>
                <StarRating value={form[key]} onChange={(v) => setRating(key, v)} />
              </div>
            </div>
          ))}

          {/* Would recommend */}
          <div className="bg-white rounded-[32px] border border-[#F1F5F9] p-8 shadow-sm">
            <h3 className="text-base font-black text-[#002143] mb-4">Would you recommend this event to a colleague?</h3>
            <div className="flex gap-4">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, wouldRecommend: val }))}
                  className={`flex-1 py-4 rounded-2xl font-black text-sm uppercase tracking-widest border-2 transition-all ${
                    form.wouldRecommend === val
                      ? val
                        ? "bg-[#1730A8] border-[#1730A8] text-white shadow-lg"
                        : "bg-red-500 border-red-500 text-white shadow-lg"
                      : "bg-white border-[#E2E8F0] text-[#94A3B8] hover:border-[#94A3B8]"
                  }`}
                >
                  {val ? "Yes, Recommend" : "No"}
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div className="bg-white rounded-[32px] border border-[#F1F5F9] p-8 shadow-sm">
            <h3 className="text-base font-black text-[#002143] mb-3">Additional Comments <span className="text-[#94A3B8] font-bold text-sm">(optional)</span></h3>
            <textarea
              value={form.comment}
              onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
              placeholder="Share your thoughts, what you loved, or what could be improved..."
              rows={5}
              className="w-full px-6 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-sm font-medium text-[#002143] outline-none focus:border-[#1730A8]/30 focus:ring-4 focus:ring-[#1730A8]/5 resize-none placeholder:text-[#CBD5E1] transition-all"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!form.overallRating || isLoading}
            className="w-full py-5 bg-[#1730A8] text-white rounded-[28px] font-black text-sm uppercase tracking-[0.3em] hover:bg-[#112480] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xl hover:-translate-y-0.5 active:scale-95"
          >
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>

          {!form.overallRating && (
            <p className="text-center text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">
              * Please rate your overall experience to continue
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
