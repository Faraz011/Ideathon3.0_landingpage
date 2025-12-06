// import React from "react";
// import { motion } from "framer-motion";
// import "../components/IdeathonLanding.css";


// const fadeInUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, delay, ease: "easeOut" },
//   }),
// };

// const staggerChildren = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.14 } },
// };

// const stars = Array.from({ length: 60 }, (_, i) => ({
//   id: i,
//   top: Math.random() * 100,
//   left: Math.random() * 100,
//   size: Math.random() * 3 + 1,
//   duration: Math.random() * 6 + 4,
// }));

// const IdeathonLanding = () => {
//   return (
//     <>
      
//       <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50 ">
//         <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-4 sm:px-6 md:px-8">
//           <header className="mb-8 mt-2 rounded-full border border-slate-700/60 bg-slate-950/80 px-4 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-xl md:mb-10 md:px-5">
//             <div className="flex items-center justify-between gap-4">
//               <motion.div
//                 className="flex items-center gap-3"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[conic-gradient(from_180deg,_#34a853,_#4285f4,_#fbbc05,_#ea4335,_#34a853)] text-xs font-bold text-slate-900">
//                   GDG
//                 </div>
//                 <div className="flex flex-col leading-tight">
//                   <span className="text-[13px] font-semibold">
//                     Google Developer Group
//                   </span>
//                   <span className="text-[11px] text-slate-400">
//                     On Campus, BIT Mesra
//                   </span>
//                 </div>
//               </motion.div>

//               <motion.nav
//                 className="hidden items-center gap-1 text-[13px] text-slate-300 md:flex"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {["About", "Tracks", "Timeline", "FAQ"].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className="rounded-full px-3 py-1 text-slate-300 transition hover:bg-slate-800/80 hover:text-slate-50"
//                   >
//                     {item}
//                   </a>
//                 ))}
//                 <a
//                   href="#register"
//                   className="ml-1 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-4 py-1.5 text-[12px] font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.7)]"
//                 >
//                   Register
//                 </a>
//               </motion.nav>
//             </div>
//           </header>

//           <main className="flex-1">
//             <section className="mb-14 grid items-center gap-10 md:grid-cols-[1.5fr,1.1fr]">
//               <motion.div
//                 variants={staggerChildren}
//                 initial="hidden"
//                 animate="visible"
//                 className="space-y-4"
//               >
//                 <motion.div
//                   variants={fadeInUp}
//                   custom={0}
//                   className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/80 px-1.5 py-1 text-[11px] text-slate-300 backdrop-blur-md"
//                 >
//                   <span className="rounded-full bg-sky-500/15 px-3 py-1 text-[11px] font-medium text-sky-300">
//                     protocol&apos;26
//                   </span>
//                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
//                   <span className="pr-1 text-slate-400">
//                     Flagship hackathon series • On campus
//                   </span>
//                 </motion.div>

//                 <motion.h1
//                   variants={fadeInUp}
//                   custom={0.1}
//                   className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
//                 >
//                   ideathon{" "}
//                   <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
//                     3.0
//                   </span>
//                 </motion.h1>

//                 <motion.p
//                   variants={fadeInUp}
//                   custom={0.2}
//                   className="max-w-xl text-sm leading-relaxed text-white sm:text-[15px]"
//                 >
//                   36 hours of ideas, prototypes, and pitches under the stars.
//                   ideathon 3.0 is the idea-first hackathon under{" "}
//                   <span className="font-bold text-orange-700">
//                     protocol&apos;26
//                   </span>{" "}
//                   by GDG On Campus, BIT Mesra. Go from zero to pitch-ready with
//                   your crew.
//                 </motion.p>

//                 <motion.div
//                   variants={fadeInUp}
//                   custom={0.3}
//                   className="flex flex-wrap gap-2 text-[11px]"
//                 >
//                   <div className="inline-flex items-baseline gap-1 rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1">
//                     <span className="uppercase tracking-[0.16em] text-slate-500">
//                       Where
//                     </span>
//                     <span className="text-slate-200">
//                       BIT Mesra • On Campus
//                     </span>
//                   </div>
//                   <div className="inline-flex items-baseline gap-1 rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1">
//                     <span className="uppercase tracking-[0.16em] text-slate-500">
//                       When
//                     </span>
//                     <span className="text-slate-200">Early 2026 • TBA</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   variants={fadeInUp}
//                   custom={0.4}
//                   className="mt-1 flex flex-wrap items-center gap-3"
//                 >
//                   <a
//                     href="#register"
//                     className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-5 py-2 text-sm font-medium text-white shadow-[0_18px_40px_rgba(55,48,163,0.9)] transition hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(55,48,163,1)]"
//                   >
//                     Reserve your orbit
//                   </a>
//                   <a
//                     href="#about"
//                     className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-900 hover:text-slate-50"
//                   >
//                     View event details
//                   </a>
//                 </motion.div>

//                 <motion.div
//                   variants={fadeInUp}
//                   custom={0.5}
//                   className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-400"
//                 >
//                   {[
//                     "#hackathon",
//                     "#ideathon3",
//                     "#protocol26",
//                     "#gdgOnCampus",
//                   ].map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full border border-dashed border-slate-600/60 bg-slate-900/70 px-3 py-1"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </motion.div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//                 className="relative flex min-h-[230px] items-center justify-center"
//               >
//                 <motion.div
//                   className="relative top-[-250px] left-[350px] z-10 w-full max-w-xs rounded-2xl border border-slate-600/70 bg-slate-950/90 p-4 shadow-[0_22px_45px_rgba(15,23,42,0.95)] backdrop-blur-xl"
//                   animate={{ y: [-12, 0, -12] }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <h3 className="mb-1 text-sm font-semibold">
//                     Build beyond earth
//                   </h3>
//                   <p className="mb-3 text-[13px] text-slate-300">
//                     AI, Web, Cloud, and more. Bring your wildest ideas, form a
//                     crew, and launch something unforgettable in ideathon 3.0.
//                   </p>
//                   <div className="flex flex-wrap gap-1.5 text-[11px]">
//                     <span className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1">
//                       Team-based
//                     </span>
//                     <span className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1">
//                       Swags &amp; prizes
//                     </span>
//                     <span className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1">
//                       Mentor support
//                     </span>
//                   </div>
//                 </motion.div>

//                 <div className="pointer-events-none absolute -right-2 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_30%_20%,_#fb923c,_#7c2d12)] shadow-[0_20px_45px_rgba(248,113,113,0.7)] blur-[0.2px]" />
//                 <div className="pointer-events-none absolute -bottom-6 -left-3 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_25%_10%,_#22c55e,_#064e3b)] shadow-[0_18px_40px_rgba(34,197,94,0.7)] blur-[0.2px]" />
//               </motion.div>
//             </section>

//             <motion.section
//               id="about"
//               className="mb-12 space-y-5"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.25 }}
//               custom={0}
//             >
//               <div className="max-w-2xl space-y-2">
//                 <h2 className="text-lg font-semibold sm:text-xl">
//                   What is ideathon 3.0?
//                 </h2>
//                 <p className="text-sm text-slate-300 sm:text-[15px]">
//                   ideathon 3.0 is the idea-focused hackathon under{" "}
//                   <span className="text-sky-300 font-medium">
//                     protocol&apos;26
//                   </span>{" "}
//                   by GDG On Campus, BIT Mesra. You don&apos;t need a polished
//                   product — just a powerful concept, a sharp prototype, and a
//                   pitch that inspires.
//                 </p>
//               </div>

//               <div className="starfield">
//                 {stars.map((star) => (
//                   <motion.span
//                     key={star.id}
//                     className="star"
//                     style={{
//                       top: `${star.top}%`,
//                       left: `${star.left}%`,
//                       width: star.size,
//                       height: star.size,
//                     }}
//                     animate={{ opacity: [0.1, 1, 0.1] }}
//                     transition={{
//                       duration: star.duration,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                     }}
//                   />
//                 ))}
//               </div>

//               <div className="grid gap-4 md:grid-cols-3">
//                 {[
//                   {
//                     title: "Ideate",
//                     body: "Identify real problems, validate them with mentors, and frame impactful solutions that matter.",
//                   },
//                   {
//                     title: "Prototype",
//                     body: "Convert your idea into a working demo using your favourite stack, tools, and APIs.",
//                   },
//                   {
//                     title: "Pitch",
//                     body: "Tell the story, show the impact, and convince the jury why your solution should exist.",
//                   },
//                 ].map((card) => (
//                   <div
//                     key={card.title}
//                     className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-4 text-sm shadow-[0_18px_38px_rgba(15,23,42,0.9)] backdrop-blur-xl"
//                   >
//                     <h3 className="mb-1 text-[15px] font-semibold">
//                       {card.title}
//                     </h3>
//                     <p className="text-[13px] leading-relaxed text-slate-300">
//                       {card.body}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </motion.section>

//             <motion.section
//               id="tracks"
//               className="mb-12 space-y-5"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.25 }}
//               custom={0}
//             >
//               <div className="max-w-2xl space-y-2">
//                 <h2 className="text-lg font-semibold sm:text-xl">
//                   Tracks &amp; problem space
//                 </h2>
//                 <p className="text-sm text-slate-300 sm:text-[15px]">
//                   Choose a galaxy to build in — or go cross-constellation with a
//                   multi-track solution.
//                 </p>
//               </div>

//               <div className="grid gap-3 text-[13px] md:grid-cols-4 sm:grid-cols-2">
//                 {[
//                   {
//                     title: "AI & ML",
//                     body: "Assistants, automation, and intelligent systems.",
//                   },
//                   {
//                     title: "Web & Mobile",
//                     body: "Responsive, modern experiences for real users.",
//                   },
//                   {
//                     title: "Cloud & DevOps",
//                     body: "Cloud-native, scalable architectures (GCP & beyond).",
//                   },
//                   {
//                     title: "Open Innovation",
//                     body: "Anything that solves a real-world problem creatively.",
//                   },
//                 ].map((chip) => (
//                   <div
//                     key={chip.title}
//                     className="space-y-1 rounded-2xl border border-dashed border-slate-600/70 bg-slate-950/80 p-3"
//                   >
//                     <span className="text-[13px] font-semibold">
//                       {chip.title}
//                     </span>
//                     <p className="text-[12px] text-slate-300">{chip.body}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.section>

//             <motion.section
//               id="timeline"
//               className="mb-12 space-y-5"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.25 }}
//               custom={0}
//             >
//               <div className="max-w-2xl space-y-2">
//                 <h2 className="text-lg font-semibold sm:text-xl">
//                   Mission timeline
//                 </h2>
//                 <p className="text-sm text-slate-300 sm:text-[15px]">
//                   From registration to final pitch night — follow the mission
//                   log.
//                 </p>
//               </div>

//               <div className="relative ml-3 border-l border-dashed border-slate-600/70 pl-4 text-[13px]">
//                 {[
//                   {
//                     title: "Registrations open",
//                     desc: "Form your squad, pick a track, and secure your slot.",
//                   },
//                   {
//                     title: "Problem statements reveal",
//                     desc: "Get prompts, constraints, and judging parameters.",
//                   },
//                   {
//                     title: "Hack days",
//                     desc: "Build, iterate, and refine your prototype on campus.",
//                   },
//                   {
//                     title: "Final pitches & results",
//                     desc: "Present to judges, get feedback, and celebrate.",
//                   },
//                 ].map((item, idx) => (
//                   <div key={item.title} className="relative mb-4 last:mb-0">
//                     <div className="absolute -left-[0.9rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-sky-400 bg-slate-950 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
//                     <h3 className="text-[13px] font-semibold">{item.title}</h3>
//                     <p className="text-[12px] text-slate-300">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.section>

//             <motion.section
//               id="register"
//               className="mb-10 space-y-5"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.25 }}
//               custom={0}
//             >
//               <div className="max-w-2xl space-y-2">
//                 <h2 className="text-lg font-semibold sm:text-xl">
//                   Ready to launch?
//                 </h2>
//                 <p className="text-sm text-slate-300 sm:text-[15px]">
//                   Spots are limited. Get your team onboarded and be part of
//                   protocol&apos;26&apos;s flagship ideathon.
//                 </p>
//               </div>

//               <div className="grid gap-4 text-[13px] md:grid-cols-[1.4fr,1.1fr]">
//                 <div className="space-y-3 rounded-2xl border border-slate-700/70 bg-slate-950/90 p-4 shadow-[0_18px_38px_rgba(15,23,42,0.95)] backdrop-blur-xl">
//                   <h3 className="text-[14px] font-semibold">
//                     Who can participate?
//                   </h3>
//                   <p className="text-[13px] text-slate-300">
//                     Students of BIT Mesra (exact eligibility, team size, and
//                     rules will be shared in the official brochure and
//                     announcement post for ideathon 3.0 under protocol&apos;26).
//                   </p>
//                   <h3 className="pt-1 text-[14px] font-semibold">
//                     Do I need a full prototype?
//                   </h3>
//                   <p className="text-[13px] text-slate-300">
//                     A solid concept with a basic prototype/demo is enough.
//                     Clarity, feasibility, and impact will matter the most during
//                     evaluation.
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/90 p-4 shadow-[0_18px_38px_rgba(15,23,42,0.95)] backdrop-blur-xl">
//                   <p className="text-[13px] text-slate-300">
//                     Plug your official registration link here once it&apos;s
//                     ready (Google Form, Devfolio, etc.).
//                   </p>
//                   <button
//                     className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-4 py-2 text-[13px] font-semibold text-white shadow-[0_18px_40px_rgba(55,48,163,0.95)] cursor-pointer hover:scale-[1.01]"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     Registration coming soon
//                   </button>
//                   <p className="text-[12px] text-slate-400">
//                     Stay tuned to GDG On Campus, BIT Mesra socials and your
//                     college groups for the official announcement.
//                   </p>
//                 </div>
//               </div>
//             </motion.section>
//           </main>

//           <footer className="mt-4 flex flex-col justify-between gap-2 border-t border-slate-800 pt-4 text-[11px] text-slate-500 sm:flex-row">
//             <span>
//               © {new Date().getFullYear()} GDG On Campus, BIT Mesra. All rights
//               reserved.
//             </span>
//             <span>ideathon 3.0 • protocol&apos;26</span>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IdeathonLanding;


// import React from "react";
// import Navbar from "./Navbar";
// import HeroSection from "./HeroSection";
// import AboutSection from "./AboutSection";
// import TracksSection from "./TracksSection";
// import TimelineSection from "./TimelineSection";
// import RegisterSection from "./RegisterSection";
// import Footer from "./Footer";

// const IdeathonLanding = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50 ">
//       <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-4 sm:px-6 md:px-8">
//         <Navbar />
//         <main className="flex-1">
//           <HeroSection />
//           <AboutSection />
//           <TracksSection />
//           <TimelineSection />
//           <RegisterSection />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default IdeathonLanding;

// src/components/IdeathonLanding.jsx
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TracksSection from "./TracksSection";
import TimelineSection from "./TimelineSection";
import RegisterSection from "./RegisterSection";
import Footer from "./Footer";
import PolygonNetworkBackground from "./PolygonNetworkBackground";

const IdeathonLanding = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-50 z-10">
      <PolygonNetworkBackground />

      {/* Page Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10 pt-4 sm:px-6 md:px-8">
        <Navbar />

        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <TracksSection />
          <TimelineSection />
          <RegisterSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default IdeathonLanding;
