export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const WHATSAPP_NUMBER = "50763562486";

export type DestinationItem = { name: string; description: string };
export type DestinationSection = {
  title: string;
  kind?: "attractions" | "tours" | "beaches";
  items: DestinationItem[];
};
export type PlanningBlock = { title: string; questions: string[] };
export type Destination = {
  slug: string;
  title: string;
  region: string;
  summary: string;
  image: string;
  bestFor: string[];
  sections: DestinationSection[];
  planningBlocks: PlanningBlock[];
};
export type ConciergeService = {
  title: string;
  description: string;
  image: string;
  items: DestinationItem[];
};

export type Dictionary = {
  locale: Locale;
  seo: { title: string; description: string };
  nav: {
    home: string;
    tours: string;
    concierge: string;
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
  intro: { title: string; body: string };
  tours: { eyebrow: string; title: string; body: string; cta: string; details: string };
  parallax: { eyebrow: string; title: string; body: string; cta: string };
  planner: {
    eyebrow: string;
    title: string;
    body: string;
    questions: string[];
    cta: string;
  };
  concierge: {
    title: string;
    subtitle: string;
    intro: string;
    statement: string;
    signatureTitle: string;
    services: ConciergeService[];
    advantageTitle: string;
    advantageBody: string;
    cta: string;
  };
  destinationPage: { back: string; overview: string; whatsapp: string; planning: string };
  footer: { tagline: string; rights: string };
  destinations: Destination[];
};

const images = {
  arenal: "/images/destination-arenal.webp",
  guanacaste: "/images/destination-guanacaste.webp",
  manuelAntonio: "/images/destination-manuel-antonio.webp",
  uvita: "/images/destination-uvita.webp",
  drakeBay: "/images/destination-drake-bay.webp",
  puertoJimenez: "/images/destination-puerto-jimenez.webp",
  tortuguero: "/images/destination-tortuguero.webp",
  southCaribbean: "/images/destination-south-caribbean.webp"
};

const generalQuestions = [
  "How many days will you stay?",
  "Are you traveling with kids, a partner, or solo?",
  "What is your preferred budget level (budget, moderate, or luxury)?"
];

const destinations: Destination[] = [
  {
    slug: "arenal",
    title: "Arenal",
    region: "Northern Costa Rica",
    summary:
      "The Arenal Volcano area is the ultimate hub for adventure and relaxation in the northern Costa Rica region. From hiking across old lava fields to soaking in natural thermal rivers, here are the absolute best activities and spots you cannot miss.",
    image: images.arenal,
    bestFor: ["Arenal Volcano National Park", "Mistico Arenal Hanging Bridges Park", "La Fortuna Waterfall"],
    sections: [
      {
        title: "Must_visit attractions",
        kind: "attractions",
        items: [
          { name: "Arenal Volcano National Park", description: "Walk the trails through lush rainforests and step onto rugged fields formed by historic lava flows." },
          { name: "Mistico Arenal Hanging Bridges Park", description: "Walk across massive suspension bridges high above the jungle canopy to spot monkeys, sloths, and tropical birds." },
          { name: "La Fortuna Waterfall", description: "Hike down over 500 steps into a steep canyon to swim in the powerful pool of this stunning 70-meter cascade." },
          { name: "Lake Arenal", description: "Enjoy kayaking, stand-up paddleboarding, or a scenic sunset boat cruise on Costa Rica's largest lake." }
        ]
      },
      {
        title: "Best tours & Experiences",
        kind: "tours",
        items: [
          { name: "Natural Hot Springs", description: "Relax your muscles in volcanic thermal waters at premium locations like Tabacón, Baldi, or EcoTermales." },
          { name: "Canyoneering and Waterfall Rappelling", description: "Drop down rushing canyon walls and waterfalls hidden deep inside the rainforest." },
          { name: "Canopy Ziplining", description: "Fly through the tree line on high-speed ziplines that offer breathtaking, panoramic views of the volcano." },
          { name: "Lake Arenal", description: "Enjoy kayaking, stand-up paddleboarding, or a scenic sunset boat cruise on Costa Rica's largest lake." },
          { name: "Night Rainforest Walks", description: "Explore the jungle after dark with a guide to see red-eyed tree frogs, tarantulas, and sleeping birds." }
        ]
      }
    ],
    planningBlocks: [{
      title: "Need help Planning Your Itinerary? please answer the following Questions And our Costa Rica experts Will organize the perfect Local experiencies for your Dream Costa Rica vacation.",
      questions: generalQuestions
    }]
  },
  {
    slug: "guanacaste",
    title: "Guanacaste",
    region: "North Pacific Coast",
    summary:
      "Guanacaste province is located in the north pacific side of Costa Rica, famous for its stunning tropical beaches, sunny weather, diverse wildlife, and rich cultural heritage. Whether you are looking for surf, nature, or luxury relaxation, here are the absolute best spots and activities in the province.",
    image: images.guanacaste,
    bestFor: ["Nosara", "Las Catalinas", "Playa Flamingo"],
    sections: [
      {
        title: "Top rated places to visit in Guanacaste",
        kind: "attractions",
        items: [
          { name: "Nosara", description: "is a serene, eco-conscious coastal community. Often referred to as the yoga and wellness capital of Central America." },
          { name: "Las Catalinas", description: "A car-free, Mediterranean-style coastal village perfect for sea kayaking and mountain biking." },
          { name: "Playa Flamingo", description: "A beautiful upscale beach featuring clear blue waters and a world-class luxury marina, sports fishing paradise !" },
          { name: "Playa Conchal", description: "A breathtaking white-sand beach made entirely of millions of tiny, crushed seashells." },
          { name: "Tamarindo", description: "The ultimate hub for surfing, vibrant nightlife, and beachside dining." },
          { name: "Santa Teresa", description: "Blends world-class surfing, holistic wellness, and a laid-back, tropical-chic lifestyle." }
        ]
      },
      {
        title: "Incredible National Parks & Nature .",
        kind: "attractions",
        items: [
          { name: "Rincón de la Vieja National Park", description: "Hike active volcanic landscapes featuring bubbling mud pots, sulfur hot springs, and hidden waterfalls." },
          { name: "Santa Rosa National Park", description: "Explore one of the world's last remaining tropical dry forests and protect historic battle monuments." },
          { name: "Tenorio Volcano National Park", description: "Walk through the rainforest to marvel at Rio Celeste, a river famous for its brilliant turquoise-blue water." },
          { name: "Palo Verde National Park", description: "Take a boat safari along the Tempisque River to spot massive crocodiles, iguanas, and thousands of exotic birds." }
        ]
      },
      {
        title: "Best tours & Experiences",
        kind: "tours",
        items: [
          { name: "Scuba Diving at Las Catalinas Islands", description: "Swim alongside giant oceanic manta rays, reef sharks, and sea turtles." },
          { name: "Ocean Kayaking & Snorkeling", description: "Paddle out to calm bays to view colorful coral reefs and marine life." },
          { name: "ATV & Off-Road Tours", description: "Speed through rugged jungle trails and hidden backroads to discover remote beaches." },
          { name: "World-Class Zip Lining", description: "Fly across canyon canopies with sweeping views of the Pacific coastline." }
        ]
      }
    ],
    planningBlocks: [{
      title: "Need help Planning Your Itinerary? please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
      questions: generalQuestions
    }]
  },
  {
    slug: "manuel-antonio",
    title: "Manuel Antonio",
    region: "Central Pacific Coast",
    summary:
      "Manuel Antonio is the perfect combination of a lush tropical rainforest and pristine Pacific beaches. It is one of Costa Rica's most popular destinations because it offers incredible wildlife sightings right next to the ocean.",
    image: images.manuelAntonio,
    bestFor: ["Manuel Antonio National Park", "Manuel Antonio Beach", "Espadilla Beach"],
    sections: [
      {
        title: "Must-Visit Attractions",
        kind: "attractions",
        items: [
          { name: "Manuel Antonio National Park", description: "Walk the scenic trails to see sloths, iguanas, and three different species of monkeys in their natural habitat." },
          { name: "Manuel Antonio Beach", description: "Relax inside the national park on this stunning, white-sand bay famous for its calm turquoise waters." },
          { name: "Espadilla Beach", description: "Spend the afternoon on the main public beach outside the park, perfect for surfing, swimming, and watching spectacular sunsets." },
          { name: "Punta Catedral", description: "Hike the loop trail inside the park along high cliffs to enjoy panoramic views of the ocean and rocky islands." },
          { name: "Biesanz Beach", description: "Visit this hidden, calm cove tucked away in the jungle, ideal for swimming and renting kayaks without the crowds." }
        ]
      },
      {
        title: "Best Activities & Experiences",
        kind: "tours",
        items: [
          { name: "Catamaran Wildlife Cruise", description: "Sail along the coast to look for dolphins, humpback whales (in season), and enjoy snorkeling near coral reefs." },
          { name: "Damas Island Mangrove Tour", description: "Paddle a kayak or take a boat through protected wetlands to spot exotic birds, tree frogs, and anteaters." },
          { name: "Guided Night Walks", description: "Explore the rainforest after dark with a naturalist guide to find nocturnal creatures like red-eyed tree frogs and tarantulas." },
          { name: "Parasailing & Jet Skiing", description: "Fly high above Espadilla Beach for a bird's-eye view of the entire coastline and national park." }
        ]
      }
    ],
    planningBlocks: [{
      title: "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
      questions: generalQuestions
    }]
  },
  {
    slug: "uvita",
    title: "Uvita",
    region: "South Pacific Coast",
    summary:
      "Uvita is a stunning eco-adventure destination located on Costa Rica’s South Pacific coast. Famous for its rugged coastline, rich marine life, and lush mountains meeting the sea, it offers a more laid-back vibe than other beach towns.",
    image: images.uvita,
    bestFor: ["Marino Ballena National Park", "Uvita Waterfall", "Playa Hermosa"],
    sections: [
      {
        title: "Must-Visit Attractions",
        kind: "attractions",
        items: [
          { name: "Marino Ballena National Park", description: "Walk along the famous \"Whale Tail\" (Tombolo), a unique sandbar formation shaped exactly like a whale's tail." },
          { name: "Uvita Waterfall", description: "Slide down a natural, smooth rock waterslide into a refreshing jungle pool or relax at the on-site cafe." },
          { name: "Playa Hermosa", description: "Relax on a massive, uncrowded grey-sand beach perfect for long walks, beach sports, and beautiful sunsets." },
          { name: "El Pavón Waterfall", description: "Swim in a secluded jungle cascade featuring a massive boulder perfectly wedged at the top of the falls." }
        ]
      },
      {
        title: "Best Activities & Experiences",
        kind: "tours",
        items: [
          { name: "Whale Watching Tours", description: "Board a boat during the two annual seasons (January–March and July–October) to see migrating Humpback whales." },
          { name: "Scuba Diving & Snorkeling at Caño Island", description: "Take a day trip to one of Costa Rica's best marine reserves to swim with reef sharks, sea turtles, and rays." },
          { name: "Surfing for All Levels", description: "Take a surf lesson at Playa Uvita (great for beginners) or head slightly north to Playa Hermosa for bigger waves." },
          { name: "Sea Caves Kayaking at Ventanas Beach", description: "Paddle through massive ocean caves carved into the cliffs during low tide." }
        ]
      }
    ],
    planningBlocks: [
      {
        title: "To help you map out your time in Uvita, let me know:",
        questions: [
          "Will you be renting a 4x4 vehicle? (Many mountain hotels and waterfalls here require one!)",
          "Do you want to align your trip with the Humpback whale migration seasons?",
          "Are you looking for eco-lodge or boutique hotel recommendations?"
        ]
      },
      {
        title: "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: [
          ...generalQuestions,
          "Will you be renting a 4x4 vehicle? (Many mountain hotels and waterfalls here require one!)",
          "Do you want to align your trip with the Humpback whale migration seasons?",
          "Are you looking for eco-lodge or boutique hotel recommendations?"
        ]
      }
    ]
  },
  {
    slug: "drake-bay",
    title: "Drake Bay",
    region: "South pacific coast",
    summary:
      "Drake Bay is one of Costa Rica’s most remote and biodiverse destinations. Located on the rugged Osa Peninsula, it serves as the ultimate gateway to untouched rainforests and pristine marine reserves.",
    image: images.drakeBay,
    bestFor: ["Corcovado National Park (Sirena Station)", "Caño Island Biological Reserve", "Playa San Josecito"],
    sections: [{
      title: "Best Activities & Experiences",
      kind: "tours",
      items: [
        { name: "Corcovado National Park (Sirena Station)", description: "Take a boat to the most biodiverse place on Earth to spot tapirs, peccaries, sloths, coatis, and all four Costa Rican monkey species." },
        { name: "Corcovado National Park (San Pedrillo Station)", description: "Explore pristine, dense primary rainforest trails and hike to hidden waterfalls crashing deep into the jungle." },
        { name: "Caño Island Biological Reserve", description: "Visit a world-class marine sanctuary famous for its crystal-clear turquoise waters and vibrant coral reefs." },
        { name: "Playa San Josecito", description: "Relax on a stunning, remote golden-sand beach bordered by wild jungle, ideal for swimming and sunbathing away from crowds." },
        { name: "World-Class Snorkeling & Scuba Diving", description: "Take a day trip to Caño Island to swim alongside sea turtles, reef sharks, massive schools of fish, and manta rays." },
        { name: "Night Jungle Tours", description: "Explore the rainforest after dark with a naturalist guide to find glowing fungi, sleeping birds, spiders, and tree frogs." },
        { name: "Dolphin and Whale Watching", description: "Charter a boat tour to spot resident super-pods of dolphins and migrating Humpback whales (best from July to October and December to April)." }
      ]
    }],
    planningBlocks: [
      {
        title: "To help you plan your journey to this remote paradise, let me know:",
        questions: [
          "How do you plan to get to Drake Bay? (Taking the boat from Sierpe or flying into the local airstrip?)",
          "What is your fitness level? (Corcovado hikes can range from flat and easy to muddy and strenuous.)",
          "Are you looking for all-inclusive eco-lodge recommendations?"
        ]
      },
      {
        title: "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  },
  {
    slug: "puerto-jimenez",
    title: "Puerto Jiménez",
    region: "South Pacific Coast",
    summary:
      "Puerto Jiménez is the largest town on the Osa Peninsula and the primary southeastern gateway to Corcovado National Park. Located right on the calm waters of the Golfo Dulce, it perfectly balances wild jungle adventures with rich marine life.",
    image: images.puertoJimenez,
    bestFor: ["Corcovado National Park (La Leona Station)", "Dolphin and Whale Watching Safaris", "Corcovado Multi-Day Trekking"],
    sections: [
      {
        title: "Must-Visit Attraction",
        kind: "attractions",
        items: [{ name: "Corcovado National Park (La Leona Station)", description: "Start a rugged, world-class coastal hike into the rainforest to spot scarlet macaws, anteaters, tapirs, and monkeys." }]
      },
      {
        title: "Best Activities & Experiences",
        kind: "tours",
        items: [
          { name: "Dolphin and Whale Watching Safaris", description: "Take a boat tour to see large resident pods of Bottlenose and Spinner dolphins, or migrating Humpback whales (July–October)." },
          { name: "Corcovado Multi-Day Trekking", description: "Hire a certified guide to hike from Puerto Jiménez through La Leona station all the way to Sirena station for an immersive wilderness overnight stay." }
        ]
      }
    ],
    planningBlocks: [{
      title: "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
      questions: generalQuestions
    }]
  },
  {
    slug: "tortuguero",
    title: "Tortuguero",
    region: "North Caribean",
    summary:
      "Tortuguero, is located on the remote northern Caribbean coast, this unique network of water canals and dense rainforest is accessible only by boat or small plane, offering an unparalleled wilderness experience.",
    image: images.tortuguero,
    bestFor: ["Tortuguero National Park Canals", "Tortuguero Beach", "Tortuguero Village"],
    sections: [
      {
        title: "Must- visit attractions",
        kind: "attractions",
        items: [
          { name: "Tortuguero National Park Canals", description: "Navigate a vast labyrinth of natural freshwater canals and lagoons teeming with river wildlife." },
          { name: "Tortuguero Beach", description: "Visit the wild, volcanic black-sand beach famous worldwide as the most important nesting site for the green sea turtle." },
          { name: "Tortuguero Village", description: "Walk through the small, colorful, car-free eco-village to experience local Afro-Caribbean culture, souvenir shops, and local sodas." },
          { name: "Sea Turtle Conservatory (STC)", description: "Visit the small visitor center and museum in town to learn about the history, research, and protection of sea turtles in the area." }
        ]
      },
      {
        title: "Best Activities & Experiences",
        kind: "tours",
        items: [
          { name: "Early Morning Canoe or Kayak Tour", description: "Glide silently through the narrow canal channels with a guide to spot sloths, caimans, river otters, iguanas, and three species of monkeys." },
          { name: "Sea Turtle Nesting Night Tour", description: "Watch giant green sea turtles lay their eggs on the beach under the guidance of a certified ranger (strictly seasonal: July to October)." },
          { name: "Rainforest Night Walks", description: "Explore the jungle trails after dark to spot colorful tree frogs, sleeping toucans, bats, and unique insects." },
          { name: "Birdwatching Safaris", description: "Search for some of the 300+ bird species that live here, including the rare Great Green Macaw, toucans, herons, and kingfishers." }
        ]
      }
    ],
    planningBlocks: [{
      title: "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
      questions: generalQuestions
    }]
  },
  {
    slug: "south-caribbean",
    title: "South Caribbean",
    region: "South  Caribean",
    summary:
      "The South Caribbean coast of Costa Rica (running from Cahuita down to Manzanillo) is famous for its vibrant Afro-Caribbean culture, laid-back reggae vibes, stunning golden-sand beaches, and wild rainforests. It offers a completely different atmosphere compared to the Pacific coast.",
    image: images.southCaribbean,
    bestFor: ["Cahuita National Park", "Puerto Viejo de Talamanca", "Playa Punta Uva"],
    sections: [
      {
        title: "Must-Visit Attractions",
        kind: "attractions",
        items: [
          { name: "Cahuita National Park", description: "Hike a beautiful, flat coastal trail where the rainforest meets a protected white-sand beach, perfect for spotting sloths, monkeys, and raccoons." },
          { name: "Gandoca-Manzanillo National Wildlife Refuge", description: "Explore a wild, rugged reserve featuring dramatic viewpoints, untouched jungle trails, and quiet, hidden beaches." },
          { name: "Puerto Viejo de Talamanca", description: "Visit the lively, colorful main town filled with unique boutique shops, seaside restaurants, reggae bars, and a great nightlife scene." },
          { name: "The Jaguar Rescue Center", description: "Tour this highly respected rescue home in Playa Chiquita to see rehabilitated sloths, wild cats, monkeys, and birds up close." }
        ]
      },
      {
        title: "Best Beaches & Coastal Spots",
        kind: "beaches",
        items: [
          { name: "Playa Cocles", description: "A beautiful, popular golden-sand beach located just south of Puerto Viejo, famous for surfing, beach volleyball, and its iconic tiny offshore island." },
          { name: "Playa Punta Uva", description: "Relax at one of the most picturesque beaches in Costa Rica, featuring calm, emerald-green waters sheltered by palm trees, ideal for swimming and kayaking." },
          { name: "Playa Chiquita", description: "Walk down hidden jungle paths to find small, secluded white-sand coves protected by natural coral reef pools." },
          { name: "Playa Negra", description: "Swim at a vast, calm, pitch-black volcanic sand beach located just north of Puerto Viejo, perfect for a peaceful afternoon." }
        ]
      },
      {
        title: "Best Activities & Experiences",
        kind: "tours",
        items: [
          { name: "Caribbean Food & Chocolate Tours", description: "Taste traditional Afro-Caribbean dishes like \"rice and beans\" cooked in coconut oil, and tour organic cacao farms to make your own chocolate." },
          { name: "Snorkeling the Coral Reefs", description: "Take a boat tour in Cahuita National Park to snorkel inside one of Costa Rica's largest and healthiest coral reef systems." },
          { name: "Biking  the Coastal Road", description: "Rent a beach cruiser bicycle to ride the flat, scenic road connecting Puerto Viejo all the way down to Manzanillo." },
          { name: "Indigenous Bribri Cultural Tour", description: "Visit the nearby Bribri indigenous community in the mountains to learn about their history, medicinal plants, and traditional lifestyle." }
        ]
      }
    ],
    planningBlocks: [{
      title: "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
      questions: generalQuestions
    }]
  }
];

const conciergeServices: ConciergeService[] = [
  {
    title: "1. Bespoke Real Estate Sourcing & Acquisition",
    description: "Navigating Costa Rica’s real estate market requires deep local roots and sharp industry insight. We act exclusively as your buyer’s agent, filtering the market to present only properties that align perfectly with your investment goals and lifestyle preferences.",
    image: "/images/concierge-real-estate.webp",
    items: [
      { name: "Off-Market Access", description: "Exclusive entry to unlisted luxury villas, ocean-view homesites, and prime development land." },
      { name: "Due Diligence Coordination", description: "We connect you with top-tier maritime zone experts, surveyors, and escrow attorneys to safeguard your investment." },
      { name: "Virtual & VIP In-Person Showings", description: "Comprehensive video walkthroughs for remote buyers, or fully hosted private property tours when you arrive." }
    ]
  },
  {
    title: "2. Comprehensive Relocation & Residency Logistics",
    description: "The paperwork and logistics of moving across borders can be overwhelming. Our relocation concierge streamlines the entire transition, managing the heavy lifting so you can focus on the excitement of your move.",
    image: "/images/concierge-relocation.webp",
    items: [
      { name: "Residency & Legal Guidance", description: "Direct introduction to trusted immigration attorneys specializing in Investor, Rentista, and Digital Nomad visas." },
      { name: "Banking & Corporate Setup", description: "White-glove assistance with opening local bank accounts, establishing corporations (S.A.s), and setting up escrow." },
      { name: "Asset Importation", description: "Coordination with premium customs brokers for shipping household containers or importing vehicles smoothly." }
    ]
  },
  {
    title: "3. Pura Vida Lifestyle Integration",
    description: "Settling into a new community involves dozens of moving parts. We handle the local details to ensure your household is fully operational from day one.",
    image: "/images/concierge-lifestyle.webp",
    items: [
      { name: "Private Education Advisory", description: "In-depth consulting on the best international schools (IB programs) in regions like Guanacaste, the Central Valley, and the Southern Zone." },
      { name: "Utilities & Smart Home Setup", description: "Managing installations for high-speed fiber-optic internet, solar integrations, and security systems." },
      { name: "Local Vendor Curation", description: "Introduction to vetted private chefs, property managers, landscape architects, and trusted bilingual medical professionals." }
    ]
  }
];

const englishDictionary: Dictionary = {
  locale: "en",
  seo: {
    title: "Costa Rica Adventures | Travel & Concierge Services",
    description: "Authentic Costa Rica destinations, activities, itinerary planning, real estate sourcing, relocation and lifestyle concierge services."
  },
  nav: {
    home: "Home",
    tours: "Destinations",
    concierge: "Concierge Services",
    contact: "Contact",
    whatsapp: "WhatsApp"
  },
  hero: {
    eyebrow: "Costa Rica",
    title: "Live the Pura Vida Vibe.",
    subtitle: "Imagine waking up to the call of howler monkeys, spending your afternoons under roaring waterfalls, and ending the day watching the sunset dip below the ocean horizon. Costa Rica isn't just a destination on a map; it’s an awakening of the senses.",
    primary: "Explore Destinations",
    secondary: "Ask on WhatsApp"
  },
  intro: {
    title: "Experience our country deeply and authentically.",
    body: "This platform is dedicated to helping you experience our country deeply and authentically. From personalized travel itineraries that take you off the beaten path to honest insights about making this tropical paradise your permanent home, we provide the blueprints for your next great journey."
  },
  tours: {
    eyebrow: "Costa Rica destinations",
    title: "Explore by region",
    body: "Choose a destination to see its attractions, tours, experiences and planning questions.",
    cta: "Ask on WhatsApp",
    details: "Explore destination"
  },
  parallax: {
    eyebrow: "Need help Planning Your Itinerary?",
    title: "Please answer the following Questions",
    body: "Our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
    cta: "Ask on WhatsApp"
  },
  planner: {
    eyebrow: "Planning Questions",
    title: "Need help Planning Your Itinerary?",
    body: "Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
    questions: generalQuestions,
    cta: "Send answers on WhatsApp"
  },
  concierge: {
    title: "Concierge Services",
    subtitle: "Your Costa Rica Transition, Mastered.",
    intro: "Moving to paradise shouldn't feel like a leap into the unknown. At Costa Rica Adventures, we transform the complexities of international relocation and real estate acquisition into a seamless, stress-free journey. From sourcing off-market luxury estates to navigating local legalities, residency, and lifestyle logistics, our dedicated concierge team acts as your trusted boots on the ground.",
    statement: "We don't just help you find a house; we curate your new life under the sun.",
    signatureTitle: "Our Signature Concierge Services",
    services: conciergeServices,
    advantageTitle: "The Concierge Advantage",
    advantageBody: "In Costa Rica, there is no centralized Multiple Listing Service (MLS). This makes local expertise, personal networks, and professional due diligence the single most critical factor in a successful transition. We protect your time, your capital, and your peace of mind.",
    cta: "Speak with our concierge"
  },
  destinationPage: {
    back: "Back to Destinations",
    overview: "Overview",
    whatsapp: "Ask on WhatsApp",
    planning: "Planning Questions"
  },
  footer: {
    tagline: "This platform is dedicated to helping you experience our country deeply and authentically.",
    rights: "All rights reserved."
  },
  destinations
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: englishDictionary,
  es: { ...englishDictionary, locale: "es" }
};

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locales.includes(locale as Locale) ? (locale as Locale) : "en"];
}

export function getDestination(locale: string, slug: string): Destination | undefined {
  return getDictionary(locale).destinations.find((destination) => destination.slug === slug);
}

export function whatsappLink(locale: Locale, subject?: string) {
  const text = subject
    ? `Hello! I want more information about ${subject}.`
    : "Hello! I need help planning my Costa Rica experience.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
