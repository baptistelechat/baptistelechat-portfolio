import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { ContactIcon } from "lucide-react";
const Contact = (): BentoCardProps => {
  return {
    Icon: ContactIcon,
    name: "Contact",
    description: "Vous souhaitez me contacter ?",
    href: "/",
    cta: "social-dock",
    background: (
      <div/>
    ),
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-5",
  };
};

export default Contact;
