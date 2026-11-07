# Antes de compartir el portfolio con clientes

## Código y build

- [ ] Instalar con `npm ci` y ejecutar `npm run build` con Node 24.
- [ ] Comprobar las páginas de portada, proyectos y artículos sin errores de consola ni imágenes rotas.
- [ ] Revisar a 320, 390, 768 y 1440 px: hero, menú, tarjetas, tecnologías, proceso, contacto y footer sin desplazamiento horizontal.
- [ ] Recorrer la navegación y el formulario con Tab y Enter; comprobar foco visible, etiquetas y errores.
- [ ] Revisar que los CTA de cada servicio y proyecto lleven al contacto con la categoría correcta, sin borrar información escrita en la misma página.
- [ ] Probar con movimiento reducido y confirmar que no se fuerce scroll animado.
- [ ] Confirmar que título, descripción, canonical e imagen social corresponden al dominio público.
- [ ] Abrir `/sitemap.xml` y `/robots.txt`; verificar que `/gracias/` no esté en el sitemap y tenga `noindex`.

## Publicación en Netlify

- [ ] Subir los cambios a la rama conectada en Netlify y esperar Published. No se necesita ninguna nueva clave ni variable privada.
- [ ] Confirmar que el formulario `cotizacion` aparece en Forms. Si se activó la detección después del último build, volver a desplegar.
- [ ] Configurar una notificación de nuevas solicitudes para el email destinatario.
- [ ] Enviar una prueba real desde el dominio público y comprobar tres cosas: confirmación en la web, submission en Forms y notificación por correo.
- [ ] Revisar spam si falta la submission o la notificación. No confundir una prueba local con la recepción en producción.
- [ ] Repetir una consulta desde un teléfono y revisar el envío estándar sin JavaScript.
- [ ] Si aparece un error, revisar el estado HTTP y Response de la petición POST antes de cambiar el código.

## Presentación profesional

- [ ] Confirmar que los datos de contacto y disponibilidad están actualizados.
- [ ] Revisar el enlace de Mi Dojo y recordar que su demo es local, no pública.
- [ ] Completar la participación en FirmaPE solo cuando se aporte su documentación; no atribuir trabajo sin respaldo.
- [ ] Revisar la previsualización del enlace en LinkedIn y WhatsApp; sus cachés pueden tardar en reflejar cambios.

Este checklist contiene comprobaciones pendientes para el responsable del sitio, no una certificación de que ya se hayan realizado. La recepción de Netlify Forms y el correo no han podido verificarse desde este entorno.
