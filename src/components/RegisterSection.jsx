// src/components/RegisterSection.jsx
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const RegisterSection = () => {
  return (
    <motion.section
      id="register"
      className="mb-16 sm:mb-20 md:mb-24 py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Background glow effects */}
      <motion.div
        className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-bl from-yellow-500/15 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main container */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section - PROMINENT */}
        <motion.div className="mb-12 sm:mb-16 space-y-4 text-center" variants={itemVariants}>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 backdrop-blur-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-yellow-400"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-bold text-yellow-300 tracking-widest">🚀 REGISTRATION_OPEN</span>
          </motion.div>

          {/* Main Title - EXTRA LARGE */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400 leading-tight">
            Ready to Launch?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
            Spots are limited. Get your team onboarded and be part of
            <span className="text-yellow-300 font-semibold"> protocol&apos;26</span>'s
            flagship ideathon.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-[1.4fr,1.1fr]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Card - FAQ */}
          <motion.div variants={itemVariants} className="group h-full">
            <motion.div
              className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 p-7 sm:p-8"
              whileHover={{ scale: 1.03, y: -8 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow:
                  "0 8px 32px rgba(212, 175, 55, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.2)",
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

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Question 1 */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    Who can participate?
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    Students of BIT Mesra (exact eligibility, team size, and rules will
                    be shared in the official brochure and announcement post for
                    ideathon 3.0 under protocol&apos;26).
                  </p>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-yellow-400/20 via-yellow-400/5 to-transparent" />

                {/* Question 2 */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    Do I need a full prototype?
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    A solid concept with a basic prototype/demo is enough. Clarity,
                    feasibility, and impact will matter the most during evaluation.
                  </p>
                </motion.div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-400 to-transparent transition-all duration-500"
              />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-bl-3xl" />
            </motion.div>
          </motion.div>

          {/* Right Card - CTA */}
          <motion.div variants={itemVariants} className="group h-full">
            <motion.div
              className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between"
              whileHover={{ scale: 1.03, y: -8 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(212, 175, 55, 0.06) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                boxShadow:
                  "0 8px 32px rgba(212, 175, 55, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.18), inset 0 -1px 1px rgba(0, 0, 0, 0.25)",
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

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
                {/* Text */}
                <motion.p
                  className="text-sm sm:text-base text-white/75 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Plug your official registration link here once it&apos;s ready
                  (Google Form, Devfolio, etc.).
                </motion.p>

                {/* Button */}
                <motion.button
                  className="w-full py-3 sm:py-4 rounded-full bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 font-bold text-black text-sm sm:text-base font-semibold transition-all duration-300 relative overflow-hidden group/btn"
                  onClick={(e) => e.preventDefault()}
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
                  <span className="relative flex items-center justify-center gap-2">
                    Registration Coming Soon
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>

                {/* Footer text */}
                <motion.p
                  className="text-xs sm:text-sm text-white/60 leading-relaxed text-center font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Stay tuned to{" "}
                  <span className="text-yellow-300 font-semibold">GDG On Campus, BIT Mesra</span> socials
                  and your college groups for the official announcement.
                </motion.p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-400 to-transparent transition-all duration-500"
              />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/15 to-transparent rounded-bl-3xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full shadow-lg shadow-yellow-400/20" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RegisterSection;
