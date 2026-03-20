"use client";

import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, Rocket, Scale } from "lucide-react";

const QUESTIONS = [
  "How do we create regulatory certainty for district cooling as a utility service?",
  "What incentive structures can accelerate private sector investment in DCS?",
  "How should DCS be integrated into urban master plans and development control regulations?",
  "What role should central vs. state governments play in DCS market development?",
  "How can the DCS Hub best support project development from feasibility to financial close?",
  "What financing instruments (green bonds, climate finance, MDB support) can bridge the bankability gap?",
];

const ACTIONS = [
  {
    num: "01",
    title: "Recognise",
    icon: Lightbulb,
    desc: "Acknowledge India\u2019s existing 70+ DCS projects as proof of techno-commercial viability. Create a shared taxonomy based on BEE guidelines.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
  {
    num: "02",
    title: "Regulate",
    icon: Scale,
    desc: "Establish DCS as a utility service with tariff frameworks, right-of-way provisions, and standardised concession structures \u2014 enabling the merchant model.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    num: "03",
    title: "Catalyse",
    icon: Rocket,
    desc: "Support TANDAV \u2014 Government of India\u2019s DCS Hub, supported by UNEP and World Bank \u2014 as the coordination platform for policy development, project development, capacity building, and market intelligence.",
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

        {/* Questions for Roundtable */}
        <motion.div
          data-design-id="pf-questions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-teal-400" />
            <h3
              data-design-id="pf-questions-title"
              className="text-lg font-semibold text-white"
            >
              Questions for Today&apos;s Roundtable
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {QUESTIONS.map((q, i) => (
              <motion.div
                key={q}
                data-design-id={`pf-question-${i + 1}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-teal-400/15 transition-colors"
              >
                <span className="text-sm font-bold text-teal-400/40 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-xs text-white/60 leading-relaxed">{q}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Three Actions */}
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
              className={`rounded-2xl border ${action.border} ${action.bg.replace("/10", "/[0.02]")} p-8`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${action.bg} flex items-center justify-center`}
                >
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                </div>
                <div>
                  <span className="text-lg font-bold text-white/20">
                    {action.num}
                  </span>
                  <h3 className={`text-base font-semibold ${action.color}`}>
                    {action.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                {action.desc}
              </p>
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
            TANDAV —{" "}
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
