import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { GanttChart, Plus } from "lucide-react";

interface IViewMoreButtonProps {
  icon: "GanttChart" | "Plus";
  tooltip: string;
  style?: string;
}

const ViewMoreButton = (props: IViewMoreButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-xl ${props.style}`}
          >
            {props.icon === "GanttChart" ? (
              <GanttChart className="size-4" />
            ) : (
              <Plus className="size-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ViewMoreButton;
