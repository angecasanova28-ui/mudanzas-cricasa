import React from "react";
import { ShieldCheck, Users, Sparkles, Layers, LucideIcon } from "lucide-react";
import { DIFFERENTIALS_DATA, DifferentialItem } from "../config/company";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Users,
  Sparkles,
  Layers,
};

export const Differentials: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#101010] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block font-body">
            Nuestros Diferenciales
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#101010] tracking-wide uppercase leading-tight mb-4">
            ¿POR QUÉ ELEGIR <br />
            <span className="text-neutral-500">MUDANZAS CRICASA?</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-600">
            Una trayectoria fundamentada en el trabajo serio, la honestidad y la máxima atención hacia cada una de sus pertenencias.
          </p>
        </div>

        {/* Grilla visual de 4 diferenciales destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DIFFERENTIALS_DATA.map((item: DifferentialItem, index: number) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;

            return (
              <div
                key={index}
                className="relative bg-[#F4F4F4] rounded-2xl p-8 border border-neutral-200/90 hover:border-black/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-black mb-6">
                    <Icon className="w-5 h-5 text-black" />
                  </div>

                  <h3 className="font-display text-2xl text-[#101010] mb-3 leading-tight uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-300/60 flex items-center justify-between text-xs text-neutral-500 font-body">
                  <span>Pilar fundamental</span>
                  <span className="font-display text-xl text-black">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
