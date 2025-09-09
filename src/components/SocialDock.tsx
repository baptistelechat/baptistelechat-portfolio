import socialLinks from "@/lib/constants/socialLinks";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./magicui/dock";

const SocialDock = () => {
  return (
    <div
      className={cn(
        "absolute bottom-0 w-full translate-y-0 lg:translate-y-10 transform-gpu flex-row items-center p-4 opacity-100 lg:opacity-0 transition-all duration-300 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 justify-end hidden md:flex"
      )}
    >
      <Dock>
        {socialLinks.map((link) => (
          <DockIcon key={link.tooltip} tooltip={link.tooltip} url={link.url}>
            {link.Icon}
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default SocialDock;
