import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { buttonVariants } from "./button";
import { cartItems } from "./cart";
import { CartItem } from "./cart-item";
import { CartSummary } from "./cart-summary";
import { Icons } from "./icons";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const accountLinks = [
  {
    icon: Icons.account(),
    title: "Profile",
    href: "/docs/primitives/alert-dialog",
  },
  {
    icon: Icons.account(),
    title: "Account",
    href: "/docs/primitives/hover-card",
  },
  {
    icon: Icons.account(),
    title: "Notifications",
    href: "/docs/primitives/progress",
  },
];

export function HeaderMenu() {
  return (
    <NavigationMenu anchor="right">
      <NavigationMenuList>
        <NavigationMenuItem className="hidden lg:ml-8 lg:flex">
          <NavigationMenuTrigger className="h-10 w-10 rounded-full p-0">
            <img
              alt=""
              className="block h-auto w-5 flex-shrink-0"
              src="https://tailwindui.com/img/flags/flag-canada.svg"
            />
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-10 w-10 rounded-full p-0">
            {Icons.account()}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex justify-around p-4">
              <a className={buttonVariants({ variant: "secondary" })} href="">
                Sign in
              </a>
              <a className={buttonVariants({ variant: "default" })} href="">
                Sign Up
              </a>
            </div>
            <Separator />
            <ul className="flex w-[250px] flex-col">
              {accountLinks.map((component) => (
                <ListItem {...component} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-10 w-10 rounded-full p-0">
            {Icons.favorite()}
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-10 w-10 rounded-full p-0">
            {Icons.cart()}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-full min-w-[300px]">
            <ScrollArea className="flex max-h-[500px] flex-col divide-y divide-gray-200 overflow-y-auto px-2">
              {cartItems.length === 0 ? (
                <p className="p-4">No items</p>
              ) : (
                <ul className="p-4">
                  {cartItems.map((line) => (
                    <CartItem {...line} />
                  ))}
                </ul>
              )}
            </ScrollArea>
            <CartSummary
              subtotalAmount={{ amount: "122", currencyCode: "EUR" }}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ children, className, icon, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "flex select-none space-x-2 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {icon}
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
