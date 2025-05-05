import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

// 1. Base PageHeader remains the same
function PageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-4", className)} {...props} />;
}

// 2. Banner component (unchanged)
function Banner({
  className,
  image,
  alt = "",
  ...props
}: React.ComponentProps<"div"> & {
  image: string | StaticImageData;
  alt?: string;
}) {
  return (
    <div
      className={cn("relative h-[50vh] min-h-[300px] w-full", className)}
      {...props}
    >
      <Image
        fill
        priority
        alt={alt}
        src={image}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

// 3. NEW: Wrapper component for content grouping
function Container({ children }: React.ComponentProps<"div">) {
  return <Wrapper>{children}</Wrapper>;
}

// 4. Headline component (now wrapped in Wrapper)
function Headline({
  className,
  children,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

// 5. Description component (now wrapped in Wrapper)
function Description({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "max-w-4xl space-y-8 text-xl/8 text-muted-foreground leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Compound component setup
PageHeader.Banner = Banner;
PageHeader.Container = Container;
PageHeader.Headline = Headline;
PageHeader.Description = Description;

export { PageHeader, Banner, Container, Headline, Description };
