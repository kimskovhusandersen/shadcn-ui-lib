import { Meta, StoryFn } from "@storybook/react";
import { Label } from "./Label";

export default {
  title: "Components/Label",
  component: Label,
} as Meta;

const Template: StoryFn = (args) => <Label {...args}>Label Text</Label>;

export const Default = Template.bind({});
Default.args = {
  // Props for the Label
};
