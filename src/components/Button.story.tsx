import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
      defaultValue: "contained",
    },
    intent: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
      defaultValue: "md",
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: "Click me",
  },
};

export const ContainedPrimarySmall = {
  args: {
    children: "Button",
    variant: "contained",
    intent: "primary",
    size: "sm",
  },
};

export const ContainedPrimaryMedium = {
  args: {
    children: "Button",
    variant: "contained",
    intent: "primary",
    size: "md",
  },
};
