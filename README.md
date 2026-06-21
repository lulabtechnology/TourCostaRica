# Costa Rica Adventures

Landing page de viajes y servicios concierge en Costa Rica, construida con Next.js, React y TypeScript.

## Rutas

- `/en` landing principal
- `/en/destinations/[slug]` detalle de cada destino
- `/es` y `/es/destinations/[slug]` rutas alternativas con el contenido actual en inglés

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000/en`.

## Deploy en Vercel

1. Sube el contenido de esta carpeta a un repositorio de GitHub.
2. En Vercel, crea un proyecto y conecta el repositorio.
3. Vercel detectará Next.js automáticamente.
4. El proyecto usa `npm install` y `npm run build`.

## Contacto

El número de WhatsApp se configura en `lib/content.ts` mediante `WHATSAPP_NUMBER`.
