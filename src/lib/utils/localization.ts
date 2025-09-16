/**
 * Utilitaires pour la gestion de l'internationalisation
 */

/**
 * Extrait la locale depuis un pathname
 * @param pathname - Le chemin actuel (ex: "/fr/articles")
 * @returns La locale (ex: "fr") ou "fr" par défaut
 */
export const extractLocaleFromPathname = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  
  // Vérifier si le premier segment est une locale valide
  if (firstSegment && ["fr", "en"].includes(firstSegment)) {
    return firstSegment;
  }
  
  return "fr"; // Locale par défaut
};

/**
 * Génère un lien localisé
 * @param path - Le chemin sans locale (ex: "/articles")
 * @param locale - La locale à utiliser (ex: "fr")
 * @returns Le chemin avec la locale (ex: "/fr/articles")
 */
export const createLocalizedPath = (path: string, locale: string): string => {
  // Supprimer le slash initial si présent
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  // Si le chemin est vide (page d'accueil), retourner juste la locale
  if (!cleanPath) {
    return `/${locale}`;
  }
  
  return `/${locale}/${cleanPath}`;
};

/**
 * Supprime la locale d'un pathname
 * @param pathname - Le chemin avec locale (ex: "/fr/articles")
 * @returns Le chemin sans locale (ex: "/articles")
 */
export const removeLocaleFromPathname = (pathname: string): string => {
  return pathname.replace(/^\/(fr|en)/, "") || "/";
};

/**
 * Vérifie si on est sur une page spécifique
 * @param pathname - Le chemin actuel
 * @param targetPath - Le chemin cible à vérifier
 * @returns true si on est sur cette page
 */
export const isCurrentPage = (pathname: string, targetPath: string): boolean => {
  const currentLocale = extractLocaleFromPathname(pathname);
  const localizedTargetPath = createLocalizedPath(targetPath, currentLocale);
  return pathname === localizedTargetPath;
};

/**
 * Constantes pour les locales supportées
 */
export const SUPPORTED_LOCALES = ["fr", "en"] as const;
export const DEFAULT_LOCALE = "fr";

export type SupportedLocale = typeof SUPPORTED_LOCALES[number];