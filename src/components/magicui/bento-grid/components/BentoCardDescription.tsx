"use client";

import { useI18n } from "@/i18n/client";
import { translateJobs } from "@/lib/utils/translateJobs";
import WordRotate from "../../../magicui/word-rotate";

const BentoCardDescription = ({ description }: { description: string }) => {
  const t = useI18n();
  
  if (description === "word-rotate") {
    const translatedJobs = translateJobs(t);
    
    return <WordRotate className="max-w-lg text-neutral-400" words={translatedJobs} />;
  }

  return (
    <p className="text-neutral-400" aria-label={description}>
      {description}
    </p>
  );
};

export default BentoCardDescription;
