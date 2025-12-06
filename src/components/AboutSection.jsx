// src/components/AboutSection.jsx
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

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="mb-12 space-y-5"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      custom={0}
    >
      <div className="max-w-2xl space-y-2">
        <h2 className="text-lg font-semibold sm:text-xl">
          What is ideathon 3.0?
        </h2>
        <p className="text-sm text-slate-300 sm:text-[15px]">
          ideathon 3.0 is the idea-focused hackathon under{" "}
          <span className="text-sky-300 font-medium">protocol&apos;26</span> by
          GDG On Campus, BIT Mesra. You don&apos;t need a polished product —
          just a powerful concept, a sharp prototype, and a pitch that inspires.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Ideate",
            body: "Identify real problems, validate them with mentors, and frame impactful solutions that matter.",
          },
          {
            title: "Prototype",
            body: "Convert your idea into a working demo using your favourite stack, tools, and APIs.",
          },
          {
            title: "Pitch",
            body: "Tell the story, show the impact, and convince the jury why your solution should exist.",
          },
        ].map((card) => (
          <motion.div
            animate={{ y: [-25, 0, -25] }}
            transition={{
              duration:
                card.title.length > 5
                  ? Number(card.title.length - 4)
                  : Number(card.title.length * 0.3),
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            key={card.title}
            className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-4 text-sm shadow-[0_18px_38px_rgba(15,23,42,0.9)] backdrop-blur-xl z-10 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,215,0,0.6)] transition-all duration-300"
          >
            <h3 className="mb-1 text-[15px] font-semibold">{card.title}</h3>
            <p className="text-[13px] leading-relaxed text-slate-300">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutSection;
