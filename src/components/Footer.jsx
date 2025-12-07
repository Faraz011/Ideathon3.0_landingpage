import React, { useEffect, useState } from "react";
import { ShieldCheck, Mail, MapPin, Building2, Hash, ArrowRight } from "lucide-react";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate watermark opacity and position based on scroll
  const watermarkStyle = {
    opacity: 0.03 + (scrollY * 0.0002), // Subtle fade as user scrolls
    transform: `translateY(${scrollY * 0.1}px)` // Parallax effect
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-slate-950 text-gray-300 border-t border-slate-800/50 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(245, 158, 11, 0.1) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, rgba(234, 179, 8, 0.1) 2%, transparent 0%)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Protocol '26
              </h2>
              <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                GDG On Campus • BIT Mesra
              </p>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              Ideathon 3.0 under Protocol '26 — a campus hackathon by GDG On Campus, BIT Mesra.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="group relative px-4 py-2.5 text-sm font-semibold text-black bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                <span className="relative z-10 flex items-center gap-1.5">
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 pb-2 border-b border-gray-800/50 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Features", href: "/#features" },
                { name: "Pricing", href: "/pricing" },
                { name: "Documentation", href: "/docs" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 pb-2 border-b border-gray-800/50 inline-block">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "GDPR Compliance", href: "/gdpr" },
                { name: "Refund Policy", href: "/refund" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 pb-2 border-b border-gray-800/50 inline-block">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-yellow-400 mt-1 flex-shrink-0 w-4 h-4" />
                  <div>
                    <p className="text-sm text-gray-300">Somewhere</p>
                    <p className="text-sm text-gray-400">Bengaluru, India</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-yellow-400 w-4 h-4 flex-shrink-0" />
                  <a href="mailto:contact@gdg-bitmesra.org" className="text-sm text-gray-300 hover:text-white transition-colors">
                    contact@gdg-bitmesra.org
                  </a>
                </li>
                <li className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-lg text-xs text-gray-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                    <span>ISO 27001 Certified</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()}  All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>

      {/* Subtle watermark */}
      <div 
        className="absolute bottom-0 left-0 right-0 text-center overflow-visible opacity-10 pointer-events-none transition-all duration-500"
        style={watermarkStyle}
      >
        <h2 className="whitespace-nowrap text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-100/50 leading-none select-none">
          PROTOCOL '26
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
