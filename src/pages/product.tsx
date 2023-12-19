import { Footer } from "@/components/ui/footer";
import {
  DesktopNavigationMenu,
  NavigationMenu,
} from "@/components/ui/navigation-menu-2";
import { Newsletter } from "@/components/ui/newsletter";
import { ProductOverview } from "@/components/ui/product-overview";

export const Product = () => {
  return (
    <>
      <NavigationMenu>
        <DesktopNavigationMenu />
      </NavigationMenu>
      <ProductOverview />
      <Newsletter />
      <Footer />
    </>
  );
};
