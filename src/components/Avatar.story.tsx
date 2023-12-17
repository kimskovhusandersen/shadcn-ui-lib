import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
} as Meta;

const Template: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage alt={args.alt} src={args.src} />
    <AvatarFallback delayMs={600}>Fallback Text</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {
  alt: "Profile Picture",
  src: "https://github.com/shadcn.png",
};
