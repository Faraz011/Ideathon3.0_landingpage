// src/components/TimelineSection.jsx
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const TimelineSection = () => {
  const timelineEvents = [
    {
      title: "REGISTRATIONS_OPEN",
      desc: "Form your squad, pick a track, and secure your slot.",
      icon: "⚡",
      color: "from-yellow-400 to-amber-300",
      glowColor: "rgba(255, 214, 10, 0.8)",
      side: "left",
    },
    {
      title: "PROBLEM_STATEMENTS_REVEAL",
      desc: "Get prompts, constraints, and judging parameters.",
      icon: "💾",
      color: "from-amber-300 to-yellow-400",
      glowColor: "rgba(254, 200, 104, 0.8)",
      side: "right",
    },
    {
      title: "HACK_DAYS",
      desc: "Build, iterate, and refine your prototype on campus.",
      icon: "⚙️",
      color: "from-yellow-300 to-orange-500",
      glowColor: "rgba(255, 193, 7, 0.8)",
      side: "left",
    },
    {
      title: "FINAL_PITCHES_&_RESULTS",
      desc: "Present to judges, get feedback, and celebrate victory.",
      icon: "🏆",
      color: "from-yellow-400 to-amber-300",
      glowColor: "rgba(255, 214, 10, 0.8)",
      side: "right",
    },
  ];

  return (
    <motion.section
      id="timeline"
      className="mb-16 sm:mb-20 md:mb-24 py-16 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Animated scanlines background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, transparent 48%, #FFD60A 49%, #FFD60A 51%, transparent 52%, transparent 100%)",
            backgroundSize: "2px 2px",
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Header */}
      <motion.div className="max-w-3xl mx-auto mb-16 sm:mb-20 relative z-10" variants={itemVariants}>
        <div className="relative inline-block mb-4">
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300 rounded-lg opacity-0 blur-xl group-hover:opacity-100 transition-all duration-500" />
          <div className="relative px-4 py-2 bg-black/50 backdrop-blur-xl border border-yellow-500/30 rounded-lg">
            <span className="text-xs font-bold text-yellow-300 tracking-widest">MISSION_LOG_01</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-mono tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 animate-pulse">
            [TIMELINE_SEQUENCE]
          </span>
        </h2>

        <p className="text-base sm:text-lg text-yellow-200/80 font-mono tracking-wide">
          &gt; From registration to final pitch night — follow the mission log...
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Animated center line with circuit pattern */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500/0 via-yellow-500/50 to-yellow-500/0">
          {/* Pulsing nodes */}
          {[0, 25, 50, 75, 100].map((pos) => (
            <motion.div
              key={pos}
              className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400"
              style={{ top: `${pos}%` }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255, 214, 10, 0.5)",
                  "0 0 30px rgba(255, 214, 10, 0.8)",
                  "0 0 10px rgba(255, 214, 10, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: pos * 0.1 }}
            />
          ))}
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              className={`relative flex items-center ${
                event.side === "right" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Content Card */}
              <motion.div
                className={`w-full md:w-5/12 ${event.side === "right" ? "md:pr-8" : "md:pl-8"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, x: event.side === "right" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Glow background */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur-lg -z-10 transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${event.glowColor}, transparent)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Card with cyberpunk border */}
                  <div
                    className="relative p-5 sm:p-6 md:p-7 rounded-xl overflow-hidden group"
                    style={{
                      border: `2px solid ${event.glowColor}33`,
                      background:
                        "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 30, 50, 0.6) 100%)",
                      boxShadow: `
                        0 0 20px ${event.glowColor}40,
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.3)
                      `,
                    }}
                  >
                    {/* Animated grid background */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(0deg, transparent 24%, rgba(255, 214, 10, 0.05) 25%, rgba(255, 214, 10, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 214, 10, 0.05) 75%, rgba(255, 214, 10, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 214, 10, 0.05) 25%, rgba(255, 214, 10, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 214, 10, 0.05) 75%, rgba(255, 214, 10, 0.05) 76%, transparent 77%, transparent)",
                          backgroundSize: "50px 50px",
                        }}
                      />
                    </div>

                    {/* Hover glow animation */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${event.glowColor}20 0%, transparent 100%)`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      {/* Icon and title */}
                      <div className="flex items-start gap-3">
                        <motion.span
                          className="text-3xl sm:text-4xl flex-shrink-0"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {event.icon}
                        </motion.span>
                        <div>
                          <motion.h3
                            className="text-sm sm:text-base font-bold font-mono tracking-widest text-transparent bg-clip-text"
                            style={{
                              backgroundImage: `linear-gradient(90deg, ${event.glowColor}, rgba(255, 255, 255, 0.5))`,
                            }}
                          >
                            [{event.title}]
                          </motion.h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed pl-14 font-light">
                        &gt; {event.desc}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                      style={{
                        background: `linear-gradient(90deg, ${event.glowColor}, transparent)`,
                      }}
                    />

                    {/* Glitch effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                      animate={{
                        clipPath: [
                          "inset(0 0 0 0)",
                          "inset(10% 0 85% 0)",
                          "inset(15% 0 10% 0)",
                          "inset(0 0 0 0)",
                        ],
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                      style={{
                        background: `linear-gradient(90deg, ${event.glowColor}20, transparent)`,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Center Node - Ultra Tech */}
              <motion.div
                className="w-full md:w-2/12 flex justify-center relative z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  {/* Multi-layer pulsing rings */}
                  {[60, 40, 20].map((size, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-2"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        top: `-${size / 2 - 10}px`,
                        left: `-${size / 2 - 10}px`,
                        borderColor: event.glowColor,
                      }}
                      animate={{
                        opacity: [0.5, 0.2, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  {/* Main hexagon node */}
                  <motion.div
                    className="w-6 h-6 rounded-full flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${event.glowColor}, rgba(255, 255, 255, 0.3))`,
                      boxShadow: `
                        0 0 20px ${event.glowColor},
                        0 0 40px ${event.glowColor}80,
                        inset 0 1px 2px rgba(255, 255, 255, 0.5)
                      `,
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        boxShadow: `0 0 10px ${event.glowColor}`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Rotating orbit */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-dashed"
                    style={{
                      width: "80px",
                      height: "80px",
                      top: "-35px",
                      left: "-35px",
                      borderColor: `${event.glowColor}40`,
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Hidden spacer */}
              <div className="w-full md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>

     
       
    </motion.section>
  );
};

export default TimelineSection;
