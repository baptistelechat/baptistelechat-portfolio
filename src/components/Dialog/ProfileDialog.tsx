import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRightIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { useI18n } from "@/i18n/client";
import { translateJobs } from "@/lib/utils/translateJobs";
import SkillsAnimatedBeam from "../SkillsAnimatedBeam";
import WordRotate from "../magicui/word-rotate";
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

const ProfileDialog = ({ cta }: { cta: string }) => {
  const t = useI18n();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
        >
          <a>
            {cta}
            <ArrowRightIcon className="ml-2 size-4" />
          </a>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex size-full flex-col items-start justify-start sm:h-5/6 sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{t("profile.name")}</DialogTitle>
          <DialogDescription>
            <WordRotate className="max-w-lg text-neutral-400" words={translateJobs(t)} />
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue={"skills"} className="size-full">
          <TabsList>
            <TabsTrigger value="skills">{t("navigation.skills")}</TabsTrigger>
            <TabsTrigger value="experiences">{t("navigation.experiences")}</TabsTrigger>
          </TabsList>
          <TabsContent value="skills" className="flex flex-col gap-4">
            <p className="mt-2 text-sm text-neutral-400">
              {t("profile.description")}
            </p>
            <SkillsAnimatedBeam />
          </TabsContent>
          <TabsContent value="experiences">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="formation">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <GraduationCapIcon className="size-6" />
                    {t("navigation.education")}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-sky-600">
                        {t("education.degree_master")}
                        <span className="ml-1 text-sm font-normal italic text-neutral-400">
                          (2019 - 2021)
                        </span>
                      </p>
                      <p>Nantes Ynov Campus</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-sky-600">
                        {t("education.degree_license")}
                        <span className="ml-1 text-sm font-normal italic text-neutral-400">
                          (2018 - 2019)
                        </span>
                      </p>
                      <p>Conservatoire National des Arts et Métiers</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-sky-600">
                        {t("education.degree_bts")}
                        <span className="ml-1 text-sm font-normal italic text-neutral-400">
                          (2016 - 2018)
                        </span>
                      </p>
                      <p>Lycée Eugène Livet (44)</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-sky-600">
                        {t("education.degree_bac")}
                        <span className="ml-1 text-sm font-normal italic text-neutral-400">
                          (2013 - 2016)
                        </span>
                      </p>
                      <p>Lycée professionnel Funay-Hélène Boucher (72)</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="123structure">
                <AccordionTrigger>
                  <div className="flex items-center gap-1">
                    <BriefcaseIcon className="size-6" />
                    {t("companies.company_123structure")}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sky-600">
                      {t("positions.job_designer_developer")}
                      <span className="ml-1 text-sm font-normal italic text-neutral-400">
                        ({t("dates.october_2021_present")})
                      </span>
                    </p>
                    <ul>
                      <li>
                        • {t("activities.business_tools_development")},
                      </li>
                      <li>• {t("activities.technical_support")},</li>
                      <li>
                        • {t("activities.formwork_reinforcement_plans")}
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="abak">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="size-6" />
                    {t("companies.company_abak")}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sky-600">
                      {t("positions.job_it_manager")}
                      <span className="ml-1 text-sm font-normal italic text-neutral-400">
                        ({t("dates.september_2019_september_2021")})
                      </span>
                    </p>
                    <ul>
                      <li>
                        • {t("activities.business_tools_development")},
                      </li>
                      <li>• {t("activities.website_management")},</li>
                      <li>• {t("activities.technical_support")},</li>
                      <li>• {t("activities.it_infrastructure_management")}</li>
                    </ul>
                    <p className="font-semibold text-sky-600">
                      {t("positions.job_economist")}
                      <span className="ml-1 text-sm font-normal italic text-neutral-400">
                        ({t("dates.september_2018_august_2019")})
                      </span>
                    </p>
                    <ul>
                      <li>• {t("activities.bim_designer")},</li>
                      <li>• {t("activities.estimation")},</li>
                      <li>• {t("activities.prescription")},</li>
                      <li>• {t("activities.construction_site_monitoring")}</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
        <DialogFooter className="flex w-full justify-end">
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="sm"
              className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
            >
              {t("navigation.close")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
