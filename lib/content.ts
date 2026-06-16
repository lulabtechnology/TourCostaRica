export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const WHATSAPP_NUMBER = "50763562486";

export type DestinationItem = {
  name: string;
  description: string;
};

export type DestinationSection = {
  title: string;
  items: DestinationItem[];
};

export type PlanningBlock = {
  title: string;
  questions: string[];
};

export type Destination = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  heroImage?: string;
  bestFor: string[];
  highlights: string[];
  sections: DestinationSection[];
  planningBlocks: PlanningBlock[];
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
  planner: {
    eyebrow: string;
    title: string;
    body: string;
    questions: string[];
    cta: string;
  };
  destinationPage: {
    back: string;
    overview: string;
    whatsapp: string;
    planning: string;
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

const generalQuestions = [
  "How many days will you stay?",
  "Are you traveling with kids, a partner, or solo?",
  "What is your preferred budget level (budget, moderate, or luxury)?"
];

const destinations: Destination[] = [
  {
    slug: "arenal",
    title: "Arenal",
    eyebrow: "Top rated adventure activities and things to do near Arenal Volcano",
    summary:
      "The Arenal Volcano region is the ultimate hub for adventure and relaxation in the northern Costa Rica region. From hiking across old lava fields to soaking in natural thermal rivers, here are the absolute best activities and spots you cannot miss.",
    image: images.arenal,
    bestFor: ["Arenal Volcano National Park", "Mistico Arenal Hanging Bridges Park", "La Fortuna Waterfall"],
    highlights: ["Arenal Volcano National Park", "Mistico Arenal Hanging Bridges Park", "La Fortuna Waterfall", "Lake Arenal"],
    sections: [
      {
        title: "Top rated adventure activities and things to do near Arenal Volcano",
        items: [
          {
            name: "Arenal Volcano National Park",
            description: "Walk the trails through lush rainforests and step onto rugged fields formed by historic lava flows."
          },
          {
            name: "Mistico Arenal Hanging Bridges Park",
            description: "Walk across massive suspension bridges high above the jungle canopy to spot monkeys, sloths, and tropical birds."
          },
          {
            name: "La Fortuna Waterfall",
            description: "Hike down over 500 steps into a steep canyon to swim in the powerful pool of this stunning 70-meter cascade."
          },
          {
            name: "Lake Arenal",
            description: "Enjoy kayaking, stand-up paddleboarding, or a scenic sunset boat cruise on Costa Rica's largest lake."
          }
        ]
      },
      {
        title: "Best Activities & Experiences",
        items: [
          {
            name: "Natural Hot Springs",
            description: "Relax your muscles in volcanic thermal waters at premium locations like Tabacón, Baldi, or EcoTermales."
          },
          {
            name: "Canyoneering and Waterfall Rappelling",
            description: "Drop down rushing canyon walls and waterfalls hidden deep inside the rainforest."
          },
          {
            name: "Canopy Ziplining",
            description: "Fly through the tree line on high-speed ziplines that offer breathtaking, panoramic views of the volcano."
          },
          {
            name: "Night Rainforest Walks",
            description: "Explore the jungle after dark with a guide to see red-eyed tree frogs, tarantulas, and sleeping birds."
          }
        ]
      }
    ],
    planningBlocks: [
      {
        title:
          "Need help Planning Your Itinerary? please answer the following Questions And our Costa Rica experts Will organize the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  },
  {
    slug: "guanacaste",
    title: "Guanacaste Province",
    eyebrow: "Top rated adventure activities in Guanacaste Province",
    summary:
      "Guanacaste is located in the north pacific side of Costa Rica, famous for its stunning tropical beaches, sunny weather, diverse wildlife, and rich cultural heritage. Whether you are looking for surf, nature, or luxury relaxation, here are the absolute best spots and activities in the province.",
    image: images.guanacaste,
    bestFor: ["Tamarindo", "Playa Conchal", "Las Catalinas"],
    highlights: ["Tamarindo", "Playa Conchal", "Las Catalinas", "Playa Flamingo"],
    sections: [
      {
        title: "Top rated adventure activities and places to visit in Guanacaste Province",
        items: [
          {
            name: "Tamarindo",
            description: "The ultimate hub for surfing, vibrant nightlife, and beachside dining."
          },
          {
            name: "Playa Conchal",
            description: "A breathtaking white-sand beach made entirely of millions of tiny, crushed seashells."
          },
          {
            name: "Las Catalinas",
            description: "A car-free, Mediterranean-style coastal village perfect for sea kayaking and mountain biking."
          },
          {
            name: "Playas del Coco",
            description: "A lively beach town popular for scuba diving tours, boat charters, and local nightlife."
          },
          {
            name: "Playa Flamingo",
            description: "A beautiful upscale beach featuring clear blue waters and a world-class luxury marina."
          }
        ]
      },
      {
        title: "Incredible National Parks & Nature.",
        items: [
          {
            name: "Rincón de la Vieja National Park",
            description: "Hike active volcanic landscapes featuring bubbling mud pots, sulfur hot springs, and hidden waterfalls."
          },
          {
            name: "Santa Rosa National Park",
            description: "Explore one of the world's last remaining tropical dry forests and protect historic battle monuments."
          },
          {
            name: "Tenorio Volcano National Park",
            description: "Walk through the rainforest to marvel at Rio Celeste, a river famous for its brilliant turquoise-blue water."
          },
          {
            name: "Palo Verde National Park",
            description: "Take a boat safari along the Tempisque River to spot massive crocodiles, iguanas, and thousands of exotic birds."
          }
        ]
      },
      {
        title: "Best Adventure Experiences",
        items: [
          {
            name: "Scuba Diving at Las Catalinas Islands",
            description: "Swim alongside giant oceanic manta rays, reef sharks, and sea turtles."
          },
          {
            name: "Ocean Kayaking & Snorkeling",
            description: "Paddle out to calm bays to view colorful coral reefs and marine life."
          },
          {
            name: "ATV & Off-Road Tours",
            description: "Speed through rugged jungle trails and hidden backroads to discover remote beaches."
          },
          {
            name: "World-Class Zip Lining",
            description: "Fly across canyon canopies with sweeping views of the Pacific coastline."
          }
        ]
      }
    ],
    planningBlocks: [
      {
        title:
          "Need help Planning Your Itinerary? please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  },
  {
    slug: "manuel-antonio",
    title: "Manuel Antonio",
    eyebrow: "Top rated adventure activities and things to see in Manuel Antonio",
    summary:
      "Manuel Antonio is the perfect combination of a lush tropical rainforest and pristine Pacific beaches. It is one of Costa Rica's most popular destinations because it offers incredible wildlife sightings right next to the ocean.",
    image: images.manuelAntonio,
    bestFor: ["Manuel Antonio National Park", "Manuel Antonio Beach", "Espadilla Beach"],
    highlights: ["Manuel Antonio National Park", "Manuel Antonio Beach", "Espadilla Beach", "Punta Catedral"],
    sections: [
      {
        title: "Must-Visit Attractions",
        items: [
          {
            name: "Manuel Antonio National Park",
            description: "Walk the scenic trails to see sloths, iguanas, and three different species of monkeys in their natural habitat."
          },
          {
            name: "Manuel Antonio Beach",
            description: "Relax inside the national park on this stunning, white-sand bay famous for its calm turquoise waters."
          },
          {
            name: "Espadilla Beach",
            description: "Spend the afternoon on the main public beach outside the park, perfect for surfing, swimming, and watching spectacular sunsets."
          },
          {
            name: "Punta Catedral",
            description: "Hike the loop trail inside the park along high cliffs to enjoy panoramic views of the ocean and rocky islands."
          },
          {
            name: "Biesanz Beach",
            description: "Visit this hidden, calm cove tucked away in the jungle, ideal for swimming and renting kayaks without the crowds."
          }
        ]
      },
      {
        title: "Best Activities & Experiences",
        items: [
          {
            name: "Catamaran Wildlife Cruise",
            description: "Sail along the coast to look for dolphins, humpback whales (in season), and enjoy snorkeling near coral reefs."
          },
          {
            name: "Damas Island Mangrove Tour",
            description: "Paddle a kayak or take a boat through protected wetlands to spot exotic birds, tree frogs, and anteaters."
          },
          {
            name: "Guided Night Walks",
            description: "Explore the rainforest after dark with a naturalist guide to find nocturnal creatures like red-eyed tree frogs and tarantulas."
          },
          {
            name: "Parasailing & Jet Skiing",
            description: "Fly high above Espadilla Beach for a bird's-eye view of the entire coastline and national park."
          }
        ]
      }
    ],
    planningBlocks: [
      {
        title: "To help you plan your visit, let me know:",
        questions: [
          "Do you need the official website link to buy your national park entrance tickets? (They sell out weeks in advance!)",
          "Are you looking for restaurant recommendations with great views?"
        ]
      },
      {
        title:
          "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  },
  {
    slug: "uvita",
    title: "Uvita",
    eyebrow: "Top rated adventure activities in things to do in Uvita",
    summary:
      "Uvita is a stunning eco-adventure destination located on Costa Rica’s South Pacific coast. Famous for its rugged coastline, rich marine life, and lush mountains meeting the sea, it offers a more laid-back vibe than other beach towns.",
    image: images.uvita,
    bestFor: ["Marino Ballena National Park", "Uvita Waterfall", "Playa Hermosa"],
    highlights: ["Marino Ballena National Park", "Uvita Waterfall", "Playa Hermosa", "El Pavón Waterfall"],
    sections: [
      {
        title: "Must-Visit Attractions",
        items: [
          {
            name: "Marino Ballena National Park",
            description: "Walk along the famous \"Whale Tail\" (Tombolo), a unique sandbar formation shaped exactly like a whale's tail."
          },
          {
            name: "Uvita Waterfall",
            description: "Slide down a natural, smooth rock waterslide into a refreshing jungle pool or relax at the on-site cafe."
          },
          {
            name: "Playa Hermosa",
            description: "Relax on a massive, uncrowded grey-sand beach perfect for long walks, beach sports, and beautiful sunsets."
          },
          {
            name: "El Pavón Waterfall",
            description: "Swim in a secluded jungle cascade featuring a massive boulder perfectly wedged at the top of the falls."
          }
        ]
      },
      {
        title: "Best Activities & Experiences",
        items: [
          {
            name: "Whale Watching Tours",
            description: "Board a boat during the two annual seasons (January–March and July–October) to see migrating Humpback whales."
          },
          {
            name: "Scuba Diving & Snorkeling at Caño Island",
            description: "Take a day trip to one of Costa Rica's best marine reserves to swim with reef sharks, sea turtles, and rays."
          },
          {
            name: "Surfing for All Levels",
            description: "Take a surf lesson at Playa Uvita (great for beginners) or head slightly north to Playa Hermosa for bigger waves."
          },
          {
            name: "Sea Caves Kayaking at Ventanas Beach",
            description: "Paddle through massive ocean caves carved into the cliffs during low tide."
          },
          {
            name: "Mangrove Kayaking in Sierpe",
            description: "Explore the largest mangrove system in Central America to spot caimans, monkeys, and exotic river birds."
          }
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
        title:
          "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
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
    eyebrow: "Top rated adventure activities and things to do in Drake Bay",
    summary:
      "Drake Bay is one of Costa Rica’s most remote and biodiverse destinations. Located on the rugged Osa Peninsula, it serves as the ultimate gateway to untouched rainforests and pristine marine reserves.",
    image: images.drakeBay,
    bestFor: ["Corcovado National Park", "Caño Island Biological Reserve", "Playa San Josecito"],
    highlights: ["Corcovado National Park (Sirena Station)", "Corcovado National Park (San Pedrillo Station)", "Caño Island Biological Reserve", "Playa San Josecito"],
    sections: [
      {
        title: "Must-Visit Attractions",
        items: [
          {
            name: "Corcovado National Park (Sirena Station)",
            description: "Take a boat to the most biodiverse place on Earth to spot tapirs, peccaries, sloths, coatis, and all four Costa Rican monkey species."
          },
          {
            name: "Corcovado National Park (San Pedrillo Station)",
            description: "Explore pristine, dense primary rainforest trails and hike to hidden waterfalls crashing deep into the jungle."
          },
          {
            name: "Caño Island Biological Reserve",
            description: "Visit a world-class marine sanctuary famous for its crystal-clear turquoise waters and vibrant coral reefs."
          },
          {
            name: "Playa San Josecito",
            description: "Relax on a stunning, remote golden-sand beach bordered by wild jungle, ideal for swimming and sunbathing away from crowds."
          }
        ]
      },
      {
        title: "Best Activities & Experiences",
        items: [
          {
            name: "World-Class Snorkeling & Scuba Diving",
            description: "Take a day trip to Caño Island to swim alongside sea turtles, reef sharks, massive schools of fish, and manta rays."
          },
          {
            name: "Night Jungle Tours",
            description: "Explore the rainforest after dark with a naturalist guide to find glowing fungi, sleeping birds, spiders, and tree frogs."
          },
          {
            name: "Dolphin and Whale Watching",
            description: "Charter a boat tour to spot resident superpods of dolphins and migrating Humpback whales (best from July to October)."
          },
          {
            name: "Agujitas River Kayaking or SUP",
            description: "Paddle up the calm river estuary at high tide to spot kingfishers, river otters, and monkeys in the mangroves."
          },
          {
            name: "The Drake Bay Hiking Trail",
            description: "Walk the free coastal path from the main town to San Josecito beach, crossing suspension bridges and passing remote coves."
          }
        ]
      }
    ],
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
        title:
          "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  },
  {
    slug: "puerto-jimenez",
    title: "Puerto Jiménez",
    eyebrow: "Top rated adventure activities and things to do in Puerto Jimenez",
    summary:
      "Puerto Jiménez is the largest town on the Osa Peninsula and the primary southeastern gateway to Corcovado National Park. Located right on the calm waters of the Golfo Dulce, it perfectly balances wild jungle adventures with rich marine life.",
    image: images.puertoJimenez,
    bestFor: ["Corcovado National Park", "Golfo Dulce", "Playa Platanares"],
    highlights: ["Corcovado National Park (La Leona Station)", "Playa Platanares", "Golfo Dulce", "Bioluminescence Kayaking Night Tour"],
    sections: [
      {
        title: "Must-Visit Attractions",
        items: [
          {
            name: "Corcovado National Park (La Leona Station)",
            description: "Start a rugged, world-class coastal hike into the rainforest to spot scarlet macaws, anteaters, tapirs, and monkeys."
          },
          {
            name: "Juan Castro Blanco National Water Management Area (Preciosa Platanares Wildlife Refuge)",
            description: "Explore protected mangroves and beaches critical for sea turtle nesting and birdwatching."
          },
          {
            name: "Playa Platanares",
            description: "Relax on a massive, peaceful grey-sand beach just minutes from town, perfect for swimming and sunbathing."
          },
          {
            name: "Golfo Dulce",
            description: "Marvel at one of the world's few tropical fjords, home to rich marine biodiversity and calm, mirror-like waters."
          }
        ]
      },
      {
        title: "Best Activities & Experiences",
        items: [
          {
            name: "Bioluminescence Kayaking Night Tour",
            description: "Paddle out into the Golfo Dulce after dark to witness the water glow with thousands of glittering, light-emitting organisms."
          },
          {
            name: "Dolphin and Whale Watching Safaris",
            description: "Take a boat tour to see large resident pods of Bottlenose and Spinner dolphins, or migrating Humpback whales (July–October)."
          },
          {
            name: "Mangrove Kayaking & SUP",
            description: "Paddle through the calm estuary of the Platanares River to spot caimans, river otters, herons, and boa constrictors."
          },
          {
            name: "Artisanal and Sport Fishing",
            description: "Head out into the gulf or deep ocean for world-class catch-and-release fishing targeting Roosterfish, Marlin, and Sailfish."
          },
          {
            name: "Corcovado Multi-Day Trekking",
            description: "Hire a certified guide to hike from Puerto Jiménez through La Leona station all the way to Sirena station for an immersive wilderness overnight stay."
          }
        ]
      }
    ],
    planningBlocks: [
      {
        title: "To help you organize your arrival in Puerto Jiménez, let me know:",
        questions: [
          "Do you plan to fly into the local airport or drive a 4x4 vehicle?",
          "Are you interested in doing a one-day hike or a multi-day camping trek inside Corcovado?",
          "Would you like recommendations for eco-lodges nestled deep in the surrounding jungle?"
        ]
      },
      {
        title:
          "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  },
  {
    slug: "tortuguero",
    title: "Tortuguero",
    eyebrow: "Top rated adventure activities and things to do in Tortuguero",
    summary:
      "Tortuguero is known as the \"Amazon of Costa Rica.\" Located on the remote northern Caribbean coast, this unique network of water canals and dense rainforest is accessible only by boat or small plane, offering an unparalleled wilderness experience.",
    image: images.tortuguero,
    bestFor: ["Tortuguero National Park Canals", "Tortuguero Beach", "Cerro Tortuguero"],
    highlights: ["Tortuguero National Park Canals", "Tortuguero Beach", "Cerro Tortuguero", "Tortuguero Village"],
    sections: [
      {
        title: "Must-Visit Attractions",
        items: [
          {
            name: "Tortuguero National Park Canals",
            description: "Navigate a vast labyrinth of natural freshwater canals and lagoons teeming with river wildlife."
          },
          {
            name: "Tortuguero Beach",
            description: "Visit the wild, volcanic black-sand beach famous worldwide as the most important nesting site for the green sea turtle."
          },
          {
            name: "Cerro Tortuguero (Tortuguero Hill)",
            description: "Hike up the stairs of this ancient volcanic hill to reach the highest point on the Caribbean coast for panoramic views of the canals, jungle, and ocean."
          },
          {
            name: "Tortuguero Village",
            description: "Walk through the small, colorful, car-free eco-village to experience local Afro-Caribbean culture, souvenir shops, and local sodas."
          },
          {
            name: "Sea Turtle Conservatory (STC)",
            description: "Visit the small visitor center and museum in town to learn about the history, research, and protection of sea turtles in the area."
          }
        ]
      },
      {
        title: "Best Activities & Experiences",
        items: [
          {
            name: "Early Morning Canoe or Kayak Tour",
            description: "Glide silently through the narrow canal channels with a guide to spot sloths, caimans, river otters, iguanas, and three species of monkeys."
          },
          {
            name: "Sea Turtle Nesting Night Tour",
            description: "Watch giant green sea turtles lay their eggs on the beach under the guidance of a certified ranger (strictly seasonal: July to October)."
          },
          {
            name: "Rainforest Night Walks",
            description: "Explore the jungle trails after dark to spot colorful tree frogs, sleeping toucans, bats, and unique insects."
          },
          {
            name: "Birdwatching Safaris",
            description: "Search for some of the 300+ bird species that live here, including the rare Great Green Macaw, toucans, herons, and kingfishers."
          },
          {
            name: "Boat Transfer from La Pavona",
            description: "Enjoy the journey itself—the public boat ride from the La Pavona dock to town serves as your first scenic wildlife cruise."
          }
        ]
      }
    ],
    planningBlocks: [
      {
        title: "To help you organize your trip to this water paradise, let me know:",
        questions: [
          "Will you be visiting during the sea turtle nesting season (July–October)?",
          "How do you plan to get to the dock? (Public bus, renting a car, or an all-inclusive lodge shuttle?)",
          "Are you looking for a budget hotel in the village or an all-inclusive eco-lodge hidden in the canals?"
        ]
      },
      {
        title:
          "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  },
  {
    slug: "south-caribbean",
    title: "South Caribbean",
    eyebrow: "Top rated adventure activities and things to do in the south caribean",
    summary:
      "The South Caribbean coast of Costa Rica (running from Cahuita down to Manzanillo) is famous for its vibrant Afro-Caribbean culture, laid-back reggae vibes, stunning golden-sand beaches, and wild rainforests. It offers a completely different atmosphere compared to the Pacific coast.",
    image: images.caribbean,
    bestFor: ["Cahuita National Park", "Puerto Viejo de Talamanca", "Playa Punta Uva"],
    highlights: ["Cahuita National Park", "Gandoca-Manzanillo National Wildlife Refuge", "Puerto Viejo de Talamanca", "The Jaguar Rescue Center"],
    sections: [
      {
        title: "Must-Visit Attractions",
        items: [
          {
            name: "Cahuita National Park",
            description: "Hike a beautiful, flat coastal trail where the rainforest meets a protected white-sand beach, perfect for spotting sloths, monkeys, and raccoons."
          },
          {
            name: "Gandoca-Manzanillo National Wildlife Refuge",
            description: "Explore a wild, rugged reserve featuring dramatic viewpoints, untouched jungle trails, and quiet, hidden beaches."
          },
          {
            name: "Puerto Viejo de Talamanca",
            description: "Visit the lively, colorful main town filled with unique boutique shops, seaside restaurants, reggae bars, and a great nightlife scene."
          },
          {
            name: "The Jaguar Rescue Center",
            description: "Tour this highly respected rescue home in Playa Chiquita to see rehabilitated sloths, wild cats, monkeys, and birds up close."
          }
        ]
      },
      {
        title: "Best Beaches & Coastal Spots",
        items: [
          {
            name: "Playa Cocles",
            description: "A beautiful, popular golden-sand beach located just south of Puerto Viejo, famous for surfing, beach volleyball, and its iconic tiny offshore island."
          },
          {
            name: "Playa Punta Uva",
            description: "Relax at one of the most picturesque beaches in Costa Rica, featuring calm, emerald-green waters sheltered by palm trees, ideal for swimming and kayaking."
          },
          {
            name: "Playa Chiquita",
            description: "Walk down hidden jungle paths to find small, secluded white-sand coves protected by natural coral reef pools."
          },
          {
            name: "Playa Negra",
            description: "Swim at a vast, calm, pitch-black volcanic sand beach located just north of Puerto Viejo, perfect for a peaceful afternoon."
          }
        ]
      },
      {
        title: "Best Activities & Experiences",
        items: [
          {
            name: "Caribbean Food & Chocolate Tours",
            description: "Taste traditional Afro-Caribbean dishes like \"rice and beans\" cooked in coconut oil, and tour organic cacao farms to make your own chocolate."
          },
          {
            name: "Snorkeling the Coral Reefs",
            description: "Take a boat tour in Cahuita National Park to snorkel inside one of Costa Rica's largest and healthiest coral reef systems."
          },
          {
            name: "Biking the Coastal Road",
            description: "Rent a beach cruiser bicycle to ride the flat, scenic road connecting Puerto Viejo all the way down to Manzanillo."
          },
          {
            name: "Indigenous Bribri Cultural Tour",
            description: "Visit the nearby Bribri indigenous community in the mountains to learn about their history, medicinal plants, and traditional lifestyle."
          }
        ]
      }
    ],
    planningBlocks: [
      {
        title: "To help you plan your South Caribbean adventure, let me know:",
        questions: [
          "Do you prefer to look for a boutique hotel near the beach or an eco-lodge in the middle of the jungle?",
          "Are you interested in getting around by bicycle, public transportation, or renting a car?",
          "Would you like some recommendations for the best Caribbean food restaurants in the area?"
        ]
      },
      {
        title:
          "Need help Planning Your Itinerary? Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
        questions: generalQuestions
      }
    ]
  }
];

const englishDictionary: Dictionary = {
  locale: "en",
  seo: {
    title: "Costa Rica Adventure Activities and Things To Do",
    description: "Top rated adventure activities, places to visit and planning questions for Costa Rica destinations."
  },
  nav: {
    home: "Home",
    tours: "Destinations",
    planner: "Plan Your Itinerary",
    contact: "Contact",
    whatsapp: "WhatsApp"
  },
  hero: {
    eyebrow: "Need help Planning Your Itinerary?",
    title: "Top rated adventure activities and things to do in Costa Rica",
    subtitle:
      "Our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
    primary: "Explore Destinations",
    secondary: "Ask on WhatsApp"
  },
  intro: {
    eyebrow: "Costa Rica destinations",
    title: "Activities, places to visit and planning questions by destination.",
    body:
      "From Arenal Volcano and Guanacaste Province to Manuel Antonio, Uvita, Drake Bay, Puerto Jiménez, Tortuguero and the South Caribbean coast."
  },
  tours: {
    eyebrow: "Destinations",
    title: "Costa Rica places to visit",
    body: "Explore each destination, its must-visit attractions, best activities and planning questions.",
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
    eyebrow: "Planning questions",
    title: "Need help Planning Your Itinerary?",
    body: "Please answer the following Questions And our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
    questions: generalQuestions,
    cta: "Send answers on WhatsApp"
  },
  destinationPage: {
    back: "Back to Destinations",
    overview: "Overview",
    whatsapp: "Ask on WhatsApp",
    planning: "Planning Questions"
  },
  footer: {
    tagline: "Need help Planning Your Itinerary? Our Costa Rica experts Will create the perfect Local experiencies for your Dream Costa Rica vacation.",
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

export function whatsappLink(locale: Locale, destination?: string) {
  const text = destination
    ? `Hello! I want more information about ${destination}.`
    : "Hello! I need help planning my Costa Rica itinerary.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
