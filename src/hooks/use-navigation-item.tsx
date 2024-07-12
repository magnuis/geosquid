"use client";

import { usePathname } from "next/navigation";
import { Icons } from "../components/ui/icons";
import { NavigationItemProps } from "../components/navigation/navigation";

const useNavigationItem = ({ item }: NavigationItemProps) => {
  const pathname = usePathname();
  const active = pathname === item.href;
  const isExternal = item.href.startsWith("http");

  const Icon = Icons[item.icon || "chevronRight"];

  return {
    active,
    isExternal,
    Icon,
  };
};
export default useNavigationItem;
