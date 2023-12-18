import { Meta } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductOverview } from "./product-overview";

export default {
  component: ProductOverview,
  title: "Components/ProductOverview",
} as Meta;

export const Default = () => (
  <MemoryRouter initialEntries={["/products/basic-tee-6-pack"]}>
    <Routes>
      <Route element={<ProductOverview />} path="/products/:productId" />
    </Routes>
  </MemoryRouter>
);
