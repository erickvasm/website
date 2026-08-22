export interface Skill {
  title: string;
  icon: string;
  url: string;
}

export const technologies: Skill[] = [
  { title: "Java", icon: "mdi:language-java", url: "https://www.java.com/" },
  {
    title: "TypeScript",
    icon: "mdi:language-typescript",
    url: "https://www.typescriptlang.org/docs/",
  },
  { title: "Node.js", icon: "mdi:nodejs", url: "https://nodejs.org/" },
  {
    title: "Bash",
    icon: "mdi:terminal",
    url: "https://www.gnu.org/software/bash/",
  },
];

export const frameworks: Skill[] = [
  {
    title: "Spring Boot",
    icon: "frameworks/spring",
    url: "https://spring.io/guides/gs/spring-boot/",
  },
  { title: "Vert.x", icon: "mdi:language-java", url: "https://vertx.io/" },
  { title: "React", icon: "mdi:react", url: "http://react.dev" },
];

export const allSkillTitles = [...technologies, ...frameworks].map(
  (skill) => skill.title,
);
