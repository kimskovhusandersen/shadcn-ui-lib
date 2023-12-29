import { Footer } from "@/components/ui/footer";
import {
  DesktopNavigationMenu,
  NavigationMenu,
} from "@/components/ui/navigation-menu-2";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationMenu>
        <DesktopNavigationMenu />
      </NavigationMenu>
      {children}
      <Footer />
    </>
  );
}
