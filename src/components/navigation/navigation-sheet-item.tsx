"use client";

import Link from "next/link";
import { NavigationItemProps } from "./navigation";

import { buttonVariants } from "../ui/button";
import useNavigationItem from "../../hooks/use-navigation-item";
import { cn } from "../../lib/utils";

const NavigationSheetItem = ({ item }: NavigationItemProps) => {
  const { Icon, active, isExternal } = useNavigationItem({
    item,
  });

  return (
    <Link
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        active
          ? buttonVariants({
              variant: "secondary",
              size: "sm",
            })
          : buttonVariants({
              variant: "ghost",
              size: "sm",
            }),
        "flex items-center justify-start gap-4",
      )}
    >
      <Icon className={cn("h-4 w-4")} />
      {item.label}
    </Link>
  );
};
export default NavigationSheetItem;
