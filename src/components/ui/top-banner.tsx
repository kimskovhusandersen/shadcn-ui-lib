import * as LabelPrimitive from "@radix-ui/react-label";
import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const topBanner = tv({
  base: "flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-primary-foreground sm:px-6 lg:px-8",
});

const TopBanner = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof topBanner>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={topBanner({ className })}
    ref={ref}
    {...props}
  />
));
TopBanner.displayName = LabelPrimitive.Root.displayName;

export { TopBanner };
