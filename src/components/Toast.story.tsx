import { Button } from "@/components/Button";
import { ToastAction } from "@/components/Toast";
import { useToast } from "@/hooks/use-toast";
import { Meta } from "@storybook/react";

export default {
  component: ToastAction,
} as Meta;

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
      variant="outline"
    >
      Add to calendar
    </Button>
  );
}
