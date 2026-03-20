"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "landscape", label: "Landscape" },
  { id: "case-studies", label: "Case Studies" },
  { id: "market-opportunity", label: "Market Opportunity" },
  { id: "electricity-distribution", label: "Electricity Distribution" },
  { id: "climate", label: "Climate" },
  { id: "societal-impact", label: "Societal Impact" },
  { id: "policy-levers", label: "Policy Levers" },
  { id: "barriers", label: "Barriers" },
  { id: "dcs-hub", label: "DCS Hub" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      let currentActive = "";
      for (const sec of sections) {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            currentActive = sec.id;
          }
        }
      }
      setActive(currentActive);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        data-design-id="navigation-bar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[hsl(220,20%,4%)]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              data-design-id="nav-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform">
                T
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90 hidden sm:inline">
                TANDAV
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  data-design-id={`nav-link-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                    active === item.id
                      ? "text-teal-400 bg-teal-400/10"
                      : "text-white/60 hover:text-white/90 hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span data-design-id="nav-event-date" className="text-[10px] tracking-widest text-teal-400/70 uppercase hidden md:block">
                25 Mar 2026
              </span>
              <button
                data-design-id="nav-mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/70 hover:text-white"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-design-id="nav-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[hsl(220,20%,4%)]/98 backdrop-blur-xl pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-base font-medium text-white/80 hover:text-teal-400 hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}