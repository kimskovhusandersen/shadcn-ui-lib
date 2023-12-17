import { Meta } from "@storybook/react";
import { Separator } from "./separator";

export default {
  component: Separator,
} as Meta;

export const Horizontal = () => (
  <div className="flex space-x-4">
    <div className="h-24 w-24 rounded-md bg-gray-200" />
    <Separator orientation="horizontal" />
    <div className="h-24 w-24 rounded-md bg-gray-200" />
  </div>
);

export const Vertical = () => (
  <div className="flex space-x-4">
    <div className="h-24 w-24 rounded-md bg-gray-200" />
    <Separator orientation="vertical" />
    <div className="h-24 w-24 rounded-md bg-gray-200" />
  </div>
);
