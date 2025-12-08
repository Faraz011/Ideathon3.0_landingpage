
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

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const HeroSection = () => {
  return (
    <section className="mb-12 sm:mb-16 md:mb-20 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid items-center gap-6 sm:gap-10 md:gap-16 grid-cols-2">
          {/* Left content */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-3 py-2 backdrop-blur-md"
            >
              <span className="rounded-full bg-yellow-500/20 px-4 py-1 text-xs sm:text-sm font-bold text-yellow-300 tracking-wide">
                protocol&apos;26
              </span>
              <motion.span
                className="h-2 w-2 rounded-full bg-yellow-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                  boxShadow: "0 0 12px rgba(255, 214, 10, 0.9)",
                }}
              />
              <span className="pr-2 text-xs sm:text-sm text-white/70">
                Flagship hackathon • On campus
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              custom={0.1}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Protocol{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400">
                &apos;26
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              custom={0.2}
              className="max-w-2xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium"
            >
              36 hours of ideas, prototypes, and pitches under the stars. 
              <span className="text-yellow-300 font-bold"> ideathon 3.0</span> is the idea-first hackathon under protocol&apos;26 by
              GDG On Campus, BIT Mesra. Go from zero to pitch-ready with your crew.
            </motion.p>

            {/* Info badges */}
            <motion.div
              variants={fadeInUp}
              custom={0.3}
              className="flex flex-col sm:flex-row flex-wrap gap-3"
            >
              <motion.div
                className="inline-flex items-center gap-3 rounded-full px-5 py-3 backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  boxShadow: "0 8px 32px rgba(212, 175, 55, 0.1)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-bold text-yellow-300 tracking-widest uppercase">📍 Where</span>
                <span className="text-sm text-white/80 font-medium">BIT Mesra • On Campus</span>
              </motion.div>

              <motion.div
                className="inline-flex items-center gap-3 rounded-full px-5 py-3 backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  boxShadow: "0 8px 32px rgba(212, 175, 55, 0.1)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-bold text-yellow-300 tracking-widest uppercase">📅 When</span>
                <span className="text-sm text-white/80 font-medium">Early 2026 • TBA</span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              custom={0.4}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
            >
              <motion.a
                href="#register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-black font-semibold transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: "0 8px 24px rgba(212, 175, 55, 0.4)",
                }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative flex items-center gap-2">
                  Reserve your orbit
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/5 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white/80 backdrop-blur-md hover:bg-yellow-500/10 hover:text-yellow-300 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View event details
              </motion.a>
            </motion.div>

            {/* Hashtags */}
            <motion.div
              variants={fadeInUp}
              custom={0.5}
              className="flex flex-wrap gap-2 pt-4"
            >
              {["#hackathon", "#ideathon3", "#protocol26", "#gdgOnCampus"].map(
                (tag, index) => (
                  <motion.span
                    key={tag}
                    className="rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-1.5 text-xs sm:text-sm text-white/70 backdrop-blur-md hover:bg-yellow-500/10 hover:text-yellow-300 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right content - Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px]"
          >
            <motion.div
              className="w-full max-w-sm rounded-3xl overflow-hidden backdrop-blur-xl p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)",
                border: "1.5px solid rgba(212, 175, 55, 0.3)",
                boxShadow:
                  "0 20px 60px rgba(212, 175, 55, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
              }}
              animate={{ y: [-16, 0, -16] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-5">
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.1) 75%, rgba(212, 175, 55, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.1) 25%, rgba(212, 175, 55, 0.1) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.1) 75%, rgba(212, 175, 55, 0.1) 76%, transparent 77%, transparent)",
                    backgroundSize: "50px 50px",
                  }}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Build Beyond Earth
                </motion.h3>

                <motion.p
                  className="text-sm sm:text-base text-white/80 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  AI, Web, Cloud, and more. Bring your wildest ideas, form a crew, and
                  launch something unforgettable in ideathon 3.0.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {["Team-based", "Swags & prizes", "Mentor support"].map(
                    (tag, index) => (
                      <motion.span
                        key={tag}
                        className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs sm:text-sm text-yellow-300 font-semibold backdrop-blur-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.85 + index * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    )
                  )}
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-bl-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
