"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Copy, Check, ArrowLeft, Radio, ExternalLink } from "lucide-react";
import { FathomMarker } from "@/app/components/ui/FathomMarker";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("benjamindekan360@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-[85vh] px-6 py-12 flex flex-col items-center max-w-4xl mx-auto w-full">
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
        depth="10924m"
        zone="Challenger Deep"
        tagline="Sonar Transmission Coordinates"
      />

      <div className="w-full bg-[#03060f] border-2 border-[#1b3050] hover:border-[#ff5d8f] rounded-sm p-8 md:p-12 shadow-[0_0_40px_rgba(255,93,143,0.2)] mt-6 text-center relative overflow-hidden">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#ff5d8f]/10 border border-[#ff5d8f] flex items-center justify-center shadow-[0_0_20px_rgba(255,93,143,0.4)]">
            <Radio size={28} className="text-[#ff5d8f] animate-pulse" />
          </div>
        </div>

        <h1 className="font-mono text-3xl md:text-5xl font-bold text-[#e8f1ff] uppercase tracking-tight mb-3 krillion-glow-pink">
          Get In Touch
        </h1>

        <p className="font-mono text-xs uppercase tracking-widest text-[#4de3ff] mb-4">
          {"// COORDINATES VERIFIED · READY FOR DIRECT TRANSMISSION"}
        </p>

        <p className="text-[#7d93b8] max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-8">
          I am actively seeking full-time opportunities where I can contribute
          and grow my skills in software engineering, embedded systems, or
          full-stack applications.
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
            {copied ? (
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

        {/* Direct Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs tracking-wider">
          <a
            href="mailto:benjamindekan360@gmail.com"
            className="btn-quiet py-2.5 px-5"
          >
            <Mail size={14} className="mr-2 text-[#4de3ff]" />
            <span>SEND EMAIL</span>
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
      </div>
    </div>
  );
}
