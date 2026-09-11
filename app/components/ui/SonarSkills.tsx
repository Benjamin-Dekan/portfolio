"use client";

import { useState } from "react";
import { Cpu, Globe, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  category: "hardware" | "web" | "robotics";
  level: string;
  notes: string;
}

const skills: SkillItem[] = [
  // Hardware / Low Level
  {
    name: "C++",
    category: "hardware",
    level: "PRIMARY",
    notes: "High-performance systems, algorithms, firmware, embedded design",
  },
  {
    name: "Verilog / HDL",
    category: "hardware",
    level: "PRIMARY",
    notes:
      "RTL design, finite state machines, clock dividers, debouncing circuits, synthesis",
  },
  {
    name: "FPGA Architecture",
    category: "hardware",
    level: "SPECIALIZED",
    notes: "Xilinx Vivado flow, register-transfer level (RTL) design",
  },
  {
    name: "Computer Architecture",
    category: "hardware",
    level: "CORE",
    notes: "Assembly, memory hierarchies, pipelining, cache protocols",
  },

  // Web & Full Stack
  {
    name: "TypeScript / JavaScript",
    category: "web",
    level: "PRIMARY",
    notes: "Strict typing, async architecture, modern ES features",
  },
  {
    name: "Next.js & React",
    category: "web",
    level: "PRIMARY",
    notes: "App Router, Server Components, SSR/SSG, edge runtimes",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    level: "PRIMARY",
    notes: "Responsive layouts, custom design systems, CSS keyframes",
  },
  {
    name: "Prisma & PostgreSQL",
    category: "web",
    level: "CORE",
    notes: "Relational schema design, migrations, and query planning",
  },

  // Robotics & Automation
  {
    name: "Python Automation",
    category: "robotics",
    level: "PRIMARY",
    notes: "Automating lab robots, instrumentation, scripts, data pipelines",
  },
  {
    name: "Linux & Docker",
    category: "robotics",
    level: "CORE",
    notes: "Containerization, shell scripting, environment isolation",
  },
  {
    name: "Git & Version Control",
    category: "robotics",
    level: "CORE",
    notes: "Branching strategies, CI/CD workflows, collaborative repos",
  },
  {
    name: "Browser Security & Internals",
    category: "web",
    level: "RESEARCH",
    notes: "Security models, networking protocols, DOM sandbox exploration",
  },
];

export const SonarSkills = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "hardware" | "web" | "robotics"
  >("all");

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <div className="w-full bg-[#081222]/90 border-2 border-[#1b3050] rounded-sm p-6 backdrop-blur-md relative overflow-hidden">
      {/* Sonar sweep line effect */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-[#4de3ff]/10 pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(77, 227, 255, 0.12) 0deg, transparent 60deg, transparent 360deg)",
          animation: "spin 10s linear infinite",
        }}
      />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1b3050] pb-4 mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4de3ff] animate-ping" />
            <h3 className="font-mono text-xl font-bold tracking-wider text-[#e8f1ff]">
              SUBMERSIBLE ARSENAL & TELEMETRY
            </h3>
          </div>
          <p className="font-mono text-xs text-[#7d93b8] mt-0.5">
            {"// HARDWARE SILICON · FULL-STACK WEB · ROBOTICS LAB CONTROL"}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider ${
              activeTab === "all"
                ? "bg-[#4de3ff] text-[#050a14] font-bold shadow-[0_0_12px_rgba(77,227,255,0.4)]"
                : "bg-[#101d33] text-[#7d93b8] hover:text-[#e8f1ff] border border-[#1b3050]"
            }`}
          >
            All [12]
          </button>
          <button
            onClick={() => setActiveTab("hardware")}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider flex items-center gap-1 ${
              activeTab === "hardware"
                ? "bg-[#4de3ff] text-[#050a14] font-bold shadow-[0_0_12px_rgba(77,227,255,0.4)]"
                : "bg-[#101d33] text-[#7d93b8] hover:text-[#e8f1ff] border border-[#1b3050]"
            }`}
          >
            <Cpu size={12} />
            Hardware & C++
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider flex items-center gap-1 ${
              activeTab === "web"
                ? "bg-[#4de3ff] text-[#050a14] font-bold shadow-[0_0_12px_rgba(77,227,255,0.4)]"
                : "bg-[#101d33] text-[#7d93b8] hover:text-[#e8f1ff] border border-[#1b3050]"
            }`}
          >
            <Globe size={12} />
            Web & React
          </button>
          <button
            onClick={() => setActiveTab("robotics")}
            className={`px-3 py-1 rounded transition-colors uppercase tracking-wider flex items-center gap-1 ${
              activeTab === "robotics"
                ? "bg-[#4de3ff] text-[#050a14] font-bold shadow-[0_0_12px_rgba(77,227,255,0.4)]"
                : "bg-[#101d33] text-[#7d93b8] hover:text-[#e8f1ff] border border-[#1b3050]"
            }`}
          >
            <Terminal size={12} />
            Robotics & Tools
          </button>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 relative z-10">
        {filteredSkills.map((s) => (
          <div
            key={s.name}
            className="p-3.5 bg-[#0b1626] border border-[#1b3050] hover:border-[#4de3ff] hover:shadow-[0_0_16px_rgba(77,227,255,0.15)] rounded-sm transition-all flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="font-mono text-sm font-bold text-[#e8f1ff] tracking-wide">
                {s.name}
              </span>
              <span
                className={`font-mono text-[9px] px-1.5 py-0.5 rounded tracking-widest uppercase ${
                  s.level === "PRIMARY"
                    ? "bg-[#ff5d8f]/20 text-[#ff5d8f] border border-[#ff5d8f]/40"
                    : s.level === "SPECIALIZED"
                      ? "bg-[#ffd166]/20 text-[#ffd166] border border-[#ffd166]/40"
                      : "bg-[#4de3ff]/20 text-[#4de3ff] border border-[#4de3ff]/40"
                }`}
              >
                {s.level}
              </span>
            </div>
            <p className="text-xs text-[#7d93b8] leading-relaxed">{s.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
