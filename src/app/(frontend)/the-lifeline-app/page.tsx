import React from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export default function page() {
  return (
    <main>
      <div className="relative w-full h-96">
        <Image
          fill
          alt=""
          src="/media/image/image-4.png"
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
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          The LifeLine Mobile App
        </h1>
        <span className="block max-w-4xl text-balance space-y-8 pt-8">
          <p className="text-xl/8 leading-snug">
            The LifeLine App is the National free Suicide Prevention and
            Awareness App that offers access and guidance to support for those
            suffering in crisis and those who have suffered the devastating loss
            of a loved one from suicide. The LifeLine App also provides
            awareness education and prevention strategies to guide people in
            crisis all across the Globe. The App was developed as a centralized
            hub to connect people with accredited resources in Canada and
            throughout the world.
          </p>
        </span>
      </Wrapper>
    </main>
  );
}
