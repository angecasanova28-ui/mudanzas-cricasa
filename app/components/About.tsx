"use client";

import React from "react";
import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { useLanguage } from "../context/LanguageContext";

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white text-[#101010] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna de Texto y Argumento */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block font-body">
              {t.about.badge}
            </span>

            {/* Título con Bebas Neue */}
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#101010] tracking-wide uppercase leading-tight mb-8">
              {t.about.titleMain} <br />
              <span className="text-neutral-500">{t.about.titleHighlight}</span>
            </h2>

            <p className="font-body text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
              {t.about.p1}
            </p>

            <p className="font-body text-neutral-600 text-base leading-relaxed mb-10">
              {t.about.p2}
            </p>

            {/* Pilares Clave con fondo gris muy claro #F4F4F4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-[#F4F4F4] border border-neutral-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <h3 className="font-display text-xl text-[#101010] tracking-wide uppercase">
                    {t.about.pillar1Title}
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-normal">
                  {t.about.pillar1Desc}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#F4F4F4] border border-neutral-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <h3 className="font-display text-xl text-[#101010] tracking-wide uppercase">
                    {t.about.pillar2Title}
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-normal">
                  {t.about.pillar2Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Columna Visual: Tarjeta de Alto Impacto Monocromática */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Bloque Arquitectónico Negro Profundo */}
              <div className="bg-[#101010] text-white rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-neutral-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-6">
                  <span>{t.about.cardBadge}</span>
                </div>

                <div className="font-display text-6xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
                  +{COMPANY_CONFIG.experienceYears} {t.hero.stats.yearsLabel.includes("Experience") ? "YEARS" : "AÑOS"}
                </div>

                <p className="font-body text-neutral-400 text-sm leading-relaxed mb-8">
                  {t.about.cardDesc}
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10 font-body">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        {t.about.item1Title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                        {t.about.item1Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        {t.about.item2Title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                        {t.about.item2Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
