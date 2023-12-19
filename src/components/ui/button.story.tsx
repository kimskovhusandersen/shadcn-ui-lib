import { Meta, StoryObj } from "@storybook/react";
import { ChevronRight } from "lucide-react";
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
export const Icon: StoryObj<ButtonProps> = {
  args: {
    children: <ChevronRight className="h-4 w-4" />,
    className: "rounded-full",
    size: "icon",
    variant: "outline",
  },
};
