import { StoryFn, Meta } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  // Import other required components and styles
} from "./NavigationMenu";

export default {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  // Include other subcomponents if needed
} as Meta;

const Template: StoryFn = (args) => (
  <NavigationMenu {...args}>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu Item 1</NavigationMenuTrigger>
        <NavigationMenuContent>
          {/* Content for Menu Item 1 */}
        </NavigationMenuContent>
      </NavigationMenuItem>
      {/* Repeat for more menu items */}
    </NavigationMenuList>
    <NavigationMenuViewport />
    <NavigationMenuIndicator />
  </NavigationMenu>
);

export const Default = Template.bind({});
Default.args = {
  // Props for NavigationMenu
};
