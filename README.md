# Portfolio de Axel Marcelo

Portfolio personal con Astro, TypeScript y Tailwind CSS. Incluye presentación, proyectos destacados, experiencia, tecnologías, contacto y un blog con artículos en Markdown.

## Desarrollo local

Requisitos: Node.js **22.23.4 o superior** y npm. Se recomienda Node 24, usado también en Netlify.

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
├── scripts/                       # Comportamiento del formulario de cotización
├── data/
│   ├── portfolio.ts               # Perfil, navegación, experiencia y tecnologías
│   ├── projects.ts                # Fichas, imágenes y enlaces de los proyectos
│   └── services.ts                # Servicios ofrecidos y proceso de trabajo
├── layouts/                       # Documento HTML y metadatos comunes
├── pages/                         # Rutas públicas y composición de páginas
├── styles/                        # Estilos y reglas responsive
├── utils/                         # Funciones compartidas
└── content.config.ts              # Validación de metadatos del blog
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

El nombre del archivo determina la URL (`mi-articulo.md` → `/blog/mi-articulo/`). La portada enlaza al blog, donde los artículos se ordenan por `publishedAt`, o por `pubDate` en las entradas antiguas sin hora. Astro valida los metadatos al compilar.

## Comprobaciones y despliegue

Antes de publicar, ejecuta `npm run build` y revisa la portada, las imágenes, la navegación, el contacto y el blog en escritorio y móvil. El proyecto no define una suite de pruebas automatizadas.

El despliegue principal está en **Netlify**: https://portfolio-axel-marcelo.netlify.app/. `netlify.toml` define `npm run build`, `dist` y `NODE_VERSION=24`. La rama conectada en Netlify se despliega después del push. La configuración de GitHub Actions existente se conserva; el procesamiento del formulario de cotización corresponde a Netlify.

La URL pública se configura con `site` en `astro.config.mjs`. Los comandos de desarrollo no publican cambios.

## Servicios y cotizaciones

Los servicios y las etapas de trabajo están en `src/data/services.ts`. La presentación y experiencia se mantienen en `src/data/portfolio.ts`; los datos comerciales de cada proyecto, en `src/data/projects.ts`. Solo se documenta la participación conocida: no se atribuye una participación específica en FirmaPE sin confirmación.

El formulario se genera en `src/components/forms/QuoteForm.astro` y su comportamiento está en `src/scripts/quote-form.ts`. Usa **Netlify Forms**, sin base de datos ni nuevas dependencias. No requiere claves privadas. Para recibir solicitudes, hay que confirmar la detección del formulario y configurar las notificaciones en Netlify.

Consulta [activación, pruebas y diagnóstico](docs/netlify-forms.md). En local no existe un receptor real de Forms: el servidor de Astro no envía correos ni debe mostrar éxito cuando falla el POST.

## SEO e imagen para compartir

Los metadatos comunes están en `src/layouts/Layout.astro`. La tarjeta de Open Graph se sirve desde `public/og/portfolio.png`; su fuente editable está en `src/assets/social/portfolio.svg`. Si cambia el dominio, actualiza `site` y la dirección escrita en la tarjeta. La ruta de confirmación `/gracias/` no se indexa.

## Revisión antes de promocionar el portfolio

Las tecnologías se agrupan en `technologyGroups` dentro de `src/data/portfolio.ts`. Next.js está incluido por el uso confirmado en Mi Dojo; no se añaden herramientas sin respaldo. La documentación de FirmaPE se conserva hasta recibir los detalles para completarla.

`src/pages/sitemap.xml.ts` genera el sitemap a partir de los artículos y las páginas de proyecto publicadas. Excluye confirmaciones y redirecciones antiguas. `src/pages/robots.txt.ts` anuncia ese sitemap usando la dirección `site` configurada en Astro.

La lista de publicación y comprobación real del contacto está en [docs/pre-publicacion.md](docs/pre-publicacion.md). Las pruebas locales del formulario deben distinguir `astro dev` (envío bloqueado expresamente) de `astro preview` (build de producción, sin receptor de Netlify).

## Navegación por páginas

La portada contiene la presentación y accesos visuales a las secciones. El contenido completo vive en páginas independientes:

| Sección                | Ruta            |
| ---------------------- | --------------- |
| Servicios              | `/servicios/`   |
| Proyectos              | `/proyectos/`   |
| Experiencia            | `/experiencia/` |
| Sobre mí y tecnologías | `/sobre-mi/`    |
| Proceso                | `/proceso/`     |
| Blog                   | `/blog/`        |
| Contacto y cotización  | `/contacto/`    |

`src/layouts/SectionLayout.astro` comparte la estructura de las pantallas y reutiliza los componentes de `src/components/sections/` en modo `standalone`. La navegación superior y las tarjetas de portada usan la misma lista en `src/data/portfolio.ts`. El caso de estudio de Mi Dojo conserva `/proyectos/mi-dojo/`.

Los CTA usan `/contacto/?servicio=...#contacto`. El nombre del formulario de Netlify no cambia. Los marcadores de la versión anterior (`/#servicios`, `/#proyectos`, etc.) se conservan mediante `src/scripts/legacy-anchors.ts`. Las rutas nuevas están incluidas automáticamente en el sitemap.
