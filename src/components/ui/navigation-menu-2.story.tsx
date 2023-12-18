import { Meta } from "@storybook/react";
import {
  DesktopNavigationMenu,
  MobileNavigationMenu,
  NavigationMenu,
} from "./navigation-menu-2";

export default {
  component: NavigationMenu,
  title: "NavigationMenu2",
} as Meta;

export const Default = () => (
  <NavigationMenu>
    <MobileNavigationMenu />
    <DesktopNavigationMenu />
  </NavigationMenu>
);
