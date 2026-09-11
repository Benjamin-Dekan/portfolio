"use client";

import { useState } from "react";
import { OceanAtmosphere } from "./components/ui/OceanAtmosphere";
import { OceanWaves } from "./components/ui/OceanWaves";
import { Boat } from "./components/ui/Boat";
import { DepthGauge } from "./components/ui/DepthGauge";
import { FathomMarker } from "./components/ui/FathomMarker";
import { ProjectCard } from "./components/ui/ProjectCard";
import { SonarSkills } from "./components/ui/SonarSkills";
import { DeepSeaCreatures } from "./components/ui/DeepSeaCreatures";
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  Terminal,
  Radio,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("benjamindekan360@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full flex flex-col min-h-screen bg-gradient-to-b from-[#071427] via-[#091b35] via-[#051021] via-[#030814] to-[#010206]">
      {/* Dynamic Background Atmosphere, Ambient Marine Life & Fixed Depth Gauge */}
      <OceanAtmosphere />
      <DeepSeaCreatures />
      <DepthGauge />

      {/* ========================================================= */}
      {/* 0M: THE SURFACE & DECK                                    */}
      {/* ========================================================= */}
      <section
        id="surface"
        className="relative z-10 pt-16 md:pt-24 pb-0 flex flex-col items-center justify-between min-h-[85vh]"
      >
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Telemetry pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050a14]/80 border border-[#4de3ff]/40 text-[#4de3ff] font-mono text-xs tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(77,227,255,0.25)]">
            <span className="w-2 h-2 rounded-full bg-[#4de3ff] animate-ping" />
            <span>EXPEDITION PROTOCOL · DEPTH 0000M</span>
          </div>

          {/* Main Title with chromatic aberration */}
          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#e8f1ff] krillion-glow uppercase leading-none mb-4">
            Benjamin Dekan
          </h1>

          <p className="font-mono text-lg md:text-2xl text-[#4de3ff] tracking-wider uppercase mb-3">
            Full-Stack Developer · Computer Engineer
          </p>

          <p className="max-w-2xl text-[#7d93b8] text-base md:text-lg leading-relaxed mb-8">
            Boston University graduate exploring the interface between physical
            hardware and fluid software. Building web applications with an
            affinity for ocean-themed aesthetics and low-level systems.
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => scrollTo("epipelagic")}
              className="btn-descend py-3 px-8 text-base shadow-[0_0_24px_rgba(255,93,143,0.6)]"
            >
              <span>DESCEND TO DEPTHS ↓</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo("hadal")}
              className="btn-quiet py-3 px-6 text-sm"
            >
              <Radio size={15} className="mr-2 text-[#4de3ff]" />
              <span>TRANSMIT PING [11KM]</span>
            </button>
          </div>
        </div>

        {/* The Waterline Cross-Section: Animated Boat sitting atop multi-layer Waves */}
        <div className="w-full relative mt-auto">
          {/* The Boat anchored to the waves */}
          <div className="absolute right-[18%] md:right-[26%] -top-5 md:-top-5 w-48 md:w-64 z-20">
            <Boat />
          </div>

          {/* The Layered SVG Waves */}
          <OceanWaves />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 200M: EPIPELAGIC ZONE (SUNLIT) - RECENT MISSIONS          */}
      {/* ========================================================= */}
      <section
        id="epipelagic"
        className="relative z-10 max-w-6xl mx-auto px-6 py-12 w-full"
      >
        <FathomMarker
          depth="0200m"
          zone="Epipelagic Zone"
          tagline="Primary Mission Deployments"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {/* Mission 1: Barnacle */}
          <ProjectCard
            title="Barnacle"
            subtitle="Movie Discovery Engine"
            description="A full-stack movie discovery app that aggregates titles across major streaming platforms, letting users filter catalogs strictly by their active subscriptions. Debounced TMDb API search with in-memory caching returns instant results and rich metadata."
            depthTag="0085M // ACTIVE"
            tags={[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "TMDb API",
              "Vercel",
            ]}
            liveUrl="https://barnacle-one.vercel.app/"
            githubUrl="https://github.com/Benjamin-Dekan/Barnacle"
            logoSrc="/barnacle.svg"
            previewGradient="from-[#0d2a45] via-[#091a2e] to-[#040c17]"
            badge="VERCEL DEPLOYMENT"
          />

          {/* Mission 2: Chromium Extension Risk Scanner */}
          <ProjectCard
            title="Extension Risk Scanner"
            subtitle="Browser Security Tooling"
            description="A proof-of-concept Chromium extension using declarativeNetRequest session rules to evaluate CSP bypass vectors and script injection risk, paired with a cross-platform Python CLI that audits installed extension manifests. Benchmarked across 50 extensions in 27 seconds, isolating 3 confirmed malicious installs."
            depthTag="0140M // SECURITY"
            tags={[
              "Python",
              "JavaScript",
              "Chromium DevTools",
              "declarativeNetRequest",
              "CLI",
            ]}
            previewGradient="from-[#12283a] via-[#091b29] to-[#030a12]"
            badge="PROOF OF CONCEPT"
          />

          {/* Mission 3: SnakeSense */}
          <ProjectCard
            title="SnakeSense"
            subtitle="Embedded Motion-Controlled Game"
            description="A motion-controlled Snake game on BeagleBone Black, mapping real-time hand tilt from a 3-axis accelerometer to directional movement. Userspace I2C polling via Linux i2c-dev drives 50Hz rendering on a 4.3-inch LCD Cape through Qt, with a deadband threshold tuned to filter resting tremors."
            depthTag="0195M // EMBEDDED"
            tags={[
              "C++",
              "Qt",
              "Linux (i2c-dev)",
              "BeagleBone",
              "Embedded Systems",
            ]}
            previewGradient="from-[#1f1a3a] via-[#0e1227] to-[#040817]"
            githubUrl="https://github.com/Benjamin-Dekan/Snake-Sense"
            badge="LOW-LEVEL COMPUTING"
          />
          {/* Mission 2: DAMP Lab Robotics Automation */}
          {/* <ProjectCard
            title="DAMP Lab Automation"
            subtitle="Lab Robotics & Control"
            description="Orchestrating biological automation hardware, liquid handlers, and robotic arms using Python, hardware-level abstraction layers, and real-time APIs."
            depthTag="0140M // AUTOMATION"
            tags={[
              "Python",
              "Robotics Control",
              "Hardware APIs",
              "Lab Automation",
              "Linux",
            ]}
            previewGradient="from-[#12283a] via-[#091b29] to-[#030a12]"
            badge="BOSTON UNIVERSITY"
          /> */}

          {/* Mission 3: FPGA Architecture & Digital Logic */}
          {/* <ProjectCard
            title="FPGA Countdown Timer"
            subtitle="Silicon & Digital Logic"
            description="A 7-segment display countdown timer built with RTL Verilog: button-based time entry with a debounced input handler, a clock divider for accurate timing, and a finite state machine controlling countdown behavior."
            depthTag="0195M // HARDWARE"
            tags={["Verilog", "RTL Design", "Vivado", "FPGA", "Digital Logic"]}
            previewGradient="from-[#1f1a3a] via-[#0e1227] to-[#040817]"
            badge="LOW-LEVEL COMPUTING"
          /> */}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1000M: MESOPELAGIC ZONE (TWILIGHT) - ARSENAL & TELEMETRY */}
      {/* ========================================================= */}
      <section
        id="mesopelagic"
        className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full"
      >
        <FathomMarker
          depth="1000m"
          zone="Mesopelagic Zone"
          tagline="Submersible Arsenal & Technical Sonar"
        />

        <div className="mt-4">
          <SonarSkills />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4000M: BATHYPELAGIC / ABYSSAL ZONE - EXPEDITION LOGBOOK   */}
      {/* ========================================================= */}
      <section
        id="bathypelagic"
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full"
      >
        <FathomMarker
          depth="4000m"
          zone="Bathypelagic Zone"
          tagline="Submersible Expedition Logbook"
        />

        <div className="mt-4 bg-[#050b17]/90 border-2 border-[#1b3050] hover:border-[#4de3ff] rounded-sm p-6 md:p-10 shadow-[0_0_30px_rgba(2,6,15,0.9)] backdrop-blur-md transition-colors relative">
          {/* Corner Terminal Badges */}
          <div className="flex items-center justify-between border-b border-[#1b3050] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-[#4de3ff]" />
              <span className="font-mono text-sm uppercase tracking-widest text-[#e8f1ff] font-bold">
                EXPEDITION LOG · BENJAMIN DEKAN
              </span>
            </div>
            <span className="font-mono text-xs text-[#7d93b8]">
              LOG #04000-BU // VERIFIED
            </span>
          </div>

          {/* Narrative Content */}
          <div className="space-y-6 text-[#c6d5ec] leading-relaxed text-base md:text-lg">
            <p>
              <strong className="text-[#e8f1ff] font-mono uppercase tracking-wider text-sm block mb-1">
                {"// 01. THE FOUNDATION"}
              </strong>
              I graduated from{" "}
              <span className="text-[#4de3ff] font-semibold">
                Boston University
              </span>{" "}
              with a degree in Computer Engineering, focusing on computing from
              the ground up: digital logic, computer architecture, and operating
              systems.
            </p>

            <p>
              <strong className="text-[#e8f1ff] font-mono uppercase tracking-wider text-sm block mb-1">
                {"// 02. HARDWARE MEETS SOFTWARE"}
              </strong>
              I&apos;m fascinated by the boundary where physical hardware meets
              high-performance software. Whether that&apos;s writing low-level
              C++ for embedded systems, automating biological lab robots with
              Python, or building full-stack web applications with Next.js,
              React, and TypeScript. I like bridging bare metal with clean user
              experiences.
            </p>

            <p>
              <strong className="text-[#e8f1ff] font-mono uppercase tracking-wider text-sm block mb-1">
                {"// 03. OFF-DUTY EXPLORATIONS"}
              </strong>
              When I step away from the compiler, you will find me tinkering
              with FPGA RTL designs in Vivado, inspecting browser security
              internals, or spending quiet hours by the ocean.
            </p>
          </div>

          {/* Telemetry metadata footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-dashed border-[#1b3050] font-mono text-xs">
            <div>
              <span className="text-[#7d93b8] uppercase tracking-widest block text-[10px]">
                ALMA MATER
              </span>
              <span className="text-[#e8f1ff] font-bold">
                Boston University
              </span>
            </div>
            <div>
              <span className="text-[#7d93b8] uppercase tracking-widest block text-[10px]">
                DEGREE
              </span>
              <span className="text-[#e8f1ff] font-bold">
                B.S. Computer Eng.
              </span>
            </div>
            <div>
              <span className="text-[#7d93b8] uppercase tracking-widest block text-[10px]">
                BASE LOCATION
              </span>
              <span className="text-[#e8f1ff] font-bold">Boston, MA</span>
            </div>
            <div>
              <span className="text-[#7d93b8] uppercase tracking-widest block text-[10px]">
                STATUS
              </span>
              <span className="text-[#4de3ff] font-bold">OPEN TO ROLES</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10924M: HADAL ZONE / CHALLENGER DEEP - SONAR TRANSMISSION */}
      {/* ========================================================= */}
      <section
        id="hadal"
        className="relative z-10 max-w-4xl mx-auto px-6 py-24 w-full flex flex-col items-center text-center"
      >
        <FathomMarker
          depth="10924m"
          zone="Challenger Deep"
          tagline="Mariana Trench // Floor of the Ocean"
        />

        <div className="w-full bg-[#03060f] border-2 border-[#1b3050] hover:border-[#ff5d8f] rounded-sm p-8 md:p-12 shadow-[0_0_40px_rgba(255,93,143,0.2)] mt-6 relative overflow-hidden">
          {/* Glowing transmitter indicator */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#ff5d8f]/10 border border-[#ff5d8f] flex items-center justify-center shadow-[0_0_20px_rgba(255,93,143,0.4)]">
              <Radio size={28} className="text-[#ff5d8f] animate-pulse" />
            </div>
          </div>

          <h2 className="font-mono text-3xl md:text-5xl font-bold text-[#e8f1ff] uppercase tracking-tight mb-3 krillion-glow-pink">
            Sonar Transmission
          </h2>

          <p className="font-mono text-xs uppercase tracking-widest text-[#4de3ff] mb-4">
            {"// LISTENING ON ALL FREQUENCIES · READY TO RECEIVE"}
          </p>

          <p className="text-[#7d93b8] max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-8">
            I am actively seeking full-time opportunities where I can contribute
            to systems, web engineering, or hardware-software integration. Feel
            free to send a ping to my coordinates.
          </p>

          {/* Copyable Email Box */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
            <div className="w-full font-mono text-xs md:text-sm bg-[#070e1b] border border-[#1b3050] px-4 py-3 rounded text-[#e8f1ff] flex items-center justify-between gap-2 shadow-inner">
              <span className="truncate">benjamindekan360@gmail.com</span>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="btn-cyan py-3 px-5 text-xs w-full sm:w-auto shrink-0 shadow-[0_0_14px_rgba(77,227,255,0.4)]"
            >
              {copiedEmail ? (
                <>
                  <Check size={14} className="mr-1.5" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="mr-1.5" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Coordinate Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs tracking-wider">
            <a
              href="mailto:benjamindekan360@gmail.com"
              className="btn-quiet py-2.5 px-5"
            >
              <Mail size={14} className="mr-2 text-[#4de3ff]" />
              <span>DIRECT EMAIL</span>
            </a>

            <a
              href="https://github.com/Benjamin-Dekan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet py-2.5 px-5"
            >
              <ExternalLink size={14} className="mr-2 text-[#4de3ff]" />
              <span>GITHUB</span>
            </a>

            <a
              href="https://www.linkedin.com/in/benjamin-dekan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet py-2.5 px-5"
            >
              <ExternalLink size={14} className="mr-2 text-[#4de3ff]" />
              <span>LINKEDIN</span>
            </a>
          </div>

          {/* Surface Ascent Trigger */}
          <div className="mt-12 pt-6 border-t border-dashed border-[#1b3050]">
            <button
              type="button"
              onClick={() => scrollTo("surface")}
              className="font-mono text-xs text-[#7d93b8] hover:text-[#4de3ff] uppercase tracking-widest inline-flex items-center gap-2 transition-colors group"
            >
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform text-[#4de3ff]"
              />
              <span>SURFACE ASCENT THRUSTERS [RETURN TO 0M]</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1b3050] py-8 text-center font-mono text-xs text-[#7d93b8]/60 uppercase tracking-widest select-none">
        <p>BENJAMIN DEKAN · OCEAN EXPEDITION SYSTEM · 2026</p>
      </footer>
    </div>
  );
}
