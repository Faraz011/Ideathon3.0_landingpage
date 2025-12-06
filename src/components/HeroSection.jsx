// src/components/HeroSection.jsx
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

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 3,
}));

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const HeroSection = () => {
  return (
    <section className="mb-0.5 grid items-center gap-10 md:grid-cols-[1.5fr,1.1fr]">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <motion.div
          variants={fadeInUp}
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/80 px-1.5 py-1 text-[11px] text-slate-300 backdrop-blur-md"
        >
          <span className="rounded-full bg-sky-500/15 px-3 py-1 text-[11px] font-medium text-sky-300">
            protocol&apos;26
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          <span className="pr-1 text-slate-400">
            Flagship hackathon series • On campus
          </span>
        </motion.div>

        <div className="starfield">
          {stars.map((star) => (
            <motion.span
              key={star.id}
              className="star bg-amber-200"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: star.size,
                height: star.size,
              }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.h1
          variants={fadeInUp}
          custom={0.1}
          className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          Protocol{" "}
          <span className="bg-linear-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
            &apos;26
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={0.2}
          className="max-w-xl text-sm leading-relaxed text-white sm:text-[15px]"
        >
          36 hours of ideas, prototypes, and pitches under the stars. ideathon
          3.0 is the idea-first hackathon under{" "}
          <span className="font-bold text-amber-400">protocol&apos;26</span> by
          GDG On Campus, BIT Mesra. Go from zero to pitch-ready with your crew.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          custom={0.3}
          className="flex flex-wrap gap-2 text-[11px]"
        >
          <div className="inline-flex items-baseline gap-1 rounded-full px-3 py-1 shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/20 backdrop-blur-lg bg-black/10 ">
            <span className="uppercase tracking-[0.16em] text-slate-500">
              Where
            </span>
            <span className="text-slate-200">BIT Mesra • On Campus</span>
          </div>
          <div className="inline-flex items-baseline gap-1 rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1">
            <span className="uppercase tracking-[0.16em] text-slate-500">
              When
            </span>
            <span className="text-slate-200">Early 2026 • TBA</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={0.4}
          className="mt-1 flex flex-wrap items-center gap-3"
        >
          <a
            href="#register"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-zinc-200 via-white to-yellow-400 px-5 py-2 text-sm font-bold text-black shadow-[0_18px_40px_rgba(55,48,163,0.9)] transition hover:scale-[1.02] hover:shadow-[0px_5px_30px_rgba(255,225,0,0.95)]"
          >
            Reserve your orbit
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-900 hover:text-slate-50"
          >
            View event details
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={0.5}
          className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-400"
        >
          {["#hackathon", "#ideathon3", "#protocol26", "#gdgOnCampus"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-dashed border-slate-600/60 bg-slate-900/70 px-3 py-1"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative flex min-h-[230px] items-center justify-center"
      >
        <motion.div
          className="relative top-[-250px] left-[350px] z-10 w-full max-w-xs rounded-2xl p-4  backdrop-blur-xl shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/20 bg-black/0 "
          animate={{ y: [-12, 0, -12] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h3 className="mb-1 text-sm font-semibold">Build beyond earth</h3>
          <p className="mb-3 text-[13px] text-slate-300">
            AI, Web, Cloud, and more. Bring your wildest ideas, form a crew, and
            launch something unforgettable in ideathon 3.0.
          </p>
          <div className="flex flex-wrap gap-1.5 text-[11px]">
            <span className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1">
              Team-based
            </span>
            <span className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1">
              Swags &amp; prizes
            </span>
            <span className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1">
              Mentor support
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
