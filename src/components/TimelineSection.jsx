// src/components/TimelineSection.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const TimelineSection = () => {
  return (
    <motion.section
      id="timeline"
      className="mb-12 space-y-5"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      custom={0}
    >
      <div className="max-w-2xl space-y-2">
        <h2 className="text-lg font-semibold sm:text-xl">Mission timeline</h2>
        <p className="text-sm text-slate-300 sm:text-[15px]">
          From registration to final pitch night — follow the mission log.
        </p>
      </div>

      <div className="relative ml-3 border-l border-dashed border-slate-600/70 pl-4 text-[13px]">
        {[
          {
            title: "Registrations open",
            desc: "Form your squad, pick a track, and secure your slot.",
          },
          {
            title: "Problem statements reveal",
            desc: "Get prompts, constraints, and judging parameters.",
          },
          {
            title: "Hack days",
            desc: "Build, iterate, and refine your prototype on campus.",
          },
          {
            title: "Final pitches & results",
            desc: "Present to judges, get feedback, and celebrate.",
          },
        ].map((item) => (
          <div key={item.title} className="relative mb-4 last:mb-0">
            <div className="absolute -left-[0.9rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-sky-400 bg-slate-950 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
            <h3 className="text-[13px] font-semibold">{item.title}</h3>
            <p className="text-[12px] text-slate-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TimelineSection;
