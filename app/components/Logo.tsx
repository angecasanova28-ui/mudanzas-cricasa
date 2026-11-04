import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light"; // "dark" para fondos negros (#101010), "light" para fondos claros
  size?: "sm" | "md" | "lg";
}

/**
 * Componente oficial de Logo para Mudanzas CRICASA.
 * Muestra el isotipo transparente y al lado el texto completo "MUDANZAS CRICASA"
 * en blanco puro, mayúsculas, con tipografía elegante, refinada y cuidada.
 */
export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
}) => {
  const isDark = variant === "dark";

  // Dimensiones del isotipo y tamaños de fuente adaptables
  const config = {
    sm: {
      width: 44,
      height: 38,
      textSize: "text-sm tracking-[0.2em]",
    },
    md: {
      width: 52,
      height: 44,
      textSize: "text-base sm:text-lg tracking-[0.22em]",
    },
    lg: {
      width: 68,
      height: 58,
      textSize: "text-lg sm:text-xl tracking-[0.25em]",
    },
  }[size];

  const logoSrc = isDark
    ? "/images/logo-cricasa-white.png"
    : "/images/logo-cricasa-dark.png";

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
      {/* Isotipo: solo las letras del logo original sin fondo */}
      <div className="relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
        <Image
          src={logoSrc}
          alt="Isotipo Mudanzas CRICASA"
          width={config.width}
          height={config.height}
          className="object-contain"
          priority
        />
      </div>

      {/* Texto: MUDANZAS CRICASA en blanco puro, mayúsculas, tipografía estética y elegante */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-body font-extrabold uppercase ${config.textSize} leading-none ${
            isDark ? "text-white" : "text-[#101010]"
          }`}
          style={{ letterSpacing: "0.22em" }}
        >
          MUDANZAS CRICASA
        </span>
      </div>
    </div>
  );
};
