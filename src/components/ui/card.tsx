import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const card = tv({
  slots: {
    base: "rounded-lg border bg-card text-card-foreground shadow-sm",
    header: "flex flex-col space-y-1.5 p-6",
    title: "text-2xl font-semibold leading-none tracking-tight",
    description: "text-sm text-muted-foreground",
    content: "p-6 pt-0",
    footer: "flex items-center p-6 pt-0",
  },
});

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { base } = card();
    return <div className={base({ className })} ref={ref} {...props} />;
  },
);
Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { header } = card();
  return <div className={header({ className })} ref={ref} {...props} />;
});
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const { title } = card();
  return <h3 className={title({ className })} ref={ref} {...props} />;
});
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { description } = card();
  return <p className={description({ className })} ref={ref} {...props} />;
});
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { content } = card();
  return <div className={content({ className })} ref={ref} {...props} />;
});
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { footer } = card();
  return <div className={footer({ className })} ref={ref} {...props} />;
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
