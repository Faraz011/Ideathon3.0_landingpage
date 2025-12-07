// SpeakerCard.jsx
import React from "react";
import PropTypes from "prop-types";

const SpeakerCard = ({
  title,
  name,
  eventType,
  statusText,
  subtitle,
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row w-full max-w-full sm:max-w-2xl lg:max-w-3xl rounded-xl overflow-hidden p-3 sm:p-4 lg:p-6 gap-3 sm:gap-4 lg:gap-8 items-center relative group hover:scale-[1.02] transition-all duration-300 ${className}`}
      style={{
        borderRadius: "1rem",
        border: "1px solid rgba(217, 119, 6, 0.15)",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(251, 191, 36, 0.05) 100%)",
        boxShadow:
          "0 24px 48px 1px rgba(217, 119, 6, 0.06) inset, 0 1px 1px 1px rgba(217, 119, 6, 0.15) inset",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      {/* Speaker Avatar */}
      <div className="flex items-center justify-center bg-gradient-to-br from-yellow-300/20 to-amber-300/20 rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 shadow-md flex-shrink-0 relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        {/* Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-neutral-300 text-sm">
            </div>
          )}
        </div>
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/40 animate-pulse" />
      </div>

      {/* Right side content */}
      <div className="flex flex-col gap-2 text-center sm:text-left w-full relative z-10">
        {/* Event Type Badge */}
        {eventType && (
          <div className="flex items-center justify-center sm:justify-start">
            <span
              className="text-amber-700 font-inter text-sm sm:text-lg lg:text-xl font-semibold tracking-wide px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-500/30"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {eventType}
            </span>
          </div>
        )}

        {/* Title */}
        {title && (
          <div
            className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight sm:leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.15)",
              letterSpacing: "0.01em",
              fontSize: "0.9rem",
            }}
          >
            {title}
          </div>
        )}

        {name && (
          <div
            className="text-white/75 text-lg sm:text-xl gap-2 mt-2 lg:text-2xl xl:text-3xl leading-tight sm:leading-relaxed"
            style={{
              fontFamily: "Inter, sans-serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.15)",
              letterSpacing: "0.01em",
              fontSize: "0.9rem",
            }}
          >
            {name}
          </div>
        )}

        {/* Speaker Status */}
        {statusText && (
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 sm:mt-4 lg:mt-2">
            <div className="flex items-center gap-2">
              {/* Animated dots */}
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span
                className="font-inter font-medium text-sm sm:text-base lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {statusText}
              </span>
            </div>
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <div
            className="font-inter text-xs sm:text-sm opacity-100 mt-2"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-400/15 to-transparent rounded-bl-3xl" />
    </div>
  );
};

SpeakerCard.propTypes = {
  title: PropTypes.string,
  eventType: PropTypes.string,
  statusText: PropTypes.string,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
};

export default SpeakerCard;
