import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GanttChart } from "lucide-react";
import { Button } from "./ui/button";

interface ILogoTileViewMoreButtonProps {
  tooltip: string;
  style?: string;
}

const LogoTileViewMoreButton = (props: ILogoTileViewMoreButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-xl ${props.style}`}
          >
            <GanttChart className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LogoTileViewMoreButton;
