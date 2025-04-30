import React from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export default function page() {
  return (
    <main>
      <div className="relative ">
        <Image
          alt="Image of the sub-foundtaion companion paws"
          width={1920}
          height={180}
          src="/media/image/image-6.jpg"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>
      <Wrapper layout="fullHeight" whiteSpace="medium">
        <section className="space-y-5">
          <span className="flex flex-col-reverse gap-1">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
              Companion Paws Canada (CPC)
            </h1>
            <p className="text-sm text-purple-500 font-mono">Mobile App</p>
          </span>
          <p className="text-xl/8 leading-relaxed max-w-4xl text-balance">
            Companion Paws is dedicated to supporting Canadians in need while
            providing a second chance for pets in rescues through The LifeLine
            Canada&#39;s (T.L.C.) Companion Paws Therapy Dog Adoption Program
            and a Certify Your Own Dog Program for ones with their own fully
            trained and temperament suitable dogs. TLC&#39;s Companion Paws
            programs are available in all Provinces across Canada
          </p>
        </section>
      </Wrapper>
    </main>
  );
}
