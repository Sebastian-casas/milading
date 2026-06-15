# Sebastián IA — Laboratorio Creativo

Landing page / portafolio personal para mostrar videos, imágenes y proyectos
creados con herramientas de inteligencia artificial generativa.

Construido con **React + TypeScript + Vite + Tailwind CSS**.

## 🚀 Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## 📦 Build de producción

```bash
npm run build
npm run preview
```

## ✏️ Cómo agregar o editar proyectos

Todo el contenido del portafolio vive en un solo archivo:

```
src/data/projects.ts
```

Ahí puedes:

- **Agregar un proyecto nuevo**: copia un objeto del arreglo `projects` y
  cambia `title`, `category`, `tool`, `description`, `year`.
- **Video**: usa `videoUrl` con el link de embed de YouTube/Vimeo, por
  ejemplo `https://www.youtube.com/embed/ID_DEL_VIDEO`.
- **Imagen/diseño/web**: usa `thumbnail` con la ruta de una imagen dentro de
  `public/` (por ejemplo `/mi-proyecto.jpg`).
- Las categorías disponibles son: `video`, `imagen`, `diseno`, `web`.

También puedes editar:

- `skills`: el stack/herramientas que se muestran en la sección "Stack creativo".
- `socials`: tus redes sociales y contacto en la sección final.

## 🎨 Personalización de marca

- El logo está en `public/logo.jpg`. Reemplázalo manteniendo el mismo nombre
  o actualiza las referencias en `src/components/Navbar.tsx` y
  `src/components/Footer.tsx`.
- Los colores (negro + magenta del logo) están definidos en
  `tailwind.config.js` bajo `theme.extend.colors`.
- Las tipografías (Anton, Permanent Marker, Space Grotesk, JetBrains Mono) se
  cargan desde Google Fonts en `index.html`.

## ☁️ Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. En vercel.com, elige **Add New → Project** e importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy 🎉

No se requieren variables de entorno.

## 📁 Estructura

```
src/
  components/   → secciones de la landing (Hero, Work, Process, etc.)
  data/         → contenido editable (proyectos, skills, redes)
  App.tsx       → ensamblaje de la página
public/
  logo.jpg      → logo de la marca
```
