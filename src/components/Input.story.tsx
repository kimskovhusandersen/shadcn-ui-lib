import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {
  args: { placeholder: "Enter your name" },
};

export const Primary: StoryObj<typeof Input> = {
  args: {
    inputProps: {
      placeholder: "Enter your email",
    },
    intent: "primary",
  },
};

export const Secondary: StoryObj<typeof Input> = {
  args: {
    inputProps: {
      placeholder: "Enter your password",
    },
    intent: "secondary",
  },
};

export const Small: StoryObj<typeof Input> = {
  args: {
    inputProps: {
      placeholder: "Enter your phone number",
    },
    size: "sm",
  },
};

export const Medium: StoryObj<typeof Input> = {
  args: {
    inputProps: {
      placeholder: "Enter your address",
    },
    size: "md",
  },
};
