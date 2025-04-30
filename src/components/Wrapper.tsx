import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Define props (extending HTMLDivElement attributes)
type WrapperProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof wrapperVariants>;

// Define layout variants using `cva`
const wrapperVariants = cva("mx-auto px-4 sm:px-6", {
  variants: {
    layout: {
      container: "max-w-6xl xl:container", // Tailwind's container + fallback
      fullHeight: "max-w-6xl xl:container min-h-dvh", // + full viewport height
      full: "w-full", // Full parent width
      screen: "w-screen", // Full viewport width
      prose: "max-w-prose", // Optimal text width
      none: "", // No constraints (just padding)
    },
    whiteSpace: {
      default: "my-0",
      small: "my-8",
      medium: "my-16",
      large: "my-24",
    },
  },
  defaultVariants: {
    layout: "container", // Default to constrained container
    whiteSpace: "default",
  },
});

export default function Wrapper({
  children,
  className,
  layout,
  whiteSpace,
  ...props
}: WrapperProps) {
  return (
    <div
      className={wrapperVariants({ layout, whiteSpace, className })}
      {...props}
    >
      {children}
    </div>
  );
}
