import { addons } from "@storybook/manager-api";
import { themes, create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",

    brandTitle: "Finny UI",
    brandUrl: "http://localhost:6006",
    brandImage: "",
    brandTarget: "_self",
    appBg: "",
    appBorderColor: "#cccccc",
    appBorderRadius: 0,
    textColor: "",
    barTextColor: "",
    barBg: "",
    barSelectedColor: "",
  }),
});
