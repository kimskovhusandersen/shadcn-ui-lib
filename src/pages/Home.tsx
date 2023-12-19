import { Collections } from "@/components/ui/collections";
import { Footer } from "@/components/ui/footer";
import {
  DesktopNavigationMenu,
  NavigationMenu,
} from "@/components/ui/navigation-menu-2";
import { Newsletter } from "@/components/ui/newsletter";

export function Home() {
  return (
    <>
      <NavigationMenu>
        <DesktopNavigationMenu />
      </NavigationMenu>
      <Collections />
      <Newsletter />
      <Footer />
    </>
  );
}
