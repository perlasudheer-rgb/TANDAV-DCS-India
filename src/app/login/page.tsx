"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/");
        router.refresh();
      } else {
        setError("Incorrect password");
        setShake(true);
        setTimeout(() => setShake(false), 600);
        setPassword("");
        inputRef.current?.focus();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-design-id="login-page"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "hsl(220 20% 4%)" }}
    >
      {/* Background effects */}
      <div
        data-design-id="login-bg-radial"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(45, 212, 191, 0.08), transparent)",
        }}
      />
      <div
        data-design-id="login-bg-grid"
        className="absolute inset-0 pointer-events-none bg-grid opacity-40"
      />

      {/* Login card */}
      <div
        data-design-id="login-card"
        className={`relative z-10 w-full max-w-md mx-4 ${shake ? "animate-shake" : ""}`}
      >
        <div
          data-design-id="login-card-inner"
          className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10 shadow-2xl"
        >
          {/* Logo / branding */}
          <div data-design-id="login-branding" className="text-center mb-8">
            <div
              data-design-id="login-icon"
              className="w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(45,212,191,0.05))",
                border: "1px solid rgba(45,212,191,0.2)",
              }}
            >
              <svg
                data-design-id="login-lock-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
                style={{ color: "hsl(174 72% 46%)" }}
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h1
              data-design-id="login-title"
              className="text-2xl font-bold tracking-tight"
              style={{ color: "hsl(210 20% 95%)" }}
            >
              TANDAV Workshop
            </h1>
            <p
              data-design-id="login-subtitle"
              className="mt-2 text-sm"
              style={{ color: "hsl(215 14% 55%)" }}
            >
              Enter the access code shared with you to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div data-design-id="login-input-group">
              <label
                data-design-id="login-label"
                htmlFor="password"
                className="block text-xs font-medium uppercase tracking-wider mb-2"
                style={{ color: "hsl(215 14% 55%)" }}
              >
                Access Code
              </label>
              <input
                data-design-id="login-input"
                ref={inputRef}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none placeholder:text-white/20"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: error
                    ? "1px solid rgba(239,68,68,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: "hsl(210 20% 95%)",
                }}
                onFocus={(e) => {
                  if (!error)
                    e.currentTarget.style.borderColor = "rgba(45,212,191,0.4)";
                }}
                onBlur={(e) => {
                  if (!error)
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              />
              {error && (
                <p
                  data-design-id="login-error"
                  className="mt-2 text-xs font-medium"
                  style={{ color: "rgb(239,68,68)" }}
                >
                  {error}
                </p>
              )}
            </div>

            <button
              data-design-id="login-button"
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, hsl(174 72% 46%), hsl(174 72% 38%))",
                color: "hsl(220 20% 4%)",
              }}
              onMouseEnter={(e) => {
                if (!loading && password)
                  e.currentTarget.style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />
                    <path
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      fill="currentColor"
                      className="opacity-75"
                    />
                  </svg>
                  Verifying…
                </span>
              ) : (
                "Enter Workshop"
              )}
            </button>
          </form>

          {/* Footer */}
          <p
            data-design-id="login-footer"
            className="mt-6 text-center text-xs"
            style={{ color: "hsl(215 14% 40%)" }}
          >
            BEE–UNEP District Cooling Roundtable · 25 March 2026
          </p>
        </div>
      </div>

      {/* Shake animation */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}