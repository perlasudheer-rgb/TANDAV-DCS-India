"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap, Building2, Leaf, TrendingUp } from "lucide-react";

const STATS = [
  { value: "322,500 TR", label: "Installed Capacity", icon: Zap },
  { value: "73+", label: "Operational Projects", icon: Building2 },
  { value: "25–40%", label: "Energy Savings", icon: Leaf },
  { value: "$7.2B", label: "Market by 2035", icon: TrendingUp },
];

export default function Hero() {
  return (
    <section
      data-design-id="hero-section"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-radial-teal" data-design-id="hero-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-teal-500/[0.06] blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-teal-600/[0.04] blur-[100px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div data-design-id="hero-event-badges" className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold text-teal-400 bg-teal-400/10 border border-teal-400/20 rounded-full">
              BEE
            </span>
            <span className="text-white/30">×</span>
            <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold text-teal-400 bg-teal-400/10 border border-teal-400/20 rounded-full">
              UNEP
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">
              Roundtable Workshop · 25 March 2026
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2
              data-design-id="hero-tandav-label"
              className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-teal-400 mb-4"
            >
              TANDAV
            </h2>
            <h1
              data-design-id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
            >
              <span className="text-white">District Cooling</span>
              <br />
              <span className="text-white">in India</span>
              <br />
              <span className="text-gradient">The Untold Story</span>
            </h1>
            <p
              data-design-id="hero-subtitle"
              className="text-xs tracking-[0.15em] uppercase text-white/40 mb-8"
            >
              Transforming Architecture for National District-cooling Advancement & Viability
            </p>
          </motion.div>

          <motion.div
            data-design-id="hero-bullets"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-16 max-w-3xl"
          >
            <div className="flex items-start gap-2 text-left">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
              <p data-design-id="hero-bullet-1" className="text-sm text-white/60 leading-relaxed">
                <strong className="text-white/80">70+ projects.</strong> Multiple technology solutions and implementation models proven.
              </p>
            </div>
            <div className="flex items-start gap-2 text-left">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
              <p data-design-id="hero-bullet-2" className="text-sm text-white/60 leading-relaxed">
                India already does district cooling — needs <strong className="text-white/80">standardisation, policy clarity, merchant utility model.</strong>
              </p>
            </div>
          </motion.div>

          <motion.div
            data-design-id="hero-stats-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                data-design-id={`hero-stat-${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                className="stat-card group hover:border-teal-400/20 transition-all duration-300"
              >
                <stat.icon className="w-5 h-5 text-teal-400/60 mb-3 group-hover:text-teal-400 transition-colors" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            data-design-id="hero-presenter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] max-w-xl"
          >
            <p className="text-xs text-white/40 mb-1">Presented by</p>
            <p className="text-sm font-semibold text-white/90">SP Sudheer Perla</p>
            <p className="text-xs text-white/50">Senior Advisor, UNEP India · 16 years in District Cooling</p>
            <p className="text-[10px] text-teal-400/60 mt-1">$2bn+ in DCS greenfield, M&A, restructuring across GCC & India</p>
          </motion.div>
        </motion.div>

        <motion.div
          data-design-id="hero-scroll-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => document.getElementById("landscape")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-teal-400 transition-colors group"
          >
            <span className="text-[10px] tracking-widest uppercase">Explore</span>
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}