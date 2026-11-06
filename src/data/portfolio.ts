import type { ImageMetadata } from "astro";
import dojoClasses from "../assets/projects/mi-dojo/clases-movil.jpeg";
import dojoApplications from "../assets/projects/mi-dojo/postulaciones-movil.jpeg";

export const profile = {
  name: "Axel Marcelo",
  shortName: "Marcelo",
  role: "Desarrollador web",
  location: "Lima, Perú",
  email: "marceloaxel3@gmail.com",
  github: "https://github.com/marc-l0",
  linkedin: "https://www.linkedin.com/in/marcelaxl/",
  description:
    "Desarrollador web en formación, con interés en el diseño de interfaces y la creación de aplicaciones útiles. Conoce mis proyectos, experiencia y aprendizajes.",
};

export const navigation = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Blog", href: "/blog/" },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string | ImageMetadata;
  secondaryImage?: ImageMetadata;
  secondaryImageAlt?: string;
  imageAlt?: string;
  details?: string;
  status?: string;
  coverTagline?: string;
  technologies: string[];
  source?: string;
}

export const projects: Project[] = [
  {
    title: "Mi Dojo",
    image: dojoClasses,
    imageAlt: "Mi Dojo en móvil: clases vigentes, horarios y cupos disponibles",
    secondaryImage: dojoApplications,
    secondaryImageAlt: "Mi Dojo en móvil: revisión y filtrado de postulaciones",
    category: "Aplicación web · Gestión de clases de karate",
    description:
      "Clases, profesores y postulaciones en un mismo lugar. Desarrollé una aplicación adaptable a celulares para administrar un dojo y facilitar la inscripción mediante enlaces y códigos QR.",
    technologies: ["Astro", "React", "NestJS", "Google Sheets API"],
    source:
      "https://github.com/marc-l0/gestion-dojo-karate/tree/feature/postulaciones-movil",
    details: "/proyectos/mi-dojo/",
    status: "En desarrollo · Demo local funcional",
  },
  {
    title: "FirmaPE",
    category: "Aplicación móvil · Gestión documental",
    description:
      "Una plataforma de firma electrónica y gestión documental para aprobar y dar seguimiento a documentos. Una aplicación móvil conectada a una API REST y una base de datos SQL Server.",
    image: "/projects/firmape.webp",
    imageAlt:
      "Vista de la aplicación FirmaPE para la gestión y firma de documentos",
    technologies: ["Kotlin", "Python", "Flask", "SQL Server"],
  },
];

export const experience = [
  {
    period: "Actualmente",
    role: "Practicante de desarrollo web",
    organization: "MACROMEC S.A.C.",
    description:
      "Desarrollo y mantenimiento de aplicaciones web. Implementación de funcionalidades, corrección de errores y mejora de interfaces.",
    current: true,
  },
  {
    period: "2025",
    role: "Proyectos personales",
    organization: "Desarrollo independiente",
    description:
      "Creación de proyectos con HTML, CSS y JavaScript, aplicando buenas prácticas de desarrollo y diseño responsive.",
    current: false,
  },
  {
    period: "2024",
    role: "Formación en desarrollo web",
    organization: "Aprendizaje y práctica",
    description:
      "Primeros proyectos de programación, diseño de interfaces y desarrollo frontend. La base de un aprendizaje continuo.",
    current: false,
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Astro",
  "Tailwind CSS",
  "Python",
  "Flask",
  "Kotlin",
  "SQL Server",
  "Git",
];
