// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 flex flex-col justify-between gap-2 border-t border-slate-800 pt-4 text-[11px] text-slate-500 sm:flex-row">
      <span>
        © {new Date().getFullYear()} GDG On Campus, BIT Mesra. All rights
        reserved.
      </span>
      <span>ideathon 3.0 • protocol&apos;26</span>
    </footer>
  );
};

export default Footer;
