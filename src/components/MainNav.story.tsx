import { Meta } from "@storybook/react";
import { MainNav } from "./MainNav";

export default {
  component: MainNav,
  tags: ["autodocs"],
} as Meta<typeof MainNav>;

export const Default = MainNav.bind({
  props: {
    links: [
      { href: "#", label: "Home" },
      { href: "#", label: "About" },
      { href: "#", label: "Contact" },
    ],
  },
});
