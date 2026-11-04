"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA, COMPANY_CONFIG } from "../config/company";
import { buildWhatsAppQuoteUrl, QuoteFormData } from "../config/whatsapp";

interface FormErrors {
  fullName?: string;
  serviceType?: string;
  originLocation?: string;
  destinationLocation?: string;
  estimatedDate?: string;
}

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    serviceType: SERVICES_DATA[0].title,
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
      newErrors.fullName = "Por favor, ingrese su nombre y apellido.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!formData.serviceType.trim()) {
      newErrors.serviceType = "Seleccione el tipo de servicio requerido.";
    }

    if (!formData.originLocation.trim()) {
      newErrors.originLocation = "Indique la localidad o barrio de origen.";
    }

    if (!formData.destinationLocation.trim()) {
      newErrors.destinationLocation = "Indique la localidad o barrio de destino.";
    }

    if (!formData.estimatedDate.trim()) {
      newErrors.estimatedDate = "Seleccione una fecha estimada para el traslado.";
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

    const waUrl = buildWhatsAppQuoteUrl(formData);
    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="presupuesto" className="py-24 lg:py-32 bg-[#101010] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Informativa de Conversión */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block font-body">
              Atención Directa
            </span>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase leading-tight mb-6">
              SOLICITÁ TU PRESUPUESTO <br />
              <span className="text-neutral-400">POR WHATSAPP.</span>
            </h2>

            <p className="font-body text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              Completá los datos básicos del traslado para generar tu consulta detallada y recibir una cotización directa y personalizada de Mudanzas CRICASA.
            </p>

            <div className="space-y-4 mb-8 font-body">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Respuesta Directa</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Evaluamos volumen, pisos y distancias para responderle a la brevedad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sin Intermediarios</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Comunicación directa con los responsables operativos de CRICASA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Claridad Total</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Presupuesto pactado previamente sin costos imprevistos.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-400 font-body">
              <span className="text-white font-bold block mb-1 uppercase tracking-wider">
                ¿Prefiere llamar telefónicamente?
              </span>
              Línea directa para coordinar mudanzas:{" "}
              <a
                href={`tel:${COMPANY_CONFIG.phone.raw}`}
                className="text-white font-bold underline hover:text-neutral-200"
              >
                {COMPANY_CONFIG.phone.display}
              </a>
              .
            </div>
          </div>

          {/* Formulario en Fondo Blanco Puro con Máximo Contraste */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#101010] rounded-2xl p-7 sm:p-10 shadow-2xl border border-neutral-200">
              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl text-[#101010] uppercase tracking-wide">
                  Formulario de Consulta
                </h3>
                <p className="text-xs text-neutral-500 mt-1 font-body">
                  Complete los datos requeridos para estructurar su presupuesto.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-neutral-100 border border-neutral-300 text-black text-xs font-body flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">¡Consulta enviada a WhatsApp!</span>
                    Se ha abierto una conversación en WhatsApp con los datos de su mudanza. Si no abrió, presione nuevamente el botón.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 font-body">
                {/* Nombre Completo */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-black focus:outline-none focus:ring-1 transition-all ${
                      errors.fullName
                        ? "border-red-500 focus:ring-red-400 bg-red-50/20"
                        : "border-neutral-300 focus:border-black focus:ring-black bg-[#FAFAFA]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Tipo de Servicio */}
                <div>
                  <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Tipo de Servicio *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-black focus:outline-none focus:ring-1 transition-all ${
                      errors.serviceType
                        ? "border-red-500 focus:ring-red-400 bg-red-50/20"
                        : "border-neutral-300 focus:border-black focus:ring-black bg-[#FAFAFA]"
                    }`}
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.serviceType}</span>
                    </p>
                  )}
                </div>

                {/* Localidades: Origen y Destino */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="originLocation" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Localidad de Origen *
                    </label>
                    <input
                      type="text"
                      id="originLocation"
                      name="originLocation"
                      value={formData.originLocation}
                      onChange={handleChange}
                      placeholder="Ej. Belgrano / Palermo"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-black focus:outline-none focus:ring-1 transition-all ${
                        errors.originLocation
                          ? "border-red-500 focus:ring-red-400 bg-red-50/20"
                          : "border-neutral-300 focus:border-black focus:ring-black bg-[#FAFAFA]"
                      }`}
                    />
                    {errors.originLocation && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.originLocation}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="destinationLocation" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Localidad de Destino *
                    </label>
                    <input
                      type="text"
                      id="destinationLocation"
                      name="destinationLocation"
                      value={formData.destinationLocation}
                      onChange={handleChange}
                      placeholder="Ej. Vicente López / Ramos Mejía"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-black focus:outline-none focus:ring-1 transition-all ${
                        errors.destinationLocation
                          ? "border-red-500 focus:ring-red-400 bg-red-50/20"
                          : "border-neutral-300 focus:border-black focus:ring-black bg-[#FAFAFA]"
                      }`}
                    />
                    {errors.destinationLocation && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.destinationLocation}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Fecha Estimada */}
                <div>
                  <label htmlFor="estimatedDate" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Fecha Estimada de la Mudanza *
                  </label>
                  <input
                    type="date"
                    id="estimatedDate"
                    name="estimatedDate"
                    value={formData.estimatedDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-black focus:outline-none focus:ring-1 transition-all ${
                      errors.estimatedDate
                        ? "border-red-500 focus:ring-red-400 bg-red-50/20"
                        : "border-neutral-300 focus:border-black focus:ring-black bg-[#FAFAFA]"
                    }`}
                  />
                  {errors.estimatedDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.estimatedDate}</span>
                    </p>
                  )}
                </div>

                {/* Detalles adicionales / Notas */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Detalles Adicionales (Opcional)
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={2}
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Ej. Cantidad de ambientes, pisos por escalera o necesidad de izaje..."
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-none bg-[#FAFAFA]"
                  />
                </div>

                {/* Botón de Envío: Fondo Negro Sólido, Letras Blancas, Elegante y de Alto Contraste */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-widest shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Solicitar presupuesto por WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                  <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                    Se abrirá WhatsApp con el mensaje estructurado de Mudanzas CRICASA listo para enviar.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
