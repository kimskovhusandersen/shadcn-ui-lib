import { forwardRef } from "react";
import { tv } from "tailwind-variants";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const input = tv({
  base: "border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
});

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input className={input(className)} ref={ref} type={type} {...props} />
    );
  },
);
Input.displayName = "Input";

export { Input };
