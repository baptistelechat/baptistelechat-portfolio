import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import jobs from "@/lib/constants/jobs";
import { ArrowRightIcon, BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { useI18n } from "@/i18n/client";
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
          <DialogTitle>{t("profile.profile_name")}</DialogTitle>
          <DialogDescription>
            <WordRotate className="max-w-lg text-neutral-400" words={jobs} />
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue={"skills"} className="size-full">
          <TabsList>
            <TabsTrigger value="skills">{t("navigation.skills")}</TabsTrigger>
            <TabsTrigger value="experiences">{t("profile.experiences")}</TabsTrigger>
          </TabsList>
          <TabsContent value="skills" className="flex flex-col gap-4">
            <p className="mt-2 text-sm text-neutral-400">
              {t("profile.profile_description")}
            </p>
            <SkillsAnimatedBeam />
          </TabsContent>
          <TabsContent value="experiences">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="formation">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <GraduationCapIcon className="size-6" />
                    {t("profile.education")}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-sky-600">
                        {t("profile.degree_master")}
                        <span className="ml-1 text-sm font-normal italic text-neutral-400">
                          (2019 - 2021)
                        </span>
                      </p>
                      <p>Nantes Ynov Campus</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-sky-600">
                        {t("profile.degree_license")}
                        <span className="ml-1 text-sm font-normal italic text-neutral-400">
                          (2018 - 2019)
                        </span>
                      </p>
                      <p>Conservatoire National des Arts et Métiers</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-sky-600">
                        {t("profile.degree_bts")}
                        <span className="ml-1 text-sm font-normal italic text-neutral-400">
                          (2016 - 2018)
                        </span>
                      </p>
                      <p>Lycée Eugène Livet (44)</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-sky-600">
                        {t("profile.degree_bac")}
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
                    {t("jobs.company_123structure")}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-sky-600">
                      {t("jobs.job_designer_developer")}
                      <span className="ml-1 text-sm font-normal italic text-neutral-400">
                        ({t("profile.october_2021_present")})
                      </span>
                    </p>
                    <ul>
                      <li>
                        • {t("jobs.business_tools_development")},
                      </li>
                      <li>• {t("jobs.technical_support")},</li>
                      <li>
                        • {t("jobs.formwork_reinforcement_plans")}
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="abak">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="size-6" />
                    {t("jobs.company_abak")}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-sky-600">
                      {t("jobs.job_it_manager")}
                      <span className="ml-1 text-sm font-normal italic text-neutral-400">
                        ({t("profile.september_2019_september_2021")})
                      </span>
                    </p>
                    <ul>
                      <li>
                        • {t("jobs.business_tools_development")},
                      </li>
                      <li>• {t("jobs.website_management")},</li>
                      <li>• {t("jobs.technical_support")},</li>
                      <li>• {t("jobs.it_infrastructure_management")}</li>
                    </ul>
                    <p className="font-semibold text-sky-600">
                      {t("jobs.job_economist")}
                      <span className="ml-1 text-sm font-normal italic text-neutral-400">
                        ({t("profile.september_2018_august_2019")})
                      </span>
                    </p>
                    <ul>
                      <li>• {t("jobs.bim_designer")},</li>
                      <li>• {t("jobs.estimation")},</li>
                      <li>• {t("jobs.prescription")},</li>
                      <li>• {t("jobs.construction_site_monitoring")}</li>
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
              {t("ui.close")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
