"use client";

import { usePathname } from "next/navigation";
import { 
  extractLocaleFromPathname, 
  createLocalizedPath, 
  isCurrentPage as checkIsCurrentPage,
  removeLocaleFromPathname,
  type SupportedLocale
} from "@/lib/utils/localization";

/**
 * Hook personnalisé pour gérer la navigation localisée
 * Extrait la locale courante et génère des liens localisés
 */
export const useLocalizedNavigation = () => {
  const pathname = usePathname();
  
  // Extraire la locale depuis l'URL
  const currentLocale = extractLocaleFromPathname(pathname) as SupportedLocale;
  
  // Obtenir le chemin sans locale
  const pathWithoutLocale = removeLocaleFromPathname(pathname);
  
  /**
   * Génère un lien localisé avec la locale courante
   * @param path - Le chemin sans locale (ex: "/articles")
   * @returns Le chemin avec la locale (ex: "/fr/articles")
   */
  const getLocalizedPath = (path: string): string => {
    return createLocalizedPath(path, currentLocale);
  };
  
  /**
   * Vérifie si on est sur une page spécifique
   * @param path - Le chemin à vérifier (ex: "/articles")
   * @returns true si on est sur cette page
   */
  const isCurrentPage = (path: string): boolean => {
    return checkIsCurrentPage(pathname, path);
  };
  
  /**
   * Change la locale tout en préservant le chemin actuel
   * @param newLocale - La nouvelle locale
   * @returns Le nouveau chemin avec la nouvelle locale
   */
  const switchLocale = (newLocale: SupportedLocale): string => {
    return createLocalizedPath(pathWithoutLocale, newLocale);
  };
  
  return {
    currentLocale,
    pathWithoutLocale,
    getLocalizedPath,
    isCurrentPage,
    switchLocale,
    pathname
  };
};