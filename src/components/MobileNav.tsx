import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const isAuthenticated = false;
  const user = "mg@gmail.com";

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="space-y-2">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center gap-2">
              <CircleUserRound className="text-[#c9161c]" />
              {/* User email */}
              {user}
            </span>
          ) : (
            <span>Welcome to FlavorBite</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button className="bg-[#c9161c] hover:bg-red-500 text-white hover:text-white font-bold">
              Sign In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
