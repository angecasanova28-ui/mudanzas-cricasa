import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Differentials } from "./components/Differentials";
import { Gallery } from "./components/Gallery";
import { Coverage } from "./components/Coverage";
import { QuoteForm } from "./components/QuoteForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101820]">
      {/* 1. Barra de navegación fija con menú responsive */}
      <Navbar />

      {/* Contenido principal en una sola página fluida */}
      <main className="flex-1">
        {/* 2. Hero principal */}
        <Hero />

        {/* 3. Presentación de la empresa (About) */}
        <About />

        {/* 4. Tarjetas de servicios */}
        <Services />

        {/* 5. Diferenciales de CRICASA */}
        <Differentials />

        {/* 6. Galería fotográfica de referencia / reemplazable */}
        <Gallery />

        {/* 7. Zona de cobertura configurable */}
        <Coverage />

        {/* 8. Formulario de solicitud de presupuesto con derivación a WhatsApp */}
        <QuoteForm />
      </main>

      {/* 9. Contacto y Footer corporativo */}
      <Footer />

      {/* 10. Botón flotante accesible de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
