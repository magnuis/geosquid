import React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { siteConfig } from "../../config/siteConfig";

export async function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="flex flex-col items-center justify-end gap-4 p-4 text-sm md:h-16 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-4 md:flex-row md:gap-2 md:px-0">
          <div className="flex gap-1 text-center leading-loose md:text-left">
            <span>
              &copy; {new Date().getFullYear()}.{" "}
              <Link
                href={siteConfig.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GeoSquid
              </Link>
              .
            </span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
