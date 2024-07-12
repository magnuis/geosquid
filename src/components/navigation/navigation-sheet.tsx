"use client";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import navigation from "../../lib/navigation";
import NavigationLogo from "./navigation-logo";
import { ModeToggle } from "../common/mode-toggle";
import NavigationSheetItem from "./navigation-sheet-item";

const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <Icons.sidebarPanel className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="z-[2000] flex flex-col justify-between sm:max-w-xs"
      >
        <nav className="grid gap-6 text-lg font-medium">
          <NavigationLogo />
          <Separator className="my-1 w-full" />
          <div className="flex flex-col gap-2">
            {navigation.map((item, i) => {
              return <NavigationSheetItem item={item} key={i} />;
            })}
          </div>
        </nav>

        <div className="mt-auto flex items-center justify-center gap-4">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationSheet;
