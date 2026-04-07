"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/useAuth";
import { authApi } from "@/lib/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupValues } from "@/lib/validations/auth";
import { Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState("");
  const { setUser, setLoading, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupValues) => {
    setServerError("");
    setLoading(true);

    try {
      const res = await authApi.signup({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: "user", // Default role
      });
      
      // Wait for a small delay for UX
      await new Promise((r) => setTimeout(r, 500));
      
      setUser(res.user, res.accessToken, res.refreshToken);
      router.push("/onboarding");
    } catch (err: any) {
      setServerError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-[var(--font-inter)] flex flex-col">
      {/* ─── TOPBAR ─── */}
      <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white border-b border-[#E2E8F0] shrink-0">
        <Link href="/landing" className="flex items-center">
          <img src="/Group 483036.png" alt="Homes.ph Events" className="h-8" />
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="px-6 py-2.5 bg-white border border-[#E2E8F0] text-[#0A192F] rounded-md font-bold text-sm shadow-sm hover:bg-gray-50 transition-all">
            Login
          </Link>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/2 relative bg-[#00174F] min-h-[300px] flex items-center justify-center overflow-hidden">
          <img src="/gettyimages-1730120071-612x612 1.png" alt="Event Background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <img src="/Group 483037.png" alt="Graphics" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90" />
          <div className="relative z-10 flex flex-col items-center w-full px-16">
            <img src="/Group 483038.png" alt="Homes.ph Events" className="w-full max-w-[600px] h-auto drop-shadow-2xl" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-1/2 bg-white flex flex-col relative py-12 px-8 lg:px-20 lg:py-16 overflow-y-auto font-[var(--font-inter)]">
          <div className="max-w-[420px] w-full mx-auto my-auto">
            <h1 className="text-[28px] font-bold text-[#0A192F] mb-2 leading-tight">Create an Account</h1>
            <p className="text-[#4A5568] text-[13px] font-medium mb-8">Join 5,800+ real estate professionals on Homes.ph Events.</p>

            {serverError && (
              <div className="mb-6 px-5 py-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[13px] font-bold flex items-start gap-3">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                {serverError}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#4A5568] text-[12px] font-bold mb-1.5">First Name <span className="text-[#1730A8]">*</span></label>
                  <input
                    type="text"
                    placeholder="Juan"
                    {...register("firstName")}
                    className={`w-full px-4 py-3.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all font-medium placeholder:text-[#A0AEC0] ${
                      errors.firstName ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-[#E2E8F0] focus:border-[#1730A8] focus:ring-[#1730A8]/10"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-500 text-[10px] font-bold">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#4A5568] text-[12px] font-bold mb-1.5">Last Name <span className="text-[#1730A8]">*</span></label>
                  <input
                    type="text"
                    placeholder="Dela Cruz"
                    {...register("lastName")}
                    className={`w-full px-4 py-3.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all font-medium placeholder:text-[#A0AEC0] ${
                      errors.lastName ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-[#E2E8F0] focus:border-[#1730A8] focus:ring-[#1730A8]/10"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-red-500 text-[10px] font-bold">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[#4A5568] text-[12px] font-bold mb-1.5">Email Address <span className="text-[#1730A8]">*</span></label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className={`w-full px-4 py-3.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all font-medium placeholder:text-[#A0AEC0] ${
                    errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-[#E2E8F0] focus:border-[#1730A8] focus:ring-[#1730A8]/10"
                  }`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-[10px] font-bold">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-[#4A5568] text-[12px] font-bold mb-1.5">Password <span className="text-[#1730A8]">*</span></label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    {...register("password")}
                    className={`w-full px-4 py-3.5 pr-12 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all font-medium placeholder:text-[#A0AEC0] ${
                      errors.password ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-[#E2E8F0] focus:border-[#1730A8] focus:ring-[#1730A8]/10"
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#002143] transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-red-500 text-[10px] font-bold">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="block text-[#4A5568] text-[12px] font-bold mb-1.5">Confirm Password <span className="text-[#1730A8]">*</span></label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter password"
                    {...register("confirmPassword")}
                    className={`w-full px-4 py-3.5 pr-12 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all font-medium placeholder:text-[#A0AEC0] ${
                      errors.confirmPassword ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-[#E2E8F0] focus:border-[#1730A8] focus:ring-[#1730A8]/10"
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#002143] transition-colors"
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-red-500 text-[10px] font-bold">{errors.confirmPassword.message}</p>
                )}
              </div>

              <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">
                By registering, you agree to our{" "}
                <Link href="/help" className="text-[#1730A8] font-bold hover:underline">Terms of Service</Link>{" "}
                and{" "}
                <Link href="/help" className="text-[#1730A8] font-bold hover:underline">Privacy Policy</Link>.
              </p>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1730A8] text-white py-4 rounded-lg font-bold text-sm hover:bg-[#112480] disabled:opacity-60 transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div className="mt-5 flex items-center gap-4">
              <div className="flex-1 h-px bg-[#E2E8F0]" />
              <span className="text-[#718096] text-[11px] font-bold">or</span>
              <div className="flex-1 h-px bg-[#E2E8F0]" />
            </div>

            <button
              type="button"
              disabled={isLoading}
              className="mt-4 w-full bg-white border border-[#E2E8F0] py-3.5 rounded-lg font-bold text-[14px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm text-[#1730A8] disabled:opacity-50"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-[#718096] font-medium font-[var(--font-inter)]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#1730A8] font-bold hover:underline">Sign in</Link>
            </p>
          </div>

          <div className="mt-auto pt-8 text-center w-full">
            <p className="text-[#A0AEC0] text-[11px] font-medium">© 2026 Homes.ph. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

