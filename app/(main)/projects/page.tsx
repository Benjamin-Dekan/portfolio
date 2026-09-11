"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FathomMarker } from "@/app/components/ui/FathomMarker";
import { ProjectCard } from "@/app/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-[85vh] px-6 py-12 flex flex-col items-center max-w-6xl mx-auto w-full">
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
        depth="0200m"
        zone="Epipelagic Zone"
        tagline="Deployed Missions & Software Projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
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
      </div>
    </div>
  );
}
