import { Meta } from "@storybook/react";
import { Category } from "./category";

export default {
  title: "Category",
  description: "Example dashboard app built using the components.",
} as Meta<typeof Category>;

export const Default = Category.bind({});
