"use client";

import { motion } from "framer-motion";
import { Zap, Battery, Clock, ArrowDown, TrendingDown, Banknote, Scale } from "lucide-react";

const PEAK_STATS = [
  { label: "India Peak Demand (2024)", value: "250 GW", sub: "record May 2024" },
  { label: "Room AC share of peak", value: "~50 GW", sub: "~20% of peak" },
  { label: "Projected AC Peak 2030", value: "~120 GW", sub: "" },
  { label: "Projected AC Peak 2035", value: "~180 GW", sub: "" },
];

const TES_BENEFITS = [
  { icon: Banknote, value: "$15–25/kWhth", label: "TES Cost (5–8× cheaper than batteries)" },
  { icon: TrendingDown, value: "20%", label: "Peak shaving from TES night-charging alone" },
  { icon: ArrowDown, value: "10–25%", label: "Less capacity from diversity factor" },
  { icon: Zap, value: "50–60%", label: "Efficiency gain vs conventional split ACs" },
];

const TOD_TIMELINE = [
  { date: "Apr 2024", event: "ToD mandatory for C&I (>10 kW)" },
  { date: "Apr 2025", event: "ToD extended to residential & small businesses" },
  { date: "2025–26", event: "Multiple states implementing solar-hour-aligned ToD" },
];

const BESS_COMPARE = [
  { aspect: "Capital Cost", bess: "$125/kWh (all-in)", tes: "$15–25/kWhth" },
  { aspect: "Lifespan", bess: "10–15 years", tes: "25–30 years" },
  { aspect: "Efficiency", bess: "85–90% round-trip", tes: ">95% thermal" },
  { aspect: "Use Case", bess: "General grid storage", tes: "Cooling-specific DSM" },
];

export default function ElectricityDistribution() {
  return (
    <section id="electricity-distribution" data-design-id="electricity-distribution-section" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-teal opacity-20" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span data-design-id="ed-label" className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block">
            Demand-Side Infrastructure
          </span>
          <h2 data-design-id="ed-title" className="section-title text-white mb-4">
            Electricity<br />
            <span className="text-gradient">Distribution</span>
          </h2>
          <p data-design-id="ed-subtitle" className="section-subtitle">
            DCS + Thermal Energy Storage is India&apos;s peak demand solution. Room ACs projected to contribute ~120 GW to peak demand by 2030 — TES can reduce or shift up to 40%.
          </p>
        </motion.div>

        <div data-design-id="ed-peak-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {PEAK_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              data-design-id={`ed-peak-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
              <div className="text-[10px] text-white/40 mt-1">{s.label}</div>
              {s.sub && <div className="text-[10px] text-teal-400/50 mt-0.5">{s.sub}</div>}
            </motion.div>
          ))}
        </div>

        <motion.div
          data-design-id="ed-how-it-works"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-teal-400/10 bg-teal-400/[0.02] p-8 md:p-10 mb-16"
        >
          <h3 data-design-id="ed-how-title" className="text-lg font-semibold text-white mb-6">How DCS + TES Shaves Peak</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div data-design-id="ed-how-step-1" className="text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5 text-indigo-400" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">Off-Peak Charging</h4>
              <p className="text-xs text-white/50">10 PM – 6 AM: chillers run at full capacity. ToD cost advantage (₹1.50/unit less). TES stores chilled water / PCMs.</p>
            </div>
            <div data-design-id="ed-how-step-2" className="text-center">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-3">
                <Battery className="w-5 h-5 text-teal-400" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">TES Storage</h4>
              <p className="text-xs text-white/50">Thermal Energy Storage tanks store cooling at $15–25/kWhth — 5–8× cheaper than battery alternatives.</p>
            </div>
            <div data-design-id="ed-how-step-3" className="text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
                <TrendingDown className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">Peak Discharge</h4>
              <p className="text-xs text-white/50">2 PM – 6 PM: TES discharges, chillers reduce operation. Up to 40% of peak cooling demand reduced or shifted.</p>
            </div>
          </div>
        </motion.div>

        <div data-design-id="ed-tes-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {TES_BENEFITS.map((b, i) => (
            <motion.div
              key={b.label}
              data-design-id={`ed-tes-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card text-center"
            >
              <b.icon className="w-5 h-5 text-teal-400/60 mx-auto mb-3" />
              <div className="text-xl font-bold text-white mb-1">{b.value}</div>
              <div className="text-[10px] text-white/40 leading-relaxed">{b.label}</div>
            </motion.div>
          ))}
        </div>

        <div data-design-id="ed-tod-bess-row" className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            data-design-id="ed-tod-timeline"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400/70" /> Time-of-Day Tariff Timeline
            </h3>
            <div className="space-y-4">
              {TOD_TIMELINE.map((t, i) => (
                <div key={i} data-design-id={`ed-tod-${i + 1}`} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400/60" />
                    {i < TOD_TIMELINE.length - 1 && <div className="w-px h-8 bg-white/[0.06]" />}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-teal-400/80">{t.date}</span>
                    <p className="text-xs text-white/50 mt-0.5">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-design-id="ed-tod-cerc" className="mt-4 p-3 rounded-lg bg-white/[0.03] text-xs text-white/40">
              Peak tariff: <strong className="text-white/60">1.2× normal tariff</strong> (CERC mandate)
            </div>
          </motion.div>

          <motion.div
            data-design-id="ed-bess-compare"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4 text-teal-400/70" /> BESS vs TES Comparison
            </h3>
            <div className="rounded-lg border border-white/[0.06] overflow-hidden">
              <div className="grid grid-cols-3 text-[10px] font-semibold tracking-wider uppercase bg-white/[0.02]">
                <div className="p-2.5 text-white/40">Aspect</div>
                <div className="p-2.5 text-amber-400/70">BESS</div>
                <div className="p-2.5 text-teal-400/70">TES</div>
              </div>
              {BESS_COMPARE.map((c, i) => (
                <div key={i} data-design-id={`ed-bess-row-${i + 1}`} className="grid grid-cols-3 text-xs border-t border-white/[0.04]">
                  <div className="p-2.5 text-white/50 font-medium">{c.aspect}</div>
                  <div className="p-2.5 text-white/40">{c.bess}</div>
                  <div className="p-2.5 text-teal-400/60">{c.tes}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          data-design-id="ed-td-reallocation"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.02] p-8 md:p-10"
        >
          <h3 data-design-id="ed-td-title" className="text-lg font-semibold text-white mb-6">Investment Reallocation: From T&D to DCS</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div data-design-id="ed-td-planned" className="text-center p-4 rounded-xl bg-white/[0.03]">
              <div className="text-2xl font-bold text-white">₹9.15L Cr</div>
              <div className="text-[10px] text-white/40">Planned T&D Investment (2023–2032)</div>
            </div>
            <div data-design-id="ed-td-dcs" className="text-center p-4 rounded-xl bg-white/[0.03]">
              <div className="text-2xl font-bold text-teal-400">₹0.5–1.0L Cr</div>
              <div className="text-[10px] text-white/40">DCS + TES for ~5 GW peak cooling</div>
            </div>
            <div data-design-id="ed-td-avoided" className="text-center p-4 rounded-xl bg-white/[0.03]">
              <div className="text-2xl font-bold text-emerald-400">₹14K–30K Cr</div>
              <div className="text-[10px] text-white/40">T&D Capex Avoided (4.81M TR by 2035)</div>
            </div>
          </div>
          <p data-design-id="ed-td-scale" className="text-xs text-white/50 text-center leading-relaxed">
            Every 1 GW shaved avoids ~₹7,000–10,000 Cr T&D capex. Converting 10% of room AC demand to DCS could avoid 7–10 GW peak (₹50,000–1,00,000 Cr). DCS should be classed as <strong className="text-emerald-400/80">demand-side management infrastructure</strong> eligible for utility status and regulated tariffs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}