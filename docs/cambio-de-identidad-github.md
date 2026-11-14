# Usuario, correo y nombre del repositorio

## Datos actuales

- Usuario de GitHub: `mizu-dev079`.
- Correo de contacto del portfolio: `mizudev079@gmail.com`.
- Nombre del repositorio: `portfolio-axel-marcelo`.
- Sitio público: `https://portfolio-axel-marcelo.netlify.app/`.

El correo y el enlace al perfil se centralizan en `src/data/portfolio.ts`. El layout usa estos datos también en los metadatos. Los enlaces de Mi Dojo apuntan al nuevo usuario y conservan la rama `feature/postulaciones-movil`.

## Repositorio renombrado

Se confirmó el acceso Git a `https://github.com/mizu-dev079/portfolio-axel-marcelo`. El remoto del entorno ya usa esa dirección.

En tu computadora, dentro de la carpeta del proyecto, ejecuta:

```powershell
git remote set-url origin https://github.com/mizu-dev079/portfolio-axel-marcelo.git
git config user.email "mizudev079@gmail.com"
git fetch origin
git pull origin main
git remote -v
git status
```

La carpeta local y el nombre del paquete pueden seguir siendo `portfolio-axel-marcelo`. No hay que reescribir el historial ni cambiar el nombre de autor de los commits anteriores. Verifica el nuevo correo en **GitHub → Settings → Emails** si todavía no lo está.

## Netlify

Renombrar el repositorio no requiere cambiar el subdominio del sitio ni `site` en Astro.

1. En el sitio existente de Netlify, abre la configuración de despliegue continuo y revisa el repositorio conectado. Si la integración no sigue automáticamente el cambio, selecciona `mizu-dev079/portfolio-axel-marcelo` conservando la rama `main`.
2. Mantén el comando `npm run build`, la carpeta `dist` y Node 24, ya declarados en `netlify.toml`.
3. En **Forms → notificaciones**, cambia el destinatario al nuevo correo `mizudev079@gmail.com`. El correo visible del sitio no configura las notificaciones de Netlify.
4. Tras publicar el código y esperar **Published**, verifica el enlace al perfil, el correo en `/contacto/` y los enlaces de Mi Dojo.
5. Realiza una consulta de prueba desde el sitio publicado, confirma que queda registrada en `cotizacion` y que la notificación llega al correo nuevo.

El repositorio renombrado se verificó mediante Git. La conexión de despliegue y el destinatario de las notificaciones deben confirmarse en Netlify.
