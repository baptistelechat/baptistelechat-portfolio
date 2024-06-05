import { ArrowRightIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ProfileDialog = ({ cta, skills }: { cta: string; skills?: string[] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
          // className={`pointer-events-auto w-fit bg-card hover:cursor-pointer ${
          //   skills ? "mt-2" : ""
          // }`}
          >
          <a>
            {cta}
            <ArrowRightIcon className="ml-2 size-4" />
          </a>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">test</div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fermer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
