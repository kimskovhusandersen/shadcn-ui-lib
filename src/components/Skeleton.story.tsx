import { StoryFn, Meta } from "@storybook/react";
import { Skeleton } from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as Meta;

const Template: StoryFn = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Props for the Skeleton, such as style or size
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  style: { width: "200px", height: "100px" },
};
