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
    className:
      "hidden row-start-11 row-end-12 col-start-1 col-end-2 lg:flex lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-5",
  };
};

export default Contact;
