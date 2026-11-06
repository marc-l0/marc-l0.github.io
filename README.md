# Portfolio de Axel Marcelo

Portfolio personal con Astro, TypeScript y Tailwind CSS. Incluye presentación, proyectos, experiencia, tecnologías, contacto y un blog con artículos en Markdown. El diseño comparte tipografía, colores y componentes entre todas las páginas.

## Desarrollo local

Requisitos: Node.js **22.12 o superior** y npm. Validado con Node 24.

```bash
npm ci
npm run dev -- --background
```

Abre `http://localhost:4321` en el navegador de la misma máquina.

```bash
npm run astro -- dev status # Consultar el servidor
npm run astro -- dev logs   # Consultar los registros
npm run astro -- dev stop   # Detener el servidor
npm run build              # Generar el sitio estático en dist/
npm run preview            # Revisar la compilación de producción
```

En el entorno cloud, ejecuta `export ASTRO_TELEMETRY_DISABLED=1` antes de los comandos de Astro.

## Estructura

```text
src/
├── assets/               # Imágenes procesadas por Astro
├── components/
│   ├── icons/            # Iconos SVG reutilizables
│   ├── layout/           # Cabecera y pie compartidos
│   ├── sections/         # Secciones de la portada
│   └── ui/               # Elementos de presentación reutilizables
├── content/blog/         # Artículos Markdown
├── data/portfolio.ts     # Perfil, navegación, proyectos y experiencia
├── layouts/Layout.astro # Documento HTML y metadatos comunes
├── pages/                # Rutas públicas y composición de páginas
├── styles/global.css     # Variables visuales, componentes y responsive
├── utils/date.ts         # Formato de fechas compartido
└── content.config.ts     # Esquema de validación del blog
public/                   # Archivos servidos sin procesamiento
└── projects/             # Capturas de proyectos
```

## Editar el contenido

- **Datos personales y enlaces:** `src/data/portfolio.ts`.
- **Proyectos:** añade elementos a `projects` y sus capturas en `public/projects/`. `source` es opcional: úsalo solo cuando hayas verificado el repositorio correspondiente.
- **Experiencia y tecnologías:** edita `experience` y `skills` en el mismo archivo.
- **Secciones:** modifica `src/components/sections/`; el orden se define en `src/pages/index.astro`.
- **Estilo:** colores y medidas generales al inicio de `src/styles/global.css`; adaptaciones a móvil al final.

### Publicar un artículo

Crea un archivo en `src/content/blog/`:

```md
---
title: "Título del artículo"
description: "Resumen del contenido."
pubDate: 2026-11-06
number: 3
---

Contenido del artículo.
```

El nombre del archivo determina la URL (`mi-articulo.md` → `/blog/mi-articulo/`). Los artículos se ordenan por fecha, del más reciente al más antiguo. La portada muestra los dos últimos. Astro valida los metadatos durante la compilación.

## Comprobaciones y despliegue

Antes de publicar, ejecuta `npm run build` y revisa la portada, los enlaces de navegación, el contacto y las rutas del blog en escritorio y móvil. El proyecto no define una suite de pruebas automatizadas.

GitHub Actions compila y despliega a GitHub Pages al enviar cambios a `main`. La URL pública se configura con `site` en `astro.config.mjs`. Los comandos de desarrollo no publican cambios.
