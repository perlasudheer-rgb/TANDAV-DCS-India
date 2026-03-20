"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BatteryCharging,
  Building,
  DollarSign,
  Handshake,
  Plane,
  Server,
  Zap,
} from "lucide-react";

const DEPLOYMENT_MODELS = [
  {
    title: "Captive Systems",
    desc: "End-customer builds & operates DCS for own use",
    examples: "CtrlS Data Centres, Yotta Navi Mumbai, Reliance Jio",
    icon: Building,
  },
  {
    title: "Campus-Based",
    desc: "Single master developer supplies cooling within owned campus (IT parks, SEZs, townships)",
    examples: "Infosys Pocharam, ITC Green Centre, Wipro Campuses",
    icon: Server,
  },
  {
    title: "Airport Developments",
    desc: "Airport developer builds central plant for multiple air-side buildings",
    examples: "DIAL, HIAL, MIAL, BIAL",
    icon: Plane,
  },
  {
    title: "Merchant Utility Investment Concessions",
    desc: "Government awards long-term concession for private investment, ownership & operation",
    examples: "GIFT City, Amaravati Govt Complex, Hyderabad Pharma City",
    icon: Handshake,
  },
];

const SECTORS = [
  { name: "IT / ITES Parks", tr: "~85,000 TR", pct: 26, color: "bg-teal-400" },
  { name: "Data Centres", tr: "~72,000 TR", pct: 22, color: "bg-teal-500" },
  {
    name: "Commercial / Mixed-Use",
    tr: "~55,000 TR",
    pct: 17,
    color: "bg-cyan-400",
  },
  {
    name: "Airports & Transit",
    tr: "~42,000 TR",
    pct: 13,
    color: "bg-cyan-500",
  },
  {
    name: "Industrial / Pharma",
    tr: "~35,000 TR",
    pct: 11,
    color: "bg-emerald-400",
  },
  {
    name: "Government / Institutional",
    tr: "~33,500 TR",
    pct: 10,
    color: "bg-emerald-500",
  },
];

const BENEFITS = [
  { icon: Zap, value: "25–40%", label: "Energy Savings vs building-level" },
  { icon: DollarSign, value: "15–20%", label: "Cooling Cost Reduction" },
  { icon: Activity, value: "0.71", label: "tCO₂/MWh Grid Intensity" },
  {
    icon: BatteryCharging,
    value: "~30%",
    label: "Peak Power Demand Reduction",
  },
];

export default function Landscape() {
  return (
    <section
      id="landscape"
      data-design-id="landscape-section"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            data-design-id="landscape-label"
            className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block"
          >
            The Reality Today
          </span>
          <h2
            data-design-id="landscape-title"
            className="section-title text-white mb-4"
          >
            India Already Does
            <br />
            <span className="text-gradient">District Cooling</span>
          </h2>
          <p data-design-id="landscape-subtitle" className="section-subtitle">
            73+ operational projects with 322,500 TR installed capacity —
            measured against BEE&apos;s DCS guidelines. Deployed across 6
            sectors with multiple proven models.
          </p>
        </motion.div>

        <div
          data-design-id="landscape-models-grid"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {DEPLOYMENT_MODELS.map((model, i) => (
            <motion.div
              key={model.title}
              data-design-id={`landscape-model-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card group hover:border-teal-400/20 transition-all duration-300"
            >
              <model.icon className="w-6 h-6 text-teal-400/70 mb-4 group-hover:text-teal-400 transition-colors" />
              <h3 className="text-sm font-semibold text-white mb-2">
                {model.title}
              </h3>
              <p className="text-xs text-white/50 mb-3 leading-relaxed">
                {model.desc}
              </p>
              <p className="text-[10px] text-teal-400/60 font-medium">
                {model.examples}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          data-design-id="landscape-sectors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3
            data-design-id="landscape-sectors-title"
            className="text-lg font-semibold text-white mb-8"
          >
            Capacity by Sector
          </h3>
          <div className="space-y-4">
            {SECTORS.map((s, i) => (
              <motion.div
                key={s.name}
                data-design-id={`landscape-sector-${i + 1}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs text-white/60 w-48 shrink-0">
                  {s.name}
                </span>
                <div className="flex-1 h-8 bg-white/[0.04] rounded-lg overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(s.pct * 2.5, 30)}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-lg flex items-center justify-end pr-3"
                    style={{
                      backgroundColor: `hsl(174 72% 46% / ${0.08 + (s.pct / 100) * 0.2})`,
                    }}
                  >
                    <span className="text-[10px] font-semibold text-white/80">
                      {s.tr}
                    </span>
                  </motion.div>
                </div>
                <span className="text-xs font-mono text-teal-400/70 w-10 text-right">
                  {s.pct}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div
          data-design-id="landscape-benefits-grid"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.label}
              data-design-id={`landscape-benefit-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card text-center"
            >
              <b.icon className="w-5 h-5 text-teal-400/60 mx-auto mb-3" />
              <div className="text-xl md:text-2xl font-bold text-white mb-1">
                {b.value}
              </div>
              <div className="text-[10px] text-white/40 leading-relaxed">
                {b.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          data-design-id="landscape-merchant-gap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.03] p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
              <Handshake className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3
                data-design-id="landscape-merchant-title"
                className="text-lg font-semibold text-white mb-2"
              >
                The Missing Piece: Merchant Cooling Utility
              </h3>
              <p
                data-design-id="landscape-merchant-desc"
                className="text-sm text-white/60 leading-relaxed mb-4"
              >
                All existing projects are captive, campus, or B2B2C. India lacks
                an{" "}
                <strong className="text-amber-300">
                  open-access merchant cooling utility model
                </strong>
                . This requires regulatory recognition, tariff frameworks,
                right-of-way provisions, and bankable concession structures.
              </p>
              <p
                data-design-id="landscape-merchant-intl"
                className="text-xs text-white/40"
              >
                International precedent: Singapore and UAE have established
                merchant cooling utility frameworks successfully.
              </p>
              <p className="text-[10px] text-white/25 mt-3 italic">
                Source: BEE DCS Guidelines, CEA grid emission factor (FY2024-25)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
