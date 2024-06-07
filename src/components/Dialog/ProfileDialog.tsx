import { ArrowRightIcon } from "lucide-react";
import WordRotate from "../magic-ui/word-rotate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

const ProfileDialog = ({ cta, skills }: { cta: string; skills?: string[] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
          // className={`pointer-events-auto w-fit bg-card hover:cursor-pointer ${
          //   skills ? "mt-2" : ""
          // }`}
        >
          <a>
            {cta}
            <ArrowRightIcon className="ml-2 size-4" />
          </a>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-full sm:h-fit sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Baptiste LECHAT</DialogTitle>
          <DialogDescription>
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
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-96 w-full pr-4 sm:h-72">
          <h2 className="text-lg font-bold text-sky-600">Expériences</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="123structure">
              <AccordionTrigger>123 Structure</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold italic text-sky-600">
                    Dessinateur / Développeur (Octobre 2021 - Aujourd&apos;hui)
                  </p>
                  <ul>
                    <li>
                      • Développement des outils métiers de l&apos;entreprise,
                    </li>
                    <li>• Support technique,</li>
                    <li>
                      • Réalisation de plan de coffrage et de ferraillage pour
                      des professionnels de la construction
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="abak">
              <AccordionTrigger>ABAK Ingénierie</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold italic text-sky-600">
                    Responsable du service informatique (Septembre 2019 -
                    Septembre 2021)
                  </p>
                  <ul>
                    <li>
                      • Développement des outils métiers de l&apos;entreprise,
                    </li>
                    <li>• Gestion des sites internet,</li>
                    <li>• Support technique,</li>
                    <li>• Gestion du parc informatique et logiciel</li>
                  </ul>
                  <p className="font-semibold italic text-sky-600">
                    Économiste de la construction (Septembre 2018 - Août 2019)
                  </p>
                  <ul>
                    <li>• Dessinateur BIM,</li>
                    <li>• Estimation,</li>
                    <li>• Prescription,</li>
                    <li>• Suivi de chantier</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fermer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
