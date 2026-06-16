# Costa Rica Premium Travel Website

Web premium bilingüe para tours y experiencias en Costa Rica.

## Stack

- Next.js App Router
- React 19
- TypeScript
- CSS puro, sin Tailwind obligatorio
- Imágenes locales optimizadas en WebP
- Deploy listo para Vercel

## Rutas

- `/es` versión español
- `/en` versión inglés
- `/es/destinations/[slug]`
- `/en/destinations/[slug]`

## Cómo subir a GitHub y Vercel

1. Descomprime el ZIP.
2. Sube la carpeta completa a un repositorio de GitHub.
3. En Vercel, elige **New Project** y conecta ese repositorio.
4. Vercel detecta Next.js automáticamente.
5. Build command: `npm run build`.
6. Install command: `npm install`.

## Desarrollo local

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## WhatsApp

El número configurado es `+507 6356-2486`.
Puedes cambiarlo en `lib/content.ts`.
