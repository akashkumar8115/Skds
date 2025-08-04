// src/components/Logo.tsx
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const Logo: React.FC = () => {
  const imagePrefix = getImagePrefix();

  return (
    <Image
      src={`${imagePrefix}images/logo/Radhe2.svg`}
      alt="Shri Kishori Design Studio Logo"
      width={250}
      height={50}
      style={{ height: "auto" }}
      quality={100}
      priority
    />
  );
};

export default Logo;
