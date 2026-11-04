import React from "react";
import { Info, ZoomIn } from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "../config/company";

const TechnicalIllustration: React.FC<{ type: GalleryItem["svgType"] }> = ({ type }) => {
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
            <text x="100" y="90" fill="#FFFFFF" fontSize="13" fontFamily="Bebas Neue, sans-serif" letterSpacing="2" textAnchor="middle">
              ESTIBA Y FIJACIÓN
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
              FRÁGIL
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
            <text x="80" y="125" fill="#101010" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
              IZAJE
            </text>
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
          <rect width="400" height="250" fill="#171717" />
          <g transform="translate(130, 60)">
            <circle cx="70" cy="50" r="40" fill="#2A2A2A" />
            <circle cx="55" cy="40" r="8" fill="#F0F0F0" />
            <circle cx="85" cy="40" r="8" fill="#F0F0F0" />
            <path d="M60 65 Q70 75 80 65" stroke="#F0F0F0" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );
  }
};

export const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#F4F4F4] text-[#101010] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block font-body">
            Galería y Registro de Trabajo
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#101010] tracking-wide uppercase leading-tight mb-4">
            COMPROMISO Y CUIDADO <br />
            <span className="text-neutral-500">EN CADA TRASLADO.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-600">
            Presentación visual de nuestras metodologías de trabajo, estiba, embalaje y resguardo de mobiliario.
          </p>
        </div>

        {/* Nota de transparencia: espacio para fotos reales */}
        <div className="mb-12 max-w-2xl bg-white border border-neutral-300 rounded-xl p-4 flex items-start gap-3 shadow-sm font-body">
          <Info className="w-5 h-5 text-black shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-neutral-600 leading-normal">
            <strong>Espacio preparado para fotografías reales:</strong> Las imágenes expuestas a continuación representan los procesos de la empresa de manera conceptual y técnica, listas para ser reemplazadas por fotografías propias de CRICASA.
          </p>
        </div>

        {/* Malla de Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_DATA.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 hover:border-black/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <TechnicalIllustration type={item.svgType} />

                {/* Badge de Categoría */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider font-body">
                  {item.category}
                </div>

                {item.isReference && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-medium text-black font-body">
                    Referencia
                  </div>
                )}

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between font-body">
                <div>
                  <h3 className="font-display text-2xl text-[#101010] mb-2 leading-none uppercase tracking-wide group-hover:text-neutral-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Protocolo CRICASA</span>
                  <span className="font-semibold text-black uppercase tracking-wider">Cuidado profesional</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
