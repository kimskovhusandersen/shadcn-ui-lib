import { AspectRatio } from "@/components/ui/aspect-ratio";
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

      <AspectRatio className="border" ratio={16 / 9}>
        <img
          alt=""
          className="h-full w-full object-cover"
          src="https://dummyimage.com/1200x900/fff/aaa"
        />
      </AspectRatio>
      <div className="sm:grid-cols- grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        <AspectRatio className="border" ratio={1 / 1}>
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://dummyimage.com/200x200/fff/aaa"
          />
        </AspectRatio>
        <AspectRatio className="border" ratio={1 / 1}>
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://dummyimage.com/200x200/fff/aaa"
          />
        </AspectRatio>
        <AspectRatio className="border" ratio={1 / 1}>
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://dummyimage.com/200x200/fff/aaa"
          />
        </AspectRatio>
        <AspectRatio className="border" ratio={1 / 1}>
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://dummyimage.com/200x200/fff/aaa"
          />
        </AspectRatio>
        <AspectRatio className="border" ratio={1 / 1}>
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://dummyimage.com/200x200/fff/aaa"
          />
        </AspectRatio>
        <AspectRatio className="border" ratio={1 / 1}>
          <img
            alt=""
            className="h-full w-full object-cover"
            src="https://dummyimage.com/200x200/fff/aaa"
          />
        </AspectRatio>
      </div>

      <Collections />
      <Newsletter />
      <Footer />
    </>
  );
}
