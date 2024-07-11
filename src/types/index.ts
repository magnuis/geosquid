export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  children?: NavItem[];
};

export type RouteProps = {
  params: {
    slug: string;
    id: string;
    [key: string]: string | undefined;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  keywords: string[];
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

export type RouteConfigDynamic =
  | "auto"
  | "force-dynamic"
  | "error"
  | "force-static";
