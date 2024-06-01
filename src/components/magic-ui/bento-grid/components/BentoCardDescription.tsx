import WordRotate from '../../word-rotate';

const BentoCardDescription = ({ description }: { description: string }) => {
  if (description === "word-rotate") {
    return (
      <WordRotate
        className="max-w-lg text-neutral-400"
        words={[
          "Développeur web full-stack",
          "Développeur front-end",
          "Développeur back-end",
          "Développeur React",
          "Développeur TypeScript",
          "Développeur d'applications",
          "Développeur d'outils",
          "Développeur Python",
          "Spécialiste en optimisation de processus",
          "Chef de projet technique",
          "Lead développeur",
          "Responsable Réseau sociaux",
        ]}
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