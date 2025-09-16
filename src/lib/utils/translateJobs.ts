import jobs from "@/lib/constants/jobs";

/**
 * Traduit les clés de jobs en utilisant la fonction de traduction fournie
 * @param t - Fonction de traduction (useI18n ou getI18n)
 * @returns Tableau de chaînes traduites
 */
export const translateJobs = (t: (key: string, params?: any) => string): string[] => {
  return jobs.map(jobKey => t(jobKey, {}));
};