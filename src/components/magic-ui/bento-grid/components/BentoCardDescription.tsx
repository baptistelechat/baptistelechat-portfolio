import jobs from '@/lib/constants/jobs';
import WordRotate from '../../word-rotate';

const BentoCardDescription = ({ description }: { description: string }) => {
  if (description === "word-rotate") {
    return (
      <WordRotate
        className="max-w-lg text-neutral-400"
        words={jobs}
      />
    );
  }

  return (
    <p className="max-w-lg text-neutral-400" aria-label={description}>
      {description}
    </p>
  );
};


export default BentoCardDescription