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
        <h1 className="">Hello, Get Involved Page.</h1>
      </Wrapper>
    </main>
  );
}
