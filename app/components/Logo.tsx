import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

/**
 * Componente oficial de Logo para Mudanzas CRICASA.
 * Muestra el isotipo oficial MC nítido y transparente junto con el nombre
 * "MUDANZAS CRICASA" con presencia, elegancia y excelente legibilidad en cualquier dispositivo.
 */
export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
}) => {
  const isDark = variant === "dark";

  const config = {
    sm: {
      width: 38,
      height: 32,
      textSize: "text-xs sm:text-sm tracking-[0.16em]",
    },
    md: {
      width: 48,
      height: 40,
      textSize: "text-sm sm:text-base tracking-[0.18em]",
    },
    lg: {
      width: 60,
      height: 50,
      textSize: "text-base sm:text-lg tracking-[0.20em]",
    },
  }[size];

  const logoSrc = isDark
    ? "/images/logo-cricasa-white.png"
    : "/images/logo-cricasa-dark.png";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none group ${className}`}>
      {/* Isotipo MC oficial con dimensiones calibradas */}
      <div className="relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
        <Image
          src={logoSrc}
          alt="Isotipo Mudanzas CRICASA"
          width={config.width}
          height={config.height}
          className="object-contain w-auto h-7 sm:h-9"
          priority
        />
      </div>

      {/* Nombre oficial: MUDANZAS CRICASA */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-body font-black uppercase ${config.textSize} leading-none ${
            isDark ? "text-white" : "text-[#101010]"
          }`}
        >
          MUDANZAS CRICASA
        </span>
      </div>
    </div>
  );
};
