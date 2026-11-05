"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { COMPANY_CONFIG } from "../config/company";
import { buildWhatsAppQuoteUrl, QuoteFormData } from "../config/whatsapp";
import { useLanguage } from "../context/LanguageContext";

interface FormErrors {
  fullName?: string;
  serviceType?: string;
  originLocation?: string;
  destinationLocation?: string;
  estimatedDate?: string;
}

export const QuoteForm: React.FC = () => {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    serviceType: t.services.items[0]?.title || "",
    originLocation: "",
    destinationLocation: "",
    estimatedDate: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.quote.errors.fullNameRequired;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = t.quote.errors.fullNameLength;
    }

    if (!formData.serviceType.trim()) {
      newErrors.serviceType = t.quote.errors.serviceTypeRequired;
    }

    if (!formData.originLocation.trim()) {
      newErrors.originLocation = t.quote.errors.originRequired;
    }

    if (!formData.destinationLocation.trim()) {
      newErrors.destinationLocation = t.quote.errors.destinationRequired;
    }

    if (!formData.estimatedDate.trim()) {
      newErrors.estimatedDate = t.quote.errors.dateRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const whatsappUrl = buildWhatsAppQuoteUrl(formData);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      serviceType: t.services.items[0]?.title || "",
      originLocation: "",
      destinationLocation: "",
      estimatedDate: "",
      additionalNotes: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="presupuesto" className="py-24 lg:py-32 bg-[#F4F4F4] text-[#101010] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Informativa */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block font-body">
              {t.quote.badge}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-[#101010] tracking-wide uppercase leading-tight mb-6">
              {t.quote.titleMain} <br />
              <span className="text-neutral-500">{t.quote.titleHighlight}</span>
            </h2>

            <p className="font-body text-neutral-600 text-base leading-relaxed mb-8">
              {t.quote.subtitle}
            </p>

            {/* Beneficios directos de cotizar con CRICASA */}
            <div className="space-y-4 mb-8 font-body">
              {t.quote.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bloque de Contacto Directo */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm font-body">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                {language === "es" ? "Atención telefónica directa" : "Direct Phone Contact"}
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <a
                    href={`tel:${COMPANY_CONFIG.phone.raw}`}
                    className="font-display text-3xl text-black hover:text-neutral-700 transition-colors tracking-wide"
                  >
                    {COMPANY_CONFIG.phone.display}
                  </a>
                  <span className="text-xs text-neutral-500 block mt-0.5">
                    {COMPANY_CONFIG.hours}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F4F4F4] flex items-center justify-center text-black">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Columna Formulario */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-neutral-200 font-body">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl text-[#101010] uppercase mb-3">
                    {t.quote.successTitle}
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto mb-8">
                    {t.quote.successDesc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={buildWhatsAppQuoteUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.quote.openWhatsAppBtn}</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-neutral-300 text-neutral-700 text-xs font-bold uppercase tracking-wider hover:bg-neutral-50 transition-colors"
                    >
                      {t.quote.sendAnotherBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Nombre Completo */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      {t.quote.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t.quote.fullNamePlaceholder}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F8F8F8] border text-sm text-[#101010] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.fullName ? "border-red-500 bg-red-50/20" : "border-neutral-200"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Tipo de Servicio */}
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      {t.quote.serviceTypeLabel}
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F8F8F8] border border-neutral-200 text-sm text-[#101010] focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    >
                      {t.services.items.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Origen y Destino */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="originLocation" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t.quote.originLabel}
                      </label>
                      <input
                        type="text"
                        id="originLocation"
                        name="originLocation"
                        value={formData.originLocation}
                        onChange={handleChange}
                        placeholder={t.quote.originPlaceholder}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#F8F8F8] border text-sm text-[#101010] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                          errors.originLocation ? "border-red-500 bg-red-50/20" : "border-neutral-200"
                        }`}
                      />
                      {errors.originLocation && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.originLocation}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="destinationLocation" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        {t.quote.destinationLabel}
                      </label>
                      <input
                        type="text"
                        id="destinationLocation"
                        name="destinationLocation"
                        value={formData.destinationLocation}
                        onChange={handleChange}
                        placeholder={t.quote.destinationPlaceholder}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#F8F8F8] border text-sm text-[#101010] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                          errors.destinationLocation ? "border-red-500 bg-red-50/20" : "border-neutral-200"
                        }`}
                      />
                      {errors.destinationLocation && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.destinationLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Fecha Estimada */}
                  <div>
                    <label htmlFor="estimatedDate" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      {t.quote.dateLabel}
                    </label>
                    <input
                      type="date"
                      id="estimatedDate"
                      name="estimatedDate"
                      value={formData.estimatedDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#F8F8F8] border text-sm text-[#101010] focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        errors.estimatedDate ? "border-red-500 bg-red-50/20" : "border-neutral-200"
                      }`}
                    />
                    {errors.estimatedDate && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.estimatedDate}</span>
                      </p>
                    )}
                  </div>

                  {/* Detalles adicionales */}
                  <div>
                    <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      {t.quote.notesLabel}
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder={t.quote.notesPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F8F8] border border-neutral-200 text-sm text-[#101010] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                    />
                  </div>

                  {/* Botón de Envío */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-black/10 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>{t.quote.submitBtn}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                    <p className="text-center text-[11px] text-neutral-400 mt-3 leading-snug">
                      {t.quote.privacyNote}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
