import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Toast",
  component: ToastAction,
} as Meta;

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <>
      <Button
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
        variant="outline"
      >
        Show Toast
      </Button>
    </>
  );
}
