import IBentoCardProps from "./IBentoCardProps";

interface IProject extends IBentoCardProps {
  capture:number;
  bgGradientLight:string;
  bgGradientDark:string;
  gitHubUrl: string;
  website?: string;
}

export default IProject
