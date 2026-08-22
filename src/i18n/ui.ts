export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const ui = {
  es: {
    nav: {
      about: "Sobre mí",
      blog: "Blog",
      contact: "Contacto",
    },
    splash: {
      home: "¡Hola!",
      blog: "Blog de Erick",
    },
    about: {
      title: "SOBRE MÍ",
    },
    experiences: {
      title: "EXPERIENCIA",
      lead: 'Mi trayectoria <span class="text-primary">profesional</span>',
    },
    portfolio: {
      title: "PROYECTOS",
      lead: 'Algunos de mis <span class="text-primary">proyectos</span>',
    },
    research: {
      title: "INVESTIGACIÓN",
      lead: 'Investigación y <span class="text-primary">publicaciones</span>',
    },
    travels: {
      title: "VIAJES",
      lead: 'Lugares que he <span class="text-primary">explorado</span>',
    },
    contact: {
      title: "CONTACTO",
      lead: 'Podés contactarme <span class="text-primary">acá</span>',
    },
    articles: {
      title: "ARTÍCULOS",
    },
    portfolioDetail: {
      technologies: "Tecnologías",
      visitWeb: "Visitar sitio",
    },
    notFound: {
      title: "No encontrado",
      message: "¿Estás perdido? No te preocupes :)",
      cta: "Volver al inicio",
    },
    meta: {
      homeTitle: "Portfolio de Erick Vásquez Murillo",
      homeDescription:
        "Erick Vásquez Murillo es Backend Engineer especializado en Java, Spring Boot, Vert.x y arquitecturas de microservicios.",
      blogTitle: "Artículos de Erick",
      blogDescription:
        "Artículos y tutoriales de Erick Vásquez Murillo sobre ingeniería de software, Java, Spring Boot y más.",
    },
  },
  en: {
    nav: {
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    splash: {
      home: "Hi There!",
      blog: "Erick's Blog",
    },
    about: {
      title: "ABOUT",
    },
    experiences: {
      title: "EXPERIENCES",
      lead: 'My <span class="text-primary">professional</span> journey',
    },
    portfolio: {
      title: "PORTFOLIO",
      lead: 'These are some of my <span class="text-primary">projects</span>',
    },
    research: {
      title: "RESEARCH",
      lead: 'Research &amp; <span class="text-primary">publications</span>',
    },
    travels: {
      title: "TRAVELS",
      lead: 'Places I\'ve <span class="text-primary">explored</span>',
    },
    contact: {
      title: "CONTACT",
      lead: 'You can contact me <span class="text-primary">here</span>',
    },
    articles: {
      title: "ARTICLES",
    },
    portfolioDetail: {
      technologies: "Technologies",
      visitWeb: "Visit Web",
    },
    notFound: {
      title: "Not Found",
      message: "Are you lost? Don't worry :)",
      cta: "Take me to the home page",
    },
    meta: {
      homeTitle: "Erick Vásquez Murillo's Portfolio",
      homeDescription:
        "Erick Vásquez Murillo is a Backend Engineer specializing in Java, Spring Boot, Vert.x, and microservices architecture.",
      blogTitle: "Erick's Articles",
      blogDescription:
        "Articles and tutorials by Erick Vásquez Murillo on software engineering, Java, Spring Boot, and more.",
    },
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}

export function localizedPath(locale: Locale, path: string) {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`;
}
