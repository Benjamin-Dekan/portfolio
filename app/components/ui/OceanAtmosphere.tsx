"use client";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  glow: string;
}

// Deterministic particles generated at build/load time
const PARTICLES: Particle[] = Array.from({ length: 42 }, (_, i) => {
  const isCyan = i % 3 === 0;
  const isPink = i % 7 === 0;
  const left = (i * 23.7) % 100;
  const top = (i * 17.3) % 100;
  const size = 1.5 + ((i * 3) % 3);
  const duration = 12 + ((i * 5) % 16);
  const delay = (i * 2.1) % 10;
  const opacity = 0.25 + ((i * 7) % 40) / 100;

  return {
    id: i,
    left,
    top,
    size,
    duration,
    delay,
    opacity,
    glow: isCyan ? "#4de3ff" : isPink ? "#ff5d8f" : "#ffffff",
  };
});

export const OceanAtmosphere = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sun Rays / Caustics Piercing Surface */}
      <div
        className="absolute top-0 left-0 right-0 h-[850px] opacity-45 animate-caustic-rays mix-blend-screen"
        style={{
          background:
            "linear-gradient(115deg, transparent 25%, rgba(77, 227, 255, 0.18) 32%, transparent 40%, rgba(232, 241, 255, 0.14) 48%, transparent 58%, rgba(77, 227, 255, 0.16) 66%, transparent 74%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Anchor Cable / Telemetry Depth Line running the whole vertical height on desktop */}
      <div className="hidden lg:block absolute left-12 top-[1150px] bottom-30 w-[2px]">
        {/* Glowing dashed wire */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, #4de3ff 0px, #4de3ff 6px, transparent 6px, transparent 12px)",
            opacity: 0.35,
          }}
        />
        {/* Glow beads that pulse */}
        <div className="w-2.5 h-2.5 -left-[4px] rounded-full bg-[#4de3ff] shadow-[0_0_12px_#4de3ff] absolute top-[3%] animate-pulse" />
        <div className="w-2.5 h-2.5 -left-[4px] rounded-full bg-[#FFEF7E] shadow-[0_0_12px_#4de3ff] absolute top-[25%] animate-pulse" />
        <div className="w-2.5 h-2.5 -left-[4px] rounded-full bg-[#FF8834] shadow-[0_0_12px_#4de3ff] absolute top-[50%] animate-pulse" />
        <div className="w-2.5 h-2.5 -left-[4px] rounded-full bg-[#ff5d8f] shadow-[0_0_12px_#ff5d8f] absolute top-[79%] animate-pulse delay-700" />
      </div>

      {/* Marine Snow / Bioluminescent Plankton */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.glow,
            boxShadow: `0 0 8px ${p.glow}`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
