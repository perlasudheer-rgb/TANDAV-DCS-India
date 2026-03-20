"use client";

import { motion } from "framer-motion";
import { Landmark, FileText, Database, BarChart3, Users, BookOpen, Globe, ArrowRight } from "lucide-react";

const FUNCTIONS = [
  {
    icon: Landmark,
    title: "Government & Multilateral Coordination",
    desc: "Co-ordination body to catalyse multi-ministerial action at centre, state, and city levels.",
  },
  {
    icon: FileText,
    title: "Project Development Support",
    desc: "End-to-end support from feasibility to financial close — model concession agreements, RFPs, investor matchmaking.",
  },
  {
    icon: Database,
    title: "Knowledge Products & Repository",
    desc: "India's first comprehensive DCS technical reference — technology database, design standards, performance benchmarks.",
  },
  {
    icon: BarChart3,
    title: "Market Research & State Action Plans",
    desc: "State-level DCS assessments for Tamil Nadu, AP, Haryana, Maharashtra. National DCS market outlook.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    desc: "500+ professionals engaged. Quarterly forums. National DCS Summit with ministerial participation.",
  },
  {
    icon: BookOpen,
    title: "Capacity Building & Training",
    desc: "ISHRAE partnership. Certified training programmes. 300+ officials trained. Technology database with 500+ users.",
  },
];

export default function DCSHub() {
  return (
    <section id="dcs-hub" data-design-id="dcs-hub-section" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-teal-500/[0.06] blur-[120px]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span data-design-id="hub-label" className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block">
            TANDAV
          </span>
          <h2 data-design-id="hub-title" className="section-title text-white mb-4 mx-auto">
            Government of India&apos;s<br />
            <span className="text-gradient">DCS Hub</span>
          </h2>
          <p data-design-id="hub-subtitle" className="section-subtitle mx-auto text-center">
            Transforming Architecture for National District-cooling Advancement & Viability — a dedicated platform by UNEP and World Bank to catalyse India&apos;s district cooling market.
          </p>
        </motion.div>

        <div data-design-id="hub-functions-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {FUNCTIONS.map((fn, i) => (
            <motion.div
              key={fn.title}
              data-design-id={`hub-function-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="stat-card group hover:border-teal-400/20 transition-all duration-300"
            >
              <fn.icon className="w-6 h-6 text-teal-400/60 mb-4 group-hover:text-teal-400 transition-colors" />
              <h3 className="text-sm font-semibold text-white mb-2">{fn.title}</h3>
              <p className="text-[11px] text-white/45 leading-relaxed">{fn.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          data-design-id="hub-achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-teal-400/15 bg-teal-400/[0.02] p-8 md:p-10 mb-16"
        >
          <h3 data-design-id="hub-achievements-title" className="text-lg font-semibold text-white mb-6 text-center">7 Years of EE-Cool Programme Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div data-design-id="hub-achieve-1" className="text-center">
              <div className="text-2xl font-bold text-teal-400">8+</div>
              <div className="text-[10px] text-white/40">Govt Partnerships</div>
            </div>
            <div data-design-id="hub-achieve-2" className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-[10px] text-white/40">Projects Catalogued</div>
            </div>
            <div data-design-id="hub-achieve-3" className="text-center">
              <div className="text-2xl font-bold text-emerald-400">500+</div>
              <div className="text-[10px] text-white/40">Professionals Engaged</div>
            </div>
            <div data-design-id="hub-achieve-4" className="text-center">
              <div className="text-2xl font-bold text-amber-400">300+</div>
              <div className="text-[10px] text-white/40">Officials Trained</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          data-design-id="hub-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-teal-400/20 bg-teal-400/[0.05] text-sm font-medium text-teal-400 hover:bg-teal-400/[0.1] transition-colors">
            <Globe className="w-4 h-4" />
            BEE–UNEP Roundtable Workshop · 25 March 2026 · New Delhi
          </div>
        </motion.div>
      </div>

      <div data-design-id="hub-footer" className="mt-24 border-t border-white/[0.06] pt-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-xs font-bold text-white">
              T
            </div>
            <span data-design-id="hub-footer-title" className="text-sm font-semibold text-white/60">
              TANDAV — District Cooling in India
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-white/30">
            <span data-design-id="hub-footer-bee">BEE</span>
            <span>·</span>
            <span data-design-id="hub-footer-unep">UNEP</span>
            <span>·</span>
            <span data-design-id="hub-footer-wb">World Bank</span>
            <span>·</span>
            <span data-design-id="hub-footer-year">2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}