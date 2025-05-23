import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define props (extending HTMLDivElement attributes)
type WrapperProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof wrapperVariants>;

// Define layout variants using `cva`
const wrapperVariants = cva("mx-auto px-4 sm:px-6", {
  variants: {
    // X-axis control (renamed from 'layout')
    width: {
      container: "max-w-6xl xl:container", // Tailwind's container + fallback
      fullHeight: "max-w-6xl xl:container min-h-dvh", // + full viewport height
      full: "w-full", // Full parent width
      screen: "w-screen", // Full viewport width
      prose: "max-w-prose", // Optimal text width
      none: "", // No constraints (just padding)
    },
    // Y-axis control (new)
    height: {
      default: "",
      screen: "min-h-dvh",
      full: "h-full",
    },
    spacing: {
      none: "py-0",
      sm: "py-8",
      md: "py-20",
      lg: "py-24",
    },
  },
  defaultVariants: {
    width: "container", // Default to constrained container
    spacing: "none",
    height: "default",
  },
});

export default function Wrapper({
  children,
  className,
  width,
  height,
  spacing,
  ...props
}: WrapperProps) {
  return (
    <div
      className={wrapperVariants({ width, height, spacing, className })}
      {...props}
    >
      {children}
    </div>
  );
}
