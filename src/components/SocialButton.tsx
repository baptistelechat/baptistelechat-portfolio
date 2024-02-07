"use client";

import { Bot, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const SocialButton = () => {
  return (
    <>
      <Button
        onClick={() =>
          window.open("https://github.com/baptistelechat", "_blank")
        }
      >
        <Github className="mr-2 size-4" /> GitHub
      </Button>
      <Button
        onClick={() =>
          window.open("https://twitter.com/baptiste_lechat", "_blank")
        }
      >
        <Twitter className="mr-2 size-4" /> Twitter
      </Button>
      <Button
        onClick={() =>
          window.open("https://www.linkedin.com/in/baptistelechat/", "_blank")
        }
      >
        <Linkedin className="mr-2 size-4" /> LinkedIn
      </Button>
      <Button
        onClick={() =>
          window.open(
            "https://www.discordapp.com/users/baptistelechat",
            "_blank"
          )
        }
      >
        <Bot className="mr-2 size-4" />
        Discord
      </Button>
      <Button
        onClick={() =>
          window.open("mailto:baptistelechat@outlook.fr", "_blank")
        }
      >
        <Mail className="mr-2 size-4" /> Email
      </Button>
    </>
  );
};

export default SocialButton;
