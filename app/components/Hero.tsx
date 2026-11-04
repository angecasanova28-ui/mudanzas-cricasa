import React from "react";
import { ArrowRight, Shield, Award, Phone } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { TruckFloating } from "./TruckFloating";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 bg-[#101010] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Cuadrícula sutil técnica */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Columna Izquierda: Mensaje y Acciones */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Tagline superior minimalista */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-neutral-300 text-xs font-medium tracking-widest uppercase mb-6">
              <Award className="w-3.5 h-3.5 text-neutral-400" />
              <span>30 años de trayectoria comprobada</span>
            </div>

            {/* Título Monumental con Bebas Neue */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-wide uppercase leading-[0.92] mb-6">
              TU MUDANZA, <br />
              <span className="text-neutral-400">EN BUENAS MANOS.</span>
            </h1>

            {/* Subtítulo sobrio y legible en Manrope */}
            <p className="font-body text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-xl">
              Más de 30 años acompañando mudanzas con experiencia, compromiso y cuidado en cada traslado.
            </p>

            {/* Botones principales de alto contraste */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#presupuesto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-white/5 transform hover:-translate-y-0.5"
              >
                <span>Solicitar presupuesto</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-semibold text-sm uppercase tracking-wider transition-all duration-200"
              >
                <span>Conocer nuestros servicios</span>
              </a>
            </div>

            {/* Microcredenciales */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full text-xs text-neutral-400 font-body">
              <div>
                <span className="font-display text-2xl sm:text-3xl text-white block leading-none mb-1">
                  +30 AÑOS
                </span>
                <span>En el rubro del transporte</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl text-white block leading-none mb-1">
                  100% DIRECTO
                </span>
                <span>Cotización por WhatsApp</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-display text-2xl sm:text-3xl text-white block leading-none mb-1">
                  FAMILIAR
                </span>
                <span>Base en Funes, Santa Fe</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Fotografía Real del Camión + Card Pequeña Debajo */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Camión real provisto por el usuario */}
            <div className="w-full flex justify-center">
              <TruckFloating />
            </div>

            {/* Card pequeña debajo */}
            <div className="w-full max-w-md mt-4 rounded-xl bg-[#181818]/90 border border-white/10 p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-white">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base text-white m-0 tracking-wide uppercase">
                      CUIDADO Y SEGURIDAD
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      Flota Propia
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5 font-body leading-snug">
                    Unidades equipadas con sujeción y mantas protectoras. Personal con oficio real.
                  </p>
                </div>
              </div>

              {/* Teléfono directo al pie de la card */}
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-body">
                <span>Atención telefónica directa:</span>
                <a
                  href={`tel:${COMPANY_CONFIG.phone.raw}`}
                  className="font-bold text-white hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{COMPANY_CONFIG.phone.display}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
