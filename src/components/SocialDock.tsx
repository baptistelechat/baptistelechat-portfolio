import { cn } from "@/lib/utils";
import { Bot, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Dock, DockIcon } from "./magic-ui/dock";

const SocialDock = () => {
  const links: { Icon: any; tooltip: string; url: string }[] = [
    {
      Icon: <Github className="size-6" />,
      tooltip: "GitHub",
      url: "https://github.com/baptistelechat",
    },
    {
      Icon: <Twitter className="size-6" />,
      tooltip: "Twitter (X)",
      url: "https://twitter.com/baptiste_lechat",
    },
    {
      Icon: <Linkedin className="size-6" />,
      tooltip: "LinkedIn",
      url: "https://www.linkedin.com/in/baptistelechat/",
    },
    {
      Icon: <Bot className="size-6" />,
      tooltip: "Discord",
      url: "https://www.discordapp.com/users/baptistelechat",
    },
    {
      Icon: <Mail className="size-6" />,
      tooltip: "Email",
      url: "mailto:baptistelechat@outlook.fr",
    },
  ];

  return (
    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-0 lg:translate-y-10 transform-gpu flex-row items-center p-4 opacity-100 lg:opacity-0 transition-all duration-300 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 justify-end"
      )}
    >
      <Dock>
        {links.map((link) => (
          <DockIcon key={link.tooltip} tooltip={link.tooltip} url={link.url}>
            {link.Icon}
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default SocialDock;
