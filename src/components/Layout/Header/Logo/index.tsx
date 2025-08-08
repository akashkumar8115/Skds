import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Image
      src={`${getImagePrefix()}/images/logo/Radhe2.svg`}
      alt="logo"
      width={160}
      height={50}
      style={{ width: "250px", height: "auto" }}
      quality={100}
      loading="lazy"

    />
  );
};

export default Logo;
