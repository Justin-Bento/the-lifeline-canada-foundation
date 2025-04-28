import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <Wrapper layout="fullHeight" spacing="medium">
      <section className="">
        <h1>Canadian Crisis Centres</h1>
        <span className="block [&>p]:text-balance [&>p]:text-base/snug space-y-8 my-8">
          <p>
            NEW! Canada&#39;s 988 hotline, gives people access to suicide
            prevention services via call or text.
          </p>
          <p>
            People in every province and territory who are experiencing a mental
            health crisis and need immediate, real-time support can use the
            three-digit number. Similar to 911 for accessing fire, police and
            medical emergencies, 988: Suicide Crisis Helpline is a short,
            easy-to-remember number to get a quick response from coast to coast
            to coast, 24/7 and free of charge.
          </p>
          <p>
            Calls and texts to 988 will be directed to a network of partners in
            communities across the country offering suicide prevention services
            such as counselling. The 988 service is federally funded and
            available in English and French.
          </p>
        </span>
        <div className="relative w-full aspect-video">
          <Image
            fill
            src="/media/image/image-5.jpg"
            alt="sample image of main banner"
            className="rounded-3xl object-cover object-center"
          />
        </div>
      </section>
    </Wrapper>
  );
}
