import React from "react";
import Image from "next/image";

interface TruckFloatingProps {
  className?: string;
}

/**
 * Fotografía real provista por el usuario del camión de Mudanzas CRICASA.
 * Integración sobre fondo negro:
 * - Sin halos, sin bordes blancos, sin líneas artificiales.
 * - Proporciones originales conservadas (959/675) con object-fit: contain.
 * - Vehículo íntegro sin recortes (ruedas, llantas, cabina, caja, espejos).
 */
export const TruckFloating: React.FC<TruckFloatingProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full flex flex-col items-center select-none ${className}`}>
      <div className="relative w-full max-w-2xl aspect-[959/675]">
        <Image
          src="/images/camion-cricasa-hero.png"
          alt="Camión oficial de Mudanzas CRICASA"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 680px"
          className="object-contain"
        />
      </div>
    </div>
  );
};
