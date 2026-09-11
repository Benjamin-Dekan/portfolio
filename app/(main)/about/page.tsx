"use client";

import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";
import { FathomMarker } from "@/app/components/ui/FathomMarker";

export default function AboutPage() {
  return (
    <div className="min-h-[85vh] px-6 py-12 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
      <div className="w-full mb-6">
        <Link
          href="/"
          className="font-mono text-xs text-[#7d93b8] hover:text-[#4de3ff] uppercase tracking-widest inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>RETURN TO SURFACE DECK</span>
        </Link>
      </div>

      <FathomMarker
        depth="4000m"
        zone="Bathypelagic Zone"
        tagline="Expedition Logbook"
      />

      <div className="w-full bg-[#050b17]/90 border-2 border-[#1b3050] hover:border-[#4de3ff] rounded-sm p-8 md:p-12 shadow-[0_0_30px_rgba(2,6,15,0.9)] backdrop-blur-md transition-colors relative mt-4">
        <div className="flex items-center justify-between border-b border-[#1b3050] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-[#4de3ff]" />
            <h1 className="font-mono text-xl uppercase tracking-widest text-[#e8f1ff] font-bold">
              ABOUT BENJAMIN DEKAN
            </h1>
          </div>
          <span className="font-mono text-xs text-[#7d93b8]">
            BU ALUMNUS // COMPUTER ENGINEERING
          </span>
        </div>

        <div className="space-y-6 text-[#c6d5ec] leading-relaxed text-base md:text-lg">
          <p>
            Hi, I&apos;m <span className="text-[#4de3ff] font-semibold">Benjamin</span>. I
            recently graduated from{" "}
            <span className="text-[#e8f1ff] font-semibold">Boston University</span> with
            a degree in Computer Engineering.
          </p>

          <p>
            I&apos;m fascinated by the space where physical hardware meets
            high-performance software. I like having my hands in a little bit of
            everything. Whether that&apos;s writing low-level C++ for embedded
            systems, automating lab robots with Python, or building full-stack
            web apps with Next.js, React, and TypeScript.
          </p>

          <p>
            When I&apos;m not in an IDE, you can usually find me tinkering with FPGA
            designs, exploring browser security internals, or just spending time
            by the ocean.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-dashed border-[#1b3050] flex flex-wrap gap-4 justify-between items-center font-mono text-xs">
          <div className="text-[#7d93b8]">
            LOOKING FOR:{" "}
            <span className="text-[#4de3ff] font-bold">
              FULL-TIME SOFTWARE / EMBEDDED ROLES
            </span>
          </div>
          <Link
            href="/#hadal"
            className="btn-descend py-2 px-5 text-xs shadow-[0_0_12px_rgba(255,93,143,0.4)]"
          >
            GET IN TOUCH ↓
          </Link>
        </div>
      </div>
    </div>
  );
}
