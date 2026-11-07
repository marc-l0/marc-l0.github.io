# Cotizaciones con Netlify Forms

## Integración elegida

El portfolio sigue siendo un sitio estático de Astro. El formulario `cotizacion` se genera en el HTML de la portada con `data-netlify="true"`, un campo oculto `form-name` y el señuelo `bot-field`. Netlify detecta el formulario al desplegar y procesa los envíos. No se necesita base de datos, función de servidor ni clave privada.

Con JavaScript se envía un POST real a `/` codificado como `application/x-www-form-urlencoded`, siguiendo el flujo de Netlify Forms. Solo se muestra éxito ante una respuesta HTTP satisfactoria; los fallos conservan los datos. Sin JavaScript se utiliza el POST HTML estándar con destino `/gracias/`. La validación nativa del navegador permanece disponible sin JavaScript.

## Activación en Netlify

1. Publica esta versión del repositorio en la rama conectada al sitio `portfolio-axel-marcelo.netlify.app`.
2. En el panel de Netlify, abre **Forms**. Si aparece la opción **Enable form detection**, actívala y vuelve a desplegar el sitio. Los nombres o ubicación exacta del panel pueden variar.
3. Espera a que termine el despliegue y confirma que aparece el formulario **cotizacion** en Forms. La detección depende del HTML del nuevo despliegue, no del servidor de desarrollo.
4. Configura en Netlify las notificaciones por correo para las nuevas solicitudes e indica la dirección donde quieras recibirlas. El email visible del portfolio no configura automáticamente estas notificaciones.
5. Envía una consulta de prueba con tu propio correo desde el sitio publicado. Confirma que aparece en Forms y que llega la notificación. Revisa también la carpeta de spam y las submissions filtradas si fuera necesario.
6. Prueba el envío desactivando JavaScript en el navegador. La ruta `/gracias/` debe abrirse después del POST procesado por Netlify.

El código está preparado; la recepción y las notificaciones no se consideran verificadas hasta completar esta prueba en el sitio publicado. Los límites de uso de Forms dependen del plan y configuración de tu cuenta.

## Configuración de build

`netlify.toml` declara:

- Comando: `npm run build`.
- Carpeta publicada: `dist`.
- `NODE_VERSION=24`.

Esta variable no es un secreto. La integración no requiere nuevas variables privadas. `site` en `astro.config.mjs` contiene la dirección pública de Netlify para los enlaces canónicos, Open Graph y datos estructurados.

El formulario depende del procesamiento de Netlify. En GitHub Pages o en un servidor estático local no hay un receptor de formularios; un error de envío en esos entornos no se convierte en una confirmación falsa.

## Campos y protección

Se reciben nombre, email, empresa opcional, servicio, descripción, presupuesto opcional y plazo opcional. Hay validación de campos obligatorios, correo y longitudes, mensajes asociados a cada campo, estados accesibles y bloqueo de envíos simultáneos.

La protección básica incluye el campo señuelo de Netlify y su filtrado de spam. La validación en el navegador facilita el uso, pero no debe considerarse una barrera de seguridad de servidor. No se solicitan contraseñas ni datos sensibles. El texto del formulario explica para qué se usarán los datos.

Para cambiar los servicios, edita `src/data/services.ts`. Los enlaces `/?servicio=full-stack#contacto`, `/?servicio=desarrollo-web#contacto` y `/?servicio=mantenimiento#contacto` preseleccionan el campo. El valor `por-definir` sirve a quien necesita orientación.

## Comprobaciones antes de publicar

- Ejecutar `npm run build` y confirmar que el formulario existe en `dist/index.html`, incluidos su nombre, el campo `form-name`, el señuelo y todos los campos.
- Abrir los CTA de servicios y de proyecto; comprobar la preselección y que no se borran los datos al cambiar de servicio en la misma página.
- Probar campos vacíos, email inválido y descripción breve; los errores deben impedir la petición y enfocar el primer campo inválido.
- Ante un error de red o HTTP, deben conservarse los datos y habilitarse el reintento. Durante el envío no se admiten solicitudes duplicadas.
- Las pruebas locales con respuestas HTTP controladas solo validan el comportamiento de la interfaz. No prueban la recepción en Netlify ni la entrega de correo.

## Diagnóstico

Si el formulario falla en producción, confirma el nombre `cotizacion` en el panel, la detección activada y el despliegue más reciente. Un formulario detectado sin emails suele requerir revisar las notificaciones, el destinatario y el spam; no implica necesariamente que la solicitud no se haya almacenado.

La página `/gracias/` está excluida de indexación. La confirmación de envío en la interfaz no promete que ya se haya leído el mensaje ni que se haya entregado una notificación por correo.
