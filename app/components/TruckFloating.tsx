import React from "react";

interface TruckFloatingProps {
  className?: string;
}

/**
 * Fotografía real provista por el usuario del camión de Mudanzas CRICASA.
 * Requisitos técnicos estrictos para evitar desbordes y que el camión no ocupe toda la pantalla:
 * - width: 100%
 * - height: auto
 * - object-fit: contain
 * - max-width: 650px
 * - max-height: 480px
 * - Aspect-ratio original (959/675) para que el navegador reserve el espacio sin saltos ni desbordamientos
 * - Renderizado con etiqueta <img> directa para máxima compatibilidad con Tailwind y contención CSS estricta.
 */
export const TruckFloating: React.FC<TruckFloatingProps> = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center items-center select-none ${className}`}>
      {/* Contenedor acotado para escritorio y móvil */}
      <div className="w-full max-w-[650px] flex justify-center items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/camion-cricasa-hero.png"
          alt="Camión oficial de Mudanzas CRICASA"
          width={959}
          height={675}
          loading="eager"
          className="w-full h-auto max-w-[650px] max-h-[480px] object-contain block mx-auto"
          style={{
            maxWidth: "650px",
            maxHeight: "480px",
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};
