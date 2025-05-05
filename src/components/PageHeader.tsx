import React from "react";
import Image, { StaticImageData } from "next/image";
import Wrapper from "./Wrapper";

interface PageHeaderProps {
  Banner: {
    URL: string | StaticImageData;
    ALT: string;
  };
  Title?: string;
  Description?: string;
}

export default function PageHeader({
  Banner,
  Title = "The Joke Tax Chronicles",
  Description = "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
}: PageHeaderProps) {
  return (
    <header>
      <div className="relative h-[50vh] max-h-[600px] min-h-[300px]">
        <Image
          fill
          priority
          alt={Banner.ALT || "Page header image"}
          src={Banner.URL}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white to-transparent"
          aria-hidden="true"
        />
      </div>

      <Wrapper
        width="container"
        height="screen"
        spacing="lg"
        className="space-y-24"
      >
        <article className="max-w-4xl">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {Title}
          </h1>
          <div className="pt-8 space-y-8">
            <p className="text-xl/8 text-muted-foreground leading-snug">
              {Description}
            </p>
          </div>
        </article>
      </Wrapper>
    </header>
  );
}
