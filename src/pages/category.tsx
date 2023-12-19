import { Filters } from "@/components/ui/filters";
import { Footer } from "@/components/ui/footer";
import {
  DesktopNavigationMenu,
  NavigationMenu,
} from "@/components/ui/navigation-menu-2";
import { Newsletter } from "@/components/ui/newsletter";

export function Category() {
  return (
    <>
      <NavigationMenu>
        <DesktopNavigationMenu />
      </NavigationMenu>
      <Filters />
      <Newsletter />
      <Footer />
    </>
  );
}
