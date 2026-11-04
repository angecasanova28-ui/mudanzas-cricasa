export interface CompanyInfo {
  name: string;
  tagline: string;
  experienceYears: number;
  phone: {
    display: string;
    raw: string; // for tel: links
  };
  whatsapp: {
    number: string; // Placeholder or real number without spaces/symbols for wa.me link
    display: string;
    defaultMessage: string;
  };
  email: string;
  hours: string;
  addressSummary: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  features: string[];
}

export interface DifferentialItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CoverageZone {
  region: string;
  description: string;
  featuredAreas: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  isReference: boolean;
  altText: string;
  aspectRatio: "horizontal" | "vertical" | "square";
  svgType: "truck" | "packing" | "lift" | "commercial" | "storage" | "pets";
}

export const COMPANY_CONFIG: CompanyInfo = {
  name: "Mudanzas CRICASA",
  tagline: "Tu mudanza, en buenas manos.",
  experienceYears: 30,
  phone: {
    display: "4935839",
    raw: "+543414935839",
  },
  whatsapp: {
    number: "5493415991882",
    display: "0341-5991882",
    defaultMessage:
      "Hola Mudanzas CRICASA, estoy en su sitio web y deseo solicitar información y asesoramiento para una mudanza.",
  },
  email: "contacto@mudanzascricasa.com",
  hours: "Lunes a Sábado de 08:00 a 19:00 hs",
  addressSummary: "Funes, Santa Fe y alrededores",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "particulares",
    title: "Mudanzas particulares",
    shortDescription:
      "Traslados para departamentos, casas particulares y residencias, con cuidado riguroso de cada uno de sus bienes.",
    longDescription:
      "Atención cercana en cada etapa del cambio de hogar. Cuidamos cada mueble, electrodoméstico y caja como si fuera propio.",
    iconName: "Home",
    features: ["Cuidado de pisos y paredes", "Carga y descarga cuidadosa", "Coordinación horaria puntual"],
  },
  {
    id: "empresariales",
    title: "Mudanzas empresariales",
    shortDescription:
      "Traslados de oficinas, puestos de trabajo, equipamiento informático, archivos y mobiliario corporativo.",
    longDescription:
      "Planificación estratégica para minimizar el tiempo de inactividad operativa de su negocio o empresa.",
    iconName: "Building2",
    features: ["Coordinación de tiempos comerciales", "Traslado de puestos y archivo", "Personal debidamente capacitado"],
  },
  {
    id: "embalaje",
    title: "Embalaje y protección de pertenencias",
    shortDescription:
      "Suministro y aplicación de materiales de primera calidad para la total seguridad de vajilla, cuadros y objetos frágiles.",
    longDescription:
      "Técnicas profesionales de empaque con mantas protectoras, film stretch, cartón corrugado y cajas reforzadas.",
    iconName: "PackageCheck",
    features: ["Mantas de protección y film", "Material especial para vajilla", "Identificación y rotulado de cajas"],
  },
  {
    id: "guardamuebles",
    title: "Guardamuebles",
    shortDescription:
      "Espacios cerrados, secos y vigilados para el resguardo de su mobiliario por días, meses o estadías prolongadas.",
    longDescription:
      "Instalaciones diseñadas para la conservación óptima de sus pertenencias mientras reforma o define su nuevo espacio.",
    iconName: "Warehouse",
    features: ["Espacios limpios y acondicionados", "Control de acceso", "Inventario detallado de ingreso"],
  },
  {
    id: "izajes",
    title: "Izajes y trabajos en altura",
    shortDescription:
      "Elevación y descenso exterior de muebles y objetos de gran porte por balcón o terraza cuando no entran por ascensor o escalera.",
    longDescription:
      "Operativa técnica con poleas mecánicas de izaje y elementos certificados de sujeción para máxima seguridad.",
    iconName: "ArrowUpFromLine",
    features: ["Equipamiento certificado", "Personal especializado", "Evaluación previa de viabilidad"],
  },
  {
    id: "armado-desarmado",
    title: "Armado y desarmado de muebles",
    shortDescription:
      "Desmontaje cuidadoso de placares, camas, mesas y módulos complejos en origen y su correspondiente rearmado en destino.",
    longDescription:
      "Herramientas precisas y cuidado en el orden de tornillería para que cada mueble conserve su solidez original.",
    iconName: "Wrench",
    features: ["Herramental profesional", "Resguardo de herrajes", "Nivelación y ajuste final"],
  },
  {
    id: "mascotas",
    title: "Traslado de mascotas",
    shortDescription:
      "Acompañamiento seguro y amigable para el traslado de sus animales de compañía durante la jornada de mudanza.",
    longDescription:
      "Comprendemos que las mascotas son parte indispensable de la familia y procuramos un viaje libre de estrés innecesario.",
    iconName: "HeartHandshake",
    features: ["Atención tranquila y cordial", "Vehículos acondicionados", "Coordinación directa con la familia"],
  },
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    title: "Más de 30 años de experiencia",
    description:
      "Tres décadas ininterrumpidas de trayectoria familiar en el rubro, perfeccionando métodos y respondiendo con solvencia ante cada desafío logístico.",
    iconName: "ShieldCheck",
  },
  {
    title: "Atención personalizada",
    description:
      "Trato directo, claro y honesto desde el primer contacto por WhatsApp o llamada, atendiendo los requerimientos específicos de cada mudanza.",
    iconName: "Users",
  },
  {
    title: "Cuidado riguroso de pertenencias",
    description:
      "Tratamos cada objeto con respeto, empleando protecciones adecuadas, estiba equilibrada y personal con oficio real de estibado.",
    iconName: "Sparkles",
  },
  {
    title: "Soluciones para diferentes tipos de mudanzas",
    description:
      "Desde departamentos compactos hasta traslados corporativos e izajes de alta complejidad, contamos con la logística adecuada.",
    iconName: "Layers",
  },
];

export const COVERAGE_CONFIG: {
  title: string;
  subtitle: string;
  note: string;
  zones: CoverageZone[];
} = {
  title: "Zonas y cobertura de servicios",
  subtitle:
    "Estructura logística con base operativa en Funes, Santa Fe. Coordinación diaria para traslados locales y de media distancia.",
  note: "Consúltenos directamente por WhatsApp o teléfono indicando sus puntos de carga y descarga.",
  zones: [
    {
      region: "Funes, Rosario y Gran Rosario",
      description: "Operativa constante y traslados diarios para mudanzas particulares y corporativas.",
      featuredAreas: ["Funes", "Rosario", "Roldán", "Fisherton", "Gran Rosario"],
    },
    {
      region: "Provincia de Santa Fe y Media Distancia",
      description: "Servicios programados y traslados de media y larga distancia con reserva previa.",
      featuredAreas: ["Localidades de Santa Fe", "Corredor regional", "Barrios cerrados y countries"],
    },
  ],
};

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Estiba y protección de carga",
    category: "Traslados particulares",
    description: "Acondicionamiento interno de la unidad y fijación segura de muebles con correas de sujeción.",
    isReference: true,
    altText: "Protección y fijación de muebles en camión de mudanzas",
    aspectRatio: "horizontal",
    svgType: "truck",
  },
  {
    id: "gal-2",
    title: "Protección minuciosa de mobiliario",
    category: "Embalaje",
    description: "Aplicación de film de alta resistencia y mantas protectoras antes del egreso del domicilio.",
    isReference: true,
    altText: "Técnica de embalaje de sillones y mesas con mantas y film",
    aspectRatio: "square",
    svgType: "packing",
  },
  {
    id: "gal-3",
    title: "Izaje técnico por balcón",
    category: "Trabajos en altura",
    description: "Elevación de sofás y mobiliario de gran porte mediante sistema de poleas y aparejos exteriores.",
    isReference: true,
    altText: "Izaje de muebles mediante sistema de cuerdas y poleas exteriores",
    aspectRatio: "vertical",
    svgType: "lift",
  },
  {
    id: "gal-4",
    title: "Traslado de puestos de oficina",
    category: "Corporativo",
    description: "Planificación ordenada para la reubicación rápida de oficinas comerciales y gabinetes.",
    isReference: true,
    altText: "Logística y traslado ordenado de oficinas comerciales",
    aspectRatio: "square",
    svgType: "commercial",
  },
  {
    id: "gal-5",
    title: "Guardamuebles en módulos individuales",
    category: "Almacenamiento",
    description: "Custodia de inventario en espacios secos, seguros y con control de ingreso.",
    isReference: true,
    altText: "Espacio de guardamuebles y resguardo de mobiliario",
    aspectRatio: "horizontal",
    svgType: "storage",
  },
  {
    id: "gal-6",
    title: "Cuidado dedicado en cada traslado",
    category: "Atención familiar",
    description: "Atención meticulosa orientada a la tranquilidad de la familia durante la jornada.",
    isReference: true,
    altText: "Personal capacitado realizando el traslado con máxima precaución",
    aspectRatio: "square",
    svgType: "pets",
  },
];
