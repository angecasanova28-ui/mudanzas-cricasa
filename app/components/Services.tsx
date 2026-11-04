import React from "react";
import {
  Home,
  Building2,
  PackageCheck,
  Warehouse,
  ArrowUpFromLine,
  Wrench,
  HeartHandshake,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../config/company";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  PackageCheck,
  Warehouse,
  ArrowUpFromLine,
  Wrench,
  HeartHandshake,
};

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-[#F4F4F4] text-[#101010] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera con Bebas Neue */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block font-body">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#101010] tracking-wide uppercase leading-tight mb-4">
            SOLUCIONES INTEGRALES <br />
            <span className="text-neutral-500">PARA CADA TIPO DE TRASLADO.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-600">
            Cobertura completa de servicios para mudanzas residenciales y corporativas con equipamiento adecuado y personal capacitado.
          </p>
        </div>

        {/* Grilla de Tarjetas de Servicios en fondo Blanco y Bordes Sutiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const IconComponent = iconMap[service.iconName] || Home;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 border border-neutral-200/90 hover:border-black/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Fila superior con ícono sobrio e índice */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-xl bg-[#F4F4F4] border border-neutral-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-display text-2xl text-neutral-300 group-hover:text-black transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Título de Servicio con Bebas Neue */}
                  <h3 className="font-display text-2xl sm:text-3xl text-[#101010] mb-3 tracking-wide uppercase leading-none group-hover:text-neutral-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Descripción breve */}
                  <p className="font-body text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Puntos destacados */}
                  <ul className="space-y-2 pt-4 border-t border-neutral-100 mb-8 text-xs text-neutral-500 font-body">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enlace de acción */}
                <div className="pt-2 font-body">
                  <a
                    href={`#presupuesto?servicio=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-neutral-600 transition-colors"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fila de Solicitud Rápida */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-2xl sm:text-3xl text-[#101010] uppercase tracking-wide">
              ¿REQUERIMIENTOS ESPECIALES O TRASLADOS COMBINADOS?
            </h4>
            <p className="font-body text-xs sm:text-sm text-neutral-600 mt-1">
              Adaptamos izajes, guardamuebles y embalaje según las particularidades de su traslado.
            </p>
          </div>
          <a
            href="#presupuesto"
            className="shrink-0 px-7 py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-colors font-body"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
};
