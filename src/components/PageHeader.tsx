import React from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";

interface PageHeaderInterface {
  Banner: {
    URL: "string";
    ALT: "string";
  };
  Title: "string";
  Description: "string";
}

export default function PageHeader({
  Banner,
  Title,
  Description,
}: PageHeaderInterface) {
  return (
    <>
      <div className="relative w-full h-96">
        <Image
          fill
          alt={Banner.ALT}
          src={Banner.URL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>
      <Wrapper
        width="container"
        height="screen"
        spacing="lg"
        className="space-y-24"
      >
        <div className="">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            {Title || "The Joke Tax Chronicles"}
          </h1>
          <span className="block max-w-4xl text-balance space-y-8 pt-8">
            <p className="text-xl/8 text-muted-foreground leading-snug">
              {Description ||
                `Once upon a time, in a far-off land, there was a very lazy king who
spent all day lounging on his throne. One day, his advisors came to him
with a problem: the kingdom was running out of money.`}
            </p>
          </span>
        </div>
      </Wrapper>
    </>
  );
}
