"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Factory,
  Flame,
  Globe,
  Recycle,
  Thermometer,
  Truck,
  Wind,
} from "lucide-react";

const CO2_SOURCES = [
  {
    source: "Energy Efficiency",
    value: "28–42",
    unit: "MT CO₂/yr",
    color: "bg-teal-400",
    desc: "DCS saves 25–40% energy vs room ACs. At India\u2019s grid intensity (0.71 tCO₂/MWh), this translates to 28–42 MT CO₂e avoided annually.",
  },
  {
    source: "Refrigerant Leak Avoidance",
    value: "8–15",
    unit: "MT CO₂e/yr",
    color: "bg-cyan-400",
    desc: "Replacing 4.81M TR of room ACs eliminates ~15,000–25,000 tonnes of annual refrigerant leakage. At weighted-average GWP of ~600, this avoids 8–15 MT CO₂e per year.",
  },
  {
    source: "Embodied Carbon Reduction",
    value: "3–5",
    unit: "MT CO₂e/yr",
    color: "bg-emerald-400",
    desc: "DCS equipment lasts 25–30 years vs 8–12 for room ACs, using 60–70% less material per TR. Fewer replacements = lower manufacturing, transport, and disposal emissions.",
  },
  {
    source: "T&D Infrastructure Avoided",
    value: "1–2",
    unit: "MT CO₂e/yr",
    color: "bg-green-400",
    desc: "Avoiding 2–3 GW of peak capacity and 4–6 power plants eliminates embodied carbon from transmission towers, cables, substations, and generation equipment.",
  },
];

const REFRIGERANT_TABLE = [
  {
    aspect: "Typical Refrigerant",
    ac: "R-32 (GWP 675) / R-410A (GWP 2,088)",
    dcs: "R-134a (GWP 1,430) or R-1233zd (GWP 1)",
  },
  {
    aspect: "Charge per TR",
    ac: "~0.8–1.2 kg (small units)",
    dcs: "~0.15–0.3 kg (large chillers)",
  },
  {
    aspect: "Annual Leak Rate",
    ac: "8–15% (40% need yearly refill)",
    dcs: "< 1–2% (sealed, monitored)",
  },
  {
    aspect: "Leak Detection",
    ac: "None — found when AC stops",
    dcs: "Continuous automated monitoring",
  },
  {
    aspect: "End-of-Life Recovery",
    ac: "< 5% (informal disposal)",
    dcs: "> 95% (professional decommission)",
  },
  { aspect: "Equipment Lifespan", ac: "8–12 years", dcs: "25–30 years" },
];

export default function Climate() {
  return (
    <section
      id="climate"
      data-design-id="climate-section"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            data-design-id="climate-label"
            className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block"
          >
            Environmental Case
          </span>
          <h2
            data-design-id="climate-title"
            className="section-title text-white mb-4"
          >
            Climate &<br />
            <span className="text-gradient">Environment</span>
          </h2>
          <p data-design-id="climate-subtitle" className="section-subtitle">
            India&apos;s ACs emitted 156 MT CO₂e in 2024 — equivalent to the
            entire passenger car fleet. DCS can cut emissions, eliminate
            refrigerant leaks, and reverse urban heat islands. At scale,
            district cooling could constitute the{" "}
            <strong className="text-teal-400/80">
              world&apos;s largest Climate & Heat Mitigation Programme
            </strong>
            .
          </p>
        </motion.div>

        <div
          data-design-id="climate-headline-stats"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <motion.div
            data-design-id="climate-stat-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="stat-card text-center"
          >
            <Flame className="w-5 h-5 text-red-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">156 MT</div>
            <div className="text-[10px] text-white/40">
              CO₂e from ACs (2024)
            </div>
          </motion.div>
          <motion.div
            data-design-id="climate-stat-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="stat-card text-center"
          >
            <Wind className="w-5 h-5 text-amber-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">32,000 T</div>
            <div className="text-[10px] text-white/40">
              Refrigerant leaked (2024)
            </div>
          </motion.div>
          <motion.div
            data-design-id="climate-stat-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="stat-card text-center"
          >
            <Recycle className="w-5 h-5 text-teal-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-400">70–85%</div>
            <div className="text-[10px] text-white/40">
              Less refrigerant per TR (DCS)
            </div>
          </motion.div>
          <motion.div
            data-design-id="climate-stat-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="stat-card text-center"
          >
            <Thermometer className="w-5 h-5 text-emerald-400/60 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400">
              −0.5–1.5°C
            </div>
            <div className="text-[10px] text-white/40">
              UHI reduction with DCS
            </div>
          </motion.div>
        </div>

        {/* Refrigerant Leakage Crisis */}
        <motion.div
          data-design-id="climate-refrigerant"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-amber-400/15 bg-amber-400/[0.02] p-8 md:p-10 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h3
              data-design-id="climate-ref-title"
              className="text-lg font-semibold text-white"
            >
              India&apos;s Refrigerant Leakage Crisis
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div
              data-design-id="climate-ref-stat-1"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-xl font-bold text-amber-400">32,000 T</div>
              <div className="text-[10px] text-white/40">
                Annual refills (2024)
              </div>
            </div>
            <div
              data-design-id="climate-ref-stat-2"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-xl font-bold text-white">40%</div>
              <div className="text-[10px] text-white/40">
                ACs needing annual refill
              </div>
            </div>
            <div
              data-design-id="climate-ref-stat-3"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-xl font-bold text-red-400">52 MT</div>
              <div className="text-[10px] text-white/40">
                CO₂e from leaks alone
              </div>
            </div>
            <div
              data-design-id="climate-ref-stat-4"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-xl font-bold text-white">₹7,000 Cr</div>
              <div className="text-[10px] text-white/40">
                Consumer cost wasted
              </div>
            </div>
          </div>
          <p
            data-design-id="climate-ref-desc"
            className="text-xs text-white/50 leading-relaxed mb-4"
          >
            80% of room ACs older than 5 years require annual refrigerant
            refilling. India lacks lifecycle refrigerant management regulations
            — most refrigerant escapes through poor O&M, faulty installations,
            and informal sector disposal with virtually zero end-of-life
            recovery. By 2035, AC refrigerant emissions are projected to reach{" "}
            <strong className="text-amber-400/80">84 MT CO₂e/year</strong>.
          </p>

          {/* Refrigerant Comparison Table */}
          <div
            data-design-id="climate-ref-table"
            className="rounded-lg border border-white/[0.06] overflow-hidden"
          >
            <div className="grid grid-cols-3 text-[10px] font-semibold tracking-wider uppercase bg-white/[0.02]">
              <div className="p-2.5 text-white/40">Aspect</div>
              <div className="p-2.5 text-red-400/70">Room ACs</div>
              <div className="p-2.5 text-teal-400/70">District Cooling</div>
            </div>
            {REFRIGERANT_TABLE.map((r, i) => (
              <div
                key={r.aspect}
                data-design-id={`climate-ref-row-${i + 1}`}
                className="grid grid-cols-3 text-xs border-t border-white/[0.04]"
              >
                <div className="p-2.5 text-white/50 font-medium">
                  {r.aspect}
                </div>
                <div className="p-2.5 text-white/40 bg-red-400/[0.02]">
                  {r.ac}
                </div>
                <div className="p-2.5 text-teal-400/60 bg-teal-400/[0.02]">
                  {r.dcs}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-white/25 mt-3 italic">
            Source: iFOREST 2025 Report, CEA grid emission factor (FY2024-25)
          </p>
        </motion.div>

        {/* CO2 Breakdown */}
        <motion.div
          data-design-id="climate-co2-breakdown"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3
            data-design-id="climate-co2-title"
            className="text-lg font-semibold text-white mb-6"
          >
            Total CO₂ Reduction at 4.81M TR by 2035
          </h3>
          <div className="space-y-4 mb-6">
            {CO2_SOURCES.map((s, i) => (
              <motion.div
                key={s.source}
                data-design-id={`climate-co2-bar-${i + 1}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/60 w-52 shrink-0">
                    {s.source}
                  </span>
                  <div className="flex-1 h-8 bg-white/[0.03] rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(Number.parseInt(s.value.split("\u2013")[1] || s.value) / 64) * 100}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                      className={`h-full ${s.color}/15 rounded-lg flex items-center justify-end pr-3`}
                    >
                      <span className="text-xs font-semibold text-white/80">
                        {s.value}
                      </span>
                    </motion.div>
                  </div>
                  <span className="text-[10px] text-white/40 w-24">
                    {s.unit}
                  </span>
                </div>
                <p className="text-[10px] text-white/30 ml-52 pl-4 mt-1 hidden md:block">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div
            data-design-id="climate-total-card"
            className="rounded-xl border border-teal-400/20 bg-teal-400/[0.03] p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
              40–64 MT CO₂e/year
            </div>
            <p className="text-xs text-white/50">
              At full ICAP scale (38.1M TR by 2037–38): potential{" "}
              <strong className="text-teal-400/80">250–500 MT CO₂e/year</strong>{" "}
              — 4–9× the impact of UJALA&apos;s LED transition.
            </p>
          </div>
        </motion.div>

        {/* Expanded UHI Section */}
        <motion.div
          data-design-id="climate-uhi"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-red-400/15 bg-red-400/[0.02] p-8 md:p-10 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Thermometer className="w-6 h-6 text-red-400" />
            <h3
              data-design-id="climate-uhi-title"
              className="text-lg font-semibold text-white"
            >
              Urban Heat Island Effect
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div data-design-id="climate-uhi-negative">
              <div className="flex items-center gap-2 mb-3">
                <ArrowUp className="w-4 h-4 text-red-400" />
                <h4 className="text-sm font-semibold text-red-400/80">
                  Room ACs: Negative Feedback Loop
                </h4>
              </div>
              <ul className="space-y-2">
                <li
                  data-design-id="climate-uhi-neg-1"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                  Every room AC unit ejects waste heat directly into the
                  street-level environment
                </li>
                <li
                  data-design-id="climate-uhi-neg-2"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                  Studies show AC waste heat raises urban temperatures by{" "}
                  <strong className="text-red-400/70">1–2°C</strong> in dense
                  neighbourhoods
                </li>
                <li
                  data-design-id="climate-uhi-neg-3"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                  Higher ambient temperatures increase AC energy consumption by{" "}
                  <strong className="text-red-400/70">5–10%</strong>, causing a
                  reinforcing warming spiral
                </li>
                <li
                  data-design-id="climate-uhi-neg-4"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-red-400/50 mt-1.5 shrink-0" />
                  With 93% of India yet to adopt AC, this problem will multiply
                  dramatically as adoption rises
                </li>
              </ul>
            </div>

            <div data-design-id="climate-uhi-positive">
              <div className="flex items-center gap-2 mb-3">
                <ArrowDown className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-semibold text-emerald-400/80">
                  DCS: Virtuous Cooling Cycle
                </h4>
              </div>
              <ul className="space-y-2">
                <li
                  data-design-id="climate-uhi-pos-1"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400/50 mt-1.5 shrink-0" />
                  DCS centralises heat rejection at{" "}
                  <strong className="text-emerald-400/70">
                    elevated cooling towers
                  </strong>{" "}
                  far from pedestrian zones
                </li>
                <li
                  data-design-id="climate-uhi-pos-2"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400/50 mt-1.5 shrink-0" />
                  Water-cooled chillers reject heat via{" "}
                  <strong className="text-emerald-400/70">evaporation</strong>{" "}
                  (not hot air blasts at street level)
                </li>
                <li
                  data-design-id="climate-uhi-pos-3"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400/50 mt-1.5 shrink-0" />
                  Eliminating thousands of outdoor condenser units per block can
                  reduce local ambient temperatures by{" "}
                  <strong className="text-emerald-400/70">0.5–1.5°C</strong>
                </li>
                <li
                  data-design-id="climate-uhi-pos-4"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400/50 mt-1.5 shrink-0" />
                  Creates quieter, cleaner streetscapes — no noise, no hot
                  exhaust, no visual clutter from window units
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              data-design-id="climate-uhi-metric-1"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-xl font-bold text-red-400">+1–2°C</div>
              <div className="text-[10px] text-white/40">
                Urban heating from AC waste heat
              </div>
            </div>
            <div
              data-design-id="climate-uhi-metric-2"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-xl font-bold text-emerald-400">
                −0.5–1.5°C
              </div>
              <div className="text-[10px] text-white/40">
                UHI reduction with DCS at scale
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/25 mt-3 italic">
            Source: Salamanca et al., 2014
          </p>
        </motion.div>

        {/* Expanded Embodied Carbon */}
        <motion.div
          data-design-id="climate-embodied"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.02] p-8 md:p-10 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-6 h-6 text-emerald-400" />
            <h3
              data-design-id="climate-embodied-title"
              className="text-lg font-semibold text-white"
            >
              Embodied Carbon Reduction
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div data-design-id="climate-emb-longevity" className="stat-card">
              <h4 className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3">
                Equipment Longevity
              </h4>
              <p className="text-xs text-white/50 leading-relaxed mb-3">
                DCS chillers last{" "}
                <strong className="text-white/70">25–30 years</strong> vs 8–12
                years for room ACs.
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                Over a 30-year building life, a room AC needs{" "}
                <strong className="text-white/70">2.5–3.5 replacements</strong>
                {" — "}DCS typically needs{" "}
                <strong className="text-emerald-400/70">zero</strong>.
              </p>
            </div>

            <div data-design-id="climate-emb-material" className="stat-card">
              <h4 className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3">
                Material Intensity
              </h4>
              <p className="text-xs text-white/50 leading-relaxed mb-3">
                DCS uses <strong className="text-white/70">60–70% less</strong>{" "}
                copper, aluminium, and steel per TR of cooling delivered.
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                Centralised equipment benefits and shared distribution
                infrastructure dramatically reduce material consumption per unit
                of cooling.
              </p>
            </div>

            <div data-design-id="climate-emb-supply" className="stat-card">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="w-4 h-4 text-emerald-400/60" />
                <h4 className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase">
                  Supply Chain Emissions
                </h4>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                DCS reduces replacement cycles and thus reduces{" "}
                <strong className="text-white/70">
                  container shipping, warehousing, and last-mile logistics
                  emissions
                </strong>
                . Fewer manufacturing runs = less industrial emissions from
                smelting, fabrication, and assembly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* World's Largest Climate Programme */}
        <motion.div
          data-design-id="climate-programme"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-teal-400/20 bg-gradient-to-br from-teal-400/[0.04] to-cyan-400/[0.04] p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-teal-400" />
            <div>
              <h3
                data-design-id="climate-prog-title"
                className="text-lg font-semibold text-white"
              >
                World&apos;s Largest Climate & Heat Mitigation Programme
              </h3>
              <p className="text-[10px] text-teal-400/60">Launched 2026</p>
            </div>
          </div>
          <p
            data-design-id="climate-prog-desc"
            className="text-xs text-white/50 leading-relaxed mb-5"
          >
            India&apos;s district cooling ambition — combining energy
            efficiency, refrigerant leak elimination, UHI reversal, and embodied
            carbon reduction — has the potential to become the{" "}
            <strong className="text-teal-400/80">
              world&apos;s largest integrated climate and heat mitigation
              programme
            </strong>
            . No other single infrastructure intervention simultaneously
            addresses energy demand, urban temperatures, refrigerant emissions,
            material waste, and public health at this scale.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              data-design-id="climate-prog-stat-1"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-lg font-bold text-teal-400">250–500</div>
              <div className="text-[10px] text-white/40">
                MT CO₂e/yr at ICAP scale
              </div>
            </div>
            <div
              data-design-id="climate-prog-stat-2"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-lg font-bold text-white">38.1M TR</div>
              <div className="text-[10px] text-white/40">
                Full ICAP target by 2037
              </div>
            </div>
            <div
              data-design-id="climate-prog-stat-3"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-lg font-bold text-emerald-400">−1.5°C</div>
              <div className="text-[10px] text-white/40">
                Urban temp reduction
              </div>
            </div>
            <div
              data-design-id="climate-prog-stat-4"
              className="text-center p-3 rounded-lg bg-white/[0.03]"
            >
              <div className="text-lg font-bold text-cyan-400">4–9×</div>
              <div className="text-[10px] text-white/40">
                UJALA LED impact multiplier
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
