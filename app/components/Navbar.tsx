"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitch } from "./LanguageSwitch";
import { useLanguage } from "../context/LanguageContext";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.services, href: "#servicios" },
    { name: t.nav.about, href: "#nosotros" },
    { name: t.nav.coverage, href: "#cobertura" },
    { name: t.nav.contact, href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101010]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/50"
          : "bg-[#101010] py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* CRICASA a la izquierda */}
          <a
            href="#hero"
            aria-label="Inicio Mudanzas CRICASA"
            className="focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded py-1 flex items-center"
          >
            <Logo variant="dark" size="md" />
          </a>

          {/* Enlaces horizontales: Inicio, Servicios, Nosotros, Cobertura, Contacto */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center space-x-7 lg:space-x-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest uppercase text-neutral-300 hover:text-white transition-colors duration-200 relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Selector de idioma ES/EN y Botón a la derecha */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitch />

            <a
              href="#presupuesto"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-md transform hover:-translate-y-0.5"
            >
              <span>{t.nav.quoteBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

          {/* Menú móvil y Selector de idioma en responsive */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitch />

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil desplegable */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#101010] border-b border-white/10 px-4 pt-4 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 rounded text-sm font-semibold tracking-wide text-neutral-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-white/10">
            <a
              href="#presupuesto"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black text-xs font-bold uppercase tracking-wider text-center shadow"
            >
              <span>{t.nav.quoteBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
