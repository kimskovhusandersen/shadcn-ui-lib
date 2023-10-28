import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
  render: (props) => <Avatar {...props}>FM</Avatar>,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    alt: "Colm Tuite",
  },
};
