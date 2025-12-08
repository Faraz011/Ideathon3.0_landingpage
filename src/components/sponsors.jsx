// Sponsors.jsx
import React, { useState } from "react";

// Tech company sponsor logos (public URLs)
const SPONSOR_LOGOS = {
  GOOGLE:
    "https://www.gstatic.com/images/branding/product/1x/goog_on_white/googleg.svg",
  MICROSOFT:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png",
  GITHUB:
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  FIGMA:
    "https://s3-alpha.figma.com/hub/file/1481185752847/fa4cd348-ba8f-470f-a583-b46162f463d0-cover",
  STRIPE: "https://www.svgrepo.com/show/330136/stripe.svg",
  VERCEL: "https://www.svgrepo.com/show/376402/vercel.svg",
  NODEJS: "https://nodejs.org/static/images/logo.svg",
  REACT:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  VIM: "https://www.vim.org/images/vim_on_bw.png",
  DOCKER:
    "https://www.docker.com/wp-content/uploads/2023/08/Docker-Temporary-Logo.png",
  KUBERNETES:
    "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
  MONGODB: "https://www.svgrepo.com/show/331488/mongodb.svg",
};

const Sponsors = () => {
  
  const [hoveredSponsorIndex, setHoveredSponsorIndex] = useState(null);
  const [hoveredPartnerIndex, setHoveredPartnerIndex] = useState(null);

  const sponsorList = [
    {
      name: "Google",
      title: "Cloud Services Sponsor",
      logo: SPONSOR_LOGOS.GOOGLE,
      url: "https://www.google.com",
      color: "from-yellow-400 to-amber-300",
    },
    {
      name: "Microsoft",
      title: "Technology Partner",
      logo: SPONSOR_LOGOS.MICROSOFT,
      url: "https://www.microsoft.com",
      color: "from-amber-300 to-yellow-400",
    },
    {
      name: "GitHub",
      title: "Development Platform",
      logo: SPONSOR_LOGOS.GITHUB,
      url: "https://github.com",
      color: "from-yellow-400 to-amber-300",
    },
    {
      name: "Figma",
      title: "Design Partner",
      logo: SPONSOR_LOGOS.FIGMA,
      url: "https://figma.com",
      color: "from-amber-300 to-yellow-400",
    },
    {
      name: "Stripe",
      title: "Payment Solutions",
      logo: SPONSOR_LOGOS.STRIPE,
      url: "https://stripe.com",
      color: "from-yellow-400 to-amber-300",
    },
    {
      name: "Vercel",
      title: "Deployment Partner",
      logo: SPONSOR_LOGOS.VERCEL,
      url: "https://vercel.com",
      color: "from-amber-300 to-yellow-400",
    },
  ];

  const partnerList = [
    {
      name: "Google",
      title: "Cloud Services Sponsor",
      logo: SPONSOR_LOGOS.GOOGLE,
      url: "https://www.google.com",
      color: "from-yellow-400 to-amber-300",
    },
    {
      name: "Microsoft",
      title: "Technology Partner",
      logo: SPONSOR_LOGOS.MICROSOFT,
      url: "https://www.microsoft.com",
      color: "from-amber-300 to-yellow-400",
    },
    {
      name: "GitHub",
      title: "Development Platform",
      logo: SPONSOR_LOGOS.GITHUB,
      url: "https://github.com",
      color: "from-yellow-400 to-amber-300",
    },
    {
      name: "Figma",
      title: "Design Partner",
      logo: SPONSOR_LOGOS.FIGMA,
      url: "https://figma.com",
      color: "from-amber-300 to-yellow-400",
    },
    {
      name: "Stripe",
      title: "Payment Solutions",
      logo: SPONSOR_LOGOS.STRIPE,
      url: "https://stripe.com",
      color: "from-yellow-400 to-amber-300",
    },
    {
      name: "Vercel",
      title: "Deployment Partner",
      logo: SPONSOR_LOGOS.VERCEL,
      url: "https://vercel.com",
      color: "from-amber-300 to-yellow-400",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #D4AF37 1px, transparent 1px), linear-gradient(0deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFD60A 0%, #FEC868 25%, #F9C74F 50%, #D4AF37 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trusted by Industry Leaders
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-300/80 max-w-3xl mx-auto leading-relaxed">
            We're honored to collaborate with innovative companies that share
            our vision for creating amazing experiences
          </p>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-400/10">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold text-yellow-300">
              Our Sponsors
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {sponsorList.map(({ name, title, logo, url, color }, index) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}`}
              onMouseEnter={() => setHoveredSponsorIndex(index)}
              onMouseLeave={() => setHoveredSponsorIndex(null)}
              className="group relative"
            >
              {/* Card container */}
              <div
                className={`flex flex-col items-center justify-center h-48 sm:h-56 rounded-2xl p-4 sm:p-6 transition-all duration-500 ease-out transform
                  ${
                    hoveredSponsorIndex === index
                      ? "scale-105 shadow-2xl"
                      : "shadow-lg"
                  }
                  ${
                    hoveredSponsorIndex === index
                      ? "bg-gradient-to-br from-yellow-400/20 to-amber-400/10"
                      : "bg-white/5"
                  }
                  border ${
                    hoveredSponsorIndex === index
                      ? "border-yellow-400/60"
                      : "border-yellow-500/20"
                  }
                  backdrop-blur-xl hover:backdrop-blur-2xl overflow-hidden
                `}
                style={{
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Animated gradient border effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Glow effect on hover */}
                {hoveredSponsorIndex === index && (
                  <div
                    className="absolute inset-0 animate-pulse"
                    style={{
                      background: `radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Logo container */}
                <div
                  className={`flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-xl transition-all duration-500 relative z-10
                    ${
                      hoveredSponsorIndex === index
                        ? `bg-gradient-to-br ${color} shadow-lg scale-110`
                        : "bg-white/10"
                    }
                  `}
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter drop-shadow-lg transition-all duration-300"
                    style={{
                      filter:
                        hoveredSponsorIndex === index
                          ? "drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))"
                          : "drop-shadow(0 0 4px rgba(212, 175, 55, 0.2))",
                    }}
                  />
                </div>

                {/* Text content */}
                <div className="text-center relative z-10">
                  <p
                    className={`font-bold text-sm sm:text-base transition-all duration-300 ${
                      hoveredSponsorIndex === index
                        ? "text-yellow-300 text-lg"
                        : "text-white"
                    }`}
                  >
                    {name}
                  </p>
                  <p
                    className={`text-xs sm:text-sm mt-2 transition-all duration-300 ${
                      hoveredSponsorIndex === index
                        ? "text-yellow-200/90 opacity-100"
                        : "text-gray-400/60 opacity-0"
                    }`}
                  >
                    {title}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform origin-left transition-transform duration-500 ${
                    hoveredSponsorIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            </a>
          ))}
        </div>

        <div className="flex mt-20 justify-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-400/10">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold text-yellow-300">
              Our Partners
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partnerList.map(({ name, title, logo, url, color }, index) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name}`}
              onMouseEnter={() => setHoveredPartnerIndex(index)}
              onMouseLeave={() => setHoveredPartnerIndex(null)}
              className="group relative"
            >
              {/* Card container */}
              <div
                className={`flex flex-col items-center justify-center h-48 sm:h-56 rounded-2xl p-4 sm:p-6 transition-all duration-500 ease-out transform
                  ${
                    hoveredPartnerIndex === index
                      ? "scale-105 shadow-2xl"
                      : "shadow-lg"
                  }
                  ${
                    hoveredPartnerIndex === index
                      ? "bg-gradient-to-br from-yellow-400/20 to-amber-400/10"
                      : "bg-white/5"
                  }
                  border ${
                    hoveredPartnerIndex === index
                      ? "border-yellow-400/60"
                      : "border-yellow-500/20"
                  }
                  backdrop-blur-xl hover:backdrop-blur-2xl overflow-hidden
                `}
                style={{
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Animated gradient border effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Glow effect on hover */}
                {hoveredPartnerIndex === index && (
                  <div
                    className="absolute inset-0 animate-pulse"
                    style={{
                      background: `radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Logo container */}
                <div
                  className={`flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-xl transition-all duration-500 relative z-10
                    ${
                      hoveredPartnerIndex === index
                        ? `bg-gradient-to-br ${color} shadow-lg scale-110`
                        : "bg-white/10"
                    }
                  `}
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain filter drop-shadow-lg transition-all duration-300"
                    style={{
                      filter:
                        hoveredPartnerIndex === index
                          ? "drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))"
                          : "drop-shadow(0 0 4px rgba(212, 175, 55, 0.2))",
                    }}
                  />
                </div>

                {/* Text content */}
                <div className="text-center relative z-10">
                  <p
                    className={`font-bold text-sm sm:text-base transition-all duration-300 ${
                      hoveredPartnerIndex === index
                        ? "text-yellow-300 text-lg"
                        : "text-white"
                    }`}
                  >
                    {name}
                  </p>
                  <p
                    className={`text-xs sm:text-sm mt-2 transition-all duration-300 ${
                      hoveredPartnerIndex === index
                        ? "text-yellow-200/90 opacity-100"
                        : "text-gray-400/60 opacity-0"
                    }`}
                  >
                    {title}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform origin-left transition-transform duration-500 ${
                    hoveredPartnerIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            </a>
          ))}
        </div>

        
        <div className="mt-20 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { number: "50+", label: "Partners" },
            { number: "100K+", label: "Developers" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl sm:text-5xl font-bold mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD60A 0%, #D4AF37 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
