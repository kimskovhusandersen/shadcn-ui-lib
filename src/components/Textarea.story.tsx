import { Textarea } from "@/components/Textarea";
import { Meta } from "@storybook/react";

export default {
  component: Textarea,
} as Meta;

export function Default() {
  return <Textarea placeholder="Type your message here." />;
}
