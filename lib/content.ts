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

export type TourCategory = {
  title: string;
  body: string;
  destinations: string[];
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
  tourCategories: TourCategory[];
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
      title: "Costa Rica Adventures | Tours y experiencias locales",
      description:
        "Arenal, Guanacaste, Manuel Antonio, Uvita, Drake Bay, Puerto Jiménez, Tortuguero y Caribe Sur con contacto directo por WhatsApp."
    },
    nav: {
      home: "Inicio",
      tours: "Tours",
      planner: "Planifica",
      contact: "Contacto",
      whatsapp: "WhatsApp"
    },
    hero: {
      eyebrow: "Costa Rica a tu ritmo",
      title: "Selva, playas, volcanes y vida silvestre en una ruta hecha para ti.",
      subtitle:
        "Cuéntanos cuántos días tienes, con quién viajas y qué tipo de aventura buscas. Te ayudamos a crear una ruta clara y memorable.",
      primary: "Ver tours",
      secondary: "Planificar por WhatsApp"
    },
    intro: {
      eyebrow: "Viaja con una ruta clara",
      title: "Costa Rica tiene muchas formas de vivirse. Te ayudamos a elegir la correcta.",
      body:
        "Desde aguas termales en Arenal hasta playas del Caribe, parques nacionales, ballenas, selva y aventura remota. Escríbenos y armamos una ruta según tus días, compañía y presupuesto.",
      stats: [
        { value: "8", label: "destinos principales" },
        { value: "5", label: "tipos de experiencia" },
        { value: "1", label: "ruta hecha para ti" }
      ]
    },
    tours: {
      eyebrow: "Explora por tipo de experiencia",
      title: "Elige la Costa Rica que quieres vivir.",
      body:
        "Organizamos los destinos por estilo de viaje para que encuentres más rápido lo que buscas: volcán, playa, selva, fauna, cultura o aventura remota.",
      cta: "Consultar por WhatsApp",
      details: "Ver detalles"
    },
    tourCategories: [
      {
        title: "Volcán, termales y selva",
        body: "Aventura, aguas termales, puentes colgantes, cataratas y senderos volcánicos.",
        destinations: ["arenal"]
      },
      {
        title: "Playas, costa y cultura",
        body: "Surf, snorkel, catamarán, pueblos costeros, cacao, comida caribeña y atardeceres.",
        destinations: ["guanacaste", "manuel-antonio", "uvita", "south-caribbean"]
      },
      {
        title: "Selva remota, canales y Corcovado",
        body: "Fauna, canales, tortugas, Golfo Dulce, Caño Island y experiencias de naturaleza profunda.",
        destinations: ["drake-bay", "puerto-jimenez", "tortuguero"]
      }
    ],
    parallax: {
      eyebrow: "Planifica fácil",
      title: "Tu viaje empieza con una buena ruta.",
      body:
        "Dinos cuántos días tienes, con quién viajas y qué quieres vivir. Te ayudamos a organizar una experiencia natural, clara y memorable.",
      cta: "Crear mi itinerario"
    },
    promise: {
      eyebrow: "Cómo te ayudamos",
      title: "Menos vueltas, mejores decisiones.",
      items: [
        {
          title: "Ruta según tus días",
          body:
            "Te orientamos según el tiempo que tienes en Costa Rica y los destinos que realmente vale la pena combinar."
        },
        {
          title: "Experiencias por estilo",
          body:
            "Playa, selva, volcán, fauna, ballenas, cultura o descanso. Primero entendemos qué quieres vivir."
        },
        {
          title: "Contacto directo",
          body:
            "Cada destino tiene acceso directo a WhatsApp para resolver dudas y empezar a planificar sin complicaciones."
        }
      ]
    },
    planner: {
      eyebrow: "Planificador rápido",
      title: "Antes de recomendarte una ruta, queremos entender tu viaje.",
      body:
        "Responde estas preguntas por WhatsApp y te ayudamos a elegir los destinos que mejor encajan contigo.",
      questions: [
        "¿Cuántos días estarás en Costa Rica?",
        "¿Viajas solo, en pareja, familia o grupo?",
        "¿Buscas playa, selva, volcanes, fauna o aventura?",
        "¿Prefieres algo económico, moderado o más premium?"
      ],
      cta: "Enviar respuestas por WhatsApp"
    },
    destinationPage: {
      back: "Volver a tours",
      bestFor: "Ideal para",
      highlights: "Lugares destacados",
      activities: "Experiencias",
      duration: "Ruta",
      mood: "Estilo",
      whatsapp: "Quiero este tour"
    },
    footer: {
      tagline: "Tours, naturaleza y rutas personalizadas para vivir Costa Rica a tu ritmo.",
      rights: "Todos los derechos reservados."
    },
    destinations: [
      {
        slug: "arenal",
        title: "Arenal",
        eyebrow: "Volcán · Termales · Puentes colgantes",
        summary:
          "Volcán, selva, cataratas, puentes colgantes y aguas termales en una de las zonas más completas de Costa Rica.",
        image: images.arenal,
        bestFor: ["Volcán", "Termales", "Aventura", "Naturaleza"],
        highlights: ["Arenal Volcano National Park", "Mistico Arenal Hanging Bridges", "La Fortuna Waterfall", "Lake Arenal"],
        activities: ["Caminata por campos de lava", "Aguas termales naturales", "Rappel en cataratas", "Canopy y caminata nocturna"],
        duration: "Según tus días",
        mood: "Aventura y descanso"
      },
      {
        slug: "guanacaste",
        title: "Guanacaste",
        eyebrow: "Playas · Surf · Pacífico Norte",
        summary:
          "Playas soleadas, surf, buceo, pueblos costeros, parques nacionales y atardeceres del Pacífico Norte.",
        image: images.guanacaste,
        bestFor: ["Playa", "Surf", "Buceo", "Familias"],
        highlights: ["Tamarindo", "Playa Conchal", "Las Catalinas", "Rincón de la Vieja"],
        activities: ["Surf y beach towns", "Buceo en Las Catalinas", "ATV y rutas off-road", "Kayak, snorkel y zip lining"],
        duration: "Según tus días",
        mood: "Costa y aventura"
      },
      {
        slug: "manuel-antonio",
        title: "Manuel Antonio",
        eyebrow: "Selva · Playa · Fauna",
        summary:
          "Selva tropical, playas del Pacífico, senderos, monos, perezosos y miradores cerca del mar.",
        image: images.manuelAntonio,
        bestFor: ["Fauna", "Playa", "Familias", "Primer viaje"],
        highlights: ["Manuel Antonio National Park", "Manuel Antonio Beach", "Espadilla Beach", "Punta Catedral"],
        activities: ["Tour guiado de fauna", "Catamarán y snorkel", "Kayak en Damas Island", "Caminata nocturna"],
        duration: "Según tus días",
        mood: "Selva y playa"
      },
      {
        slug: "uvita",
        title: "Uvita",
        eyebrow: "Ballenas · Cataratas · Pacífico Sur",
        summary:
          "Costa salvaje, Marino Ballena, cataratas, cuevas marinas, surf y temporadas de ballenas jorobadas.",
        image: images.uvita,
        bestFor: ["Ballenas", "Cataratas", "Surf", "Eco-lodges"],
        highlights: ["Marino Ballena National Park", "Uvita Waterfall", "Playa Hermosa", "El Pavón Waterfall"],
        activities: ["Avistamiento de ballenas", "Caño Island snorkeling", "Surf para todos los niveles", "Kayak en Ventanas Beach"],
        duration: "Según tus días",
        mood: "Eco aventura"
      },
      {
        slug: "drake-bay",
        title: "Drake Bay",
        eyebrow: "Corcovado · Caño Island · Selva remota",
        summary:
          "Una zona remota de la Península de Osa para explorar selva intacta, playas escondidas y vida marina.",
        image: images.drakeBay,
        bestFor: ["Biodiversidad", "Corcovado", "Buceo", "Eco-lodge"],
        highlights: ["Corcovado Sirena Station", "San Pedrillo Station", "Caño Island", "Playa San Josecito"],
        activities: ["Snorkel y buceo en Caño Island", "Tours nocturnos en selva", "Delfines y ballenas", "Drake Bay Hiking Trail"],
        duration: "Según tus días",
        mood: "Remoto y natural"
      },
      {
        slug: "puerto-jimenez",
        title: "Puerto Jiménez",
        eyebrow: "Osa · Golfo Dulce · Corcovado",
        summary:
          "Puerta de entrada a Corcovado, Golfo Dulce, manglares, playas tranquilas y experiencias de selva profunda.",
        image: images.puertoJimenez,
        bestFor: ["Corcovado", "Kayak", "Trekking", "Vida marina"],
        highlights: ["Corcovado La Leona Station", "Golfo Dulce", "Playa Platanares", "Preciosa Platanares Wildlife Refuge"],
        activities: ["Kayak con bioluminiscencia", "Delfines y ballenas", "Kayak y SUP en manglares", "Trekking multi-día en Corcovado"],
        duration: "Según tus días",
        mood: "Selva profunda"
      },
      {
        slug: "tortuguero",
        title: "Tortuguero",
        eyebrow: "Canales · Tortugas · Caribe Norte",
        summary:
          "Canales de selva, playa de arena negra, tortugas verdes, aves y un pueblo caribeño sin carros.",
        image: images.tortuguero,
        bestFor: ["Canales", "Tortugas", "Fauna", "Aves"],
        highlights: ["Tortuguero National Park Canals", "Tortuguero Beach", "Cerro Tortuguero", "Tortuguero Village"],
        activities: ["Canoa o kayak al amanecer", "Tour nocturno de tortugas", "Caminata nocturna", "Birdwatching y traslado en bote"],
        duration: "Según tus días",
        mood: "Selva caribeña"
      },
      {
        slug: "south-caribbean",
        title: "Caribe Sur",
        eyebrow: "Cahuita · Puerto Viejo · Manzanillo",
        summary:
          "Playas, arrecifes, comida afrocaribeña, cacao, bicicleta costera y una vibra relajada junto a la selva.",
        image: images.caribbean,
        bestFor: ["Cultura", "Playa", "Snorkel", "Chocolate"],
        highlights: ["Cahuita National Park", "Gandoca-Manzanillo Refuge", "Puerto Viejo", "Jaguar Rescue Center"],
        activities: ["Snorkel en arrecifes", "Bicicleta por la costa", "Tour de chocolate", "Tour cultural Bribri"],
        duration: "Según tus días",
        mood: "Caribe y cultura"
      }
    ]
  },
  en: {
    locale: "en",
    seo: {
      title: "Costa Rica Adventures | Tours and local experiences",
      description:
        "Arenal, Guanacaste, Manuel Antonio, Uvita, Drake Bay, Puerto Jiménez, Tortuguero and the South Caribbean with direct WhatsApp contact."
    },
    nav: {
      home: "Home",
      tours: "Tours",
      planner: "Planner",
      contact: "Contact",
      whatsapp: "WhatsApp"
    },
    hero: {
      eyebrow: "Costa Rica at your rhythm",
      title: "Rainforest, beaches, volcanoes and wildlife in one journey made for you.",
      subtitle:
        "Tell us how many days you have, who you are traveling with and what kind of adventure you want. We help you shape a clear and memorable route.",
      primary: "Explore tours",
      secondary: "Plan on WhatsApp"
    },
    intro: {
      eyebrow: "Travel with a clear route",
      title: "Costa Rica has many ways to be experienced. We help you choose the right one.",
      body:
        "From Arenal hot springs to Caribbean beaches, national parks, whales, rainforest and remote adventure. Message us and we will shape a route around your days, travel style and budget.",
      stats: [
        { value: "8", label: "main destinations" },
        { value: "5", label: "experience styles" },
        { value: "1", label: "route made for you" }
      ]
    },
    tours: {
      eyebrow: "Explore by experience",
      title: "Choose the Costa Rica you want to live.",
      body:
        "We organize destinations by travel style so you can find what fits you faster: volcanoes, beaches, rainforest, wildlife, culture or remote adventure.",
      cta: "Ask on WhatsApp",
      details: "View details"
    },
    tourCategories: [
      {
        title: "Volcano, hot springs & rainforest",
        body: "Adventure, thermal waters, hanging bridges, waterfalls and volcanic trails.",
        destinations: ["arenal"]
      },
      {
        title: "Beaches, coast & culture",
        body: "Surf, snorkeling, catamaran trips, coastal towns, cacao, Caribbean food and sunsets.",
        destinations: ["guanacaste", "manuel-antonio", "uvita", "south-caribbean"]
      },
      {
        title: "Remote rainforest, canals & Corcovado",
        body: "Wildlife, jungle canals, turtles, Golfo Dulce, Caño Island and deep nature experiences.",
        destinations: ["drake-bay", "puerto-jimenez", "tortuguero"]
      }
    ],
    parallax: {
      eyebrow: "Plan with ease",
      title: "Your trip starts with a good route.",
      body:
        "Tell us how many days you have, who you are traveling with and what you want to experience. We help you organize a natural, clear and memorable trip.",
      cta: "Create my itinerary"
    },
    promise: {
      eyebrow: "How we help",
      title: "Less guessing, better decisions.",
      items: [
        {
          title: "A route for your days",
          body:
            "We guide you based on your time in Costa Rica and the destinations that truly make sense to combine."
        },
        {
          title: "Experiences by style",
          body:
            "Beach, rainforest, volcano, wildlife, whales, culture or rest. First we understand what you want to live."
        },
        {
          title: "Direct contact",
          body:
            "Every destination has direct WhatsApp access so you can ask questions and start planning without complications."
        }
      ]
    },
    planner: {
      eyebrow: "Quick planner",
      title: "Before recommending a route, we want to understand your trip.",
      body:
        "Answer these questions on WhatsApp and we will help you choose the destinations that fit you best.",
      questions: [
        "How many days will you stay in Costa Rica?",
        "Are you traveling solo, as a couple, with family or in a group?",
        "Are you looking for beaches, rainforest, volcanoes, wildlife or adventure?",
        "Do you prefer budget, moderate or more premium travel?"
      ],
      cta: "Send answers on WhatsApp"
    },
    destinationPage: {
      back: "Back to tours",
      bestFor: "Best for",
      highlights: "Featured places",
      activities: "Experiences",
      duration: "Route",
      mood: "Style",
      whatsapp: "I want this tour"
    },
    footer: {
      tagline: "Tours, nature and personalized routes to experience Costa Rica at your rhythm.",
      rights: "All rights reserved."
    },
    destinations: [
      {
        slug: "arenal",
        title: "Arenal",
        eyebrow: "Volcano · Hot springs · Hanging bridges",
        summary:
          "Volcano, rainforest, waterfalls, hanging bridges and thermal waters in one of Costa Rica's most complete regions.",
        image: images.arenal,
        bestFor: ["Volcano", "Hot springs", "Adventure", "Nature"],
        highlights: ["Arenal Volcano National Park", "Mistico Arenal Hanging Bridges", "La Fortuna Waterfall", "Lake Arenal"],
        activities: ["Old lava field hiking", "Natural hot springs", "Waterfall rappelling", "Canopy ziplining and night walks"],
        duration: "Based on your days",
        mood: "Adventure and rest"
      },
      {
        slug: "guanacaste",
        title: "Guanacaste",
        eyebrow: "Beaches · Surf · North Pacific",
        summary:
          "Sunny beaches, surfing, diving, coastal towns, national parks and North Pacific sunsets.",
        image: images.guanacaste,
        bestFor: ["Beach", "Surf", "Diving", "Families"],
        highlights: ["Tamarindo", "Playa Conchal", "Las Catalinas", "Rincón de la Vieja"],
        activities: ["Surf and beach towns", "Diving at Las Catalinas", "ATV and off-road routes", "Kayaking, snorkeling and zip lining"],
        duration: "Based on your days",
        mood: "Coast and adventure"
      },
      {
        slug: "manuel-antonio",
        title: "Manuel Antonio",
        eyebrow: "Rainforest · Beach · Wildlife",
        summary:
          "Tropical rainforest, Pacific beaches, scenic trails, monkeys, sloths and viewpoints near the ocean.",
        image: images.manuelAntonio,
        bestFor: ["Wildlife", "Beach", "Families", "First trip"],
        highlights: ["Manuel Antonio National Park", "Manuel Antonio Beach", "Espadilla Beach", "Punta Catedral"],
        activities: ["Guided wildlife tour", "Catamaran and snorkeling", "Damas Island kayaking", "Night rainforest walk"],
        duration: "Based on your days",
        mood: "Rainforest and beach"
      },
      {
        slug: "uvita",
        title: "Uvita",
        eyebrow: "Whales · Waterfalls · South Pacific",
        summary:
          "Wild coastline, Marino Ballena, waterfalls, sea caves, surfing and Humpback whale seasons.",
        image: images.uvita,
        bestFor: ["Whales", "Waterfalls", "Surf", "Eco-lodges"],
        highlights: ["Marino Ballena National Park", "Uvita Waterfall", "Playa Hermosa", "El Pavón Waterfall"],
        activities: ["Whale watching", "Caño Island snorkeling", "Surfing for all levels", "Ventanas Beach sea caves kayaking"],
        duration: "Based on your days",
        mood: "Eco adventure"
      },
      {
        slug: "drake-bay",
        title: "Drake Bay",
        eyebrow: "Corcovado · Caño Island · Remote rainforest",
        summary:
          "A remote area of the Osa Peninsula for untouched rainforest, hidden beaches and marine life.",
        image: images.drakeBay,
        bestFor: ["Biodiversity", "Corcovado", "Diving", "Eco-lodge"],
        highlights: ["Corcovado Sirena Station", "San Pedrillo Station", "Caño Island", "Playa San Josecito"],
        activities: ["Snorkeling and diving at Caño Island", "Night jungle tours", "Dolphin and whale watching", "Drake Bay Hiking Trail"],
        duration: "Based on your days",
        mood: "Remote nature"
      },
      {
        slug: "puerto-jimenez",
        title: "Puerto Jiménez",
        eyebrow: "Osa · Golfo Dulce · Corcovado",
        summary:
          "Gateway to Corcovado, Golfo Dulce, mangroves, peaceful beaches and deep rainforest experiences.",
        image: images.puertoJimenez,
        bestFor: ["Corcovado", "Kayak", "Trekking", "Marine life"],
        highlights: ["Corcovado La Leona Station", "Golfo Dulce", "Playa Platanares", "Preciosa Platanares Wildlife Refuge"],
        activities: ["Bioluminescence kayaking", "Dolphin and whale safaris", "Mangrove kayaking and SUP", "Multi-day Corcovado trekking"],
        duration: "Based on your days",
        mood: "Deep rainforest"
      },
      {
        slug: "tortuguero",
        title: "Tortuguero",
        eyebrow: "Canals · Turtles · North Caribbean",
        summary:
          "Jungle canals, black-sand beach, green sea turtles, birds and a colorful car-free Caribbean village.",
        image: images.tortuguero,
        bestFor: ["Canals", "Turtles", "Wildlife", "Birds"],
        highlights: ["Tortuguero National Park Canals", "Tortuguero Beach", "Cerro Tortuguero", "Tortuguero Village"],
        activities: ["Early morning canoe or kayak tour", "Sea turtle nesting night tour", "Rainforest night walk", "Birdwatching and boat transfer"],
        duration: "Based on your days",
        mood: "Caribbean rainforest"
      },
      {
        slug: "south-caribbean",
        title: "South Caribbean",
        eyebrow: "Cahuita · Puerto Viejo · Manzanillo",
        summary:
          "Beaches, coral reefs, Afro-Caribbean food, cacao, coastal biking and a relaxed rainforest vibe.",
        image: images.caribbean,
        bestFor: ["Culture", "Beach", "Snorkel", "Chocolate"],
        highlights: ["Cahuita National Park", "Gandoca-Manzanillo Refuge", "Puerto Viejo", "Jaguar Rescue Center"],
        activities: ["Coral reef snorkeling", "Biking the coastal road", "Chocolate tour", "Bribri cultural tour"],
        duration: "Based on your days",
        mood: "Caribbean culture"
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
