import { Github, Twitter, Linkedin, Bot, Mail } from "lucide-react";

const socialLinks: { Icon: any; tooltip: string; url: string }[] = [
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

export default socialLinks