"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  Factory,
  GraduationCap,
  Landmark,
  MapPin,
  Scale,
  Target,
} from "lucide-react";

const MOHUA_WORKSTREAMS = [
  {
    num: "01",
    title: "Regulatory & Institutional Framework",
    icon: Scale,
    actions: [
      "National DCS Steering Committee with inter-ministerial representation",
      "Governance framework for technical standards, tariff methodologies, SLAs, consumer protection",
    ],
    target: "National regulatory framework operational by 2028",
  },
  {
    num: "02",
    title: "Building Codes & Standards",
    icon: BookOpen,
    actions: [
      "Dedicated DCS chapter for NBC and ECBC with design standards and performance benchmarks",
      "BIS standards for DCS equipment specifications",
    ],
    target: "NBC/ECBC amendments notified by 2027",
  },
  {
    num: "03",
    title: "Urban Planning Integration",
    icon: MapPin,
    actions: [
      "Model guidelines for ULBs to integrate DCS zones, utility corridors, energy centres into master plans",
      "Linkages with Smart Cities Mission, AMRUT 2.0, National Cooling Action Plan",
    ],
    target: "Advisory to all State ULBs by 2026",
  },
  {
    num: "04",
    title: "Centre of Excellence & Capacity Building",
    icon: GraduationCap,
    actions: [
      "National CoE for District Cooling as knowledge hub",
      "Standardised feasibility study templates, financial models, toolkits",
      "GIFT City as live demonstration facility",
    ],
    target: "CoE operational by 2027; 500+ professionals trained by 2030",
  },
];

export default function PolicyLevers() {
  return (
    <section
      id="policy-levers"
      data-design-id="policy-levers-section"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-teal-500/[0.04] blur-[120px]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            data-design-id="pl-label"
            className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block"
          >
            Government Programmes
          </span>
          <h2
            data-design-id="pl-title"
            className="section-title text-white mb-4"
          >
            Policy
            <br />
            <span className="text-gradient">Levers</span>
          </h2>
          <p data-design-id="pl-subtitle" className="section-subtitle">
            Three flagship government programmes and MoHUA&apos;s regulatory
            framework can accelerate district cooling adoption across India.
          </p>
        </motion.div>

        <div
          data-design-id="pl-programmes-grid"
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <motion.div
            data-design-id="pl-ahead-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3
                  data-design-id="pl-ahead-title"
                  className="text-base font-semibold text-white"
                >
                  AHEAD
                </h3>
                <p className="text-[10px] text-white/40">
                  World Bank & Ministry of Commerce
                </p>
              </div>
            </div>
            <div
              data-design-id="pl-ahead-amount"
              className="text-3xl font-bold text-cyan-400 mb-3"
            >
              $750 Million
            </div>
            <p
              data-design-id="pl-ahead-desc"
              className="text-xs text-white/50 leading-relaxed mb-4"
            >
              A dedicated World Bank facility in partnership with the Ministry
              of Commerce to promote{" "}
              <strong className="text-white/70">
                super-efficient air conditioners and district cooling systems
              </strong>{" "}
              across India. The programme targets accelerating the deployment of
              next-generation cooling technologies, energy-efficient equipment,
              and district-level cooling infrastructure to reduce peak
              electricity demand and greenhouse gas emissions.
            </p>
            <div data-design-id="pl-ahead-focus" className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Target className="w-3.5 h-3.5 text-cyan-400/60 shrink-0" />
                Super-efficient AC market transformation
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Target className="w-3.5 h-3.5 text-cyan-400/60 shrink-0" />
                District cooling deployment & scale-up
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Target className="w-3.5 h-3.5 text-cyan-400/60 shrink-0" />
                Sustainable cooling technology financing
              </div>
            </div>
          </motion.div>

          <motion.div
            data-design-id="pl-bhavya-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-amber-400/15 bg-amber-400/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center">
                <Factory className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3
                  data-design-id="pl-bhavya-title"
                  className="text-base font-semibold text-white"
                >
                  BHAVYA
                </h3>
                <p className="text-[10px] text-white/40">
                  Bharat Audyogik Vikas Yojna · Launched March 2026
                </p>
              </div>
            </div>
            <div
              data-design-id="pl-bhavya-amount"
              className="text-3xl font-bold text-amber-400 mb-3"
            >
              ₹33,660 Crore
            </div>
            <p
              data-design-id="pl-bhavya-desc"
              className="text-xs text-white/50 leading-relaxed mb-4"
            >
              100 plug-and-play industrial parks (100–1,000 acres) with up to{" "}
              <strong className="text-white/70">₹1 Crore per acre</strong> for
              core infrastructure. Mandates integrated underground utility
              corridors, green energy, and sustainable resource use.
            </p>
            <div
              data-design-id="pl-bhavya-ask"
              className="rounded-lg border border-amber-400/10 bg-amber-400/[0.03] p-4"
            >
              <p className="text-[10px] text-amber-400/80 font-semibold uppercase tracking-wider mb-1">
                Policy Ask
              </p>
              <p className="text-xs text-white/50">
                Include DCS readiness as scoring criterion. Dedicate 10–15%
                (~₹10–15 Lakhs/acre) of ₹1 Cr/acre for DCS piping and plant land
                allocation.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          data-design-id="pl-mohua"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3
                data-design-id="pl-mohua-title"
                className="text-lg font-semibold text-white"
              >
                MoHUA Policy & Regulatory Framework
              </h3>
              <p className="text-xs text-white/40">
                Supported by World Bank / AHEAD Programme · Grant Period
                2025–2030
              </p>
            </div>
          </div>

          <div
            data-design-id="pl-mohua-workstreams"
            className="grid md:grid-cols-2 gap-4"
          >
            {MOHUA_WORKSTREAMS.map((ws, i) => (
              <motion.div
                key={ws.num}
                data-design-id={`pl-mohua-ws-${i + 1}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="stat-card group hover:border-teal-400/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg font-bold text-teal-400/30">
                    {ws.num}
                  </span>
                  <ws.icon className="w-4 h-4 text-teal-400/60" />
                  <h4 className="text-sm font-semibold text-white">
                    {ws.title}
                  </h4>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {ws.actions.map((a, ai) => (
                    <li
                      key={ai}
                      className="text-[11px] text-white/45 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-teal-400/40 mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="px-3 py-2 rounded-lg bg-teal-400/[0.05] border border-teal-400/10">
                  <p className="text-[10px] text-teal-400/70 font-medium">
                    {ws.target}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          data-design-id="pl-mohua-outcomes"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div data-design-id="pl-outcome-1" className="stat-card text-center">
            <div className="text-xl font-bold text-teal-400">3–5</div>
            <div className="text-[10px] text-white/40">
              Smart City / AMRUT DCS projects
            </div>
          </div>
          <div data-design-id="pl-outcome-2" className="stat-card text-center">
            <div className="text-xl font-bold text-white">500+</div>
            <div className="text-[10px] text-white/40">
              Professionals trained by 2030
            </div>
          </div>
          <div data-design-id="pl-outcome-3" className="stat-card text-center">
            <div className="text-xl font-bold text-emerald-400">40%</div>
            <div className="text-[10px] text-white/40">
              Reduction in dev timelines
            </div>
          </div>
          <div data-design-id="pl-outcome-4" className="stat-card text-center">
            <div className="text-xl font-bold text-amber-400">2028</div>
            <div className="text-[10px] text-white/40">
              National framework operational
            </div>
          </div>
        </motion.div>

        {/* MMR & Chennai — State-Level Policy Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h3
            data-design-id="pl-state-title"
            className="text-lg font-semibold text-white mb-6"
          >
            State-Level Policy Progress
          </h3>
          <div
            data-design-id="pl-metro-grid"
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div
              data-design-id="pl-mmr"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="stat-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-semibold text-white">
                  Mumbai Metropolitan Region (MMR)
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div
                  data-design-id="pl-mmr-invest"
                  className="text-center p-3 rounded-lg bg-white/[0.03]"
                >
                  <div className="text-lg font-bold text-cyan-400">$2.5B</div>
                  <div className="text-[10px] text-white/40">
                    DCS Investment Potential
                  </div>
                </div>
                <div
                  data-design-id="pl-mmr-cap"
                  className="text-center p-3 rounded-lg bg-white/[0.03]"
                >
                  <div className="text-lg font-bold text-white">1M RT</div>
                  <div className="text-[10px] text-white/40">
                    Addressable Capacity
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5 mb-3">
                <li
                  data-design-id="pl-mmr-peak"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/50 mt-1.5 shrink-0" />
                  <strong className="text-white/70">1.5 GW</strong> peak power
                  demand reduction potential
                </li>
                <li
                  data-design-id="pl-mmr-merc"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/50 mt-1.5 shrink-0" />
                  MERC breakthrough: concessional industrial tariff at{" "}
                  <strong className="text-white/70">₹5.3–5.8/kWh</strong> —
                  enabling DCS economics
                </li>
                <li
                  data-design-id="pl-mmr-mmrda"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/50 mt-1.5 shrink-0" />
                  MMRDA planning authority across BKC, Dharavi, Navi Mumbai &
                  Airoli — multiple high-density DCS-ready zones
                </li>
                <li
                  data-design-id="pl-mmr-nmia"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/50 mt-1.5 shrink-0" />
                  Navi Mumbai International Airport (NMIA) — greenfield DCS
                  opportunity
                </li>
              </ul>
            </motion.div>

            <motion.div
              data-design-id="pl-chennai"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="stat-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-semibold text-white">
                  Chennai Third Master Plan
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div
                  data-design-id="pl-chen-invest"
                  className="text-center p-3 rounded-lg bg-white/[0.03]"
                >
                  <div className="text-lg font-bold text-amber-400">$2.0B</div>
                  <div className="text-[10px] text-white/40">
                    DCS Investment Potential
                  </div>
                </div>
                <div
                  data-design-id="pl-chen-cap"
                  className="text-center p-3 rounded-lg bg-white/[0.03]"
                >
                  <div className="text-lg font-bold text-white">800K RT</div>
                  <div className="text-[10px] text-white/40">
                    Addressable Capacity
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5 mb-3">
                <li
                  data-design-id="pl-chen-first"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/50 mt-1.5 shrink-0" />
                  <strong className="text-white/70">First Indian city</strong>{" "}
                  embedding cooling in master planning
                </li>
                <li
                  data-design-id="pl-chen-savings"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/50 mt-1.5 shrink-0" />
                  <strong className="text-white/70">4,000 GWh</strong> annual
                  energy savings potential
                </li>
                <li
                  data-design-id="pl-chen-tariff"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/50 mt-1.5 shrink-0" />
                  TNERC tariff petition underway — state progressing regulatory
                  framework
                </li>
                <li
                  data-design-id="pl-chen-spc"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/50 mt-1.5 shrink-0" />
                  TN SPC Steering Committee active · TIDCO projects in pipeline
                </li>
                <li
                  data-design-id="pl-chen-clusters"
                  className="text-xs text-white/50 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/50 mt-1.5 shrink-0" />
                  4 priority clusters: OMR IT Corridor, Data Centre Belt, Airport,
                  Anna Salai
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
