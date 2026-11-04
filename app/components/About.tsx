import React from "react";
import { CheckCircle2, ShieldCheck, HeartHandshake, Clock } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white text-[#101010] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna de Texto y Argumento */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block font-body">
              Sobre Mudanzas CRICASA
            </span>

            {/* Título con Bebas Neue */}
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#101010] tracking-wide uppercase leading-tight mb-8">
              EXPERIENCIA QUE SE NOTA <br />
              <span className="text-neutral-500">EN CADA MUDANZA.</span>
            </h2>

            <p className="font-body text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
              <strong>CRICASA</strong> es una empresa familiar con más de 30 años de experiencia ininterrumpida en el rubro del transporte y la mudanza. A lo largo de estas décadas, hemos consolidado una metodología de trabajo basada en el compromiso genuino, la responsabilidad operativa y el trato directo.
            </p>

            <p className="font-body text-neutral-600 text-base leading-relaxed mb-10">
              Sabemos que una mudanza no es simplemente trasladar cajas y muebles de un punto a otro; representa un cambio de etapa de vida o la renovación del espacio laboral. Por eso, tratamos cada objeto y pertenencia con el mayor cuidado, brindando tranquilidad a nuestros clientes en cada paso.
            </p>

            {/* Pilares Clave con fondo gris muy claro #F4F4F4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-[#F4F4F4] border border-neutral-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <h3 className="font-display text-xl text-[#101010] tracking-wide uppercase">
                    Compromiso Real
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-normal">
                  Cumplimiento estricto de las condiciones, fechas y presupuestos acordados sin improvisaciones.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#F4F4F4] border border-neutral-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <h3 className="font-display text-xl text-[#101010] tracking-wide uppercase">
                    Personal de Oficio
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-normal">
                  Estibadores capacitados en maniobras seguras de muebles y equipos delicados.
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
                  <span>Tradición y oficio</span>
                </div>

                <div className="font-display text-6xl sm:text-7xl text-white tracking-wide uppercase leading-none mb-4">
                  +{COMPANY_CONFIG.experienceYears} AÑOS
                </div>

                <p className="font-body text-neutral-400 text-sm leading-relaxed mb-8">
                  Creciendo de manera constante gracias a la recomendación de cada cliente que confía en nuestro trabajo familiar y profesional.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10 font-body">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Atención Familiar</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Trato cálido, respetuoso y con dedicación personalizada en cada detalle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Responsabilidad y Cuidado</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Protección rigurosa de sus pertenencias durante todo el traslado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta flotante complementaria en gris #F4F4F4 */}
              <div className="mt-4 bg-[#F4F4F4] rounded-xl p-5 border border-neutral-300 flex items-center gap-4">
                <Clock className="w-8 h-8 text-black shrink-0" />
                <div className="text-xs text-neutral-700 font-body">
                  <span className="font-bold text-[#101010] block text-sm">Puntualidad garantizada</span>
                  Planificación previa para respetar los horarios acordados en origen y destino.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
