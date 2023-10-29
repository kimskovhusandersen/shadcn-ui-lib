import React, { FC, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva(`block w-full rounded-md border-gray-200 text-sm`, {
  variants: {
    intent: {
      primary: "focus:border-primary-500 focus-visible:ring-primary-500",
      secondary:
        "focus-visible:border-secondary-500 focus-visible:ring-secondary-500",
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-3 ",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface InputProps extends VariantProps<typeof input> {
  inputProps: Omit<InputHTMLAttributes<HTMLInputElement>, "placerholder">;
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
}

export const Input: FC<InputProps> = ({
  inputProps,
  intent,
  placeholder,
  size,
}) => {
  const { className, ...restInputProps } = inputProps || {};
  return (
    <input
      {...restInputProps}
      className={input({ className, size, intent })}
      placeholder={placeholder}
    />
  );
};
