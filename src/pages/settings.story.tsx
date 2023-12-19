import { Meta } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Settings from "./settings";

export default {
  title: "Settings",
  component: Settings,
} as Meta;

export const Default = () => (
  <MemoryRouter>
    <Routes>
      <Route element={<Settings />} path="*" />
    </Routes>
  </MemoryRouter>
);
