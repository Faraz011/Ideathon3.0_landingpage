// import React from "react";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, delay, ease: "easeOut" },
//   }),
// };

// const TracksSection = () => {
//   return (
//     <motion.section
//       id="tracks"
//       className="mb-16 space-y-5"
//       variants={fadeInUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.25 }}
//       custom={0}
//     >
//       <div className="max-w-5xl mx-auto space-y-2">
//         <h2 className="text-lg font-semibold sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400">
//           Tracks &amp; problem space
//         </h2>
//         <p className="text-sm text-slate-300 sm:text-[15px]">
//           Choose a galaxy to build in — or go cross-constellation with a
//           multi-track solution.
//         </p>
//       </div>

//       <div className="grid gap-6 text-[13px] md:grid-cols-4 sm:grid-cols-2 max-w-5xl mx-auto">
//         {[
//           {
//             title: "AI & ML",
//             body: "Assistants, automation, and intelligent systems.",
//           },
//           {
//             title: "Web & Mobile",
//             body: "Responsive, modern experiences for real users.",
//           },
//           {
//             title: "Cloud & DevOps",
//             body: "Cloud-native, scalable architectures (GCP & beyond).",
//           },
//           {
//             title: "Open Innovation",
//             body: "Anything that solves a real-world problem creatively.",
//           },
//         ].map((chip) => (
//           <motion.div
//             animate={{ y: [-25, 0, -25] }}
//             transition={{
//               duration: chip.title.length * 0.25,
//               repeat: Infinity,
//               repeatType: "loop", // or "mirror"
//               ease: "easeInOut",
//             }}
//             key={chip.title}
//             className="space-y-1 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-3 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] transition-all duration-300"
//           >
//             <span className="text-[13px] font-semibold">{chip.title}</span>
//             <p className="text-[12px] text-slate-300">{chip.body}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default TracksSection;

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
        ].map((chip, index) => (
          <motion.div
            key={chip.title}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="group h-full"
          >
            <motion.div
              className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow:
                  "0 8px 32px rgba(212, 175, 55, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.2)",
              }}
              animate={{ y: [-25, 0, -25] }}
              transition={{
                duration: chip.title.length * 0.25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              {/* Animated grid background (same as About cards) */}
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

              {/* Hover glow effect (same as About cards) */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100 mb-3">
                  {chip.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-grow">
                  {chip.body}
                </p>

                {/* Bottom accent line */}
                <motion.div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-400 to-transparent mt-4 transition-all duration-500" />
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
      </div>
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

export default TracksSection;
