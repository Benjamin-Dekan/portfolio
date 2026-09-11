"use client";

export const OceanWaves = () => {
  return (
    <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden select-none pointer-events-none">
      {/* Layer 1: Back Wave (Deep Navy/Indigo) */}
      <div className="absolute inset-0 flex w-[200%] h-full animate-wave-b opacity-50">
        <svg
          viewBox="0 0 1440 220"
          className="w-1/2 h-full flex-shrink-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#083a66"
            d="M 0,70 C 200,40 520,40 720,70 C 920,100 1240,100 1440,70 L 1440,220 L 0,220 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 220"
          className="w-1/2 h-full flex-shrink-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#083a66"
            d="M 0,70 C 200,40 520,40 720,70 C 920,100 1240,100 1440,70 L 1440,220 L 0,220 Z"
          />
        </svg>
      </div>

      {/* Layer 2: Mid Wave (Ocean Cerulean) */}
      <div className="absolute inset-0 flex w-[200%] h-full animate-wave-a opacity-75">
        <svg
          viewBox="0 0 1440 220"
          className="w-1/2 h-full flex-shrink-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0678be"
            d="M 0,85 C 180,45 540,125 720,85 C 900,45 1260,125 1440,85 L 1440,220 L 0,220 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 220"
          className="w-1/2 h-full flex-shrink-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0678be"
            d="M 0,85 C 180,45 540,125 720,85 C 900,45 1260,125 1440,85 L 1440,220 L 0,220 Z"
          />
        </svg>
      </div>

      {/* Layer 3: Front Wave with Foam Crest (Vibrant Sea Blue & Foam) */}
      <div className="absolute inset-0 flex w-[200%] h-full animate-wave-c">
        <svg
          viewBox="0 0 1440 220"
          className="w-1/2 h-full flex-shrink-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crest Foam highlight */}
          <path
            fill="none"
            stroke="#e8f1ff"
            strokeWidth="3.5"
            strokeOpacity="0.8"
            strokeDasharray="16 8"
            d="M 0,105 C 240,140 480,70 720,105 C 960,140 1200,70 1440,105"
          />
          {/* Main front water body */}
          <path
            fill="#0693e3"
            d="M 0,105 C 240,140 480,70 720,105 C 960,140 1200,70 1440,105 L 1440,220 L 0,220 Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 220"
          className="w-1/2 h-full flex-shrink-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crest Foam highlight */}
          <path
            fill="none"
            stroke="#e8f1ff"
            strokeWidth="3.5"
            strokeOpacity="0.8"
            strokeDasharray="16 8"
            d="M 0,105 C 240,140 480,70 720,105 C 960,140 1200,70 1440,105"
          />
          {/* Main front water body */}
          <path
            fill="#0693e3"
            d="M 0,105 C 240,140 480,70 720,105 C 960,140 1200,70 1440,105 L 1440,220 L 0,220 Z"
          />
        </svg>
      </div>

      {/* Surface Water Line Glow */}
      <div className="absolute top-[103px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4de3ff] to-transparent opacity-60" />
    </div>
  );
};
