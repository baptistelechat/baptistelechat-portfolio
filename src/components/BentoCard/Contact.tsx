import { getI18n } from "@/i18n/server";
import socialLinks from "@/lib/constants/socialLinks";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { MailIcon } from "lucide-react";
import { Button } from "../ui/button";

const Contact = async (): Promise<BentoCardProps> => {
  const t = await getI18n();
  
  return {
    Icon: MailIcon,
    name: t("contact"),
    description: t("contact_description"),
    cta: "social-dock",
    background: (
      <div className="flex size-full flex-col gap-4 p-4 md:hidden">
        {/* <ContactForm />
        <a id="contact-form" href={"mailto"} style={{ display: "none" }}>
          Envoyé
        </a> */}
        {socialLinks.map((link) => (
          <Button
            key={link.tooltip}
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
          >
            <a href={link.url} className="flex gap-2">
              {link.Icon}
              {link.tooltip}
            </a>
          </Button>
        ))}
      </div>
    ),
    className:
      "row-start-16 row-end-17 col-start-1 col-end-2 xl:row-start-5 xl:row-end-6 xl:col-start-3 xl:col-end-5",
  };
};

export default Contact;
