"use client";

import navigation from "../../lib/navigation";
import { Separator } from "../ui/separator";
import type { Navigation as _Navigation } from "../../lib/navigation";
import NavigationSheet from "./navigation-sheet";
import NavigationLogo from "./navigation-logo";
import NavigationTextItem from "./navigation-text-item";
import { ModeToggle } from "../common/mode-toggle";

export type NavigationItemProps = {
  item: _Navigation;
};

const Navigation = () => {
  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex w-full justify-between gap-4">
            <div className="flex items-center justify-center gap-4">
              <NavigationLogo />

              <Separator orientation="vertical" />

              <div className="flex gap-2">
                {navigation.map((item, i) => {
                  return <NavigationTextItem item={item} key={i} />;
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <ModeToggle />
            </div>
          </div>
        </nav>

        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <NavigationSheet />
        </div>
      </header>
    </>
  );
};

export default Navigation;
