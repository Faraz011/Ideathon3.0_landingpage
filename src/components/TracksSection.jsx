// src/components/TracksSection.jsx
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

const TracksSection = () => {
  return (
    <motion.section
      id="tracks"
      className="mb-16 space-y-5"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      custom={0}
    >
      <div className="max-w-5xl mx-auto space-y-2">
        <h2 className="text-lg font-semibold sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400">
          Tracks &amp; problem space
        </h2>
        <p className="text-sm text-slate-300 sm:text-[15px]">
          Choose a galaxy to build in — or go cross-constellation with a
          multi-track solution.
        </p>
      </div>

      <div className="grid gap-6 text-[13px] md:grid-cols-4 sm:grid-cols-2 max-w-5xl mx-auto">
        {[
          {
            title: "AI & ML",
            body: "Assistants, automation, and intelligent systems.",
          },
          {
            title: "Web & Mobile",
            body: "Responsive, modern experiences for real users.",
          },
          {
            title: "Cloud & DevOps",
            body: "Cloud-native, scalable architectures (GCP & beyond).",
          },
          {
            title: "Open Innovation",
            body: "Anything that solves a real-world problem creatively.",
          },
        ].map((chip) => (
          <motion.div
            animate={{ y: [-25, 0, -25] }}
            transition={{
              duration: chip.title.length * 0.25,
              repeat: Infinity,
              repeatType: "loop", // or "mirror"
              ease: "easeInOut",
            }}
            key={chip.title}
            className="space-y-1 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-3 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] transition-all duration-300"
          >
            <span className="text-[13px] font-semibold">{chip.title}</span>
            <p className="text-[12px] text-slate-300">{chip.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TracksSection;

// animate={{ y: [-8, 0, -8] }}
// transition={{
//   duration: 5 + chip.title.length * 1.0,
//   repeat: Infinity,
//   ease: "easeInOut",
// }}
