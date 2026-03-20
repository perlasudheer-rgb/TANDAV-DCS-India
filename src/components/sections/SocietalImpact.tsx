"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Droplets, Briefcase, Lightbulb, Building2, Leaf, Handshake } from "lucide-react";

const SDGS = [
  {
    icon: Heart,
    number: "3",
    title: "Good Health",
    desc: "Thermal comfort for hundreds of millions in extreme heat. 1,600+ heat deaths in 2023. Clean indoor air without outdoor condenser emissions.",
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
  },
  {
    icon: Zap,
    number: "7",
    title: "Affordable Energy",
    desc: "25–40% energy savings vs room ACs. TES enables renewable utilisation. Cooling-as-a-Service removes upfront capex barrier.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: Droplets,
    number: "6",
    title: "Clean Water",
    desc: "DCS integrates treated sewage (STP) and seawater for cooling. 30–40% reduction in per-TR water consumption.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: Briefcase,
    number: "8",
    title: "Decent Work",
    desc: "$7.2B market by 2035 creates 120,000 skilled jobs. New vocational category aligned with Skill India.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: Lightbulb,
    number: "9",
    title: "Innovation",
    desc: "Next-gen urban utility with TES, AI-driven load optimisation, and IoT monitoring. Exportable to other tropical nations.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    icon: Building2,
    number: "11",
    title: "Sustainable Cities",
    desc: "Reduces UHI by 0.5–1.5°C, eliminates noisy outdoor units, frees rooftop space. Aligned with Smart Cities Mission.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
  {
    icon: Leaf,
    number: "13",
    title: "Climate Action",
    desc: "40–64 MT CO₂e/year avoided at 4.81M TR. Potentially 250–500 MT CO₂e/year at full ICAP scale.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Handshake,
    number: "17",
    title: "Partnerships",
    desc: "UNEP-BEE partnership, World Bank financing, private sector investment, state-level policy action, multilateral knowledge exchange.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
];

export default function SocietalImpact() {
  return (
    <section id="societal-impact" data-design-id="societal-impact-section" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-teal opacity-20" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span data-design-id="si-label" className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block">
            Beyond Climate
          </span>
          <h2 data-design-id="si-title" className="section-title text-white mb-4">
            Societal<br />
            <span className="text-gradient">Impact</span>
          </h2>
          <p data-design-id="si-subtitle" className="section-subtitle">
            District cooling contributes to 8 UN SDGs — from saving lives during heat waves to creating skilled employment and building sustainable cities.
          </p>
        </motion.div>

        <div data-design-id="si-people-stat" className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <motion.div data-design-id="si-heat-deaths" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="stat-card text-center">
            <div className="text-2xl font-bold text-red-400">1,600+</div>
            <div className="text-[10px] text-white/40">Heat deaths in India (2023)</div>
          </motion.div>
          <motion.div data-design-id="si-ac-coverage" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="stat-card text-center">
            <div className="text-2xl font-bold text-amber-400">~7%</div>
            <div className="text-[10px] text-white/40">Indian households with AC today</div>
          </motion.div>
          <motion.div data-design-id="si-market-size" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="stat-card text-center col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-teal-400">$7.2B</div>
            <div className="text-[10px] text-white/40">DCS market potential by 2035</div>
          </motion.div>
        </div>

        <div data-design-id="si-sdg-grid" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SDGS.map((sdg, i) => (
            <motion.div
              key={sdg.number}
              data-design-id={`si-sdg-${sdg.number}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`stat-card hover:${sdg.border} transition-all duration-300 group`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-lg ${sdg.bg} flex items-center justify-center`}>
                  <sdg.icon className={`w-4 h-4 ${sdg.color}`} />
                </div>
                <div>
                  <span className="text-[10px] text-white/30 block">SDG {sdg.number}</span>
                  <span className="text-xs font-semibold text-white">{sdg.title}</span>
                </div>
              </div>
              <p className="text-[11px] text-white/45 leading-relaxed">{sdg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}