import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: "Click me",
  },
};
