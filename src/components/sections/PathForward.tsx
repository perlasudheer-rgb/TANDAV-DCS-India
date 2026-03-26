"use client";

import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, Rocket, Scale } from "lucide-react";

const POLICY_QUESTIONS = [
  "How should DCS integrate into urban master plans, DCRs, and ECBC?",
  "What role should centre, state and city governments play in DCS market development?",
  "How can carbon trading and other incentive structures benefit District Cooling?",
  "What financing instruments (green bonds, climate finance) can bridge the bankability gap?",
];

const HUB_QUESTIONS = [
  "What role should each stakeholder — developers, OEMs, think tanks, multilaterals, FIs — play?",
  "How can the Hub best support projects from feasibility to financial close?",
  "What approaches for awareness and capacity building with developers, corporates, planners?",
  "How can the Hub achieve financial sustainability after the initial years?",
];

const ACTIONS = [
  {
    num: "01",
    title: "Recognise",
    icon: Lightbulb,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
  {
    num: "02",
    title: "Regulate",
    icon: Scale,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    num: "03",
    title: "Catalyse",
    icon: Rocket,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

export default function PathForward() {
  return (
    <section
      id="path-forward"
      data-design-id="path-forward-section"
      className="relative py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-teal-500/[0.05] blur-[120px]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span
            data-design-id="pf-label"
            className="text-[10px] tracking-[0.25em] uppercase text-teal-400 font-semibold mb-3 block"
          >
            The Way Ahead
          </span>
          <h2
            data-design-id="pf-title"
            className="section-title text-white mb-4 mx-auto"
          >
            The Path
            <br />
            <span className="text-gradient">Forward</span>
          </h2>
          <p
            data-design-id="pf-subtitle"
            className="section-subtitle mx-auto text-center"
          >
            India stands at an inflection point. The technology is proven. The
            market is ready. Private sector interest is real. What&apos;s needed
            now is coordinated action to create the enabling ecosystem for a
            merchant district cooling market.
          </p>
        </motion.div>

        {/* Questions for Roundtable — Two Categories */}
        <motion.div
          data-design-id="pf-questions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-teal-400" />
            <h3
              data-design-id="pf-questions-title"
              className="text-lg font-semibold text-white"
            >
              Questions for Today&apos;s Roundtable
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <div data-design-id="pf-cat-1">
              <h4
                data-design-id="pf-cat-1-title"
                className="text-sm font-semibold text-teal-400 mb-4"
              >
                1) Enabling Policy Environment for District Cooling
              </h4>
              <ul className="space-y-3">
                {POLICY_QUESTIONS.map((q, i) => (
                  <li
                    key={q}
                    data-design-id={`pf-policy-q-${i + 1}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50 mt-1.5 shrink-0" />
                    <p className="text-xs text-white/60 leading-relaxed">{q}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2 */}
            <div data-design-id="pf-cat-2">
              <h4
                data-design-id="pf-cat-2-title"
                className="text-sm font-semibold text-cyan-400 mb-4"
              >
                2) Operationalising the Hub — Roles &amp; Structure
              </h4>
              <ul className="space-y-3">
                {HUB_QUESTIONS.map((q, i) => (
                  <li
                    key={q}
                    data-design-id={`pf-hub-q-${i + 1}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 mt-1.5 shrink-0" />
                    <p className="text-xs text-white/60 leading-relaxed">{q}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Three Actions — titles only */}
        <div
          data-design-id="pf-actions"
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {ACTIONS.map((action, i) => (
            <motion.div
              key={action.num}
              data-design-id={`pf-action-${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`rounded-2xl border ${action.border} ${action.bg.replace("/10", "/[0.02]")} p-8 text-center`}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl ${action.bg} flex items-center justify-center`}
                >
                  <action.icon className={`w-6 h-6 ${action.color}`} />
                </div>
                <span className="text-lg font-bold text-white/20">
                  {action.num}
                </span>
                <h3 className={`text-lg font-semibold ${action.color}`}>
                  {action.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          data-design-id="pf-closing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            data-design-id="pf-closing-text"
            className="text-sm text-white/50 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            <span className="text-white/70">
              Transforming Architecture for National District-cooling
              Advancement & Viability
            </span>
          </p>
          <div
            data-design-id="pf-closing-badge"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-teal-400/20 bg-teal-400/[0.05] text-sm font-medium text-teal-400"
          >
            BEE–UNEP Roundtable Workshop · 25 March 2026 · New Delhi
          </div>
        </motion.div>
      </div>
    </section>
  );
}
