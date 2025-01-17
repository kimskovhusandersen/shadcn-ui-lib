import { tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex max-w-max items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "hover:bg-primary/80 border-transparent bg-primary text-primary-foreground shadow",
      secondary:
        "hover:bg-secondary/80 border-transparent bg-secondary text-secondary-foreground",
      destructive:
        "hover:bg-destructive/80 border-transparent bg-destructive text-destructive-foreground shadow",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={badgeVariants({ variant, className })} {...props} />;
}

export { Badge, badgeVariants };
