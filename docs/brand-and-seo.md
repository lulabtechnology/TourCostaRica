# Costa Rica Travel and Living

La marca usa el dominio canónico `https://costaricatravelandliving.com`.
El contenido aprobado y la estructura visual se conservan. Solo cambian marca,
medios, metadatos y mecanismos técnicos de descubrimiento.

## Archivos de marca

- `public/brand/costa-rica-travel-and-living-mark.png`: emblema transparente, 512 × 512.
- `public/brand/costa-rica-travel-and-living-logo.png`: firma horizontal transparente.
- `public/brand/costa-rica-travel-and-living-share-v2*.jpg`: tarjetas sociales principales, 1200 × 630, en ambos idiomas.
- `public/images/social/photographic/`: tarjetas sociales por destino e idioma, 1200 × 630.
- `app/favicon.ico`, `public/apple-touch-icon.png`, `public/brand/icon-*.png`: iconos.
- `public/images/*-photographic.webp`: portadas fotográficas con referencia visual; las versiones `*-photographic-wide.webp` son para las cabeceras de detalle.
- `public/images/hero-video-poster-*.webp`: fotogramas del video aprobado, usados durante la carga o como imagen alternativa.

El emblema y las ocho portadas se generaron con la herramienta integrada de
generación de imágenes. La revisión fotográfica usa imágenes adjuntas de
Traslados Panamá como referencia de color, iluminación y detalle, y referencias
geográficas de Visit Costa Rica cuando se indican. Los prompts y fuentes están
en `photo-prompts-v2.json`. Son representaciones visuales generadas,
no fotografías documentales ni pruebas de una propiedad, un operador o una
experiencia concreta. No se copiaron assets de la web de referencia.

La firma horizontal y las tarjetas sociales usan tipografía determinista sobre
los nuevos assets para preservar exactamente el nombre de la marca.

## Hero de video

El video Gemini proporcionado por el propietario ya está incorporado en
`public/videos/costa-rica-hero.mp4`: H.264, 1280 × 720, 24 fps, 10 segundos,
sin pista de audio y con inicio rápido. Se optimizó de 8,06 MB a 2,46 MB.
El prompt de referencia se conserva en `gemini-hero-prompt.txt`.
El hero conserva la imagen cuando no existe el archivo, falla la reproducción,
se usa ahorro de datos o se solicita reducir movimiento. El video se silencia,
se repite y se pausa al salir de pantalla. Incluye control accesible de pausa.

## SEO y descubrimiento en buscadores con IA

Los metadatos definen marca, título, descripción, canonical, Open Graph y
Twitter por página. `robots.txt`, `sitemap.xml` y `llms.txt` se generan desde los
datos existentes. El JSON-LD describe Organization, WebSite, CollectionPage,
Service, TouristDestination, TouristAttraction y BreadcrumbList cuando aplica.
No incluye direcciones, valoraciones, premios ni información comercial inventada.

Las rutas `/en` conservan íntegramente el contenido inglés aprobado. Las rutas
`/es` incluyen una traducción completa de portada, servicios, ocho destinos,
preguntas y mensajes de WhatsApp. El selector EN/ES conserva el destino actual.
Cada idioma tiene canonical propio, HTML lang correcto y hreflang recíproco,
con inglés como x-default. Las 18 páginas aparecen en el sitemap. También hay
tarjetas sociales y datos estructurados en el idioma de cada página.

Estas medidas facilitan rastreo e identificación de la marca. No garantizan
posiciones ni menciones en respuestas de IA; `llms.txt` es un índice auxiliar.

Las tarjetas sociales y los assets de datos estructurados usan el host público
estable de Vercel como CDN. De este modo se pueden descargar incluso antes de
conectar el dominio nuevo. Los enlaces canónicos, la entidad y el sitemap usan
siempre el dominio de la marca. La conexión DNS y el certificado deben estar
operativos para visitar la web a través del dominio nuevo.
Las vistas previas guardadas por aplicaciones externas pueden tardar en
actualizarse después de publicar. El sitio no controla esa caché.

## Verificación

Ejecutar `npm ci`, `npm test` y `npm run build`. La prueba de contenido conserva
un hash del diccionario aprobado antes del cambio de marca, excluyendo rutas
de imágenes y título SEO. También se validan canonicals, marca, hechos del
JSON-LD, transparencia del emblema y dimensiones/peso de las tarjetas sociales.

Documentación usada:

- https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- https://ogp.me/
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/ai-features
