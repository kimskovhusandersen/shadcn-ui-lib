import { Meta } from "@storybook/react";
import { HeaderMenu } from "./header-menu";

export default {
  component: HeaderMenu,
  title: "Components/HeaderMenu",
} as Meta;

export const Default = () => (
  <div className="flex w-full justify-end">
    <HeaderMenu />
  </div>
);
