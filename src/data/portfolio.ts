export const profile = {
  name: "Axel Marcelo",
  shortName: "Marcelo",
  role: "Desarrollador Full Stack freelance",
  location: "Lima, Perú",
  email: "marceloaxel3@gmail.com",
  github: "https://github.com/marc-l0",
  linkedin: "https://www.linkedin.com/in/marcelaxl/",
  description:
    "Desarrollador Full Stack freelance en Lima, Perú. Desarrollo páginas web, aplicaciones y sistemas a medida para emprendedores y empresas. Cuéntame tu proyecto.",
};

export const navigation = [
  {
    label: "Servicios",
    href: "/servicios/",
    description: "Qué puedo construir para tu negocio y cómo puedo ayudarte.",
  },
  {
    label: "Proyectos",
    href: "/proyectos/",
    description: "Soluciones, pantallas y el proceso detrás de cada proyecto.",
  },
  {
    label: "Experiencia",
    href: "/experiencia/",
    description:
      "Mi recorrido profesional y los aprendizajes que lo acompañan.",
  },
  {
    label: "Sobre mí",
    href: "/sobre-mi/",
    description: "Quién soy y las tecnologías con las que trabajo.",
  },
  {
    label: "Proceso",
    href: "/proceso/",
    description:
      "Cómo trabajaremos desde la primera conversación hasta la entrega.",
  },
  {
    label: "Blog",
    href: "/blog/",
    description: "Ideas, proyectos y notas de lo que voy aprendiendo.",
  },
];

export const experience = [
  {
    period: "Actualmente",
    role: "Desarrollador Full Stack independiente",
    organization: "Proyectos freelance",
    description:
      "Desarrollo de sitios web, aplicaciones y soluciones a medida, desde la interfaz hasta la lógica y las integraciones necesarias para cada proyecto.",
    current: true,
  },
  {
    period: "Prácticas",
    role: "Practicante de desarrollo web",
    organization: "MACROMEC S.A.C.",
    description:
      "Desarrollo y mantenimiento de aplicaciones web. Implementación de funcionalidades, corrección de errores y mejora de interfaces.",
    current: false,
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

// Technologies confirmed through Mi Dojo, FirmaPE and this portfolio.
export const technologyGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Astro",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  { title: "Backend", items: ["Node.js", "NestJS", "Python", "Flask"] },
  {
    title: "Datos y almacenamiento",
    items: ["SQL Server", "Google Sheets API"],
  },
  {
    title: "Herramientas y despliegue",
    items: ["Git", "GitHub", "Netlify", "pnpm", "Turborepo"],
  },
  { title: "Desarrollo móvil", items: ["Kotlin"] },
] as const;
