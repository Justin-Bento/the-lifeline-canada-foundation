import React from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export default function page() {
  return (
    <main>
      <div className="relative ">
        <Image
          alt="Group of actionable words about volenteering."
          width={1920}
          height={180}
          src="/media/image/image-7.jpg"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>
      <Wrapper layout="fullHeight" whiteSpace="medium">
        <section className="space-y-5">
          <span className="flex flex-col-reverse gap-1">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              Volunteering with TLC is rewarding and fun!
            </h1>
            <p className="text-sm text-purple-500 font-mono">Get Involved</p>
          </span>
          <p className="text-xl/8 leading-relaxed max-w-4xl text-balance">
            We offer enthusiastic volunteers an opportunity to make a
            significant difference in the lives of Canadians in keeping with our
            vision: “To continue to lower the risk of suicide to where it is a
            rare event across the country and to build mental health resilience
            for all.” It is also an opportunity to gain important experience in
            specific vocational areas and/or with the non-profit sector.
          </p>
        </section>
      </Wrapper>
    </main>
  );
}
