import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 mb-8 border border-white/10 shadow-[0_4px_30px_rgba(255,255,255,0.1)] bg-black/0 backdrop-blur-lg px-4 py-2 md:mb-10 md:px-5 rounded-lg">
      <div className="flex items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[conic-gradient(from_180deg,_#34a853,_#4285f4,_#fbbc05,_#ea4335,_#34a853)] text-xs font-bold text-slate-900">
            GDG
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-teal-50">
              Google Developer Group
            </span>
            <span className="text-[11px] text-slate-400">
              On Campus, BIT Mesra
            </span>
          </div>
        </motion.div>

        <motion.nav
          className="hidden items-center gap-1 text-[13px] text-slate-300 md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {["About", "Tracks", "Timeline", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-3 py-1 text-slate-300 transition hover:bg-slate-800/80 hover:text-slate-50"
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="ml-1 rounded-full bg-linear-to-r from-zinc-200 via-white to-yellow-400 px-4 py-1.5 text-[12px] font-bold text-black shadow-[0_10px_30px_rgba(79,70,229,0.7)] hover:shadow-[0px_5px_30px_rgba(255,225,0,0.95)] transition duration-500 "
          >
            Register
          </a>
        </motion.nav>
      </div>
    </nav>
  );
};

export default Navbar;
