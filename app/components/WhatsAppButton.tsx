"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { buildWhatsAppGeneralUrl } from "../config/whatsapp";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = buildWhatsAppGeneralUrl(
    "Hola CRICASA, estoy navegando en su sitio web y deseo consultar por un servicio de mudanza."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col select-none">
      {/* Tooltip flotante con diseño sobrio */}
      {showTooltip && (
        <div className="mb-2 max-w-xs bg-[#101010] text-white rounded-xl shadow-2xl border border-white/20 p-3.5 flex items-start gap-2.5 transition-all duration-300">
          <div className="flex-1 font-body">
            <span className="font-display text-base text-white tracking-wide block uppercase leading-none">
              Mudanzas CRICASA
            </span>
            <p className="text-[11px] text-neutral-300 mt-1 leading-snug">
              ¿Tiene dudas sobre su mudanza? Escríbanos para recibir asesoramiento rápido.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar sugerencia de WhatsApp"
            className="text-neutral-400 hover:text-white p-0.5 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón flotante monocromático de alto impacto con blanco y negro */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Mudanzas CRICASA por WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-white text-black hover:bg-neutral-200 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20 border border-neutral-300"
      >
        <span className="sr-only">Contactar a Mudanzas CRICASA por WhatsApp</span>
        <MessageSquare className="w-6 h-6 text-black" />

        {/* Punto de estado activo */}
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black" />
        </span>
      </a>
    </div>
  );
};
