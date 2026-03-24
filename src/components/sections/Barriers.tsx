"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Eye,
  Network,
  ShieldAlert,
  Wrench,
} from "lucide-react";

const BARRIERS = [
  {
    icon: ShieldAlert,
    severity: "Critical",
    severityColor: "text-red-400 bg-red-400/10 border-red-400/20",
    title: "Regulatory & Policy Gaps",
    issues: [
      "No utility status — ambiguous classification between electricity, water, and cooling",
      "No tariff framework or regulatory body (unlike SERC for electricity)",
      "Right-of-way provisions absent for chilled water piping",
      "Captive vs. third-party sale confusion (DLF HERC precedent)",
    ],
    hubHelps: [
      "Model regulatory orders",
      "Tariff methodology templates",
      "State-level policy drafting support",
    ],
  },
  {
    icon: Banknote,
    severity: "High",
    severityColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    title: "Financial & Bankability",
    issues: [
      "~$1,500/TR upfront capex with 10–12 year payback — needs patient capital",
      "No standardised concession agreements — each project negotiates from scratch",
      "Banks unfamiliar with DCS as asset class — limited precedent",
    ],
    hubHelps: [
      "Model concession agreements",
      "Standardised 25-year DCF financial models",
      "MDB/climate finance mobilisation",
    ],
  },
  {
    icon: Wrench,
    severity: "High",
    severityColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    title: "Technical Capacity",
    issues: [
      "Limited DCS-specific design expertise — HVAC engineers trained only in building-level",
      "No Indian standards for DCS equipment (pre-insulated pipes, ETSs)",
      "Insufficient O&M workforce with specialised skills",
    ],
    hubHelps: [
      "ISHRAE India DCS Design Guide",
      "BIS standards development",
      "Certified training (300+ officials by 2026)",
    ],
  },
  {
    icon: Eye,
    severity: "Medium",
    severityColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    title: "Awareness & Perception",
    issues: [
      "Decision makers unaware India has 73+ projects — seen as 'foreign technology'",
      "DLF failure and tenant preference for stand alone systems creates negative perception",
      "Developers and ULBs lack evidence-based understanding of the techno-commercial case",
    ],
    hubHelps: [
      "Project repository with 50+ catalogued projects",
      "Quarterly Project Spotlight series",
      "Media campaign (25+ mentions)",
    ],
  },
  {
    icon: Network,
    severity: "Medium",
    severityColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    title: "Institutional & Coordination",
    issues: [
      "DCS falls between MoP, MoHUA, and MoEFCC — no single ministry ownership",
      "State govts lack dedicated DCS cells",
      "Disconnect between urban planning and energy infrastructure",
    ],
    hubHelps: [
      "BEE-UNEP DCS Hub as coordination platform",
      "8+ govt partnerships",
      "State-level working groups (TN, AP, Maharashtra)",
    ],
  },
];

export default function BarriersSection() {
  return (
    <section
      id="barriers"
      data-design-id="barriers-section"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-radial-teal opacity-15" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            data-design-id="barriers-label"
            className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block"
          >
            Challenges
          </span>
          <h2
            data-design-id="barriers-title"
            className="section-title text-white mb-4"
          >
            Five Interconnected
            <br />
            <span className="text-gradient">Barriers</span>
          </h2>
          <p data-design-id="barriers-subtitle" className="section-subtitle">
            Five barrier categories prevent India&apos;s district cooling market
            from reaching its $7+ billion potential. The DCS Hub is designed to
            address each systematically.
          </p>
        </motion.div>

        <div data-design-id="barriers-list" className="space-y-4">
          {BARRIERS.map((barrier, i) => (
            <motion.div
              key={barrier.title}
              data-design-id={`barrier-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 hover:border-white/[0.1] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-3 md:w-64 shrink-0">
                  <barrier.icon className="w-5 h-5 text-white/50" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {barrier.title}
                    </h3>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 text-[10px] font-medium rounded-full border ${barrier.severityColor}`}
                    >
                      {barrier.severity}
                    </span>
                  </div>
                </div>

                <div className="flex-1 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider font-semibold mb-2">
                      Issues
                    </p>
                    <ul className="space-y-1.5">
                      {barrier.issues.map((issue, ii) => (
                        <li
                          key={ii}
                          className="text-[11px] text-white/45 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/20 mt-1.5 shrink-0" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] text-teal-400/60 uppercase tracking-wider font-semibold mb-2">
                      How DCS Hub Helps
                    </p>
                    <ul className="space-y-1.5">
                      {barrier.hubHelps.map((help, hi) => (
                        <li
                          key={hi}
                          className="text-[11px] text-teal-400/50 flex items-start gap-2"
                        >
                          <ArrowRight className="w-3 h-3 text-teal-400/40 mt-0.5 shrink-0" />
                          {help}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
