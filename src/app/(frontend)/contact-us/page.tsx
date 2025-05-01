import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      <div className="relative ">
        <Image
          alt="Group of actionable words about volenteering."
          width={1920}
          height={180}
          src="/media/image/image-8.png"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>
      <Wrapper
        width="container"
        height="screen"
        spacing="md"
        className="space-y-24"
      >
        <section className="space-y-5">
          <span className="flex flex-col-reverse gap-1">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              Contact Us
            </h1>
            <p className="text-sm text-purple-500 font-mono">Get Involved</p>
          </span>
          <p className="text-xl/8 leading-relaxed max-w-4xl text-balance">
            For non crisis questions and comments or to contact The LifeLine
            Canada Foundation about collaborating please use the contact form
            below.
          </p>
        </section>
      </Wrapper>
    </main>
  );
}
