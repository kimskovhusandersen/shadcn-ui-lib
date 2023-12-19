import { cn } from "@/lib/utils";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { forwardRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { NavigationMenu3 } from "./navigation-menu-3";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { TopBanner } from "./top-banner";

interface Link {
  label: string;
}
interface FeaturedLink {
  altText: string;
  imageUrl: string;
  label: string;
}

interface SectionLink {
  links: Link[];
  sectionLabel: string;
}

interface TabContentProps {
  featuredLinks: FeaturedLink[];
  links: SectionLink[];
  value: string;
}

const fashionLinks = [
  { label: "Tops" },
  { label: "Dresses" },
  { label: "Pants" },
  { label: "Denim" },
  { label: "Sweaters" },
  { label: "T-Shirts" },
  { label: "Jackets" },
  { label: "Activewear" },
  { label: "Browse All" },
];

const accessoriesLinks = [
  { label: "Watches" },
  { label: "Wallets" },
  { label: "Bags" },
  { label: "Sunglasses" },
  { label: "Hats" },
  { label: "Belts" },
];

const brandsLinks = [
  { label: "Full Nelson" },
  { label: "My Way" },
  { label: "Re-Arranged" },
  { label: "Counterfeit" },
  { label: "Significant Other" },
];

const womenFeaturedLinks = [
  {
    label: "New Arrivals",
    altText:
      "Models sitting back to back, wearing Basic Tee in black and bone.",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
  },
  {
    label: "Basic Tees",
    altText:
      "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
  },
];

const womenLinks = [
  { sectionLabel: "Women's Clothing", links: fashionLinks },
  { sectionLabel: "Accessories", links: accessoriesLinks },
  { sectionLabel: "Brands", links: brandsLinks },
];

const menFeaturedLinks = [
  {
    label: "New Arrivals",
    altText:
      "Drawstring top with elastic loop closure and textured interior padding.",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
  },
  {
    label: "Artwork Tees",
    altText:
      "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
  },
];

const mensLinks = [
  { sectionLabel: "Men's Clothing", links: fashionLinks },
  { sectionLabel: "Accessories", links: accessoriesLinks },
  { sectionLabel: "Brands", links: brandsLinks },
];

const menuLinks = [
  { label: "Company" },
  { label: "Stores" },
  { label: "Sign in" },
  { label: "Create account" },
];

const NavigationMenuV2 = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <div className="bg-white">{children}</div>
));

NavigationMenuV2.displayName = NavigationMenuPrimitive.Root.displayName;

const LinkItem = ({ href = "#", label }: { href?: string; label: string }) => (
  <li className="flow-root">
    <a className="-m-2 block p-2 text-gray-500" href={href}>
      {label}
    </a>
  </li>
);

const FeaturedLinkMobile = ({
  altText,
  imageUrl,
  label,
}: {
  altText: string;
  imageUrl: string;
  label: string;
}) => (
  <div className="group relative text-sm">
    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
      <img
        alt={altText}
        className="object-cover object-center"
        src={imageUrl}
      />
    </div>
    <a className="mt-6 block font-medium text-gray-900" href="#">
      <span aria-hidden="true" className="absolute inset-0 z-10"></span>
      {label}
    </a>
    <p aria-hidden="true" className="mt-1">
      Shop now
    </p>
  </div>
);

const FeaturedLinkDesktop = ({ altText, imageUrl, label }: FeaturedLink) => (
  <div className="group relative text-base sm:text-sm">
    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
      <img
        alt={altText}
        className="object-cover object-center"
        src={imageUrl}
      />
    </div>
    <a className="mt-6 block font-medium text-gray-900" href="#">
      <span aria-hidden="true" className="absolute inset-0 z-10"></span>
      {label}
    </a>
    <p aria-hidden="true" className="mt-1">
      Shop now
    </p>
  </div>
);

const OpenMobileMenuButton = () => (
  <button
    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
    type="button"
  >
    <span className="absolute -inset-0.5"></span>
    <span className="sr-only">Open menu</span>
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
    >
      <path
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
);

const Logo = () => (
  <div className="ml-4 flex lg:ml-0">
    <a href="#">
      <span className="sr-only">Your Company</span>
      <img
        alt=""
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?shade=600"
      />
    </a>
  </div>
);

const TabContent: React.FC<TabContentProps> = ({
  featuredLinks,
  links,
  value,
}) => {
  return (
    <TabsContent value={value}>
      <div className="grid grid-cols-2 gap-x-4">
        {featuredLinks.map((link, index) => (
          <FeaturedLinkMobile key={index} {...link} />
        ))}
      </div>
      {links.map(({ links, sectionLabel }, index) => (
        <div className="mt-6" key={index}>
          <p
            className={`font-medium text-gray-900`}
            id={`${value}-clothing-heading-mobile`}
          >
            {sectionLabel}
          </p>
          <ul
            aria-labelledby={`${value}-clothing-heading-mobile`}
            className="mt-6 flex flex-col space-y-6"
            role="list"
          >
            {links.map((link, index) => (
              <LinkItem key={index} {...link} />
            ))}
          </ul>
        </div>
      ))}
    </TabsContent>
  );
};

const MobileNavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <Sheet key={"left"}>
    <SheetTrigger className="z-50">
      <OpenMobileMenuButton />
    </SheetTrigger>
    <SheetContent className="overflow-y-auto p-0" side={"left"}>
      <SheetHeader>
        <SheetTitle className="sr-only">Main Menu</SheetTitle>
      </SheetHeader>
      <Tabs className="px-4" defaultValue="women">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="women">Women</TabsTrigger>
          <TabsTrigger value="men">Men</TabsTrigger>
        </TabsList>
        <TabContent
          featuredLinks={womenFeaturedLinks}
          links={womenLinks}
          value="women"
        />
        <TabContent
          featuredLinks={menFeaturedLinks}
          links={mensLinks}
          value="men"
        />
      </Tabs>
      <div className="relative flex  w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
        <div className="mt-2"></div>

        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          {menuLinks.splice(0, 1).map(({ label }, index) => (
            <div className="flow-root">
              <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
                {label}
              </a>
            </div>
          ))}
        </div>
        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          {menuLinks.splice(2, 3).map(({ label }, index) => (
            <div className="flow-root">
              <a className="-m-2 block p-2 font-medium text-gray-900" href="#">
                {label}
              </a>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 px-4 py-6">
          <a className="-m-2 flex items-center p-2" href="#">
            <img
              alt=""
              className="block h-auto w-5 flex-shrink-0"
              src="https://tailwindui.com/img/flags/flag-canada.svg"
            />
            <span className="ml-3 block text-base font-medium text-gray-900">
              CAD
            </span>
            <span className="sr-only">, change currency</span>
          </a>
        </div>
      </div>
    </SheetContent>
  </Sheet>
));
MobileNavigationMenu.displayName = "MobileNavigationMenu";

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ children, className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const FlyoutMenus = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Women</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="relative w-[600px] bg-white md:w-[700px] lg:w-[800px]">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-6">
                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                  {womenFeaturedLinks.map((link, index) => (
                    <FeaturedLinkDesktop key={index} {...link} />
                  ))}
                </div>
                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                  {womenLinks.map(({ links, sectionLabel }, index) => (
                    <div key={index}>
                      <p
                        className="font-medium text-gray-900"
                        id={`heading-${index}`}
                      >
                        {sectionLabel}
                      </p>
                      <ul
                        aria-labelledby={`heading-${index}`}
                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                        role="list"
                      >
                        {links.map((link, index) => (
                          <li className="flex" key={index}>
                            <a className="hover:text-gray-800" href="#">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Men</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="relative w-[600px] bg-white md:w-[700px] lg:w-[800px]">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-6">
                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                  {menFeaturedLinks.map((link, index) => (
                    <FeaturedLinkDesktop key={index} {...link} />
                  ))}
                </div>
                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                  {mensLinks.map(({ links, sectionLabel }, index) => (
                    <div key={index}>
                      <p
                        className="font-medium text-gray-900"
                        id={`heading-${index}`}
                      >
                        {sectionLabel}
                      </p>
                      <ul
                        aria-labelledby={`heading-${index}`}
                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                        role="list"
                      >
                        {links.map((link, index) => (
                          <li className="flex" key={index}>
                            <a className="hover:text-gray-800" href="#">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Company
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Store
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const DesktopNavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <header className="relative bg-white">
    <TopBanner>Get free delivery on orders over $100</TopBanner>

    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          <MobileNavigationMenu />
          <Logo />

          {/* <!-- Flyout menus --> */}
          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
              <FlyoutMenus />
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <div className="flex space-x-1 lg:ml-6">
              <NavigationMenu3 />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
));
DesktopNavigationMenu.displayName = "DesktopNavigationMenu";

export {
  DesktopNavigationMenu,
  MobileNavigationMenu,
  NavigationMenuV2 as NavigationMenu,
};
