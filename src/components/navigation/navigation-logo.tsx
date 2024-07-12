import Link from "next/link";
import { Logos } from "../common/logos";

const NavigationLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center hover-rise">
        <Logos.main
          className="w-full text-grape dark:text-syrin"
          width={24}
          height={24}
        />
      </div>
    </Link>
  );
};

export default NavigationLogo;
