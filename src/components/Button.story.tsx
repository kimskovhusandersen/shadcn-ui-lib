import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "" },
    size: { control: "" },
  },
  render: (props) => <Button {...props}>Label</Button>,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};
