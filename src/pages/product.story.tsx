import { Meta } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Product } from "./product";

export default {
  component: Product,
  title: "Product",
} as Meta;

export const Default = () => (
  <MemoryRouter initialEntries={["/men/t-shirts"]}>
    <Routes>
      <Route element={<Product />} path="/:categorySlug/:productSlug" />
    </Routes>
  </MemoryRouter>
);
