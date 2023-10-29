import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  `font-md ring-offset-background inline-flex items-center justify-center rounded-md border 
  text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        contained: ["border-transparent"],
        outlined: [],
        text: ["border-transparent"],
      },
      intent: {
        primary: [],
        secondary: [],
      },
      size: {
        sm: ["text-sm", "py-1", "px-2"],
        md: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "contained",
        className: "bg-primary-500 text-white hover:bg-primary-600",
      },
      {
        intent: "secondary",
        variant: "contained",
        className: "bg-secondary-500 text-white hover:bg-secondary-600",
      },
      {
        intent: "primary",
        variant: "text",
        className:
          "bg-white text-primary-500 hover:bg-primary-50 hover:text-primary-600",
      },
      {
        intent: "secondary",
        variant: "text",
        className:
          "bg-white text-secondary-500 hover:bg-secondary-50 hover:text-secondary-600",
      },
      {
        intent: "primary",
        variant: "outlined",
        className:
          "border-primary-500 bg-white text-primary-500 hover:bg-primary-50 hover:text-primary-600",
      },
      {
        intent: "secondary",
        variant: "outlined",
        className:
          "border-secondary-500 bg-white text-secondary-500 hover:bg-secondary-50 hover:text-secondary-600",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
  },
);

export interface ButtonProps extends VariantProps<typeof button> {
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  variant,
  buttonProps,
}) => {
  const { className, ...restButtonProps } = buttonProps;
  return (
    <button
      {...restButtonProps}
      className={button({
        variant,
        intent,
        size,
        className,
      })}
    />
  );
};
