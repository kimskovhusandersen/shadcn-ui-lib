import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn = (args) => (
  <form>
    <label>
      <Checkbox {...args} />
      <span className="ml-2">Option</span>
    </label>
  </form>
);

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
