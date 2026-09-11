"use client";

interface FathomMarkerProps {
  depth: string;
  zone: string;
  tagline?: string;
  id?: string;
}

export const FathomMarker = ({
  depth,
  zone,
  tagline,
  id,
}: FathomMarkerProps) => {
  return (
    <div id={id} className="w-full py-8 select-none">
      <div className="flex items-center gap-3 md:gap-5">
        <div className="w-6 md:w-16 border-t border-dashed border-[#7d93b8]/40" />

        <div className="flex flex-wrap items-baseline gap-2 font-mono text-xs md:text-sm tracking-widest uppercase">
          <span className="text-[#4de3ff] font-bold bg-[#0d1e38] px-2 py-0.5 rounded border border-[#1b3050]">
            {depth}
          </span>
          <span className="text-[#e8f1ff] font-semibold">{zone}</span>
          {tagline && (
            <span className="text-[#7d93b8]/70 hidden sm:inline">
              {"//"} {tagline}
            </span>
          )}
        </div>

        <div className="flex-1 border-t border-dashed border-[#7d93b8]/40" />
      </div>
    </div>
  );
};
