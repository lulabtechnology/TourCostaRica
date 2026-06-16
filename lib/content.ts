export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const WHATSAPP_NUMBER = "50763562486";

export type Destination = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  heroImage?: string;
  bestFor: string[];
  highlights: string[];
  activities: string[];
  duration: string;
  mood: string;
};

export type Dictionary = {
  locale: Locale;
  seo: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    tours: string;
    planner: string;
    contact: string;
    whatsapp: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  tours: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    details: string;
  };
  parallax: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  promise: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  planner: {
    eyebrow: string;
    title: string;
    body: string;
    questions: string[];
    cta: string;
  };
  destinationPage: {
    back: string;
    bestFor: string;
    highlights: string;
    activities: string;
    duration: string;
    mood: string;
    whatsapp: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  destinations: Destination[];
};

const images = {
  arenal: "/images/tour-arenal.webp",
  guanacaste: "/images/tour-guanacaste.webp",
  manuelAntonio: "/images/tour-manuel-antonio.webp",
  uvita: "/images/tour-uvita.webp",
  drakeBay: "/images/tour-drake-bay.webp",
  puertoJimenez: "/images/tour-drake-bay.webp",
  tortuguero: "/images/tour-tortuguero.webp",
  caribbean: "/images/tour-manuel-antonio.webp"
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    locale: "es",
    seo: {
      title: "Costa Rica Premium Adventures | Tours privados y experiencias locales",
      description:
        "Tours privados, naturaleza, aventura e itinerarios personalizados en Costa Rica con contacto directo por WhatsApp."
    },
    nav: {
      home: "Inicio",
      tours: "Tours",
      planner: "Planifica",
      contact: "Contacto",
      whatsapp: "WhatsApp"
    },
    hero: {
      eyebrow: "Costa Rica · Viajes personalizados",
      title: "Descubre Costa Rica con experiencias privadas, naturaleza y aventura.",
      subtitle:
        "Tours premium, itinerarios a medida y asesoría local para viajeros que quieren vivir algo más que unas vacaciones.",
      primary: "Ver tours",
      secondary: "Planificar por WhatsApp"
    },
    intro: {
      eyebrow: "Viajes hechos a tu estilo",
      title: "Una web visual, elegante y enfocada en convertir visitantes en viajeros reales.",
      body:
        "Cada destino se presenta con imagen potente, texto directo sobre fotografía y contacto inmediato. La experiencia debe sentirse natural, premium y limpia, sin fondos decorativos innecesarios.",
      stats: [
        { value: "8", label: "destinos principales" },
        { value: "2", label: "idiomas directos" },
        { value: "24/7", label: "contacto por WhatsApp" }
      ]
    },
    tours: {
      eyebrow: "Tours destacados",
      title: "Elige la zona que quieres vivir en Costa Rica.",
      body:
        "Cards verticales con fotografía dominante, descripción corta, detalles útiles y contacto directo por WhatsApp para cada experiencia.",
      cta: "Consultar por WhatsApp",
      details: "Ver experiencia"
    },
    parallax: {
      eyebrow: "Costa Rica a tu ritmo",
      title: "Selva, playas, volcanes y vida silvestre en una experiencia diseñada para ti.",
      body:
        "Cuéntanos cuántos días tienes, con quién viajas y qué tipo de aventura buscas. Te ayudamos a crear una ruta clara, visual y memorable.",
      cta: "Crear mi itinerario"
    },
    promise: {
      eyebrow: "Por qué elegirnos",
      title: "Menos ruido, más experiencia real.",
      items: [
        {
          title: "Diseño premium",
          body:
            "La web usa imagen, espacio, contraste y color con intención. Nada de bloques recargados ni formas decorativas innecesarias."
        },
        {
          title: "Conversión directa",
          body:
            "Cada destino tiene CTA a WhatsApp con mensaje precargado para reducir fricción y facilitar la venta del tour."
        },
        {
          title: "Contenido bilingüe",
          body:
            "El usuario puede cambiar entre español e inglés sin perder la experiencia visual ni la estructura comercial."
        }
      ]
    },
    planner: {
      eyebrow: "Planificador rápido",
      title: "Dinos cómo viajas y te guiamos mejor.",
      body:
        "La web puede usar estas preguntas para iniciar la conversación y convertir una visita en una cotización real.",
      questions: [
        "¿Cuántos días estarás en Costa Rica?",
        "¿Viajas solo, en pareja, familia o grupo?",
        "¿Buscas algo económico, moderado o de lujo?",
        "¿Prefieres playa, volcán, selva, fauna, aventura o descanso?"
      ],
      cta: "Enviar respuestas por WhatsApp"
    },
    destinationPage: {
      back: "Volver a tours",
      bestFor: "Ideal para",
      highlights: "Lo más destacado",
      activities: "Experiencias",
      duration: "Estadía sugerida",
      mood: "Estilo",
      whatsapp: "Quiero este tour"
    },
    footer: {
      tagline: "Experiencias privadas, itinerarios personalizados y aventura premium en Costa Rica.",
      rights: "Todos los derechos reservados."
    },
    destinations: [
      {
        slug: "arenal",
        title: "Arenal",
        eyebrow: "Volcán · Termales · Puentes colgantes",
        summary:
          "La zona perfecta para combinar aventura, aguas termales, cataratas, caminatas volcánicas y selva tropical.",
        image: images.arenal,
        bestFor: ["Aventura", "Parejas", "Familias", "Naturaleza"],
        highlights: ["Volcán Arenal", "La Fortuna Waterfall", "Hanging Bridges", "Hot Springs"],
        activities: ["Caminata por senderos volcánicos", "Canopy y tirolesas", "Rappel en cataratas", "Relajación en aguas termales"],
        duration: "2–3 noches",
        mood: "Aventura elegante"
      },
      {
        slug: "guanacaste",
        title: "Guanacaste",
        eyebrow: "Playas · Surf · Lujo costero",
        summary:
          "Playas tropicales, atardeceres cálidos, pueblos costeros, buceo, surf y experiencias de lujo junto al Pacífico Norte.",
        image: images.guanacaste,
        bestFor: ["Playa", "Lujo", "Surf", "Familias"],
        highlights: ["Playa Conchal", "Tamarindo", "Las Catalinas", "Rincón de la Vieja"],
        activities: ["Surf y vida nocturna", "Buceo en Las Catalinas", "ATV por caminos costeros", "Kayak y snorkel"],
        duration: "3–5 noches",
        mood: "Beach luxury"
      },
      {
        slug: "manuel-antonio",
        title: "Manuel Antonio",
        eyebrow: "Selva · Playa · Fauna",
        summary:
          "Una mezcla icónica de parque nacional, playas de arena clara, miradores, monos, perezosos y atardeceres memorables.",
        image: images.manuelAntonio,
        bestFor: ["Fauna", "Playa", "Familias", "Primer viaje"],
        highlights: ["Manuel Antonio National Park", "Espadilla Beach", "Punta Catedral", "Biesanz Beach"],
        activities: ["Tour guiado de fauna", "Catamarán al atardecer", "Kayak en manglares", "Parasailing o jet ski"],
        duration: "2–3 noches",
        mood: "Tropical clásico"
      },
      {
        slug: "uvita",
        title: "Uvita",
        eyebrow: "Ballenas · Costa sur · Eco-lujo",
        summary:
          "Un destino más tranquilo y salvaje, famoso por Marino Ballena, la cola de ballena, cataratas y costa dramática.",
        image: images.uvita,
        bestFor: ["Eco-lodges", "Ballenas", "Parejas", "Naturaleza"],
        highlights: ["Marino Ballena", "Uvita Waterfall", "Caño Island", "Ventanas Beach"],
        activities: ["Avistamiento de ballenas", "Snorkel o buceo en Caño Island", "Surf para todos los niveles", "Kayak en cuevas marinas"],
        duration: "2–4 noches",
        mood: "Eco premium"
      },
      {
        slug: "drake-bay",
        title: "Drake Bay",
        eyebrow: "Remoto · Corcovado · Caño Island",
        summary:
          "Una puerta de entrada a la biodiversidad de la Península de Osa, ideal para viajeros que buscan naturaleza intacta.",
        image: images.drakeBay,
        bestFor: ["Biodiversidad", "Aventura", "Eco-lodge", "Buceo"],
        highlights: ["Corcovado Sirena", "San Pedrillo", "Caño Island", "Playa San Josecito"],
        activities: ["Snorkel y buceo", "Tours nocturnos en selva", "Avistamiento de delfines y ballenas", "Sendero costero de Drake"],
        duration: "3–4 noches",
        mood: "Salvaje y exclusivo"
      },
      {
        slug: "puerto-jimenez",
        title: "Puerto Jiménez",
        eyebrow: "Osa · Golfo Dulce · Bioluminiscencia",
        summary:
          "El acceso sureste a Corcovado y al Golfo Dulce, con selva profunda, vida marina y aventuras más inmersivas.",
        image: images.puertoJimenez,
        bestFor: ["Corcovado", "Trekking", "Kayak", "Vida marina"],
        highlights: ["La Leona Station", "Golfo Dulce", "Playa Platanares", "Manglares"],
        activities: ["Kayak con bioluminiscencia", "Trekking multi-día", "Safari de delfines y ballenas", "Paddle en manglares"],
        duration: "3–5 noches",
        mood: "Exploración profunda"
      },
      {
        slug: "tortuguero",
        title: "Tortuguero",
        eyebrow: "Canales · Tortugas · Selva caribeña",
        summary:
          "El Amazonas de Costa Rica: canales, selva densa, cultura local y temporada de anidación de tortugas verdes.",
        image: images.tortuguero,
        bestFor: ["Fauna", "Canales", "Tortugas", "Eco aventura"],
        highlights: ["Canales de Tortuguero", "Tortuguero Beach", "Cerro Tortuguero", "Village"],
        activities: ["Canoa al amanecer", "Tour nocturno de tortugas", "Caminata nocturna", "Birdwatching"],
        duration: "2–3 noches",
        mood: "Místico natural"
      },
      {
        slug: "south-caribbean",
        title: "Caribe Sur",
        eyebrow: "Cahuita · Puerto Viejo · Cultura",
        summary:
          "Playas, arrecifes, gastronomía afrocaribeña, cacao, bicicleta costera y reservas naturales con una vibra única.",
        image: images.caribbean,
        bestFor: ["Cultura", "Playa", "Snorkel", "Gastronomía"],
        highlights: ["Cahuita National Park", "Punta Uva", "Puerto Viejo", "Bribri tour"],
        activities: ["Snorkel en arrecifes", "Bicicleta por la costa", "Tour de chocolate", "Experiencia cultural Bribri"],
        duration: "3–4 noches",
        mood: "Caribe boutique"
      }
    ]
  },
  en: {
    locale: "en",
    seo: {
      title: "Costa Rica Premium Adventures | Private tours and local experiences",
      description:
        "Private tours, nature, adventure and tailor-made itineraries in Costa Rica with direct WhatsApp contact."
    },
    nav: {
      home: "Home",
      tours: "Tours",
      planner: "Planner",
      contact: "Contact",
      whatsapp: "WhatsApp"
    },
    hero: {
      eyebrow: "Costa Rica · Tailor-made travel",
      title: "Discover Costa Rica through private nature and adventure experiences.",
      subtitle:
        "Premium tours, custom itineraries and local guidance for travelers who want more than a vacation.",
      primary: "Explore tours",
      secondary: "Plan on WhatsApp"
    },
    intro: {
      eyebrow: "Travel designed around you",
      title: "A visual, elegant website built to turn visitors into real travelers.",
      body:
        "Every destination is presented with powerful photography, direct text over images and immediate contact. The experience should feel natural, premium and clean, without unnecessary decorative backgrounds.",
      stats: [
        { value: "8", label: "main destinations" },
        { value: "2", label: "direct languages" },
        { value: "24/7", label: "WhatsApp contact" }
      ]
    },
    tours: {
      eyebrow: "Featured tours",
      title: "Choose the side of Costa Rica you want to experience.",
      body:
        "Vertical cards with dominant photography, short descriptions, useful details and direct WhatsApp contact for each experience.",
      cta: "Ask on WhatsApp",
      details: "View experience"
    },
    parallax: {
      eyebrow: "Costa Rica at your rhythm",
      title: "Rainforest, beaches, volcanoes and wildlife in one journey designed for you.",
      body:
        "Tell us how many days you have, who you are traveling with and what kind of adventure you want. We help you shape a clear, visual and memorable route.",
      cta: "Create my itinerary"
    },
    promise: {
      eyebrow: "Why travel with us",
      title: "Less noise, more real experience.",
      items: [
        {
          title: "Premium design",
          body:
            "The website uses image, space, contrast and color with intention. No overloaded blocks or unnecessary decorative shapes."
        },
        {
          title: "Direct conversion",
          body:
            "Every destination has a WhatsApp CTA with a prefilled message to reduce friction and make tour sales easier."
        },
        {
          title: "Bilingual content",
          body:
            "Visitors can switch between Spanish and English without losing the visual experience or commercial structure."
        }
      ]
    },
    planner: {
      eyebrow: "Quick planner",
      title: "Tell us how you travel and we will guide you better.",
      body:
        "The website can use these questions to start the conversation and turn a visit into a real quote.",
      questions: [
        "How many days will you stay in Costa Rica?",
        "Are you traveling solo, as a couple, with family or in a group?",
        "Are you looking for budget, moderate or luxury travel?",
        "Do you prefer beach, volcano, rainforest, wildlife, adventure or relaxation?"
      ],
      cta: "Send answers on WhatsApp"
    },
    destinationPage: {
      back: "Back to tours",
      bestFor: "Best for",
      highlights: "Highlights",
      activities: "Experiences",
      duration: "Suggested stay",
      mood: "Style",
      whatsapp: "I want this tour"
    },
    footer: {
      tagline: "Private experiences, tailor-made itineraries and premium adventure in Costa Rica.",
      rights: "All rights reserved."
    },
    destinations: [
      {
        slug: "arenal",
        title: "Arenal",
        eyebrow: "Volcano · Hot springs · Hanging bridges",
        summary:
          "The perfect region to combine adventure, hot springs, waterfalls, volcanic trails and tropical rainforest.",
        image: images.arenal,
        bestFor: ["Adventure", "Couples", "Families", "Nature"],
        highlights: ["Arenal Volcano", "La Fortuna Waterfall", "Hanging Bridges", "Hot Springs"],
        activities: ["Volcanic trail hiking", "Canopy and ziplines", "Waterfall rappelling", "Hot spring relaxation"],
        duration: "2–3 nights",
        mood: "Elegant adventure"
      },
      {
        slug: "guanacaste",
        title: "Guanacaste",
        eyebrow: "Beaches · Surf · Coastal luxury",
        summary:
          "Tropical beaches, warm sunsets, coastal towns, diving, surfing and luxury experiences along the North Pacific.",
        image: images.guanacaste,
        bestFor: ["Beach", "Luxury", "Surf", "Families"],
        highlights: ["Playa Conchal", "Tamarindo", "Las Catalinas", "Rincón de la Vieja"],
        activities: ["Surf and nightlife", "Diving at Las Catalinas", "ATV coastal routes", "Kayak and snorkel"],
        duration: "3–5 nights",
        mood: "Beach luxury"
      },
      {
        slug: "manuel-antonio",
        title: "Manuel Antonio",
        eyebrow: "Rainforest · Beach · Wildlife",
        summary:
          "An iconic blend of national park, white-sand beaches, scenic viewpoints, monkeys, sloths and memorable sunsets.",
        image: images.manuelAntonio,
        bestFor: ["Wildlife", "Beach", "Families", "First trip"],
        highlights: ["Manuel Antonio National Park", "Espadilla Beach", "Punta Catedral", "Biesanz Beach"],
        activities: ["Guided wildlife tour", "Sunset catamaran", "Mangrove kayaking", "Parasailing or jet ski"],
        duration: "2–3 nights",
        mood: "Tropical classic"
      },
      {
        slug: "uvita",
        title: "Uvita",
        eyebrow: "Whales · South coast · Eco-luxury",
        summary:
          "A quieter and wilder destination known for Marino Ballena, the whale-tail sandbar, waterfalls and dramatic coastline.",
        image: images.uvita,
        bestFor: ["Eco-lodges", "Whales", "Couples", "Nature"],
        highlights: ["Marino Ballena", "Uvita Waterfall", "Caño Island", "Ventanas Beach"],
        activities: ["Whale watching", "Snorkeling or diving at Caño Island", "Surfing for every level", "Sea cave kayaking"],
        duration: "2–4 nights",
        mood: "Premium eco"
      },
      {
        slug: "drake-bay",
        title: "Drake Bay",
        eyebrow: "Remote · Corcovado · Caño Island",
        summary:
          "A gateway to the biodiversity of the Osa Peninsula, ideal for travelers looking for untouched nature.",
        image: images.drakeBay,
        bestFor: ["Biodiversity", "Adventure", "Eco-lodge", "Diving"],
        highlights: ["Corcovado Sirena", "San Pedrillo", "Caño Island", "Playa San Josecito"],
        activities: ["Snorkeling and diving", "Night jungle tours", "Dolphin and whale watching", "Drake coastal trail"],
        duration: "3–4 nights",
        mood: "Wild and exclusive"
      },
      {
        slug: "puerto-jimenez",
        title: "Puerto Jiménez",
        eyebrow: "Osa · Golfo Dulce · Bioluminescence",
        summary:
          "The southeastern access point to Corcovado and Golfo Dulce, with deep rainforest, marine life and immersive adventures.",
        image: images.puertoJimenez,
        bestFor: ["Corcovado", "Trekking", "Kayak", "Marine life"],
        highlights: ["La Leona Station", "Golfo Dulce", "Playa Platanares", "Mangroves"],
        activities: ["Bioluminescence kayaking", "Multi-day trekking", "Dolphin and whale safari", "Mangrove paddleboarding"],
        duration: "3–5 nights",
        mood: "Deep exploration"
      },
      {
        slug: "tortuguero",
        title: "Tortuguero",
        eyebrow: "Canals · Turtles · Caribbean rainforest",
        summary:
          "Costa Rica's Amazon: canals, dense rainforest, local culture and the green sea turtle nesting season.",
        image: images.tortuguero,
        bestFor: ["Wildlife", "Canals", "Turtles", "Eco adventure"],
        highlights: ["Tortuguero Canals", "Tortuguero Beach", "Cerro Tortuguero", "Village"],
        activities: ["Sunrise canoe tour", "Sea turtle night tour", "Night rainforest walk", "Birdwatching"],
        duration: "2–3 nights",
        mood: "Mysterious nature"
      },
      {
        slug: "south-caribbean",
        title: "South Caribbean",
        eyebrow: "Cahuita · Puerto Viejo · Culture",
        summary:
          "Beaches, reefs, Afro-Caribbean food, cacao, coastal biking and natural reserves with a completely unique vibe.",
        image: images.caribbean,
        bestFor: ["Culture", "Beach", "Snorkel", "Food"],
        highlights: ["Cahuita National Park", "Punta Uva", "Puerto Viejo", "Bribri tour"],
        activities: ["Reef snorkeling", "Coastal road biking", "Chocolate tour", "Bribri cultural experience"],
        duration: "3–4 nights",
        mood: "Boutique Caribbean"
      }
    ]
  }
};

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? dictionaries.es;
}

export function getDestination(locale: string, slug: string): Destination | undefined {
  return getDictionary(locale).destinations.find((destination) => destination.slug === slug);
}

export function whatsappLink(locale: Locale, subject?: string) {
  const message =
    locale === "es"
      ? `Hola, quiero más información${subject ? ` sobre ${subject}` : " para planificar mi viaje a Costa Rica"}.`
      : `Hello, I would like more information${subject ? ` about ${subject}` : " to plan my Costa Rica trip"}.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
