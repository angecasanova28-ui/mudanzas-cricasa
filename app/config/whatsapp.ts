import { COMPANY_CONFIG } from "./company";

export interface QuoteFormData {
  fullName: string;
  serviceType: string;
  originLocation: string;
  destinationLocation: string;
  estimatedDate: string;
  additionalNotes?: string;
}

/**
 * Builds the WhatsApp direct chat URL with a complete, structured message.
 * Formats explicitly so the business receives a clean quote request identifying CRICASA.
 */
export function buildWhatsAppQuoteUrl(data: QuoteFormData): string {
  const number = COMPANY_CONFIG.whatsapp.number.replace(/[^0-9]/g, "");

  const lines = [
    `*SOLICITUD DE PRESUPUESTO - MUDANZAS CRICASA*`,
    ``,
    `Hola, me comunico desde la página web de Mudanzas CRICASA para solicitar cotización del siguiente servicio:`,
    ``,
    `• *Nombre:* ${data.fullName.trim()}`,
    `• *Servicio requerido:* ${data.serviceType.trim()}`,
    `• *Origen:* ${data.originLocation.trim()}`,
    `• *Destino:* ${data.destinationLocation.trim()}`,
    `• *Fecha estimada:* ${data.estimatedDate.trim()}`,
  ];

  if (data.additionalNotes && data.additionalNotes.trim()) {
    lines.push(`• *Detalles adicionales:* ${data.additionalNotes.trim()}`);
  }

  lines.push(``);
  lines.push(`Agradezco puedan informarme disponibilidad y costo estimado. Muchas gracias.`);

  const messageText = lines.join("\n");
  const encoded = encodeURIComponent(messageText);

  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Builds general WhatsApp inquiry URL
 */
export function buildWhatsAppGeneralUrl(customMessage?: string): string {
  const number = COMPANY_CONFIG.whatsapp.number.replace(/[^0-9]/g, "");
  const text = customMessage || COMPANY_CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
