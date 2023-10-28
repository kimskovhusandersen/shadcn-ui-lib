import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "border",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "font-md",
    "hover:opacity-90",
    "inline-flex",
    "items-center",
    "justify-center",
    "ring-offset-background",
    "rounded-md",
    "text-sm",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        contained: ["border-transparent"],
        outlined: [],
        text: ["border-transparent"],
      },
      color: {
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
        color: "primary",
        variant: "contained",
        class: ["bg-primary-500", "text-white", "hover:bg-primary-600"],
      },
      {
        color: "secondary",
        variant: "contained",
        class: ["bg-secondary-500", "text-white", "hover:bg-secondary-600"],
      },
      {
        color: "primary",
        variant: "text",
        class: [
          "text-primary-500",
          "bg-white",
          "hover:text-primary-600",
          "hover:bg-primary-50",
        ],
      },
      {
        color: "secondary",
        variant: "text",
        class: [
          "text-secondary-500",
          "bg-white",
          "hover:text-secondary-600",
          "hover:bg-secondary-50",
        ],
      },
      {
        color: "primary",
        variant: "outlined",
        class: [
          "text-primary-500",
          "border-primary-500",
          "bg-white",
          "hover:bg-primary-50",
          "hover:text-primary-600",
        ],
      },
      {
        color: "secondary",
        variant: "outlined",
        class: [
          "text-secondary-500",
          "border-secondary-500",
          "bg-white",
          "hover:bg-secondary-50",
          "hover:text-secondary-600",
        ],
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  color,
  size,
  variant,
  ...props
}) => (
  <button className={button({ variant, color, size, className })} {...props} />
);
