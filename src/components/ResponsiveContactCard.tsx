import { cn } from "@/lib/utils"
import ContactForm from "./ContactForm"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import socialLinks from "@/lib/constants/socialLinks"

const ResponsiveContactCard = () => {
  return (
    <div className="mt-4 size-full lg:hidden">
        <div
          className={cn(
            "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-card",
            // light styles
            "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            "size-full p-4"
          )}
        >
          <ContactForm />
          <Separator className="my-4" />
          <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
  )
}

export default ResponsiveContactCard