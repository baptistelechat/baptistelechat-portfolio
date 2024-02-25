"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Variants, motion } from "framer-motion";
import { GanttChart, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";
interface IViewMoreButtonProps {
  icon: "GanttChart" | "Plus";
  tooltip: string;
  style?: string;
}

const viewMoreButtonVariants: Variants = {
  hidden: {
    x: 12,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const ViewMoreButton = (props: IViewMoreButtonProps) => {
  return (
    <motion.div
      variants={viewMoreButtonVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={`rounded-xl ${props.style}`}
              onClick={() =>
                toast("👩🏽‍💻 En cours de développement", {
                  description:
                    "Cette fonctionnalité n'est pas encore prête, mais elle arrive très vite ⏳",
                })
              }
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
    </motion.div>
  );
};

export default ViewMoreButton;
