import React from "react";
import { MapPin, Navigation, CheckCircle2, MessageCircle } from "lucide-react";
import { COVERAGE_CONFIG } from "../config/company";
import { buildWhatsAppGeneralUrl } from "../config/whatsapp";

export const Coverage: React.FC = () => {
  return (
    <section id="cobertura" className="py-24 lg:py-32 bg-white text-[#101010] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna de Texto y Zonas */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block font-body">
              Alcance Logístico
            </span>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#101010] tracking-wide uppercase leading-tight mb-6">
              {COVERAGE_CONFIG.title}
            </h2>

            <p className="font-body text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
              {COVERAGE_CONFIG.subtitle}
            </p>

            {/* Listado de Zonas en tarjetas #F4F4F4 con bordes definidos */}
            <div className="space-y-6 font-body">
              {COVERAGE_CONFIG.zones.map((zone, zIdx) => (
                <div
                  key={zIdx}
                  className="p-6 rounded-2xl bg-[#F4F4F4] border border-neutral-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-2xl text-[#101010] uppercase tracking-wide">
                      {zone.region}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 mb-4 pl-11">
                    {zone.description}
                  </p>

                  <div className="pl-11 flex flex-wrap gap-2">
                    {zone.featuredAreas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-300 text-xs font-medium text-neutral-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-black" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-neutral-400 italic font-body">
              * {COVERAGE_CONFIG.note}
            </p>
          </div>

          {/* Tarjeta de Consulta Directa en Fondo Negro #101010 */}
          <div className="lg:col-span-5">
            <div className="bg-[#101010] text-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-neutral-800 relative overflow-hidden">
              <div className="relative z-10 font-body">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-6">
                  <Navigation className="w-6 h-6" />
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-white mb-3 uppercase tracking-wide">
                  ¿SU DESTINO NO FIGURA EN LA LISTA?
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Coordinamos con frecuencia rutas especiales y traslados punto a punto con reserva anticipada. Consúltenos directamente indicando su origen y destino.
                </p>

                <div className="space-y-3 mb-8 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>Evaluación de ruta y accesibilidad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>Reserva confirmada de fecha y horario</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>Atención y asesoramiento sin intermediarios</span>
                  </div>
                </div>

                <a
                  href={buildWhatsAppGeneralUrl(
                    "Hola CRICASA, quisiera consultar si tienen disponibilidad y cobertura para un traslado entre mis localidades."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Consultar por mi localidad</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
