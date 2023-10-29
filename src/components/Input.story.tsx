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
