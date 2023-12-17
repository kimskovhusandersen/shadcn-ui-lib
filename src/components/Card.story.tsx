import { Meta, StoryFn } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  subcomponents: {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Title of the Card</CardTitle>
      <CardDescription>Description of what's inside the card.</CardDescription>
    </CardHeader>
    <CardContent>Content of the card goes here.</CardContent>
    <CardFooter>Footer content here.</CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  // Props for the Card
};
