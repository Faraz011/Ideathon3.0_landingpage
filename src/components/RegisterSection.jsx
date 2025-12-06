// src/components/RegisterSection.jsx
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

const RegisterSection = () => {
  return (
    <motion.section
      id="register"
      className="mb-10 space-y-5"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      custom={0}
    >
      <div className="max-w-2xl space-y-2">
        <h2 className="text-lg font-semibold sm:text-xl">Ready to launch?</h2>
        <p className="text-sm text-slate-300 sm:text-[15px]">
          Spots are limited. Get your team onboarded and be part of
          protocol&apos;26&apos;s flagship ideathon.
        </p>
      </div>

      <div className="grid gap-4 text-[13px] md:grid-cols-[1.4fr,1.1fr]">
        <div className="space-y-3 rounded-2xl border border-slate-700/70 bg-slate-950/50 p-4 shadow-[0_18px_38px_rgba(15,23,42,0.95)]">
          <h3 className="text-[14px] font-semibold">Who can participate?</h3>
          <p className="text-[13px] text-slate-300">
            Students of BIT Mesra (exact eligibility, team size, and rules will
            be shared in the official brochure and announcement post for
            ideathon 3.0 under protocol&apos;26).
          </p>
          <h3 className="pt-1 text-[14px] font-semibold">
            Do I need a full prototype?
          </h3>
          <p className="text-[13px] text-slate-300">
            A solid concept with a basic prototype/demo is enough. Clarity,
            feasibility, and impact will matter the most during evaluation.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/40 p-4 shadow-[0_18px_38px_rgba(15,23,42,0.95)]">
          <p className="text-[13px] text-slate-300">
            Plug your official registration link here once it&apos;s ready
            (Google Form, Devfolio, etc.).
          </p>
          <button
            className="w-full cursor-pointer rounded-full bg-linear-to-r from-yellow-400 via-white to-yellow-400 px-4 py-2 text-[13px] font-bold text-black hover:scale-[1.02] hover:shadow-[0px_5px_30px_rgba(255,225,0,0.95)] transition duration-700 "
            onClick={(e) => e.preventDefault()}
          >
            Registration coming soon
          </button>
          <p className="text-[12px] text-slate-400">
            Stay tuned to GDG On Campus, BIT Mesra socials and your college
            groups for the official announcement.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default RegisterSection;
