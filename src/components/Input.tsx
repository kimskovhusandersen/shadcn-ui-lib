import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva(`block w-full rounded-md border-gray-200 text-sm`, {
  variants: {
    intent: {
      primary: "focus:border-primary-500 focus:ring-primary-500",
      secondary: "focus:border-secondary-500 focus:ring-secondary-500",
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-3 ",
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

export interface InputProps extends VariantProps<typeof input> {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({ inputProps, intent, size }) => {
  const { className, ...restInputProps } = inputProps;
  return (
    <input {...restInputProps} className={input({ className, size, intent })} />
  );
};
