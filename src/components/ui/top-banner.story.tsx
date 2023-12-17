import { Meta } from "@storybook/react";
import { TopBanner } from "./top-banner";

export default {
  component: TopBanner,
  title: "Components/TopBanner",
} as Meta;

export const Default = () => (
  <TopBanner>Get free delivery on orders over $100</TopBanner>
);
