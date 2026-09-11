"use client";

import { useEffect, useState } from "react";

interface DepthData {
  meters: number;
  zone: string;
  temp: string;
  pressure: string;
  activeId: string;
}

const SECTIONS = [
  {
    id: "surface",
    label: "0m",
    zone: "SURFACE // DECK",
    startDepth: 0,
    endDepth: 200,
    startTemp: 22.5,
    endTemp: 18.2,
  },
  {
    id: "epipelagic",
    label: "200m",
    zone: "EPIPELAGIC // SUNLIT",
    startDepth: 200,
    endDepth: 1000,
    startTemp: 18.2,
    endTemp: 7.8,
  },
  {
    id: "mesopelagic",
    label: "1km",
    zone: "MESOPELAGIC // TWILIGHT",
    startDepth: 1000,
    endDepth: 4000,
    startTemp: 7.8,
    endTemp: 3.2,
  },
  {
    id: "bathypelagic",
    label: "4km",
    zone: "BATHYPELAGIC // MIDNIGHT",
    startDepth: 4000,
    endDepth: 10924,
    startTemp: 3.2,
    endTemp: 1.2,
  },
  {
    id: "hadal",
    label: "11km",
    zone: "HADAL // CHALLENGER DEEP",
    startDepth: 10924,
    endDepth: 10924,
    startTemp: 1.2,
    endTemp: 1.2,
  },
];

export const DepthGauge = () => {
  const [depthData, setDepthData] = useState<DepthData>({
    meters: 0,
    zone: "SURFACE // DECK",
    temp: "22.5°C",
    pressure: "1.0 ATM",
    activeId: "surface",
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateTelemetry = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(1, docHeight - viewportHeight);
      const ratio = Math.min(1, Math.max(0, scrollY / maxScroll));
      setScrollProgress(ratio);

      // Section elements
      const elements = SECTIONS.map((sec) => ({
        ...sec,
        el: document.getElementById(sec.id),
      }));

      // If sections exist, track true positions
      if (elements.every((e) => e.el !== null)) {
        const getAbsoluteTop = (el: HTMLElement) => {
          const rect = el.getBoundingClientRect();
          return rect.top + window.scrollY;
        };

        const sectionTops = elements.map((e) => getAbsoluteTop(e.el!));

        // Eye-level anchor: 35% down the viewport (where user reads)
        const anchorY = scrollY + viewportHeight * 0.35;

        let activeIdx = 0;
        if (scrollY <= 15) {
          activeIdx = 0;
        } else if (scrollY >= maxScroll - 30) {
          activeIdx = SECTIONS.length - 1;
        } else {
          for (let i = 0; i < sectionTops.length; i++) {
            const nextTop =
              i < sectionTops.length - 1 ? sectionTops[i + 1] : docHeight;
            if (anchorY >= sectionTops[i] && anchorY < nextTop) {
              activeIdx = i;
              break;
            } else if (anchorY >= nextTop && i === sectionTops.length - 2) {
              activeIdx = sectionTops.length - 1;
            }
          }
        }

        const activeSec = SECTIONS[activeIdx];
        const nextTop =
          activeIdx < sectionTops.length - 1
            ? sectionTops[activeIdx + 1]
            : docHeight;
        const currentTop = sectionTops[activeIdx];
        const segSpan = Math.max(1, nextTop - currentTop);

        // Progress smoothly within this active section
        const segProgress = Math.min(
          1,
          Math.max(0, (anchorY - currentTop) / segSpan)
        );

        let currentMeters = 0;
        let tempVal = activeSec.startTemp;

        if (activeIdx === SECTIONS.length - 1 || scrollY >= maxScroll - 30) {
          currentMeters = 10924;
          tempVal = 1.2;
        } else {
          currentMeters = Math.round(
            activeSec.startDepth +
              segProgress * (activeSec.endDepth - activeSec.startDepth)
          );
          tempVal = +(
            activeSec.startTemp -
            segProgress * (activeSec.startTemp - activeSec.endTemp)
          ).toFixed(1);
        }

        const pressure = `${(1 + currentMeters * 0.0987).toFixed(1)} ATM`;

        setDepthData({
          meters: currentMeters,
          zone: activeSec.zone,
          temp: `${tempVal}°C`,
          pressure,
          activeId: activeSec.id,
        });
      } else {
        // Fallback for subpages or missing elements
        const meters = Math.round(ratio * 10924);
        let zone = "SURFACE // DECK";
        let activeId = "surface";
        let temp = "22.5°C";

        if (ratio < 0.15) {
          zone = "SURFACE // DECK";
          activeId = "surface";
          temp = "22.5°C";
        } else if (ratio < 0.4) {
          zone = "EPIPELAGIC // SUNLIT";
          activeId = "epipelagic";
          temp = "18.2°C";
        } else if (ratio < 0.7) {
          zone = "MESOPELAGIC // TWILIGHT";
          activeId = "mesopelagic";
          temp = "7.8°C";
        } else if (ratio < 0.9) {
          zone = "BATHYPELAGIC // MIDNIGHT";
          activeId = "bathypelagic";
          temp = "3.2°C";
        } else {
          zone = "HADAL // CHALLENGER DEEP";
          activeId = "hadal";
          temp = "1.2°C";
        }

        setDepthData({
          meters,
          zone,
          temp,
          pressure: `${(1 + meters * 0.0987).toFixed(1)} ATM`,
          activeId,
        });
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateTelemetry();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateTelemetry();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToZone = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Submersible Depth Gauge"
      className="fixed right-4 md:right-7 bottom-6 z-40 flex flex-col items-end gap-2 select-none"
    >
      {/* Telemetry Console Panel */}
      <div className="bg-[#050a14]/90 border-2 border-[#1b3050] hover:border-[#4de3ff] p-3 rounded shadow-[0_0_20px_rgba(4,9,20,0.8)] backdrop-blur-md text-xs font-mono transition-colors">
        {/* Depth digital readout */}
        <div className="flex items-baseline justify-between gap-4 border-b border-[#1b3050] pb-2 mb-2">
          <span className="text-[#7d93b8] uppercase tracking-widest text-[11px]">
            DEPTH TELEMETRY
          </span>
          <div className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full animate-ping ${
                depthData.activeId === "hadal" ? "bg-[#ff5d8f]" : "bg-[#4de3ff]"
              }`}
            />
            <span
              className={`font-bold text-sm tracking-wider ${
                depthData.activeId === "hadal"
                  ? "text-[#ff5d8f]"
                  : "text-[#4de3ff]"
              }`}
            >
              {depthData.meters.toString().padStart(5, "0")} m
            </span>
          </div>
        </div>

        {/* Current Zone */}
        <div className="text-[13px] font-bold text-[#e8f1ff] tracking-wider mb-1 flex items-center gap-1.5">
          <span
            className={
              depthData.activeId === "hadal"
                ? "text-[#ff5d8f]"
                : "text-[#4de3ff]"
            }
          >
            ▶
          </span>
          <span>{depthData.zone}</span>
        </div>

        {/* Temperature & Pressure Readout */}
        <div className="flex justify-between text-[10px] text-[#7d93b8] tracking-widest gap-4">
          <span>PRES: {depthData.pressure}</span>
          <span>TEMP: {depthData.temp}</span>
        </div>

        {/* Vertical depth progress meter */}
        <div className="w-full bg-[#0d1e38] h-1.5 rounded-full mt-2 overflow-hidden border border-[#1b3050]">
          <div
            className="h-full bg-gradient-to-r from-[#4de3ff] via-[#ffd166] to-[#ff5d8f] transition-all duration-150 ease-out"
            style={{ width: `${Math.max(3, scrollProgress * 100)}%` }}
          />
        </div>

        {/* Quick Navigation Depth Waypoints */}
        <nav
          aria-label="Depth Waypoints"
          className="grid grid-cols-5 gap-1 mt-2.5 pt-2 border-t border-[#1b3050]/60"
        >
          {SECTIONS.map((sec) => {
            const isActive = depthData.activeId === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToZone(sec.id)}
                title={`${sec.label} - ${sec.zone}`}
                className={`text-[10px] py-1 px-1 rounded text-center transition-all ${
                  isActive
                    ? sec.id === "hadal"
                      ? "text-[#ff5d8f] bg-[#ff5d8f]/15 font-bold shadow-[0_0_8px_rgba(255,93,143,0.3)] border border-[#ff5d8f]/40"
                      : "text-[#4de3ff] bg-[#4de3ff]/15 font-bold shadow-[0_0_8px_rgba(77,227,255,0.3)] border border-[#4de3ff]/40"
                    : "text-[#7d93b8] hover:text-[#4de3ff] hover:bg-[#101d33]"
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
