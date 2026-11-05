"use client";

import React from "react";
import { Phone, Mail, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="bg-[#101010] text-neutral-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Columna Marca */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="dark" size="md" />
            <p className="font-body text-sm text-neutral-400 max-w-sm leading-relaxed mt-4">
              {t.footer.tagline}
            </p>

            <div className="pt-2 text-xs text-neutral-400 flex items-center gap-2 font-body">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>{t.footer.hours}</span>
            </div>
          </div>

          {/* Columna Enlaces de Navegación */}
          <div className="lg:col-span-3 space-y-3 font-body">
            <h4 className="font-display text-xl text-white uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-white transition-colors">
                  {t.nav.coverage}
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  {t.gallery.badge}
                </a>
              </li>
              <li>
                <a href="#presupuesto" className="hover:text-white transition-colors">
                  {t.nav.quoteBtn}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Contacto */}
          <div className="lg:col-span-4 space-y-4 font-body">
            <h4 className="font-display text-xl text-white uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </h4>

            {/* Teléfono */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 block">{t.footer.phoneLabel}</span>
                <a
                  href={`tel:${COMPANY_CONFIG.phone.raw}`}
                  className="text-sm font-bold text-white hover:underline transition-colors"
                >
                  {COMPANY_CONFIG.phone.display}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white mt-0.5">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 block">{t.footer.whatsappLabel}</span>
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsapp.number.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>{COMPANY_CONFIG.whatsapp.display}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-neutral-400 block">{t.footer.emailLabel}</span>
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="text-sm font-bold text-white hover:underline transition-colors"
                >
                  {COMPANY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-neutral-400 font-body flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} CRICASA. {t.footer.rights}</p>
          <p className="text-neutral-400">
            {t.footer.familyFooter}
          </p>
        </div>
      </div>
    </footer>
  );
};
