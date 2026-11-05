"use client";

import React from "react";
import { Info, ZoomIn } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const TechnicalIllustration: React.FC<{ type: string; title: string }> = ({ type, title }) => {
  switch (type) {
    case "truck":
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full object-cover bg-[#161616]" fill="none">
          <rect width="400" height="250" fill="#141414" />
          <line x1="0" y1="210" x2="400" y2="210" stroke="#333333" strokeWidth="2" strokeDasharray="6 4" />
          <g transform="translate(60, 50)">
            <rect x="0" y="30" width="200" height="110" rx="4" fill="#242424" stroke="#444444" strokeWidth="1" />
            <rect x="195" y="70" width="70" height="70" rx="4" fill="#EDEDED" />
            <rect x="210" y="80" width="45" height="28" rx="2" fill="#141414" />
            <circle cx="50" cy="145" r="18" fill="#0A0A0A" stroke="#555555" strokeWidth="3" />
            <circle cx="170" cy="145" r="18" fill="#0A0A0A" stroke="#555555" strokeWidth="3" />
            <circle cx="235" cy="145" r="18" fill="#0A0A0A" stroke="#555555" strokeWidth="3" />
            <text x="100" y="90" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" letterSpacing="1" textAnchor="middle" fontWeight="bold">
              CRICASA
            </text>
          </g>
        </svg>
      );
    case "packing":
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full object-cover bg-[#1E1E1E]" fill="none">
          <rect width="400" height="250" fill="#1A1A1A" />
          <g transform="translate(80, 40)">
            <rect x="30" y="40" width="180" height="110" rx="6" fill="#F5F5F5" />
            <path d="M40 75 H200" stroke="#888888" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M40 115 H200" stroke="#888888" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M120 40 V150" stroke="#222222" strokeWidth="3" />
            <rect x="65" y="20" width="70" height="25" rx="2" fill="#111111" />
            <text x="100" y="37" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
              FRÁGIL / FRAGILE
            </text>
          </g>
        </svg>
      );
    case "lift":
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full object-cover bg-[#141414]" fill="none">
          <rect width="400" height="250" fill="#121212" />
          <g transform="translate(100, 20)">
            <rect x="160" y="10" width="80" height="190" fill="#222222" />
            <line x1="80" y1="20" x2="80" y2="170" stroke="#666666" strokeWidth="2.5" />
            <circle cx="80" cy="20" r="10" fill="#E5E5E5" />
            <rect x="50" y="90" width="60" height="50" rx="3" fill="#FFFFFF" />
            <path d="M50 110 H110" stroke="#101010" strokeWidth="2" />
          </g>
        </svg>
      );
    case "commercial":
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full object-cover bg-[#181818]" fill="none">
          <rect width="400" height="250" fill="#161616" />
          <g transform="translate(70, 50)">
            <rect x="0" y="40" width="120" height="80" rx="3" fill="#2E2E2E" />
            <rect x="140" y="20" width="110" height="100" rx="3" fill="#3D3D3D" />
            <rect x="160" y="40" width="70" height="40" rx="2" fill="#FAFAFA" />
            <line x1="0" y1="130" x2="260" y2="130" stroke="#555555" strokeWidth="2" />
          </g>
        </svg>
      );
    case "storage":
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full object-cover bg-[#161616]" fill="none">
          <rect width="400" height="250" fill="#141414" />
          <g transform="translate(60, 40)">
            <rect x="20" y="20" width="70" height="120" fill="#262626" stroke="#444444" strokeWidth="1.5" />
            <rect x="105" y="20" width="70" height="120" fill="#262626" stroke="#444444" strokeWidth="1.5" />
            <rect x="190" y="20" width="70" height="120" fill="#262626" stroke="#444444" strokeWidth="1.5" />
            <line x1="10" y1="145" x2="270" y2="145" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
          </g>
        </svg>
      );
    case "pets":
    default:
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full object-cover bg-[#1A1A1A]" fill="none">
          <rect width="400" height="250" fill="#161616" />
          <g transform="translate(110, 50)">
            <circle cx="90" cy="70" r="50" fill="#222222" stroke="#444444" strokeWidth="2" />
            <circle cx="70" cy="55" r="7" fill="#EEEEEE" />
            <circle cx="110" cy="55" r="7" fill="#EEEEEE" />
            <ellipse cx="90" cy="75" rx="14" ry="10" fill="#111111" />
            <path d="M80 88 Q90 98 100 88" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      );
  }
};

const svgTypes = ["truck", "packing", "lift", "commercial", "storage", "pets"];

export const Gallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#101010] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block font-body">
            {t.gallery.badge}
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase leading-tight mb-4">
            {t.gallery.titleMain} <br />
            <span className="text-neutral-400">{t.gallery.titleHighlight}</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-300">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Grilla visual monocromática */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.gallery.items.map((item, index) => {
            const svgType = svgTypes[index % svgTypes.length];

            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-[#181818] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                  <TechnicalIllustration type={svgType} title={item.title} />

                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-white/20 text-neutral-200 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-white mb-2 uppercase tracking-wide group-hover:text-neutral-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400 font-body">
                    <span>{t.gallery.tag}</span>
                    <span className="font-mono text-neutral-300">0{index + 1} / 06</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
