"use client";

import jobs from "@/lib/constants/jobs";
import { useI18n } from "@/i18n/client";
import WordRotate from "../../../magicui/word-rotate";

const BentoCardDescription = ({ description }: { description: string }) => {
  const t = useI18n();
  
  if (description === "word-rotate") {
    // Traduire les clés jobs en textes correspondants
    const translatedJobs = jobs.map(jobKey => {
      return t(jobKey as any);
    });
    
    return <WordRotate className="max-w-lg text-neutral-400" words={translatedJobs} />;
  }

  return (
    <p className="text-neutral-400" aria-label={description}>
      {description}
    </p>
  );
};

export default BentoCardDescription;
