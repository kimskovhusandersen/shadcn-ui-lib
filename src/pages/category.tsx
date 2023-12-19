import { Filters } from "@/components/ui/filters";
import { Footer } from "@/components/ui/footer";
import {
  DesktopNavigationMenu,
  NavigationMenu,
} from "@/components/ui/navigation-menu-2";

export function Category() {
  return (
    <>
      <NavigationMenu>
        <DesktopNavigationMenu />
      </NavigationMenu>
      <Filters />
      <Footer />
    </>
  );
}
