import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="sticky top-1 z-50 mx-auto mb-8 md:mb-10 max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 md:px-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-yellow-400/10 opacity-60" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
      <div className="flex items-center justify-between gap-4 relative z-10">
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
              className="rounded-full px-3 py-1 text-slate-300/90 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="ml-1 rounded-full bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 px-4 py-1.5 text-[12px] font-bold text-slate-900 shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.6)] hover:scale-[1.02] ring-1 ring-white/30 transition duration-300"
          >
            Register
          </a>
        </motion.nav>
      </div>
    </nav>
  );
};

export default Navbar;
