"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronDown, Zap, Leaf, Building2, AlertTriangle } from "lucide-react";

type Project = {
  name: string;
  location: string;
  capacity: string;
  operator: string;
  model: string;
  status: "success" | "failure" | "awarded" | "construction";
  highlights: string[];
  savings?: string;
  co2?: string;
  lesson?: string;
};

const PROJECTS: Project[] = [
  {
    name: "GIFT City",
    location: "Gujarat",
    capacity: "24,000 TR",
    operator: "GIFT City",
    model: "Electric centrifugal chillers + thermal energy storage",
    status: "success",
    highlights: [
      "Operational since 2015 — India's first smart city with DCS",
      "Pre-approved district cooling framework",
      "Utility-operated (not real estate developer)",
      "Greenfield master-planned city — DCS designed from Day 1",
      "Grid electricity (no fuel price volatility)",
      "Simple metered cooling-only service",
    ],
    savings: "~24 GWh/yr",
    co2: "~17,000 tCO₂/yr",
  },
  {
    name: "Amaravati Government Complex",
    location: "Andhra Pradesh",
    capacity: "20,000 TR",
    operator: "Tabreed Amaravati District Cooling Pvt Ltd",
    model: "PPP BOOT concession (30-year term)",
    status: "awarded",
    highlights: [
      "First large-scale PPP BOOT concession for DCS in India",
      "Long-term concession with guaranteed off-take from state govt",
      "Greenfield government complex",
      "Demonstrated bankability — template for replication",
    ],
    lesson: "Awarded but delayed 6 years by government — construction not commenced",
  },
  {
    name: "Hyderabad Pharma City",
    location: "Telangana",
    capacity: "125,000 TR",
    operator: "Tabreed",
    model: "PPP BOOT concession for industrial DCS",
    status: "awarded",
    highlights: [
      "Largest planned industrial DCS project globally",
      "19,000-acre pharma/biotech SEZ",
      "Serves process + comfort cooling — Cooling-as-a-Service",
      "STP water integration",
      "Catalysed market entry of Adani, Keppel, Tata Power",
    ],
    lesson: "Awarded but delayed 2 years by government — yet to commence construction",
  },
  {
    name: "Adani Energy Solutions — Mundra Port",
    location: "Gujarat",
    capacity: "45,000 TR",
    operator: "Adani Energy Solutions Ltd (AESL)",
    model: "Electric centrifugal chillers, district cooling utility",
    status: "construction",
    highlights: [
      "Largest DCS facility under development at Mundra Port SEZ",
      "AESL total planned capacity ~52,000 TR across projects",
      "Cooling-as-a-Service model for industries & commercial users",
      "Planned ₹6,000 Cr investment across cooling solutions",
    ],
    savings: "~45 GWh/yr",
    co2: "~32,000 tCO₂/yr (at full capacity)",
  },
  {
    name: "Infosys Campus DCS",
    location: "Multiple Campuses",
    capacity: "~60,000 TR (aggregate)",
    operator: "Infosys Ltd",
    model: "Centralised chiller plants + radiant cooling + deep green retrofits",
    status: "success",
    highlights: [
      "Deep green retrofits of 50 chiller plants",
      "Chiller plant efficiency: 0.42 kW/TR (annual avg)",
      "Radiant cooling across 5M+ sq ft — 30% higher efficiency",
      "Operations across 16 campuses / 26M sq ft",
    ],
    savings: "~90 GWh/yr",
    co2: "~64,000 tCO₂/yr",
  },
];

const DLF_FAILURE = {
  name: "DLF Cyber City",
  location: "Gurugram",
  capacity: "78,000 TR (original) — abandoned after 7 years",
  issues: [
    "HERC reclassified power sales → third-party sale → economics altered",
    "Natural gas price volatility: increased 5×",
    "Operational complexity beyond developer competency",
    "Complex trigeneration bundling created regulatory ambiguity",
    "Replaced with building-level electric chillers managed by Carrier",
  ],
  lessons: [
    "Secure binding regulatory approvals before investing",
    "Prefer electricity-based systems for price stability & renewable integration",
    "Utility operators should run DCS — not real estate developers",
    "Keep service simple (cooling-only)",
    "Design for flexibility/modularity",
  ],
  comparison: [
    { aspect: "Technology", dlf: "Gas-fired absorption", gift: "Electric centrifugal" },
    { aspect: "Energy Source", dlf: "Natural gas (volatile)", gift: "Grid electricity (stable)" },
    { aspect: "Operator", dlf: "DLF (developer)", gift: "GIFT City (utility)" },
    { aspect: "Regulation", dlf: "Ambiguous", gift: "Pre-approved framework" },
  ],
};

const STATUS_MAP = {
  success: { label: "Operational", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
  awarded: { label: "Tender Awarded", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
  construction: { label: "Under Construction", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
  failure: { label: "Failed", color: "text-red-400 bg-red-400/10 border-red-400/20" },
};

export default function CaseStudies() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="case-studies" data-design-id="case-studies-section" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-teal opacity-30" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span data-design-id="cs-label" className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block">
            Learning from Experience
          </span>
          <h2 data-design-id="cs-title" className="section-title text-white mb-4">
            What Worked, What Didn&apos;t<br />
            <span className="text-gradient">& Why</span>
          </h2>
          <p data-design-id="cs-subtitle" className="section-subtitle">
            India&apos;s DCS journey includes both landmark successes and a pivotal failure — each offering critical lessons for scaling.
          </p>
        </motion.div>

        <div data-design-id="cs-projects-list" className="space-y-3 mb-16">
          {PROJECTS.map((project, i) => {
            const isOpen = expanded === i;
            const st = STATUS_MAP[project.status];
            return (
              <motion.div
                key={project.name}
                data-design-id={`cs-project-${i + 1}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen ? "border-teal-400/20 bg-white/[0.03]" : "border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03]"
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400/70 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-white">{project.name}</span>
                      <span className="text-xs text-white/40">{project.location}</span>
                      <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${st.color}`}>
                        {st.label}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mt-1">{project.capacity} · {project.operator}</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-white/30 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="border-t border-white/[0.06] pt-4">
                          <p className="text-xs text-white/50 mb-3">
                            <strong className="text-white/70">Model:</strong> {project.model}
                          </p>
                          <ul className="space-y-1.5 mb-4">
                            {project.highlights.map((h, hi) => (
                              <li key={hi} className="text-xs text-white/50 flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-teal-400/50 mt-1.5 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                          {(project.savings || project.co2) && (
                            <div className="flex gap-4 mt-3">
                              {project.savings && (
                                <div className="flex items-center gap-2 text-xs">
                                  <Zap className="w-3.5 h-3.5 text-teal-400/60" />
                                  <span className="text-teal-400/80">{project.savings} saved</span>
                                </div>
                              )}
                              {project.co2 && (
                                <div className="flex items-center gap-2 text-xs">
                                  <Leaf className="w-3.5 h-3.5 text-emerald-400/60" />
                                  <span className="text-emerald-400/80">{project.co2} avoided</span>
                                </div>
                              )}
                            </div>
                          )}
                          {project.lesson && (
                            <p className="text-xs text-amber-400/70 mt-3 italic">{project.lesson}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          data-design-id="cs-aggregate"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div data-design-id="cs-aggregate-1" className="stat-card text-center">
            <div className="text-2xl font-bold text-teal-400">~159</div>
            <div className="text-[10px] text-white/40">GWh/yr Energy Saved</div>
          </div>
          <div data-design-id="cs-aggregate-2" className="stat-card text-center">
            <div className="text-2xl font-bold text-emerald-400">~113K</div>
            <div className="text-[10px] text-white/40">tCO₂ Avoided/yr</div>
          </div>
          <div data-design-id="cs-aggregate-3" className="stat-card text-center">
            <div className="text-2xl font-bold text-white">0.71</div>
            <div className="text-[10px] text-white/40">tCO₂/MWh Grid Intensity</div>
          </div>
          <div data-design-id="cs-aggregate-4" className="stat-card text-center">
            <div className="text-2xl font-bold text-cyan-400">274K+</div>
            <div className="text-[10px] text-white/40">TR Combined Capacity</div>
          </div>
        </motion.div>

        <motion.div
          data-design-id="cs-failure"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-red-400/20 bg-red-400/[0.02] p-8 md:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h3 data-design-id="cs-failure-title" className="text-lg font-semibold text-white">DLF Cyber City, Gurugram</h3>
              <p data-design-id="cs-failure-capacity" className="text-sm text-red-400/70">{DLF_FAILURE.capacity}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 data-design-id="cs-failure-issues-title" className="text-xs font-semibold text-red-400/80 tracking-wider uppercase mb-3">What Went Wrong</h4>
              <ul className="space-y-2">
                {DLF_FAILURE.issues.map((issue, i) => (
                  <li key={i} data-design-id={`cs-failure-issue-${i + 1}`} className="text-xs text-white/50 flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-red-400/50 mt-0.5 shrink-0" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 data-design-id="cs-failure-lessons-title" className="text-xs font-semibold text-emerald-400/80 tracking-wider uppercase mb-3">Key Lessons</h4>
              <ul className="space-y-2 mb-6">
                {DLF_FAILURE.lessons.map((l, i) => (
                  <li key={i} data-design-id={`cs-failure-lesson-${i + 1}`} className="text-xs text-white/50 flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400/50 mt-0.5 shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-design-id="cs-failure-comparison" className="mt-6 rounded-xl border border-white/[0.06] overflow-hidden">
            <div className="grid grid-cols-3 text-[10px] font-semibold tracking-wider uppercase">
              <div className="p-3 text-white/40">Aspect</div>
              <div className="p-3 text-red-400/70 bg-red-400/[0.03]">DLF (Failed)</div>
              <div className="p-3 text-emerald-400/70 bg-emerald-400/[0.03]">GIFT City (Success)</div>
            </div>
            {DLF_FAILURE.comparison.map((c, i) => (
              <div key={i} data-design-id={`cs-comparison-row-${i + 1}`} className="grid grid-cols-3 text-xs border-t border-white/[0.04]">
                <div className="p-3 text-white/50 font-medium">{c.aspect}</div>
                <div className="p-3 text-white/40 bg-red-400/[0.02]">{c.dlf}</div>
                <div className="p-3 text-white/40 bg-emerald-400/[0.02]">{c.gift}</div>
              </div>
            ))}
          </div>

          <p data-design-id="cs-failure-takeaway" className="mt-6 text-sm text-white/60 text-center italic">
            &ldquo;Failure due to <strong className="text-white/80">business model design</strong>, not technology.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}