import Image from "next/image";

const size = 48;

export const Sismo = () => {
  return (
    <Image
      src="/project/Sismo/icon.png"
      alt="sismo"
      width={size}
      height={size}
    />
  );
};

export const SpeedTestTracker = () => {
  return <p className="text-[48px]">🚀</p>;
};

export const PyRevitWithVSCode = () => {
  return (
    <Image
      src="/project/pyRevit With VSCode/icon.png"
      alt="pyRevit With VSCode"
      width={size}
      height={size}
    />
  );
};

export const CodeX = () => {
  return (
    <Image
      src="/project/CodeX/icon.png"
      alt="CodeX"
      width={size}
      height={size}
    />
  );
};

export const Aura = () => {
  return (
    <Image src="/project/Aura/icon.png" alt="Aura" width={size} height={size} />
  );
};

export const TravelTag = () => {
  return <p className="text-[40px]">🧳</p>;
};
