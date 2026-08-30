import type { Locale } from "~/i18n/ui";

export interface AboutContent {
  highlight: string;
  rest: string;
}

export const about: Record<Locale, AboutContent> = {
  es: {
    highlight:
      "Soy Erick, ingeniero backend costarricense. Construyo microservicios y sistemas backend para banca y ERPs.",
    rest: "Cuando no estoy resolviendo bugs, me gusta investigar y viajar. Soy de los que aprovecha cualquier excusa para conocer un lugar nuevo.",
  },
  en: {
    highlight:
      "I'm Erick, a backend engineer from Costa Rica. I build microservices and backend systems for banking and ERPs.",
    rest: "When I'm not squashing bugs, I like digging into research and traveling. I'll take any excuse to check out somewhere new.",
  },
};
