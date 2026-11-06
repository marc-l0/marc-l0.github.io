## El reto

Un dojo necesita coordinar horarios, profesores, solicitudes de inscripción y plazas disponibles. Desarrollé **Mi Dojo** para centralizar ese seguimiento y ofrecer una vía de postulación accesible desde el celular.

La aplicación tiene dos públicos: el administrador, que organiza las clases y revisa las solicitudes, y las personas interesadas, que postulan mediante un formulario público.

## Mi participación

Desarrollé el proyecto de forma individual como parte de mis prácticas. Me encargué del frontend, el backend, la integración con Google Sheets y la autenticación, además de la adaptación a celulares, las pruebas y la corrección de errores. Utilicé herramientas de inteligencia artificial como apoyo durante el desarrollo.

## Dos recorridos conectados

### Para el administrador

- Iniciar sesión y acceder a la gestión del dojo.
- Crear, editar y eliminar clases, y gestionar profesores.
- Consultar las clases programadas en un calendario.
- Compartir convocatorias mediante enlaces y códigos QR, incluso antes del inicio de la clase.
- Buscar y filtrar solicitudes, revisar postulantes y aceptarlos o rechazarlos.
- Mantener el seguimiento de los cupos al gestionar las postulaciones.

### Para quien quiere inscribirse

El recorrido comienza con el enlace o QR de una convocatoria. La persona accede al formulario público desde su dispositivo y envía su postulación para que el administrador la revise.

El diseño contempla pantallas pequeñas y permite elegir tema claro, oscuro o automático.

## Arquitectura y decisiones técnicas

El frontend utiliza **Astro y React**, con **Tailwind CSS y Ant Design** para las interfaces. El backend está construido con **NestJS sobre Node.js**. JavaScript, TypeScript, HTML y CSS forman la base del desarrollo.

En lugar de una base de datos tradicional, utilicé **Google Sheets mediante Google Sheets API** como almacenamiento. Esto implicó configurar el acceso y coordinar la lectura y actualización de la información desde el backend.

La autenticación del administrador utiliza **JWT mediante cookies HTTP-only**. Uno de los retos fue coordinar las sesiones y la conexión entre frontend y backend al acceder desde celulares en la red local.

El proyecto se organiza con **pnpm y Turborepo**, y el control de versiones se realiza con **Git y GitHub**.

## Retos y aprendizajes

### Cupos y solicitudes

Trabajé en el control de solicitudes duplicadas y en evitar aceptaciones sin vacantes. Estos casos conectan la revisión administrativa con la disponibilidad de las clases y requieren validaciones cuidadosas.

### Uso desde el celular

Adapté formularios, calendario y navegación a pantallas pequeñas. También trabajé en la copia de enlaces cuando la aplicación se abre mediante una IP local, y en la consistencia de la interfaz entre los temas claro y oscuro.

### Integración y organización

La conexión con Google Sheets, la configuración de credenciales y la coordinación entre frontend y backend fueron parte importante del aprendizaje. También profundicé en la organización del proyecto, el manejo de ramas y la verificación de cambios antes de compartirlos.

## Pruebas y estado actual

Durante el desarrollo utilicé **Vitest** y verificaciones de navegación con **Playwright**.

Mi Dojo está **en desarrollo, con una versión funcional para demostración al cliente**. Los flujos principales están implementados y la demo se ejecuta desde una computadora; puede abrirse en un celular conectado a la misma red.

Quedan ajustes y validaciones con el cliente antes de considerarla terminada y desplegarla para uso definitivo. Actualmente no hay una demo pública ni un instalador móvil confirmado.

## Código del proyecto

El repositorio es [marc-l0/gestion-dojo-karate](https://github.com/marc-l0/gestion-dojo-karate). Los últimos cambios descritos están en la rama [feature/postulaciones-movil](https://github.com/marc-l0/gestion-dojo-karate/tree/feature/postulaciones-movil).
