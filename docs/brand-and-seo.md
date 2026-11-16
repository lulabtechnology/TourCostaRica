# Costa Rica Travel and Living

La marca usa el dominio canónico `https://costaricatravelandliving.com`.
El contenido aprobado y la estructura visual se conservan. Solo cambian marca,
medios, metadatos y mecanismos técnicos de descubrimiento.

## Archivos de marca

- `public/brand/costa-rica-travel-and-living-mark.png`: emblema transparente, 512 × 512.
- `public/brand/costa-rica-travel-and-living-logo.png`: firma horizontal transparente.
- `public/brand/costa-rica-travel-and-living-share.jpg`: tarjeta social principal, 1200 × 630.
- `public/images/social/*.jpg`: ocho tarjetas sociales por destino, 1200 × 630.
- `app/favicon.ico`, `public/apple-touch-icon.png`, `public/brand/icon-*.png`: iconos.
- `public/images/*-editorial.webp`: hero y portadas optimizados; las versiones `*-wide.webp` son para las cabeceras de detalle.

El emblema, el hero y las ocho imágenes nuevas se generaron con la herramienta
integrada de generación de imágenes. Son representaciones visuales generadas,
no fotografías documentales ni pruebas de una propiedad, un operador o una
experiencia concreta. No se copiaron assets de la web de referencia.

La firma horizontal y las tarjetas sociales usan tipografía determinista sobre
los nuevos assets para preservar exactamente el nombre de la marca.

## Hero de video

El prompt completo está en `gemini-hero-prompt.txt`. Tras generar y aprobar el
video, guardarlo en `public/videos/costa-rica-hero.mp4` y volver a desplegar.
El hero conserva la imagen cuando no existe el archivo, falla la reproducción,
se usa ahorro de datos o se solicita reducir movimiento. El video se silencia,
se repite y se pausa al salir de pantalla. Incluye control accesible de pausa.

## SEO y descubrimiento en buscadores con IA

Los metadatos definen marca, título, descripción, canonical, Open Graph y
Twitter por página. `robots.txt`, `sitemap.xml` y `llms.txt` se generan desde los
datos existentes. El JSON-LD describe Organization, WebSite, CollectionPage,
Service, TouristDestination, TouristAttraction y BreadcrumbList cuando aplica.
No incluye direcciones, valoraciones, premios ni información comercial inventada.

Las rutas `/es` conservan el contenido inglés aprobado y canonicalizan a su
equivalente `/en`. Solo las nueve páginas canónicas aparecen en el sitemap.
Agregar hreflang español únicamente cuando exista una traducción aprobada.

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
