import { tv } from "tailwind-variants";

export interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const box = tv({
  base: "rounded bg-white shadow-md",
});

export const Box: React.FC<BoxProps> = ({ children, className }) => {
  return <div className={box(className)}>{children}</div>;
};
