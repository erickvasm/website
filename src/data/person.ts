import { allSkillTitles } from "~/data/skills";

const knowsAbout = [
  ...allSkillTitles,
  "Docker",
  "PostgreSQL",
  "Oracle DB",
  "OAuth 2.0",
  "Software Engineering",
  "Principal Component Analysis",
  "Geospatial Data Analysis",
  "Applied Machine Learning",
];

export const personJsonLd = {
  "@type": "Person",
  "@id": "https://www.erickvasm.com/#person",
  name: "Erick Vásquez Murillo",
  jobTitle: "Backend Engineer",
  url: "https://www.erickvasm.com",
  image: "https://i.ibb.co/WF4wt7n/erickvasm.png",
  sameAs: [
    "https://github.com/erickvasm",
    "https://dev.to/erickvasm",
    "https://www.linkedin.com/in/erickvasquezmurillo/",
    "https://orcid.org/0000-0002-1414-3315",
  ],
  knowsAbout: knowsAbout,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Costa Rica, Sede Guanacaste",
  },
  award:
    "Featured by Universidad de Costa Rica's Informática Empresarial program for a Beamer/Overleaf template created for its students and professors.",
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    occupationLocation: {
      "@type": "Country",
      name: "Costa Rica",
    },
  },
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": "https://www.erickvasm.com/#website",
  url: "https://www.erickvasm.com",
  name: "erickvasm",
  description: "Erick Vásquez Murillo — Backend Engineer portfolio",
  publisher: { "@id": "https://www.erickvasm.com/#person" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.erickvasm.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const personGraph = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, websiteJsonLd],
};
