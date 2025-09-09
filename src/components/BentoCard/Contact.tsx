import socialLinks from "@/lib/constants/socialLinks";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { ContactIcon } from "lucide-react";
import { Button } from "../ui/button";

const Contact = (): BentoCardProps => {
  return {
    Icon: ContactIcon,
    name: "Contact",
    description: "Vous souhaitez me contacter ?",
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
