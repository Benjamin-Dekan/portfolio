"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Compass, Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "surface", depth: "0m", label: "Surface", isHadal: false },
    { id: "epipelagic", depth: "200m", label: "Projects", isHadal: false },
    { id: "mesopelagic", depth: "1km", label: "Skills", isHadal: false },
    { id: "bathypelagic", depth: "4km", label: "About", isHadal: false },
    { id: "hadal", depth: "11km", label: "Contact", isHadal: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050a14]/90 backdrop-blur-md border-b border-[#1b3050]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* Vessel / Pilot Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#e8f1ff] hover:text-[#4de3ff] transition-colors group"
        >
          <div className="p-1.5 bg-[#101d33] border border-[#1b3050] group-hover:border-[#4de3ff] rounded">
            <Compass size={18} className="text-[#4de3ff] animate-spin-slow" />
          </div>
          <div>
            <span className="font-mono font-bold tracking-wider text-sm md:text-base block leading-none">
              BENJAMIN DEKAN
            </span>
            <span className="font-mono text-[10px] text-[#7d93b8] tracking-widest uppercase">
              EXPEDITION TELEMETRY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Anchors */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 font-mono text-xs tracking-wider"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 rounded transition-all uppercase inline-flex items-center gap-1.5 ${
                item.isHadal
                  ? "text-[#ff5d8f] hover:text-[#ffa3bf] hover:bg-[#101d33] font-semibold"
                  : "text-[#c6d5ec] hover:text-[#4de3ff] hover:bg-[#101d33]"
              }`}
            >
              <span
                className={`text-[10px] ${
                  item.isHadal ? "text-[#ff5d8f]/70" : "text-[#4de3ff]/60"
                }`}
              >
                [{item.depth}]
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollTo("epipelagic")}
            className="btn-descend text-xs py-2 px-4 shadow-[0_0_14px_rgba(255,93,143,0.5)]"
          >
            <span>DIVE IN ↓</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#7d93b8] hover:text-[#4de3ff] hover:bg-[#101d33] rounded border border-[#1b3050] transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1b3050] bg-[#050a14]/98 px-6 py-4 space-y-2 backdrop-blur-xl animate-fade-in font-mono text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left py-2.5 px-3 rounded flex items-center justify-between uppercase transition-colors ${
                item.isHadal
                  ? "text-[#ff5d8f] hover:bg-[#101d33] font-bold"
                  : "text-[#e8f1ff] hover:text-[#4de3ff] hover:bg-[#101d33]"
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`text-[10px] ${
                  item.isHadal ? "text-[#ff5d8f]" : "text-[#4de3ff]"
                }`}
              >
                [{item.depth}]
              </span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
