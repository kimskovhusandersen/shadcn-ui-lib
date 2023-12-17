import { Meta, StoryFn } from "@storybook/react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

export default {
  title: "Components/Alert",
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
} as Meta;

const Template: StoryFn = (args) => (
  <Alert {...args}>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Alert",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  children: "Destructive Alert",
};
