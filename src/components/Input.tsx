import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva(``, {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input className={input({ className })} {...props} />
);
