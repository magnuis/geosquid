"use client";

import Link from "next/link";
import { NavigationItemProps } from "./navigation";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import useNavigationItem from "../../hooks/use-navigation-item";

const NavigationTextItem = ({ item }: NavigationItemProps) => {
  const { Icon, active, isExternal } = useNavigationItem({
    item,
  });

  return (
    <Link
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        active
          ? buttonVariants({ variant: "secondary", size: "sm" })
          : buttonVariants({ variant: "ghost", size: "sm" }),
        "flex items-center justify-center gap-2",
        "transition duration-150 ease-in-out",
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{item.label}</span>
    </Link>
  );
};

export default NavigationTextItem;
