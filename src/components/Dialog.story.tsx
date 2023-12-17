import { StoryFn, Meta } from "@storybook/react";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  subcomponents: {
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Dialog {...args}>
    <DialogTrigger>Open Dialog</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Title Here</DialogTitle>
        <DialogDescription>Description here.</DialogDescription>
      </DialogHeader>
      {/* Additional content here */}
      <DialogFooter>{/* Footer content like buttons */}</DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {
  // Props for the Dialog
};
