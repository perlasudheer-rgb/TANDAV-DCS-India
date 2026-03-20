"use client";

import { motion } from "framer-motion";
import { TrendingUp, Factory, Globe, Users, Server, MapPin, Building2, ArrowRight, Briefcase } from "lucide-react";

const MARKET_GROWTH = [
  { year: "2025", value: "$0.48B", tr: "322K TR" },
  { year: "2030", value: "$1.92B", tr: "1.28M TR" },
  { year: "2035", value: "$7.22B", tr: "4.81M TR" },
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

const MMR_PROJECTS = [
  { name: "BKC Retrofit", capacity: "72K RT" },
  { name: "Dharavi Redevelopment", capacity: "83.5K RT" },
  { name: "Navi Mumbai DC Cluster", capacity: "172.5K RT" },
  { name: "Mindspace Airoli CaaS", capacity: "21K RT" },
];

const CHENNAI_PROJECTS = [
  { name: "OMR IT Corridor" },
  { name: "Data Centre Belt" },
  { name: "Chennai Airport T2–T4" },
  { name: "Anna Salai Hub" },
];

const NEW_ENTRANTS = [
  "Adani Energy Solutions",
  "Keppel Infrastructure",
  "Tata Power",
  "Carrier / Johnson Controls",
  "Daikin",
];

const SUPPLY_CHAIN = [
  { item: "Centrifugal Chillers", status: "Domestic + FDI JVs" },
  { item: "Pumps & Motors", status: "Fully localisable" },
  { item: "Pre-insulated Piping", status: "Import → local manufacturing" },
  { item: "Controls & Automation", status: "Growing domestic" },
  { item: "Thermal Storage Tanks", status: "Fabrication ready" },
  { item: "Cooling Towers", status: "Mature domestic" },
];

export default function MarketOpportunity() {
  return (
    <section id="market-opportunity" data-design-id="market-opportunity-section" className="relative py-24 md:py-32">
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
          <span data-design-id="mo-label" className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block">
            Economic Rationale
          </span>
          <h2 data-design-id="mo-title" className="section-title text-white mb-4">
            A Multi-Billion Dollar<br />
            <span className="text-gradient">Opportunity</span>
          </h2>
          <p data-design-id="mo-subtitle" className="section-subtitle">
            15× capacity growth projected by 2035. ₹45,000 Cr+ domestic manufacturing potential at 75% localisation. A market aligned with Make in India and Viksit Bharat 2047.
          </p>
        </motion.div>

        <div data-design-id="mo-growth-cards" className="grid md:grid-cols-3 gap-4 mb-16">
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
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{item.value}</div>
              <div className="text-sm text-white/50">{item.tr} installed</div>
              {i < 2 && (
                <ArrowRight className="absolute top-1/2 -right-3 w-5 h-5 text-teal-400/30 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>

        <div data-design-id="mo-fdi-jobs" className="grid md:grid-cols-2 gap-6 mb-16">
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
              <h3 className="text-sm font-semibold text-white">FDI Opportunity (2026–2035): $3–4.5 Billion</h3>
            </div>
            <div className="space-y-2">
              {FDI_ITEMS.map((f, i) => (
                <div key={i} data-design-id={`mo-fdi-item-${i + 1}`} className="flex justify-between text-xs">
                  <span className="text-white/50">{f.label}</span>
                  <span className="text-teal-400/80 font-medium">{f.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/30 mt-4">~50% of cumulative $6.7B new capacity investment could involve foreign capital</p>
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
              <h3 className="text-sm font-semibold text-white">Employment by 2035: 120,000 Jobs</h3>
            </div>
            <div className="space-y-2">
              {JOBS.map((j, i) => (
                <div key={i} data-design-id={`mo-jobs-item-${i + 1}`} className="flex justify-between text-xs">
                  <span className="text-white/50">{j.category} {j.note && <span className="text-white/30">({j.note})</span>}</span>
                  <span className="text-teal-400/80 font-medium">{j.count}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/30 mt-4">65% youth · 40% in Tier 2/3 cities</p>
          </motion.div>
        </div>

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
            <h3 data-design-id="mo-dc-title" className="text-lg font-semibold text-white">Data Centres: The Next Frontier</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {DC_STATS.map((s, i) => (
              <div key={i} data-design-id={`mo-dc-stat-${i + 1}`} className="stat-card text-center">
                <div className="text-lg font-bold text-white">{s.value}</div>
                <div className="text-[10px] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
          <div data-design-id="mo-dc-benefits" className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="text-xs text-white/50 leading-relaxed">
              DCS delivers <strong className="text-teal-400/80">25–30% lifecycle cost savings</strong> for data centres, frees 30% power capacity for IT loads, and enables seawater/STP water integration. Key projects include CtrlS Pharma City (750MW), Yotta Navi Mumbai (33MW), and AdaniConneX pipeline.
            </p>
          </div>
        </motion.div>

        <div data-design-id="mo-metro-grid" className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            data-design-id="mo-mmr"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white">Mumbai Metropolitan Region (MMR)</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div data-design-id="mo-mmr-invest" className="text-center p-3 rounded-lg bg-white/[0.03]">
                <div className="text-lg font-bold text-cyan-400">$2.5B</div>
                <div className="text-[10px] text-white/40">DCS Investment</div>
              </div>
              <div data-design-id="mo-mmr-cap" className="text-center p-3 rounded-lg bg-white/[0.03]">
                <div className="text-lg font-bold text-white">1M RT</div>
                <div className="text-[10px] text-white/40">Addressable Capacity</div>
              </div>
            </div>
            <div className="space-y-2">
              {MMR_PROJECTS.map((p, i) => (
                <div key={i} data-design-id={`mo-mmr-project-${i + 1}`} className="flex justify-between text-xs">
                  <span className="text-white/50">{p.name}</span>
                  <span className="text-cyan-400/70 font-mono">{p.capacity}</span>
                </div>
              ))}
            </div>
            <div data-design-id="mo-mmr-tariff" className="mt-3 text-[10px] text-white/30">MERC Industrial Tariff: ₹5.3–5.8/kWh · Peak Power Reduction: 1.5 GW</div>
          </motion.div>

          <motion.div
            data-design-id="mo-chennai"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="stat-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-semibold text-white">Chennai Third Master Plan</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div data-design-id="mo-chen-invest" className="text-center p-3 rounded-lg bg-white/[0.03]">
                <div className="text-lg font-bold text-amber-400">$2.0B</div>
                <div className="text-[10px] text-white/40">DCS Investment</div>
              </div>
              <div data-design-id="mo-chen-cap" className="text-center p-3 rounded-lg bg-white/[0.03]">
                <div className="text-lg font-bold text-white">800K RT</div>
                <div className="text-[10px] text-white/40">Addressable Capacity</div>
              </div>
            </div>
            <div className="space-y-2">
              {CHENNAI_PROJECTS.map((p, i) => (
                <div key={i} data-design-id={`mo-chen-project-${i + 1}`} className="flex items-center gap-2 text-xs text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
                  {p.name}
                </div>
              ))}
            </div>
            <div data-design-id="mo-chen-savings" className="mt-3 text-[10px] text-white/30">Annual Energy Savings: 4,000 GWh · TN SPC Steering Committee active</div>
          </motion.div>
        </div>

        <div data-design-id="mo-bottom-row" className="grid md:grid-cols-2 gap-6">
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
              <h3 className="text-sm font-semibold text-white">New Market Entrants</h3>
            </div>
            <p className="text-xs text-white/50 mb-4">
              Tabreed&apos;s PPP concessions catalysed market entry by major Indian and global corporates:
            </p>
            <div className="flex flex-wrap gap-2">
              {NEW_ENTRANTS.map((name, i) => (
                <span
                  key={i}
                  data-design-id={`mo-entrant-${i + 1}`}
                  className="px-3 py-1.5 text-xs text-white/70 bg-white/[0.04] border border-white/[0.06] rounded-lg"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            data-design-id="mo-supply-chain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="stat-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Factory className="w-5 h-5 text-teal-400/70" />
              <h3 className="text-sm font-semibold text-white">Supply Chain: India&apos;s Chiller Ecosystem</h3>
            </div>
            <p className="text-xs text-white/50 mb-4">
              ~5.7M TR installed base · Growing at 1.1M TR/yr · Projected 38.1M TR by 2037–38
            </p>
            <div className="space-y-2">
              {SUPPLY_CHAIN.map((s, i) => (
                <div key={i} data-design-id={`mo-supply-${i + 1}`} className="flex justify-between text-xs">
                  <span className="text-white/50">{s.item}</span>
                  <span className="text-teal-400/60">{s.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}