"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Cpu,
  Factory,
  Globe,
  Server,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

const MARKET_GROWTH = [
  { year: "2025", value: "$0.48B", tr: "322K TR", note: "" },
  { year: "2030", value: "$1.92B", tr: "1.28M TR", note: "" },
  {
    year: "2035",
    value: "$7.22B",
    tr: "4.81M TR",
    note: "Basis 12.5% DCS adoption within chiller installed capacity in the country",
  },
];

const FDI_ITEMS = [
  { label: "Foreign Equity (PPP)", value: "$1.5–2.5B" },
  { label: "Foreign Debt", value: "$0.5–1.0B" },
  { label: "Technology / Equipment Imports", value: "$0.5–1.0B" },
];

const JOBS = [
  { category: "Construction & Installation", count: "80,640", note: "peak" },
  { category: "Permanent O&M", count: "5,120", note: "" },
  { category: "Ecosystem & Supply Chain", count: "33,920", note: "" },
];

const DC_STATS = [
  { label: "India DC Market 2025", value: "$9.8B" },
  { label: "Projected 2031", value: "$21B" },
  { label: "Water (2030 est.)", value: "358B litres" },
  { label: "PUE Improvement", value: "1.6 → 1.2" },
];

const NEW_ENTRANTS = [
  "Adani Energy Solutions",
  "Keppel Infrastructure",
  "Tata Power",
  "Carrier / Johnson Controls",
  "Daikin",
];

const SUPPLY_CHAIN = [
  {
    item: "Centrifugal Chillers",
    status: "Domestic + FDI JVs",
    from: "30–40%",
    to: "70–80%",
  },
  {
    item: "Pumps & Motors",
    status: "Fully localisable",
    from: "60–70%",
    to: "85–95%",
  },
  {
    item: "Plate Heat Exchangers",
    status: "Fully localisable",
    from: "60–70%",
    to: "85–95%",
  },
  {
    item: "Pre-insulated Piping",
    status: "Import → local mfg",
    from: "40–50%",
    to: "90–95%",
  },
  {
    item: "Controls & Automation",
    status: "Growing domestic",
    from: "25–35%",
    to: "60–70%",
  },
  {
    item: "Thermal Storage Tanks",
    status: "Fabrication ready",
    from: "70–80%",
    to: "95–100%",
  },
  {
    item: "Cooling Towers",
    status: "Mature domestic",
    from: "80–90%",
    to: "100%",
  },
];

const CHILLER_SEGMENTS = [
  {
    type: "Screw Compressor",
    range: "100–500 TR",
    share: 55,
    color: "bg-teal-400",
  },
  {
    type: "Centrifugal Chillers",
    range: ">500 TR",
    share: 36,
    color: "bg-cyan-400",
  },
  {
    type: "Scroll Compressor",
    range: "<100 TR",
    share: 9,
    color: "bg-emerald-400",
  },
];

const MANUFACTURERS = [
  {
    name: "Trane (Ingersoll Rand)",
    location: "Chillers & HVAC Systems — Pune",
  },
  {
    name: "Carrier",
    location: "Chillers & Air Handling Units — Gurugram & Hyderabad",
  },
  { name: "Daikin", location: "Chillers & VRV Systems — Neemrana, Rajasthan" },
  {
    name: "Blue Star / Voltas",
    location: "Chillers & Packaged AC — India\u2019s largest domestic brands",
  },
  { name: "Danfoss", location: "Valves, Drives & Heat Exchangers — Chennai" },
  {
    name: "Grundfos / KSB / Kirloskar",
    location: "Pumps & Motors — Pune, Bengaluru",
  },
  { name: "Alfa Laval / SWEP", location: "Heat Exchangers — Pune" },
  {
    name: "Honeywell / Schneider",
    location: "Controls & Automation — Pune, Bengaluru",
  },
  {
    name: "Paharpur / Baltimore Aircoil",
    location: "Cooling Towers — domestic",
  },
];

export default function MarketOpportunity() {
  return (
    <section
      id="market-opportunity"
      data-design-id="market-opportunity-section"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-teal-500/[0.04] blur-[120px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            data-design-id="mo-label"
            className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block"
          >
            Economic Rationale
          </span>
          <h2
            data-design-id="mo-title"
            className="section-title text-white mb-4"
          >
            A Multi-Billion Dollar
            <br />
            <span className="text-gradient">Opportunity</span>
          </h2>
          <p data-design-id="mo-subtitle" className="section-subtitle">
            District cooling is not just an energy efficiency solution — it is a
            strategic economic opportunity aligned with Make in India, Viksit
            Bharat, and India&apos;s climate commitments.
          </p>
        </motion.div>

        {/* Market Growth Timeline */}
        <div
          data-design-id="mo-growth-cards"
          className="grid md:grid-cols-3 gap-4 mb-16"
        >
          {MARKET_GROWTH.map((item, i) => (
            <motion.div
              key={item.year}
              data-design-id={`mo-growth-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="stat-card group hover:border-teal-400/20 transition-all"
            >
              <div className="text-xs text-white/40 mb-2">{item.year}</div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {item.value}
              </div>
              <div className="text-sm text-white/50">{item.tr} installed</div>
              {item.note && (
                <p className="text-[10px] text-teal-400/50 mt-2 leading-snug italic">
                  {item.note}
                </p>
              )}
              {i < 2 && (
                <ArrowRight className="absolute top-1/2 -right-3 w-5 h-5 text-teal-400/30 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
        <p
          data-design-id="mo-growth-source"
          className="text-[10px] text-white/25 -mt-12 mb-16 text-right italic"
        >
          Source: Grand View Research 2025, @$1,500/TR
        </p>

        {/* Make in India Alignment */}
        <motion.div
          data-design-id="mo-make-in-india"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-amber-400/15 bg-amber-400/[0.02] p-8 md:p-10 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center">
              <Factory className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3
                data-design-id="mo-mii-title"
                className="text-lg font-semibold text-white"
              >
                Make in India Alignment
              </h3>
              <p className="text-[10px] text-white/40">
                Projected domestic manufacturing by 2035: ₹45,000 Cr+ at 75%
                localisation
              </p>
            </div>
          </div>
          <p
            data-design-id="mo-mii-desc"
            className="text-xs text-white/50 leading-relaxed mb-6"
          >
            District cooling is a strategic{" "}
            <strong className="text-amber-300">
              Make in India opportunity
            </strong>
            . India has significant local manufacturing capacity for most DCS
            components, with gaps in DCS-specific items (pre-insulated pipes,
            energy transfer stations) currently imported from UAE/Turkey. A
            dedicated localisation push can achieve 75%+ domestic content by
            2035.
          </p>
          <h4
            data-design-id="mo-mii-localisation-title"
            className="text-xs font-semibold text-amber-400/80 tracking-wider uppercase mb-4"
          >
            Localisation Targets (Current → 2035)
          </h4>
          <div className="space-y-2.5">
            {SUPPLY_CHAIN.map((s, i) => (
              <div
                key={s.item}
                data-design-id={`mo-supply-${i + 1}`}
                className="flex items-center gap-3"
              >
                <span className="text-[11px] text-white/50 w-44 shrink-0">
                  {s.item}
                </span>
                <div className="flex-1 flex items-center gap-2">
                  <span className="text-[10px] text-white/30 font-mono w-16 text-right">
                    {s.from}
                  </span>
                  <ArrowRight className="w-3 h-3 text-amber-400/40 shrink-0" />
                  <span className="text-[10px] text-amber-400/80 font-mono font-semibold w-16">
                    {s.to}
                  </span>
                  <span className="text-[10px] text-white/30">{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Chiller Ecosystem */}
        <motion.div
          data-design-id="mo-chiller-ecosystem"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-5 h-5 text-teal-400" />
            <h3
              data-design-id="mo-chiller-title"
              className="text-lg font-semibold text-white"
            >
              India&apos;s Chiller Ecosystem & Supply Chain
            </h3>
          </div>
          <p
            data-design-id="mo-chiller-desc"
            className="text-xs text-white/50 leading-relaxed mb-6"
          >
            A mature manufacturing base with{" "}
            <strong className="text-white/70">~5.7M TR installed</strong>{" "}
            (growing at 1.1M TR/yr), robust domestic OEM presence, and projected{" "}
            <strong className="text-white/70">
              6× growth to 38.1M TR by 2037–38
            </strong>
            . Water-cooled centrifugal chillers are the backbone of district
            cooling systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div data-design-id="mo-chiller-market-stats" className="stat-card">
              <h4 className="text-xs font-semibold text-teal-400/80 tracking-wider uppercase mb-3">
                Market Overview
              </h4>
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Annual Market (2025)</span>
                  <span className="text-teal-400/80 font-medium">
                    $575–740M
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Installed Base</span>
                  <span className="text-white/80 font-medium">~5.7M TR</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Annual Growth</span>
                  <span className="text-white/80 font-medium">~1.1M TR/yr</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Projection 2037–38</span>
                  <span className="text-teal-400/80 font-semibold">
                    38.1M TR
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">
                    Water-Cooled Dominance (&gt;200 TR)
                  </span>
                  <span className="text-white/80 font-medium">53.6%</span>
                </div>
              </div>
              <p className="text-[10px] text-white/25 mt-3 italic">
                Source: Grand View / Mordor Intelligence 2025, CLASP–BEE Market
                Assessment
              </p>
            </div>

            <div data-design-id="mo-chiller-segments" className="stat-card">
              <h4 className="text-xs font-semibold text-teal-400/80 tracking-wider uppercase mb-3">
                Market Segmentation (by Compressor Type)
              </h4>
              <div className="space-y-3">
                {CHILLER_SEGMENTS.map((seg, i) => (
                  <div
                    key={seg.type}
                    data-design-id={`mo-chiller-seg-${i + 1}`}
                  >
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">
                        {seg.type}{" "}
                        <span className="text-white/30">({seg.range})</span>
                      </span>
                      <span className="text-white/70 font-mono">
                        ~{seg.share}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${seg.share}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                        className={`h-full ${seg.color}/20 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-white/25 mt-3 italic">
                Source: TERI / RAMA Chiller Report
              </p>
            </div>
          </div>

          {/* Domestic Manufacturers */}
          <div data-design-id="mo-manufacturers" className="stat-card">
            <h4 className="text-xs font-semibold text-teal-400/80 tracking-wider uppercase mb-4">
              Domestic Manufacturing Presence
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {MANUFACTURERS.map((m, i) => (
                <div
                  key={m.name}
                  data-design-id={`mo-mfr-${i + 1}`}
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <p className="text-xs font-semibold text-white/70">
                    {m.name}
                  </p>
                  <p className="text-[10px] text-white/35 mt-0.5">
                    {m.location}
                  </p>
                </div>
              ))}
            </div>
            <p
              data-design-id="mo-mfr-gap"
              className="text-[10px] text-white/30 mt-4 italic"
            >
              Key gap: DCS-specific items (pre-insulated pipes, energy transfer
              stations) currently rely on imports — clear Make in India
              opportunity.
            </p>
          </div>
        </motion.div>

        {/* FDI & Employment */}
        <div
          data-design-id="mo-fdi-jobs"
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <motion.div
            data-design-id="mo-fdi-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-teal-400/70" />
              <h3 className="text-sm font-semibold text-white">
                FDI Opportunity (2026–2035): $3–4.5 Billion
              </h3>
            </div>
            <div className="space-y-2">
              {FDI_ITEMS.map((f, i) => (
                <div
                  key={f.label}
                  data-design-id={`mo-fdi-item-${i + 1}`}
                  className="flex justify-between text-xs"
                >
                  <span className="text-white/50">{f.label}</span>
                  <span className="text-teal-400/80 font-medium">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/30 mt-4">
              ~50% of cumulative $6.7B new capacity investment could involve
              foreign capital via equity in PPP concessions, multilateral/export
              credit debt, and technology imports.
            </p>
          </motion.div>

          <motion.div
            data-design-id="mo-jobs-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-teal-400/70" />
              <h3 className="text-sm font-semibold text-white">
                Employment by 2035: 120,000 Jobs
              </h3>
            </div>
            <div className="space-y-2">
              {JOBS.map((j, i) => (
                <div
                  key={j.category}
                  data-design-id={`mo-jobs-item-${i + 1}`}
                  className="flex justify-between text-xs"
                >
                  <span className="text-white/50">
                    {j.category}{" "}
                    {j.note && (
                      <span className="text-white/30">({j.note})</span>
                    )}
                  </span>
                  <span className="text-teal-400/80 font-medium">
                    {j.count}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/30 mt-4">
              65% youth (25–40 age) · 40% in Tier 2/3 cities
            </p>
          </motion.div>
        </div>

        {/* Data Centre Market — Expanded */}
        <motion.div
          data-design-id="mo-data-centres"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Server className="w-5 h-5 text-teal-400" />
            <h3
              data-design-id="mo-dc-title"
              className="text-lg font-semibold text-white"
            >
              Data Centres: The Next Wave of Growth
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {DC_STATS.map((s, i) => (
              <div
                key={s.label}
                data-design-id={`mo-dc-stat-${i + 1}`}
                className="stat-card text-center"
              >
                <div className="text-lg font-bold text-white">{s.value}</div>
                <div className="text-[10px] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div
              data-design-id="mo-dc-benefits"
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <h4 className="text-xs font-semibold text-teal-400/80 tracking-wider uppercase mb-3">
                Why DCS for Data Centres
              </h4>
              <ul className="space-y-2">
                <li
                  data-design-id="mo-dc-ben-1"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-400/50 mt-1.5 shrink-0" />
                  <strong className="text-teal-400/80">
                    25–30% lifecycle cost savings
                  </strong>{" "}
                  — centralised cooling at scale
                </li>
                <li
                  data-design-id="mo-dc-ben-2"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-400/50 mt-1.5 shrink-0" />
                  Frees{" "}
                  <strong className="text-white/70">
                    30% of power capacity
                  </strong>{" "}
                  for IT loads by offloading cooling
                </li>
                <li
                  data-design-id="mo-dc-ben-3"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-400/50 mt-1.5 shrink-0" />
                  PUE improvement from{" "}
                  <strong className="text-white/70">1.6 → 1.2</strong> —
                  industry-leading efficiency
                </li>
                <li
                  data-design-id="mo-dc-ben-4"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-400/50 mt-1.5 shrink-0" />
                  Enables seawater/STP water integration — critical for
                  water-stressed zones
                </li>
              </ul>
            </div>
            <div
              data-design-id="mo-dc-pipeline"
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <h4 className="text-xs font-semibold text-teal-400/80 tracking-wider uppercase mb-3">
                Market Dynamics
              </h4>
              <ul className="space-y-2">
                <li
                  data-design-id="mo-dc-dyn-1"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <Cpu className="w-3 h-3 text-teal-400/40 mt-0.5 shrink-0" />
                  India&apos;s data centre capacity expanding at{" "}
                  <strong className="text-white/70">2+ GW pipeline</strong>
                </li>
                <li
                  data-design-id="mo-dc-dyn-2"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <Cpu className="w-3 h-3 text-teal-400/40 mt-0.5 shrink-0" />
                  <strong className="text-white/70">
                    60–80% of facilities
                  </strong>{" "}
                  in high water-stress zones
                </li>
                <li
                  data-design-id="mo-dc-dyn-3"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <Cpu className="w-3 h-3 text-teal-400/40 mt-0.5 shrink-0" />
                  Data centre chiller demand growing at{" "}
                  <strong className="text-white/70">12.4% CAGR</strong> —
                  110–130K TR new demand/yr
                </li>
                <li
                  data-design-id="mo-dc-dyn-4"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <Cpu className="w-3 h-3 text-teal-400/40 mt-0.5 shrink-0" />
                  Key projects: CtrlS Pharma City (750MW), Yotta Navi Mumbai
                  (33MW), AdaniConneX pipeline
                </li>
              </ul>
            </div>
          </div>
          <p
            data-design-id="mo-dc-source"
            className="text-[10px] text-white/25 italic"
          >
            Source: Grand View Research 2025, Mordor Intelligence 2025
          </p>
        </motion.div>

        {/* New Entrants */}
        <div
          data-design-id="mo-bottom-row"
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div
            data-design-id="mo-new-entrants"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-teal-400/70" />
              <h3 className="text-sm font-semibold text-white">
                New Market Entrants
              </h3>
            </div>
            <p className="text-xs text-white/50 mb-4">
              Tabreed&apos;s PPP concessions catalysed market entry by major
              Indian and global corporates, validating the commercial viability
              of district cooling in India:
            </p>
            <div className="flex flex-wrap gap-2">
              {NEW_ENTRANTS.map((name, i) => (
                <span
                  key={name}
                  data-design-id={`mo-entrant-${i + 1}`}
                  className="px-3 py-1.5 text-xs text-white/70 bg-white/[0.04] border border-white/[0.06] rounded-lg"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            data-design-id="mo-growth-trajectory"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="stat-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-teal-400/70" />
              <h3 className="text-sm font-semibold text-white">
                Chiller Market Growth Trajectory
              </h3>
            </div>
            <div className="space-y-3">
              <div
                data-design-id="mo-traj-2018"
                className="flex items-center gap-3"
              >
                <span className="text-xs text-white/40 w-20 shrink-0">
                  2018
                </span>
                <div className="flex-1 h-6 bg-white/[0.03] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "15%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-full bg-teal-400/15 rounded-full flex items-center pl-2"
                  >
                    <span className="text-[10px] text-white/60">5.7M TR</span>
                  </motion.div>
                </div>
              </div>
              <div
                data-design-id="mo-traj-2025"
                className="flex items-center gap-3"
              >
                <span className="text-xs text-white/40 w-20 shrink-0">
                  2025 (est.)
                </span>
                <div className="flex-1 h-6 bg-white/[0.03] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "24%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="h-full bg-teal-400/20 rounded-full flex items-center pl-2"
                  >
                    <span className="text-[10px] text-white/60">~8–9M TR</span>
                  </motion.div>
                </div>
              </div>
              <div
                data-design-id="mo-traj-2038"
                className="flex items-center gap-3"
              >
                <span className="text-xs text-white/40 w-20 shrink-0">
                  2037–38
                </span>
                <div className="flex-1 h-6 bg-white/[0.03] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-teal-400/25 rounded-full flex items-center pl-2"
                  >
                    <span className="text-[10px] text-white/70 font-semibold">
                      38.1M TR
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-white/25 mt-3 italic">
              Source: CLASP–BEE Updated Market Assessment for Chillers in India
              (2023)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
