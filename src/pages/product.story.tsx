import { Meta } from "@storybook/react";
import { Product } from "./product";

export default {
  component: Product,
  title: "Components/Product",
} as Meta;

export const Default = () => <Product />;
