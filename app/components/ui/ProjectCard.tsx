"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  depthTag: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  logoSrc?: string;
  previewGradient?: string;
  badge?: string;
}

export const ProjectCard = ({
  title,
  subtitle,
  description,
  depthTag,
  tags,
  liveUrl,
  githubUrl,
  logoSrc,
  previewGradient = "from-[#0d233a] via-[#09182a] to-[#050d18]",
  badge = "ACTIVE TRANSMISSION",
}: ProjectProps) => {
  return (
    <article
      aria-label={title}
      className="pack-card rounded-sm overflow-hidden flex flex-col group relative"
    >
      {/* Top Graphic / Preview Area */}
      <div
        className={`h-36 relative flex items-center justify-between px-6 bg-gradient-to-br ${previewGradient} border-b border-[#1b3050] overflow-hidden`}
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4de3ff 1px, transparent 1px), linear-gradient(to bottom, #4de3ff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Depth Tag & Badge */}
        <div className="flex flex-col gap-1 z-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff5d8f] bg-[#050a14]/80 px-2 py-0.5 rounded border border-[#ff5d8f]/40 w-fit">
            {depthTag}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#7d93b8]">
            {badge}
          </span>
        </div>

        {/* Project Logo / Icon */}
        {logoSrc && (
          <div className="z-10 bg-[#050a14]/80 p-2.5 rounded-lg border border-[#1b3050] group-hover:border-[#4de3ff] transition-colors group-hover:scale-105 duration-200">
            <Image
              src={logoSrc}
              alt={`${title} Logo`}
              width={42}
              height={42}
              className="w-10 h-10 object-contain"
            />
          </div>
        )}
      </div>

      {/* Body Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="font-mono text-2xl font-bold tracking-wide text-[#e8f1ff] group-hover:text-[#4de3ff] transition-colors">
              {title}
            </h3>
          </div>

          <p className="font-mono text-xs uppercase tracking-wider text-[#4de3ff]/80 mb-3">
            {subtitle}
          </p>

          <p className="text-sm text-[#7d93b8] leading-relaxed mb-4">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-[#e8f1ff] bg-[#101d33] px-2 py-0.5 rounded border border-[#1b3050]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-3 border-t border-dashed border-[#1b3050] flex items-center justify-between gap-3 font-mono text-xs">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4de3ff] hover:text-[#e8f1ff] flex items-center gap-1.5 transition-colors uppercase tracking-wider font-semibold"
            >
              <span>LAUNCH APP</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <span className="text-[#7d93b8]/50 uppercase tracking-widest text-[11px]">
              {}
            </span>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7d93b8] hover:text-[#4de3ff] flex items-center gap-1 transition-colors uppercase tracking-wider"
            >
              <FaGithub size={13} />
              <span>SOURCE</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
