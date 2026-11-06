# Portfolio de Axel Marcelo

Portfolio personal con Astro, TypeScript y Tailwind CSS. Incluye presentación, proyectos destacados, experiencia, tecnologías, contacto y un blog con artículos en Markdown.

## Nombre y espacio de trabajo

El paquete se llama `portfolio-axel-marcelo`. Para ver **Portfolio de Axel Marcelo** en el explorador de VS Code, abre `portfolio-axel-marcelo.code-workspace` desde **Archivo → Abrir espacio de trabajo desde archivo**. El archivo usa una ruta relativa, por lo que funciona con cualquier nombre de carpeta local.

Si tu carpeta todavía se llama `porfolio-dev`, puedes cerrarla en VS Code, renombrarla a `portfolio-axel-marcelo` desde el explorador de tu sistema y volver a abrirla. `git pull` no renombra la carpeta que contiene tu copia local. El repositorio remoto sigue llamándose `marc-l0.github.io`, como corresponde a su dirección de GitHub Pages.

## Desarrollo local

Requisitos: Node.js **22.12 o superior** y npm. Validado con Node 24.

Desde la carpeta raíz del proyecto:

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
.github/workflows/                 # Automatización de despliegue
.vscode/                           # Extensiones recomendadas y depuración
public/                            # Archivos con URL fija (favicons)
src/
├── assets/                        # Imágenes que Astro procesa y optimiza
│   ├── profile/                   # Retrato personal
│   └── projects/
│       ├── firmape/               # Capturas de FirmaPE
│       └── mi-dojo/
│           ├── screens/           # Pantallas de la versión funcional
│           └── process/           # Prototipos y evolución del diseño
├── components/
│   ├── icons/                     # Iconos usados en la interfaz
│   ├── layout/                    # Cabecera y pie compartidos
│   ├── sections/                  # Secciones de la portada
│   └── ui/                        # Elementos de presentación reutilizables
├── content/
│   ├── blog/                      # Artículos y Notas del camino
│   └── projects/                  # Documentación de los proyectos
├── data/
│   ├── portfolio.ts               # Perfil, navegación, experiencia y tecnologías
│   └── projects.ts                # Fichas, imágenes y enlaces de los proyectos
├── layouts/                       # Documento HTML y metadatos comunes
├── pages/                         # Rutas públicas y composición de páginas
├── styles/                        # Estilos y reglas responsive
├── utils/                         # Funciones compartidas
└── content.config.ts              # Validación de metadatos del blog
portfolio-axel-marcelo.code-workspace # Espacio de trabajo de VS Code
```

### Carpetas generadas

`.astro/` contiene tipos y cachés de Astro; `dist/`, la compilación de producción; y `node_modules/`, las dependencias instaladas. Se generan automáticamente, están excluidas de Git y permanecen en la raíz porque las herramientas esperan encontrarlas allí. No guardes código fuente ni imágenes dentro de ellas.

## Editar el contenido

- **Perfil, experiencia y tecnologías:** `src/data/portfolio.ts`.
- **Proyectos destacados:** `src/data/projects.ts`. Importa sus imágenes desde `src/assets/projects/<nombre-del-proyecto>/`; Astro las optimiza mediante el componente `Image`. `source` y `details` son enlaces opcionales al código y al caso de estudio.
- **Imágenes:** retratos en `src/assets/profile/`; capturas y material del proceso en la carpeta de cada proyecto. Usa `screens/` y `process/` cuando haya ambas categorías. `public/` queda reservado para archivos que deban servirse con una URL fija y sin procesamiento.
- **Secciones:** `src/components/sections/`; el orden se define en `src/pages/index.astro`.
- **Estilo:** `src/styles/global.css`.

### Casos de estudio

Mi Dojo tiene una página en `/proyectos/mi-dojo/`. Su relato se edita en `src/content/projects/mi-dojo.md` y la composición con imágenes en `src/pages/proyectos/mi-dojo.astro`. Las pantallas de la demo se presentan en una galería ampliable, separada del archivo de prototipos.

### Publicar un artículo

Crea un archivo en `src/content/blog/`:

```md
---
title: "Título del artículo"
description: "Resumen del contenido."
pubDate: 2026-11-06
publishedAt: "2026-11-06T11:00:00-05:00"
number: 8
---

Contenido del artículo.
```

El timestamp es ilustrativo: reemplázalo por la fecha y hora reales de Lima (`America/Lima`, UTC-05:00) y usa el siguiente número único. Documenta cada cambio importante en una nueva entrada de Notas del camino, conservando el historial.

El nombre del archivo determina la URL (`mi-articulo.md` → `/blog/mi-articulo/`). La portada muestra las dos entradas más recientes. Los artículos se ordenan por `publishedAt`, o por `pubDate` en las entradas antiguas sin hora. Astro valida los metadatos al compilar.

## Comprobaciones y despliegue

Antes de publicar, ejecuta `npm run build` y revisa la portada, las imágenes, la navegación, el contacto y el blog en escritorio y móvil. El proyecto no define una suite de pruebas automatizadas.

GitHub Actions compila y despliega a GitHub Pages al enviar cambios a `main`. La URL pública se configura con `site` en `astro.config.mjs`. Los comandos de desarrollo no publican cambios.
