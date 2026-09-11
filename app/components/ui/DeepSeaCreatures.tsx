"use client";

export const DeepSeaCreatures = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Bioluminescent Jellyfish around 1500m */}
      <div className="absolute right-[8%] top-[2400px] opacity-40 hover:opacity-80 transition-opacity">
        <svg
          width="120"
          height="160"
          viewBox="0 0 120 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse"
        >
          {/* Bell */}
          <path
            d="M20 70 C20 20, 100 20, 100 70 C100 85, 20 85, 20 70 Z"
            fill="url(#jellyGlow)"
          />
          {/* Rim light */}
          <path
            d="M20 70 C30 80, 50 80, 60 72 C70 80, 90 80, 100 70"
            stroke="#4de3ff"
            strokeWidth="2"
          />
          {/* Tentacles */}
          <path
            d="M35 75 Q30 110, 40 150"
            stroke="#4de3ff"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            opacity="0.7"
          />
          <path
            d="M50 78 Q58 115, 48 155"
            stroke="#ff5d8f"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.8"
          />
          <path
            d="M68 78 Q60 120, 72 155"
            stroke="#ff5d8f"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.8"
          />
          <path
            d="M85 75 Q90 110, 80 150"
            stroke="#4de3ff"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            opacity="0.7"
          />
          <defs>
            <radialGradient
              id="jellyGlow"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#4de3ff" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#ff5d8f" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ff5d8f" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <span className="block font-mono text-[9px] text-[#4de3ff]/60 tracking-widest mt-1 text-center">
          DEEP SCYPHOZOA
        </span>
      </div>

      {/* Anglerfish with Glowing Esca / Lure at 4500m */}
      <div className="absolute left-[5%] top-[3800px] opacity-40 hover:opacity-85 transition-opacity">
        <svg
          width="170"
          height="110"
          viewBox="0 0 170 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Esca bulb (glowing lure with concentric radar ping) */}
          <circle
            cx="135"
            cy="20"
            r="4"
            fill="none"
            stroke="#4de3ff"
            strokeWidth="1.5"
          >
            <animate
              attributeName="r"
              from="4"
              to="16"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.85"
              to="0"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="135"
            cy="20"
            r="4"
            fill="none"
            stroke="#4de3ff"
            strokeWidth="1.5"
          >
            <animate
              attributeName="r"
              from="4"
              to="16"
              begin="1.2s"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.85"
              to="0"
              begin="1.2s"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Solid glow core */}
          <circle cx="135" cy="20" r="5" fill="#4de3ff" opacity="0.9" />
          <circle cx="135" cy="20" r="2.5" fill="#ffffff" />

          {/* Illucium (rod) */}
          <path
            d="M60 45 C75 10, 110 5, 135 20"
            stroke="#7d93b8"
            strokeWidth="2"
            fill="none"
          />
          {/* Anglerfish body silhouette */}
          <path
            d="M30 65 C20 45, 60 35, 95 45 C115 52, 120 75, 100 85 C80 92, 45 90, 30 65 Z"
            fill="#030814"
            stroke="#1b3050"
            strokeWidth="2"
          />
          {/* Tail fin */}
          <path
            d="M30 65 L10 50 L16 65 L10 80 Z"
            fill="#030814"
            stroke="#1b3050"
            strokeWidth="1.5"
          />
          {/* Eye */}
          <circle cx="90" cy="55" r="3" fill="#ff5d8f" opacity="0.8" />
        </svg>
        <span className="block font-mono text-[9px] text-[#ff5d8f]/60 tracking-widest mt-1 text-center">
          CERATIOIDEI
        </span>
      </div>
    </div>
  );
};
