export type LayoutVariant =
  | 'classic-newspaper'
  | 'modern-tech'
  | 'editorial-grid'
  | 'bold-magazine';

export interface SiteTheme {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  accentSoft: string;
  border: string;
  headerBg: string;
  headerInk: string;
  fontHeading: string;
  fontBody: string;
}

export interface SiteConfig {
  domain: string;
  displayDomain: string;
  siteName: string;
  shortMark: string;
  tagline: string;
  description: string;
  categories: string[];
  editorialEmail: string;
  tipsEmail: string;
  publisherLegalName: string;
  heroImage: string;
  heroAlt: string;
  layoutVariant: LayoutVariant;
  theme: SiteTheme;
  aboutText: string;
}

export function normalizeDomain(input?: string): string {
  if (!input) return "helsepulsen.no";
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .replace(/:\d+$/, '')
    .replace(/^www\./, '');

  if (!cleaned) return "helsepulsen.no";

  try {
    return new URL(`https://${cleaned}`).hostname;
  } catch {
    return cleaned;
  }
}

export const SITE_CONFIG: SiteConfig = {
  domain: normalizeDomain(process.env.NEXT_PUBLIC_DOMAIN) || "helsepulsen.no",
  displayDomain: "helsepulsen.no",
  siteName: "Helsepulsen",
  shortMark: "HP",
  tagline: "Fagstoff og guider om folkehelse, forebygging, kosthold og livskvalitet",
  description: "Helsepulsen gir norske lesere oppdaterte, kildestøttede artikler om folkehelse, forebygging, kosthold, trening, mental helse og pasientrettigheter.",
  categories: ["Folkehelse", "Forebygging", "Kosthold & Trening", "Mental Helse", "Pasientguider"],
  editorialEmail: "redaksjonen@helsepulsen.no",
  tipsEmail: "tips@helsepulsen.no",
  publisherLegalName: "Helsepulsen Redaksjon",
  heroImage: '/images/hero.webp',
  heroAlt: "Aktivt par på morgenjoggetur langs norsk fjord i mykt dagslys",
  layoutVariant: "editorial-grid",
  theme: {
    bg: "#f6fbfa",
    surface: "#ffffff",
    ink: "#0f2926",
    muted: "#47615d",
    accent: "#0f766e",
    accentSoft: "#ccfbf1",
    border: "#d8ebe7",
    headerBg: "#042f2e",
    headerInk: "#f0fdfa",
    fontHeading: "Georgia, Cambria, serif",
    fontBody: "system-ui, -apple-system, sans-serif",
  },
  aboutText: "Helsepulsen formidler pålitelig og praktisk fagstoff om norsk folkehelse, forebygging, fysisk aktivitet, ernæring, mental helse og pasientguider.",
};
