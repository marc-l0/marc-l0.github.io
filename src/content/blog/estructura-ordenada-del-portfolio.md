---
title: "Organicé los archivos de mi portfolio"
description: "Unifiqué las imágenes por proyecto, aclaré la sección de proyectos destacados y actualicé el nombre del paquete."
pubDate: 2026-11-06
publishedAt: "2026-11-06T12:42:02-05:00"
number: 7
---

Cambié el rótulo «Trabajo seleccionado» por **Proyectos destacados**, una descripción más clara del espacio donde presento Mi Dojo y FirmaPE.

## Cada imagen en su lugar

Agrupé las imágenes de ambos proyectos en `src/assets/projects/`. Dentro de Mi Dojo separé las pantallas funcionales del material del proceso. El retrato personal tiene ahora su propia carpeta, `src/assets/profile/`.

FirmaPE utiliza el mismo procesamiento de imágenes de Astro que Mi Dojo. La carpeta `public/` queda para archivos con dirección fija, como los favicons.

## Un nombre y una estructura más claros

Renombré el paquete a `portfolio-axel-marcelo` y añadí un espacio de trabajo de VS Code con el nombre «Portfolio de Axel Marcelo». Separé las fichas de proyectos de los datos personales y actualicé el README para explicar cómo mantener el contenido y distinguir las carpetas fuente de las generadas.

Las direcciones públicas de las páginas y el repositorio de GitHub Pages se mantienen.
