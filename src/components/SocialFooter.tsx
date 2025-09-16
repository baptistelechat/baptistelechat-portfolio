import { Button } from "@/components/ui/button";
import { getI18n } from "@/i18n/server";
import socialLinks from "@/lib/constants/socialLinks";

const SocialFooter = async () => {
  const t = await getI18n();

  return (
    <footer className="mt-8 flex w-full flex-col gap-4 p-4">
      <h3 className="mb-2 text-center text-lg font-semibold">
        {t("navigation.social_footer")}
      </h3>
      <div className="flex justify-center gap-4">
        {socialLinks.map((link) => (
          <Button
            key={link.tooltip}
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {link.Icon}
              {link.tooltip}
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
};

export default SocialFooter;
