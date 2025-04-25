import React from "react";

type ExampleProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: ExampleProps) {
  return (
    <div className={`max-w-6xl xl:container mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
