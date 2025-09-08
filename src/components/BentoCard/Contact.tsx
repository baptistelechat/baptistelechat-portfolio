import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { ContactIcon } from "lucide-react";
import ContactForm from "../ContactForm";

const Contact = (): BentoCardProps => {
  return {
    Icon: ContactIcon,
    name: "Contact",
    description: "Vous souhaitez me contacter ?",
    cta: "social-dock",
    background: (
      <div className="size-full p-4">
        <ContactForm />
        <a id="contact-form" href={"mailto"} style={{ display: "none" }}>
          Envoyé
        </a>
      </div>
    ),
    className: "row-start-15 row-end-16 col-start-1 col-end-2 xl:row-start-4 xl:row-end-6 xl:col-start-3 xl:col-end-5"
  };
};

export default Contact;
