import { Meta, StoryFn } from "@storybook/react";
import Recover from "./recover";

export default {
  title: "Recover",
} as Meta<typeof Recover>;

export const Default: StoryFn = () => (
  <Recover
    action={{
      error: undefined,
      resetRequested: false,
    }}
  />
);

export const Error: StoryFn = () => (
  <Recover
    action={{
      error: "Invalid email address.",
      resetRequested: false,
    }}
  />
);

export const ResetRequested: StoryFn = () => (
  <Recover
    action={{
      error: undefined,
      resetRequested: true,
    }}
  />
);
