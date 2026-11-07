// Keep bookmarks from the previous one-page version working.
const destinations: Record<string, string> = {
  "#servicios": "/servicios/",
  "#proyectos": "/proyectos/",
  "#experiencia": "/experiencia/",
  "#sobre-mi": "/sobre-mi/",
  "#proceso": "/proceso/",
  "#contacto": "/contacto/",
};
function followLegacyAnchor() {
  const path = destinations[location.hash];
  if (path) location.replace(path + location.search + location.hash);
}
followLegacyAnchor();
window.addEventListener("hashchange", followLegacyAnchor);
