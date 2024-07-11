import { Icons } from "../components/ui/icons";

export type Navigation = {
  href: `/${string}` | `https://${string}`;
  label: string;
  // TODO: figure out how we want to handle permissions
  permissions?: string[];
  icon: keyof typeof Icons;
};

const navigation: Navigation[] = [
  { href: "/dashboard", label: "Dashboard", icon: "home" },
];

export default navigation;
