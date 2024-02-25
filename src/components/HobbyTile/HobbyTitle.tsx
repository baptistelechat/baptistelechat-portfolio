"use client";
import { motion, Variants } from "framer-motion";

interface IHobbyTitleProps {
  title: string;
}

const titleVariants: Variants = {
  hidden: {
    y: 12,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

const HobbyTitle = (props: IHobbyTitleProps) => {
  return (
    <motion.p
      className="absolute bottom-4 right-4 z-50 text-2xl font-semibold leading-none tracking-tight"
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {props.title}
    </motion.p>
  );
};

export default HobbyTitle;
