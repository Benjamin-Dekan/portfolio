"use client";

import Image from "next/image";

export const Boat = () => {
  return (
    <div className="relative group select-none">
      {/* Boat graphic with gentle sea rocking */}
      <div className="animate-boat-rock relative z-20">
        <Image
          src="/cartoon-boat.svg"
          alt="Benjamin Dekan Expedition Vessel"
          width={280}
          height={240}
          priority
          className="w-full h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Reflection in the surface water */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-[#0693e3]/40 rounded-full blur-md -z-10" />
    </div>
  );
};
