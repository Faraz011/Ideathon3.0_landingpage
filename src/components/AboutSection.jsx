// src/components/AboutSection.jsx
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutSection = () => {
  const cardData = [
    {
      title: "Ideate",
      body: "Identify real problems, validate them with mentors, and frame impactful solutions that matter.",
      icon: "",
      delay: 0,
    },
    {
      title: "Prototype",
      body: "Convert your idea into a working demo using your favourite stack, tools, and APIs.",
      icon: "",
      delay: 0.1,
    },
    {
      title: "Pitch",
      body: "Tell the story, show the impact, and convince the jury why your solution should exist.",
      icon: "",
      delay: 0.2,
    },
  ];

  return (
    <motion.section
      id="about"
      className="mb-16 sm:mb-20 md:mb-24 py-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Header Section */}
      <motion.div className="max-w-5xl mx-auto mb-12 sm:mb-16 relative z-10" variants={itemVariants}>
        <div className="space-y-4">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-bold text-yellow-300 tracking-widest">ABOUT_THIS_EVENT</span>
          </motion.div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400">
            What is Protocol '26?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Protocol '26 is the idea-focused hackathon under{" "}
            <motion.span
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              protocol&apos;26
            </motion.span>{" "}
            by GDG On Campus, BIT Mesra. You don&apos;t need a polished product —
            just a powerful concept, a sharp prototype, and a pitch that inspires.
          </p>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={card.title}
            variants={itemVariants}
            custom={card.delay}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="group h-full"
          >
            
            <motion.div
              className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow:
                  "0 8px 32px rgba(212, 175, 55, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.2)",
              }}
              animate={{
                y: [-20, 0, -20],
              }}
              transition={{
                duration: 3 + index * 0.5,
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

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4 filter drop-shadow-lg"
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {card.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-grow">
                  {card.body}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-400 to-transparent mt-4 transition-all duration-500"
                />
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-bl-3xl" />

              {/* Border highlight on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        className="mt-12 flex justify-center relative z-10"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
