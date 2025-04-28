import React from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export default function page() {
  return (
    <main className="space-y-8 mb-16 min-h-dvh">
      <div className="relative w-full h-96">
        <Image
          fill
          alt=""
          src="/media/image/image-2.png"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>
      <Wrapper layout="fullHeight" spacing="medium">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Pattern Interruptions
        </h1>
        <span className="block max-w-3xl text-balance space-y-8 pt-8">
          <p className="">
            A Pattern Interrupt is a way to alter our mental, emotional, or
            behavioral state in order to break negative habits. Pattern
            interrupts offer an effective way to break negative cycles and
            regain control over our actions, thoughts, and emotions.
          </p>
          <p className="">
            By recognizing our patterns, we can intervene and create new
            pathways for more productive thoughts, behaviors, and emotions and
            make lasting changes in our lives.
          </p>
        </span>
      </Wrapper>
    </main>
  );
}
