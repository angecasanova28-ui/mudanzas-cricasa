export type Language = "es" | "en";

export const translations = {
  es: {
    // Navbar
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      coverage: "Cobertura",
      contact: "Contacto",
      quoteBtn: "Solicitar presupuesto",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú",
    },

    // Hero
    hero: {
      badge: "30 años de experiencia y trayectoria",
      titleMain: "TU MUDANZA,",
      titleHighlight: "EN BUENAS MANOS.",
      description:
        "Más de 30 años acompañando mudanzas con experiencia, compromiso y cuidado en cada traslado.",
      quoteBtn: "Solicitar presupuesto",
      servicesBtn: "Conocer nuestros servicios",
      stats: {
        yearsNumber: "+30 AÑOS",
        yearsLabel: "Trayectoria real",
        directNumber: "100% DIRECTO",
        directLabel: "Cotización por WhatsApp",
        familyNumber: "FAMILIAR",
        familyLabel: "Base en Funes, Santa Fe",
      },
    },

    // About
    about: {
      badge: "Sobre Mudanzas CRICASA",
      titleMain: "EXPERIENCIA QUE SE NOTA",
      titleHighlight: "EN CADA MUDANZA.",
      p1: "CRICASA es una empresa familiar con más de 30 años de experiencia ininterrumpida en el rubro del transporte y la mudanza. A lo largo de estas décadas, hemos consolidado una metodología de trabajo basada en el compromiso genuino, la responsabilidad operativa y el trato directo.",
      p2: "Sabemos que una mudanza no es simplemente trasladar cajas y muebles de un punto a otro; representa un cambio de etapa de vida o la renovación del espacio laboral. Por eso, tratamos cada objeto y pertenencia con el mayor cuidado, brindando tranquilidad a nuestros clientes en cada paso.",
      pillar1Title: "Compromiso Real",
      pillar1Desc:
        "Cumplimiento estricto de las condiciones, fechas y presupuestos acordados sin improvisaciones.",
      pillar2Title: "Personal de Oficio",
      pillar2Desc:
        "Estibadores capacitados en maniobras seguras de muebles y equipos delicados.",
      cardBadge: "Tradición y oficio",
      cardYears: "+30 AÑOS",
      cardDesc:
        "Creciendo de manera constante gracias a la recomendación de cada cliente que confía en nuestro trabajo familiar y profesional.",
      item1Title: "Atención directa de sus dueños",
      item1Desc:
        "Seguimiento minucioso de cada servicio para asegurar la máxima calidad.",
      item2Title: "Seguridad y custodia de carga",
      item2Desc:
        "Materiales de amortiguación, mantas y amarres técnicos certificados.",
    },

    // Services
    services: {
      badge: "Nuestros Servicios",
      titleMain: "SOLUCIONES INTEGRALES",
      titleHighlight: "PARA CADA TIPO DE TRASLADO.",
      subtitle:
        "Cobertura completa de servicios para mudanzas residenciales y corporativas con equipamiento adecuado y personal capacitado.",
      quoteBtn: "Consultar servicio",
      items: [
        {
          id: "particulares",
          title: "Mudanzas particulares",
          shortDescription:
            "Traslados para departamentos, casas particulares y residencias, con cuidado riguroso de cada uno de sus bienes.",
          features: [
            "Cuidado de pisos y paredes",
            "Carga y descarga cuidadosa",
            "Coordinación horaria puntual",
          ],
        },
        {
          id: "empresariales",
          title: "Mudanzas empresariales",
          shortDescription:
            "Traslados de oficinas, puestos de trabajo, equipamiento informático, archivos y mobiliario corporativo.",
          features: [
            "Coordinación de tiempos comerciales",
            "Traslado de puestos y archivo",
            "Personal debidamente capacitado",
          ],
        },
        {
          id: "embalaje",
          title: "Embalaje y protección de pertenencias",
          shortDescription:
            "Suministro y aplicación de materiales de primera calidad para la total seguridad de vajilla, cuadros y objetos frágiles.",
          features: [
            "Mantas de protección y film",
            "Material especial para vajilla",
            "Identificación y rotulado de cajas",
          ],
        },
        {
          id: "guardamuebles",
          title: "Guardamuebles",
          shortDescription:
            "Espacios cerrados, secos y vigilados para el resguardo de su mobiliario por días, meses o estadías prolongadas.",
          features: [
            "Espacios limpios y acondicionados",
            "Control de acceso",
            "Inventario detallado de ingreso",
          ],
        },
        {
          id: "izajes",
          title: "Izajes y trabajos en altura",
          shortDescription:
            "Elevación y descenso exterior de muebles y objetos de gran porte por balcón o terraza cuando no entran por ascensor o escalera.",
          features: [
            "Equipamiento certificado",
            "Personal especializado",
            "Evaluación previa de viabilidad",
          ],
        },
        {
          id: "armado-desarmado",
          title: "Armado y desarmado de muebles",
          shortDescription:
            "Desmontaje cuidadoso de placares, camas, mesas y módulos complejos en origen y su correspondiente rearmado en destino.",
          features: [
            "Herramental profesional",
            "Resguardo de herrajes",
            "Nivelación y ajuste final",
          ],
        },
        {
          id: "mascotas",
          title: "Traslado de mascotas",
          shortDescription:
            "Acompañamiento seguro y amigable para el traslado de sus animales de compañía durante la jornada de mudanza.",
          features: [
            "Atención tranquila y cordial",
            "Vehículos acondicionados",
            "Coordinación directa con la familia",
          ],
        },
      ],
    },

    // Differentials
    differentials: {
      badge: "Nuestros Diferenciales",
      titleMain: "¿POR QUÉ ELEGIR",
      titleHighlight: "MUDANZAS CRICASA?",
      subtitle:
        "Una trayectoria fundamentada en el trabajo serio, la honestidad y la máxima atención hacia cada una de sus pertenencias.",
      pillarBadge: "Pilar fundamental",
      items: [
        {
          title: "Más de 30 años de experiencia",
          description:
            "Tres décadas ininterrumpidas de trayectoria familiar en el rubro, perfeccionando métodos y respondiendo con solvencia ante cada desafío logístico.",
        },
        {
          title: "Atención personalizada",
          description:
            "Trato directo, claro y honesto desde el primer contacto por WhatsApp o llamada, atendiendo los requerimientos específicos de cada mudanza.",
        },
        {
          title: "Cuidado riguroso de pertenencias",
          description:
            "Tratamos cada objeto con respeto, empleando protecciones adecuadas, estiba equilibrada y personal con oficio real de estibado.",
        },
        {
          title: "Soluciones para diferentes tipos de mudanzas",
          description:
            "Desde departamentos compactos hasta traslados corporativos e izajes de alta complejidad, contamos con la logística adecuada.",
        },
      ],
    },

    // Gallery
    gallery: {
      badge: "Galería Operativa",
      titleMain: "TRABAJO EN ACCIÓN",
      titleHighlight: "Y EQUIPAMIENTO.",
      subtitle:
        "Procesos, técnicas de estiba y medios de protección implementados en cada servicio para asegurar un traslado sin imprevistos.",
      tag: "Registro Operativo",
      items: [
        {
          title: "Estiba y protección de carga",
          category: "Traslados particulares",
          description:
            "Acondicionamiento interno de la unidad y fijación segura de muebles con correas de sujeción.",
        },
        {
          title: "Protección minuciosa de mobiliario",
          category: "Embalaje",
          description:
            "Aplicación de film de alta resistencia y mantas protectoras antes del egreso del domicilio.",
        },
        {
          title: "Operativo de izaje exterior",
          category: "Trabajos en altura",
          description:
            "Maniobras seguras con sogas y poleas certificadas para piezas que superan los accesos comunes.",
        },
        {
          title: "Mudanza de puestos corporativos",
          category: "Traslados comerciales",
          description:
            "Etiquetado correlativo de mobiliario y material de oficina para reinstalación inmediata.",
        },
        {
          title: "Acondicionamiento para guardamuebles",
          category: "Custodia transitoria",
          description:
            "Disposición ordenada en box exclusivo protegido contra humedad y factores ambientales.",
        },
        {
          title: "Viaje protegido para mascotas",
          category: "Bienestar familiar",
          description:
            "Ambiente ventilado y supervisado para que su animal de compañía viaje con calma.",
        },
      ],
    },

    // Coverage
    coverage: {
      badge: "Alcance Logístico",
      title: "Zonas y cobertura de servicios",
      subtitle:
        "Estructura logística con base operativa en Funes, Santa Fe. Coordinación diaria para traslados locales y de media distancia.",
      note: "Consúltenos directamente por WhatsApp o teléfono indicando sus puntos de carga y descarga.",
      zones: [
        {
          region: "Funes, Rosario y Gran Rosario",
          description:
            "Operativa constante y traslados diarios para mudanzas particulares y corporativas.",
          featuredAreas: ["Funes", "Rosario", "Roldán", "Fisherton", "Gran Rosario"],
        },
        {
          region: "Provincia de Santa Fe y Media Distancia",
          description:
            "Servicios programados y traslados de media y larga distancia con reserva previa.",
          featuredAreas: [
            "Localidades de Santa Fe",
            "Corredor regional",
            "Barrios cerrados y countries",
          ],
        },
        {
          region: "Larga Distancia",
          description:
            "Mudanzas y traslados punto a punto hacia el resto del país y países limítrofes, con logística dedicada y programación exclusiva.",
          featuredAreas: [
            "Resto del país",
            "Países limítrofes",
            "Traslados exclusivos",
            "Coordinación logística",
          ],
        },
      ],
      notListedTitle: "¿SU DESTINO NO FIGURA EN LA LISTA?",
      notListedDesc:
        "Coordinamos con frecuencia rutas especiales y traslados punto a punto con reserva anticipada. Consúltenos directamente indicando su origen y destino.",
      point1: "Evaluación de ruta y accesibilidad",
      point2: "Reserva confirmada de fecha y horario",
      point3: "Atención y asesoramiento sin intermediarios",
      ctaBtn: "Consultar por mi localidad",
    },

    // QuoteForm
    quote: {
      badge: "Cotización Inmediata",
      titleMain: "SOLICITE SU PRESUPUESTO",
      titleHighlight: "DIRECTO POR WHATSAPP.",
      subtitle:
        "Complete los datos clave de su traslado para recibir una propuesta clara, transparente y ajustada a sus necesidades reales.",
      features: [
        "Respuesta rápida en horario comercial",
        "Sin compromisos ni cargos ocultos",
        "Asesoramiento personalizado sobre embalaje",
      ],
      fullNameLabel: "Nombre y Apellido *",
      fullNamePlaceholder: "Ej: Juan Pérez",
      serviceTypeLabel: "Tipo de Servicio *",
      originLabel: "Localidad de Origen *",
      originPlaceholder: "Ej: Funes (Centro)",
      destinationLabel: "Localidad de Destino *",
      destinationPlaceholder: "Ej: Rosario (Pichincha)",
      dateLabel: "Fecha Estimada de Mudanza *",
      notesLabel: "Detalles adicionales (muebles pesados, pisos por escalera, etc.)",
      notesPlaceholder:
        "Ej: Departamento en 3er piso por escalera, 1 heladera, mesa con 6 sillas, 15 cajas...",
      submitBtn: "Enviar solicitud por WhatsApp",
      privacyNote:
        "Al hacer clic se abrirá una conversación en WhatsApp con todos los datos ordenados para que le respondamos de inmediato.",
      successTitle: "¡Solicitud armada con éxito!",
      successDesc:
        "Si WhatsApp no se abrió automáticamente, haga clic en el botón de abajo para iniciar la conversación.",
      openWhatsAppBtn: "Abrir WhatsApp manualmente",
      sendAnotherBtn: "Editar o enviar otra consulta",
      errors: {
        fullNameRequired: "Por favor, ingrese su nombre y apellido.",
        fullNameLength: "El nombre debe tener al menos 3 caracteres.",
        serviceTypeRequired: "Seleccione el tipo de servicio requerido.",
        originRequired: "Indique la localidad o barrio de origen.",
        destinationRequired: "Indique la localidad o barrio de destino.",
        dateRequired: "Seleccione una fecha estimada para el traslado.",
      },
    },

    // Footer
    footer: {
      tagline:
        "Más de 30 años acompañando traslados con dedicación, seriedad y el máximo cuidado en cada detalle. Su mudanza, en buenas manos.",
      hours: "Lunes a Sábado de 08:00 a 19:00 hs",
      navTitle: "Navegación",
      contactTitle: "Atención Directa",
      phoneLabel: "Llamadas directas",
      whatsappLabel: "WhatsApp de cotizaciones",
      emailLabel: "Correo corporativo",
      rights: "Todos los derechos reservados.",
      familyFooter:
        "Empresa familiar de mudanzas y transporte con más de 30 años de trayectoria.",
    },

    // WhatsAppButton
    whatsappButton: {
      tooltipTitle: "Mudanzas CRICASA",
      tooltipDesc:
        "¿Tiene dudas sobre su mudanza? Escríbanos para recibir asesoramiento rápido.",
      ariaLabel: "Contactar a Mudanzas CRICASA por WhatsApp",
    },
  },

  en: {
    // Navbar
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      coverage: "Coverage",
      contact: "Contact",
      quoteBtn: "Request Quote",
      openMenu: "Open navigation menu",
      closeMenu: "Close menu",
    },

    // Hero
    hero: {
      badge: "30 years of experience and track record",
      titleMain: "YOUR MOVE,",
      titleHighlight: "IN GOOD HANDS.",
      description:
        "Over 30 years handling moves with experience, commitment, and genuine care in every transfer.",
      quoteBtn: "Request Quote",
      servicesBtn: "Discover Our Services",
      stats: {
        yearsNumber: "+30 YEARS",
        yearsLabel: "Proven Experience",
        directNumber: "100% DIRECT",
        directLabel: "Quotes via WhatsApp",
        familyNumber: "FAMILY-OWNED",
        familyLabel: "Based in Funes, Santa Fe",
      },
    },

    // About
    about: {
      badge: "About CRICASA Movers",
      titleMain: "EXPERIENCE THAT SHOWS",
      titleHighlight: "IN EVERY MOVE.",
      p1: "CRICASA is a family business with over 30 years of uninterrupted experience in moving and freight transport. Across these decades, we have established a working methodology based on genuine commitment, operational responsibility, and direct communication.",
      p2: "We know that a move isn't just about moving boxes and furniture from one place to another; it represents a major life transition or an updated workspace. That's why we handle every single item with the utmost care, giving our clients total peace of mind every step of the way.",
      pillar1Title: "Real Commitment",
      pillar1Desc:
        "Strict adherence to agreed conditions, schedules, and quotes without improvisation.",
      pillar2Title: "Skilled Movers",
      pillar2Desc:
        "Trained handlers experienced in safely managing fragile furniture and delicate items.",
      cardBadge: "Tradition & Craftsmanship",
      cardYears: "+30 YEARS",
      cardDesc:
        "Constantly growing thanks to the recommendations of every customer who trusts our family and professional service.",
      item1Title: "Direct owner supervision",
      item1Desc:
        "Thorough oversight of each service to ensure top quality standards.",
      item2Title: "Cargo safety and protection",
      item2Desc:
        "Cushioning materials, thick blankets, and certified technical strapping.",
    },

    // Services
    services: {
      badge: "Our Services",
      titleMain: "COMPREHENSIVE SOLUTIONS",
      titleHighlight: "FOR EVERY MOVE.",
      subtitle:
        "Complete service coverage for residential and commercial moves with appropriate equipment and trained staff.",
      quoteBtn: "Inquire about service",
      items: [
        {
          id: "particulares",
          title: "Residential Moving",
          shortDescription:
            "Relocations for apartments, homes, and private residences with meticulous care for all your belongings.",
          features: [
            "Floor and wall protection",
            "Careful loading and unloading",
            "Punctual schedule coordination",
          ],
        },
        {
          id: "empresariales",
          title: "Commercial Moving",
          shortDescription:
            "Relocations of offices, workstations, IT equipment, archives, and corporate furniture.",
          features: [
            "Coordinated business hours",
            "Workstation and file moving",
            "Properly trained personnel",
          ],
        },
        {
          id: "embalaje",
          title: "Packing & Protection",
          shortDescription:
            "Supply and application of premium materials for the total protection of glassware, artwork, and fragile items.",
          features: [
            "Protective blankets and stretch film",
            "Specialized materials for china",
            "Clear labeling and inventory",
          ],
        },
        {
          id: "guardamuebles",
          title: "Storage Units",
          shortDescription:
            "Secure, dry, and monitored spaces to store your furniture for days, months, or extended periods.",
          features: [
            "Clean and conditioned spaces",
            "Strict access control",
            "Detailed intake inventory",
          ],
        },
        {
          id: "izajes",
          title: "Exterior Hoisting & High-Altitude",
          shortDescription:
            "Exterior hoisting and lowering of bulky furniture via balconies or terraces when stairways or elevators aren't an option.",
          features: [
            "Certified rigging equipment",
            "Specialized operators",
            "Prior feasibility evaluation",
          ],
        },
        {
          id: "armado-desarmado",
          title: "Furniture Assembly & Disassembly",
          shortDescription:
            "Careful dismantling of closets, beds, tables, and complex modular units at origin, and precise reassembly at destination.",
          features: [
            "Professional toolkits",
            "Hardware safekeeping",
            "Final leveling and adjustment",
          ],
        },
        {
          id: "mascotas",
          title: "Pet Relocation Support",
          shortDescription:
            "Safe and friendly assistance in moving your family pets comfortably on moving day.",
          features: [
            "Calm and gentle care",
            "Properly ventilated vehicles",
            "Direct family coordination",
          ],
        },
      ],
    },

    // Differentials
    differentials: {
      badge: "Why Choose Us",
      titleMain: "WHY CHOOSE",
      titleHighlight: "CRICASA MOVERS?",
      subtitle:
        "A long track record built on dependability, integrity, and the greatest care for all your belongings.",
      pillarBadge: "Core Pillar",
      items: [
        {
          title: "Over 30 years of experience",
          description:
            "Three decades of continuous family leadership in transport, perfecting our methods and handling every logistical challenge smoothly.",
        },
        {
          title: "Personalized attention",
          description:
            "Direct, straightforward, and honest communication from the very first contact via WhatsApp or phone call.",
        },
        {
          title: "Meticulous care for your goods",
          description:
            "We treat every item with deep respect, utilizing proper protective gear, balanced stowage, and truly experienced movers.",
        },
        {
          title: "Solutions for all move types",
          description:
            "From compact studios to corporate relocations and complex external hoisting, we have the right logistics.",
        },
      ],
    },

    // Gallery
    gallery: {
      badge: "Operations Gallery",
      titleMain: "WORK IN ACTION",
      titleHighlight: "& EQUIPMENT.",
      subtitle:
        "Techniques, stowage methods, and protective materials deployed in every service to guarantee a trouble-free move.",
      tag: "Operational Record",
      items: [
        {
          title: "Stowage & Cargo Fastening",
          category: "Residential Moving",
          description:
            "Interior vehicle conditioning and secure furniture strapping with heavy-duty tie-downs.",
        },
        {
          title: "Meticulous Furniture Wrapping",
          category: "Packing",
          description:
            "Application of heavy-duty stretch film and moving blankets before leaving the residence.",
        },
        {
          title: "Exterior Hoisting Operation",
          category: "High-Altitude Work",
          description:
            "Safe operations with certified ropes and pulleys for items too large for regular accessways.",
        },
        {
          title: "Corporate Workstation Relocation",
          category: "Commercial Moving",
          description:
            "Numbered tagging of furniture and office supplies for instant setup at the new destination.",
        },
        {
          title: "Preparation for Secure Storage",
          category: "Temporary Storage",
          description:
            "Neat arrangement inside dedicated storage units protected against moisture and weather elements.",
        },
        {
          title: "Safe Transport for Pets",
          category: "Family Well-being",
          description:
            "Ventilated and supervised space to ensure your companion animals travel comfortably.",
        },
      ],
    },

    // Coverage
    coverage: {
      badge: "Logistics Reach",
      title: "Service Areas and Coverage",
      subtitle:
        "Operational base in Funes, Santa Fe. Daily logistics and coordination for local, regional, and long-distance moves.",
      note: "Contact us directly via WhatsApp or phone specifying your pickup and delivery locations.",
      zones: [
        {
          region: "Funes, Rosario & Greater Rosario",
          description:
            "Constant operations and daily transfers for residential and business moves.",
          featuredAreas: ["Funes", "Rosario", "Roldán", "Fisherton", "Greater Rosario"],
        },
        {
          region: "Santa Fe Province & Medium Distance",
          description:
            "Scheduled transfers and medium/long distance moves booked in advance.",
          featuredAreas: [
            "Santa Fe Towns",
            "Regional Corridor",
            "Gated Communities & Subdivisions",
          ],
        },
        {
          region: "Long Distance",
          description:
            "Point-to-point moves across Argentina and bordering countries, with dedicated logistics and exclusive scheduling.",
          featuredAreas: [
            "Rest of Argentina",
            "Bordering Countries",
            "Exclusive Transfers",
            "Logistics Management",
          ],
        },
      ],
      notListedTitle: "IS YOUR DESTINATION NOT LISTED?",
      notListedDesc:
        "We regularly arrange custom routes and direct door-to-door trips with advance booking. Message us directly with your origin and destination.",
      point1: "Route and accessibility assessment",
      point2: "Confirmed date and schedule reservation",
      point3: "Direct guidance with no intermediaries",
      ctaBtn: "Inquire about my location",
    },

    // QuoteForm
    quote: {
      badge: "Instant Estimate",
      titleMain: "REQUEST YOUR QUOTE",
      titleHighlight: "DIRECTLY VIA WHATSAPP.",
      subtitle:
        "Fill out the key details of your move to receive a clear, honest estimate tailored to your real needs.",
      features: [
        "Prompt response during business hours",
        "No hidden fees or obligations",
        "Personalized packing advice",
      ],
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "e.g. John Doe",
      serviceTypeLabel: "Service Type *",
      originLabel: "Origin City / Neighborhood *",
      originPlaceholder: "e.g. Funes (Downtown)",
      destinationLabel: "Destination City / Neighborhood *",
      destinationPlaceholder: "e.g. Rosario (Pichincha)",
      dateLabel: "Estimated Moving Date *",
      notesLabel: "Additional details (heavy furniture, stairs, floor number, etc.)",
      notesPlaceholder:
        "e.g. 3rd floor apartment via stairs, 1 refrigerator, dining table with 6 chairs, 15 boxes...",
      submitBtn: "Send request via WhatsApp",
      privacyNote:
        "Clicking will open a WhatsApp chat with your formatted details so we can answer right away.",
      successTitle: "Request generated successfully!",
      successDesc:
        "If WhatsApp didn't open automatically, click the button below to start the conversation.",
      openWhatsAppBtn: "Open WhatsApp manually",
      sendAnotherBtn: "Edit or submit another inquiry",
      errors: {
        fullNameRequired: "Please enter your full name.",
        fullNameLength: "Name must be at least 3 characters long.",
        serviceTypeRequired: "Please select the requested service type.",
        originRequired: "Please specify the pickup location.",
        destinationRequired: "Please specify the destination location.",
        dateRequired: "Please select an estimated moving date.",
      },
    },

    // Footer
    footer: {
      tagline:
        "Over 30 years handling moves with dedication, integrity, and genuine care in every detail. Your move, in good hands.",
      hours: "Monday to Saturday from 8:00 AM to 7:00 PM",
      navTitle: "Navigation",
      contactTitle: "Direct Contact",
      phoneLabel: "Phone calls",
      whatsappLabel: "WhatsApp quotes",
      emailLabel: "Email address",
      rights: "All rights reserved.",
      familyFooter:
        "Family-owned moving and transportation company with over 30 years of history.",
    },

    // WhatsAppButton
    whatsappButton: {
      tooltipTitle: "CRICASA Movers",
      tooltipDesc:
        "Have questions about your move? Text us for quick advice.",
      ariaLabel: "Contact CRICASA Movers on WhatsApp",
    },
  },
};
