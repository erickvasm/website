import type { Locale } from "~/i18n/ui";

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Record<Locale, Experience[]> = {
  es: [
    {
      role: "Backend Engineer",
      company: "Yaipan — Escazú, Costa Rica",
      period: "Ene 2023 – Presente",
      bullets: [
        "Diseñé y desarrollé microservicios y APIs REST escalables con Java y Spring Boot, aplicando SOLID, patrones de diseño (Factory, Strategy, Repository) y arquitectura hexagonal en un ERP empresarial multi-módulo.",
        "Integré el SDK de Evertec para cobros en datafonos POS y conecté servicios bancarios (BN, BCR) vía REST/SOAP.",
        "Implementé OAuth 2.0 con Keycloak y Spring Security.",
        "Reduje el tiempo de facturación de 23 minutos a 2.5 segundos (99%) mediante optimización SQL en Oracle DB.",
        "Lideré migraciones de stack (Java 8→25, Gradle 4→9, Vert.x 4→5) y mentoricé a 6 desarrolladores junior.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Vert.x",
        "Oracle DB",
        "OAuth 2.0",
        "Docker",
        "Jenkins",
      ],
    },
    {
      role: "Líder Técnico (Voluntario)",
      company: "ONG Awaq — Estaciones Biológicas (Remoto)",
      period: "Abr 2023 – Jul 2024",
      bullets: [
        "Lideré un equipo de 4 desarrolladores construyendo una plataforma backend con Node.js y APIs REST.",
        "Implementé pipelines CI/CD y realicé revisiones de código.",
        "Aseguré estándares de documentación bajo metodología Scrum.",
      ],
      technologies: ["Node.js", "REST APIs", "CI/CD", "Scrum"],
    },
  ],
  en: [
    {
      role: "Backend Engineer",
      company: "Yaipan — Escazú, Costa Rica",
      period: "Jan 2023 – Present",
      bullets: [
        "Designed and built scalable microservices and REST APIs with Java and Spring Boot, applying SOLID principles, design patterns (Factory, Strategy, Repository) and hexagonal architecture in a multi-module enterprise ERP.",
        "Integrated the Evertec SDK for POS terminal payments and connected banking services (BN, BCR) via REST/SOAP.",
        "Implemented OAuth 2.0 with Keycloak and Spring Security.",
        "Cut billing time from 23 minutes to 2.5 seconds (99%) through SQL optimization on Oracle DB.",
        "Led stack migrations (Java 8→25, Gradle 4→9, Vert.x 4→5) and mentored 6 junior developers.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Vert.x",
        "Oracle DB",
        "OAuth 2.0",
        "Docker",
        "Jenkins",
      ],
    },
    {
      role: "Technical Lead (Volunteer)",
      company: "Awaq NGO — Biological Stations (Remote)",
      period: "Apr 2023 – Jul 2024",
      bullets: [
        "Led a team of 4 developers building a Node.js backend platform and REST APIs.",
        "Ran CI/CD pipelines and code reviews.",
        "Enforced documentation standards under Scrum.",
      ],
      technologies: ["Node.js", "REST APIs", "CI/CD", "Scrum"],
    },
  ],
};
