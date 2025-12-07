// FeaturedSpeaker.jsx
import SpeakerCard from "./SpeakerCard";

const FeaturedSpeaker = () => {
  return (
    <div id="speakers" className="relative mb-16 flex justify-center">
      <div className="flex flex-col items-center w-full max-w-7xl">
        <h2
          className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-normal leading-tight sm:leading-[5.56rem] tracking-tight sm:tracking-[-0.0556rem] bg-clip-text text-transparent mb-4 sm:mb-0"
          style={{
            backgroundImage: "linear-gradient(90deg, #D4AF37 0%, #F9C74F 25%, #FEC868 75%, #FFD60A 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Speakers
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-6 lg:mt-8 w-full justify-center items-center">
          <SpeakerCard
            title=""
            name=""
            eventType="Tech Talk"
            statusText="Confirmed Speaker"
            subtitle="Date - 29th January, 2025 | Venue - BIT Mesra"
            imageSrc="https://avatar.iran.liara.run/public"
            imageAlt="Mentor"
          />
          <SpeakerCard
            title=""
            eventType="Tech Talk"
            name=""
            statusText="Confirmed Speaker"
            subtitle="Date - 31st January, 2025 | Venue - BIT Mesra"
            imageSrc="https://avatar.iran.liara.run/public"
            imageAlt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSpeaker;
