import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};

export const metadata: Metadata = {
  title: "CRICASA | Mudanzas Profesionales y Traslados",
  description:
    "Más de 30 años acompañando mudanzas con experiencia, compromiso y cuidado en cada traslado. Mudanzas particulares, empresariales, embalaje, guardamuebles e izajes.",
  keywords: [
    "mudanzas",
    "cricasa",
    "mudanzas cricasa",
    "fletes y mudanzas",
    "mudanzas particulares",
    "mudanzas corporativas",
    "embalaje profesional",
    "guardamuebles",
    "izajes",
    "presupuesto mudanza",
  ],
  authors: [{ name: "CRICASA" }],
  openGraph: {
    title: "CRICASA | Más de 30 años de experiencia",
    description:
      "Mudanzas particulares, empresariales, embalajes y traslados seguros. Solicitá tu presupuesto directo por WhatsApp.",
    siteName: "CRICASA",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-[#101010]">
      <body className="bg-[#101010] text-[#111111] font-sans antialiased selection:bg-white selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
