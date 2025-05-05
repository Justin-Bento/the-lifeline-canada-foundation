import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

// Base container component
function PageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-8", className)} {...props} />;
}

// Banner with image and gradient overlay
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

// Headline/title component
function Headline({
  className,
  children,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

// Description text component
function Description({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "max-w-4xl space-y-8 pt-8 text-xl/8 text-muted-foreground leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Compound component with default layout
PageHeader.Banner = Banner;
PageHeader.Headline = Headline;
PageHeader.Description = Description;

export { PageHeader, Banner, Headline, Description };
