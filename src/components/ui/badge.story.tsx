import { Meta, StoryFn } from "@storybook/react";
import { Badge } from "./badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

const Template: StoryFn = (args) => <Badge {...args}>Badge Text</Badge>;

export const Default = Template.bind({});
Default.args = {
  // Default props
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};
