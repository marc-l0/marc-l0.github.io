import type { ImageMetadata } from "astro";
import dojoClasses from "../assets/projects/mi-dojo/screens/clases-movil.jpeg";
import dojoApplications from "../assets/projects/mi-dojo/screens/postulaciones-movil.jpeg";
import firmaOverview from "../assets/projects/firmape/overview.webp";

export interface Project {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  participation?: string;
  features: string[];
  image: ImageMetadata;
  secondaryImage?: ImageMetadata;
  secondaryImageAlt?: string;
  imageAlt: string;
  details?: string;
  status?: string;
  technologies: string[];
  source?: string;
}

export const projects: Project[] = [
  {
    title: "Mi Dojo",
    problem:
      "Centralizar horarios, profesores, solicitudes y cupos de un dojo.",
    solution:
      "Una aplicación web con administración y postulación pública desde el celular.",
    participation:
      "Desarrollo individual del frontend, backend, integración con Google Sheets y autenticación durante mis prácticas.",
    features: [
      "Clases y calendario",
      "Postulaciones y cupos",
      "Convocatorias con QR",
    ],
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
    problem: "Organizar la aprobación y el seguimiento de documentos.",
    solution:
      "Una aplicación móvil conectada a una API REST y almacenamiento en SQL Server.",
    features: [
      "Firma electrónica",
      "Gestión documental",
      "Aprobación y seguimiento",
    ],
    category: "Aplicación móvil · Gestión documental",
    description:
      "Una plataforma de firma electrónica y gestión documental para aprobar y dar seguimiento a documentos. Una aplicación móvil conectada a una API REST y una base de datos SQL Server.",
    image: firmaOverview,
    imageAlt:
      "Vista de la aplicación FirmaPE para la gestión y firma de documentos",
    technologies: ["Kotlin", "Python", "Flask", "SQL Server"],
  },
];
