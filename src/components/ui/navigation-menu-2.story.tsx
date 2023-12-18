import { Meta } from "@storybook/react";
import { DesktopNavigationMenu, NavigationMenu } from "./navigation-menu-2";

export default {
  component: NavigationMenu,
  title: "Components/NavigationMenu2",
} as Meta;

export const Default = () => (
  <NavigationMenu>
    <DesktopNavigationMenu />
  </NavigationMenu>
);
