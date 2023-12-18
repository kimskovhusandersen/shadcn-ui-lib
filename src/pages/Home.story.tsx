import { Meta } from "@storybook/react";
import { Home } from "./home";

export default {
  title: "Home",
  description: "Example dashboard app built using the components.",
} as Meta<typeof Home>;

export const Default = Home.bind({});
