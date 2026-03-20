"use client";

import { motion } from "framer-motion";
import { Thermometer, Wind, Recycle, Factory, Flame } from "lucide-react";

const CO2_SOURCES = [
  { source: "Energy Efficiency", value: "28–42", unit: "MT CO₂/yr", color: "bg-teal-400" },
  { source: "Refrigerant Leak Avoidance", value: "8–15", unit: "MT CO₂e/yr", color: "bg-cyan-400" },
  { source: "Embodied Carbon Reduction", value: "3–5", unit: "MT CO₂e/yr", color: "bg-emerald-400" },
  { source: "T&D Infrastructure Avoided", value: "1–2", unit: "MT CO₂e/yr", color: "bg-green-400" },
];

export default function Climate() {
  return (
    <section id="climate" data-design-id="climate-section" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span data-design-id="climate-label" className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block">
            Environmental Case
          </span>
          <h2 data-design-id="climate-title" className="section-title text-white mb-4">
            Climate &<br />
            <span className="text-gradient">Environment</span>
          </h2>
          <p data-design-id="climate-subtitle" className="section-subtitle">
            India&apos;s ACs emitted 156 MT CO₂e in 2024 — equivalent to the entire passenger car fleet. DCS can cut emissions, eliminate refrigerant leaks, and reverse urban heat islands.
          </p>
        </motion.div>

        <div data-design-id="climate-headline-stats" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <motion.div data-design-id="climate-stat-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="stat-card text-center">
            <Flame className="w-5 h-5 text-red-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">156 MT</div>
            <div className="text-[10px] text-white/40">CO₂e from ACs (2024)</div>
          </motion.div>
          <motion.div data-design-id="climate-stat-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="stat-card text-center">
            <Wind className="w-5 h-5 text-amber-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">32,000 T</div>
            <div className="text-[10px] text-white/40">Refrigerant leaked (2024)</div>
          </motion.div>
          <motion.div data-design-id="climate-stat-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="stat-card text-center">
            <Recycle className="w-5 h-5 text-teal-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-400">70–85%</div>
            <div className="text-[10px] text-white/40">Less refrigerant per TR (DCS)</div>
          </motion.div>
          <motion.div data-design-id="climate-stat-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="stat-card text-center">
            <Thermometer className="w-5 h-5 text-emerald-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400">−0.5–1.5°C</div>
            <div className="text-[10px] text-white/40">UHI reduction with DCS</div>
          </motion.div>
        </div>

        <motion.div
          data-design-id="climate-co2-breakdown"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3 data-design-id="climate-co2-title" className="text-lg font-semibold text-white mb-6">
            Total CO₂ Reduction at 4.81M TR by 2035
          </h3>
          <div className="space-y-3 mb-6">
            {CO2_SOURCES.map((s, i) => (
              <motion.div
                key={s.source}
                data-design-id={`climate-co2-bar-${i + 1}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs text-white/60 w-52 shrink-0">{s.source}</span>
                <div className="flex-1 h-8 bg-white/[0.03] rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(parseInt(s.value.split("–")[1] || s.value) / 64) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    className={`h-full ${s.color}/15 rounded-lg flex items-center justify-end pr-3`}
                  >
                    <span className="text-xs font-semibold text-white/80">{s.value}</span>
                  </motion.div>
                </div>
                <span className="text-[10px] text-white/40 w-24">{s.unit}</span>
              </motion.div>
            ))}
          </div>
          <div data-design-id="climate-total-card" className="rounded-xl border border-teal-400/20 bg-teal-400/[0.03] p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">40–64 MT CO₂e/year</div>
            <p className="text-xs text-white/50">
              At full ICAP scale (38.1M TR by 2037–38): potential <strong className="text-teal-400/80">250–500 MT CO₂e/year</strong> — 4–9× the impact of UJALA&apos;s LED transition.
            </p>
          </div>
        </motion.div>

        <div data-design-id="climate-uhi-embodied" className="grid md:grid-cols-2 gap-6">
          <motion.div
            data-design-id="climate-uhi"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stat-card"
          >
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-red-400/70" /> Urban Heat Island
            </h3>
            <p className="text-xs text-white/50 leading-relaxed mb-3">
              Every room AC ejects waste heat at street level, raising urban temps by <strong className="text-red-400/70">1–2°C</strong> and increasing AC energy use by 5–10% in a reinforcing spiral.
            </p>
            <p className="text-xs text-white/50 leading-relaxed">
              DCS centralises heat rejection at elevated cooling towers. Eliminating thousands of outdoor condensers per block can reduce local temperatures by <strong className="text-emerald-400/70">0.5–1.5°C</strong>.
            </p>
          </motion.div>

          <motion.div
            data-design-id="climate-embodied"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="stat-card"
          >
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Factory className="w-4 h-4 text-emerald-400/70" /> Embodied Carbon
            </h3>
            <p className="text-xs text-white/50 leading-relaxed mb-3">
              DCS chillers last <strong className="text-white/70">25–30 years</strong> vs 8–12 for room ACs. Over a 30-year building life, room ACs need 2.5–3.5 replacements; DCS needs zero.
            </p>
            <p className="text-xs text-white/50 leading-relaxed">
              DCS uses 60–70% less copper, aluminium, and steel per TR. Fewer replacements cut manufacturing, shipping, and disposal emissions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}