"use client";
import Script from "next/script";

const Analytics = () => {
  // Ne charger Umami qu'en production
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  // Récupérer les variables d'environnement Umami
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  // Vérifier que les variables sont définies
  if (!scriptUrl || !websiteId) {
    console.warn("Variables Umami manquantes dans .env.local");
    return null;
  }

  return (
    <Script
      defer
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
};

export default Analytics;
