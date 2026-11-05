"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitch: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 select-none ${className}`}
      role="group"
      aria-label="Selector de idioma / Language selector"
    >
      <button
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
          language === "es"
            ? "bg-white text-black shadow-sm"
            : "text-neutral-300 hover:text-white"
        }`}
      >
        <span>ES</span>
      </button>

      <button
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "bg-white text-black shadow-sm"
            : "text-neutral-300 hover:text-white"
        }`}
      >
        <span>EN</span>
      </button>
    </div>
  );
};
