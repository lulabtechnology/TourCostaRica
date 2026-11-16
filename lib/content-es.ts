import type { Destination, Dictionary } from "@/lib/content";

const generalQuestions = [
  "¿Cuántos días te quedarás?",
  "¿Viajas con niños, en pareja o por tu cuenta?",
  "¿Qué presupuesto prefieres: económico, intermedio o de lujo?"
];
const planningTitle = "¿Necesitas ayuda para planificar tu itinerario? Responde estas preguntas y nuestros expertos en Costa Rica crearán las experiencias locales ideales para las vacaciones de tus sueños.";
const generalPlanning = () => [{ title: planningTitle, questions: [...generalQuestions] }];
type DestinationCopy = Omit<Destination, "slug" | "image">;

const destinations: Record<string, DestinationCopy> = {
  arenal: {
    title: "Arenal",
    region: "Norte de Costa Rica",
    summary: "La zona del volcán Arenal es el destino por excelencia para combinar aventura y descanso en el norte de Costa Rica. Desde recorrer antiguos campos de lava hasta relajarte en ríos de aguas termales naturales, estas son las mejores actividades y los lugares que no puedes perderte.",
    bestFor: ["Parque Nacional Volcán Arenal", "Parque de Puentes Colgantes Mistico Arenal", "Catarata La Fortuna"],
    sections: [
      { title: "Atracciones que no te puedes perder", kind: "attractions", items: [
        { name: "Parque Nacional Volcán Arenal", description: "Recorre los senderos que atraviesan la exuberante selva tropical y adéntrate en los escarpados campos que dejaron las antiguas coladas de lava." },
        { name: "Parque de Puentes Colgantes Mistico Arenal", description: "Cruza imponentes puentes colgantes sobre las copas de los árboles para observar monos, perezosos y aves tropicales." },
        { name: "Catarata La Fortuna", description: "Desciende más de 500 escalones hasta un profundo cañón para nadar en la poza de esta impresionante caída de agua de 70 metros." },
        { name: "Lago Arenal", description: "Disfruta de un paseo en kayak, practica surf de remo o contempla el atardecer desde un barco en el lago más grande de Costa Rica." }
      ] },
      { title: "Los mejores tours y experiencias", kind: "tours", items: [
        { name: "Aguas termales naturales", description: "Relaja los músculos en aguas termales de origen volcánico en lugares de primera categoría como Tabacón, Baldi o EcoTermales." },
        { name: "Descenso de cañones y rápel en cataratas", description: "Desciende en rápel por paredes de cañones y cataratas escondidas en lo más profundo de la selva tropical." },
        { name: "Tirolinas entre las copas de los árboles", description: "Deslízate a toda velocidad entre los árboles por tirolinas que ofrecen espectaculares vistas panorámicas del volcán." },
        { name: "Lago Arenal", description: "Disfruta de un paseo en kayak, practica surf de remo o contempla el atardecer desde un barco en el lago más grande de Costa Rica." },
        { name: "Caminatas nocturnas por la selva", description: "Explora la selva al caer la noche junto a un guía para observar ranas de ojos rojos, tarántulas y aves dormidas." }
      ] }
    ],
    planningBlocks: [{ title: "¿Necesitas ayuda para planificar tu itinerario? Responde estas preguntas y nuestros expertos en Costa Rica organizarán las experiencias locales ideales para las vacaciones de tus sueños.", questions: [...generalQuestions] }]
  },
  guanacaste: {
    title: "Guanacaste",
    region: "Costa del Pacífico norte",
    summary: "La provincia de Guanacaste se encuentra en la costa del Pacífico norte de Costa Rica y es famosa por sus espectaculares playas tropicales, su clima soleado, su variada fauna y su rica herencia cultural. Tanto si buscas surf y naturaleza como descanso de lujo, estos son los mejores lugares y actividades de la provincia.",
    bestFor: ["Nosara", "Las Catalinas", "Playa Flamingo"],
    sections: [
      { title: "Los lugares mejor valorados para visitar en Guanacaste", kind: "attractions", items: [
        { name: "Nosara", description: "Una tranquila comunidad costera comprometida con el cuidado del medioambiente, conocida como la capital del yoga y el bienestar de Centroamérica." },
        { name: "Las Catalinas", description: "Un pueblo costero de estilo mediterráneo y libre de automóviles, ideal para practicar kayak de mar y ciclismo de montaña." },
        { name: "Playa Flamingo", description: "Una hermosa playa de ambiente exclusivo, aguas azules cristalinas y una marina de lujo de categoría internacional. ¡Un paraíso para la pesca deportiva!" },
        { name: "Playa Conchal", description: "Una deslumbrante playa de arena blanca formada por millones de pequeños fragmentos de conchas marinas." },
        { name: "Tamarindo", description: "El lugar por excelencia para surfear, disfrutar de una animada vida nocturna y comer junto al mar." },
        { name: "Santa Teresa", description: "Combina surf de primer nivel, bienestar integral y un estilo de vida tropical, relajado y sofisticado." }
      ] },
      { title: "Parques nacionales y naturaleza extraordinaria", kind: "attractions", items: [
        { name: "Parque Nacional Rincón de la Vieja", description: "Recorre paisajes de actividad volcánica con pozas de barro burbujeante, aguas termales sulfurosas y cataratas escondidas." },
        { name: "Parque Nacional Santa Rosa", description: "Explora uno de los últimos bosques tropicales secos que quedan en el mundo y conoce los monumentos que preservan la memoria de batallas históricas." },
        { name: "Parque Nacional Volcán Tenorio", description: "Camina por la selva tropical hasta maravillarte con el río Celeste, famoso por el intenso azul turquesa de sus aguas." },
        { name: "Parque Nacional Palo Verde", description: "Recorre el río Tempisque en un safari en bote para observar enormes cocodrilos, iguanas y miles de aves exóticas." }
      ] },
      { title: "Los mejores tours y experiencias", kind: "tours", items: [
        { name: "Buceo en las islas Catalinas", description: "Nada junto a mantarrayas oceánicas gigantes, tiburones de arrecife y tortugas marinas." },
        { name: "Kayak de mar y esnórquel", description: "Rema hasta tranquilas bahías para descubrir coloridos arrecifes de coral y una gran variedad de vida marina." },
        { name: "Tours en cuatrimoto y vehículos todoterreno", description: "Recorre escarpados senderos de selva y caminos escondidos para descubrir playas apartadas." },
        { name: "Tirolinas de primer nivel", description: "Vuela sobre las copas de los árboles y los cañones mientras disfrutas de amplias vistas de la costa del Pacífico." }
      ] }
    ], planningBlocks: generalPlanning()
  },
  "manuel-antonio": {
    title: "Manuel Antonio", region: "Costa del Pacífico central",
    summary: "Manuel Antonio combina a la perfección una exuberante selva tropical con playas vírgenes del Pacífico. Es uno de los destinos más populares de Costa Rica por la increíble oportunidad de observar fauna silvestre junto al mar.",
    bestFor: ["Parque Nacional Manuel Antonio", "Playa Manuel Antonio", "Playa Espadilla"],
    sections: [
      { title: "Atracciones que no te puedes perder", kind: "attractions", items: [
        { name: "Parque Nacional Manuel Antonio", description: "Recorre sus pintorescos senderos para observar perezosos, iguanas y tres especies distintas de monos en su hábitat natural." },
        { name: "Playa Manuel Antonio", description: "Relájate dentro del parque nacional en esta deslumbrante bahía de arena blanca, famosa por sus tranquilas aguas turquesas." },
        { name: "Playa Espadilla", description: "Pasa la tarde en la principal playa pública situada fuera del parque, perfecta para surfear, nadar y contemplar atardeceres espectaculares." },
        { name: "Punta Catedral", description: "Recorre el sendero circular del parque, junto a elevados acantilados, para disfrutar de vistas panorámicas del océano y los islotes rocosos." },
        { name: "Playa Biesanz", description: "Visita esta tranquila cala escondida entre la selva, ideal para nadar y alquilar kayaks lejos de las multitudes." }
      ] },
      { title: "Las mejores actividades y experiencias", kind: "tours", items: [
        { name: "Paseo en catamarán para observar fauna marina", description: "Navega por la costa en busca de delfines y ballenas jorobadas en temporada, y disfruta del esnórquel cerca de los arrecifes de coral." },
        { name: "Tour por los manglares de isla Damas", description: "Recorre humedales protegidos en kayak o en bote para observar aves exóticas, ranas arborícolas y osos hormigueros." },
        { name: "Caminatas nocturnas guiadas", description: "Explora la selva tropical al anochecer con un guía naturalista para encontrar animales nocturnos como ranas de ojos rojos y tarántulas." },
        { name: "Parasailing y motos acuáticas", description: "Elévate sobre la playa Espadilla para contemplar toda la costa y el parque nacional a vista de pájaro." }
      ] }
    ], planningBlocks: generalPlanning()
  },
  uvita: {
    title: "Uvita", region: "Costa del Pacífico sur",
    summary: "Uvita es un espectacular destino de ecoturismo y aventura en la costa del Pacífico sur de Costa Rica. Famoso por su costa agreste, su abundante vida marina y sus verdes montañas que se encuentran con el mar, ofrece un ambiente más tranquilo que otras localidades costeras.",
    bestFor: ["Parque Nacional Marino Ballena", "Catarata Uvita", "Playa Hermosa"],
    sections: [
      { title: "Atracciones que no te puedes perder", kind: "attractions", items: [
        { name: "Parque Nacional Marino Ballena", description: "Camina por la famosa Cola de la Ballena, un tómbolo cuya singular formación de arena tiene precisamente la forma de una cola de ballena." },
        { name: "Catarata Uvita", description: "Deslízate por un tobogán natural de roca pulida hasta una refrescante poza en la selva o descansa en la cafetería del lugar." },
        { name: "Playa Hermosa", description: "Relájate en una extensa y poco concurrida playa de arena gris, perfecta para largas caminatas, deportes de playa y hermosos atardeceres." },
        { name: "Catarata El Pavón", description: "Nada en una apartada cascada de la selva, reconocible por la enorme roca encajada justo encima de la caída de agua." }
      ] },
      { title: "Las mejores actividades y experiencias", kind: "tours", items: [
        { name: "Tours de avistamiento de ballenas", description: "Embárcate durante alguna de las dos temporadas anuales, de enero a marzo y de julio a octubre, para observar la migración de las ballenas jorobadas." },
        { name: "Buceo y esnórquel en la isla del Caño", description: "Haz una excursión de un día a una de las mejores reservas marinas de Costa Rica para nadar junto a tiburones de arrecife, tortugas marinas y rayas." },
        { name: "Surf para todos los niveles", description: "Toma una clase de surf en playa Uvita, ideal para principiantes, o dirígete un poco más al norte, a playa Hermosa, si buscas olas más grandes." },
        { name: "Kayak por las cuevas marinas de playa Ventanas", description: "Rema durante la marea baja por impresionantes cuevas marinas esculpidas en los acantilados." }
      ] }
    ], planningBlocks: [
      { title: "Para ayudarte a organizar tu estancia en Uvita, cuéntanos:", questions: [
        "¿Vas a alquilar un vehículo 4x4? ¡Es necesario para acceder a muchos hoteles de montaña y cataratas de la zona!",
        "¿Quieres que tu viaje coincida con las temporadas de migración de las ballenas jorobadas?",
        "¿Te gustaría recibir recomendaciones de alojamientos ecológicos u hoteles boutique?"
      ] },
      { title: planningTitle, questions: [...generalQuestions,
        "¿Vas a alquilar un vehículo 4x4? ¡Es necesario para acceder a muchos hoteles de montaña y cataratas de la zona!",
        "¿Quieres que tu viaje coincida con las temporadas de migración de las ballenas jorobadas?",
        "¿Te gustaría recibir recomendaciones de alojamientos ecológicos u hoteles boutique?"
      ] }
    ]
  },
  "drake-bay": {
    title: "Bahía Drake", region: "Costa del Pacífico sur",
    summary: "Bahía Drake es uno de los destinos más remotos y biodiversos de Costa Rica. Situada en la agreste península de Osa, es una puerta de entrada excepcional a selvas intactas y reservas marinas de aguas cristalinas.",
    bestFor: ["Parque Nacional Corcovado (estación Sirena)", "Reserva Biológica Isla del Caño", "Playa San Josecito"],
    sections: [{ title: "Las mejores actividades y experiencias", kind: "tours", items: [
      { name: "Parque Nacional Corcovado (estación Sirena)", description: "Viaja en bote hasta el lugar más biodiverso del planeta para observar tapires, pecaríes, perezosos, coatíes y las cuatro especies de monos presentes en Costa Rica." },
      { name: "Parque Nacional Corcovado (estación San Pedrillo)", description: "Explora senderos de bosque primario denso e intacto y camina hasta cataratas escondidas en lo más profundo de la selva." },
      { name: "Reserva Biológica Isla del Caño", description: "Visita un santuario marino de categoría internacional, famoso por sus aguas turquesas cristalinas y sus vibrantes arrecifes de coral." },
      { name: "Playa San Josecito", description: "Relájate en una espectacular y apartada playa de arena dorada rodeada de selva, ideal para nadar y tomar el sol lejos de las multitudes." },
      { name: "Esnórquel y buceo de primer nivel", description: "Haz una excursión de un día a la isla del Caño para nadar junto a tortugas marinas, tiburones de arrecife, enormes bancos de peces y mantarrayas." },
      { name: "Tours nocturnos por la selva", description: "Explora la selva tropical al anochecer con un guía naturalista para descubrir hongos bioluminiscentes, aves dormidas, arañas y ranas arborícolas." },
      { name: "Avistamiento de delfines y ballenas", description: "Contrata una excursión en bote para observar grandes grupos de delfines residentes y ballenas jorobadas migratorias, especialmente de julio a octubre y de diciembre a abril." }
    ] }],
    planningBlocks: [
      { title: "Para ayudarte a planificar tu viaje a este paraíso remoto, cuéntanos:", questions: [
        "¿Cómo piensas llegar a Bahía Drake: en bote desde Sierpe o en avión hasta el aeródromo local?",
        "¿Cuál es tu condición física? Las caminatas en Corcovado pueden ser llanas y sencillas o embarradas y exigentes.",
        "¿Te gustaría recibir recomendaciones de alojamientos ecológicos con todo incluido?"
      ] }, ...generalPlanning()
    ]
  },
  "puerto-jimenez": {
    title: "Puerto Jiménez", region: "Costa del Pacífico sur",
    summary: "Puerto Jiménez es la localidad más grande de la península de Osa y la principal puerta de entrada al Parque Nacional Corcovado por el sureste. A orillas de las tranquilas aguas del Golfo Dulce, combina a la perfección la aventura en plena selva con una abundante vida marina.",
    bestFor: ["Parque Nacional Corcovado (estación La Leona)", "Safaris de avistamiento de delfines y ballenas", "Travesías de varios días por Corcovado"],
    sections: [
      { title: "Una atracción que no te puedes perder", kind: "attractions", items: [
        { name: "Parque Nacional Corcovado (estación La Leona)", description: "Emprende una extraordinaria y exigente caminata costera que se adentra en la selva para observar lapas rojas, osos hormigueros, tapires y monos." }
      ] },
      { title: "Las mejores actividades y experiencias", kind: "tours", items: [
        { name: "Safaris de avistamiento de delfines y ballenas", description: "Haz una excursión en bote para observar grandes grupos de delfines nariz de botella y delfines giradores residentes, o ballenas jorobadas migratorias de julio a octubre." },
        { name: "Travesías de varios días por Corcovado", description: "Contrata a un guía certificado para caminar desde Puerto Jiménez, pasando por la estación La Leona, hasta la estación Sirena y vivir una experiencia inmersiva con una noche en plena naturaleza." }
      ] }
    ], planningBlocks: generalPlanning()
  },
  tortuguero: {
    title: "Tortuguero", region: "Caribe norte",
    summary: "Tortuguero se encuentra en la remota costa del Caribe norte. Esta singular red de canales y densa selva tropical, accesible únicamente en bote o avioneta, ofrece una experiencia de naturaleza incomparable.",
    bestFor: ["Canales del Parque Nacional Tortuguero", "Playa Tortuguero", "Pueblo de Tortuguero"],
    sections: [
      { title: "Atracciones que no te puedes perder", kind: "attractions", items: [
        { name: "Canales del Parque Nacional Tortuguero", description: "Navega por un inmenso laberinto de canales naturales de agua dulce y lagunas repletos de fauna acuática y ribereña." },
        { name: "Playa Tortuguero", description: "Visita esta playa salvaje de arena volcánica negra, mundialmente famosa por ser el lugar de anidación más importante de la tortuga verde." },
        { name: "Pueblo de Tortuguero", description: "Pasea por este pequeño y colorido pueblo ecológico, libre de automóviles, para conocer la cultura afrocaribeña, sus tiendas de recuerdos y sus sodas, los pequeños restaurantes locales." },
        { name: "Centro de conservación de tortugas marinas (STC)", description: "Visita el pequeño centro de visitantes y museo del pueblo para conocer la historia, la investigación y la protección de las tortugas marinas de la zona." }
      ] },
      { title: "Las mejores actividades y experiencias", kind: "tours", items: [
        { name: "Paseo en canoa o kayak al amanecer", description: "Deslízate en silencio por los estrechos canales junto a un guía para observar perezosos, caimanes, nutrias de río, iguanas y tres especies de monos." },
        { name: "Tour nocturno de anidación de tortugas marinas", description: "Observa a las grandes tortugas verdes desovar en la playa bajo la supervisión de un guardaparques certificado. Esta actividad se realiza exclusivamente en temporada, de julio a octubre." },
        { name: "Caminatas nocturnas por la selva", description: "Explora los senderos de la selva al anochecer para observar coloridas ranas arborícolas, tucanes dormidos, murciélagos e insectos singulares." },
        { name: "Safaris de observación de aves", description: "Busca algunas de las más de 300 especies de aves que habitan aquí, entre ellas la escasa lapa verde, tucanes, garzas y martines pescadores." }
      ] }
    ], planningBlocks: generalPlanning()
  },
  "south-caribbean": {
    title: "Caribe Sur", region: "Caribe sur",
    summary: "La costa del Caribe sur de Costa Rica, que se extiende de Cahuita a Manzanillo, es famosa por su vibrante cultura afrocaribeña, el ambiente relajado al ritmo del reggae, sus espectaculares playas de arena dorada y sus selvas vírgenes. Su atmósfera es completamente distinta a la de la costa del Pacífico.",
    bestFor: ["Parque Nacional Cahuita", "Puerto Viejo de Talamanca", "Playa Punta Uva"],
    sections: [
      { title: "Atracciones que no te puedes perder", kind: "attractions", items: [
        { name: "Parque Nacional Cahuita", description: "Recorre un hermoso sendero costero llano donde la selva tropical se encuentra con una playa protegida de arena blanca, ideal para observar perezosos, monos y mapaches." },
        { name: "Refugio Nacional de Vida Silvestre Gandoca-Manzanillo", description: "Explora una reserva agreste y natural con miradores espectaculares, senderos de selva intacta y tranquilas playas escondidas." },
        { name: "Puerto Viejo de Talamanca", description: "Visita el animado y colorido pueblo principal, repleto de originales tiendas boutique, restaurantes frente al mar, bares de reggae y una excelente vida nocturna." },
        { name: "Jaguar Rescue Center", description: "Recorre este reconocido centro de rescate de Playa Chiquita para observar de cerca perezosos, felinos silvestres, monos y aves en rehabilitación." }
      ] },
      { title: "Las mejores playas y rincones de la costa", kind: "beaches", items: [
        { name: "Playa Cocles", description: "Una hermosa y popular playa de arena dorada situada al sur de Puerto Viejo, famosa por el surf, el voleibol de playa y su emblemático islote frente a la costa." },
        { name: "Playa Punta Uva", description: "Relájate en una de las playas más pintorescas de Costa Rica, de aguas tranquilas color verde esmeralda y resguardada por palmeras, ideal para nadar y practicar kayak." },
        { name: "Playa Chiquita", description: "Recorre senderos escondidos entre la selva para descubrir pequeñas calas apartadas de arena blanca, protegidas por piscinas naturales entre los arrecifes de coral." },
        { name: "Playa Negra", description: "Nada en una extensa y tranquila playa de arena volcánica intensamente negra, situada al norte de Puerto Viejo y perfecta para una tarde de descanso." }
      ] },
      { title: "Las mejores actividades y experiencias", kind: "tours", items: [
        { name: "Tours de gastronomía caribeña y chocolate", description: "Prueba platos tradicionales afrocaribeños como el rice and beans, preparado con aceite de coco, y visita fincas de cacao orgánico para elaborar tu propio chocolate." },
        { name: "Esnórquel en los arrecifes de coral", description: "Haz una excursión en bote por el Parque Nacional Cahuita para practicar esnórquel en uno de los sistemas de arrecifes de coral más grandes y mejor conservados de Costa Rica." },
        { name: "Paseo en bicicleta por la carretera costera", description: "Alquila una bicicleta de paseo para recorrer la carretera llana y pintoresca que une Puerto Viejo con Manzanillo." },
        { name: "Tour cultural con la comunidad indígena bribri", description: "Visita la comunidad indígena bribri de las montañas cercanas para conocer su historia, las plantas medicinales y su forma de vida tradicional." }
      ] }
    ], planningBlocks: generalPlanning()
  }
};

export function createSpanishDictionary(english: Dictionary): Dictionary {
  return {
    locale: "es",
    seo: {
      title: "Costa Rica Travel and Living | Viajes y servicios concierge",
      description: "Destinos y experiencias auténticas en Costa Rica, itinerarios a medida, búsqueda de propiedades, reubicación y servicios de concierge para tu nueva vida."
    },
    nav: { home: "Inicio", tours: "Destinos", concierge: "Servicios de concierge", contact: "Contacto", whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Costa Rica", title: "Vive la esencia de la pura vida.",
      subtitle: "Imagina despertar con el llamado de los monos aulladores, pasar las tardes bajo imponentes cataratas y terminar el día contemplando cómo el sol se oculta en el horizonte del mar. Costa Rica es mucho más que un destino en el mapa: es un despertar de los sentidos.",
      primary: "Explorar destinos", secondary: "WhatsApp"
    },
    intro: {
      title: "Conoce nuestro país de forma auténtica y en profundidad.",
      body: "Esta plataforma está dedicada a ayudarte a conocer nuestro país de forma auténtica y en profundidad. Desde itinerarios de viaje personalizados que te llevan más allá de las rutas habituales hasta consejos sinceros para hacer de este paraíso tropical tu hogar permanente, te damos las claves para emprender tu próxima gran aventura."
    },
    tours: {
      eyebrow: "Destinos de Costa Rica", title: "Explora cada región",
      body: "Elige un destino para descubrir sus atracciones, tours y experiencias locales. Escríbenos con tus preguntas sobre el viaje y déjanos encargarnos del resto.",
      cta: "WhatsApp", contact: "Contacto", details: "Explorar destino"
    },
    parallax: {
      eyebrow: "¿Necesitas ayuda para planificar tu itinerario?", title: "Responde estas preguntas",
      body: "Nuestros expertos en Costa Rica crearán las experiencias locales ideales para las vacaciones de tus sueños.", cta: "WhatsApp", contact: "Contacto"
    },
    planner: {
      eyebrow: "Planifica tu viaje", title: "¿Necesitas ayuda para planificar tu itinerario?",
      body: "Responde estas preguntas y nuestros expertos en Costa Rica crearán las experiencias locales ideales para el viaje de tus sueños.",
      questions: [...generalQuestions], cta: "WhatsApp", contact: "Contacto"
    },
    concierge: {
      title: "Servicios de concierge", subtitle: "Tu nueva etapa en Costa Rica, en buenas manos.",
      intro: "Mudarte al paraíso no debería sentirse como un salto a lo desconocido. En Costa Rica Travel and Living, transformamos la complejidad de la reubicación internacional y la compra de propiedades en una experiencia fluida y sin estrés. Desde encontrar propiedades exclusivas fuera del mercado hasta orientarte en los trámites legales, la residencia y los detalles de la vida cotidiana, nuestro equipo de concierge es tu apoyo de confianza en el país.",
      statement: "No solo te ayudamos a encontrar una casa; cuidamos cada detalle de tu nueva vida bajo el sol.",
      signatureTitle: "Nuestros servicios exclusivos de concierge",
      services: [
        {
          image: english.concierge.services[0].image,
          title: "1. Búsqueda y compra de propiedades a tu medida",
          description: "Moverse por el mercado inmobiliario de Costa Rica exige un profundo conocimiento local y una visión experta del sector. Actuamos exclusivamente como representantes del comprador y filtramos el mercado para presentarte solo las propiedades que se ajustan a tus objetivos de inversión y a tu estilo de vida.",
          items: [
            { name: "Acceso a propiedades fuera del mercado", description: "Acceso exclusivo a villas de lujo no anunciadas, terrenos residenciales con vistas al mar y suelo de alto potencial para desarrollo." },
            { name: "Coordinación de la debida diligencia", description: "Te ponemos en contacto con especialistas de primer nivel en zona marítimo-terrestre, topógrafos y abogados expertos en cuentas de depósito en garantía para proteger tu inversión." },
            { name: "Visitas virtuales y recorridos presenciales VIP", description: "Recorridos detallados en video para compradores a distancia o visitas privadas a propiedades con acompañamiento personalizado cuando llegues al país." }
          ]
        },
        {
          image: english.concierge.services[1].image,
          title: "2. Coordinación integral de reubicación y residencia",
          description: "Los trámites y la logística de una mudanza internacional pueden resultar abrumadores. Nuestro servicio de concierge agiliza toda la transición y se encarga de las gestiones más exigentes para que puedas disfrutar de la ilusión de tu nueva etapa.",
          items: [
            { name: "Orientación sobre residencia y asuntos legales", description: "Contacto directo con abogados de inmigración de confianza especializados en las categorías de inversionista y rentista, y en visas para nómadas digitales." },
            { name: "Gestiones bancarias y constitución de sociedades", description: "Asistencia personalizada para abrir cuentas bancarias locales, constituir sociedades anónimas y establecer cuentas de depósito en garantía." },
            { name: "Importación de bienes", description: "Coordinación con agentes aduaneros de primer nivel para trasladar tus enseres domésticos en contenedores o importar vehículos sin contratiempos." }
          ]
        },
        {
          image: english.concierge.services[2].image,
          title: "3. Integración al estilo de vida pura vida",
          description: "Instalarse en una nueva comunidad implica coordinar muchos detalles. Nos encargamos de las gestiones locales para que tu hogar funcione plenamente desde el primer día.",
          items: [
            { name: "Asesoría en educación privada", description: "Orientación detallada sobre los mejores colegios internacionales con programas del Bachillerato Internacional (IB) en regiones como Guanacaste, el Valle Central y la Zona Sur." },
            { name: "Servicios básicos y tecnología para el hogar", description: "Gestión de instalaciones de internet de alta velocidad por fibra óptica, sistemas de energía solar y seguridad." },
            { name: "Selección de proveedores locales", description: "Contacto con chefs privados, administradores de propiedades, paisajistas y profesionales médicos bilingües de confianza, previamente evaluados." }
          ]
        }
      ],
      advantageTitle: "La ventaja de contar con un concierge",
      advantageBody: "En Costa Rica no existe un sistema centralizado de listados inmobiliarios (MLS). Por eso, el conocimiento local, las redes de contactos y una debida diligencia profesional son los factores más importantes para una transición exitosa. Protegemos tu tiempo, tu patrimonio y tu tranquilidad.",
      cta: "Habla con nuestro equipo de concierge"
    },
    destinationPage: { back: "Volver a destinos", overview: "Descripción general", whatsapp: "WhatsApp", contact: "Contacto", planning: "Planifica tu viaje" },
    footer: { tagline: "Esta plataforma está dedicada a ayudarte a conocer nuestro país de forma auténtica y en profundidad.", rights: "Todos los derechos reservados." },
    destinations: english.destinations.map((destination) => {
      const translation = destinations[destination.slug];
      if (!translation) throw new Error(`Missing Spanish destination: ${destination.slug}`);
      return { ...destination, ...translation };
    })
  };
}
